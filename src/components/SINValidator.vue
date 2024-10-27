<template>
  <div
    class="sin-validator"
    :class="{
      'valid-border': isValid === true,
      'invalid-border': isValid === false,
      'neutral-border': isValid === null,
    }"
  >
    <h1>SIN Validator</h1>
    <input
      type="text"
      v-model="sinInput"
      @input="validateSIN"
      maxlength="9"
      placeholder="Enter SIN (9 digits)"
      class="sin-input"
      :class="{
        'valid-border': isValid === true,
        'invalid-border': isValid === false,
        'neutral-border': isValid === null,
      }"
    />
    <p v-if="validationMessage" :class="{ valid: isValid, invalid: !isValid }">
      {{ validationMessage }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, type Ref } from 'vue'

export default defineComponent({
  name: 'SINValidator',
  setup() {
    const sinInput: Ref<string> = ref('')
    const isValid: Ref<boolean | null> = ref(null)
    const validationMessage: Ref<string> = ref('')

    const validateSIN = (): void => {
      // Clear message if input is empty
      if (!sinInput.value) {
        validationMessage.value = ''
        isValid.value = null // Reset validity if input is cleared
        return
      }

      const isValidFormat: boolean = /^\d{9}$/.test(sinInput.value)
      if (isValidFormat) {
        let sum: number = 0
        for (let i = 0; i < sinInput.value.length; i++) {
          let digit: number = parseInt(sinInput.value[i])
          if (i % 2 === 1) digit *= 2
          if (digit > 9) digit -= 9
          sum += digit
        }
        isValid.value = sum % 10 === 0
        validationMessage.value = isValid.value ? 'Valid SIN!' : 'Invalid SIN.'
      } else {
        isValid.value = false
        validationMessage.value = 'Invalid SIN. Please enter 9 digits.'
      }
    }

    return {
      sinInput,
      validationMessage,
      isValid,
      validateSIN,
    }
  },
})
</script>
