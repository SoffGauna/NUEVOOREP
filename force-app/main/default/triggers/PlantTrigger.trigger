trigger PlantTrigger on     Plant__c (before insert, before update) {

    //Trigger.isBefore, Trigger.isInsert...
    //cuando se crea o actualiza una planta (cambiando su fecha de riego)--> calcular siguiente fecha de riego
    if (Trigger.isInsert){
        //calcular siguiente fecha de riego
    }

    if (Trigger.isUpdate){
        //si esta cambiando la fecha de riego
        //Trigger.old/Trigger.new/Trigger.oldMap/Trigger.newMap
        //obtener valor nuevo de la fecha de riego Trigger.new
        //obtener el valor antiguo de la fecha de riego de Trigger.old
        for (Plant__c newPlant : Trigger.new) {
            Plant__c oldPlant =Trigger.oldMap.get(newPlant.Id)
            if(oldPlant.Last_Watered__c != newPlant.Last_Watered__c){
             //calcular siguiente fecha de riego
        }
     }
        
       
    }

   //cuando se crea o actualiza una planta (cambiando su fecha de abonado)--> calcular siguiente fecha de abonado


}