$(function(){
	var splashes = ["Click here to visit my Patreon!","Want the music you heard on my socials? Click here!","Here is my Patreon Link! (Click here)","Looking for my Patreon? Click here!","All of my music for $5? Click here!","Join my Patreon! (click here)"];
	$("#splash").html($("#splash").html().replace("Loading...", splashes[Math.floor(Math.random()*splashes.length)]));
});