import {v4} from 'uuid'

const ADD_NETWORK = 'task/offers/ADD-NETWORK'
const ADD_OFFER = 'task/offers/ADD-OFFER'
const EDIT_ITEM = 'task/offers/EDIT-ITEM'
const DELETE_OFFER = 'task/offers/DELETE-OFFER'
const DELETE_NETWORK = 'task/offers/DELETE-NETWORK'

let initialState = {
    offersList: [],
    networkList: []
}

const getDate = () => {
    let date = new Date()
    return date.toLocaleDateString()
}

const offersReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_NETWORK: {
            return {
                ...state,
                networkList: [...state.networkList, {id: v4(), name: action.name, postbackUrl: action.url,
                                                    offerUrl: '{offer_url}?clickid={clickid}', date: getDate()}]
            }
        }
        case ADD_OFFER: {
            return {
                ...state,
                offersList: [
                    ...state.offersList, {id: v4(),  name: action.name,  offerUrl: action.url,
                                            network: action.network, date: getDate()}],
                networkList: state.networkList.map(el => {
                    if(el.id === action.networkId)
                        el.offerUrl = action.url
                    return el
                })
            }
        }
        case EDIT_ITEM: {
            return {
                ...state,
                offersList: state.offersList.map(el => {
                    if(el.id === action.id) {
                        el.name = action.name
                        el.offerUrl = action.url
                    }
                    return el
                }),
                networkList: state.networkList.map(el => {
                    if(el.id === action.id) {
                        el.name = action.name
                        el.postbackUrl = action.url
                    }
                    return el
                })
            }
        }
        case DELETE_OFFER: return {...state, offersList: state.offersList.filter(el => el.id !== action.id)}
        case DELETE_NETWORK: return {...state, networkList: state.networkList.filter(el => el.id !== action.id)}

        default: return state
    }
}

export const addNetwork = (name, url) => ({type: ADD_NETWORK, name, url})
export const addOffer = (networkId, name, url, network) => ({type: ADD_OFFER, networkId, name, url, network})
export const editItem = (id, name, url) => ({type: EDIT_ITEM, id, name, url})
export const deleteOffer = id => ({type: DELETE_OFFER, id})
export const deleteNetwork = id => ({type: DELETE_NETWORK, id})

export default offersReducer