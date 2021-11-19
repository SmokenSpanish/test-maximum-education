<template>
   <textarea
      class="form__textarea"
      name="description"
      rows="10"
      placeholder="Введите текст"
      required
      v-model.trim="message"
      @input="$emit('validate', isValid)"
    />
</template>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },
  computed: {
    isValid() {
      return this.message ? true : false;
    }
  }
}
</script>

<style>
  .form__textarea {
  width: 100%;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  padding: 6px 10px;
  margin-top: 10px;
}

.form__textarea::placeholder {
  color: #a0a0a0;
}
</style>
