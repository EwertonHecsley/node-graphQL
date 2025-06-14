import { Entity } from "../../generics/Entity";

type UserType = {
    name: string;
    email: string;
    city: string;
}

export class User extends Entity<UserType> {
    private constructor(props: UserType) {
        super(props);
    }

    static create(props: UserType): User {
        return new User({
            ...props
        })
    }

    get name(): string {
        return this.props.name;
    }

    get email(): string {
        return this.props.email;
    }

    get city(): string {
        return this.props.city;
    }
}