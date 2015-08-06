console.log("loaded")


function generateCompBoxNode (){
  var boxNode = $('<td>').addClass('square');
  var compLetter = $('<h3>').addClass('compLetter').text("X")
  boxNode.append(compLetter);
  return boxNode;
}


function generatePlayGround(){

  var playGround = $('<div>').attr('id', 'board');
  var playBoard = $('<table>');
  var playRow;
  var playBox;
  for (var i = 0; i < 3; i++) {
    playRow = $('<tr>').addClass('playrow');
    for (var j = 0; j < 3; j++) {
      playBox = generateCompBoxNode();
      playRow.append(playBox);
    }
  playBoard.append(playRow);
  }
  playGround.append(playBoard);

  return playGround;
}

function bindClickLetter(){
  $('#board').on('click','.square', function(){
    var playerLetter = $('<h3>').addClass('compLetter').text("X")
    $(this).find('.square').append(playerLetter)
  });
};
