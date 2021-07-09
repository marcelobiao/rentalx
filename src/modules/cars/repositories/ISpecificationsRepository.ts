import { Category } from "../entities/Category"
import { Specification } from "../entities/Specification"

interface ICreateSpecificationsDTO {
    name: string,
    description: string
}

interface ISpecificationsRepository{ 
    findByName(name: string): Specification;
    //list(): Category[];
    create({ name, description }: ICreateSpecificationsDTO): void
}

export {ISpecificationsRepository, ICreateSpecificationsDTO}