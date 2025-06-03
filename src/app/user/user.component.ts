import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { response } from 'express';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  listaNombres = ['Alice','Bob','Charlie','Diana']
  trabajaos = ["teacher","police","firefighter"]
  name = '';
  job = '';
  respuesta: string = "";
  codigoHttp: number | null = null;
  colorRespuesta: string = 'black';

  constructor(private userServicio: UserService){}

  ngOnInit(): void {
  }
  nombreValido(): boolean{
    return this.listaNombres.includes(this.name);
  }

  submit(){
    if(!this.nombreValido()) return;

    const nuevoUsuer = new User(this.name, this.job);
    this.userServicio.Create(nuevoUsuer).subscribe(response =>{
      const user = new User (
        response.body.name,
        response.bode.job,
        response.body.id,
        response.body.createdAt
      );
      this.respuesta = user.serialize();
      this.codigoHttp = response.status;
      this.colorRespuesta = response.status === 2001 ? 'green' : 'red';
    });

  };
}
