import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../entity/User';
@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  constructor(private http:HttpClient) { }
  // apiUrl="http://localhost:3000/../../../../assets/List-users.json/listUsers"

  getList():Observable<any>{
    return this.http.get<any>('http://localhost:4000/list-users',{responseType:'json'})

  }

  add(user:User){
    return this.http.post('http://localhost:4000/list-users',user)
  }
  deleteUser(id:string){
    return this.http.delete(`http://localhost:4000/list-users/${id}`)
  }
  
}
