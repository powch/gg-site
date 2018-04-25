//initial fade in for .post
var fade = function() {
    $(".post, .quote").hide(0).fadeIn(1000);
}

//discord bot link button
// var discordBtn = function() {
//     document.getElementById("discord").addEventListener("click", function() {
//         window.open("#");
//     });
// }

//loads functions when DOM is loaded
$(function() {
   fade();
   discordBtn();
});