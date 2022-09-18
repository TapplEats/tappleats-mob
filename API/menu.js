import { isEqual } from 'date-fns'
import { getFirestoreInstance } from '../config/firebase'

export const createMenu = async (userId, urlSuffix, menuData) => {
  try {
    const db = await getFirestoreInstance()
    const user = await db.collection('menus').doc(userId).get()
    if (!user.exists) {
      db.collection('menus').doc(userId).set({
        userId,
        urlSuffix,
        ...menuData,
      })
    }
    return user.exists
  } catch (err) {
    throw new Error(err.message)
  }
}

export const getMenuById = async menuId => {
  let menuData
  let menuRes

  try {
    const db = await getFirestoreInstance()
    menuRes = await db.collection('menus').doc(menuId).get()
    menuData = menuRes.data()
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
    throw new Error(err)
  }

  return menuData
}

export const getMenuBySuffix = async suffix => {
  let menuRes = []

  try {
    const db = await getFirestoreInstance()
    const menu = await db.collection('menus').where('urlSuffix', '==', suffix).get()
    if (menu.empty) {
      // eslint-disable-next-line
      console.log('No matching documents.')
      return false
    }
    menu.forEach(doc => {
      menuRes = [...menuRes, doc.data()]
    })
  } catch (err) {
    throw new Error(err)
  }

  return menuRes[0]
}

export const updateMenu = async (menuId, updateData) => {
  try {
    const db = await getFirestoreInstance()
    await db.collection('menus').doc(menuId).update(updateData)
  } catch (err) {
    throw new Error(err.message)
  }
}

export const deleteMenuByuserId = async userId => {
  try {
    const db = await getFirestoreInstance()
    const user = await db.collection('menus').doc(userId).get()
    if (user.exists) {
      await db.collection('menus').doc(userId).delete()
    } else {
      // eslint-disable-next-line
      console.log('menu doesnt exist');
    }
    return true
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
    throw new Error(err.message)
  }
}

