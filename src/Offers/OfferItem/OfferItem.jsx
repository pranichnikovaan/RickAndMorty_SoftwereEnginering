import React, {useState} from 'react'
import {connect} from "react-redux";
import {deleteNetwork, deleteOffer, editItem} from "../../../redux/reducers/offersReducer";
import OfferItemEdit from "./OfferItemEdit";

const OfferItem = props => {

    const deleteElement = () => props.type === 'network' ? props.deleteNetwork(props.id) : props.deleteOffer(props.id)

    const [clsName, setClass] = useState('text-truncate')
    const [clsName2, setClass2] = useState('text-truncate')
    const [isEdit, setEdit] = useState(false)
    const changeClass = () => clsName !== 'text-truncate' ? setClass('text-truncate') : setClass('')
    const changeClass2 = () => clsName2 !== 'text-truncate' ? setClass2('text-truncate') : setClass2('')

    const onSubmitSH = data => {
        let name, url

        if(data.name === undefined) name = props.name
            else name = data.name
        if(data.url === undefined) url = props.url
            else url = data.url

        props.editItem(props.id, name, url)
        setEdit(false)
    }

    return (
        <div className="row w-100 pb-2 border-bottom mb-3 position-relative" style={{fontSize: 14}}>
            <div className="col-3 text-truncate">
                <span>{props.name}</span>
            </div>
            <div className={`col-4 text-break ${clsName}`} onMouseEnter={changeClass} onMouseLeave={changeClass}>
                <span>{props.url}</span>
            </div>
            <div className={`col-3 text-break ${clsName2}`} onMouseEnter={changeClass2} onMouseLeave={changeClass2}>
                <span>{props.third}</span>
            </div>
            <div className="col-2">
                <span>{props.date}</span>
            </div>
            {
                !isEdit
                    ? <div>
                        <span className="material-icons position-absolute"
                              style={{cursor: 'pointer', fontSize: 18, right: 0}}
                              onClick={() => setEdit(true)}>create</span>
                        <span className="material-icons position-absolute"
                              style={{cursor: 'pointer', fontSize: 18, right: -18}}
                              onClick={deleteElement}>delete</span>
                    </div>
                    : <OfferItemEdit onSubmit={onSubmitSH}/>
            }

        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    }
}

export default connect(mapStateToProps, {deleteOffer, deleteNetwork, editItem})(OfferItem)