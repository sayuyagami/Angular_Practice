import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent implements OnInit {
  public restrtname:string=''
  public tagline:string=''
  adddata={
    "restaurantname":'',
    "tag":''
  }
  constructor(private apiservice:ApiService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  Onclick(){
    if(this.restrtname!=null && this.restrtname.length!=0 && this.tagline!=null&& this.tagline.length!=0){
    this.adddata.restaurantname=this.restrtname
    this.adddata.tag=this.tagline
    this.apiservice.addrestrt(this.adddata).subscribe()
    location.reload()
    }else{
      this.snackBar.open('Please fill Required Fields','ok', { 
        duration: 3000, 
        panelClass: 'red-snackbar' 
      }); 
    }
  }
}
