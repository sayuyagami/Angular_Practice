import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  credentials={
    useremail:'',
    password:''
  }
  public showPassword: boolean = false;
  public pageid=[] as any;
  public errormsg=[] as any;
  public val=[] as any;
  constructor(private route:Router) { }

  ngOnInit(): void {
    
  }

  onselect(){
    this.credentials.useremail='';
    this.credentials.password='';
    location.reload()
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  onSubmit(){
    if(this.credentials.useremail===localStorage.getItem('email') && this.credentials.password===localStorage.getItem('password')){
      this.route.navigate(['/home'])
    }else{
      this.errormsg="Invalid Credentials"
    }
  }
}
