import React from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import movieStore from "../../store/movieStore";
import { observer } from "mobx-react";
import "./search.module.scss";
@observer
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      input: "",
      type: "movie",
    };
  }
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  searchMovies = async () => {
    const { input, year, type } = this.state;
    if (input === "") return;

    console.log(input);
    await movieStore.addToSearchList(input, year, type);
  };

  render() {
    return (
      <div>
        <Form>
          <Row>
            <Col>
              <Row className="text-center">
                <Col sm={4}>
                  <Form.Control
                    required
                    onChange={this.onChange}
                    placeholder="Title"
                    name="input"
                  />
                </Col>
                <Col sm={4}>
                  <Form.Control
                    type="number"
                    onChange={this.onChange}
                    name="year"
                    placeholder="Year"
                  />
                </Col>
                <Col sm={4}>
                  <Form.Control
                    name="type"
                    onChange={this.onChange}
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
                className="mt-3 mb-4"
                onClick={this.searchMovies}
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
