var toggler = document.getElementById ('toggler');
var exit = document.getElementById ('exit');
var nav = document.getElementById ('nav');

toggler.addEventListener ('click', function(e) {
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
});

exit.addEventListener ('click', function(e) {
    nav.classList.add('hide-mobile');
    e.preventDefault();
});



































if (iWantToBecomeAFrontEndDeveloper === true) {
    alert ("you have to start now");
}