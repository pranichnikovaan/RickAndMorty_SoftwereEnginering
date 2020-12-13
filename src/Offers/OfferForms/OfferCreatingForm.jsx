import React from 'react'
import styles from "../../../styles/styles";
import {reduxForm, Field} from 'redux-form'
import 'react-widgets/dist/css/react-widgets.css'
import {Input} from "../../common/FormsControl/FormsControls";
import {maxLength, requiredField} from "../../../utils/validators/validators";

const maxLength16 = maxLength(16)

const OfferCreatingForm = props => {
    return (
        <form className="col p-4" style={styles.offers.elementBackground} onSubmit={props.handleSubmit}>
            <div className="row mb-4">
                <div className="col">
                    <label>Offer name</label>
                    <Field name="offerName" validate={[requiredField, maxLength16]}
                           type="text" className="form-control"  placeholder='Up to 16 symbols' component={Input}/>
                </div>
                <div className="col">
                    <label>Offer URL</label>
                    <Field name="offerUrl" validate={[requiredField]}
                           type="text" className="form-control" placeholder='URL' component={Input}/>
                </div>
                <div className="col d-flex flex-column">
                    <label>Network</label>
                    <Field className="btn btn-secondary dropdown-toggle" name="network" component="select">
                        <option value="" selected>Choose a network</option>
                        {props.networks}
                    </Field>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8 d-flex align-items-center text-secondary">
                    <span className="material-icons mr-2">keyboard_backspace</span>
                    <span>Free installs with offers from <a href="#">LordOfApps Network</a></span>
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-success text-dark border-0"
                            type="submit"
                            style={styles.offers.btnAddBackground}
                    >
                        Add a new outside offer
                    </button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({form: 'offerCreate'})(OfferCreatingForm)