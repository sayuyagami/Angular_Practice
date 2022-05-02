import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  map(arg0: (t: { rstname: any; }) => any): any {
    throw new Error('Method not implemented.');
  }

  
  url="http://localhost:3000/restaurants"
  url1="http://localhost:3000/menu"
  constructor(private http:HttpClient) { }

  addrestrt(data:any){
    return this.http.post(this.url,data)
  }
  getrestaurantnames(){
    return this.http.get(this.url).pipe(map((result:any)=>{
      if(result!=null){
        return result
      }else{
        result="no data"
        return result
      }
    }))
  }

  updaterest(rid:any,puttag:any){
    return this.http.put(`${this.url}/${rid}`,puttag)
  }

  getmenudata(){
    return this.http.get(this.url1).pipe(map((result:any)=>{
      if(result!=null){
        return result
      }else{
        result="no data"
        return result
      }
    }))
  }

  getmenubyid(id:number){
    return this.http.get(`${this.url1}/${id}`)
  }
  addmenuitem(menudata:any){
    return this.http.post(this.url1,menudata)
  }

  updatemenuitem(menuid:number,menudata:any){
    return this.http.put(`${this.url1}/${menuid}`,menudata)
  }

  deletemenuitem(menuid:number){
    return this.http.delete(`${this.url1}/${menuid}`)
  }
}
