<template>
  <v-menu
    :closeOnContentClick="false"
    v-model="expanded"
  >
    <template
      #activator="{ props }"
    >
      <FSChip
        class="fs-filter-button"
        variant="standard"
        prependIcon="mdi-filter-variant"
        :height="[30, 24]"
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
        gap="12px"
        padding="16px 0 24px 16px"
      >
        <FSCol
          gap="12px"
          padding="0 16px 0 0"
        >
          <FSSpan
            font="text-overline"
          >
            {{ $tr("ui.data-table.filter", "Filter") }}
          </FSSpan>
          <FSChip
            class="fs-filter-button-chip"
            :height="[30, 24]"
            :editable="true"
            :color="$props.color"
            :variant="getAllVariant()"
            :label="$tr('ui.data-table.all-values', 'All values')"
            @click="onToggleAll"
          />
          <FSDivider
            padding="0 8px 0 0"
          />
          <FSSearchField
            class="fs-filter-button-search"
            prependInnerIcon="mdi-magnify"
            v-model="search"
          />
        </FSCol>
        <FSFadeOut
          padding="0 8px 0 0"
          height="360px"
        >
          <FSCol
            gap="6px"
          >
            <FSChip
              v-for="(filter, index) in searchedFilters"
              class="fs-filter-button-chip"
              :height="[30, 24]"
              :key="index"
              :editable="true"
              :label="filter.text"
              :color="$props.color"
              :variant="getVariant(filter)"
              @click="() => onToggle(filter)"
            >
              <template
                #default
              >
                <slot
                  v-bind="{ filter }"
                />
              </template>
            </FSChip>
          </FSCol>
        </FSFadeOut>
      </FSCol>
    </FSCard>
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref } from "vue";

import type { ColorBase, FSDataTableColumn, FSDataTableFilter } from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";

import FSSearchField from "../fields/FSSearchField.vue";
import FSFadeOut from "../FSFadeOut.vue";
import FSDivider from "../FSDivider.vue";
import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSFilterButton",
  components: {
    FSSearchField,
    FSFadeOut,
    FSDivider,
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
    const search = ref<string | null>(null);

    const label = computed((): string | null => {
      if (props.header.text) {
        if (props.filters) {
          const hidden = props.filters.filter(f => f.hidden).length;
          if (hidden > 0) {
            return $tr("ui.data-table.some-filters-visible", "{0}: {1} visible", props.header.text, (props.filters.length - hidden).toString());
          }
        }
        return $tr("ui.data-table.all-filters-visible", "{0}: All visible", props.header.text);
      }
      return null;
    });

    const searchedFilters = computed((): FSDataTableFilter[] => {
      if (search.value) {
        return props.filters.filter(f => (f.text + f.value).includes(search.value!));
      }
      return props.filters;
    });

    const getVariant = (filter: FSDataTableFilter): "standard" | "full" | "borderless" => {
      if (singlePick.value || props.filters.filter(f => f.hidden).length > 0) {
        if (filter.hidden) {
          return "borderless";
        }
        return "full";
      }
      return "borderless";
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