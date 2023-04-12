import React from 'react';

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor', this.props.name);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.props.name);
    }, 1000);
    console.log('componentDidMount', this.props.name);
  }
  componentDidUpdate() {
    console.log('componentDidUpdate', this.props.name);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    console.log('componentWillUnmount', this.props.name);
  }

  render() {
    console.log('render', this.props.name);
    return (
      <>
        <h3>Profile Class Component</h3>
        <h1>{this.props.name}</h1>
        <h2>{this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 3 });
          }}
        >
          Increase count
        </button>
      </>
    );
  }
}

export default ProfileClass;
