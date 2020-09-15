import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface PageNotFoundProps {
  className?: string | undefined;
}

const PageNotFound = ({ className }: PageNotFoundProps) => (
  <section className={["page_404", className].join(" ")}>
    <Container fluid>
      <Row>
        <Col className="text-center p-0">
          <div className="page_404_bg">
            <h1 className="text-center display-2">404</h1>
          </div>
          <div className="page_404_content">
            <h2>Look like you&apos;re lost</h2>

            <p>the page you are looking for not avaible!</p>

            <Link to="/" className="btn btn-dark">
              Go to Home
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default PageNotFound;
