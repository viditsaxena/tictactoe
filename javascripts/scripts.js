console.log("loaded")
//--------------------------------------
//Logic Starts now

var board =
    [[0,0,0],
     [0,0,0],
     [0,0,0]];

var player1 = 'X';
var player2 = 'O';
var turn = player1;
var moveNumber = 1;


TicTacToeGame.prototype.winningCombos = function winningCombos(){
  if ()
}


TicTacToeGame.prototype.generateBoxNode = function generateBoxNode(){
  var boxNode = $('<td>').addClass('cell');
  return boxNode;
}
// TODO: Generate Box node
//
// var col = $('.square').data('col');
// var row = $('.square').data('row');


TicTacToeGame.prototype.storeCell = function storeCell(){

/*for (var i = 0; i < 3; i++){
  $('.cellfilled').data('col')
}
if(filledCells.length) {
  var row = $('.cellfilled').data("row");
  var col = $('.cell').data("col");
  board[row][col] = 0;

} else {
var row = $('.cellfilled').data("row");
var col = $('.cellfilled').data("col");
board[row][col] = turn;
}
};

  var position = {
    col: cell.attr('col'),
    row: cell.attr('row')
  }

*/
$('.cell').on('click', function(e) {
  var filledCell = $(e.target);

  var row = filledCell.data('row');
  var col = filledCell.data('col');
  board[row][col] = turn;

})
};



TicTacToeGame.prototype.generatePlayGround = function generatePlayGround(){

  var playTable = $('<table>')
  var playRow;
  var playBox;
  for (var i = 0; i < 3; i++) {
    playRow = $('<tr>').addClass('playrow');
    for (var j = 0; j < 3; j++) {
      playBox = this.generateBoxNode().attr('data-row',i).attr('data-col', j);
      playRow.append(playBox);
    }
    playTable.append(playRow);
  }
  var board = $('#board').append(playTable);
  return board;
}

// TODO: Generates the playGround

TicTacToeGame.prototype.bindClickLetter = function bindClickLetter(){
  TicTacToeGame.prototype.storeCell();
  //do something
  $('.playrow').on('click','.cell', function(){
    if(moveNumber % 2 === 0){
    var playerClick = $('<h3>').text(player2);
    turn = player1;
  } else {
    var playerClick = $('<h3>').text(player1);
    turn = player2;
  }
  $(this).append(playerClick).addClass('cellfilled');
  moveNumber = moveNumber + 1;
  });
};

// TODO: Generates a letter when the user clicks on the board

TicTacToeGame.prototype.readyToStart = function readyToStart(){
alert("Lets start the game");
};

// --------------------------
// TicTacToeGame    public interface....
function TicTacToeGame(options){
  this.playerX = options.name1;
  this.playerO = options.name2;
  this.moveNumber = 1;
}

TicTacToeGame.prototype.init = function init(domNode){
  this.board = this.generatePlayGround();
  domNode.append(this.board);
  this.bindClickLetter();
};

TicTacToeGame.prototype.start = function start(){
  this.readyToStart();
};


// -------------------------------------

// Start the game
var game;

$(document).ready(function(){
  game = new TicTacToeGame("Messi","Ronaldo");

  game.init( $('#board'));
  game.start();

});
