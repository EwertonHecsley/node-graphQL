import { Entity } from "../../generics/Entity";
import { Identity } from "../../generics/Identity";

type UserType = {
    name: string;
    email: string;
    city: string;
}

export class User extends Entity<UserType> {
    private constructor(props: UserType, id?: Identity) {
        super(props, id);
    }

    static create(props: UserType, id: Identity): User {
        return new User({
            ...props
        }, id)
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