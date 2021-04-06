import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

let inMemoryUsersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;
let showUserProfileUseCase: ShowUserProfileUseCase;

describe("Show user profile", () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        showUserProfileUseCase = new ShowUserProfileUseCase(inMemoryUsersRepository);
        createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
    })

    it("should be able to show a user profile by id", async () => {
        const newUser = {
            name: 'jaum',
            email: 'jaum@gmail.com',
            password: '1337'
        }

        const registeredUser = await createUserUseCase.execute(newUser);

        console.log(registeredUser.id)

        const id = registeredUser.id;

        console.log(id)

        const userShown = await showUserProfileUseCase.execute(id);

        expect(userShown).toHaveProperty("id");
    });
});