import { Component, OnInit } from '@angular/core'; 
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { userModel } from '../userdata'; 
import {MatSnackBar} from '@angular/material/snack-bar'; 
import { emaildomain, forbiddenname, mobilenovalidate } from '../username.validator'; 
 
@Component({ 
  selector: 'app-registerpage', 
  templateUrl: './registerpage.component.html', 
  styleUrls: ['./registerpage.component.css'] 
}) 
export class RegisterpageComponent implements OnInit { 
 
 userregister!: FormGroup; 
 selectedgen:string=''; 
 genderlst:any=[ 
   'Male', 
   'Female' 
 ]; 
userdata=new userModel('','','','','','',0); 
 
  constructor(private fb:FormBuilder,private snackBar: MatSnackBar,private route:Router) { } 
   
  ngOnInit(): void { 
    this.userregister= this.fb.group({ 
      firstname:['',Validators.required], 
      lastname:['',[Validators.required]], 
      username:['',[Validators.required,Validators.minLength(4),forbiddenname]], 
      email:['',[Validators.required,emaildomain,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]], 
      gender:['',Validators.required], 
      phnnum:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),mobilenovalidate]], 
      password:['',Validators.required],//Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")], 
      confirmpassword:['',Validators.required] 
    }, 
    { 
      validators:[this.MustMatch('password','confirmpassword'),this.MustnotMatch('firstname','lastname')],
      
    } 
    ) 
  } 

  MustnotMatch(controlname:string,matchcontrolname:string){ 
    return(formGroup:FormGroup)=>{ 
      const control=formGroup.controls[controlname]; 
      const matchcontrol=formGroup.controls[matchcontrolname]; 
      if(matchcontrol.errors && !matchcontrol.errors['MustMatch']){ 
        return  
      } 
      if(control.value === matchcontrol.value){ 
        matchcontrol.setErrors({MustnotMatch:true}) 
      }else{ 
        matchcontrol.setErrors(null) 
      } 
    } 
  } 
 
  MustMatch(controlname:string,matchcontrolname:string){ 
    return(formGroup:FormGroup)=>{ 
      const control=formGroup.controls[controlname]; 
      const matchcontrol=formGroup.controls[matchcontrolname]; 
      if(matchcontrol.errors && !matchcontrol.errors['MustMatch']){ 
        return  
      } 
      if(control.value!== matchcontrol.value){ 
        matchcontrol.setErrors({MustMatch:true}) 
      }else{ 
        matchcontrol.setErrors(null) 
      } 
    } 
  } 
  radioChangeHandler(event:any){ 
    this.selectedgen=event.target.value; 
  } 
 
  senduserdata(){ 
    if(this.userregister.valid){ 
      this.userdata.firstname=this.userregister.value.firstname
      this.userdata.lastname=this.userregister.value.lastname
      this.userdata.username=this.userregister.value.username 
      this.userdata.useremail=this.userregister.value.email 
      this.userdata.gender=this.userregister.value.gender 
      this.userdata.userphn=this.userregister.value.phnnum 
      this.userdata.userpasswd=this.userregister.value.password 
      console.log(this.userdata); 
      localStorage.setItem('usernm',this.userdata.username)
      localStorage.setItem('firstnm',this.userdata.firstname)
      localStorage.setItem('email',this.userdata.useremail)
      localStorage.setItem('password',this.userdata.userpasswd)
      
      this.snackBar.open('Registration done Successfully','ok', { 
        duration: 3000, 
        panelClass: 'custom-snackbar' 
      }); 
      this.userregister.reset()
     //this.route.navigate(['/login'])
      }else{ 
      this.snackBar.open('Please fill Required Fields','ok', { 
        duration: 3000, 
        panelClass: 'red-snackbar' 
      }); 
    } 
  } 
   
   
   
 
}