export class User {
  usuario!: string;
  password!: string;
  id_rol!: string;
}

export class UserData {
  id_usuario!: number;
  id_rol!: number;
  idpersona!: number;
  usuario!: string;
  dni!: number;
  nombre!: string;
  apellidos!: string;
  codigo!: number;
  rol!: string;
}

export class SidebarData {
  id_sidebar!: number;
  id_rol!: number;
  nombre!: string;
  path!: string;
  icon!: string;
}
