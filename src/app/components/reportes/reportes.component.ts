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
  styleUrls: ['./reportes.component.css'],
})
export class ReportesComponent {
  users: string = `${window.sessionStorage.getItem('users')}`;
  reportes: string = `${window.sessionStorage.getItem('users')}`;
  dataUsers: any = [];
  reporte: any = [];
  loader = false;

  newUrl = '';

  respuestaReporte: any[] = [];
  dataReportes = new Reportes();

  nomestud: any = [];

  opcionseleccionado: String = '0';
  varSeleccion: String = '';

  constructor(
    private storage: Storage,
    private toastService: ToastrService,
    private upload: UploadService,
    private reportess: ReportesService
  ) {}

  ngOnInit(): void {
    this.dataUsers.push(JSON.parse(this.users));
    this.reporte.push(JSON.parse(this.reportes));
    this.traerestudiante();
  }

  lista: Array<any> = [
    { value: 0, label: 'Seleccione una Opcion' },
    { value: 1, label: 'Practicas Clínicas' },
    { value: 2, label: 'Practicas Comunitarias' },
  ];

  registrarReportes() {
    console.log(this.varSeleccion);
    let datareportes = {
      titulo: this.dataReportes.titulo,
      tipo: this.dataReportes.tipo,
      descripcion: this.dataReportes.descripcion,
      id_usuario: this.varSeleccion,
      id_documentorep: 0,
    };
    console.log('funciono bieeen');
    console.log(datareportes);
    Swal.fire({
      title:
        '<b style="color: #000000; font-family: Poppins, sans-serif; font-weight: 900; font-size: 45px">Registro Exitoso</b>',
      icon: 'success',
      html: '<span style="font-size: 22px">Se ha Registrado tú Reporte, gracias...!</span>',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#52A820',
      iconColor: '#52A820',
    });
    location.reload()
    this.reportess.CrearReportes(datareportes).subscribe((data: any) => {
      this.respuestaReporte.push(data.data);
      console.log('infooo', data);
    });
  }

  capturar() {
    this.varSeleccion = this.opcionseleccionado;
  }

  uploadArchive($event: any) {
    this.loader = true;
    const file = $event.target.files[0];
    console.log(file);
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

  traerestudiante() {
    this.reportess.getUsername().subscribe((resp: any) => {
      this.nomestud = resp.data;
      // console.log('data estudiante',resp);
    });
  }
}
