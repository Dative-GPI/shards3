import  { type Preview , setup }  from '@storybook/vue3';

import type { App } from 'vue'

import vuetify from '../src/plugins/vuetify'

import { loadFonts } from '../src/plugins/webfontloader'
import { mockApp } from '../src/plugins/axiosmock'

import { withVuetifyTheme } from './withVuetifyTheme.decorator'

import { ColorPlugin } from "../../../src/foundation-shared-ui-components/plugins/colorPlugin";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Foundation-UI', 'Foundation', 'Pages'],
      }
    }
  },
};

loadFonts();

mockApp();

setup((app:App) => {
  app.use(vuetify).use(ColorPlugin);
})

setup((app:App) => {
  app.config.globalProperties.$XYZ = 'XYZ'
})

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape
      items: [
        { value: 'light', title: 'Light', left: '🌞' },
        { value: 'dark', title: 'Dark', left: '🌛' },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const decorators = [withVuetifyTheme]
export default preview;