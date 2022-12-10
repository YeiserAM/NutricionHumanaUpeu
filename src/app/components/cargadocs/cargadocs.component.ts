import { Component, OnInit } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from '@angular/fire/storage';
import { Toast, ToastrService } from 'ngx-toastr';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-cargadocs',
  templateUrl: './cargadocs.component.html',
  styleUrls: ['./cargadocs.component.css'],
})
export class CargadocsComponent implements OnInit {
  users: string = `${window.sessionStorage.getItem('users')}`;
  dataUsers: any = [];
  loader = false;

  newUrl = '';

  constructor(
    private storage: Storage,
    private toastService: ToastrService,
    private upload: UploadService
  ) {}

  ngOnInit(): void {
    this.dataUsers.push(JSON.parse(this.users));
  }

  uploadArchive($event: any) {
    this.loader = true;
    const file = $event.target.files[0];
    // console.log(file);
    this.newUrl = `pdf/${file.name}`;
    const imgRef = ref(this.storage, `pdf/${file.name}`);
    
    uploadBytes(imgRef, file)
      .then(async (response) => {
        this.getArchive();
        this.toastService.success('Se ha subido el Archivo!');
        this.loader = false;
      })
      .catch((error) => console.log(error));
  }

  getArchive() {
    const archivosRef = ref(this.storage, 'pdf');
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
