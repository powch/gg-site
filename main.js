//initial fade in for .post
var fade = function() {
    $(".post, .quote").hide().fadeIn(1000);
}

//discord bot link button
var discordBtn = function() {
    document.getElementById("discord").addEventListener("click", function() {
        window.open("#");
    });
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showToggle() {
    document.getElementById("myDrop").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-toggle')) {

        var dropdowns = document.getElementsByClassName("dropdown-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//loads functions when DOM is loaded
$(function() {
   fade();
   discordBtn();
});