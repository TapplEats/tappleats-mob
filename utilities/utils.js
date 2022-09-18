import { getCardBySuffix } from '../API/cards'

export const breakName = name => {
  const userName = name.trim().toLowerCase()
  return {
    firstName: userName.substr(0, userName.indexOf(' ')).trim(),
    lastName: userName.substr(userName.indexOf(' ') + 1, userName.length).trim(),
  }
}

export const updateObj = (oldObj, updatedProps) => ({
  ...oldObj,
  ...updatedProps,
})

export const generateRandomString = (length = 6) => Math.random().toString(20).substr(2, length)

export const createUrlSuffix = async userFullName => {
  const userName = breakName(userFullName)
  const { firstName, lastName } = userName
  const cleanFirstName = firstName.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  const cleanLastName = lastName.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  let urlSuffix
  let primaryURLSuffix
  if (cleanFirstName === '') {
    primaryURLSuffix = `${cleanLastName}`
  } else {
    primaryURLSuffix = `${cleanFirstName}_${cleanLastName}`
  }
  const isCardURLExists = await getCardBySuffix(primaryURLSuffix)
  if (isCardURLExists) {
    urlSuffix = `${primaryURLSuffix}_${generateRandomString(4)}`
  } else {
    urlSuffix = primaryURLSuffix
  }
  return {
    urlSuffix,
    firstName: cleanFirstName,
    lastName: cleanLastName,
  }
}

export const renameFile = (originalFile, newName) => new File([originalFile], newName, {
  type: originalFile.type,
  lastModified: originalFile.lastModified,
})
