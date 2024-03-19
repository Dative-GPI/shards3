<template>
  <div
    :draggable="!$props.disabled"
    @dragstart="onDragStart"
    @dragend="onDragEnd"
    @dragover.prevent
    :class="($props.disabled ? '' : 'fs-draggable-enabled ') + 'fs-draggable-item'"
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
    elementSelector: {
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
      if(props.disabled){
        event.preventDefault();
        return;
      }
      const dragged = event.target.closest(props.elementSelector);
      dragged.dataset.initialIndex = props.item?.index ?? props.item?.value;
      event.dataTransfer.setDragImage(dragged, 25, 25);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      dragged?.classList.add('fs-draggable-dragging');

      //Add item to the drag event
      event.dataTransfer.setData('text/plain', JSON.stringify(props.item));
      emit('update:dragstart', event);
    };

    const onDragEnd = (event) => {
      const dragged = event.target.closest(props.elementSelector);
      dragged?.classList.remove('fs-draggable-dragging');
      //delete dragged?.dataset?.initialIndex;
      emit('update:dragend', event, dragged);
    };

    return {
      onDragStart,
      onDragEnd
    };
  },
});
</script>
