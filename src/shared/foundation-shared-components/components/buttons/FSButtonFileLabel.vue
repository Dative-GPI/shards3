<template>
  <div>
    <FSButton
      :label="$tr('ui.button.import-file', 'Import file')"
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
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const input = ref<HTMLFormElement | null>(null);

    const clear = () => {
      if (input.value) {
        input.value.form && input.value.form.reset();
      }
    };

    const onClick = () => {
      if (input.value) {
        input.value.click();
      }
    }

    const onInput = () => {
      if (!input.value) {
        return;
      }
      const file = input.value.files && input.value.files[0];
      if (!file) {
        return;
      }
      if (!props.readFile) {
        emit("update:modelValue", file);
        clear();
      }
      else {
        const reader = new FileReader();
        reader.addEventListener("load", (fileEv) => {
          emit("update:modelValue", fileEv.target && fileEv.target.result);
          clear();
        });
        reader.readAsDataURL(file);
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
