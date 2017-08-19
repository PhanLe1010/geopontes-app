export class Comment{
    constructor   ( public name: string,
                    public email: string,
                    public content: string,
                    public commentId?: string,
                    public letterId?: string,
                    public date?: Date){}
}
