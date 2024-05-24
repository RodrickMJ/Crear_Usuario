export default interface userEntry {
    id: string,
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

