import React from 'react';
import ProfileClass from './ProfileClass';

class AboutClass extends React.Component {
  constructor() {
    super();
    console.log('Parent - Constructor');
  }

  componentDidMount() {
    console.log('Parent - componentDidMount');
  }

  render() {
    console.log('Parent - render');
    return (
      <>
        <h1>About Class Component</h1>
        <br />
        <ProfileClass name={'Aniket Sharma'} />
      </>
    );
  }
}

export default AboutClass;
