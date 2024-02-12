<template>
  <v-menu
    :closeOnContentClick="false"
    v-model="expanded"
  >
    <template #activator="{ props }">
      <FSChip
        class="fs-hidden-button"
        prependIcon="mdi-eye-off-outline"
        :label="label"
        :color="ColorEnum.Light"
        v-bind="props"
      />
    </template>
    <FSContainer
      padding="16px"
    >
      <FSCol
        :gap="16"
      >
        <FSSpan
          font="text-overline"
        >
          {{ $tr("ui.data-table.show-columns", "Show columns") }}
        </FSSpan>
        <FSChip
          v-for="(header, index) in $props.headers"
          class="fs-hidden-button"
          :key="index"
          :label="header.text"
          :color="$props.color"
          @click="$emit('update:show', header)"
        />
      </FSCol>
    </FSContainer>
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from "vue";

import { ColorBase, ColorEnum, FSDataTableColumn } from "@dative-gpi/foundation-shared-components/models";
import { useTranslationsProvider } from "@dative-gpi/foundation-shared-services/composables";

import FSContainer from "../FSContainer.vue";
import FSChip from "../FSChip.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSHiddenButton",
  components: {
    FSContainer,
    FSChip,
    FSSpan,
    FSCol
  },
  props: {
    headers: {
      type: Array as PropType<FSDataTableColumn[]>,
      required: true
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    }
  },
  setup(props) {
    const { headers } = toRefs(props);

    const { $tr } = useTranslationsProvider();

    const expanded = ref(false);

    const label = computed(() => {
      return $tr("ui.data-table.hidden-columns", "{0} hidden column(s)", [headers.value.length])
    });

    return {
      ColorEnum,
      expanded,
      label
    };
  }
});
</script>