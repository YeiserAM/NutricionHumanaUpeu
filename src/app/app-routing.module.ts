import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargadocsComponent } from './components/cargadocs/cargadocs.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardadminComponent } from './components/dashboardadmin/dashboardadmin.component';
import { FormularioempresaComponent } from './components/formularioEmpresa/formularioempresa.component';
import { LoginComponent } from './components/login/login.component';
import { MenuadminComponent } from './components/menuadmin/menuadmin.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { ValidacionesComponent } from './components/validaciones/validaciones.component';
import { ValidarsoliadminComponent } from './components/validarsoliadmin/validarsoliadmin.component';
import { ValipracticasComponent } from './components/valipracticas/valipracticas.component';
import { AuthGuard } from './services/auth.guard';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { ReportAdminComponent } from './components/report-admin/report-admin.component';

const dashboard: Routes = [
  {path: 'formempresa', component:FormularioempresaComponent},
  {path: 'dashboard', component:DashboardComponent },
  {path: 'profile', component:PerfilComponent},
  {path: 'solicitudes', component:SolicitudesComponent},
  {path: 'cargadocs', component:CargadocsComponent},
  {path: 'validaciones', component:ValidacionesComponent},
  {path: 'reportes', component:ReportesComponent},
  {path: 'configuracion', component:ConfiguracionComponent},
  {path: 'menuadmin', component:MenuadminComponent},
  {path: 'validarsoliadmin', component:ValidarsoliadminComponent},
  {path: 'dashboardadmin', component:DashboardadminComponent},
  {path: 'valipracticas', component:ValipracticasComponent},
  {path: 'reportes-administrador', component: ReportAdminComponent},
];

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'menu', component:SidebarComponent, canActivate: [AuthGuard], children:dashboard},
  {path: 'create-user', component:CreateUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent, SidebarComponent
]
