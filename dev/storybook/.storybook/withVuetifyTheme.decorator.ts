
import { h, shallowReactive } from "vue";

import StoryWrapper from "./VuetifyAppWrapper.vue";

export const DEFAULT_THEME = "DefaultTheme";

const theme = shallowReactive({ themeName: DEFAULT_THEME });

export const withVuetifyTheme = (storyFn, context) => {
    theme.themeName = context.globals.theme || DEFAULT_THEME;
    const story = storyFn();

    return () => {
        return h(StoryWrapper, theme, { story: () => h(story, { ...context.args }) });
    };
};