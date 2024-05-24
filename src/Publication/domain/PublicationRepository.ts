import CreatePublicationRequest from "./DTOS/PublicationRequest";
import PublicationEntry from "./PublicationEntry";

export default interface PublicationRepository {
    create(publication: CreatePublicationRequest) : Promise <PublicationEntry | null>
    getById (id: string): Promise <PublicationEntry | null>
}   

