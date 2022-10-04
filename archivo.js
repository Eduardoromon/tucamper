// JavaScript Document

// Declarar variables

item_buscador = document.getElementById("item-buscador");
cover = document.getElementById("cover");
contenido_buscador = document.getElementById("contenido-buscador");


// creando filtrado de busqueda

document.getElementById("item-buscador").addEventListener("keyup",buscador_interno);
document.getElementById("cover").addEventListener("click",ocultar_buscador);


function buscador_interno(){
	
	filter=item_buscador.value.toUpperCase();
	li=contenido_buscador.getElementsByTagName("li");
	
	 for(i=0; i< li.length; i++){
		 a=li[i].getElementsByTagName("a")[0];
		 textValue=a.textContent||a.innerText;
		 
		 if(textValue.toUpperCase().indexOf(filter)> -1){
			 li[i].style.display="";
			 contenido_buscador.style.display="block";
			 cover.style.display="block";
			 
			 if(item_buscador.value === ""){
				 contenido_buscador.style.display="none";
				 cover.style.display="none";
			 }
			 
		 } else{
			 li[i].style.display="none";
		 }
	 }
}

function ocultar_buscador(){
	
	item_buscador.value="";
	cover.style.display="none";
	contenido_buscador.style.display="none";
	
}



// funcion mostrar navegador responsive

navegador = document.getElementById("navegador");

document.getElementById("item-menu").addEventListener("click",menu_responsive);

function mostrar(){
	navegador.style.display="block";
	navegador.style.position="absolute";
	navegador.style.width="60%";
	navegador.style.marginLeft="50%";
	navegador.style.transform="translate(-50%)";
}
function ocultar(){
	navegador.style.display="none";
}
function menu_responsive(){
	if (navegador.style.display == "none"){
		mostrar();
	}
	else{
		ocultar();
	}
}


