import React from 'react'
import styles from "../../../../styles/styles";
import {getCurrentCharacter} from "../../../../redux/reducers/appsReducer";
import {connect} from "react-redux";

const AppItem = props => {
    return (
        <div className="mr-4 p-3 mb-3 d-flex flex-column align-items-center" style={styles.offers.elementBackground}>
            <img src={props.image} alt="img" style={{width: 150, borderRadius: 16}}/>
            <div className="d-flex flex-column align-items-center mt-3">
                <span className="font-weight-bold">{props.name}</span>
                <span>{props.species}</span>
                {
                    props.status === 'Alive' 
                        ? <span className="text-success">{props.status}</span>
                        : props.status === 'Dead'
                            ? <span className="text-danger">{props.status}</span>
                            : <span className="text-primary">{props.status}</span>
                }
            </div>
            <button className="btn btn-primary mt-2" onClick={() => props.getCurrentCharacter(props.id)}>More</button>
        </div>
    )
}

export default connect(null, {getCurrentCharacter})(AppItem)