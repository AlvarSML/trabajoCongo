class Personal {
    //constructor de la clase Personal  id,nombre, especialidad, puesto
    constructor(id,nombre, especialidad, puesto){
        this.id = id; 
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.puesto = puesto;
    }
    //Funciones get 
    getId(){
        return this.id;
    } 
    getNombre(){
        return this.nombre;
    }
    getEspecialidad(){
        return this.especialidad;
    }
    getPuesto(){
        return this.puesto;
    }
    //Funciones set
    setID(id){
    this.id = id;
    }
    
    setNombre(nombre){
    this.nombre = nombre;
    }
    setEspecialidad(especialidad){
        this.especialidad = especialidad;
    }
    setPuesto(puesto){
        this.puesto = puesto;
    }



}