export const addSection = async (menuId, section) => {
  let newSections
  try {
    const db = await getFirestoreInstance()
    const menu = await db.collection('menus').doc(menuId).get()
    const menuSections = [...menu.data().sections]
    if (menuSections) {
      newSections = [...menuSections, section]
      await db.collection('menus').doc(menuId).update({ sections: newSections })
    } else {
      newSections = [section]
      await db.collection('menus').doc(menuId).update({ sections: newSections })
    }
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateSection = async (menuId, section) => {
  try {
    const db = await getFirestoreInstance()
    const menu = await db.collection('menus').doc(menuId).get()
    const menuSections = [...menu.data().sections]
    const updatedSectionIndex = menuSections.findIndex(menuSection => {
      const dbMenuSectionAddedOn = menuSection.addedOn.toDate()
      const sectionAddedOn = section.addedOn.seconds ? section.addedOn.toDate() : section.addedOn
      return isEqual(dbMenuSectionAddedOn, sectionAddedOn)
    })
    menuSections[updatedSectionIndex].title = section.title
    menuSections[updatedSectionIndex].active = section.active
    menuSections[updatedSectionIndex].originallyActive = section.originallyActive
    if (section.type === 'title') {
      menuSections[updatedSectionIndex].subTitle = section.subTitle
    } else if (section.type === 'link') {
      menuSections[updatedSectionIndex].link = section.link
    } else {
      menuSections[updatedSectionIndex].description = section.description
      menuSections[updatedSectionIndex].note = section.note
      menuSections[updatedSectionIndex].image = section.image
    }
    await db.collection('menus').doc(menuId).update({
      sections: menuSections,
    })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const addItem = async (menuId, item) => {
  let newItems
  try {
    const db = await getFirestoreInstance()
    const menu = await db.collection('menus').doc(menuId).get()
    const menuSections = [...menu.data().sections]
    const addedItemSectionIndex = menuSections.findIndex(menuSection => menuSection.id === item.section)
    const sectionItems = menuSections[addedItemSectionIndex].items
    if (sectionItems) {
      newItems = [...sectionItems, item]
      menuSections[addedItemSectionIndex].items = newItems
      await db.collection('menus').doc(menuId).update({ sections: menuSections })
    } else {
      newItems = [item]
      menuSections[addedItemSectionIndex].items = newItems
      await db.collection('menus').doc(menuId).update({ sections: menuSections })
    }
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateItem = async (menuId, section, item) => {
  const sectionAddedOn = section.addedOn.seconds ? section.addedOn.toDate() : section.addedOn
  const itemAddedOn = item.addedOn.seconds ? item.addedOn.toDate() : item.addedOn
  try {
    const db = await getFirestoreInstance()
    const menu = await db.collection('menus').doc(menuId).get()
    const menuSections = [...menu.data().sections]
    const updatedItemSectionIndex = menuSections.findIndex(menuSection => {
      const dbMenuSectionAddedOn = menuSection.addedOn.toDate()
      return isEqual(dbMenuSectionAddedOn, sectionAddedOn)
    })
    const sectionItems = [...menuSections[updatedItemSectionIndex].items]
    const updatedItemIndex = sectionItems.findIndex(sectionItem => {
      const dbSectionItemAddedOn = sectionItem.addedOn.toDate()
      return isEqual(dbSectionItemAddedOn, itemAddedOn)
    })
    if (sectionItems[updatedItemIndex].section !== item.section) {
      const updatedItems = sectionItems.filter(sectionItem => {
        const dbSectionItemAddedOn = sectionItem.addedOn.toDate()
        return !isEqual(dbSectionItemAddedOn, itemAddedOn)
      })
      menuSections[updatedItemSectionIndex].items = updatedItems
      const newSectionIndex = menuSections.findIndex(menuSection => menuSection.id === item.section)
      let newSectionItems
      if (menuSections[newSectionIndex].items) {
        newSectionItems = [...menuSections[newSectionIndex].items, item]
      } else {
        newSectionItems = [item]
      }
      menuSections[newSectionIndex].items = newSectionItems
      await db.collection('menus').doc(menuId).update({
        sections: menuSections,
      })
    } else {
      sectionItems[updatedItemIndex].title = item.title
      sectionItems[updatedItemIndex].description = item.description
      sectionItems[updatedItemIndex].note = item.note
      sectionItems[updatedItemIndex].price = item.price
      sectionItems[updatedItemIndex].active = item.active
      sectionItems[updatedItemIndex].originallyActive = item.originallyActive
      sectionItems[updatedItemIndex].soldout = item.soldout
      sectionItems[updatedItemIndex].ingredients = item.ingredients
      sectionItems[updatedItemIndex].preparationTime = item.preparationTime
      // sectionItems[updatedItemIndex].discount = item.discount
      sectionItems[updatedItemIndex].image = item.image
      sectionItems[updatedItemIndex].tags = item.tags
      menuSections[updatedItemSectionIndex].items = sectionItems
      await db.collection('menus').doc(menuId).update({
        sections: menuSections,
      })
    }
  } catch (err) {
    throw new Error(err.message)
  }
}

export const createUserMenu = async (menu, userUID, urlSuffix) => {
  const menuData = {
    sections: menu.sections || [],
    menuTags: menu.menuTags || [],
    menuIngredients: menu.menuIngredients || [],
  }
  const menuExists = await createMenu(userUID, urlSuffix, menuData)
  return { menuExists, urlSuffix }
}

export const deleteSectionByuserId = async (userId, section) => {
  try {
    const db = await getFirestoreInstance()
    const menu = await db.collection('menus').doc(userId).get()
    const menuSections = [...menu.data().sections]
    const updatedSections = menuSections.filter(menuSection => {
      const dbMenuSectionAddedOn = menuSection.addedOn.toDate()
      const sectionAddedOn = section.addedOn.seconds ? section.addedOn.toDate() : section.addedOn
      return !isEqual(dbMenuSectionAddedOn, sectionAddedOn)
    })
    await db.collection('menus').doc(userId).update({
      sections: updatedSections,
    })
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
    throw new Error(err.message)
  }
}

export const deleteItemByuserId = async (userId, section, item) => {
  try {
    const db = await getFirestoreInstance()
    const menu = await db.collection('menus').doc(userId).get()
    const menuSections = [...menu.data().sections]
    const deletedItemSectionIndex = menuSections.findIndex(menuSection => {
      const dbMenuSectionAddedOn = menuSection.addedOn.toDate()
      const sectionAddedOn = section.addedOn.seconds ? section.addedOn.toDate() : section.addedOn
      return isEqual(dbMenuSectionAddedOn, sectionAddedOn)
    })
    const sectionItems = [...menuSections[deletedItemSectionIndex].items]
    const updatedItems = sectionItems.filter(sectionItem => {
      const dbSectionItemAddedOn = sectionItem.addedOn.toDate()
      const itemAddedOn = item.addedOn.seconds ? item.addedOn.toDate() : item.addedOn
      return !isEqual(dbSectionItemAddedOn, itemAddedOn)
    })
    menuSections[deletedItemSectionIndex].items = updatedItems
    await db.collection('menus').doc(userId).update({
      sections: menuSections,
    })
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
    throw new Error(err.message)
  }
}

export const updateMenuIngredients = async (menuId, ingredients) => {
  try {
    const db = await getFirestoreInstance()
    await db.collection('menus').doc(menuId).update({ menuIngredients: ingredients })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateMenuTags = async (menuId, tag) => {
  let newTags
  try {
    const db = await getFirestoreInstance()
    const menu = await db.collection('menus').doc(menuId).get()
    const { menuTags } = menu.data()
    if (menuTags && menuTags.length > 0) {
      newTags = [...menuTags, tag]
      await db.collection('menus').doc(menuId).update({ menuTags: newTags })
    } else {
      newTags = tag
      await db.collection('menus').doc(menuId).update({ menuTags: [newTags] })
    }
  } catch (err) {
    throw new Error(err.message)
  }
}

export const createMenuTag = async (userId, tagData) => {
  try {
    const db = await getFirestoreInstance()
    const addedTag = await db.collection('menus').doc(userId)
      .collection('tags')
      .add({
        userId,
        ...tagData,
      })
    return addedTag.id
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateMenuTagCount = async (menuId, tagsArray) => {
  try {
    const db = await getFirestoreInstance()
    const menu = await db.collection('menus').doc(menuId).get()
    const { menuTags } = menu.data()
    let tagIndex = null
    tagsArray.map(tag => {
      tagIndex = menuTags.findIndex(item => item.value === tag)
      menuTags[tagIndex].count += 1
      return true
    })
    await db.collection('menus').doc(menuId).update({ menuTags })
  } catch (err) {
    throw new Error(err.message)
  }
}

// export const getMenuTagByValue = async (menuId, tagValue) => {
//   try {
//     const db = await getFirestoreInstance()
//     const menu = await db.collection('menus').doc(menuId).get()
//     const { menuTags } = menu.data()
//     const existingTag = menuTags && menuTags.length > 0 ? menuTags.find(tag => tag.value === tagValue) : false
//     return existingTag
//   } catch (err) {
//     throw new Error(err.message)
//   }
// }

export const getMenuTagByValue = async (userId, tagValue) => {
  let tagRes
  let allTags = []

  try {
    const db = await getFirestoreInstance()
    tagRes = await db.collection('menus').doc(userId)
      .collection('tags')
      .where('value', '==', tagValue)
      .get()
    if (tagRes.empty) {
      // eslint-disable-next-line
      console.log('No matching documents.')
      allTags = null
    } else {
      tagRes.forEach(doc => {
        allTags = [...allTags, doc.data()]
      })
    }
  } catch (err) {
    throw new Error(err)
  }

  return allTags
}

export const getMenuTags = async userId => {
  let tags = []
  let tagData
  let tagsRes

  try {
    const db = await getFirestoreInstance()
    tagsRes = await db.collection('menus').doc(userId)
      .collection('tags')
      .orderBy('value', 'desc')
      .get()
    if (tags.empty) {
      // eslint-disable-next-line
      console.log('No matching documents.')
    } else {
      tagsRes.forEach(tag => {
        tagData = tag.data()
        tagData.id = tag.id
        tags = [...tags, tagData]
      })
    }
  } catch (err) {
    throw new Error(err)
  }

  return tags
}

export const getMenuTagsBySuffix = async suffix => {
  let menuRes = []
  let settingsRes = null

  try {
    const db = await getFirestoreInstance()
    const menu = await db.collection('menus').where('urlSuffix', '==', suffix).get()
    if (menu.empty) {
      // eslint-disable-next-line
      console.log('No matching documents.')
      return false
    }
    menu.forEach(doc => {
      menuRes = [...menuRes, doc.id]
    })
    const cardId = menuRes[0]
    settingsRes = await getMenuTags(cardId)
  } catch (err) {
    throw new Error(err)
  }

  return settingsRes
}

export const deleteMenuTagById = async (userId, tagId) => {
  try {
    const db = await getFirestoreInstance()
    const tag = await db.collection('menus').doc(userId)
      .collection('tags')
      .doc(tagId)
      .get()
    if (tag.exists) {
      await db.collection('menus').doc(userId)
        .collection('tags')
        .doc(tagId)
        .delete()
    } else {
      // eslint-disable-next-line
      console.log('tag doesnt exist');
    }
    return true
  } catch (err) {
    throw new Error(err.message)
  }
}

export const getMenuSettings = async userId => {
  let settings
  let settingsData = null
  let settingsDocId = null

  try {
    const db = await getFirestoreInstance()
    const settingsDoc = await db.collection('cards').doc(userId)
      .collection('menuSettings')
      .get()
    if (settingsDoc.docs && settingsDoc.docs.length > 0) {
      settingsDoc.docs.forEach(doc => {
        settingsDocId = doc.id
      })
      settings = await db.collection('cards').doc(userId)
        .collection('menuSettings')
        .doc(settingsDocId)
        .get()
      settingsData = settings.data()
    }
  } catch (err) {
    throw new Error(err)
  }

  return settingsData
}

export const getMenuSettingsBySuffix = async suffix => {
  let menuRes = []
  let settingsRes = null

  try {
    const db = await getFirestoreInstance()
    const menu = await db.collection('menus').where('urlSuffix', '==', suffix).get()
    if (menu.empty) {
      // eslint-disable-next-line
      console.log('No matching documents.')
      return false
    }
    menu.forEach(doc => {
      menuRes = [...menuRes, doc.id]
    })
    const cardId = menuRes[0]
    settingsRes = await getMenuSettings(cardId)
  } catch (err) {
    throw new Error(err)
  }

  return settingsRes
}

export const updateMenuSettings = async (userId, settingsData) => {
  let settingsDocId = null
  try {
    const db = await getFirestoreInstance()
    const settingsDoc = await db.collection('cards').doc(userId)
      .collection('menuSettings')
      .get()
    if (settingsDoc.docs && settingsDoc.docs.length > 0) {
      settingsDoc.docs.forEach(doc => {
        settingsDocId = doc.id
      })
    }
    if (settingsDocId) {
      await db.collection('cards').doc(userId)
        .collection('menuSettings')
        .doc(settingsDocId)
        .update(settingsData)
    } else {
      const addedSettings = await db.collection('cards').doc(userId)
        .collection('menuSettings')
        .add({
          userId,
          ...settingsData,
        })
      return addedSettings
    }
    return true
  } catch (err) {
    throw new Error(err.message)
  }
}
