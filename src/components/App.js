import React from "react";
import InfoCard from "./InfoCard";
import CoffeeInfo from "./CoffeeInfo";
import DialTool from "./DialTool";

import { connect } from "react-redux";

// The app component will host the landing page where the user can sign in and go to the tool

const App = (props) => {
  return (
    <div>
      <div>
        <div className='mainContent'>
          <InfoCard />
          <CoffeeInfo />
        </div>
        <div>
          <DialTool />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    isCreated: state.userCreated,
  };
};

export default connect(mapStateToProps)(App);
