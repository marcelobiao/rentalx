import { CreateCategoryUseCase } from "./CreateCategoryUseCase"
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory"


describe('Create Category', () => {

    let createCategoryUseCase: CreateCategoryUseCase
    let categoryRepositoryInMemory: CategoriesRepositoryInMemory
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoriesRepositoryInMemory()
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryInMemory)
    })
    
    it("should be able to create a new category", async () => {
        const category = ({
            name: 'Category Test',
            description: 'Category description test'
        })

        await createCategoryUseCase.execute(category)

        const categoryCreated = await categoryRepositoryInMemory.findByName(category.name)
        
        expect(categoryCreated).toHaveProperty("id")
    })
    
    it("should not be able to create a new category with name exists", async () => {
        expect(async () => {
            const category = ({
                name: 'Category Test',
                description: 'Category description test'
            })
    
            await createCategoryUseCase.execute(category)
    
            await createCategoryUseCase.execute(category)
            
        }).rejects.toBeInstanceOf(Error)
    })
})