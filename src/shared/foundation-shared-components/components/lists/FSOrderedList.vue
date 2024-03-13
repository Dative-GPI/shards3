<template>
  <draggable
    v-model="items"
    @start="drag = true"
    @end="drag = false"
    @update="onUpdate"
    :item-key="$props.propsKey"
    :style="{ gap: '10px', display: 'flex', flexDirection: 'column' }"
  >
    <template #item="{ element }">
      <FSRow width="fill">
        <FSCard width="100%">
          <FSRow
            width="fill"
            gap="10px"
            align="center-center"
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
              />
          </FSRow>
        </FSCard>
      </FSRow>
    </template>
  </draggable>
</template>

<script>
import { ref } from 'vue';
import draggable from 'vuedraggable';
import FSRow from './../FSRow.vue';
import FSCard from './../FSCard.vue';
import FSIcon from '../FSIcon.vue';
import FSText from '../FSText.vue';

export default {
  name: 'FSOrderedList',
  components: {
    draggable,
    FSRow,
    FSCard,
    FSIcon,
    FSText,
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
    }
  },
  setup(props, { emit }) {
    const items = ref(props.items);

    const onUpdate = (_event) => {
      emit('update:modelValue' , items.value);
      console.log('onUpdate', items.value);
    };

    return {
      items,
      onUpdate,
    };
  },
};
</script>
