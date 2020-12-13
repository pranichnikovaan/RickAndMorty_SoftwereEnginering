import React from 'react'
import ContentContainer from "./Content/ContentContainer";
import SearchContainer from "./Search/SearchContainer";
import {connect} from "react-redux";
import {getCurrentLocation, unSetCurrentCharacter, unSetCurrentLocation} from "../../redux/reducers/appsReducer";
import CharacterItem from "./CharacterItem";

const Apps = (props) => {
    if(!props.isCurrentCharacter) {
        return (
            <div className="ml-5">
                <SearchContainer />
                <ContentContainer />
            </div>
        )
    }
    return <CharacterItem unSetCurrentCharacter={props.unSetCurrentCharacter} currentCharacter={props.currentCharacter}
                          unSetCurrentLocation={props.unSetCurrentLocation} getCurrentLocation={props.getCurrentLocation}
                          isCurrentLocation={props.isCurrentLocation} currentLocation={props.currentLocation}
    />
}

const mapStateToProps = state => ({
    isCurrentCharacter: state.apps.isCurrentCharacter,
    currentCharacter: state.apps.currentCharacter,
    isCurrentLocation: state.apps.isCurrentLocation,
    currentLocation: state.apps.currentLocation
})

export default connect(mapStateToProps, {unSetCurrentCharacter, unSetCurrentLocation, getCurrentLocation})(Apps)