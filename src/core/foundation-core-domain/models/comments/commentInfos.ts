import { utcToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

export class CommentInfos {
    id: string;
    alertId: string;
    userId: string;
    userName: string;
    userImageId?: string;
    userImageBlurHash: string;
    userImageHeight?: number;
    userImageWidth?: number;
    timestamp: number;
    comment: string;
    edited: boolean;
    editTimestamp?: number;
    
    constructor(params: CommentInfosDTO) {
        this.id = params.id;
        this.alertId = params.alertId;
        this.userId = params.userId;
        this.userName = params.userName;
        this.userImageId = params.userImageId;
        this.userImageBlurHash = params.userImageBlurHash;
        this.userImageHeight = params.userImageHeight;
        this.userImageWidth = params.userImageWidth;
        this.timestamp = utcToEpoch(params.timestamp)!;
        this.comment = params.comment;
        this.edited = params.edited;
        this.editTimestamp = params.editTimestamp ? utcToEpoch(params.editTimestamp) : undefined;
    }
}

export interface CommentInfosDTO {
    id: string;
    alertId: string;
    userId: string;
    userName: string;
    userImageId?: string;
    userImageBlurHash: string;
    userImageHeight?: number;
    userImageWidth?: number;
    timestamp: string;
    comment: string;
    edited: boolean;
    editTimestamp?: string;
}

export interface CommentFilters {
    alertId: string;
}