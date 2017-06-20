$(document).ready(function(){
var images=['images/p.png',
            'images/s.png',];

var randomNumber = Math.floor(Math.random() * images.length);
var bgImg = 'url(' + images[randomNumber] + ')';

$('.s1').css({'background':bgImg, 'background-size':'cover', });

});
