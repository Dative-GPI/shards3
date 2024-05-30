import { CreateCommentDTO, CommentDetails, CommentDetailsDTO, CommentFilters, CommentInfos, CommentInfosDTO, UpdateCommentDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { COMMENTS_URL, COMMENT_URL } from "../../config/urls";

const CommentServiceFactory = new ServiceFactory<CommentDetailsDTO, CommentDetails>("comment", CommentDetails)
    .createComplete<CommentInfos, CommentInfosDTO, CreateCommentDTO, UpdateCommentDTO, CommentFilters>(COMMENTS_URL, COMMENT_URL, CommentInfos);

export const useComment = ComposableFactory.get(CommentServiceFactory);
export const useComments = ComposableFactory.getMany(CommentServiceFactory);
export const useCreateComment = ComposableFactory.create(CommentServiceFactory);
export const useUpdateComment = ComposableFactory.update(CommentServiceFactory);
export const useRemoveComment = ComposableFactory.remove(CommentServiceFactory);