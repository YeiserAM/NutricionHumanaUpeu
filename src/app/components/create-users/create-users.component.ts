import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {


  constructor (
    private route: Router,
  ) {}

  ngOnInit(): void {

  }

  registrarCuentra() {
    this.route.navigate(['/']);
  }
}
