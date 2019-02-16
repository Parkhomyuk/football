import React from 'react';


const FormField=({formdate,id,change})=>{
    const renderTemplate=()=>{
        let formTemplate=null;
        console.log('formDat', formdate.email.element)
        switch(formdate.email.element){
            case('input'):
              return(
                  <div>
                      <input {...formdate.email.config} value={formdate.value} onChange={(event)=>change({event,id})}/>
                  </div>
              )
            break;
            default:
                formTemplate=null
        }
        return formTemplate;
    }
    return(
        <div>
            {renderTemplate()}
        </div>
    )
}

export  default FormField;