
<template>
  <v-menu
    :closeOnContentClick="false"
    v-model="expanded"
  >
    <template #activator="{ props }">
      <FSButton
        prependIcon="mdi-view-week"
        :label="$tr('ui.core.disposition-button.label', 'Columns')"
        :variant="$props.variant"
        :color="$props.color"
        :editable="$props.sortable"
        v-bind="props"
      />
    </template>
    <FSContainer
      class="fs-disposition-button-dropdown"
    >
      <FSCol>
        <FSSearchField
          v-if="searchable"
          v-model="search"
        />
        <FSCheckbox
          :label="$tr('ui.core.disposition-button.select-all', 'Select all')"
          :modelValue="allSelected"
          @update:modelValue="toggleAll"
        />
        <draggable
          class="fs-col"
          itemKey="id"
          v-model="innerValue"
        >
          <template #item="{ element }">
            <FSRow v-if="element.label.includes(search)">
              <FSIcon
                class="fs-disposition-button-icon"
                size="l"
              >
                mdi-drag
              </FSIcon>
              <FSCheckbox
                :label="element.label"
                :modelValue="!element.hidden"
                @update:modelValue="toggle(element)"
              />
            </FSRow>
          </template>
        </draggable>
      </FSCol>
    </FSContainer>
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs, watch } from "vue";
import draggable from "vuedraggable";

import { ColorBase, ColorEnum, FSDataTableColumn } from "@dative-gpi/foundation-shared-components/models";
import { useUpdateTable } from "@dative-gpi/foundation-core-services/composables";

import FSSearchField from "@dative-gpi/foundation-shared-components/components/FSSearchField.vue";
import FSContainer from "@dative-gpi/foundation-shared-components/components/FSContainer.vue";
import FSCheckbox from "@dative-gpi/foundation-shared-components/components/FSCheckbox.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

export default defineComponent({
  name: "FSDispositionButton",
  components: {
    FSSearchField,
    FSContainer,
    FSCheckbox,
    FSButton,
    FSIcon,
    FSRow,
    FSCol,
    draggable,
  },
  props: {
    tableCode: {
      type: String,
      required: true
    },
    modelValue: {
      type: Array as PropType<FSDataTableColumn[]>,
      required: true,
      default: () => []
    },
    variant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    searchable: {
      type: Boolean,
      required: false,
      default: true
    },
    sortable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { tableCode, modelValue } = toRefs(props);

    const { update } = useUpdateTable();

    const innerValue = ref(modelValue.value);
    const expanded = ref(false);
    const search = ref("");

    const allSelected = computed(() => {
      return !innerValue.value
        .filter(c => c.label.includes(search.value))
        .some(c => c.hidden);
    });

    const toggleAll = () => {
      if (!allSelected.value) {
        innerValue.value = innerValue.value
          .map(c => c.label.includes(search.value) ? ({ ...c, hidden: false }) : c);
      }
      else {
        innerValue.value = innerValue.value
          .map(c => c.label.includes(search.value) ? ({ ...c, hidden: true }) : c);
      }
    };

    const toggle = (value: FSDataTableColumn) => {
      innerValue.value = innerValue.value
        .map((c: FSDataTableColumn) => c.id === value.id ? { ...c, hidden: !c.hidden } : c);
    };

    const single = (value: FSDataTableColumn) => {
      innerValue.value = innerValue.value
        .map((c: FSDataTableColumn) => ({ ...c, hidden: c.id !== value.id }));
    };

    watch(innerValue, (): void => {
      emit("update:modelValue", innerValue.value);
    });

    watch(expanded, (): void => {
      if (!expanded) {
        update(tableCode.value, innerValue.value.filter(c => c["columnId"]).map(c => ({
          columnId: c["columnId"],
          index: c.index,
          hidden: c.hidden
        })));
      }
    });

    return {
      expanded,
      search,
      innerValue,
      allSelected,
      toggleAll,
      toggle,
      single
    };
  }
});
</script>