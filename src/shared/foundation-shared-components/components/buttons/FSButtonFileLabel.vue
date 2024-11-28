<template>
  <div>
    <FSButton
      :label="$tr('ui.common.import-file', 'Import file')"
      :color="ColorEnum.Light"
      @click="onClick"
      v-bind="$attrs"
    />
    <form>
      <input
        v-show="false"
        type="file"
        ref="input"
        :accept="$props.accept"
        @input="onInput"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useFiles } from "@dative-gpi/foundation-shared-services/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSButton from "../FSButton.vue";

export default defineComponent({
  name: "FSButtonFileLabel",
  components: {
    FSButton
  },
  props: {
    accept: {
      type: String,
      required: false,
      default: ""
    },
    readFile: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue", "update:metadata"],
  setup(props, { emit }) {
    const { readFile } = useFiles();

    const input = ref<HTMLFormElement | null>(null);

    const clear = (): void => {
      if (input.value && input.value.form) {
        input.value.form.reset();
      }
    };

    const onClick = (): void => {
      if (input.value) {
        input.value.click();
      }
    }

    const onInput = async (): Promise<void> => {
      if (!input.value) {
        return;
      }
      const file = input.value.files && input.value.files[0];
      if (!file) {
        return;
      }
      emit("update:metadata", file);
      if (!props.readFile) {
        clear();
      }
      else {
        const content = await readFile(file);
        emit("update:modelValue", content);
      }
    };

    return {
      ColorEnum,
      input,
      onClick,
      onInput
    };
  }
});
</script>
