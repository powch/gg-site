

//initial fade in for .post
const fade = () => {
    $(".post, .quote").hide(0).fadeIn(1000);
}

//discord bot link button
const discordBtn = () => {
    document.getElementById("discord").addEventListener("click", function () {
         window.open("www.google.com");
    });
}

//randomize quote generation


//loads functions when DOM is loaded
$(function() {
   fade();
   discordBtn();
   quoteRandomizer();
});