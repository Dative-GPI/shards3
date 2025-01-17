<template>
  <FSButton
    prependIcon="mdi-printer-outline"
    :label="$tr('ui.common.print', 'Print')"
    :color="ColorEnum.Light"
    v-bind="$attrs"
    @click="buildPreview()"
  />
  <FSDialog
    v-model="dialog"
    :title="$tr('ui.common.print', 'Print')"
    :width="800"
  >
    <template
      #body
    >
      <FSLoader
        v-if="loading"
        width="100%"
        height="400px"
      />
      <FSCol
        v-show="!loading"
        width="100%"
        height="400px"
      >
        <FSText
          :style="{ minHeight: '16px' }"
          font="text-overline"
        >
          {{$tr('ui.print.preview', 'Preview')}}
        </FSText>
        <div
          :style="{ width: '100%', overflow: 'scroll' }"
        >
          <FSCard
            id="canvas-container"
            :padding="margin"
          >
          </FSCard>
        </div>
        <FSRow
          align="center-center"
        >
          <FSButton
            :prependIcon="'mdi-printer-outline'"
            :label="$tr('ui.common.print', 'Print')"
            :color="ColorEnum.Primary"
            @click="printCanvas()"
          />
          <FSButton
            :prependIcon="'mdi-download'"
            :label="$tr('ui.print.download-image', 'Download image')"
            :color="ColorEnum.Primary"
            @click="downloadCanvasImage()"
          />
        </FSRow>
      </FSCol>
    </template>
  </FSDialog>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import html2canvas from 'html2canvas';

import FSButton from "../FSButton.vue";
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';
import FSDialog from '@dative-gpi/foundation-shared-components/components/FSDialog.vue';
import FSLoader from '@dative-gpi/foundation-shared-components/components/FSLoader.vue';

export default defineComponent({
  name: "FSButtonPrint",
  components: {
    FSButton,
    FSDialog,
    FSLoader,
    FSText,
    FSCard
  },
  props: {
    elementToPrint: {
      type: Object as () => HTMLElement | null,
      default: null
    },
    disableInputs: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const margin = 16;

    const dialog = ref(false);
    const loading = ref(false);
    // Set A4 size
    const windowWidth = computed(() => {
      return Math.round((297 / 25.4) * 96);
    });

    const ignoreElements = (element: Element) => {
      if (props.disableInputs) {
        return element.classList.contains("v-input");
      }
      return false;
    }

    const buildPreview = async () => {
      loading.value = true;
      const elementToPrint = props.elementToPrint || document.body;

      const fullCanvas = await html2canvas(elementToPrint, {
        backgroundColor: null,
        windowWidth: windowWidth.value,
        ignoreElements: ignoreElements
      });

      dialog.value = true;

      setTimeout(() => {
        setCanvas(fullCanvas);
      }, 100);
    };

    const setCanvas = async (canvas: HTMLCanvasElement, count = 0) => {
      const canvasContainer = document.getElementById("canvas-container");
      if (!canvasContainer) {
        if(count > 10) {
          return;
        }
        return setCanvas(canvas, count++);
      }
      canvasContainer.innerHTML = "";
      canvasContainer.appendChild(canvas);
      loading.value = false;
    };

    const printCanvas = () => {
      const canvas = document.getElementById("canvas-container")?.querySelector("canvas");

      if (!canvas) {
        return;
      }

      const dataUrl = canvas.toDataURL("image/png");
      const windowContent = `<img width="100%" src="${dataUrl}" />`;
      const printWindow = window.open("", "_blank", "width=600,height=600");
      printWindow?.document.open();
      printWindow?.document.write(windowContent);
      printWindow?.document.close();
      
      printWindow?.addEventListener("load", () => {
        printWindow?.focus();
        printWindow?.print();
        printWindow?.close();
      });
    }

    const downloadCanvasImage = () => {
      const canvas = document.getElementById("canvas-container")?.querySelector("canvas");

      if (!canvas) {
        return;
      }

      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "image.png";
      a.click();
    }

    return {
      printCanvas,
      buildPreview,
      downloadCanvasImage,
      dialog,
      margin,
      loading,
      ColorEnum
    }
  }
});
</script>