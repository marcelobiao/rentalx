import { Category } from "../model/Category"
import { Specification } from "../model/Specification"

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