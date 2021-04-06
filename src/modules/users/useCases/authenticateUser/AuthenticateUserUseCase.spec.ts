import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


let authenticateUserUseCase: AuthenticateUserUseCase;
let inMemoryUsersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate a user', () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        authenticateUserUseCase = new AuthenticateUserUseCase(inMemoryUsersRepository);
        createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
    })

    it('should be able to authenticate a existent user', async () => {
        const newUser = {
            name: 'jaum',
            email: 'jaum@gmail.com',
            password: '1337'
        }

        await createUserUseCase.execute(newUser);

        const login = await authenticateUserUseCase.execute({
            email: newUser.email,
            password: newUser.password,
        });

        expect(login).toHaveProperty('token');

    });
});