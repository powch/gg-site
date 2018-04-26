

//initial fade in for .post
const fade = () => {
    $(".post, .quote, .team").hide(0).fadeIn(1000);
}

//discord bot link button
const discordBtn = () => {
    document.getElementById("discord").addEventListener("click", function () {
        window.open("http://www.google.com");
    });
}

//randomize quote generation
const quoteRandomizer = () => {
    let quoteArray = [
        "I lost insterest after John left the show.<br><span>--Dan Avidan</span>",
        "It's not cheating if you can do it.<br><span>--Arin Hanson</span>",
        "Hey guys. I'm Smiling Arin Turnip. Telling you to stay in school. Don't do drugs! Eat your teeth.<br><span>--Arin Hanson</span>",
        "Be yourself and be good to people, and the cool people will like you and everyone else can go fuck themselves.<br><span>--Dan Avidan</span>",
        "Did you think I came out the pussy drawing fuckin' Mozart?<br><span>--Arin Hanson</span>",
        "Harrison Ford hurt me.<br><span>--Dan Avidan</span>"
    ];
    let index = Math.floor(Math.random() * quoteArray.length);
    let quoteElement = document.getElementById("quoteText");
    quoteElement.innerHTML = quoteArray[index];
}



//loads functions when DOM is loaded
$(function() {
   fade();
   discordBtn();
   quoteRandomizer();
});

