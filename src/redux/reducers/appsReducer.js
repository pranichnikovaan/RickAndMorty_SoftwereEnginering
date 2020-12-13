import {useAPI} from "../../api/api";
import {act} from "@testing-library/react";

const SET_CHARACTERS = 'test/apps/SET-CHARACTERS'
const SET_ALL_CHARACTERS = 'test/apps/SET-ALL-CHARACTERS'
const SET_CURRENT_PAGE = 'test/apps/SET-CURRENT-PAGE'
const UPDATE_SEARCH_TEXT = 'test/apps/UPDATE-SEARCH-TEXT'
const SET_SPECIES_FILTER = 'test/apps/SET-SPECIES-FILTER'
const SET_STATUS_FILTER = 'test/apps/SET-STATUS-FILTER'
const SET_CURRENT_CHARACTER = 'test/apps/SET-CURRENT-CHARACTER'
const UNSET_CURRENT_CHARACTER = 'test/apps/UNSET-CURRENT-CHARACTER'
const SET_CURRENT_LOCATION = 'test/apps/SET-CURRENT-LOCATION'
const UNSET_CURRENT_LOCATION = 'test/apps/UNSET-CURRENT-LOCATION'

const initialState = {
    charactersList: [],
    allCharacters: [],
    currentCharacter: {},
    isCurrentCharacter: false,
    currentLocation: {},
    isCurrentLocation: false,
    currentPage: 1,
    totalPage: 20,
    searchText: '',
    speciesFilter: '',
    statusFilter: ''
}

const appsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS: {
            return {
                ...state,
                charactersList: action.characters
            }
        }
        case SET_ALL_CHARACTERS: {
            return {
                ...state,
                allCharacters: action.characters
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case UPDATE_SEARCH_TEXT: {
            return {
                ...state,
                searchText: action.text
            }
        }
        case SET_SPECIES_FILTER: return {...state, speciesFilter: action.species}
        case SET_STATUS_FILTER: return {...state, statusFilter: action.status}
        case SET_CURRENT_CHARACTER: return {...state, currentCharacter: action.character, isCurrentCharacter: true}
        case UNSET_CURRENT_CHARACTER: return {...state, currentCharacter: {}, isCurrentCharacter: false,
            currentLocation: {}, isCurrentLocation: false}
        case SET_CURRENT_LOCATION: return {...state, currentLocation: action.location, isCurrentLocation: true}
        case UNSET_CURRENT_LOCATION: return {...state, currentLocation: {}, isCurrentLocation: false}
        default: return state
    }
}

const setCharacters = characters => ({type: SET_CHARACTERS, characters})
const setAllCharacters = characters => ({type: SET_ALL_CHARACTERS, characters})
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage})
export const updateSearchText = text => ({type: UPDATE_SEARCH_TEXT, text})
export const setSpeciesFilter = species => ({type: SET_SPECIES_FILTER, species})
export const setStatusFilter = status => ({type: SET_STATUS_FILTER, status})
const setCurrentCharacter = character => ({type: SET_CURRENT_CHARACTER, character})
export const unSetCurrentCharacter = () => ({type: UNSET_CURRENT_CHARACTER})
const setCurrentLocation = location => ({type: SET_CURRENT_LOCATION, location})
export const unSetCurrentLocation = () => ({type: UNSET_CURRENT_LOCATION})

export const getCharacters = (currentPage=1) => async dispatch => {
    let response = await useAPI.getCharacters(currentPage)
    dispatch(setCharacters(response.data.results))
}
export const getAllCharacters = () => async dispatch => {
    let characters = await useAPI.getAllCharacters()
    dispatch(setAllCharacters(characters))
}
export const getCurrentCharacter = id => async dispatch => {
    dispatch(unSetCurrentCharacter())
    let character = await useAPI.getCharacter(id)
    dispatch(setCurrentCharacter(character.data))
}
export const getCurrentLocation = url => async dispatch => {
    dispatch(unSetCurrentLocation())
    let location = await useAPI.getLocation(url)
    dispatch(setCurrentLocation(location.data))
}

export default appsReducer