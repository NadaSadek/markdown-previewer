"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkUp = function (_React$Component) {
  _inherits(MarkUp, _React$Component);

  function MarkUp(props) {
    _classCallCheck(this, MarkUp);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.updateText = function (event) {
      _this.setState({
        value: event.target.value
      });
    };

    _this.renderText = function (text) {
      var markedResult = marked(text);
      return { __html: markedResult };
    };

    _this.state = {
      value: 'Heading\n=======\n\nSub-heading\n-----------\n\n ### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a\n line break\n\nText attributes *italic*, **bold**, \n `monospace`,~~strikethrough~~ .\n\nShopping list:\n\n * apples\n * oranges\n * pears\n\nNumbered list:\n\n 1. apples \n 2. oranges\n 3. pears\n\n write your own markdown to test.\n\n *[Nada Sadek](https://freecodecamp.com/nadasadek)*'
    };
    return _this;
  }

  MarkUp.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-md-6" },
        React.createElement(Input, { inputValue: this.state.value, textChanged: this.updateText })
      ),
      React.createElement(
        "div",
        { className: "col-md-6" },
        " ",
        React.createElement("div", { dangerouslySetInnerHTML: this.renderText(this.state.value) }),
        " "
      )
    );
  };

  return MarkUp;
}(React.Component);

var Input = function (_React$Component2) {
  _inherits(Input, _React$Component2);

  function Input(props) {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, _React$Component2.call(this, props));
  }

  Input.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      " ",
      React.createElement("textarea", { type: "text", rows: "30", cols: "70", onChange: this.props.textChanged, value: this.props.inputValue }),
      " "
    );
  };

  return Input;
}(React.Component);

ReactDOM.render(React.createElement(MarkUp, null), document.getElementById("container"));