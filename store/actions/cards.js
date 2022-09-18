import * as actionTypes from './actionTypes'
import { getCardBySuffix, getCardById, getMasterCardByInvitation } from '../../API/cards'
import { getFirebaseStorage } from '../../config/firebase'

export const getCardRequest = () => ({
  type: actionTypes.GET_CARD_REQUEST,
})
export const getCardSettings = card => ({
  type: actionTypes.GET_CARD_SETTINGS,
  userId: card.userId || null,
  settings: card.settings || null,
})
export const getCardSuccess = (card, vCardFileBlob) => ({
  type: actionTypes.GET_CARD_SUCCESS,
  userId: card.userId || null,
  restaurantName: card.restaurantName || null,
  firstName: card.firstName || null,
  lastName: card.lastName || null,
  middleName: card.middleName || null,
  namePrefix: card.namePrefix || null,
  nameSuffix: card.nameSuffix || null,
  gender: card.gender || null,
  nickname: card.nickname || null,
  career: card.career || null,
  organization: card.organization || null,
  title: card.title || null,
  email: card.email || null,
  workPhone: card.workPhone || null,
  homePhone: card.homePhone || null,
  workFax: card.workFax || null,
  homeFax: card.homeFax || null,
  birthday: card.birthday || null,
  note: card.note || null,
  address: card.address || null,
  image: card.image || null,
  masterId: card.masterId || null,
  base64Photo: card.base64Photo || null,
  logo: card.logo || null,
  vCardFile: card.vCardFile || null,
  vCardFileBlob: vCardFileBlob || null,
  urlSuffix: card.urlSuffix || null,
  links: card.links || null,
  socialLinksOrder: card.socialLinksOrder || null,
  settings: card.settings || null,
  connections: card.connections || null,
  followers: card.followers || null,
  following: card.following || null,
  invitations: (card.childInvitations && card.childInvitations.length > 0) ? [...card.childInvitations, {
    code: card.invitationCode,
    used: true,
    usedBy: card.userId,
    usedOn: null,
  }] : null,
  invitationCode: card.invitationCode || null,
  filteredInvitations: card.childInvitations || null,
  passwordProtected: card.passwordProtected || false,
  clickedNo: card.clickedNo || 0,
  redirect: card.redirect || null,
  defaultLinksToTheme: card.defaultLinksToTheme || false,
  bioVideo: card.bioVideo || null,
  accountSecret: card.accountSecret || null,
  teamData: card.teamData || null,
  offers: card.offers || null,
  offersSettings: card.offersSettings || null,
  offerTags: card.offerTags || null,
  offersOrder: card.offersOrder || null,
  visits: card.visits || 0,
  createdBy: card.createdBy || null,
})

export const getCardFailure = error => ({
  type: actionTypes.GET_CARD_FAILURE,
  error,
})

export const startToggleProfileActivity = () => ({
  type: actionTypes.TOGGLE_PROFILE_ACTIVITY,
})

export const startChangeThemeColor = (code, name) => ({
  type: actionTypes.CHANGE_THEME_COLOR,
  code,
  name,
})

export const startChangeTheme = theme => ({
  type: actionTypes.CHANGE_THEME,
  theme,
})

export const defaultLinksToTheme = () => ({
  type: actionTypes.DEFAULT_LINKS,
})

export const startSortConnections = (sortValue, sortType) => ({
  type: actionTypes.SORT_CONNECTIONS,
  sortValue,
  sortType,
})

export const startAddConnection = connectionObj => ({
  type: actionTypes.ADD_CONNECTION,
  connectionObj,
})

export const startRemoveConnection = addedOn => ({
  type: actionTypes.REMOVE_CONNECTION,
  addedOn,
})

export const startUpdateConnection = (addedOn, connectionData) => ({
  type: actionTypes.UPDATE_CONNECTION,
  addedOn,
  firstName: connectionData.firstName,
  lastName: connectionData.lastName,
  email: connectionData.email,
  workPhone: connectionData.workPhone,
  vCardFile: connectionData.vCardFile,
  note: connectionData.note,
  userName: connectionData.userName,
  organization: connectionData.organization,
  title: connectionData.title,
  website: connectionData.website,
})

export const startSortOffers = (sortValue, sortType) => ({
  type: actionTypes.SORT_CARD_OFFERS,
  sortValue,
  sortType,
})

export const startAddOffer = offerObj => ({
  type: actionTypes.ADD_CARD_OFFER,
  offerObj,
})

