import React from "react";
import { render } from "react-dom";

require("./styles.css");

const styles = {
  fontFamily: "sans-serif",
  margin: 10
};

const TestComponent = () => (
  <div>
    <h1>Test Title</h1>
    <p>Text Content</p>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testComponentVisible: false
    };

    this.handleClick = () => {
      this.setState({
        testComponentVisible: !this.state.testComponentVisible
      });
    };

    this.handleDelete = elRef => () => {
      this[elRef].className = "hidden";
    };
  }
  render() {
    return (
      <div style={styles}>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Show Component
        </button>
        {this.state.testComponentVisible && <TestComponent />}
        <div>
          <ul>
            {[1, 2, 3, 4].map(number => (
              <li ref={node => (this[`post-${number}`] = node)} key={number}>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={this.handleDelete(`post-${number}`)}
                >
                  Delete
                </button>
                {` teste${number}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
