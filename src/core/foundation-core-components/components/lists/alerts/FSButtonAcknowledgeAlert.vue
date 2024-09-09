<template>
  <FSButton
    prependIcon="mdi-checkbox-blank-outline"
    :label="$tr('page.alert.acknowledge', 'Acknowledge')"
    @click="dialog = true"
  />
  <FSDialogSubmit
    :title="$tr('page.alert.acknowledge', 'Acknowledge')"
    :load="acknowledgingAlert"
    @click:submitButton="onAcknowledge"
    v-model="dialog"
  >
    <template
      #body
    >
      <FSCol
        gap="16px"
      >
        <FSRow>
          <FSIcon
            :color="ColorEnum.Warning"
          >
            mdi-alert-outline
          </FSIcon>
          <FSRow
            gap="2px"
          >
            <FSSpan>
              {{ $tr("page.alert.acknowledge-warning", "Do you want to acknowledge this alert?") }}
            </FSSpan>
          </FSRow>
        </FSRow>
        <FSSpan>
          {{ $tr("page.alert.acknowledge-final-warning", "This action is definitive") }}
        </FSSpan>
        <FSErrorToast
          v-if="error"
          :errorCode="error"
        />
      </FSCol>
    </template>
  </FSDialogSubmit>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useAcknowledgeAlert } from "@dative-gpi/foundation-core-services/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSDialogSubmit from "@dative-gpi/foundation-shared-components/components/FSDialogSubmit.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSErrorToast from "@dative-gpi/foundation-shared-components/components/FSErrorToast.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";

export default defineComponent({
  name: "FSButtonAcknowledgeAlert",
  components: {
    FSButton,
    FSCol,
    FSDialogSubmit,
    FSErrorToast,
    FSIcon,
    FSRow,
    FSSpan,
  },
  props: {
    alertId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { fetch: acknowledgeAlert, fetching: acknowledgingAlert } = useAcknowledgeAlert();

    const error = ref<string | null>(null);
    const dialog = ref(false);

    const onAcknowledge = async (): Promise<void> => {
      try {
        error.value = null;
        await acknowledgeAlert(props.alertId);
        dialog.value = false;
      }
      catch (exception: any) {
        error.value = exception.response.data;
      }
    };
    
    return {
      acknowledgingAlert,
      ColorEnum,
      dialog,
      error,
      onAcknowledge
    };
  }
})
</script>