<template>
  <base-view>
    <login-form slot="content"></login-form>
  </base-view>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import BaseView from './BaseView.vue';

export default ({
  name: "Login",
  components: {
    BaseView,
    LoginForm
  }
})
</script>