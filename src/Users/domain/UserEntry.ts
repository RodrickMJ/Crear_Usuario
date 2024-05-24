export default interface userEntry {
    id: number,
    username: string,
    nombre: string,
    email: string,
    password: string,
    avatar: string | null,
    intereses: Array<String>,
    carrera: string,
    estado: string,
    grupo: string,
    edad: number,
    rol: string
}

