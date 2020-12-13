import React from 'react'
import styles from "../../../styles/styles";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControls";
import {maxLength, requiredField} from "../../../utils/validators/validators";

const maxLength16 = maxLength(16)

const NetworkCreatingForm = props => {
    return (
        <form className="row mr-3 p-4 mb-3" style={styles.offers.elementBackground} onSubmit={props.handleSubmit}>
            <div className="row mb-4 w-100">
                <div className="col-4">
                    <label>Network name</label>
                    <Field
                        type="text"
                        name="networkName"
                        validate={[requiredField, maxLength16]}
                        component={Input}
                        className="form-control"
                        placeholder='Up to 16 symbols'/>
                </div>
                <div className="col-8">
                    <label>Postback URL</label>
                    <Field
                        type="text"
                        name="postbackUrl"
                        validate={[requiredField]}
                        component={Input}
                        className="form-control"
                        placeholder='Postback URL from your affiliate program'/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8 d-flex align-items-center text-secondary">
                    <label className="material-icons mr-2">info</label>
                    <span>You need a network to create a campaign with outside offer, <a href="#"> learn more</a></span>
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-success text-dark border-0" type="submit"
                            style={styles.offers.btnAddBackground}>Make a new network</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({form: 'networkCreate'})(NetworkCreatingForm)