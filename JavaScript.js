const containerlist = document.getElementById("container-list");
const tarjeta = document.getElementById("tarjeta")
const boton = document.getElementById("boton");


function IngresarTarea(event){
  event.preventDefault();
  const tarea = document.createElement("div");
  // const button = document.createElement("button");
  tarea.textContent = event.target.inputtarea.value;
  // tarea.setAttribute("id",tarea)
  // button.textContent = "X"
  // button.setAttribute("id",button)
  // tarea.style.cssText = "border:1px solid black;width:20px" 
  // tarea.appendChild(button)
  tarjeta.appendChild(tarea);
}

boton.onclick = function(){
  tarjeta.textContent = ""
}







