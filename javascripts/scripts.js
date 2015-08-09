console.log("loaded")
//------------------------------------
//Starting everything below

TicTacToeGame.prototype.readyToStart = function readyToStart(){
this.player1Name = prompt("Player 1 - Please input your name.")
$('#player1').text("Player 1 is " + this.player1Name);
this.player2Name = prompt("Player 2 - Please input your name.")
$('#player2').text("Player 2 is " + this.player2Name);
};

// --------------------------
// TicTacToeGame    public interface....
function TicTacToeGame(){
  this.player1Name;
  this.player2Name;
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
  game = new TicTacToeGame();

  game.init( $('#board'));
  game.start();

});


//--------------------------------------
//Logic Logic Logic Logic Logic Logic Logic


var board =
    [[0,0,0],
     [0,0,0],
     [0,0,0]];
     //TODO: To store the values when clicked in a box.

var player1 = 'X';
var player2 = 'O';
//TODO: Making it static but could have asked dynamically what letters or in this case what color they want to be.
var turn = player1;
//TODO: Making player 1 go first.
var moveNumber = 1;
//TODO:: Just storing what move number it is.
var winner = false;

//-------------------

TicTacToeGame.prototype.winningRows = function winningRows(){

for (var i = 0; i < 3; i++) {
    if (board[i][0] === 'X' && board[i][1] === 'X' && board[i][2] === 'X'){
       winner = true;
  this.endGame("Player 1 is the winner");
  } else if (board[i][0] === 'O' && board[i][1] === 'O' && board[i][2] === 'O'){
     winner = true;
    this.endGame("Player 2 is the winner");
  }
}

};

TicTacToeGame.prototype.winningCols = function winningCols(){

for (var i = 0; i < 3; i++) {
    if (board[0][i] === 'X' && board[1][i] === 'X' && board[2][i] === 'X'){
       winner = true;
  this.endGame("Player 1 is the winner");
} else if (board[0][i] === 'O' && board[1][i] === 'O' && board[2][i] === 'O'){
   winner = true;
  this.endGame("Player 2 is the winner");
  }
}

};



TicTacToeGame.prototype.winningDiagonals = function winningDiagonals(){

    if ((board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') ||
         (board[2][0] === 'X' && board[1][1] === 'X' && board[0][2] === 'X')){
           winner = true;
  this.endGame("Player 1 is the winner");
} else if ((board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') ||
           (board[2][0] === 'O' && board[1][1] === 'O' && board[0][2] === 'O')){
              winner = true;
    this.endGame("Player 2 is the winner");
  }

};
//TODO: Check if the winner wins diagonally

TicTacToeGame.prototype.checkTie = function checkTie(){
var filledCells = [];
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (board[i][j] === 'X' || board[i][j] === 'O'){
      filledCells.push(board[i][j]);
    }
  }
}
  if(filledCells.length === 9 && winner === false){
    this.endGame("It's a tie!")
  }
};

//TODO: Check if the game ends in a tie

TicTacToeGame.prototype.checkWinner = function checkWinner(){

  TicTacToeGame.prototype.winningRows();
  TicTacToeGame.prototype.winningCols();
  TicTacToeGame.prototype.winningDiagonals();
  TicTacToeGame.prototype.checkTie();

};

//TODO: Check all the winning combos


// End the game, and refresh the page
TicTacToeGame.prototype.endGame = function endGame(message) {

  	alert(message);
    var reload = confirm("Wanna play again?");

    if (reload == true) {
    location.reload();
     } else {
     alert("Thank You for playing!");
}
};

//TODO: Reloading the game

//---------------------------------------------------------------------
//Generating the HTML below through jquery

TicTacToeGame.prototype.generateBoxNode = function generateBoxNode(){
  var boxNode = $('<td>').addClass('cell');
  return boxNode;
}
// TODO: Generate Box node



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
    var playerClick = $(this).addClass('blue');
    turn = player1;
  } else {
    var playerClick = $(this).addClass('green');
    turn = player2;
  }
  $(this).append(playerClick).addClass('cellfilled');
  moveNumber = moveNumber + 1;
  TicTacToeGame.prototype.checkWinner();
  });
};

// TODO: Generates a letter when the user clicks on the board


TicTacToeGame.prototype.storeCell = function storeCell(){


$('.cell').on('click', function(e) {
  var filledCell = $(e.target);

  var row = filledCell.data('row');
  var col = filledCell.data('col');
  board[row][col] = turn;

})
};
// TODO:extracting the value when a cell is clicked and storing it in the board array
