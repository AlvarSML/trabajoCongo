let pac = [];
let hosp = [];
let enfs = [];

function nEmpleado() {
  //crear empleado
  //añade objeto empleado
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
