// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){


$('#btn_sonido').click(function (){
	if($('#btn_sonido').hasClass('ui-icon-audio'))
	{
		//apagar sonido
		$('#btn_sonido').removeClass('ui-icon-audio')
		$('#btn_sonido').addClass('ui-icon-forbidden');
		alert('se apago el sonido');
		}
		else
		{
		$('#btn_sonido').removeClass('ui-icon-forbidden')
		$('#btn_sonido').addClass('ui-icon-audio');
		navigator.notification.beep(1);
		alert('se prendio el sonido');
		}
});

$('#btn_vibrar').click(function (){
	if($('#btn_vibrar').hasClass('ui-icon-clock'))
	{
		//apagar sonido
		$('#btn_vibrar').removeClass('ui-icon-clock')
		$('#btn_vibrar').addClass('ui-icon-forbidden');
		alert('se quito la vibracion');
		}
		else
		{
		$('#btn_vibrar').removeClass('ui-icon-forbidden')
		$('#btn_vibrar').addClass('ui-icon-clock');
		navigator.notification.beep(1);
		alert('se activo la vibracion');
		}
});
//}); 
});
