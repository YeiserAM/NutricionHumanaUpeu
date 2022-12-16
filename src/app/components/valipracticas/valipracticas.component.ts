import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-valipracticas',
  templateUrl: './valipracticas.component.html',
  styleUrls: ['./valipracticas.component.css']
})
export class ValipracticasComponent implements OnInit{
  users: string = `${window.sessionStorage.getItem('users')}`;
  dataUsers : any= [];
  showModal = false;
  valipractica=[];

  urltrue = false;
  
  public practiquitas: Array<any> = [];
  
  constructor(
    private reporteService: ReportesService,
    private httpClient: HttpClient
  ){
    this.reporteService.getReportes().subscribe((resp: any)=>{
      this.valipractica = resp.valipractica;
      console.log(resp);
      this.practiquitas = resp.data;
    })
  }

  ngOnInit(): void {
    this.dataUsers.push(JSON.parse(this.users));

  }

}
