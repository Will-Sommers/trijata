/** @jsx React.DOM */

var Box = React.createClass({displayName: 'CategoryColumn',
  render: function() {
    return (
      <div>{this.props.questionData.question}</div>
    )
  }
});

var CategoryColumn = React.createClass({displayName: 'CategoryColumn',

  render: function() {
    return (
      <div>
        <h2> {this.props.category.name} </h2>
        <div>
          {this.props.category.boxes.map(function(box) {
            return <Box questionData={box} />
          })}
        </div>
      </div>
    )
  }
});

var Game = React.createClass({displayName: 'Game',
  render: function() {
    return (
      <div>
        <h1> {this.props.gameData.name} </h1>
        <div>
          {this.props.gameData.categories.map(function(category) {
            return <CategoryColumn category={category} />
          })}
        </div>
      </div>
    );
  }
});



var CreateGame = React.createClass({displayName: 'CreateGame',
  render: function() {
    return (
      <form>
        <div className='form-element'>
          <input type='text' placeholder='Add your board name here' />
          <label name='board_name'>Board Name</label>
        </div>
      </form>
    )
  }
});



