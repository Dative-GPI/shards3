<template>
    <FSRow :gap="24">
        <div class="fs-edit-image">
            <FSImage width="96px"
                height="96px"
                :imageB64="realSource" />
        </div>
        <FSCol height="fill"
            class="pa-2"
            align="bottom-left">

            <FSText v-if="fileSelected"
                font="text-body">
                {{ fileSelected.fileName }}
            </FSText>
            <FSRow>
                <FSButtonFileIcon :readFile="false"
                    accept="image/*"
                    @update:modelValue="onUpload" />
                <FSButtonRemoveIcon @click="onRemove" />
            </FSRow>
        </FSCol>
    </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import FSButtonRemoveIcon from "./buttons/FSButtonRemoveIcon.vue";
import FSButtonFileIcon from "./buttons/FSButtonFileIcon.vue";
import FSText from "./FSText.vue";

import { FileImage } from "@dative-gpi/foundation-shared-components/models";

import FSImage from "./FSImage.vue";

export default defineComponent({
    name: "FSEditImage",
    components: {
        FSImage,
        FSText,
        FSButtonRemoveIcon,
        FSButtonFileIcon,
    },
    props: {
        value: {
            type: String as PropType<string>,
            required: false
        }
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {

        const fileSelected = ref<FileImage>({ fileName: "", fileContent: "" });

        const realSource = computed(() => {
            return fileSelected.value && fileSelected.value.fileName ? fileSelected.value.fileContent : props.value;
        });

        const onUpload = (payload: File) => {
            fileSelected.value.fileName = payload.name;
            readFile(payload);
            emit("update:modelValue", fileSelected.value);
        };

        const onRemove = () => {
            fileSelected.value.fileName = "";
            fileSelected.value.fileContent = "";
            emit("update:modelValue", fileSelected.value);
        };

        const readFile = (file: File) => {
            const reader = new FileReader();
            reader.addEventListener("load", (fileEv) => {
                if (fileSelected.value) fileSelected.value!.fileContent = fileEv.target && fileEv.target.result;
            });
            reader.readAsDataURL(file);
        };

        return {
            fileSelected,
            realSource,
            onUpload,
            onRemove
        };
    }
});
</script>