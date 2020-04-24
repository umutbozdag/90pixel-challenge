import React from "react";
import { Form, Row, Col, Button, Container, Pagination } from "react-bootstrap";
import movieStore from "../../store/movieStore";
import { observer } from "mobx-react";
import "./search.module.scss";
import Arrow from "../Arrow/Arrow";

@observer
export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Form onKeyPress={this.props.handleKeyPress} className="ml-3">
          <Row>
            <Col>
              <Row>
                <Col sm={4}>
                  <Form.Control
                    required
                    onChange={this.props.onChange}
                    placeholder="Title"
                    name="input"
                  />
                </Col>
                <Col sm={4}>
                  <Form.Control
                    type="number"
                    onChange={this.props.onChange}
                    name="year"
                    placeholder="Year"
                  />
                </Col>
                <Col sm={4}>
                  <Form.Control
                    name="type"
                    onChange={this.props.onChange}
                    as="select"
                  >
                    <option name="movie" value="movie" defaultValue>
                      Movie
                    </option>
                    <option name="series" value="series">
                      Series
                    </option>
                    <option name="episode" value="episode">
                      Episode
                    </option>
                  </Form.Control>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
        <Container>
          <Row>
            <Col className="text-center">
              <Button
                size="lg"
                className="mt-3 mb-5"
                onClick={this.props.searchMovies}
              >
                Search
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
