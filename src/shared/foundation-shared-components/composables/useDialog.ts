import { ref, watch } from 'vue';

// import { useExtensionCommunicationBridge } from "@dative-gpi/foundation-extension-shared-ui";
import { useEnvironment } from './useEnvironment';

export const useDialog = () => {
  const element = ref<HTMLElement | null>(null);

  const { isExtension } = useEnvironment();
  
  if (!isExtension.value) {
    return { element };
  }
  
  // const { setDialogHeight, setDialogWidth, setDialogMounted } = useExtensionCommunicationBridge();

  // watch(element, () => {
  //   if (element.value) {
  //     setDialogHeight(element.value.clientHeight, location.pathname);
  //     setDialogWidth(element.value.clientWidth, location.pathname);
  //     setDialogMounted(location.pathname);
  //   }
  // })

  return { element };
}