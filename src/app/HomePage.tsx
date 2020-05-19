import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HomePage = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <h1>Welcome</h1>
        <p>
          This is the menu ordering application for the Island Prime Restaurant.
        </p>
      </Col>
    </Row>
  </Container>
);

export default HomePage;
