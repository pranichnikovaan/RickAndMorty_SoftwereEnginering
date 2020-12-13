import OfferItem from "./OfferItem/OfferItem";
import React from "react";
import Offers from "./Offers";
import {connect} from "react-redux";
import {addNetwork, addOffer, deleteNetwork, deleteOffer} from "../../redux/reducers/offersReducer";

const mapStateToProps = state => {
    const networkList =
        state.offers.networkList.map(el =>
            <OfferItem key={el.id} type='network' id={el.id} name={el.name} url={el.postbackUrl} third={el.offerUrl} date={el.date}/>)

    const offersList =
        state.offers.offersList.map(el =>
            <OfferItem key={el.id} type='offer' id={el.id} name={el.name} url={el.offerUrl} third={el.network} date={el.date}/>)

    const networks =
        state.offers.networkList.map(el =>
            <option key={el.id} value={el.name + ' ' + el.id}>{el.name}</option>)

    return {
        networkList: networkList,
        offersList: offersList,
        networks: networks
    }
}

export default connect(mapStateToProps, {addNetwork, addOffer, deleteOffer, deleteNetwork})(Offers)