<template>
  <div class="login">
    <LoginForm />
    <transition name="slide">
      <div v-if="loginHint" class="login-hint">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#2196f3"
          width="24"
          height="24"
          viewBox="0 0 330 330"
          style="margin-right: 12px;"
        >
          <path
            d="M165,0C74.019,0,0,74.02,0,165.001C0,255.982,74.019,330,165,330s165-74.018,165-164.999C330,74.02,255.981,0,165,0z M165,300c-74.44,0-135-60.56-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.44,239.439,300,165,300z"
          />
          <path
            d="M164.998,70c-11.026,0-19.996,8.976-19.996,20.009c0,11.023,8.97,19.991,19.996,19.991 c11.026,0,19.996-8.968,19.996-19.991C184.994,78.976,176.024,70,164.998,70z"
          />
          <path
            d="M165,140c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-90C180,146.716,173.284,140,165,140z"
          />
        </svg>
        <div>
          <p class="hint-content">Username: admin</p>
          <p class="hint-content">Password: Admin12345</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginHint: false,
    };
  },
  components: {
    LoginForm: () => import("@/components/LoginForm.vue"),
  },
  mounted() {
    this.loginHint = true;
    setTimeout(() => {
      this.loginHint = false;
    }, 10000);
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
    rgba(0, 255, 119, 1) 100%
  );

  .login-hint {
    position: fixed;
    display: flex;
    align-items: center;
    top: 30px;
    right: 0;
    padding: 8px 36px 8px 12px;
    background-color: #ffffff;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 0.15s, transform 0.15s;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
