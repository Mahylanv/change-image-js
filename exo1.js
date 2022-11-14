// SELECTION
var monImage =document.getElementsByTagName('img');
console.log(monImage);
var monBouton = document.getElementsByTagName('button');
console.log(monBouton);

// EVENEMENT
monBouton[0].addEventListener('click', changeImage)



// FONCTION
var image = 'a';
function changeImage() {
	console.log('click !');

	if (image == 'a') {
		image = 'b';
	}
	else {
 		image = 'a';
 	}

 	monImage[0].src = 'img/' + image + '.jpg';

}