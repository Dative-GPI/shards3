<template>
  <FSTile
    :activeColor="ColorEnum.Primary"
    :editable="$props.editable"
    :width="$props.width"
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
          <FSSpan
            font="text-button"
            :lineClamp="2"
          >
            {{ $props.name }}
          </FSSpan>
          <FSRow
            v-if="roleLabel"
            align="center-left"
            gap="4px"
            :wrap="false"
          >
            <FSIcon
              v-if="roleIcon"
              variant="soft"
              :color="ColorEnum.Dark"
            >
              {{ roleIcon }}
            </FSIcon>
            <FSSpan
              font="text-overline"
              variant="soft"
            >
              {{ roleLabel }}
            </FSSpan>
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
import { computed, defineComponent, type PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSImage from "../FSImage.vue";
import FSSpan from "../FSSpan.vue";
import FSTile from "./FSTile.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSUserOrganisationTileUI",
  components: {
    FSImage,
    FSSpan,
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
    admin: {
      type: Boolean,
      required: false,
      default: false
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => [352, 336]
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
    const { $tr } = useTranslationsProvider();

    const roleIcon = computed((): string | null => {
      if (props.admin) {
        return "mdi-crown-outline";
      }
      return props.roleIcon;
    });

    const roleLabel = computed((): string | null => {
      if (props.admin) {
        return $tr("entity.user.admin", "Administrator");
      }
      return props.roleLabel;
    });

    const imageSize = computed((): number => {
      if (!props.imageId) {
        return 0;
      }
      return isMobileSized.value ? 90 : 100;
    });

    const infoWidth = computed((): string => {
      if (!props.imageId) {
        return "100%";
      }
      return `calc(100% - ${imageSize.value}px - 24px)`;
    });

    return {
      ColorEnum,
      imageSize,
      infoWidth,
      roleLabel,
      roleIcon
    };
  }
});
</script>