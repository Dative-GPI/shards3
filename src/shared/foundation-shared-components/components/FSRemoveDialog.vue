<template>
  <FSSubmitDialog
    :rightButtonLabel="$tr('ui.remove-dialog.right-button', 'Remove')"
    :rightButtonColor="ColorEnum.Error"
    :title="title"
    v-bind="$attrs"
  >
    <template #body>
      <FSCol
        :gap="16"
      >
        <FSRow>
          <FSIcon
            :color="ColorEnum.Error"
          >
            mdi-alert-outline
          </FSIcon>
          <FSRow
            :gap="2"
          >
            <FSSpan>
              {{ $tr("ui.remove-dialog.this-action-is", "This action is") }}
            </FSSpan>
            <FSSpan
              font="text-button"
            >
              {{ $tr("ui.remove-dialog.definitive", "definitive") }}
            </FSSpan>
          </FSRow>
        </FSRow>
        <FSSpan>
          {{ $tr("ui.remove-dialog.once-removed", "Once removed, entities won't be retrievable") }}
        </FSSpan>
      </FSCol>
    </template>
    <template #footer v-if="$props.removing">
      <FSRow
        align="center-right"
        :height="footerHeight"
      >
        <FSSpan>
          {{ $props.removeCurrent }} / {{ $props.removeTotal }}
        </FSSpan>
        <v-progress-circular
          :color="ColorEnum.Dark"
          :indeterminate="true"
        />
      </FSRow>
    </template>
  </FSSubmitDialog>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs, watch } from "vue";

import { useTranslationsProvider } from "@dative-gpi/foundation-shared-services/composables";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSubmitDialog from "./FSSubmitDialog.vue";
import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSRemoveDialog",
  components: {
    FSSubmitDialog,
    FSIcon,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    removing: {
      type: Boolean,
      required: false,
      default: false
    },
    removeTotal: {
      type: Number,
      required: true
    },
    removeCurrent: {
      type: Number,
      required: false,
      default: 0
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { removeTotal, removeCurrent } = toRefs(props);

    const { isMobileSized } = useBreakpoints();
    const { $tr } = useTranslationsProvider();

    const title = computed((): string => {
      if (removeTotal.value > 1) {
        return `${$tr("ui.remove-dialog.remove", "Remove")} ${removeTotal.value} ${$tr("ui.remove-dialog.entities", "entities")}`;
      }
      else {
        return $tr("ui.remove-dialog.remove-an-entity", "Remove an entity");
      }
    });

    const footerHeight = computed((): string => {
      return isMobileSized.value ? "36px" : "40px";
    });

    watch(removeCurrent, () => {
      if (removeCurrent.value === removeTotal.value) {
        emit("update:modelValue", false);
      }
    });
    
    return {
      ColorEnum,
      footerHeight,
      title
    };
  }
})
</script>