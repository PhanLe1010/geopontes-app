export class ContactMessage{
    constructor(private name: string, 
                private email: string, 
                private subject: string, 
                private message: string,
                private date: Date){}
}