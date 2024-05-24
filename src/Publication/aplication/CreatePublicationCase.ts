import CreatePublicationRequest from "../domain/DTOS/PublicationRequest";
import PublicationRepository from "../domain/PublicationRepository";

export default class CreatePublicationCase {

    constructor(readonly entryRepository: PublicationRepository){}

    async run (publication: CreatePublicationRequest){
        const publicationAdded = await this.entryRepository.create(publication);

        if(!publicationAdded){
            return null
        }

        return publicationAdded

    }

}