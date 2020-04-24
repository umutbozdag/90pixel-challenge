import React, { Component } from "react";
import { observer } from "mobx-react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import Nav from "../components/Navbar/Navbar";
@observer
export default class add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log("HELLo");
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <>
        <Nav />
        <Container className="mt-5">
          <h2 className="mb-5">Add Your Favorite Thing!</h2>

          <Form onSubmit={this.onSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="title" placeholder="Title" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridRating">
                <Form.Label>IMDB Rating</Form.Label>
                <Form.Control type="rating" placeholder="IMDB Rating" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="formGridYear">
                <Form.Label>Year</Form.Label>
                <Form.Control placeholder="Year" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridType">
                <Form.Label>Type</Form.Label>
                <Form.Control onChange={this.onChange} as="select">
                  <option name="movie" defaultValue value="movie">
                    Movie
                  </option>
                  <option name="series" value="series">
                    Series
                  </option>
                  <option name="episode" value="episode">
                    Episodes
                  </option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}
