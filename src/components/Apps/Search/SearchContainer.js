import {connect} from "react-redux";
import {setSpeciesFilter, setStatusFilter, updateSearchText} from "../../../redux/reducers/appsReducer";
import Search from "./Search";

const mapStateToProps = state => {
    return {
        searchText: state.apps.searchText,
        speciesFilter: state.apps.speciesFilter,
        statusFilter: state.apps.statusFilter
    }
}

export default connect(mapStateToProps, {updateSearchText, setSpeciesFilter, setStatusFilter})(Search)