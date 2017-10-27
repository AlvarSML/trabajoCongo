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
    let nom = prompt("Nombre: ");
    let localidad = prompt("Localidad: ");
    let responsable = prompt ("Responsable: ");
    
  //añade objeto hospital
    nh = new Hospital(nom, localidad, responsable);
    hosp.push(nh);
    
    actualizarHosp();
}

function actualizarHosp(){
    //Aumentar el contado de hospitales
     document.getElementById('nh').value = hosp.length;
    //Poner por defecto el primer hospital ingresado
     document.getElementById('h').value = hosp[0].getNombre();
}


function verHospitales(){
    let cont = "<p>";
    
    for (let i = 0; i < hosp.length; i++){
        cont += ("<p>Nombre: " + hosp[i].nombre + "</p> <p>Localidad: " + hosp[i].localidad +" </p> <p>Responsable: " + hosp[i].responsable +" </p><br/>");
    }
    
    cont += "<p>";
    document.getElementById('out').innerHTML = cont;
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
  //WIP
  let cont = "<p>";

  for (let i = 0; i < pac.length; i++) {
    cont += ("<p>paciente Nº "+i+"</p>");
    cont += ("<p>nombre :" + pac[i].nombre + "</p> <p>edad:" + pac[i].edad +" </p><br/>");
  }

  cont += "</p>";

  document.getElementById('out').innerHTML = cont;
}

/*al abrirse la pagina*/

  
  document.getElementById('np').value = 0;
  document.getElementById('nh').value = 0;
  
