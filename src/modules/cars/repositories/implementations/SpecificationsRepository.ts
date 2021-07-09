import { ISpecificationsRepository, ICreateSpecificationsDTO } from "./../ISpecificationsRepository";
import { Specification } from "../../entities/Specification";
import { Repository, getRepository } from "typeorm";

class SpecificationsRepository implements ISpecificationsRepository{

    private repository: Repository<Specification>
    
    constructor(){
        this.repository = getRepository(Specification)
    }

    async create({ name, description }: ICreateSpecificationsDTO): Promise<void> {
        const specificaton = this.repository.create({
            name,
            description
        })

        await this.repository.save(specificaton)
    }
    
    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({
            name
        })
        return specification
    }
}

export { SpecificationsRepository }