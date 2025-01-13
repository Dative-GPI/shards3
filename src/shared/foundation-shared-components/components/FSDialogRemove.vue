<template>
  <FSDialogSubmit
    width="460px"
    :title="title"
    :submitButtonLabel="$tr('ui.common.remove', 'Remove')"
    :submitButtonColor="ColorEnum.Error"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #body
    >
      <FSCol
        gap="16px"
      >
        <FSRow>
          <FSIcon
            :color="ColorEnum.Error"
          >
            mdi-alert-outline
          </FSIcon>
          <FSRow
            gap="4px"
          >
            <FSSpan>
              {{ $tr("dialog-remove.body-regular", "This action is") }}
            </FSSpan>
            <FSSpan
              font="text-button"
            >
              {{ $tr("dialog-remove.body-bold", "definitive") }}
            </FSSpan>
          </FSRow>
        </FSRow>
        <FSSpan>
          {{ $tr("dialog-remove.final-warning", "Once removed, entities won't be retrievable") }}
        </FSSpan>
      </FSCol>
    </template>
    <template
      #footer
      v-if="$props.removing"
    >
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
  </FSDialogSubmit>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSDialogSubmit from "./FSDialogSubmit.vue";
import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSDialogRemove",
  components: {
    FSDialogSubmit,
    FSIcon,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
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
  setup(props) {
    const { isMobileSized } = useBreakpoints();
    const { $tr } = useTranslationsProvider();

    const title = computed((): string => {
      if (props.removeTotal > 1) {
        return $tr("dialog-remove.remove-plural", "Remove {0} entities", props.removeTotal.toString());
      }
      else {
        return $tr("dialog-remove.remove-singular", "Remove an entity");
      }
    });

    const footerHeight = computed((): string => {
      return isMobileSized.value ? "36px" : "40px";
    });
    
    return {
      ColorEnum,
      footerHeight,
      title
    };
  }
})
</script>