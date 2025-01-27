import React from "react";

function Person(props) {
  const { ide, name, skills } = props.person;
  return (
    <div>
      person: {name} with id: {ide} has the following skills: {skills}
    </div>
  );
}

export default Person;
