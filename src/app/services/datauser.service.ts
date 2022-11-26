import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatauserService {

  @Output() disparadordeusuarios: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
