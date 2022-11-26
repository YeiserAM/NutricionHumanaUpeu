import { Component, Input, OnInit } from '@angular/core';
import { DatauserService } from 'src/app/services/datauser.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private datosusuario: DatauserService){

  }

  ngOnInit(): void {
      this.datosusuario.disparadordeusuarios.subscribe(data =>{
        console.log('datita: ',data)
      })
  }

}
