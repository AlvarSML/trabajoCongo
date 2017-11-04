let pac = [];
let hosp = [];
let empl = [];

function nEmpleado() {
 //Obtencion de datos
    let id = prompt ("Id: ")
    let nombre = prompt("Nombre: ");
    let especialidad = prompt("Especialidad: ");
    let puesto = prompt ("Puesto: ");

  //añade objeto hospital
    nem = new Personal(id ,nom, especialidad, puesto);
    hosp.push(nem);
  // actualizamos el array
    actualizarEmpl();
    
}
function editEmpleados() {
    let z = prompt("¿Que Empleado quiere modificar? (Introduzca el ID del empleado)");
    
    let id = prompt ("Id: ")
    let nombre = prompt("Nombre: ");
    let especialidad = prompt("Especialidad: ");
    let puesto = prompt ("Puesto: ");
    
    nem[z].setID(id);
    nem[z].setNombre(nombre);
    nem[z].setEspecialidad(especialidad);
    nem[z].setPuesto(puesto);
    
}

function delEmpleado(){
    let b = prompt("Que Empleado desea borrar (Introduzca el ID del empleado)");
    empl.splice(b);
    
}

function actualizarEmpl(){
    //Aumentar los empleados
     document.getElementById('idempl').value = empl.length;
}
    


function verEmpleados(){
    let cadEmpleados = "<p>";

    for (let i = 0; i < empl.length; i++){
        cadEmpleados += ("<p>Empleado Nº "+i+"</p>");
        cadEmpleados += ("<p>ID: " + empl[i].id + "</p> <p>Nombre: " + empl[i].nombre + "</p> <p>Especialidad: " + empl[i].especialidad +" </p> <p>Puesto: " + empl[i].puesto +" </p><br/>");
    }

    cadEmpleados += "<p>";
    document.getElementById('out').innerHTML = mosEmpleados;
}


function nEnfermedad() {
  //crear enfermedad
  //añade objeto enfermedad
}

function nHospital() {
    //Obtencion de datos
    let nom = prompt("Nombre: ");
    let localidad = prompt("Localidad: ");
    let responsable = prompt ("Responsable: ");

  //añade objeto hospital
    nh = new Hospital(nom, localidad, responsable);
    hosp.push(nh);

    actualizarHosp();
}

function modHospitales() {
    let j = prompt("¿Que hospital quiere modificar? (Introduzca el numero del hospital)");
    
    let nom = prompt("Nombre: ");
    let localidad = prompt("Localidad: ");
    let responsable = prompt ("Responsable: ");
    
    hosp[j].setNombre(nom);
    hosp[j].setLocalidad(localidad);
    hosp[j].setResponsable(responsable);
    
}

function borrHospital(){
    let p = prompt("Que hospital desea borrar (Introduzca el numero del hospital)");
    hosp.splice(p);
    
}

function actualizarHosp(){
    //Aumentar el contado de hospitales
     document.getElementById('nh').value = hosp.length;
    
    //Poner por defecto el primer hospital ingresado
     document.getElementById('h').value = hosp[0].getNombre();
}


function verHospitales(){
    let cadHospitales = "<p>";

    for (let i = 0; i < hosp.length; i++){
        cadHospitales += ("<p>Hospital Nº "+i+"</p>");
        cadHospitales += ("<p>Nombre: " + hosp[i].nombre + "</p> <p>Localidad: " + hosp[i].localidad +" </p> <p>Responsable: " + hosp[i].responsable +" </p><br/>");
    }

    cadHospitales += "<p>";
    document.getElementById('out').innerHTML = cadHospitales;
}

function nPaciente() {
  //obtencion de datos
  let nom = prompt("Nombre: ");
  let edad = prompt("Edad: ");
  let hosp = prompt("Hospital: ");
  let enfermedad;
  let personal;

  //creacion del objeto
  np = new Paciente(nom,edad,enfermedad,personal,hosp);
  pac.push(np);

  //actualizacion de la interfaz
  actualizarPac();
}

function actualizarPac(){
  document.getElementById('np').value = pac.length;
}

function verPacientes(){
  let cadPacientes = "<p>";

  for (let i = 0; i < pac.length; i++) {
    cadPacientes += ("<p>Paciente Nº "+i+"</p>");
    cadPacientes += ("<p>Nombre :" + pac[i].nombre + "</p> <p>Edad:" + pac[i].edad +" </p><br/>");
  }

  cadPacientes += "</p>";

  document.getElementById('out').innerHTML = cadPacientes;
}

/*al abrirse la pagina*/


  document.getElementById('np').value = 0;
  document.getElementById('nh').value = 0;
