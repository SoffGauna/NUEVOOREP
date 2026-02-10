import { LightningElement, wire } from 'lwc';
import getFilteredespecie from "@salesforce/apex/SpeciesService.getFilteredespecie";

export default class SpeciesList extends LightningElement {
    //PROPERTIES, GETTERS & SETTERS
    searchText = "";

    //LIFECYCLE HOOKS

    //WIRE
    @wire(getFilteredespecie, { searchText:'$searchText'}) //el simbolo de peso hace que el servicio wire invoque a este metodo apex cada vez que el metodo cambie
    Speciess;

    //METHODS
    handleInputChange(event) {
        const searchTextAux = event.target.value;
        console.log ("texto recibido: " + searchTextAux);
        if(searchTextAux.length >= 3 || searchTextAux === ""){
            this.searchText = searchTextAux; 
        }
        
    }

    //species.data-->datos devueltos por Apex
    //specie.error--> si error se almacena aqui
}


