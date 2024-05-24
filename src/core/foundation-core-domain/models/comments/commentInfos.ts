import { DatesTools } from "@dative-gpi/foundation-shared-domain/tools";

export class CommentInfos {
    id: string;
    alertId: string;
    userId: string;
    userName: string;
    userImageId: string | null;
    timestamp: number;
    comment: string;
    edited: boolean;
    editTimestamp: number | null;
    
    constructor(params: CommentInfosDTO) {
        this.id = params.id;
        this.alertId = params.alertId;
        this.userId = params.userId;
        this.userName = params.userName;
        this.userImageId = params.userImageId;
        this.timestamp = DatesTools.utcToEpoch(params.timestamp)!;
        this.comment = params.comment;
        this.edited = params.edited;
        this.editTimestamp = params.editTimestamp ?
            DatesTools.utcToEpoch(params.editTimestamp) : null;
    }
}

export interface CommentInfosDTO {
    id: string;
    alertId: string;
    userId: string;
    userName: string;
    userImageId: string | null;
    timestamp: string;
    comment: string;
    edited: boolean;
    editTimestamp: string | null;
}

export interface CommentFilters {
    alertId: string;
}