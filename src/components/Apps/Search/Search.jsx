import React from 'react'
import styles from "../../../styles/styles";
import FilterControl from "../../common/FilterControl/FilterControl";
import {componentUtils} from "../../../utils/componentUtils/componentUtils";

const Search = props => {

    let onSearchChange = (event) => {
        let searchText = event.target.value
        props.updateSearchText(searchText)
    }

    const statusFilters = FilterControl(componentUtils.statusFiltersNames, props.statusFilter, props.setStatusFilter)
    const speciesFilters = FilterControl(componentUtils.speciesFilterNames, props.speciesFilter, props.setSpeciesFilter)

    return (
        <div className="d-flex align-items-center justify-content-around p-3" style={styles.offers.elementBackground}>
            <div className="d-flex align-items-center p-2" style={styles.apps.search.elementBackground}>
                <span className="material-icons mr-3">search</span>
                <input className="border-0" onChange={onSearchChange}
                       value={props.searchText} type="text" style={styles.apps.search.searchElement}
                       placeholder='Search'/>
            </div>
            <div className="d-flex align-items-center p-2" style={styles.apps.search.elementBackground}>
                {statusFilters}
            </div>
            <div className="d-flex align-items-center p-2" style={{...styles.apps.search.elementBackground}}>
                {speciesFilters}
            </div>
        </div>
    )
}

export default Search