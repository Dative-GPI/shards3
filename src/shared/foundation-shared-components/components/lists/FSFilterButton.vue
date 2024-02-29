<template>
  <v-menu
    :closeOnContentClick="false"
    v-model="expanded"
  >
    <template #activator="{ props }">
      <FSChip
        class="fs-filter-button"
        variant="standard"
        prependIcon="mdi-filter-variant"
        :color="ColorEnum.Dark"
        :editable="true"
        :label="label"
        v-bind="props"
      />
    </template>
    <FSCard
      class="fs-filter-button-menu"
      :elevation="true"
      :border="false"
    >
      <FSCol
        gap="16px"
        padding="6px 16px"
      >
        <FSSpan
          font="text-overline"
        >
          {{ $tr("ui.data-table.filter", "Filter") }}
        </FSSpan>
        <FSChip
          class="fs-filter-button-all"
          :editable="true"
          :color="$props.color"
          :variant="getAllVariant()"
          :label="$tr('ui.data-table.all-values', 'All values')"
          @click="onToggleAll"
        />
        <FSSearchField
          class="fs-filter-button-all"
          prependInnerIcon="mdi-magnify"
          v-model="search"
        />
        <v-divider />
        <FSFadeOut
          class="fs-filter-button-fade"
        >
          <FSCol>
            <FSChip
              v-for="(filter, index) in searchedFilters"
              class="fs-filter-button-chip"
              :key="index"
              :editable="true"
              :label="filter.text"
              :color="$props.color"
              :variant="getVariant(filter)"
              @click="() => onToggle(filter)"
            >
              <template #default>
                <slot v-bind="{ filter }" />
              </template>
            </FSChip>
          </FSCol>
        </FSFadeOut>
      </FSCol>
    </FSCard>
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { ColorBase, ColorEnum, FSDataTableColumn, FSDataTableFilter } from "@dative-gpi/foundation-shared-components/models";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";

import FSSearchField from "../FSSearchField.vue";
import FSFadeOut from "../FSFadeOut.vue";
import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSFilterButton",
  components: {
    FSSearchField,
    FSFadeOut,
    FSCard,
    FSChip,
    FSSpan,
    FSCol
  },
  props: {
    header: {
      type: Object as PropType<FSDataTableColumn>,
      required: true
    },
    filters: {
      type: Array as PropType<FSDataTableFilter[]>,
      required: false,
      default: () => []
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    }
  },
  emits: ["update:filter"],
  setup(props, { emit }) {
    const { $tr } = useTranslationsProvider();

    const singlePick = ref(false);
    const expanded = ref(false);
    const search = ref(null);

    const label = computed(() => {
      if (props.filters) {
        const hidden = props.filters.filter(f => f.hidden).length;
        if (hidden > 0) {
          return $tr("ui.data-table.some-filters-visible", "{0}: {1} visible", props.header.text, (props.filters.length - hidden).toString());
        }
      }
      return $tr("ui.data-table.all-filters-visible", "{0}: All visible", props.header.text);
    });

    const searchedFilters = computed((): FSDataTableFilter[] => {
      if (search.value) {
        return props.filters.filter(f => (f.text + f.value).includes(search.value));
      }
      return props.filters;
    });

    const getVariant = (filter: FSDataTableFilter): "standard" | "full" => {
      if (singlePick.value || props.filters.filter(f => f.hidden).length > 0) {
        if (filter.hidden) {
          return "standard";
        }
        return "full";
      }
      return "standard";
    };

    const getAllVariant = (): "standard" | "full" => {
      if (singlePick.value || props.filters.filter(f => f.hidden).length > 0) {
        return "standard";
      }
      return "full";
    };

    const onToggle = (filter: FSDataTableFilter): void => {
      if (singlePick.value || props.filters.filter(f => f.hidden).length > 0) {
        emit("update:filter", props.filters.map(f => ({ ...f, hidden: f.value === filter.value ? !f.hidden : f.hidden })));
      }
      else {
        emit("update:filter", props.filters.map(f => ({ ...f, hidden: f.value === filter.value ? false : true })));
      }
      singlePick.value = true;
    };

    const onToggleAll = (): void => {
      if (singlePick.value || props.filters.filter(f => f.hidden).length > 0) {
        singlePick.value = false;
        emit("update:filter", props.filters.map(f => ({ ...f, hidden: false })));
      }
      else {
        singlePick.value = true;
      }
    };

    return {
      searchedFilters,
      ColorEnum,
      expanded,
      search,
      label,
      singlePick,
      getVariant,
      getAllVariant,
      onToggle,
      onToggleAll
    };
  }
});
</script>