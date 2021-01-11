import React from "react";

// TODO:
// move the text into a props, so the component can be re-used as needed

const InfoCard = () => {
  return (
    <div className="infoCard">
      <h1>Espresso matters</h1>
      <p>
        Espresso is an experience. Be it by itself, or as a milk drink. You want
        it creamy and gorgeous, otherwise, why bother?
      </p>
      <h2>How to dial in</h2>
      <p>
        The tool below will help you dial-in an excellent shot. You should let
        us know some basic info on your coffee and we will give you a first
        recipe. All the adjustments will be suggested based on time, dose and
        taste.
      </p>
      <p>
        We want you to always hit your numbers by having your shot being extract
        within the ideal time window, which is between 25 and 33 seconds.
        However, if you found a different set of settings that works great for
        you, all the better.
      </p>
      <h2>Grind settings</h2>
      <p>Proper grinding is the key to a gorgeous shot.</p>
      <p>
        Start your first grind with whatever setting you have used for your
        previous espresso and from there we will help you adjust to find the
        proper grind setting. We recommend you make small adjustments each time.
        For example, one step if you have a stepped grinder.
      </p>
    </div>
  );
};

export default InfoCard;
