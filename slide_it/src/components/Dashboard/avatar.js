import React, { Component } from "react";

import Avatar from "react-avatar";

export default class avatar extends Component {
  render() {
    return (
      <Avatar
        name={this.props.userName}
        value="86%"
        size="40"
        color="#F47100"
        round={true}
        style={{
          
          float: "right",
          display: "absoulate",
          marginLeft: "25rem ",
        }}
      />
    );
  }
}
