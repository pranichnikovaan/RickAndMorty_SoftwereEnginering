import React from 'react'
import styles from "../../../styles/styles";

const MainRowCreator = props => {
    return (
        <div className={`${props.mainClass} p-4 w-100`} style={styles.offers.elementBackground}>
            <div className="row w-100 mb-4" style={{fontSize: 14}}>
                <div className="col-3">
                    <span>Name/ID</span>
                </div>
                <div className="col-4">
                    <span>{props.secondColName}</span>
                </div>
                <div className="col-3">
                    <span>{props.thirdColName}</span>
                </div>
                <div className="col-2">
                    <span>Date</span>
                </div>
            </div>
            <div className="w-100" style={{overflow: 'auto', height: props.height}}>
                {props.list}
            </div>
        </div>
    )
}

export default MainRowCreator