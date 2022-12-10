import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { FormularioempresaComponent } from './components/formularioEmpresa/formularioempresa.component';
import { CargadocsComponent } from './components/cargadocs/cargadocs.component';
import { AuthGuard } from './services/auth.guard';
import { ValidacionesComponent } from './components/validaciones/validaciones.component';
import { DatosUsuariosDirective } from './directives/datos-usuarios.directive';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { MenuadminComponent } from './components/menuadmin/menuadmin.component';
import { ValidarsoliadminComponent } from './components/validarsoliadmin/validarsoliadmin.component';
import { DashboardadminComponent } from './components/dashboardadmin/dashboardadmin.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { ValipracticasComponent } from './components/valipracticas/valipracticas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    DashboardComponent,
    PerfilComponent,
    SolicitudesComponent,
    FormularioempresaComponent,
    CargadocsComponent,
    ValidacionesComponent,
    DatosUsuariosDirective,
    ReportesComponent,
    ConfiguracionComponent,
    MenuadminComponent,
    ValidarsoliadminComponent,
    DashboardadminComponent,
    LoadingScreenComponent,
    ValipracticasComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
