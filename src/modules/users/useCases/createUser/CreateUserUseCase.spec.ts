import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository";

import { CreateUserUseCase } from "./CreateUserUseCase";


let createUserUseCase: CreateUserUseCase;
let inMemoryUsersRepository: InMemoryUsersRepository;


describe('Create User', () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
    });
    
    it('should be able to create a new user', async () => {
        const newUser = {
            name: 'jaum',
            email: 'jaum@gmail.com',
            password: '1337'
        }

        const user = await createUserUseCase.execute(newUser);

        console.log(user);

        expect(user).toHaveProperty("id");
    });
});