export const startRemoveOffer = addedOn => ({
  type: actionTypes.REMOVE_CARD_OFFER,
  addedOn,
})

export const startUpdateOffer = (addedOn, offerData) => ({
  type: actionTypes.UPDATE_CARD_OFFER,
  image: offerData.image,
  title: offerData.title,
  description: offerData.description,
  tagLine: offerData.tagLine,
  startDate: offerData.startDate,
  endDate: offerData.endDate,
  onlyOn: offerData.onlyOn,
  limit: offerData.limit,
  oldPrice: offerData.oldPrice,
  newPrice: offerData.newPrice,
  discount: offerData.discount,
  active: offerData.active,
  tags: offerData.tags,
  addedOn,
})

export const startUpdateOfferLimit = offerId => ({
  type: actionTypes.UPDATE_OFFER_LIMIT,
  offerId,
})

export const startAddTag = tagObj => ({
  type: actionTypes.ADD_OFFER_TAG,
  tagObj,
})

export const startSortFollowers = (sortValue, sortType) => ({
  type: actionTypes.SORT_FOLLOWERS,
  sortValue,
  sortType,
})

export const startSortFollowings = (sortValue, sortType) => ({
  type: actionTypes.SORT_FOLLOWINGS,
  sortValue,
  sortType,
})

export const startAddFollower = follower => ({
  type: actionTypes.ADD_FOLLOWER,
  follower,
})

export const startRemoveFollower = followerId => ({
  type: actionTypes.REMOVE_FOLLOWER,
  followerId,
})

export const startRemoveFollowing = followingId => ({
  type: actionTypes.REMOVE_FOLLOWING,
  followingId,
})

export const startFilterInvitation = filterType => ({
  type: actionTypes.FILTER_INVITATIONS,
  filterType,
})

export const getCardProtected = card => ({
  type: actionTypes.GET_CARD_PROTECTED,
  userId: card.userId || null,
  restaurantName: card.restaurantName || null,
  firstName: card.firstName || null,
  lastName: card.lastName || null,
  middleName: card.middleName || null,
  namePrefix: card.namePrefix || null,
  nameSuffix: card.nameSuffix || null,
  redirect: card.redirect || null,
  image: card.image || null,
  base64Photo: card.base64Photo || null,
  settings: card.settings || null,
  // imageFile,
})

export const redirectProfileLink = (isChecked, link) => ({
  type: actionTypes.REDIRECT_CARD_LINK,
  link,
  isChecked,
})

export const clearCard = () => ({
  type: actionTypes.CLEAR_CARD,
})

export const updateCardData = newData => ({
  type: actionTypes.UPDATE_CARD,
  newData,
})

// export const startUpdateSortedOffers = (oldIndex, newIndex) => ({
//   type: actionTypes.UPDATE_SORTED_CARD_OFFER,
//   oldIndex,
//   newIndex,
// })

export const loadCard = (suffix, password, isAuthenticated, authStatus) => async dispatch => {
  let masterCard
  try {
    let card = await getCardBySuffix(suffix)
    if (card.masterId) {
      masterCard = await getMasterCardByInvitation(card.masterId)
      card = {
        ...card,
        ...masterCard.teamData,
      }
    }

    if (authStatus !== 'processing' && authStatus !== 'prelogin' && authStatus !== 'starting') {
      dispatch(getCardRequest())
      const { profilePasswordActive, profilePassword } = card.settings
      if (!isAuthenticated && password && profilePasswordActive && password === profilePassword) {
        dispatch(getCardSuccess(card, null))
        window.localStorage.setItem('profilePass', password)
        return
      }

      if (isAuthenticated && card.userId !== isAuthenticated.uid && password && profilePasswordActive && password === profilePassword) {
        dispatch(getCardSuccess(card, null))
        window.localStorage.setItem('profilePass', password)
        return
      }

      if (!isAuthenticated && password && profilePasswordActive && password !== profilePassword) {
        dispatch(getCardFailure({ message: 'Wrong profile key' }))
        window.localStorage.setItem('profilePass', null)
        return
      }

      if (isAuthenticated && card.userId !== isAuthenticated.uid && password && profilePasswordActive && password !== profilePassword) {
        dispatch(getCardFailure({ message: 'Wrong profile key' }))
        window.localStorage.setItem('profilePass', null)
        return
      }

      if (!isAuthenticated && !password && profilePasswordActive && profilePassword !== '') {
        dispatch(getCardProtected(card))
        return
      }

      if (isAuthenticated && card.userId !== isAuthenticated.uid && !password && profilePasswordActive && profilePassword !== '') {
        dispatch(getCardProtected(card))
        return
      }
      dispatch(getCardSuccess(card, null))
    }
  } catch (err) {
    dispatch(getCardFailure(err && { message: 'Weak or no internet connection.' }))
  }
}

