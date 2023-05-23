
export type Title = "mr" | "ms" | "mrs" | "miss" | "dr" | "";
export type Location = {
    street: string;
    city: string;
    state: string;
    country : string;
    timezone: string;
}

export class User {

    public gender?: string;
    public email?: string;
    public dateOfBirth?: string;
    public phone?: string;
    public location?: Location;
    public registerDate?: string;
    public updatedDate?: string;

    constructor(
        public id: string,
        public title: Title,
        public firstName: string,
        public lastName: string,
        public picture: string,
    ) {

    }
}