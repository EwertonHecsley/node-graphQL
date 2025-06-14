import { Entity } from "../../generics/Entity";

type UserType = {
    id: string;
    name: string;
    email: string;
    city: string;
}

export class User extends Entity<UserType> {
    readonly id: string;
    private constructor(props: UserType) {
        super(props);
        this.id = props.id;
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

    toPlain() {
        return {
            id: this.props.id,
            name: this.props.name,
            email: this.props.email,
            city: this.props.city ?? null,
        };
    }
}