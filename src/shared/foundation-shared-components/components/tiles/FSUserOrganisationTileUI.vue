<template>
  <FSTile
    :editable="$props.editable"
    :modelValue="$props.modelValue"
    v-bind="$attrs"
  >
    <FSCol
      align="center-center"
      width="fill"
    >
      <FSRow
        align="center-center"
        gap="24px"
        :wrap="false"
        :height="imageSize"
      >
        <FSCol
          gap="4px"
          :width="infoWidth"
        >
          <FSText
            font="text-button"
            :lineClamp="2"
          >
            {{ title }}
          </FSText>
          <FSRow
            v-if="$props.roleLabel"
            align="center-left"
            gap="4px"
          >
            <FSIcon
              v-if="$props.roleIcon"
              variant="light"
              :color="ColorEnum.Dark"
            >
              {{ $props.roleIcon }}
            </FSIcon>
            <FSText
              font="text-overline"
              variant="light"
            >
              {{ $props.roleLabel }}
            </FSText>
          </FSRow>
        </FSCol>
        <FSImage
          v-if="$props.imageId"
          :imageId="$props.imageId"
          :width="imageSize"
        />
      </FSRow>
    </FSCol>
  </FSTile>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { UserType } from "@dative-gpi/foundation-core-domain/models";

import FSImage from "../FSImage.vue";
import FSText from "../FSText.vue";
import FSTile from "./FSTile.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSUserOrganisationTileUI",
  components: {
    FSImage,
    FSText,
    FSTile,
    FSCol,
    FSRow
  },
  props: {
    imageId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    name: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    userType: {
      type: Number as PropType<UserType>,
      required: false,
      default: UserType.User
    },
    roleIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    roleLabel: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { isMobileSized } = useBreakpoints();

    const title = computed((): string => {
      switch (props.userType) {
        case UserType.ServiceAccount: return props.label ?? "";
        default: return props.name ?? "";
      }
    });

    const imageSize = computed((): number => {
      return isMobileSized.value ? 90 : 100;
    });

    const infoWidth = computed((): number => {
      let width = isMobileSized.value ? 288 : 304;
      if (props.imageId) {
        width -= imageSize.value;
      }
      return width;
    });

    return {
      imageSize,
      infoWidth,
      ColorEnum,
      title
    };
  }
});
</script>