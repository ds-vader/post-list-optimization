import React from 'react';
import { Navbar } from 'react-bootstrap';

const Navibar = () => {
  return (
    <Navbar collapseOnSelect bg="light">
      <Navbar.Brand style={{ marginLeft: '10%' }} href="/posts">
        Posts optimization
      </Navbar.Brand>
    </Navbar>
  );
};

export default Navibar;
