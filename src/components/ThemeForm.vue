<template>
  <label>Тема обращения
    <span class="form__span">*</span>
  </label>
  <div class="form__input-container">
    <input
      type="radio"
      name="theme"
      value="quality"
      ref="radio"
      v-model="picked"
      id="quality"
      @change="$emit('validate', isValid), cleanInput(), setTheme(theme)"
    />
    <label for="quality">Недоволен качеством услуг</label>
  </div>
  <div class="form__input-container">
    <input
      type="radio"
      name="theme"
      value="quality"
      v-model="picked"
      id="termination"
      @change="$emit('validate', isValid), cleanInput(), setTheme(theme)"
    />
    <label for="termination">Расторжение договора</label>
  </div>
  <div class="form__input-container">
    <input
      type="radio"
      name="theme"
      value="quality"
      v-model="picked"
      id="letter"
      @change="$emit('validate', isValid), cleanInput(), setTheme(theme)"
    />
    <label for="letter">Не приходит письмо активации на почту</label>
  </div>
  <div class="form__input-container">
    <input
      type="radio"
      name="theme"
      value="quality"
      v-model="picked"
      id="account"
      @change="$emit('validate', isValid), cleanInput(), setTheme(theme)"
    />
    <label for="account">Не работает личный кабинет</label>
  </div>
  <input
    class="form__input"
    type="text"
    placeholder="Другое"
    ref="input"
    required
    v-model="text"
    @input="$emit('validate', isValid), unpickedRadioInputs(), setTheme(theme)"
  />
</template>

<script>
export default {
  name: "ThemeForm",
  props: ['setTheme'],
  data() {
    return {
      picked: false,
      text: '',
    };
  },
  computed: {
    isValid() {
      return this.picked || this.text ? true : false;
    },
    theme() {
      return this.picked ? this.picked : this.text;
    },
  },
  methods: {
    cleanInput() {
      this.text = "";
      this.$refs.input.required = false;
    },
    unpickedRadioInputs() {
      this.picked = false;
      this.$refs.radio.required = false;
    },
  },
};
</script>

<style>
  .form__input {
    margin-bottom: 20px;
  }
</style>
