import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargadocsComponent } from './components/cargadocs/cargadocs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormularioempresaComponent } from './components/formularioEmpresa/formularioempresa.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { ValidacionesComponent } from './components/validaciones/validaciones.component';

const dashboard: Routes = [
  {path: 'formempresa', component:FormularioempresaComponent},
  {path: 'dashboard', component:DashboardComponent },
  {path: 'profile', component:PerfilComponent},
  {path: 'solicitudes', component:SolicitudesComponent},
  {path: 'cargadocs', component:CargadocsComponent},
  {path: 'validaciones', component:ValidacionesComponent}
  
];

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'menu', component:SidebarComponent, children:dashboard}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent, SidebarComponent
]
