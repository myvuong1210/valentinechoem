function valentine_ctrl($scope, ngAudio) {
  $scope.audio = ngAudio.load('ms/valentineyeuem.mp3');
  $scope.audio = ngAudio.load('ms/valentine.mp3');
  var james = $("#bond");

  var right = function() {
    james.animate({ left: "5px" }, 600, left);
  };

  var left = function() {
    james.animate({ left: "0px" }, 600, right);
  };
  right();

  $("#cancel").click(function() {
    $("#bond").toggle("slow");
    $("#stop").trigger('click');  
  });
  $("button#thiepvalentine").click(function() {
    $("#play").trigger('click'); 
  });
  $("#img-play").click(function() {
    $("#play").trigger('click'); 
  });
}
angular
  .module("thiepvalentine", ["ngAudio"])
  .controller("valentine_ctrl", valentine_ctrl);
