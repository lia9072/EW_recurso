$(document).ready(function(){
	
	/* c1 */
	$('#c1').mouseover(function() {	
			$('#c1').addClass('borde');
			$('#c1').attr('src', "/img/Auto01_1.jpg" ).css('transition', ' 1s')		
	})
	$('#c1').mouseout(function() {
		$('#c1').removeClass('borde');
		$('#c1').attr('src', "/img/AutoMarca01.jpg" )
	})
/* c2 */

	$('#c2').mouseover(function() {	
		$('#c2').addClass('borde');
		$('#c2').attr('src', "/img/Auto03.jpg" ).css('transition', ' 1s')

	})
	$('#c2').mouseout(function() {
	$('#c2').removeClass('borde');
	$('#c2').attr('src', "/img/AutoMarca02.jpg")
	})
/* c3 */
	$('#c3').mouseover(function() {	
		$('#c3').addClass('borde');
		$('#c3').attr('src', "/img/Auto02_2.jpg" ).css('transition', ' 1s')

	})
	$('#c3').mouseout(function() {
	$('#c3').removeClass('borde');
	$('#c3').attr('src', "/img/AutoMarca03.jpg")
	})
/* c4 */
	$('#c4').mouseover(function() {	
		$('#c4').addClass('borde');
		$('#c4').attr('src', "/img/Auto03_3.jpg" ).css('transition', ' 1s')

	})
	$('#c4').mouseout(function() {
	$('#c4').removeClass('borde');
	$('#c4').attr('src', "/img/AutoMarca04.jpg")
	})
/* c5 */
$('#c5').mouseover(function() {	
	$('#c5').addClass('borde');
	$('#c5').attr('src', "/img/Auto04_4.jpg" ).css('transition', ' 1s')

})
$('#c5').mouseout(function() {
$('#c5').removeClass('borde');
$('#c5').attr('src', "/img/AutoMarca05.jpg")
})

/* c6 */
$('#c6').mouseover(function() {	
	$('#c6').addClass('borde');
	$('#c6').attr('src', "/img/Auto05_5.jpg" ).css('transition', ' 1s')

})
$('#c6').mouseout(function() {
$('#c6').removeClass('borde');
$('#c6').attr('src', "/img/AutoMarca06.jpg")
})








	rotacion();
})



var foto = new Array();
foto[0] = "/img/Auto01.jpg";
foto[1] = "/img/Auto02.jpg";
foto[2] = "/img/Auto03.jpg" ;
foto[3] = "/img/Auto04.jpg";
foto[4] = "/img/Auto05.jpg" ;

var c=0;

function rotacion(){
	$('#baner').attr("src",foto[c]);
	c++;

	if(c>=foto.length){
		c=0;
	}

	setTimeout("rotacion()",2000);
}


$('[id=btnc1]').click(function() {
	confirm("¿Esta seguro que desea agregar este producto?")
})




$('#btnnumero').click(function() {
	valor = $('#txtnumero').val();
	reg = /^([a-z]+)\@([a-z]+)\.([a-z]{2,3})$/; 
	debugger;
	resultado = valor.match(reg);
	if(resultado == null ){
		confirm("Ingrese su correo")	
	}
	else{
		alert("Correcto, gracias por consultarnos");
		alert("Pronto le llamaremos");
	}
	
})