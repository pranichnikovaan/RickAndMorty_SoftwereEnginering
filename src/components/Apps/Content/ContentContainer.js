import Content from "./Content";
import {
    getAllCharacters,
    getCharacters,
    setCurrentPage
} from "../../../redux/reducers/appsReducer";
import {connect} from "react-redux";
import AppItem from "./AppItem/AppItem";
import React from "react";

const mapStateToProps = state => {
    let characters = []

    // Проверка фильтров и возврат объектов по заданным фильтрам
    if(!state.apps.statusFilter && !state.apps.searchText && !state.apps.speciesFilter)
        characters = state.apps.charactersList.map(el =>
            <AppItem id={el.id} name={el.name} status={el.status} species={el.species} image={el.image}/>)
    else characters = state.apps.allCharacters.map(el => {
        if(((el.name.substring(0, state.apps.searchText.length).toLowerCase() === state.apps.searchText.toLowerCase())
            || !state.apps.searchText) && ((state.apps.statusFilter === el.status) || !state.apps.statusFilter)
            && ((state.apps.speciesFilter === el.species) || !state.apps.speciesFilter)) {
            return <AppItem id={el.id} name={el.name} status={el.status} species={el.species} image={el.image}/>
        }
    })

    return {
        characters: characters,
        currentPage: state.apps.currentPage,
        totalPage: state.apps.totalPage,
        searchText: state.apps.searchText,
        speciesFilter: state.apps.speciesFilter,
        statusFilter: state.apps.statusFilter
    }
}

export default connect(mapStateToProps, {getCharacters, setCurrentPage, getAllCharacters})(Content)