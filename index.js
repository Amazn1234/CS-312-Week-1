
//array of file names of images
const images = 
[
	'images/dice1.png',
	'images/dice2.png',
	'images/dice3.png',
	'images/dice4.png',
	'images/dice5.png',
	'images/dice6.png'
]

//determine if page is first load or refresh
const perfEntries = performance.getEntriesByType("navigation");
if (perfEntries.length > 0 && perfEntries[0].type == "reload") 
{
	//page has been refreshed
    window.onload = setRandomImage();
	//console.log("page has been refreshed");
	changeHtml();
} 



////////////FUNCTION DECLARATIONS////////////////
/*
function: returns a random image from a list of images
inputs: list of images
outputs: randomly selected image
*/
function getRandomImage()
{
	//pick random image
	const randomIndex = Math.floor(Math.random()*images.length);
	return images[randomIndex];
}

/*
function: sets html code to the provided image, ensures no tie possible
inputs: image link
outputs: none
*/
function setRandomImage()
{
	var img1 = getRandomImage();
	var img2 = getRandomImage();

	/*
	//below prevents draws
	while ( img1 == img2 )
	{
		img2 = getRandomImage();
	}
	*/
	
	document.querySelectorAll("img")[0].src = img1;
	document.querySelectorAll("img")[1].src = img2;
}
/*
function: changes html based on which di has greater value
inputs: dice chosen
outputs: none
*/
function changeHtml()
{
	//load images
	var img1 = document.querySelectorAll("img")[0].src;
	var img2 = document.querySelectorAll("img")[1].src;

	//compare images
	//console.log(img1);
	//if player 1 di is greater change html: "Player 1 Wins!"
	if( img1 > img2)
	{
		document.querySelector("h1").textContent = "🚩Player 1 Wins!";
	}
	//else if player 2 di is greater change html: "Player 2 Wins!"
	else if(img2 > img1)
	{
		document.querySelector("h1").textContent = "Player 2 Wins!🚩";
	}
	else
	{
		document.querySelector("h1").textContent = "Draw!";
	}
}