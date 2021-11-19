<template>
  <div class="form__input-container">
  <input type="radio"
    name="theme"
    valie="quality"
    ref="radio"
    v-model="picked"
    required
    @change="$emit('validate', isValid), cleanInput()"
  >
  <label>Недоволен качеством услуг</label>
  </div>
  <div class="form__input-container">
  <input type="radio"
    name="theme"
    valie="quality"
    ref="radio"
    v-model="picked"
    required
    @change="$emit('validate', isValid), cleanInput()"
  >
  <label>Расторжение договора</label>
  </div>
  <div class="form__input-container">
  <input type="radio"
    name="theme"
    valie="quality"
    ref="radio"
    v-model="picked"
    required
    @change="$emit('validate', isValid), cleanInput()"
  >
  <label>Не приходит письмо активации на почту</label>
  </div>
  <div class="form__input-container">
  <input type="radio"
    name="theme"
    valie="quality"
    ref="radio"
    v-model="picked"
    required
    @change="$emit('validate', isValid), cleanInput()"
  >
  <label>Не работает личный кабинет</label>
  </div>
  <input
    class="form__input"
    type="text"
    placeholder="Другое"
    ref="input"
    required
    v-model="text"
    @input="$emit('validate', isValid), unpickedRadioInputs()"
    >
</template>

<script>
export default {
  name: 'ThemeForm',
  data () {
    return {
      picked: false,
      text: ''
    }
  },
  computed: {
    isValid() {
      return (this.picked || this.text) ? true : false;
    },
  },
  methods: {
    cleanInput() {
      this.text = '';
      this.$refs.input.required = false;
    },
    unpickedRadioInputs() {
      this.picked = false;
      this.$refs.radio.required = false;
    }
  },
}
</script>

<style>

</style>
