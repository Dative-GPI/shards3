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
        :label="label"
        v-bind="props"
      />
    </template>
    <FSCard
      :elevation="true"
      :border="false"
    >
      <FSCol
        :gap="16"
        padding="0 0 0 16px"
      >
        <FSSpan
          font="text-overline"
        >
          {{ $tr("ui.data-table.filter", "Filter") }}
        </FSSpan>
        <FSChip
          class="fs-filter-button-all"
          :key="index"
          :editable="true"
          :color="$props.color"
          :variant="all ? 'full' : 'standard'"
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
              class="fs-filter-button-filter"
              :key="index"
              :editable="true"
              :label="filter.text"
              :color="$props.color"
              :variant="getVariant(filter)"
              @click="() => onToggle(filter)"
            />
          </FSCol>
        </FSFadeOut>
      </FSCol>
    </FSCard>
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from "vue";

import { ColorBase, ColorEnum, FSDataTableColumn, FSDataTableFilter } from "@dative-gpi/foundation-shared-components/models";
import { useTranslationsProvider } from "@dative-gpi/foundation-shared-services/composables";

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
      required: true
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    }
  },
  emits: ["update:filter"],
  setup(props, { emit }) {
    const { header, filters } = toRefs(props);

    const { $tr } = useTranslationsProvider();

    const expanded = ref(false);
    const search = ref(null);
    const all = ref(!filters.value?.some(f => f.hidden) ?? true);

    const label = computed(() => {
      if (filters.value) {
        const hidden = filters.value.filter(f => f.hidden).length;
        if (hidden > 0) {
          return $tr("ui.data-table.some-filters-visible", "{0}: {1} visible", [header.value.text, filters.value.length - hidden]);
        }
      }
      return $tr("ui.data-table.all-filters-visible", "{0}: All visible", [header.value.text]);
    });

    const searchedFilters = computed((): FSDataTableFilter[] => {
      if (search.value) {
        return filters.value.filter(f => (f.text + f.value).includes(search.value));
      }
      return filters.value;
    });

    const getVariant = (filter: FSDataTableFilter): "standard" | "full" => {
      if (all.value || filter.hidden) {
        return "standard";
      }
      return "full";
    };

    const onToggle = (filter: FSDataTableFilter): void => {
      if (all.value) {
        all.value = false;
        emit("update:filter", filters.value.map(f => ({ ...f, hidden: f.value !== filter.value })));
      }
      else {
        if (filter.hidden && !filters.value.some(f => !f.hidden && f.value !== filter.value)) {
          all.value = true;
        }
        emit("update:filter", filters.value.map(f => ({ ...f, hidden: f.value === filter.value ? !f.hidden : f.hidden })));
      }
    };

    const onToggleAll = (): void => {
      if (all.value) {
        all.value = false;
      }
      else {
        all.value = true;
        emit("update:filter", filters.value.map(f => ({ ...f, hidden: false })));
      }
    };

    return {
      searchedFilters,
      ColorEnum,
      expanded,
      search,
      label,
      all,
      getVariant,
      onToggle,
      onToggleAll
    };
  }
});
</script>