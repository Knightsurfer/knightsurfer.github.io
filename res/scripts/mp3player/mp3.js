var track = ["https://knightsurfer.github.io/res/music/goron.mp3","https://knightsurfer.github.io/res/music/gbhorror.mp3"];
var trackName = ["Goron Valley - Nintendo","Gameboy Horror - Nintendo"]





var index = 0;
var playing = false;
document.getElementById("mp3_src").src = track[index];
	
function Back()
{ 
	if(index  < 1)
	{
		index = trackName.length - 1;
	}
	else
	{
		index--;		
	}
	document.getElementById("mp3_src").src = track[index];
	document.getElementById("mplayer_track").innerHTML = trackName[index];
	document.getElementById("myMusic").load();
	if(playing) document.getElementById("myMusic").play();
} 
		
function Play() 
{ 
	if(myMusic.paused)
	{
		document.getElementById("myMusic").play();
		document.getElementById("mplayer_play").innerHTML = "||";
		playing = true;
	}
	else
	{
		document.getElementById("myMusic").pause();
		document.getElementById("mplayer_play").innerHTML = ">";
		playing = false;
	}
}

function Skip()
{ 
	if(index > trackName.length  - 2)
	{
		index = 0;
	}
	else
	{
		index++;	
	}
	document.getElementById("mp3_src").src = track[index];
	document.getElementById("mplayer_track").innerHTML = trackName[index];
	document.getElementById("myMusic").load();
	if(playing) document.getElementById("myMusic").play();
} 
