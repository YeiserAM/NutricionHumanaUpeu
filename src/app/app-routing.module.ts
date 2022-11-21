import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';

const dashboard: Routes = [
  {path: 'dashboard', component:DashboardComponent },
  {path: 'profile', component:PerfilComponent},
  {path: 'solicitudes', component:SolicitudesComponent}
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
