<template>
  <FSCol
    v-if="$props.allowAlertComment"
    padding="24px"
    gap="48px"
    align="center-center"
  >
    <FSText
      font="text-h3"
    >
      {{ $tr('ui.common.comments', 'Comments') }}
    </FSText>
    
    <FSRow
      width="500px"
    >
      <FSCommentField
        :buttonLabel="$tr('ui.common.publish','Publish')"
        :creating="creatingComment"
        @submit="createNewComment"
        :userImageId="currentUser?.imageId"
      />
    </FSRow>
    <FSCommentTileUI
      v-for="comment in orderedComments"
      :key="comment.id"
      :timestamp="epochToLongTimeFormat(comment.timestamp)"
      :userName="comment.userName"
      :userImageId="comment.userImageId"
      :canEditRemove="currentUser?.id === comment.userId"
      :comment="comment.comment"
      :edited="comment.edited"
      :id="comment.id"
      @edit="updateComment"
      @remove="removeComment(comment.id)"
    />
  </FSCol>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { computed, defineComponent, onMounted, watch } from "vue";
import _ from "lodash";

import { useDateFormat, useCurrentUser } from "@dative-gpi/foundation-shared-services/composables";
import { useCreateComment,useComments,useUpdateComment, useRemoveComment } from "@dative-gpi/foundation-core-services/composables";
import type { CommentFilters } from "@dative-gpi/foundation-core-domain/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSCommentField from "@dative-gpi/foundation-shared-components/components/fields/FSCommentField.vue";
import FSCommentTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSCommentTileUI.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

export default defineComponent({
  title: "FSBaseCommentsList",
  components: {
    FSText,
    FSCol,
    FSRow,
    FSCommentTileUI,
    FSCommentField
  },
  props: {
    commentFilters: {
      type: Object as PropType<CommentFilters>,
      required: true
    },
    allowAlertComment: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {fetch : fetchCurrentUser, entity: currentUser} = useCurrentUser();
    const { create: createComment, creating : creatingComment } = useCreateComment();
    const { getMany: fetchComments, entities: comments } = useComments();
    const {update  } = useUpdateComment();
    const {remove  } = useRemoveComment();
    const { epochToLongTimeFormat } = useDateFormat();

    const orderedComments = computed(()  => {
      return _.orderBy(comments.value, ['timestamp'], ['desc']);
    });

    onMounted(() => {
      fetchCurrentUser();
    });

    const createNewComment = (comment: string) => {
      if(props.commentFilters.alertId && comment){
        createComment({
          comment,
          alertId: props.commentFilters.alertId,
        });
      }
    };

    const updateComment = (payload : any) => {
      update(payload.commentId, {comment : payload.comment})
    }

    const removeComment = (commentId : string) => {
      remove(commentId)
    }

    watch(() => props.commentFilters, (next, previous) => {
      if (!_.isEqual(next, previous)) {
        fetchComments(props.commentFilters);
      }
    }, { immediate: true });

    return {
      comments,
      ColorEnum,
      creatingComment,
      currentUser,
      orderedComments,
      createNewComment,
      updateComment,
      removeComment,
      epochToLongTimeFormat
    };
  }
});
</script>