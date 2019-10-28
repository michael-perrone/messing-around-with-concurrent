import React from "react";

export const PersonComponent = props => {
  const person = props.resource.person.read();
  console.log(person);
  return <div>{person.name.first}</div>;
};

export default PersonComponent;
