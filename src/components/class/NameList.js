import React, { Component } from "react";
import Person from "../Function/Person";

export class NameList extends Component {
  render() {
    const persons = [
      {
        ide: 1,
        name: "MMK",
        skills: "Reactjs",
      },
      {
        ide: 2,
        name: "Varma",
        skills: "Nodejs",
      },
    ];

    const personList = persons.map((person) => (
      <Person key={person.ide} person={person} />
    ));
    return <>{personList}</>;
  }
}

export default NameList;
