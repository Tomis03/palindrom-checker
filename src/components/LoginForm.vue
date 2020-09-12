<template>
  <div class="login-form">
    <p class="form-title">Palindrome checker</p>
    <p class="form-description">Login</p>
    <form class="form" @submit.prevent="submitForm" autocomplete="off">
      <div :class="['input-box', usernameInvalid ? 'error' : '']">
        <input
          type="text"
          id="username"
          name="username"
          v-model="form.username"
          required
          @input="checkUsername"
        />
        <label for="username">Username</label>
        <div class="hint-message">
          <transition name="slide">
            <p v-if="usernameInvalid">Incorrect username</p>
          </transition>
        </div>
      </div>
      <div :class="['input-box', passwordInvalid ? 'error' : '']">
        <input
          type="password"
          id="password"
          name="password"
          v-model="form.password"
          required
          @input="checkPassword"
        />
        <label for="password">Password</label>
        <div class="hint-message">
          <transition name="slide">
            <p v-if="passwordInvalid">Incorrect password</p>
          </transition>
        </div>
      </div>
      <div class="submit-button-box">
        <button
          :class="[this.$v.form.username.$invalid || this.$v.form.password.$invalid ? 'disabled' : '']"
        >Login</button>
      </div>
    </form>
  </div>
</template>

<script>
let isValidUsername = (v) => /^[a-zA-Z0-9]+$/.test(v);
let isValidPassword = (v) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(v);
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      usernameInvalid: false,
      passwordInvalid: false,
    };
  },
  validations: {
    form: {
      username: {
        required: validators.required,
        minLength: validators.minLength(4),
        username: isValidUsername,
      },
      password: {
        required: validators.required,
        password: isValidPassword,
      },
    },
  },
  methods: {
    checkUsername() {
      this.usernameInvalid = this.$v.form.username.$invalid;
    },
    checkPassword() {
      this.passwordInvalid = this.$v.form.password.$invalid;
    },
    submitForm() {
      if (!this.$v.form.$invalid) {
        this.$router.push({ name: "PalindromeChecker" });
      }
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
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14),
    0 1px 14px 0 rgba(0, 0, 0, 0.12) !important;

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
        margin-bottom: 36px;
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

      .hint-message {
        overflow: hidden;
        position: absolute;
        font-size: 12px;
        bottom: 20px;
        left: 0;
      }

      &.error {
        input {
          &:focus,
          &:valid {
            & ~ label {
              color: #f44336;
            }
          }
        }

        label,
        .hint-message {
          color: #f44336;
        }

        input {
          border-color: #f44336;
        }
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

        &:hover:not(.disabled) {
          box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
            0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
        }

        &:active:not(.disabled) {
          transform: scale(0.95);
        }

        &.disabled {
          background-color: #bdbdbd;
          cursor: default;
        }
      }
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }
  .slide-enter,
  .slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>