import React from 'react'
import promo from '../../assets/Rectangle 46.svg'
import styles from "../../styles/styles";
import 'react-dropdown/style.css'
import OfferCreatingForm from "./OfferForms/OfferCreatingForm";
import NetworkCreatingForm from "./OfferForms/NetworkCreatingForm";
import {onSubmitUtil} from "../../utils/onSubmitUtil/onSubmitUtil";
import MainRowCreator from "./OfferForms/MainRowCreator";

const Offers = props => {
    const onOfferSubmit = (data) => onSubmitUtil.onOfferSubmit(data, props.addOffer)
    const onNetworkSubmit = (data) => onSubmitUtil.onNetworkSubmit(data, props.addNetwork)

    return (
        <div className="ml-5">

            <div className="row mb-3">
                <div className="col p-3 mr-3" style={styles.offers.elementBackground}>
                    <img src={promo} alt="promo"/>
                </div>
                <OfferCreatingForm networks={props.networks} onSubmit={onOfferSubmit}/>
            </div>

            <div className="row">
                <div className="col">
                    <NetworkCreatingForm onSubmit={onNetworkSubmit}/>
                    <MainRowCreator mainClass={'row mr-3'} secondColName={'Postback URL'} list={props.networkList}
                                    thirdColName={'Offer URL template'} height={300}/>
                </div>
                <MainRowCreator mainClass={'col'} secondColName={'Offer URL'} list={props.offersList}
                                thirdColName={'Network'} height={500}/>
            </div>
        </div>
    )
}

export default Offers