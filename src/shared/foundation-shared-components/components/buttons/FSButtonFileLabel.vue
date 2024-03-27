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

import { useFiles } from "@dative-gpi/foundation-shared-components/composables";
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
    const { read } = useFiles();
    
    const input = ref(null);

    const clear = () => {
      input.value!.form && input.value!.form.reset();
    };

    const onClick = () => {
      input.value!.click();
    }

    const onInput = () => {
      const file = input.value!.files && input.value!.files[0];
      if (!file) {
        return;
      }
      if (!props.readFile) {
        emit("update:modelValue", file);
        clear();
      }
      else {
        read(file, (content: string) => {
          emit("update:modelValue", content);
        });
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
