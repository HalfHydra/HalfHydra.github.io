var chain = $("#chains")[0];
$(".img-wrapper").mouseenter(function() {
    chain.currentTime = 0;
		chain.play();
});
var music = document.getElementById('music');
document.getElementById("music").loop = true;
music.play();