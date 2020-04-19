import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function Search(props) {
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Control
              onChange={(e) => props.onChange(e)}
              placeholder="Movie Title"
            />
          </Col>
          <Col>
            <Form.Control placeholder="Movie Year" />
          </Col>
          <Col>
            <Form.Check custom inline label="Movies" />
            <Form.Check custom inline label="Series" />
            <Form.Check custom inline label="Shows" />
          </Col>
        </Row>
      </Form>
      <Button onClick={() => props.searchMovies()}>Search</Button>
    </div>
  );
}
