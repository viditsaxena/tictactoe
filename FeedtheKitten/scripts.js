console.log('Loaded');



// TODO: Generate random kitten node

FeedKittenGame.prototype.randomKittenUrl = function randomKittenUrl(){
  var width = Math.floor(Math.random()*200)+100;
  var height = Math.floor(Math.random()*200)+100;
  return "http://placekitten.com/"+width+"/"+ height;
};

FeedKittenGame.prototype.generateKittenNode = function generateKittenNode(){
  var kittenNode = $('<div>').addClass('kitten-box');
  var kittenImg = $('<img>').addClass('kitten').attr('src', this.randomKittenUrl());
  kittenNode.append(kittenImg);
  return kittenNode;
};
// TEST: ***  generateKittenNode should return a div with and img inside that links to a placekiten image


FeedKittenGame.prototype.generateBoard = function generateBoard(width, height){

  var kittenBoard = $('<div>').addClass('kitten-board');
  var kittenRow;
  var kittenBox;
  for (var i = 0; i < height; i++) {
    kittenRow = $('<div>').addClass('kitten-row');
    for (var j = 0; j < width; j++) {
      kittenBox = this.generateKittenNode();
      kittenRow.append(kittenBox);
    }
    kittenBoard.append(kittenRow);
  }

  return kittenBoard;
};
// TEST: **** generateBoard(3, 2)... should return a div with 3 columns and 2 rows



FeedKittenGame.prototype.bindClickKitten = function bindClickKitten(){
  $('#kitten-playground').on('click', '.kitten-box', function(){
    $(this).find('.kitten').fadeOut();
  });
};
// TEST: **** When I click on a kitten... it fades out



FeedKittenGame.prototype.kittensRise = function kittensRise(){
  var scope = this;  // context, that... anything
  setInterval(function(){
    scope.kittenSeekTreat();
  }, 1000);
};
// TEST: random kittens rise... at interval


FeedKittenGame.prototype.kittenSeekTreat = function kittenSeekTreat(){
  var kittens = this.board.find('.kitten');
  var randIndex = Math.floor(Math.random()*kittens.length);
  var kittenWhoWillRise = kittens.eq(randIndex);
  kittenWhoWillRise.fadeIn();
};
// TEST: Random Kitten Shows up...




// --------------------------
// FeedKittenGame    public interface....
function FeedKittenGame(options){
  this.width = options.width;
  this.height = options.height;
}

FeedKittenGame.prototype.init = function init(domNode){
  this.board = this.generateBoard(this.width, this.height);
  domNode.append(this.board);
  this.bindClickKitten();
  $('.kitten').hide();
};

FeedKittenGame.prototype.start = function start(){
  this.kittensRise();
};


// -------------------------------------

// Start the game
var game;

$(document).ready(function(){
  game = new FeedKittenGame({
    width: 3,
    height: 2
  });

  game.init( $('#kitten-playground') );
  game.start();

});



// TODO: Bind click of kitten... to remove the kitten
