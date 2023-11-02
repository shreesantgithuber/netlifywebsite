let change=document.getElementsByTagName("span")[0];

function changeText(){
	let texts=["React","CSS","JS"];
	let colors=["red","blue","green"];
	change.innerText=texts[Math.floor(Math.random()*3)];
	change.style.color=colors[Math.floor(Math.random()*3)];
}

setInterval(changeText,2500);











