function Personal() {
    //constructor de la clase Personal  id,nombre, especialidad, puesto
    this.constructor=function(){
        this.id = id; 
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.puesto = puesto;
    }
    //Funciones get 
    this.getId= function(){
        return this.id;
    } 
    this.getNombre= function(){
        return this.nombre;
    }
    this.getEspecialidad= function(){
        return this.especialidad;
    }
    this.getPuesto= function(){
        return this.puesto;
    }
    //Funciones set
    this.  setId=function(id){
        Personal.add(id)
    }
    this.setNombre=function(nombre){
        Personal.add(nombre)
    }
    this.setEspecialidad=function(especialidad){
        Personal.add(especialidad);
    }
    this.setPuesto=function(puesto){
        Personal.add(puesto);
    }
    this.datos=function(){
        var Personal = new Personal();
        var id= prompt("Introduce el identificador del personal "+Personal.setid(id));
        var nombre= prompt("Introduce el nombre de la persona "+Personal.setNombre(nombre));
        var especialidad= prompt("Introduce el identificador del personal "+Personal.setEspecialidad(especialidad));
        var puesto= prompt("Introduce el identificador del personal "+Personal.setPuesto(puesto));
        
    }
    this.mostrarDatos=function(){
        for(i=0; i<Personal.length; i++){
            alert("El Id de esta persona es "+Personal.getId());
            alert("El Nombre de esta persona es "+Personal.getNombre());
            alert("La Especialidad de esta persona es "+Personal.getEspecialidad());
            alert("El Puesto de esta persona es "+Personal.getPuesto());
        }
            
    }
    this.borrar=function(){
        var x= prompt("Introduce el identificador del personal que desea eliminar")
        if(x == Personal.getID){
            Personal.delete;
        }
    }


}

