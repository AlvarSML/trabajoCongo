class Paciente {
  constructor(nom,edad,enf,per,hosp){
    this.nombre = nom;
    this.edad = edad;
    this.enfermedad = enf;
    this.personal = per;
    this.entrada = new Date();
    this.hospital = hosp;
    this.salida;
  }

  alta() {
    this.salida = new Date();
  }

}
