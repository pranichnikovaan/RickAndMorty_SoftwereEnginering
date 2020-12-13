import {reduxForm, Field} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControls";
import React from "react";

const OfferItemEdit = props => {
    return (
        <form className="d-flex align-items-center w-100 ml-3" onSubmit={props.handleSubmit}>
            <Field className="form-control" name='name' type="text"
                   component={Input}/>
            <Field className="form-control" name='url' type="text" component={Input}/>
            <button type="submit" className="btn btn-outline-success material-icons">check_circle</button>
        </form>
    )
}

export default reduxForm({form: 'offerEdit'})(OfferItemEdit)