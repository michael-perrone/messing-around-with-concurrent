import React from "react";

const Nummy = ({ resource }) => {
  const num = resource.num.read();

  return <p>{num}</p>;
};

export default Nummy;
