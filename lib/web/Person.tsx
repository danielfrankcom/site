import React from "react";

class Person extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img_url} />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Person;
