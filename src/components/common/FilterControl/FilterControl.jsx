import React from 'react'
import styles from "../../../styles/styles";

const FilterControl = props => {
    const setFilter = () => {
        props.name === 'All'
            ? props.action('')
            : props.action(props.name)
    }
    const doCompare = () => {
        return props.name === 'All'
            ? props.condition === ''
            : props.condition === props.name
    }

    return (
        doCompare()
            ? <button className="btn btn-success mr-2" style={styles.apps.search.filterBtn}>{props.name}</button>
            : <button className="btn mr-2" style={styles.apps.search.filterBtn} onClick={setFilter}>{props.name}</button>
    )
}

const FilterTransform = (data, condition, action) => {
    return data.map(el => <FilterControl key={el} name={el} condition={condition} action={action}/>)
}

export default FilterTransform