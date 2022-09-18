import { isEqual } from 'date-fns'
import { getFirestoreInstance } from '../config/firebase'
import { defaultSettings } from '../utilities/appVars'

export const createCard = async (userId, cardData) => {
  try {
    const db = await getFirestoreInstance()
    const user = await db.collection('cards').doc(userId).get()
    if (!user.exists) {
      db.collection('cards').doc(userId).set({
        userId,
        ...cardData,
      })
    }
    return user.exists
  } catch (err) {
    throw new Error(err.message)
  }
}

export const getCardBySuffix = async suffix => {
  let cardRes = []

  try {
    const db = await getFirestoreInstance()
    const cards = await db.collection('cards').where('urlSuffix', '==', suffix).get()
    if (cards.empty) {
      // eslint-disable-next-line
      console.log('No matching documents.')
      return false
    }
    cards.forEach(doc => {
      cardRes = [...cardRes, doc.data()]
    })
  } catch (err) {
    throw new Error(err)
  }

  return cardRes[0]
}

export const getCardSettingsBySuffix = async suffix => {
  let cardRes = []

  try {
    const db = await getFirestoreInstance()
    const cards = await db.collection('cards').where('urlSuffix', '==', suffix).get()
    if (cards.empty) {
      // eslint-disable-next-line
      console.log('No matching documents.')
      return false
    }
    cards.forEach(doc => {
      cardRes = [...cardRes, doc.data()]
    })
  } catch (err) {
    throw new Error(err)
  }

  return cardRes[0].settings
}

export const getCards = async () => {
  let cards = []
  let cardData
  let cardsRes

  try {
    const db = await getFirestoreInstance()
    cardsRes = await db.collection('cards').orderBy('userId').get()
    cardsRes.forEach(card => {
      cardData = card.data()
      cardData.id = card.id
      cards = [...cards, cardData]
    })
  } catch (err) {
    throw new Error(err)
  }

  return cards
}

export const getCardById = async cardId => {
  let cardData
  let cardRes

  try {
    const db = await getFirestoreInstance()
    cardRes = await db.collection('cards').doc(cardId).get()
    cardData = cardRes.data()
  } catch (err) {
    throw new Error(err)
  }

  return cardData
}

export const getCardBySecretCode = async secretCode => {
  let cardRes = []

  try {
    const db = await getFirestoreInstance()
    const cards = await db.collection('cards').where('accountSecret', '==', secretCode).get()
    if (cards.empty) {
      // eslint-disable-next-line
      console.log('No matching documents.')
      return false
    }
    cards.forEach(doc => {
      cardRes = [...cardRes, doc.data()]
    })
  } catch (err) {
    throw new Error(err)
  }

  return cardRes[0]
}

export const updateCard = async (cardId, updateData) => {
  try {
    const db = await getFirestoreInstance()
    await db.collection('cards').doc(cardId).update(updateData)
  } catch (err) {
    throw new Error(err.message)
  }
}

