<template lang="pug">
.feedback-form
  form
    .input.input__name
      .placeholder Name
      input(v-model="form.name")
    .input.input__phone
      .placeholder Phone number
      input(v-mask="['+373 (##) ##-##-##', '+373 (###) ##-##-##']" v-model="form.phone")
    .input.input__email
      .placeholder Email
      input(v-model="form.email")
    .input.input__message
      .placeholder Message
      textarea(
        ref="textareaEl"
        v-model="form.message"
        @input="resizeTextarea"
        :style="{ height: `${textareaHeight}px` }"
      )
    button.submit__btn(
      type="submit"
      :disabled="!isComplete"
    ) Submit

</template>

<script setup lang="ts">
import {computed, ref} from "vue";

// ------------------- state --------------------------->
const form = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
})
const textareaEl = ref<HTMLTextAreaElement | null>(null)
const textareaHeight = ref('0')

// ------------------- computed ------------------------>
const isComplete = computed(() => {
  return !!form.value.name && !!form.value.phone && !!form.value.email && !!form.value.message
})

// ------------------- functions ----------------------->
function resizeTextarea() {
  if(textareaEl.value) {
    textareaHeight.value = `${textareaEl.value.scrollHeight}px`;
    textareaEl.value.style.height = textareaHeight.value;
  }
}
</script>

<style lang="scss" scoped>
.feedback-form {
  @media (max-width: 1439.99px) {
    width: 100%;
    flex: 1;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 352px;
    height: 100%;
    padding: 32px;
    background-color: $smoke_grey_light;


    @media (max-width: 1439.99px) {
      width: 100%;
      background-color: $white;
    }

    .input {
      width: 100%;
      border-radius: 16px;
      background: $white;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      .placeholder {
        color: $text_grey;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      }
      input {
        height: 24px;
      }
      textarea {
        resize: none;
        overflow: hidden;
        width: 100%;
        min-height: 28px;
      }
      input, textarea {
        color: $text_grey_dark;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        width: 100%;
        border: solid 1px transparent;
        border-bottom-color: $text_grey_light;
        outline: none;
      }
    }

    .submit {
      &__btn {
        cursor: pointer;
        width: 288px;
        height: 56px;
        align-self: flex-start;
        background-color: $smoke_grey_light;
        color: $text_blue_light;
        border: solid 2px transparent;
        border-radius: 16px;
        text-align: center;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        outline: none;

        &:active:not(:disabled) {
          background-color: $smoke_grey;
          transform: scale(0.95);
        }

        &:focus-visible {
          background-color: $white;
          color: $text_blue;
          border-color: $text_blue;
        }

        &:hover:not(:disabled) {
          background-color: $smoke_grey;
          color: $text_blue;
        }

        &:disabled {
          cursor: not-allowed;
          color: $text_grey_medium;
        }

        @media (max-width: 767.99px) {
          align-self: center;
        }

        @media (min-width: 1439.99px) {
          background-color: $white;
          &:hover:not(:disabled) {
            background-color: $white;
            color: $text_blue;
          }
        }
      }
    }
  }
}
</style>