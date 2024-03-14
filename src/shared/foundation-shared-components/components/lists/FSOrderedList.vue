<template>
  <FSRow>
    <FSCol
      width="hug"
      gap="8px"
      v-if="$props.showIndex && !isMobile"
    >
      <FSRow
        v-for="(item, index) in items"
        :height="lineHeigth + 'px'"
        :key="index"
        align="center-left"
      >
        <FSBadge
          :color="$props.color"
          :content="(index+1).toString()"
          :inline="true"
          :bordered="false"
        >
        </FSBadge>
      </FSRow>
    </FSCol>
    <draggable
      v-model="items"
      @update="onUpdate"
      :item-key="$props.propsKey"
      :disabled="!$props.draggable"
      :style="{ gap: '8px', display: 'flex', flexDirection: 'column', flex: 1 }"
    >
      <template #item="{ element }">
        <FSRow width="fill">
          <FSCard
            width="100%"
            :height="lineHeigth + 'px'"
          >
            <FSRow
              width="fill"
              gap="10px"
              align="center-center"
              :wrap="false"
            >
              <FSIcon
                v-if="$props.draggable"
                size="100%"
              >
                {{ 'mdi-drag-vertical' }}
              </FSIcon>
              <FSRow
                align="center-center"
                gap="10px"
              >
                <template
                  v-for="(key, index) in propsKeys"
                  :key="index"
                >
                  <slot
                    :name="key"
                    v-if="element[key]"
                    :element="element"
                  >
                    <FSText>
                      {{ element[key] }}
                    </FSText>
                  </slot>
                  <v-spacer />
                </template>
              </FSRow>
              <FSCheckbox
                v-if="$props.selectable"
                v-model="element['selected']"
                @update:modelValue="onUpdate"
                :color="$props.color"
              />
            </FSRow>
          </FSCard>
        </FSRow>
      </template>
    </draggable>
  </FSRow>
</template>

<script>
import { ref } from 'vue';
import draggable from 'vuedraggable';
import FSRow from './../FSRow.vue';
import FSCard from './../FSCard.vue';
import FSIcon from '../FSIcon.vue';
import FSText from '../FSText.vue';
import FSCol from '../FSCol.vue';
import FSBadge from '../FSBadge.vue';
import FSCheckbox from '../FSCheckbox.vue';

import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

export default {
  name: 'FSOrderedList',
  components: {
    draggable,
    FSRow,
    FSCard,
    FSIcon,
    FSText,
    FSCol,
    FSBadge,
    FSCheckbox,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    propsKey: {
      type: String,
      required: true,
    },
    propsKeys: {
      type: Array,
      required: true,
    },
    draggable: {
      type: Boolean,
      default: true,
    },
    selectable: {
      type: Boolean,
      default: false,
    },
    showIndex: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
    },
  },
  setup(props, { emit }) {
    const items = ref(props.items);
    const lineHeigth = ref(42);
    const { isMobileSized } = useBreakpoints();
    const isMobile = isMobileSized.value;

    const onUpdate = (_event) => {
      emit('update:modelValue', items.value);
      console.log('onUpdate', items.value);
    };

    return {
      items,
      lineHeigth,
      onUpdate,
      isMobile,
    };
  },
};
</script>
