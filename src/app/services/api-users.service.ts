import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../entity/User';
@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  constructor(private http:HttpClient) { }
  apiUrl="http://localhost:4000/list-users"

  getList():Observable<any>{
    return this.http.get<any>(this.apiUrl,{responseType:'json'})

  }

  add(user:User){
    return this.http.post(this.apiUrl,user)
  }
  deleteUser(id:string){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  
}
