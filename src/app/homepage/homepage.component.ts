import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { ApiService } from '../services/api.service';

export interface DialogData {
  tag:string
  rstname:string
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public restaurants : any 
  public tagline:string=''
  parentdata={
    "id":0,
    "restaurantname":'',
    "tag":''
  }
  public rstname=''
  public tag=''
  //public masterArray : string[] | undefined
  
  constructor(private restdata:ApiService,public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.restdata.getrestaurantnames().subscribe(data=>this.restaurants=data)
  }

  Onselect(r:any){
    this.tag=this.tagline
    this.parentdata.id=r.id
    this.parentdata.restaurantname=r.restaurantname
    this.parentdata.tag=this.tagline
    //this.restdata.updaterest(r.id,this.parentdata).subscribe();
    //location.reload()
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogboxComponent, {
  //     width: '250px',
  //     data: {tag: this.tag,rstname:this.rstname}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.tag = result;
  //   });
      
  // }

}
