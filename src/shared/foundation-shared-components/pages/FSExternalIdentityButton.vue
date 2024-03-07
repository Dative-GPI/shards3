<template>
  <FSButton
    style="flex: 1"
    :href="loginUrl"
    :prependIcon="icon"
  />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { LOGIN_EXTERNAL_URL, SIGNUP_EXTERNAL_URL } from "@dative-gpi/foundation-shared-services/config";
import { buildURL } from "@dative-gpi/bones-ui";

import FSButton from "../components/FSButton.vue";
import FSIcon from "../components/FSIcon.vue";

export default defineComponent({
  name: "FSExternalIdentityButton",
  components: {
    FSButton,
    FSIcon
  },
  props: {
    scheme: {
      type: String as PropType<"OpenIdConnect" | "Google" | "Facebook">,
      required: false,
      default: null
    },
    invitation: {
      type: Boolean,
      required: false,
      default: false
    },
    token: {
      type: String,
      required: false,
      default: null
    }
  },
  setup(props) {
    const loginUrl = computed((): string => {
      if (props.invitation) {
        return buildURL(SIGNUP_EXTERNAL_URL(), { scheme: props.scheme, token: props.token });
      }
      return buildURL(LOGIN_EXTERNAL_URL(), { scheme: props.scheme });
    });

    const icon = computed((): string => {
      switch (props.scheme) {
        case "OpenIdConnect": return "mdi-microsoft";
        case "Google":        return "mdi-google";
        case "Facebook":      return "mdi-facebook";
        default:              return "mdi-login";
      }
    });

    return {
      loginUrl,
      icon
    };
  }
})
</script>