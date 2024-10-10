<template>
  <FSCol
    align="center-center"
  >
    <FSCard
      padding="8px"
      width="500px"
    >
      <template
        #header
      >
        <FSRow
          align="center-center"
          gap="12px"
        >
          <FSImage
            :imageId="userImageId"
            width="24px"
            height="24px"
            rounded="circle"
          />
          <FSText
            font="text-overline"
          >
            {{ userName }}
            -
            {{ timestamp }}
          </FSText>
          <v-spacer />
          <FSButtonEditIcon
            v-if="canEditRemove"
            @click="showEditComment = true"
          />
          <FSButtonRemoveIcon
            v-if="canEditRemove"
            @click="removeDialog = true"
          />
        </FSRow>
      </template>
      <template
        #body
      >
        <FSText 
          class="text-wrap"
        >
          {{ comment }}
        </FSText>
      </template>
      <template
        #footer
      >
      </template>
    </FSCard>
    <FSCol
      width="500px"
      v-if="showEditComment"
    >
      <FSCommentField
        :userImageId="userImageId"
        :showCancelButton="true"
        :text="comment"
        @cancel="showEditComment = false"
        @submit="updateComment"
      />
    </FSCol>
    <FSDialogRemove 
      v-model="removeDialog"
      :removeTotal="1"
      :removing="removing"
      @click:submitButton="$emit('remove')"
    />
  </FSCol>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { defineComponent, ref, watch } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSButtonRemoveIcon from "../buttons/FSButtonRemoveIcon.vue";
import FSButtonEditIcon from "../buttons/FSButtonEditIcon.vue";
import FSDialogRemove from "../FSDialogRemove.vue";
import FSCommentField from "../fields/FSCommentField.vue";
import FSImage from "../FSImage.vue";
import FSCard from "../FSCard.vue";
import FSText from "../FSText.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSCommentTileUI",
  components: {
    FSButtonRemoveIcon,
    FSButtonEditIcon,
    FSCommentField,
    FSDialogRemove,
    FSImage,
    FSCard,
    FSText,
    FSCol,
    FSRow,
  },
  props: {
    id: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    userName: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    userImageId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    canEditRemove: {
      type: Boolean,
      required: false,
      default: false
    },
    timestamp: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    comment: {
      type: String as PropType<string | undefined>,
      required: false,
      default: undefined
    },
    edited: {
      type: Boolean,
      required: false,
      default: false
    },
    removing: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["edit", "remove"],
  setup(props, { emit }) {
    const showEditComment = ref(false);
    const removeDialog = ref(false);

    const updateComment = (comment: string) => {      
      emit('edit',{commentId : props.id, comment : comment})
      showEditComment.value = false;
    };

    watch(() => props.removing, () => {
      if (!props.removing) {
        removeDialog.value = false;
      }
    });

    return {
      showEditComment,
      removeDialog,
      ColorEnum,
      updateComment
    };
  }
});
</script>