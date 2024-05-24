
export interface UserRequest {
    username: string;
    email: string;
    password: string;
  }
  
  export  interface UserCreateRequest extends UserRequest {
    
    nombre: string;
    avatar?: string | null;
    intereses: Array<'programar' | 'hacer ejercicio' | 'correr' | 'jugar videojuegos'>;
    carrera: 'ingeniera en software' | 'ingenieria petrolera' | 'ingenieria ambiental';
    estado?: 'Aguascalientes' | 'Baja California' | 'Baja California Sur' | 'Campeche' | 'Chiapas' | null;
    grupo: string;
    edad: number;
    rol?: 'estudiante' | 'docente' | null;
  }