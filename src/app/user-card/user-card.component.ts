import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../entity/User';
import { ApiUsersService } from '../services/api-users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  users: User[] = [];
  @ViewChild('closebutton') closebutton;

  userForm: FormGroup;
  constructor(private userService: ApiUsersService, private fb: FormBuilder) {
    let formControls = {
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2),
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2),
      ]),
      nombre_enfants: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
      ]),
    };
    this.userForm = this.fb.group(formControls);
  }

  get nombre_enfants() {
    return this.userForm.get('nombre_enfants');
  }
  get prenom() {
    return this.userForm.get('prenom');
  }
  get nom() {
    return this.userForm.get('nom');
  }

  ngOnInit(): void {
   
  }

  add() :void{
    let data = this.userForm.value;

    this.userService.add(data).subscribe((res) => {
      console.log(res);
    });
    this.closebutton.nativeElement.click();
    alert(`successfully user aad ${this.userForm.controls['nom'].value}`);
    window.location.reload();
  }

  getListUser():void{
    this.userService.getList().subscribe((res) => {
      this.users = res;
      console.log(this.users);
    });
  }

  deleteUser(user: User) {
    confirm(`Are you sure delete user ${user.nom}`)
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
    this.userService.deleteUser(user.id).subscribe((res) => {
      alert('delete');
    });
  }
}
