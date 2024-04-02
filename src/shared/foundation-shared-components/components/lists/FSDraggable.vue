<template>
  <FSRow
    :draggable="!$props.disabled"
    :class="classes"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @dragstart="onDragStart"
    @dragend="onDragEnd"
    @dragover.prevent
    style="flex: 1 1 0;"
  >
    <slot />
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSDraggable",
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
  components: {
    FSRow,
  },
  emits: ["update:dragstart", "update:dragend"],
  setup(props, { emit }) {
    let prevDragOverTarget: EventTarget | null = null;

    const draggedElementCopy = ref<HTMLElement|null>(null);
    const touchStartX = ref(0);
    const touchStartY = ref(0);
    const touchEndX = ref(0);
    const touchEndY = ref(0);

    const classes = computed((): string[] => {
      const classNames = ["fs-draggable-item"];
      if (!props.disabled) {
        classNames.push("fs-draggable-enabled");
      }
      return classNames;
    });

    const onTouchStart = (event: TouchEvent) => {
      if (props.disabled) {
        return;
      }
      event.preventDefault();
      const touch = event.touches[0];
      touchStartX.value = touch.clientX;
      touchStartY.value = touch.clientY;

      const dragged = (event.target as HTMLElement)?.closest(props.elementSelector) as HTMLElement;
      dragged.classList.add("fs-draggable-dragging");
      dragged.dataset.initialIndex = props.item?.index ?? props.item?.value;

      draggedElementCopy.value = dragged.cloneNode(true) as HTMLElement;
      draggedElementCopy.value.style.position = "fixed";
      draggedElementCopy.value.style.left = `${touchStartX.value - 25}px`;
      draggedElementCopy.value.style.top = `${touchStartY.value - 25}px`;
      draggedElementCopy.value.style.zIndex = "1000";
      draggedElementCopy.value.style.pointerEvents = "none";
    };

    const onTouchMove = (event: TouchEvent) => {
      if (props.disabled) {
        return;
      }
      event.preventDefault();
      const touch = event.touches[0];
      touchEndX.value = touch.clientX;
      touchEndY.value = touch.clientY;

      if (draggedElementCopy.value) {
        draggedElementCopy.value.style.left = `${touchEndX.value - 25}px`;
        draggedElementCopy.value.style.top = `${touchEndY.value - 25}px`;
        document.body.appendChild(draggedElementCopy.value);
      }
      const dragOverTarget = document.elementFromPoint(touchEndX.value, touchEndY.value)?.closest(props.elementSelector);

      if (dragOverTarget) {
        const dragOverEvent = new Event("dragover", {
          bubbles: true,
          cancelable: true
        });
        dragOverTarget?.dispatchEvent(dragOverEvent);
        if (dragOverTarget !== prevDragOverTarget) {
          const dragLeaveEvent = new Event("dragleave", {
            bubbles: true,
            cancelable: true
          });
          prevDragOverTarget?.dispatchEvent(dragLeaveEvent);
        }
        prevDragOverTarget = dragOverTarget;
      }
      else if (prevDragOverTarget) {
        const dragLeaveEvent = new Event("dragleave", {
          bubbles: true,
          cancelable: true
        });
        prevDragOverTarget?.dispatchEvent(dragLeaveEvent);
        prevDragOverTarget = null;
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (props.disabled) {
        return;
      }
      event.preventDefault();
      const dragged = (event.target as HTMLElement)?.closest(props.elementSelector);
      if (draggedElementCopy.value) {
        draggedElementCopy.value.remove();
        draggedElementCopy.value = null;
      }

      const dropTarget = document.elementFromPoint(touchEndX.value, touchEndY.value);
      const dragEndEvent = new Event("dragend");
      Object.defineProperty(dragEndEvent, "srcElement", {
        get: function () { return event.target; }
      });
      emit("update:dragend", dragEndEvent, dragged);

      const dropEvent = new DragEvent("drop", {
        bubbles: true,
        cancelable: true,
      });
      dropEvent.dataTransfer?.setData("text/plain", JSON.stringify(props.item));
      dropTarget?.dispatchEvent(dropEvent);

      touchStartX.value = 0;
      touchStartY.value = 0;
      touchEndX.value = 0;
      touchEndY.value = 0;
      if (dragged) {
        dragged.classList.remove("fs-draggable-dragging");
      }
    };

    const onDragStart = (event: DragEvent) => {
      if (props.disabled) {
        event.preventDefault();
        return;
      }
      const dragged = (event.target as HTMLElement)?.closest(props.elementSelector) as HTMLElement;
      dragged.dataset.initialIndex = props.item?.index ?? props.item?.value;
      event.dataTransfer?.setDragImage(dragged, 25, 25);
      
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = "move";
        event.dataTransfer.effectAllowed = "move";
      }
      dragged?.classList.add("fs-draggable-dragging");
      event.dataTransfer?.setData("text/plain", JSON.stringify(props.item));
      emit("update:dragstart", event);
    };

    const onDragEnd = (event: DragEvent) => {
      const dragged = (event.target as HTMLElement)?.closest(props.elementSelector);
      dragged?.classList.remove("fs-draggable-dragging");
      emit("update:dragend", event, dragged);
    };

    return {
      classes,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onDragStart,
      onDragEnd
    };
  },
});
</script>
