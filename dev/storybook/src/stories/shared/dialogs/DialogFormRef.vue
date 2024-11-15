<template>
  <FSButton
      color="primary"
      label="Manual validation dialog"
      @click="() => value = true"
  />
  <FSDialogForm
    ref="dialogRef"
    width="500px"
    title="Manual validation dialog"
    v-model="value"
    @update:isValidForm="isValidForm = $event"
  >
    <template #body>
      <FSTranslateField
        label="Label 5"
        :required="true"
        :rules="[v => !!v || 'Label is required']"
        v-model="label"
      />
      <FSButton
        label="ValidateForm"
        @click="validate()"
      />
      <FSButton
        label="ResetFormValidation"
        @click="resetValidation()"
      />
      <FSText>
        The current validity of the form is: {{ isValidForm == true }}
      </FSText>
      <FSText>
        The dialogRef is null : {{ dialogRef == null }}
      </FSText>

      </template>
  </FSDialogForm>   
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import FSTranslateField from "@dative-gpi/foundation-shared-components/components/fields/FSTranslateField.vue";
import FSDialogForm from "@dative-gpi/foundation-shared-components/components/FSDialogForm.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";

export default defineComponent({
  name: "DialogFormRef",
  components: {
    FSDialogForm,
    FSTranslateField,
    FSButton,
    FSText
  },
  setup() {
    const dialogRef = ref<typeof FSDialogForm | null>(null);
    const isValidForm = ref(null);
    const value = ref(false);
    const label = ref("");

    const validate = async () => {
      if(dialogRef.value){
        let form = await dialogRef.value.validateForm();
        if(!form.valid) {
          return;
        }
        // Do something if form has been successfully validated
        console.log("validated");
      }
    };

    const resetValidation = () => {
      if(dialogRef.value){
        dialogRef.value.resetFormValidation();
      }
    };
    
    return {
      resetValidation,
      isValidForm,
      dialogRef,
      validate,
      value,
      label,
    };
  }
});
</script>