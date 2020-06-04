import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendar, faChevronDown, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCalendar, faClock, faUser, faChevronDown);

const BookTable = () => {
  return (
    <Container>
      {/* <Row className="my-5">
        {popularItems.map((item) => (
          <Col xs={12} sm={6} lg={3} className="py-2">
            <Card className="card-effect-md-zoom shadow h-100 px-0">
              <img
                className="card-img-top img-fluid"
                src={require('../../' + item.image)}
                alt={item.name}
              />
              <div className="card-body text-center px-3">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.description}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <hr /> */}
      <Row className="my-4 my-md-5 flex-column flex-md-row">
        <Col className="flex-grow-1 flex-md-grow-0 mb-3 mb-md-0 text-center text-md-left">
          <img
            src={require('../../assets/images/misc/clock.gif')}
            alt="Clock"
          />
        </Col>
        <Col className="flex-grow-1 text-center text-md-left">
          <Col xs={12}>
            <h4>From Monday to Friday</h4>
            <p>
              From 11am to 15pm and from 7pm to 11pm. Friday afternoon closed.
            </p>
          </Col>
          <Col xs={12}>
            <h4>Saturday and Sunday</h4>
            <p>From 11am to 15pm and from 9pm to 3am. Sunday open all day.</p>
          </Col>
        </Col>
        <Col className="flex-grow-1">
          <ListGroup className="text-dark">
            <ListGroup.Item className="d-flex flex-row align-items-center">
              <FontAwesomeIcon icon={faCalendar} />
              <div className="ml-3 mr-auto font-weight-bold">Jun 3, 2020</div>
              <FontAwesomeIcon icon={faChevronDown} />
            </ListGroup.Item>
            <ListGroup.Item className="d-flex flex-row align-items-center">
              <FontAwesomeIcon icon={faClock} />
              <div className="ml-3 mr-auto font-weight-bold">7:00 PM</div>
              <FontAwesomeIcon icon={faChevronDown} />
            </ListGroup.Item>
            <ListGroup.Item className="d-flex flex-row align-items-center">
              <FontAwesomeIcon icon={faUser} />
              <div className="ml-3 mr-auto font-weight-bold">2 people</div>
              <FontAwesomeIcon icon={faChevronDown} />
            </ListGroup.Item>
            <ListGroup.Item>
              <button className="btn btn-dark w-100 h-100">Find a table</button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="flex-grow-1 mt-3 mt-md-0 text-center text-md-left">
          <p className="font-italic text-muted">
            Instant reservation available
          </p>
          <h4 className="text-uppercase">Book a table</h4>
          <button className="btn btn-outline-dark text-uppercase mt-2">
            Contact us
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default BookTable;
