<template>
  <FSIcon>
    {{ icon }}
  </FSIcon>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { computed, defineComponent, onMounted } from "vue";
  
import { useLanguages } from "@dative-gpi/foundation-shared-services/composables";
  
import FSIcon from "./FSIcon.vue";
  
export default defineComponent({
  name: "FSIconFlag",
  components: {
    FSIcon
  },
  props: {
    languageCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  setup(props) {
    const { getMany: getManylanguages, entities: languages } = useLanguages();

    const icon = computed((): string => {
      if (!props.languageCode) {
        return "mdi-web";
      }
      return languages.value.find(l => l.code === props.languageCode)?.icon ?? "mdi-web";
    });

    onMounted((): void => {
      getManylanguages();
    });

    return {
      icon
    };
  }
});
</script>