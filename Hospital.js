class Hospital{
    
    //Creamos el constructor de la clase
    constructor(nombre, localidad, responsable){
        
        this.nombre = nombre;
        this.localidad = localidad;
        this.responsable = responsable;
        
    }
    
    //Creamos los Get y Set
    
    //Set y Get de Nombre
    setNombre(nombre){
        this.nombre = nombre;
    }
    
    getNombre(){
        return this.nombre;
    }
    
    //Set y Get de Localidad
    
    setLocalidad(localidad){
        this.localidad = localidad;
    }
    
    getLocalidad(){
        return this.localidad;
    }
    
    //Set y Get de responsable
    
    setResponsable(responsable){
        this.responsable = responsable
    }
    
    getResponsable(){
        return this.responsable;
    }
    
}