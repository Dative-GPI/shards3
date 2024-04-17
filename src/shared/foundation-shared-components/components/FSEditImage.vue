<template>
  <FSRow
    width="hug"
    gap="24px"
  >
    <FSImage
      class="fs-edit-image"
      :aspectRatio="$props.aspectRatio"
      :height="$props.height"
      :width="$props.width"
      :imageId="$props.imageId"
      :imageB64="realSource"
      :style="style"
    />
    <FSCol
      align="bottom-left"
      height="fill"
      width="hug"
    >
      <FSText
        v-if="fileSelected"
        font="text-body"
      >
        {{ fileSelected.fileName }}
      </FSText>
      <FSRow>
        <FSButtonFileIcon
          accept="image/*"
          :readFile="false"
          @update:modelValue="onUpload"
        />
        <FSButtonRemoveIcon
          @click="onRemove"
        />
      </FSRow>
    </FSCol>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { useFiles } from "@dative-gpi/foundation-shared-services/composables";
import { ColorEnum, FileImage } from "@dative-gpi/foundation-shared-components/models";

import FSButtonRemoveIcon from "./buttons/FSButtonRemoveIcon.vue";
import FSButtonFileIcon from "./buttons/FSButtonFileIcon.vue";
import FSImage from "./FSImage.vue";
import FSText from "./FSText.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSEditImage",
  components: {
    FSButtonRemoveIcon,
    FSButtonFileIcon,
    FSImage,
    FSText,
    FSCol,
    FSRow
  },
  props: {
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    imageId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    aspectRatio: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getColors } = useColors();
    const { readFile } = useFiles();

    const lights = getColors(ColorEnum.Light);

    const fileSelected = ref<FileImage>({ fileName: "", fileContent: null });

    const style = computed((): { [key: string] : string | undefined } => {
      return {
        "--fs-edit-image-border-color": lights.dark
      };
    });

    const realSource = computed(() => {
      if (fileSelected.value && fileSelected.value.fileName) {
        return fileSelected.value.fileContent as string;
      }
      return props.modelValue;
    });

    const onUpload = async (payload: File) => {
      const content = (await readFile(payload)) as string;
      fileSelected.value.fileName = payload.name;
      fileSelected.value.fileContent = content;
      emit("update:modelValue", content.substring(content.indexOf(',') + 1));
    };

    const onRemove = () => {
      fileSelected.value.fileName = "";
      fileSelected.value.fileContent = null;
      emit("update:modelValue", null);
    };

    return {
      fileSelected,
      realSource,
      style,
      onUpload,
      onRemove
    };
  }
});
</script>