<template>
  <base-view>
    <RegisterForm slot="content"></RegisterForm>
  </base-view>
</template>
  
<script>
import BaseView from './BaseView.vue';
import RegisterForm from '@/components/RegisterForm.vue';

export default ({
  name: "Register",
  components: {
    BaseView,
    RegisterForm
  }
})
</script>