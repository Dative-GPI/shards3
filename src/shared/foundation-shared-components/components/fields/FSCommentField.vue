<template>
  <FSCol>
    <FSRow
      align="top-left"
    >
      <FSImage
        :imageId="userImageId"
        width="32px"
        height="32px"
        rounded="circle"
        :thumbnail="true"
      />
      <FSTextArea
        :rows="5"
        :hideHeader="true"
        :placeholder="$tr('ui.common.write-comment', 'Write a comment...')"
        v-model="innertext"
      />
    </FSRow>
    <FSRow>
      <FSRow 
        align="center-right"
      >
        <FSButtonCancel
          v-if="showCancelButton"
          @click="$emit('cancel')"
        />
        <FSButton
          prependIcon="mdi-send-outline"
          :color="ColorEnum.Primary"
          :loading="creating"
          :label="buttonLabel ?? $tr('ui.common.publish','Publish')"
          @click="onSubmit"
        />
      </FSRow>
    </FSRow>
  </FSCol>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { defineComponent, ref } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSButtonCancel from "../buttons/FSButtonCancel.vue";
import FSTextArea from "./FSTextArea.vue";
import FSButton from "../FSButton.vue";
import FSImage from "../FSImage.vue";
import FSRow from "../FSRow.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSCommentField",
  components: {
    FSButton,
    FSButtonCancel,
    FSImage,
    FSTextArea,
    FSRow,
    FSCol,
  },
  props: {
    buttonLabel: {
      type: String,
      required: false,
    },
    creating: {
      type: Boolean,
      required: false,
    },
    userImageId: {
      type: String as PropType<string | null>,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    showCancelButton: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["submit","cancel"],
  setup(props, { emit }) {

    const innertext = ref<string | undefined>(props.text);

    const onSubmit = () => {
      if (innertext.value) {
        emit('submit', innertext.value);
        innertext.value = '';
      }
    };
    
    return {
      innertext,
      ColorEnum,
      onSubmit,
    };
  },
})
</script>