/*
$(document).ready(function(){
	alert("lo que quieras hacer");
});
*/

window.onload = () => {
    alert("JavaScript works!");
}

$('.toggle').click(function(){
    $('.formulario').animate({
        height: 'toggle',
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, 'slow');   
});