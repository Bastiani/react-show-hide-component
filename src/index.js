import React from "react";
import { render } from "react-dom";

require("./styles.css");

const styles = {
  fontFamily: "sans-serif",
  margin: 10
};

const Message = () => (
  <div>
    <h1>Test Title</h1>
    <p>Text Content</p>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1, 2, 3, 4],
      showMessage: false
    };

    this.toggleMessage = () => {
      this.setState({
        showMessage: !this.state.showMessage
      });
    };

    this.handleDelete = item => {
      this.setState({
        items: this.state.items.filter(_item => _item !== item)
      });
    };

    this.renderItem = (item, i) => (
      <li key={i}>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => this.handleDelete(item)}
        >
          Delete
        </button>
        teste{item}
      </li>
    );
  }

  render() {
    return (
      <div style={styles}>
        <button className="btn btn-primary" onClick={this.toggleMessage}>
          Show Component
        </button>
        {this.state.showMessage && <Message />}
        <div>
          <ul>{this.state.items.map(this.renderItem)}</ul>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
