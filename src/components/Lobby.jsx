import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import './Lobby.css';

class Lobby extends React.Component {

  render() {
    return <div>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Collab Games</Navbar.Brand>
        </Navbar>
      </div>
      <div align="center" className="turn-in-card">
        <Card className="turn-in-card-image" body={false}>
          <Card.Img variant="top" src="/logo192.png"/>
        </Card>
        <Card className="turn-in-card-body">
          <Card.Body >
            <h1>Hey</h1>
          </Card.Body>
        </Card>
      </div>
    </div>
  }
}

export default Lobby;