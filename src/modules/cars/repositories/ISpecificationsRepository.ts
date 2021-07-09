import { Category } from "../entities/Category"
import { Specification } from "../entities/Specification"

interface ICreateSpecificationsDTO {
    name: string,
    description: string
}

interface ISpecificationsRepository{ 
    findByName(name: string): Promise<Specification>;
    //list(): Category[];
    create({ name, description }: ICreateSpecificationsDTO): Promise<void>
}

export {ISpecificationsRepository, ICreateSpecificationsDTO}