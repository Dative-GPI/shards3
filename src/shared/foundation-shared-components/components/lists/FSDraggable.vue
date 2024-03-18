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
  setup(props) {
    const onDragStart = (event) => {
      const dragged = props.componentSelector==null ? event.target : event.target.closest(props.componentSelector);
      event.dataTransfer.setDragImage(dragged, 25, 25);
      dragged?.classList.add('dragging');

      //Add item to the drag event
      event.dataTransfer.setData('text/plain', JSON.stringify(props.item));
    };    

    const onDragEnd = (event) => {
      const dragged = props.componentSelector==null ? event.target : event.target.closest(props.componentSelector);
      dragged?.classList.remove('dragging');
    };

    return {
      onDragStart,
      onDragEnd
    };
  },
});
</script>
