class Hospital{
    
    //Creamos el constructor de la clase
    constructor(nombre, localidad, responsable){
        
        this.nombre = nombre;
        this.localidad = localidad;
        this.responsable = responsable;
        
    }
    
    //Creamos los Get y Set
    
    //Set y Get de Nombre
    function setNombre(nombre){
        this.nombre = nombre;
    }
    
    function getNombre(){
        return this.nombre;
    }
    
    //Set y Get de Localidad
    
    function setLocalidad(localidad){
        this.localidad = localidad;
    }
    
    function getLocalidad(){
        return this.localidad;
    }
    
    //Set y Get de responsable
    
    function setResponsable(responsable){
        this.responsable = responsable
    }
    
    function getResponsable(){
        return this.responsable;
    }
    
}