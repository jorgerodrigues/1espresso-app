import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { connect } from "react-redux";
import { menuIsDisplayed } from "../../actions";

const NavBar = (props) => {
  const handleClick = () => {
    props.menuIsDisplayed(!props.displayMenu);
  };

  return (
    <div>
      <Menu menuDisplayed={props.displayMenu} />
      <div className='nav-bar'>
        <div className='nav-bar-item'>
          <Link to='/App'>
            <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M18.9993 25.9991V19.9989C18.9993 19.7337 18.8939 19.4794 18.7064 19.2918C18.5188 19.1043 18.2645 18.9989 17.9993 18.9989H13.9993C13.7341 18.9989 13.4797 19.1043 13.2922 19.2918C13.1046 19.4794 12.9993 19.7337 12.9993 19.9989V25.9991C12.9993 26.2643 12.8939 26.5186 12.7064 26.7061C12.5189 26.8937 12.2646 26.999 11.9994 26.9991L6.00012 26.9999C5.86879 26.9999 5.73874 26.974 5.6174 26.9238C5.49606 26.8735 5.38581 26.7999 5.29294 26.707C5.20007 26.6142 5.12639 26.5039 5.07613 26.3826C5.02587 26.2612 5 26.1312 5 25.9999V14.4423C5 14.303 5.02911 14.1652 5.08547 14.0378C5.14183 13.9104 5.22418 13.7962 5.32726 13.7024L15.3266 4.61058C15.5106 4.44322 15.7505 4.35047 15.9993 4.35046C16.2481 4.35046 16.4879 4.44318 16.672 4.61054L26.6727 13.7024C26.7758 13.7962 26.8582 13.9104 26.9145 14.0378C26.9709 14.1652 27 14.303 27 14.4424V25.9999C27 26.1312 26.9741 26.2612 26.9239 26.3826C26.8736 26.5039 26.7999 26.6142 26.7071 26.707C26.6142 26.7999 26.5039 26.8735 26.3826 26.9238C26.2613 26.974 26.1312 26.9999 25.9999 26.9999L19.9991 26.9991C19.7339 26.999 19.4796 26.8937 19.2921 26.7061C19.1046 26.5186 18.9993 26.2643 18.9993 25.9991Z'
                stroke='#F7EFDE'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </Link>
        </div>
        <div className='nav-bar-item'>
          <Link to='/Profile'>
            <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z' stroke='#F7EFDE' stroke-width='2' stroke-miterlimit='10' />
              <path
                d='M3.87354 26.9988C5.10299 24.8708 6.8708 23.1037 8.99939 21.8752C11.128 20.6467 13.5424 20 16.0001 20C18.4577 20 20.8721 20.6468 23.0007 21.8754C25.1292 23.1039 26.897 24.871 28.1264 26.9991'
                stroke='#F7EFDE'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </Link>
        </div>
        <div
          className='nav-bar-item'
          onClick={() => {
            handleClick();
          }}>
          <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z'
              stroke='#F7EFDE'
              stroke-width='2'
              stroke-miterlimit='10'
            />
            <path d='M6 19C7.65685 19 9 17.6569 9 16C9 14.3431 7.65685 13 6 13C4.34315 13 3 14.3431 3 16C3 17.6569 4.34315 19 6 19Z' stroke='#F7EFDE' stroke-width='2' stroke-miterlimit='10' />
            <path
              d='M26 19C27.6569 19 29 17.6569 29 16C29 14.3431 27.6569 13 26 13C24.3431 13 23 14.3431 23 16C23 17.6569 24.3431 19 26 19Z'
              stroke='#F7EFDE'
              stroke-width='2'
              stroke-miterlimit='10'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    displayMenu: state.displayMenu,
  };
};

export default connect(mapStateToProps, { menuIsDisplayed })(NavBar);
