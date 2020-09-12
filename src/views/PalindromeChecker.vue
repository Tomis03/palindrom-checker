<template>
  <div class="palindrome-checker">
    <div class="checker-container">
      <p class="checker-title">Check if string is palindrome:</p>
      <div class="new-palindrome-container">
        <div class="input-box">
          <input type="text" id="palindrome" name="palindrome" v-model="newPalindrome" required />
          <label for="palindrome">Your palindrome</label>
        </div>
        <button
          type="button"
          class="add-palindrome-button"
          @click="$store.commit('palindromes', newPalindrome); newPalindrome = '';"
        >Check palindrome</button>
      </div>
      <div class="palindromes-list">
        <p class="list-title">Palindromes list:</p>
        <div v-for="(palindrome, index) in $store.getters.palindromes" :key="`palindrome-${index}`">
          <p class="palindrome">
            {{index + 1}}. {{palindrome}} -
            <span
              :style="isPalindrome(palindrome) ? 'color: #4Caf50;' : 'color: #f44336;'"
            >{{isPalindrome(palindrome) ? 'Palindrome' : 'Not palindrome'}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPalindrome: "",
    };
  },
  methods: {
    isPalindrome(string) {
      var regExp = /[\W_]/g;
      var lowerCaseString = string.toLowerCase().replace(regExp, "");
      var reversedString = lowerCaseString.split("").reverse().join("");
      return reversedString === lowerCaseString;
    },
  },
};
</script>

<style lang="scss">
.palindrome-checker {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  .checker-container {
    width: 100%;
    max-width: 1000px;
    padding: 16px;

    .checker-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 52px;
    }

    .new-palindrome-container {
      width: 100%;
      max-width: 700px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 52px;
      margin-left: auto;
      margin-right: auto;

      @media (max-width: 599px) {
        flex-direction: column;
        align-items: center;

        .input-box {
          margin-bottom: 36px;
        }

        .add-palindrome-button {
          margin-left: 0;
        }
      }
    }

    .input-box {
      position: relative;
      width: 100%;
      max-width: 450px;

      input {
        width: 100%;
        padding: 10px 0;
        height: 40px;
        box-sizing: border-box;
        font-size: 16px;
        border: none;
        border-bottom: 1px solid #c4c4c4;
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
        color: #5a5a5a;
        transition: 0.3s;
      }
    }

    .add-palindrome-button {
      border: none;
      outline: none;
      background-color: #2196f3;
      font-size: 18px;
      max-height: 40px;
      color: #ffffff;
      cursor: pointer;
      min-width: 200px;
      max-width: 200px;
      padding: 8px 24px;
      margin-left: 16px;
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
      cursor: default;
    }
  }

  .palindromes-list {
    .list-title {
      font-size: 20px;
      margin-bottom: 16px;
      font-weight: bold;
    }

    .palindrome {
      font-size: 17px;
      margin-bottom: 8px;
    }
  }
}
</style>