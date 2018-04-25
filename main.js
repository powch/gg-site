//initial fade in for .post
var fade = function() {
    $(".post, .quote").hide(0).fadeIn(1000);
}

//discord bot link button
// var discordBtn = function() {
//     document.getElementById("discord").addEventListener("click", function() {
//         window.open("https://discordapp.com/oauth2/authorize?client_id=437363717076811808&permissions=19456&scope=bot");
//     });
// }

//loads functions when DOM is loaded
$(function() {
   fade();
   discordBtn();
});