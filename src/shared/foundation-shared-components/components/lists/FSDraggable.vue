<template>
  <div
    draggable="true"
    @dragstart="onDragStart"
    @dragend="onDragEnd"
    @dragover.prevent
    class="draggable-item"
    width="100%"
  >
    <slot />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FSDraggable',
  props: {
    componentSelector: {
      type: String,
      default: null,
    },
    item: {
      type: Object,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:dragstart', 'update:dragend'],
  setup(props, { emit }) {
    const onDragStart = (event) => {
      const dragged = props.componentSelector == null ? event.target : event.target.closest(props.componentSelector);
      dragged.dataset.initialIndex = props.item.index;
      event.dataTransfer.setDragImage(dragged, 25, 25);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      dragged?.classList.add('dragging');

      //Add item to the drag event
      event.dataTransfer.setData('text/plain', JSON.stringify(props.item));
      emit('update:dragstart', event);
    };

    const onDragEnd = (event) => {
      const dragged = props.componentSelector == null ? event.target : event.target.closest(props.componentSelector);
      dragged?.classList.remove('dragging');
      delete dragged.dataset.initialIndex;
      emit('update:dragend', event, dragged);
    };

    return {
      onDragStart,
      onDragEnd
    };
  },
});
</script>
