<template>
  <div class="login-form-container">
    <p class="form-title">Palindrome checker</p>
    <p class="form-description">Login</p>
    <transition name="slide">
      <p v-if="invalidData" class="invalid-data-message">Username or password is incorrect</p>
    </transition>
    <form class="form" @submit.prevent="submitForm" autocomplete="off">
      <div :class="['input-box', usernameInvalid || invalidData ? 'error' : '']">
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
      <div :class="['input-box', passwordInvalid || invalidData ? 'error' : '']">
        <input
          :type="seePassword ? 'text' : 'password'"
          id="password"
          name="password"
          v-model="form.password"
          required
          @input="checkPassword"
        />
        <label for="password">Password</label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :style="seePassword ? 'fill: #2196f3;' : 'fill: #757575;'"
          width="20"
          height="20"
          viewBox="0 0 488.85 488.85"
          class="see-password"
          @click="seePassword = !seePassword"
        >
          <path
            d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2   s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025   c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3   C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7 c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z"
          />
        </svg>
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
      invalidData: false,
      invalidDataTimeout: null,
      seePassword: false,
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
    // Client-side validation is not a correct way to validate data. It's dangerous, because you can
    // get around it without much effort. The process of submitting the form may be faked.
    // It is never certain that the data that comes to the server is safe. Correct data validation
    // should be on the server side. Client-side validation is to improve the usability of the form.
    submitForm() {
      if (!this.$v.form.$invalid) {
        if (
          this.form.username == this.$store.getters.username &&
          this.form.password == this.$store.getters.password
        ) {
          this.$store.commit("loggedIn", true);
          this.$router.push({ name: "PalindromeChecker" });
        } else {
          this.invalidData = true;
          if (this.invalidDataTimeout) clearTimeout(this.invalidDataTimeout);
          this.invalidDataTimeout = setTimeout(() => {
            this.invalidData = false;
          }, 5000);
        }
      }
    },
  },
};
</script>

<style lang="scss">
.login-form-container {
  width: 100%;
  max-width: 400px;
  padding: 36px 16px;
  background-color: #ffffff;
  overflow: hidden;
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

  .invalid-data-message {
    font-size: 16px;
    font-weight: bold;
    background-color: #ef5350;
    padding: 16px;
    color: #ffffff;
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
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #e0e0e0;
        outline: none;
        background-color: transparent;
        transition: 0.3s;

        &[type="password"] {
          padding-right: 32px;
        }

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

      .see-password {
        position: absolute;
        cursor: pointer;
        right: 0;
        top: 10px;
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