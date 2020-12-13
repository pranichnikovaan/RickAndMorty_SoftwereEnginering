import React from 'react'
import {getCurrentLocation} from "../../redux/reducers/appsReducer";

const CharacterItem = props => {
    let info = (cat, info) => (
        <h5 className="d-flex w-100 justify-content-between border-bottom mb-4 pb-2">
            <span>{cat}:</span><span className="text-primary">{info}</span>
        </h5>)

    return (
        <div className="ml-5 d-flex flex-column align-items-center">
            <button onClick={() => props.unSetCurrentCharacter()} className="btn btn-danger w-25">Back</button>
            <div className="mt-5 d-flex align-items-center justify-content-around w-100">
                <img src={props.currentCharacter.image} alt="img"/>
                <div className="d-flex flex-column align-items-center w-50 h-100">
                    {info('Name', props.currentCharacter.name)}
                    {info('Gender', props.currentCharacter.gender)}
                    <div className="w-100 text-success" style={{cursor: 'pointer'}}
                         onClick={() => props.getCurrentLocation(props.currentCharacter.location.url)}>
                        {info('Location', props.currentCharacter.location.name)}
                    </div>
                    <div className="w-100 text-success" style={{cursor: 'pointer'}}
                         onClick={() => props.getCurrentLocation(props.currentCharacter.origin.url)}>
                        {info('Origin', props.currentCharacter.origin.name)}
                    </div>
                    {info('Species', props.currentCharacter.species)}
                    {info('Status', props.currentCharacter.status)}
                </div>
            </div>
            {
                props.isCurrentLocation
                    ? <div className="w-50 mt-5 d-flex flex-column align-items-center border">
                        <h3 className="m-3">Location</h3>
                        {info('Name', props.currentLocation.name)}
                        {info('Type', props.currentLocation.type)}
                        {info('Dimension', props.currentLocation.dimension)}
                    </div> : ''
            }
        </div>
    )
}

export default CharacterItem