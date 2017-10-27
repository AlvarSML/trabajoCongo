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
  //crear hospital
  //añade objeto hospital
}

function nPaciente() {
  //obtencion de datos
  let nom = prompt("Nombre: ");
  let edad = prompt("Edad: ");
  let enfermedad;
  let personal;

  //creacion del objeto
  np = new Paciente(nom,edad,enfermedad,personal);
  pac.push(np);

  //actualizacion de la interfaz
  actualizarPac();
}

function actualizarPac(){
  document.getElementById('np').value = pac.length;
}

function verPacientes(){
  //WI^P
  let wpac = window.open("pacientes.html");
  let cont = "<p>";

  for (let i = 0; i < pac.length; i++) {
    cont += ("<p>" + pac[i].nombre + "</p>");

  }

  cont += "</p>";
  wpac.document.getElementById('pacs').innerHTML = cont;
}