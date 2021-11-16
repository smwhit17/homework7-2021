var video = document.querySelector("#player1");
var slider = document.querySelector("#slider");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = slider.value + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate = video.playbackRate * 0.95 ;
	console.log("new playback speed " + video.playbackRate);
});

document.querySelector ("#faster").addEventListener ("click", function(){
	console.log("Speed Up");
	video.playbackRate = video.playbackRate / 0.95;
	console.log("new playback speed " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip Ahead");
	if (video.currentTime < video.duration - 15){
		video.currentTime += 15;	
	}
	else{
		video.currentTime = 0;
	}
	console.log("new current time" + video.currentTime);
})

document.querySelector("#mute").addEventListener("click", function(){
	
	if (video.muted === false){
		console.log("Mute");
		video.muted = true;
		console.log("video muted " + video.muted);
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	else{
		video.muted = false;
		console.log("video muted " + video.muted);
		document.querySelector("#mute").innerHTML = "Mute";
	}
})

document.querySelector("#slider").addEventListener("click", function(){
	// console.log(this.value);
	video.volume = this.value / 100;
	// console.log(video.volume)
	volume.innerHTML = video.volume * 100 + "%"
	console.log("Volume: " + volume.innerHTML)
})

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Vintage")
	video.classList.add("oldSchool")

})

document.querySelector("#orig").addEventListener("click", function(){
	console.log("original")
	video.classList.remove("oldSchool")
})




