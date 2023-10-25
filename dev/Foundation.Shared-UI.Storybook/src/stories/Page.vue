<template>
  <article>
    <my-header :user="user"
      @login="onLogin"
      @logout="onLogout"
      @create-account="onCreateAccount" />

    <section class="storybook-page">
      <h2>Pages in Storybook</h2>
      <div>
        Device : {{ device }}
      </div>
    </section>
  </article>
</template>

<script lang="ts" setup>
import './page.css';
import MyHeader from '@dative-gpi/foundation-shared-ui-components/components/Header.vue';

import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import { ref, onMounted } from 'vue';

const user = ref<{ name: string } | null>(null);
const device = ref('NOT mocked device :(');

const onLogin = () => {
  user.value = { name: 'Jane Doe' };
};
const onLogout = () => {
  user.value = null;
};
const onCreateAccount = () => {
  user.value = { name: 'Jane Doe' };
};

onMounted(() => {
  axios.get("/api/device").then(function (response: any) {
    device.value = response.data.data;
  });
});
</script>
