<template>
  <div class="login">
    <LoginForm />
  </div>
</template>

<script>
export default {
  components: {
    LoginForm: () => import("@/components/LoginForm.vue"),
  },
};
</script>

<style lang="scss">
.login {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  background: rgb(33, 150, 243);
  background: linear-gradient(
    135deg,
    rgba(33, 150, 243, 1) 0%,
    rgba(0, 224, 255, 1) 100%
  );
}
</style>