export const setCardSettings = async (cardId, settings, defaultColorBool) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardSettings = card.data().settings
    const cardToTheme = card.data().defaultLinksToTheme || false
    await db.collection('cards').doc(cardId).update({ settings: { ...cardSettings, ...settings }, defaultLinksToTheme: typeof defaultColorBool === 'undefined' ? cardToTheme : defaultColorBool })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const changeUserProfileCreatedMethod = async userId => {
  try {
    const db = await getFirestoreInstance()
    await db.collection('cards').doc(userId).update({ createdBy: null })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const countCardClicks = async suffix => {
  let cardRes = []
  let clicked

  try {
    const db = await getFirestoreInstance()
    const cards = await db.collection('cards').where('urlSuffix', '==', suffix).get()
    if (cards.empty) {
      // eslint-disable-next-line
      console.log('No matching documents.')
      return false
    }
    cards.forEach(doc => {
      cardRes = [...cardRes, doc.data()]
    })
    clicked = cardRes[0].clickedNo || 0
    const cardId = cardRes[0].userId
    await db.collection('cards').doc(cardId).update({ clickedNo: clicked + 1 })
  } catch (err) {
    throw new Error(err.message)
  }
  return clicked + 1
}

export const updateProfileVisitsBySuffix = async suffix => {
  let cardRes = []
  let cardIds = []

  try {
    const db = await getFirestoreInstance()
    const cards = await db.collection('cards').where('urlSuffix', '==', suffix).get()
    if (cards.empty) {
      // eslint-disable-next-line
      console.log('No matching documents.')
      return false
    }
    cards.forEach(doc => {
      cardRes = [...cardRes, doc.data()]
      cardIds = [...cardIds, doc.id]
    })
    const cardId = cardIds[0]
    const cardVisits = cardRes[0].visits || 0
    await db.collection('cards').doc(cardId).update({ visits: cardVisits + 1 })
  } catch (err) {
    throw new Error(err)
  }

  return cardRes[0].settings
}

export const setTeamSettings = async (cardId, settings, defaultColorBool) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const { teamData } = card.data()
    const teamSettings = teamData.settings
    const cardToTheme = card.data().teamData.defaultLinksToTheme || false
    await db.collection('cards').doc(cardId).update({
      teamData: {
        ...teamData,
        settings: {
          ...teamSettings,
          ...settings,
        },
        defaultLinksToTheme: typeof defaultColorBool === 'undefined' ? cardToTheme : defaultColorBool,
      },
    })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateProfileActivity = async (cardId, activeState) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardSettings = card.data().settings
    await db.collection('cards').doc(cardId).update({ settings: { ...cardSettings, active: activeState } })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const disableChildInvitationInParent = async (cardId, childInvitationCode, userId) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const { childInvitations } = card.data()
    const childInvitationIndex = childInvitations.findIndex((obj => obj.code === childInvitationCode))
    childInvitations[childInvitationIndex].used = true
    childInvitations[childInvitationIndex].usedBy = userId
    childInvitations[childInvitationIndex].usedOn = new Date()
    await db.collection('cards').doc(cardId).update({
      childInvitations,
    })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const countLinkClicks = async (suffix, linkUrl) => {
  let cardRes = []
  try {
    const db = await getFirestoreInstance()
    const cards = await db.collection('cards').where('urlSuffix', '==', suffix).get()
    if (cards.empty) {
      // eslint-disable-next-line
      console.log('No matching documents.')
      return false
    }
    cards.forEach(doc => {
      cardRes = [...cardRes, doc.data()]
    })
    const { links, userId } = cardRes[0]
    const linkIndex = links.findIndex((link => link.link === linkUrl))

    if (links[linkIndex].clicked) {
      links[linkIndex].clicked += 1
    } else {
      links[linkIndex].clicked = 1
    }

    await db.collection('cards').doc(userId).update({
      links,
    })
    return true
  } catch (err) {
    throw new Error(err.message)
  }
}

export const countTeamMemberLinkClicks = async (memberId, masterInvitation, linkUrl) => {
  let cardRes
  try {
    const db = await getFirestoreInstance()
    const masterCards = await db.collection('cards').where('invitationCode', '==', masterInvitation).get()
    masterCards.forEach(masterCard => {
      cardRes = masterCard.data()
    })
    const { teamData, userId } = cardRes
    const masterId = userId
    const clickedLink = teamData.links.find(link => link.link === linkUrl)
    const clickedLinkIndex = teamData.links.findIndex(link => link.link === linkUrl)
    const { memberClicks } = clickedLink
    const linkClicks = memberClicks.find(clickObj => clickObj.id === memberId)
    const linkClicksIndex = memberClicks.findIndex(clickObj => clickObj.id === memberId)
    if (linkClicks === undefined && linkClicksIndex === -1) {
      teamData.links[clickedLinkIndex].memberClicks.push({
        id: memberId,
        clicked: 1,
      })
    } else {
      teamData.links[clickedLinkIndex].memberClicks[linkClicksIndex].clicked += 1
    }
    // const { clicked } = linkClicks
    await db.collection('cards').doc(masterId).update({
      teamData: {
        ...teamData,
        links: [
          ...teamData.links,
        ],
      },
    })
    return true
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateConnections = async (cardId, connection) => {
  let newConnections
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardConnections = card.data().connections
    if (cardConnections) {
      newConnections = [...cardConnections, connection]
      await db.collection('cards').doc(cardId).update({ connections: newConnections })
    } else {
      newConnections = connection
      await db.collection('cards').doc(cardId).update({ connections: [newConnections] })
    }
  } catch (err) {
    throw new Error(err.message)
  }
}

export const removeConnection = async (cardId, addedOn) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardConnections = card.data().connections
    const removeIndex = cardConnections.findIndex(item => {
      const dbConnectionDate = item.addedOn.seconds ? item.addedOn.toDate() : item.addedOn
      const selectedConnectionDate = addedOn.seconds ? addedOn.toDate() : addedOn
      return isEqual(dbConnectionDate, selectedConnectionDate)
    })
    cardConnections.splice(removeIndex, 1)
    await db.collection('cards').doc(cardId).update({ connections: cardConnections })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const checkConnectionExists = async (cardId, connectionEmail) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardConnections = card.data().connections
    if (cardConnections) {
      return cardConnections.find(connection => connection.email === connectionEmail)
    }
    return null
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateConnectionOffersByEmail = async (cardId, connectionEmail, newOffer, offerTags) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardConnections = card.data().connections
    const connectionIndex = cardConnections.findIndex(item => item.email === connectionEmail)
    const connectionOffers = cardConnections[connectionIndex].offers
    const connectionTags = cardConnections[connectionIndex].tags || []
    const newTagsArray = [...new Set([...connectionTags, ...offerTags])]
    cardConnections[connectionIndex].latestOfferClaimedOn = newOffer.offerClaimedOn
    cardConnections[connectionIndex].latestOfferCode = newOffer.offerCode
    cardConnections[connectionIndex].latestOfferId = newOffer.offerId
    cardConnections[connectionIndex].tags = newTagsArray
    connectionOffers.push(newOffer)
    await db.collection('cards').doc(cardId).update({ connections: cardConnections })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateOffers = async (cardId, offer) => {
  let newOffers
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardOffers = card.data().offers
    if (cardOffers) {
      newOffers = [...cardOffers, offer]
      await db.collection('cards').doc(cardId).update({ offers: newOffers })
    } else {
      newOffers = offer
      await db.collection('cards').doc(cardId).update({ offers: [newOffers] })
    }
  } catch (err) {
    throw new Error(err.message)
  }
}

export const removeOffer = async (cardId, addedOn) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardOffers = card.data().offers
    const removeIndex = cardOffers.findIndex(item => {
      const dbOfferDate = item.addedOn.seconds ? item.addedOn.toDate() : item.addedOn
      const selectedOfferDate = addedOn.seconds ? addedOn.toDate() : addedOn
      return isEqual(dbOfferDate, selectedOfferDate)
    })
    cardOffers.splice(removeIndex, 1)
    await db.collection('cards').doc(cardId).update({ offers: cardOffers })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateOffersSettings = async (cardId, settings) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const { offersSettings } = card.data()
    await db.collection('cards').doc(cardId).update({ offersSettings: { ...offersSettings, ...settings } })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateSortedOffers = async (cardId, newOffers) => {
  try {
    const db = await getFirestoreInstance()
    await db.collection('cards').doc(cardId).update({ offers: newOffers })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateOfferLimit = async (cardId, offer) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardOffers = card.data().offers
    const offerIndex = cardOffers.findIndex(item => item.offerId === offer.offerId)
    cardOffers[offerIndex].limit -= 1
    await db.collection('cards').doc(cardId).update({ offers: cardOffers })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateTags = async (cardId, tag) => {
  let newTags
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const { offerTags } = card.data()
    if (offerTags) {
      newTags = [...offerTags, tag]
      await db.collection('cards').doc(cardId).update({ offerTags: newTags })
    } else {
      newTags = tag
      await db.collection('cards').doc(cardId).update({ offerTags: [newTags] })
    }
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateTagCount = async (cardId, tagsArray) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardTags = card.data().offerTags
    let tagIndex = null
    tagsArray.map(tag => {
      tagIndex = cardTags.findIndex(item => item.value === tag)
      cardTags[tagIndex].count += 1
      return true
    })
    await db.collection('cards').doc(cardId).update({ offerTags: cardTags })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const getTagByValue = async (cardId, tagValue) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardTags = card.data().offerTags
    const existingTag = cardTags && cardTags.length > 0 ? cardTags.find(tag => tag.value === tagValue) : false
    return existingTag
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateFollowers = async (cardId, follower) => {
  let newFollowers
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardFollowers = card.data().followers
    const followerExists = cardFollowers && cardFollowers.some(cardFollower => cardFollower.userId === follower.userId)
    if (cardFollowers && !followerExists) {
      newFollowers = [...cardFollowers, follower]
      await db.collection('cards').doc(cardId).update({ followers: newFollowers })
    }
    if (!cardFollowers && !followerExists) {
      newFollowers = follower
      await db.collection('cards').doc(cardId).update({ followers: [newFollowers] })
    }
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateFollowing = async (cardId, following) => {
  let newFollowing
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardFollowing = card.data().following
    const followingExists = cardFollowing && cardFollowing.some(cardFollower => cardFollower.userId === following.userId)
    if (cardFollowing && !followingExists) {
      newFollowing = [...cardFollowing, following]
      await db.collection('cards').doc(cardId).update({ following: newFollowing })
    }
    if (!cardFollowing && !followingExists) {
      newFollowing = following
      await db.collection('cards').doc(cardId).update({ following: [newFollowing] })
    }
  } catch (err) {
    throw new Error(err.message)
  }
}

export const getConnectionByVcard = async (cardId, vCardFile) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardConnections = card.data().connections
    const connection = cardConnections.find(item => item.vCardFile === vCardFile)
    return connection
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateConnectionByVcard = async (cardId, vCardFile, connectionData) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardConnections = card.data().connections
    const connectionIndex = cardConnections.findIndex(item => item.vCardFile === vCardFile)
    cardConnections[connectionIndex].firstName = connectionData.firstName
    cardConnections[connectionIndex].lastName = connectionData.lastName
    cardConnections[connectionIndex].email = connectionData.email
    cardConnections[connectionIndex].workPhone = connectionData.workPhone
    cardConnections[connectionIndex].vCardFile = connectionData.vCardFile
    cardConnections[connectionIndex].note = connectionData.note
    cardConnections[connectionIndex].userName = connectionData.userName
    cardConnections[connectionIndex].organization = connectionData.organization
    cardConnections[connectionIndex].title = connectionData.title
    cardConnections[connectionIndex].website = connectionData.website
    await db.collection('cards').doc(cardId).update({ connections: cardConnections })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const getConnectionByDateAdded = async (cardId, addedOn) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardConnections = card.data().connections
    const connection = cardConnections.find(item => {
      const dbConnectionDate = item.addedOn.seconds ? item.addedOn.toDate() : item.addedOn
      const selectedConnectionDate = addedOn.seconds ? addedOn.toDate() : addedOn
      return isEqual(dbConnectionDate, selectedConnectionDate)
    })
    return connection
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateConnectionByDateAdded = async (cardId, addedOn, connectionData) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardConnections = card.data().connections
    const connectionIndex = cardConnections.findIndex(item => {
      const dbConnectionDate = item.addedOn.seconds ? item.addedOn.toDate() : item.addedOn
      const selectedConnectionDate = addedOn.seconds ? addedOn.toDate() : addedOn
      return isEqual(dbConnectionDate, selectedConnectionDate)
    })
    cardConnections[connectionIndex].firstName = connectionData.firstName
    cardConnections[connectionIndex].lastName = connectionData.lastName
    cardConnections[connectionIndex].email = connectionData.email
    cardConnections[connectionIndex].workPhone = connectionData.workPhone
    cardConnections[connectionIndex].note = connectionData.note
    cardConnections[connectionIndex].userName = connectionData.userName
    cardConnections[connectionIndex].organization = connectionData.organization
    cardConnections[connectionIndex].title = connectionData.title
    cardConnections[connectionIndex].website = connectionData.website
    await db.collection('cards').doc(cardId).update({ connections: cardConnections })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateOfferByDateAdded = async (cardId, addedOn, offerData) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardOffers = card.data().offers
    const offerIndex = cardOffers.findIndex(item => {
      const dbOfferDate = item.addedOn.seconds ? item.addedOn.toDate() : item.addedOn
      const selectedOfferDate = addedOn.seconds ? addedOn.toDate() : addedOn
      return isEqual(dbOfferDate, selectedOfferDate)
    })
    cardOffers[offerIndex].active = offerData.active
    cardOffers[offerIndex].image = offerData.image
    cardOffers[offerIndex].title = offerData.title
    cardOffers[offerIndex].description = offerData.description
    cardOffers[offerIndex].tagLine = offerData.tagLine
    cardOffers[offerIndex].startDate = offerData.startDate
    cardOffers[offerIndex].endDate = offerData.endDate
    cardOffers[offerIndex].onlyOn = offerData.onlyOn
    cardOffers[offerIndex].limit = offerData.limit
    cardOffers[offerIndex].oldPrice = offerData.oldPrice
    cardOffers[offerIndex].newPrice = offerData.newPrice
    cardOffers[offerIndex].discount = offerData.discount
    cardOffers[offerIndex].lastUpdated = offerData.lastUpdated
    cardOffers[offerIndex].tags = offerData.tags
    await db.collection('cards').doc(cardId).update({ offers: cardOffers })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const removeFollower = async (cardId, followerId) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardFollowers = card.data().followers
    const removeIndex = cardFollowers.findIndex(item => item.userId === followerId)
    cardFollowers.splice(removeIndex, 1)
    await db.collection('cards').doc(cardId).update({ followers: cardFollowers })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const removeFollowing = async (cardId, followingId) => {
  try {
    const db = await getFirestoreInstance()
    const card = await db.collection('cards').doc(cardId).get()
    const cardFollowings = card.data().following
    const removeIndex = cardFollowings.findIndex(item => item.userId === followingId)
    cardFollowings.splice(removeIndex, 1)
    await db.collection('cards').doc(cardId).update({ following: cardFollowings })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const createUserCard = async (profileData, accountSecret, vCardFile) => {
  const cardData = {
    restaurantName: profileData.restaurantName,
    firstName: profileData.firstName,
    lastName: profileData.lastName,
    email: profileData.email,
    urlSuffix: profileData.urlSuffix,
    settings: profileData.settings || defaultSettings,
    logo: profileData.logo || null,
    accountSecret,
    vCardFile: vCardFile || null,
    links: profileData.links || null,
    socialLinksOrder: profileData.socialLinksOrder || null,
    followers: profileData.followers || null,
    following: profileData.following || null,
    defaultLinksToTheme: profileData.defaultLinksToTheme || false,
    career: profileData.career || null,
    organization: profileData.organization || null,
    createdBy: profileData.createdBy || null,
  }
  const cardExists = await createCard(profileData.userId, cardData)
  return { cardExists, urlSuffix: profileData.urlSuffix }
}

export const deleteCardByuserId = async userId => {
  try {
    const db = await getFirestoreInstance()
    const user = await db.collection('cards').doc(userId).get()
    if (user.exists) {
      await db.collection('cards').doc(userId).delete()
    } else {
      // eslint-disable-next-line
      console.log('user doesnt exist');
    }
    return true
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
    throw new Error(err.message)
  }
}

export const getTeamCards = async masterId => {
  let cards = []
  let cardData
  let cardsRes

  try {
    const db = await getFirestoreInstance()
    cardsRes = await db.collection('cards').where('masterId', '==', masterId).orderBy('firstName', 'asc').get()
    cardsRes.forEach(card => {
      cardData = card.data()
      cardData.id = card.id
      cards = [...cards, cardData]
    })
  } catch (err) {
    throw new Error(err)
  }
  return cards
}

export const getMasterCardByInvitation = async invitationCode => {
  let cardRes = []

  try {
    const db = await getFirestoreInstance()
    const cards = await db.collection('cards').where('invitationCode', '==', invitationCode).get()
    if (cards.empty) {
      // eslint-disable-next-line
      console.log('No matching documents.')
      return false
    }
    cards.forEach(doc => {
      cardRes = [...cardRes, doc.data()]
    })
  } catch (err) {
    throw new Error(err)
  }

  return cardRes[0]
}
