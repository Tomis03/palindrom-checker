<template>
  <div class="login-form">
    <p class="form-title">Palindrome checker</p>
    <p class="form-description">Login</p>
    <form class="form">
      <div class="input-box">
        <input type="text" id="username" name="username" required />
        <label for="username">Username</label>
      </div>
      <div class="input-box">
        <input type="password" id="password" name="password" required />
        <label for="password">Password</label>
      </div>
      <div class="submit-button-box">
        <button type="button" @click="submitForm">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("test");
    },
  },
};
</script>

<style lang="scss">
.login-form {
  width: 100%;
  max-width: 400px;
  padding: 36px 16px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12) !important;

  .form-title {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
  }

  .form-description {
    font-size: 20px;
    text-align: center;
    margin-bottom: 36px;
  }

  .form {
    .input-box {
      position: relative;

      input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #e0e0e0;
        outline: none;
        background-color: transparent;
        transition: 0.3s;

        &:focus,
        &:valid {
          border-color: #2196f3;

          & ~ label {
            top: -16px;
            left: 0;
            color: #2196f3;
            font-size: 12px;
          }
        }
      }

      label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        pointer-events: none;
        color: #757575;
        transition: 0.3s;
      }
    }

    .submit-button-box {
      display: flex;
      justify-content: flex-end;
      margin-top: 36px;

      button {
        border: none;
        outline: none;
        background-color: #2196f3;
        font-size: 18px;
        color: #ffffff;
        cursor: pointer;
        padding: 8px 24px;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
          0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12) !important;
        transition: 0.2s;

        &:hover {
          box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
            0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
        }

        &:active {
          transform: scale(0.95);
        }
      }
    }
  }
}
</style>