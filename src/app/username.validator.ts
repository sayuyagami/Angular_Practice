import { AbstractControl } from "@angular/forms"; 
 
export function forbiddenname(control:AbstractControl):{[key:string]:any}|null{ 
    const forbidden=/admin/.test(control.value); 
    return forbidden ?{'forbidname':{value:control.value}}:null; 
  } 
 
  export function emaildomain(control:AbstractControl):{[key:string]:any}|null{ 
    const email:string=control.value; 
    const domain=email.substring(email.lastIndexOf('@')+1); 
    if(domain.toLowerCase()==='gmail.com'){ 
        return null; 
    }else{ 
        return{'emailDomain':true} 
    } 
  }

  export function mobilenovalidate(control:AbstractControl):{[key:string]:any}|null{ 
    const phnnum:string=control.value; 
    
    if(phnnum.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) && ! (phnnum.match(/0{5,}/)) )
    { 
        return null; 
    }else{ 
        return{'notvalidnumber':true} 
    } 
  }