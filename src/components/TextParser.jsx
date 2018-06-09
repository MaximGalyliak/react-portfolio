import React from "react";

const TextParser = props => {
  return (
    <React.Fragment>
      {props.string.includes("\n") ? (
        props.string.split("\n").map((p, i) => {
          return <p key={i}>{p}</p>;
        })
      ) : (
        <p>{props.string}</p>
      )}
    </React.Fragment>
  );
};

export default TextParser;
