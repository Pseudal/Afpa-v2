import React from "react";

const Footer = (props) => {
  return (
    <div>
      <ol>
        {props.prop_day.map((e, index) => {
          return <li key={index}>{e}</li>;
        })}
      </ol>
      <h2>Ceci est mon footer</h2>
    </div>
  );
};

export default Footer;
