class Paciente {
  constructor(nom,edad,enf,per){
    this.nombre = nom;
    this.edad = edad;
    this.enfermedad = enf;
    this.personal = per;
    this.entrada = new Date();
    this.salida;
  }

  alta() {
    this.salida = new Date();
  }

}
