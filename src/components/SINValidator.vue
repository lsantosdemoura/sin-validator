<template>
  <div class="sin-validator" :class="borderClass">
    <h1>SIN Validator</h1>
    <input
      type="text"
      v-model="sinInput"
      @input="debouncedValidate"
      maxlength="9"
      placeholder="Enter SIN (9 digits)"
      class="sin-input"
      :class="borderClass"
    />
    <p
      v-if="validationMessage"
      :class="{ valid: isValid, invalid: isValid === false }"
    >
      {{ validationMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { debounce } from 'lodash'
import { validateSIN } from '@/useCases/validateSIN'

const sinInput = ref('')
const isValid = ref<boolean | null>(null)

const validate = () => {
  if (sinInput.value.length === 0) {
    isValid.value = null
    return
  }
  const result = validateSIN(sinInput.value)
  isValid.value = result
}

// Debounce the validate function to avoid excessive calls
const debouncedValidate = debounce(validate, 100)

const validationMessage = computed(() => {
  if (isValid.value === null) return '' // Clear message if input is empty
  return isValid.value
    ? 'Valid SIN!'
    : 'Invalid SIN. Please enter 9 digits or check validity.'
})

const borderClass = computed(() => ({
  'valid-border': isValid.value === true,
  'invalid-border': isValid.value === false,
  'neutral-border': isValid.value === null,
}))
</script>
