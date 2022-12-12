import { Component } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';
import { Reportes } from 'src/app/models/reportes';
import { ReportesService } from 'src/app/services/reportes.service';
import { UploadService } from 'src/app/services/upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {
  users: string = `${window.sessionStorage.getItem('users')}`;
  reportes: string = `${window.sessionStorage.getItem('users')}`;
  dataUsers : any = [];
  reporte : any = [];
  loader = false;

  newUrl = '';

  dataReportes = new Reportes();
  
  constructor(
    private storage: Storage,
    private toastService: ToastrService,
    private upload: UploadService,
    private reporteService : ReportesService
  ){

  }

  ngOnInit(): void {
    
    this.dataUsers.push(JSON.parse(this.users)),
    this.reporte.push(JSON.parse(this.reportes))
  }

  registrarReportes(){

    let datareportes = {
      idestudi: this.reporte[0].idestudiante,
      titulo: this.dataReportes.titulo,
      tipo: this.dataReportes.tipo,
      descripcion: this.dataReportes.descripcion,
      idrol: this.dataReportes.idrol,
      iddoc: this.dataReportes.iddoc
    }
    console.log('funciono bieeen');
    console.log(datareportes);

    this.reporteService.CrearReportes(datareportes).subscribe(data => {
      console.log(data);
      Swal.fire({
        title: '<b style="color: #000000; font-family: Poppins, sans-serif; font-weight: 900; font-size: 45px">Registro Exitoso</b>',
        icon: 'success',
        html: '<span style="font-size: 22px">Se ha Registrado tú Reporte, gracias...!</span>',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#52A820',
        iconColor: '#52A820'
      });
    })

  }

  uploadArchive($event: any) {
    this.loader = true;
    const file = $event.target.files[0];
    // console.log(file);
    this.newUrl = `reportes/${file.name}`;
    const imgRef = ref(this.storage, `reportes/${file.name}`);
    
    uploadBytes(imgRef, file)
      .then(async (response) => {
        this.getArchive();
        this.toastService.success('Se ha subido el Archivo!');
        this.loader = false;
      })
      .catch((error) => console.log(error));
  }

  getArchive() {
    const archivosRef = ref(this.storage, 'reportes');
    // console.log(archivosRef);
    listAll(archivosRef)
      .then(async (response) => {
        // console.log(response);

        let archivito = '';
        for (let item of response.items) {
          if (this.newUrl == item.fullPath) {
            const url = await getDownloadURL(item);
            let archivito2 = {
              idestud: this.dataUsers[0].idestudiante,
              url: url,
            };
            this.upload.TraerDocs(archivito2).subscribe((res) => {
              console.log(res);
            });
          }
        }
      })
      .catch((error) => (this.loader = false));
  }
}
