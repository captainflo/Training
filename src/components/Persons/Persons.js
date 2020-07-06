import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // PureComponent check anychange of anyProps insted of manually use
  // shouldComponentUpdate

  // static getDerivedStateFromProps(props, state) {
  //   console.log('Persons.js : getDerivedStateFromProps');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Persons.js : shouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Persons.js : getSnapshotBeforeUpdate');
    return { message: 'SnapShot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Persons.js : componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('Persons.js : rendereing...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
