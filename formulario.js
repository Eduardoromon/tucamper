// JavaScript Document
const nombre=document.getElementById("nombre");
const apellidos=document.getElementById("apellidos");
const direccion=document.getElementById("direccion");
const codigo_postal=document.getElementById("codigo-postal");
const ciudad=document.getElementById("ciudad");
const provincia=document.getElementById("provincia");
const telefono=document.getElementById("telefono");
const correo=document.getElementById("correo");
const boton_enviar=document.getElementById("boton-enviar");
const boton_siguiente=document.getElementById("boton-siguiente");
const expresion=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

boton_enviar.addEventListener("click",(e)=>{	
	e.preventDefault();
	let error = validarCampos();
	if (error[0]){
		alert("NO ha rellenado los campos correctamente");
	}else{
		alert("ha sido enviado correctamente");
		boton_siguiente.style.visibility="visible";
		boton_enviar.style.display="none";
	}
})

const validarCampos = ()=>{
	let error =[];
    if (nombre.value =="" || nombre.value.length < 2 || nombre.value.length > 10){
		error[0]= true;
		return error;
		
	}else if (apellidos.value =="" || apellidos.value.length < 6 || apellidos.value.length > 14){
		error[0]= true;
		return error;
		
	}else if (direccion.value ==""){
		error[0]= true;
		return error;
		
	}else if (codigo_postal.value ==""){
		error[0]= true;
		return error;
		
	}else if (ciudad.value ==""){
		error[0]= true;
		return error;
		
	}else if (provincia.value ==""){
		error[0]= true;
		return error;
		
	}else if (telefono.value ==""){
		error[0]= true;
		return error;
		
	}else if (correo.value.length < 5 || correo.value.length > 40){
		error[0]= true;


	}else if (!expresion.test(correo)){
		error[0]= true;
	}
	
	error[0]=false;
	return error;
	
		
}