import React, { Component } from "react";
import { Header, Segment } from 'semantic-ui-react'
class HeaderApp extends Component {
  render() {
    return <div>
    <Header as='h2' attached='top'>
      Attached Header
    </Header>
    <Segment attached>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </Segment>
  </div>;
  }
}
export default HeaderApp;
