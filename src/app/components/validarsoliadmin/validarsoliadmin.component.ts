import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Estudiante } from "src/app/models/estudiante";
import { ToastrService } from "ngx-toastr";
import { Solicitudes } from "src/app/models/solicitudes";
import { SolicitudesService } from "src/app/services/solicitudes.service";
import { UploadService } from "src/app/services/upload.service";
import { MailsService } from "../../services/mails.service";
import { Mail } from "src/app/models/mail";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-validarsoliadmin",
  templateUrl: "./validarsoliadmin.component.html",
  styleUrls: ["./validarsoliadmin.component.css"]
})
export class ValidarsoliadminComponent implements OnInit {
  screenLoading = false;

  documents = [];

  users: string = `${window.sessionStorage.getItem("users")}`;

  dataUsers: any = [];

  showModal = false;

  urltrue = false;

  documentsBuscar: any[] = [];

  Validaciones: any = {};

  valiSoli: Solicitudes[] = [];

  dataSoli: any = [];

  mailsJson = new Mail();

  public solicitudes: Array<any> = [];

  constructor(
    private solicitudService: SolicitudesService,
    private toastr: ToastrService,
    private httpClient: HttpClient,
    private mailService: MailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataUsers.push(JSON.parse(this.users));
    this.getsolicitud();
  }

  getsolicitud() {
    this.screenLoading = true;
    this.solicitudService.getSolicitudes().subscribe((resp: any) => {
      // console.log(resp.data)
      // this.documents=resp.documents;
      this.solicitudes = resp.data;
      console.log(resp.data);
      this.screenLoading = false;
    });
  }

  eliminarsoli(id_solicitud: number) {
    this.screenLoading = true;
      this.solicitudService.eliminarsolicitud(Number(id_solicitud)).subscribe(
        (res: any) => {
          // this.getsolicitud();
          console.log(res);
        this.router.navigate(['/menu/validarsoliadmin'])
        this.screenLoading = false;
        window.location.reload();
        },
        error => {
          console.log(error);
        }
      );
      Swal.fire({
        title: '<b style="color: #000000; font-family: Poppins, sans-serif; font-weight: 900; font-size: 45px">Solicitud Rechazada</b>',
        icon: 'success',
        html: '<span style="font-size: 22px" >Se ha rechazado la colicitud, Correctamente...!</span>',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#023052',
        iconColor: '#52A820',
       
      });


  };

  alertyes() {
    this.screenLoading = true;
    this.toastr.success("Se acepto la solicitud");
    this.screenLoading = false;
  }

  alertnot() {
    this.toastr.error("Se rechazo la solicitud");
  }

  buscarDatos(id: any) {
    for (let i = 0; i < this.solicitudes.length; i++) {
      const id_solicitud = this.solicitudes[i]["id_solicitud"];

      if (id == id_solicitud) {
        this.Validaciones = this.solicitudes[i];
        this.mailsJson.email = this.Validaciones.correo;
        this.mailsJson.asunto = "Observacionesde Documentos PPP";
      }
    }
  }

  enviarCorreoObservacion() {
    this.screenLoading = true;

    let jsonMail = {
      email: this.mailsJson.email,
      asunto: this.mailsJson.asunto,
      mensaje: this.mailsJson.mensaje
    };

    console.log(jsonMail);

    this.mailService.enviarMail(jsonMail).subscribe(async (resp: any) => {
      try {
        console.log(resp);
        this.router.navigate(['/menu/validarsoliadmin'])
        this.screenLoading = false;
      } catch (error) {
        console.log(error);
      }
      Swal.fire({
        title: '<b style="color: #000000; font-family: Poppins, sans-serif; font-weight: 900; font-size: 45px">Correo Enviado</b>',
        icon: 'success',
        html: '<span style="font-size: 22px" >Se ha enviado la correccion, Gracias...!</span>',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#023052',
        iconColor: '#52A820',
       
      });
    });
    
  }
  

}
