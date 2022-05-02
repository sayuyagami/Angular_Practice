import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { menumodel } from '../menu';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  additem!:FormGroup;
  public restrtnm:string=''
  menudata={
    'restaurantname':'',
    'dishname':'',
    'dishprice':0
  }

  Enableupdate=false
  public storemenulst=[] as any;
  public returnmenudata: menumodel[] = [];
  public orders:menumodel[]=[] ;
  public delivers:menumodel[]=[]
  fetchdetails: any
  itemid:number=0
  
  constructor(private route:ActivatedRoute,private service:ApiService,private fb:FormBuilder) { }


  ngOnInit(): void {
    this.restrtnm = this.route.snapshot.params['rstrtname'];
    this.additem= this.fb.group({ 
      Dishname:['',Validators.required], 
      Dishprice:['',Validators.required]
    }),
   
    this.service.getmenudata().subscribe( data => {
      this.storemenulst = [...data];
      this.returnmenudata=this.storemenulst.filter((e: { restaurantname: any; }) => e.restaurantname ==  this.restrtnm)
     
  })
}

drop(event: CdkDragDrop<menumodel[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }
}

  adddata(){
    if(this.additem.valid){ 
   this.menudata.restaurantname=this.route.snapshot.params['rstrtname'];
    this.menudata.dishname=this.additem.value.Dishname
    this.menudata.dishprice=this.additem.value.Dishprice
    console.log(this.menudata)
    this.service.addmenuitem(this.menudata).subscribe()
    location.reload()
    }
  }

  Edititem(menuid:any){
   this.Enableupdate=true
    this.itemid=menuid.id
   this.additem.controls['Dishname'].setValue(menuid.dishname)
   this.additem.controls['Dishprice'].setValue(menuid.dishprice)
  }

  updatedata(){
    this.menudata.restaurantname=this.route.snapshot.params['rstrtname'];
    this.menudata.dishname=this.additem.value.Dishname
    this.menudata.dishprice=this.additem.value.Dishprice
    this.service.updatemenuitem(this.itemid,this.menudata).subscribe()
    this.Enableupdate=false
    location.reload()
  }
  deleteitem(menu:any){
    this.service.deletemenuitem(menu.id).subscribe()
    location.reload()
  }
}
