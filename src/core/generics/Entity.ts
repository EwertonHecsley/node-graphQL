import { Identity } from "./Identity";

export class Entity<T> {
    private id: Identity;
    protected props: T;

    protected constructor(props: T, id?: Identity) {
        this.id = id ?? new Identity(id);
        this.props = props;
    }

    get valueId(): Identity {
        return this.id;
    }
}