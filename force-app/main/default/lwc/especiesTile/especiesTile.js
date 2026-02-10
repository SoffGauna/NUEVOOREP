import { LightningElement, api} from "lwc";
import {NavigationMixin} from 'lightning/navigation';


export default class especiesTile extends NavigationMixin(LightningElement) {
    @api especies

     //especies.Location__c ="Indoors";
     //especies.Location__c ="Outdoors";
     //especies.Location__c ="Indoors, Outdoors";

     get isOutdoors() {
        return this.especies.Location__c.includes("Outdoors");
     }

     get isIndoors() {
        return this.especies.Location__c.includes("Indoors");
     }

     navigateToRecordViewPage() { //esto es un metodo
        //view a custom object record.
        this [NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.especies.Id,
                objectApiName: 'Species__c', 
                actionName: 'view'
            }
        });

     }
}
