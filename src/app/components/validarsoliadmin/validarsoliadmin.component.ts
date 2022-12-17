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
    this.solicitudService.getSolicitudes().subscribe((resp: any) => {
      // console.log(resp.data)
      // this.documents=resp.documents;
      this.solicitudes = resp.data;
      console.log(resp.data);
    });
  }

  eliminarsoli(idestudiante: number) {
    if (confirm("Seguro que desea eliminar?")) {
      this.solicitudService.eliminarsolicitud(String(idestudiante)).subscribe(
        (res: any) => {
          // this.getsolicitud();
          // console.log(res);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  alertyes() {
    this.toastr.success("Se acepto la solicitud");
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
        this.router.navigate(['/menu/dashboardadmin'])
        this.screenLoading = false;
      } catch (error) {
        console.log(error);
      }
    });
  }

}
