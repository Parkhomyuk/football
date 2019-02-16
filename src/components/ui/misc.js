import Router from 'react';
import {Link} from 'react-router-dom';
import React from 'react';

export  const Tag=(props)=>{
    const template =<div style={{
    background:props.bck,
    fontSize:props.size,
    color: props.color,
    padding:'5px 10px',
    display: 'inline-block',
    fontFamily:'Roboto',
    ...props.add
    }}>
        {props.children}
    </div>
   if(props.link){
       return(
           <Link to={props.linkto} style={{cursor:'pointer'}}>
               {template}
           </Link>
       )
   }else{
       return template
   }
}

export const firebaseLooper=(snapshot)=>{
    let data=[];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    })
    return data;
}

export const arrayReverse=(actualeArray)=>{
    let reverseArr=[];

    for(let i=actualeArray.length-1;i>=0;i--){
        reverseArr.push(actualeArray[i])
    }
    return reverseArr;
}

export const Validate=(element)=>{
    let error=[true,''];
    if(element.validation.required){
        const valid=element.value.trim()!=='';
        const message=`${!valid ? 'this field is required':''}`
        error=!valid ?[valid,message]:error;
    }
        return error;
}