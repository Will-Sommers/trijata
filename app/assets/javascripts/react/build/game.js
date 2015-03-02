/** @jsx React.DOM */

var Box = React.createClass({displayName: 'CategoryColumn',
  render: function() {
    return (
      React.DOM.div(null, this.props.questionData.question)
    )
  }
});

var CategoryColumn = React.createClass({displayName: 'CategoryColumn',

  render: function() {
    return (
      React.DOM.div(null, 
        React.DOM.h2(null, " ", this.props.category.name, " "), 
        React.DOM.div(null, 
          this.props.category.boxes.map(function(box) {
            return Box({questionData: box})
          })
        )
      )
    )
  }
});

var Game = React.createClass({displayName: 'Game',
  render: function() {
    return (
      React.DOM.div(null, 
        React.DOM.h1(null, " ", this.props.gameData.name, " "), 
        React.DOM.div(null, 
          this.props.gameData.categories.map(function(category) {
            return CategoryColumn({category: category})
          })
        )
      )
    );
  }
});



var CreateGame = React.createClass({displayName: 'CreateGame',
  render: function() {
    return (
      React.DOM.form(null, 
        React.DOM.div({className: "form-element"}, 
          React.DOM.input({type: "text", placeholder: "Add your board name here"}), 
          React.DOM.label({name: "board_name"}, "Board Name")
        )
      )
    )
  }
});



