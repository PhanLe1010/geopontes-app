import { Comment } from './comment.model';
export class Letter{
    constructor(public title: string,
                public content: string,
                public signature: string,
                public date?: Date,
                public comments?: Comment[],
                public _id?: string){}
}
