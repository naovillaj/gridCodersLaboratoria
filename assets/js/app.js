
window.addEventListener('load', function(){

	var cuartaPromocion = document.getElementById("chile");
	var quintaPromocion = document.getElementById("perua");
	var sextaPromocion = document.getElementById("perub");
	var select = document.getElementById("promocion");
	

	select.addEventListener('change', function(){

		 

	    if(select.value == "promocion4"){
			
			cuartaPromocion.style.display = 'inline-block';
			quintaPromocion.style.display = 'none';
			sextaPromocion.style.display = 'none';

		}
		

		if(select.value == "promocion5"){
			
			cuartaPromocion.style.display = 'none';
			quintaPromocion.style.display = 'inline-block';
			sextaPromocion.style.display = 'none';
			

		}

		if(select.value == "promocion6"){
			
			cuartaPromocion.style.display = 'none';
			quintaPromocion.style.display = 'none';
			sextaPromocion.style.display = 'inline-block';
			
		}

		if(select.value == "todasPromociones"){
			
			cuartaPromocion.style.display = 'inline-block';
			quintaPromocion.style.display = 'inline-block';
			sextaPromocion.style.display = 'inline-block';
			
		}

	})
   
})