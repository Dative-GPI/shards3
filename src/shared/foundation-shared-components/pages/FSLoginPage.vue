<template>
  <FSRow
    width="100vw"
    gap="0px"
  >
    <FSCol
      align="top-center"
      :width="formWidth"
    >
      <FSCol
        width="min(464px, 100%)"
        padding="56px 0 0 0"
        align="top-center"
        gap="32px"
      >
        <FSCol
          align="top-center"
          gap="24px"
        >
          <FSImage
            borderRadius="0px"
            :imageId="landingPage?.bannerImageId"
            :height="bannerSize.height"
            :width="bannerSize.width"
          />
          <FSPagination
            class="fs-login-page-pagination"
            width="calc(100% - 64px)"
            :modelValue="0"
            :pages="3"
          />
          <FSCol
            gap="24px"
          >
            <FSCol
              gap="12px"
            >
              <FSLanguageSetter />
              <FSCol
                gap="4px"
              >
                <FSLabel
                  font="text-h1"
                  :label="landingPage?.title"
                />
                <FSLabel
                  :label="landingPage?.subTitle"
                />
              </FSCol>
            </FSCol>
            <FSCol
              v-if="securitySettings?.useLocalAccounts"
              gap="16px"
            >
              <FSTextField
                :label="$tr('ui.login-page.email', 'Email')"
                :required="true"
                v-model="innerEmail"
              />
              <FSPasswordField
                :label="$tr('ui.login-page.password', 'Password')"
                :required="true"
                v-model="innerPassword"
              />
              <FSRow
                align="center-left"
              >
                <FSCheckbox
                  :label="$tr('ui.login-page.remember-me', 'Remember me')"
                  v-model="innerRememberMe"
                />
                <v-spacer />
                <FSLink
                  to="https://www.google.com"
                >
                  {{ $tr("ui.login-page.forgot-password", "Forgot password?") }}
                </FSLink>
              </FSRow>
            </FSCol>
            <FSButton
              v-if="securitySettings?.useLocalAccounts"
              :label="$tr('ui.login-page.login', 'Login')"
              :color="ColorEnum.Primary"
              :fullWidth="true"
            />
          </FSCol>
        </FSCol>
        <FSDivider
          v-if="securitySettings && showDivider"
          :label="$tr('ui.login-page.or', 'Or')"
        />
        <FSRow
          align="center-center"
          width="fill"
          :wrap="false"
        >
          <FSExternalIdentityButton
            v-if="securitySettings && securitySettings.useGoogle"
            scheme="Google"
          />
          <FSExternalIdentityButton
            v-if="securitySettings && securitySettings.useFacebook"
            scheme="Facebook"
          />
          <FSExternalIdentityButton
            v-if="securitySettings && securitySettings.useMicrosoft"
            scheme="OpenIdConnect"
          />
        </FSRow>
        <FSLink
          v-if="landingPage && landingPage.faqLink"
          :to="landingPage.faqLink"
        >
          {{ $tr("ui.login-page.frequently-asked-questions", "Frequently asked questions") }}
        </FSLink>
      </FSCol>
    </FSCol>
    <FSImage
      borderRadius="0px"
      :imageId="landingPage?.bannerImageId"
      :height="backgroundSize.height"
      :width="backgroundSize.width"
    />
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";

import { useCurrentLandingPage, useCurrentSecuritySettings } from "@dative-gpi/foundation-shared-services/composables";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSExternalIdentityButton from "./FSExternalIdentityButton.vue";
import FSLanguageSetter from "./FSLanguageSetter.vue";

import FSPasswordField from "../components/fields/FSPasswordField.vue";
import FSTextField from "../components/fields/FSTextField.vue";
import FSPagination from "../components/FSPagination.vue";
import FSCheckbox from "../components/FSCheckbox.vue"
import FSDivider from "../components/FSDivider.vue";
import FSImage from "../components/FSImage.vue";
import FSLabel from "../components/FSLabel.vue";
import FSLink from "../components/FSLink.vue";
import FSRow from "../components/FSRow.vue";
import FSCol from "../components/FSCol.vue";

export default defineComponent({
  name: "FSLoginPage",
  components: {
    FSExternalIdentityButton,
    FSLanguageSetter,
    FSPasswordField,
    FSPagination,
    FSTextField,
    FSCheckbox,
    FSDivider,
    FSImage,
    FSLabel,
    FSLink,
    FSRow,
    FSCol
  },
  props: {
    backgroundImageId: {
      type: String,
      required: false,
      default: null
    },
    bannerImageId: {
      type: String,
      required: false,
      default: null
    }
  },
  setup(props) {
    const { getting: gettingLandingPage, get: getLandingPage, entity: landingPage } = useCurrentLandingPage();
    const { get: getSecuritySettings, entity: securitySettings } = useCurrentSecuritySettings();
    const { isExtraSmall, isMobileSized } = useBreakpoints();

    const innerEmail = ref("");
    const innerPassword = ref("");
    const innerRememberMe = ref(false);

    const backgroundSize = computed((): { width: number | string, height: number | string } => {
      if (!gettingLandingPage && (!landingPage.value || !landingPage.value.bannerImageId)) {
        return { width: 0, height: 0 };
      }
      if (isExtraSmall.value) {
        return { width: 0, height: 0 };
      }
      if (isMobileSized.value) {
        return { width: "50%", height: "100vh" };
      }
      return { width: "60%", height: "100vh" };
    });

    const bannerSize = computed((): { width: number | string, height: number | string } => {
      if (!gettingLandingPage && (!landingPage.value || !landingPage.value.bannerImageId)) {
        return { width: 0, height: 0 };
      }
      if (isExtraSmall.value) {
        return { width: 240, height: 45 };
      }
      return { width: 360, height: 60 };
    });

    const formWidth = computed((): string => {
      if (!gettingLandingPage && (!landingPage.value || !landingPage.value.backgroundImageId)) {
        return "100%";
      }
      if (isExtraSmall.value) {
        return "100%";
      }
      if (isMobileSized.value) {
        return "50%";
      }
      return "40%";
    });

    const showDivider = computed((): boolean => {
      if (!securitySettings.value) {
        return true;
      }
      if (!securitySettings.value.useLocalAccounts) {
        return false;
      }
      if (!securitySettings.value.useGoogle && !securitySettings.value.useFacebook && !securitySettings.value.useMicrosoft) {
        return false;
      }
      return true;
    });

    onMounted(() => {
      getSecuritySettings();
      getLandingPage();
    });

    return {
      ColorEnum,
      securitySettings,
      landingPage,
      innerEmail,
      innerPassword,
      innerRememberMe,
      backgroundSize,
      bannerSize,
      formWidth,
      showDivider
    };
  }
});
</script>