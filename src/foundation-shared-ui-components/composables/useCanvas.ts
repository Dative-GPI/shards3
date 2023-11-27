import { ref } from "vue";

let initialized = false;

const context = ref<CanvasRenderingContext2D | null>(null);

export const useCanvas = () => {
    if (!initialized) {
        context.value = document.createElement('canvas').getContext("2d");
    }

    initialized = true;

    const getFont = (font: string) => {
        switch (font) {
            case "text-button":
                return {
                    webFont: "700 16px/20px 'Montserrat', sans-serif",
                    webLetterSpacing: "-0.48px",
                    mobileFont: "700 13px/16px 'Montserrat', sans-serif",
                    mobileLetterSpacing: "-0.39px"
                };
            default:
                return {
                    webFont: "500 16px/20px 'Montserrat', sans-serif",
                    webLetterSpacing: "-0.48px",
                    mobileFont: "500 13px/16px 'Montserrat', sans-serif",
                    mobileLetterSpacing: "-0.39px"
                };
        }
    };

    const getTextSize = (text: string, font: string) => {
        const fonts = getFont(font);

        context.value!.font = fonts.webFont;
        (context.value! as any).letterSpacing = fonts.webLetterSpacing;
        let webWidth = (context.value!.measureText(text).width);

        context.value!.font = fonts.mobileFont;
        (context.value! as any).letterSpacing = fonts.mobileLetterSpacing;
        let mobileWidth = (context.value!.measureText(text).width);

        switch (font) {
            case "text-button":
                webWidth += 1.25;
                mobileWidth += 1.25;
                break;
        }

        return { web: `${webWidth}px`, mobile: `${mobileWidth}px` };
    };

    return {
        getTextSize
    };
}
