<template>
    <v-app :theme="themeName" style="display: flex;">
        <v-main style="display: flex;">
            <slot name="story"></slot>
        </v-main>
    </v-app>
</template>
  
<script>
export default {
    props: {
        themeName: String
    }
};
</script>

<style>
.v-application__wrap {
    min-height: fit-content;
}
</style>