export const loadCardByUserId = userId => async dispatch => {
  dispatch(getCardRequest())
  // let imageFile = null
  let vCardFileBlob = null
  try {
    const card = await getCardById(userId)
    // if (card.image) {
    //   imageFile = await getFirebaseStorage().ref(`profile/${card.image}`).getDownloadURL()
    // }
    if (card.vCardFile) {
      vCardFileBlob = await getFirebaseStorage().ref(`card/${card.vCardFile}`).getDownloadURL()
    }
    dispatch(getCardSuccess(card, vCardFileBlob))
  } catch (err) {
    dispatch(getCardFailure(err))
  }
}

export const loadCardSettingsByUserId = userId => async dispatch => {
  dispatch(getCardRequest())
  try {
    const card = await getCardById(userId)
    dispatch(getCardSettings(card))
  } catch (err) {
    dispatch(getCardFailure(err))
  }
}

export const toggleProfileActivity = () => async dispatch => {
  dispatch(startToggleProfileActivity())
}

export const changeThemeColor = (code, name) => async dispatch => {
  dispatch(startChangeThemeColor(code, name))
}

export const changeTheme = theme => async dispatch => {
  dispatch(startChangeTheme(theme))
}

export const defaultLinks = () => dispatch => {
  dispatch(defaultLinksToTheme())
}

export const sortConnections = (sortValue, sortType) => async dispatch => {
  dispatch(getCardRequest())
  dispatch(startSortConnections(sortValue, sortType))
}

export const addConnection = connectionObj => async dispatch => {
  dispatch(getCardRequest())
  dispatch(startAddConnection(connectionObj))
}

export const removeConnection = addedOn => async dispatch => {
  dispatch(getCardRequest())
  dispatch(startRemoveConnection(addedOn))
}

export const updateConnection = (addedOn, connectionData) => async dispatch => {
  dispatch(getCardRequest())
  dispatch(startUpdateConnection(addedOn, connectionData))
}

export const sortOffers = (sortValue, sortType) => async dispatch => {
  dispatch(getCardRequest())
  dispatch(startSortOffers(sortValue, sortType))
}

export const addOffer = offerObj => async dispatch => {
  dispatch(getCardRequest())
  dispatch(startAddOffer(offerObj))
}

export const removeOffer = addedOn => async dispatch => {
  dispatch(getCardRequest())
  dispatch(startRemoveOffer(addedOn))
}

export const addTag = tagObj => async dispatch => {
  dispatch(getCardRequest())
  dispatch(startAddTag(tagObj))
}

export const updateOffer = (addedOn, offerData) => async dispatch => {
  dispatch(getCardRequest())
  dispatch(startUpdateOffer(addedOn, offerData))
}

export const updateOfferLimit = offerId => async dispatch => {
  dispatch(getCardRequest())
  dispatch(startUpdateOfferLimit(offerId))
}

export const sortFollowers = (sortValue, sortType) => async dispatch => {
  dispatch(getCardRequest())
  dispatch(startSortFollowers(sortValue, sortType))
}

export const sortFollowings = (sortValue, sortType) => async dispatch => {
  dispatch(getCardRequest())
  dispatch(startSortFollowings(sortValue, sortType))
}

export const addFollower = follower => async dispatch => {
  dispatch(startAddFollower(follower))
}

export const removeFollower = followerId => async dispatch => {
  dispatch(startRemoveFollower(followerId))
}

export const removeFollowing = followingId => async dispatch => {
  dispatch(startRemoveFollowing(followingId))
}

export const filterInvitations = filterType => async dispatch => {
  dispatch(getCardRequest())
  dispatch(startFilterInvitation(filterType))
}

export const redirectCardLink = (isChecked, link) => dispatch => {
  dispatch(redirectProfileLink(isChecked, link))
}

export const updateCard = newData => async dispatch => {
  dispatch(getCardRequest())
  dispatch(updateCardData(newData))
}

// export const updateSortedOffers = (oldIndex, newIndex) => dispatch => {
//   dispatch(startUpdateSortedOffers(oldIndex, newIndex))
// }
