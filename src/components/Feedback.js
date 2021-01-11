import React from "react";
import { connect } from "react-redux";
import { flowFeedback, tasteFeedback } from "../actions";

class Feedback extends React.Component {
  updateValuesOnChange(e) {
    if (e.target.name === "taste") {
      this.props.tasteFeedback(e.target.value);
    } else if (e.target.name === "flow") {
      this.props.flowFeedback(e.target.value);
    }
  }

  render() {
    const flowOptions = ["Too quick", "Too slow", "Just right"];
    const tasteOptions = ["Too bitter", "Too sour", "Just right"];
    let options = "";
    if (this.props.feedbackType === "flow") {
      options = flowOptions.map((option, index) => (
        <div className="feedbackItem" key={index}>
          <label className="feedbackLabel">{option}</label>
          <input
            className="feedbackInput"
            type="radio"
            name={this.props.feedbackType}
            value={option}
            key={option}
          />
        </div>
      ));
    } else {
      options = tasteOptions.map((option, index) => (
        <div className="feedbackItem" key={index}>
          <label className="feedbackLabel">{option}</label>
          <input
            className="feedbackInput"
            type="radio"
            name={this.props.feedbackType}
            value={option}
            key={option}
          />
        </div>
      ));
    }

    return (
      <div
        className="dialToolPieces"
        onChange={(e) => this.updateValuesOnChange(e)}
      >
        <h3>How did it {this.props.feedbackType}?</h3>
        <div>
          <form className="feedbackContainer">{options}</form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    flow: state.flow,
    taste: state.taste,
  };
};

export default connect(mapStateToProps, { tasteFeedback, flowFeedback })(
  Feedback
);
