import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/Mask Group.svg'
import title from '../../assets/TestTaskApp.svg'
import style from '../../styles/styles'


const Menu = props => {
    return (
        <aside className="p-5 rounded d-flex flex-column" style={style.menu.asideMenuStyle}>
            <div className="d-flex align-items-center mb-5">
                <img className="mr-3" src={logo} alt="logo"/>
                <img className="mt-2" src={title} alt="title"/>
            </div>
            <NavLink
                className="btn d-flex align-items-center w-100 mb-2"
                to='/offers'
                activeClassName='font-weight-bold'
                activeStyle={style.menu.activeLinkStyle}
            >
                <span className="material-icons mr-2">local_offer</span>
                <span>Offers</span>
            </NavLink>
            <NavLink
                className="btn d-flex align-items-center w-100 mb-2"
                to='/apps'
                activeClassName='font-weight-bold'
                activeStyle={style.menu.activeLinkStyle}
            >
                <span className="material-icons mr-2">apps</span>
                <span>Apps</span>
            </NavLink>
        </aside>
    )
}

export default Menu
