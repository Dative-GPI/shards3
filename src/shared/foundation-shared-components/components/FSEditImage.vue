<template>
  <FSCol gap="8px">
    <slot
      v-if="!$props.hideHeader"
      name="label"
    >
      <FSRow :wrap="false">
        <FSSpan
          v-if="$props.label"
          class="fs-text-field-label"
          font="text-overline"
          :style="style"
        >
          {{ $props.label }}
        </FSSpan>
        <FSSpan
          v-if="$props.label && $props.required"
          class="fs-text-field-label"
          style="margin-left: -8px;"
          font="text-overline"
          :ellipsis="false"
          :style="style"
        >
          *
        </FSSpan>
      </FSRow>
    </slot>
    <FSCard
      v-if="$props.variant === 'standard'"
      width="100%"
      height="fill"
      padding="12px"
    >
      <FSRow
        align="center-left"
        :wrap="false"
      >
        <FSRow
          gap="24px"
          width="hug"
          :wrap="false"
        >
          <FSImage
            v-if="$props.imageId || realSource"
            :aspectRatio="$props.aspectRatio"
            :height="$props.height"
            :width="$props.width"
            :imageId="$props.imageId"
            :imageB64="realSource"
          />
          <FSImage
            v-else
            :aspectRatio="$props.aspectRatio"
            :height="$props.height"
            :width="$props.width"
          />
          <FSCol
            align="center-left"
            height="fill"
            width="hug"
          >
            <FSText
              v-if="$props.imageId || realSource"
              lineClamp="2"
              font="text-body"
            >
              {{ fileSelected.fileName }}
            </FSText>
            <FSText
              v-else
              lineClamp="2"
              font="text-body"
            >
              {{ $tr('ui.edit-image.no-image', 'No image uploaded.') }}
            </FSText>
            <FSText
              lineClamp="2"
              class="fs-edit-image-overline"
              font="text-overline"
              :style="style"
            >
              {{ $tr('ui.edit-image.format', 'PNG or JPG format') }} <br />
              {{ $tr('ui.edit-image.size', '10 MB Maximum') }}
            </FSText>
          </FSCol>
        </FSRow>
        <v-spacer />
        <FSRow width="hug">
          <FSButtonFileMini
            v-if="$props.imageId || realSource"
            icon="mdi-pencil-outline"
            accept="image/*"
            :readFile="false"
            @update:modelValue="onUpload"
          />
          <FSButtonFileMini
            v-else
            accept="image/*"
            :readFile="false"
            @update:modelValue="onUpload"
          />
          <FSButtonRemoveMini
            v-if="!isExtraSmall"
            @click="onRemove"
          />
        </FSRow>
      </FSRow>
    </FSCard>
    <FSRow
      v-else-if="$props.imageId || realSource"
      :width="$props.width"
      class="fs-edit-image-rowfull"
    >
      <FSImage
        :aspectRatio="$props.aspectRatio"
        :height="$props.height"
        :width="$props.width"
        :imageId="$props.imageId"
        :imageB64="realSource"
      />
      <FSRow
        :wrap="false"
        class="fs-edit-image-fixed-rowbuttons"
        padding="12px"
      >
        <FSButtonFileMini
          icon="mdi-pencil-outline"
          accept="image/*"
          :readFile="false"
          @update:modelValue="onUpload"
        />
        <FSButtonRemoveMini @click="onRemove" />
      </FSRow>
    </FSRow>
    <FSClickable
      v-else
      width="100%"
      height="97px"
      padding="12px"
      borderStyle="dashed"
      variant="background"
      @click="() => invisibleButton.input.click()"
    >
      <FSRow
        align="center-center"
        :wrap="false"
      >
        <FSIcon
          icon="mdi-plus-box-outline"
          size="l"
        />
        <FSText
          lineClamp="2"
          font="text-body"
        >
          {{ $tr('ui.edit-image.add-image', 'Add an image.') }}
        </FSText>
        <FSButtonFileMini
          ref="invisibleButton"
          class="fs-edit-image-hidden-button"
          icon=""
          accept="image/*"
          :readFile="false"
          @update:modelValue="onUpload"
        />
      </FSRow>
    </FSClickable>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";
import { useFiles } from "@dative-gpi/foundation-shared-services/composables";
import { ColorEnum, FileImage } from "@dative-gpi/foundation-shared-components/models";

import FSButtonRemoveMini from "./buttons/FSButtonRemoveMini.vue";
import FSButtonFileMini from "./buttons/FSButtonFileMini.vue";
import FSImage from "./FSImage.vue";
import FSText from "./FSText.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";
import FSCard from "./FSCard.vue";
import FSClickable from "./FSClickable.vue";

export default defineComponent({
  name: "FSEditImage",
  components: {
    FSButtonRemoveMini,
    FSButtonFileMini,
    FSImage,
    FSText,
    FSCol,
    FSRow,
    FSCard,
    FSClickable
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
    },
    variant: {
      type: String as PropType<"standard" | "full">,
      required: false,
      default: "standard"
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue", "update:imageId"],
  setup(props, { emit }) {
    const { getColors } = useColors();
    const { readFile } = useFiles();
    const { isExtraSmall } = useBreakpoints();

    const lights = getColors(ColorEnum.Light);
    const invisibleButton = ref<HTMLFormElement | null>(null);

    const fileSelected = ref<FileImage>({ fileName: "", fileContent: null });

    const style = computed((): { [key: string]: string | undefined } => {
      return {
        "--fs-edit-image-overline-text-color": lights.dark
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
      if (props.imageId) {
        emit("update:imageId", null);
      }
    };

    const onRemove = () => {
      fileSelected.value.fileName = "";
      fileSelected.value.fileContent = null;
      if (props.modelValue) {
        emit("update:modelValue", null);
      }
      else {
        emit("update:imageId", null);
      }
    };

    return {
      invisibleButton,
      fileSelected,
      realSource,
      style,
      isExtraSmall,
      onUpload,
      onRemove
    };
  }
});
</script>