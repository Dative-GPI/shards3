import type { CommentInfosDTO } from "./commentInfos";
import { CommentInfos } from "./commentInfos";

export class CommentDetails extends CommentInfos {
    constructor(params: CommentDetailsDTO) {
        super(params);
    }
}

export interface CommentDetailsDTO extends CommentInfosDTO {
}

export interface CreateCommentDTO {
    alertId: string;
    comment: string;
}

export interface UpdateCommentDTO {
    comment: string;
}