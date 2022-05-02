import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  //@Input('parentData') masterArray : string[] | undefined;
  @Input('parentData') public parentdata: any;
  public rstrts : any 
  public checktag:boolean=false
  constructor(private apiservice:ApiService,private route:Router) { }

  ngOnInit(): void {
   this.apiservice.getrestaurantnames().subscribe(data=>this.rstrts=data.reverse())
  }
 
  reload(){
    this.apiservice.updaterest(this.parentdata.id,this.parentdata).subscribe();
    location.reload()
  }
  onselect(r:any){
    this.route.navigate(['/menu',r.restaurantname])
  }
}
