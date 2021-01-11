import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {menuIsDisplayed} from '../../actions';
import {auth} from '../firebase';

const Menu = (props) => {
    const [menuClass, setMenuClass] = useState('nav-bar-menu-hidden');


    useEffect(()=> {  
        if(props.displayMenu === true ) {
            setMenuClass('nav-bar-menu');
            props.menuIsDisplayed(true);
        } else {
            setMenuClass('nav-bar-menu-hidden');
            props.menuIsDisplayed(false);
        }
    })

    const closeMenu = () => {
        props.menuIsDisplayed(false);
        setMenuClass('nav-bar-menu-hidden');
    }

    const handleSignOut = () => {
        auth.signOut();
        closeMenu()
    }

    return (
        <div className={menuClass}>
            <div className='nav-bar-menu-item-close-button' onClick={()=>{closeMenu()}}>X</div>
            {props.isLoggedIn.user !== null ? <div className='nav-bar-menu-item' onClick={()=>{handleSignOut()}}>Logout</div> : <div className='nav-bar-menu-item' onClick={()=>{closeMenu()}}><Link to='/Login'>Login</Link></div>}
            {props.isLoggedIn.user === null ? <div className="nav-bar-menu-item" onClick={()=>{closeMenu()}}><Link to="/signup">Signup</Link></div> : ""}    
        </div>
    )
}

const mapStateToProps  = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        displayMenu: state.displayMenu,
    };
};

export default connect(mapStateToProps,{menuIsDisplayed})(Menu);