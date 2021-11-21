<template>
  <label>Ваш филиал
    <span class="form__span">*</span>
  </label>
  <select
    name="city"
    v-model="citySelect"
    required
    :disabled="checked"
    @change="$emit('validate', isValid), setCity(currentCity)"
  >
    <option value="" selected disabled>Выберите город</option>
    <option :value="city.title" :key="city.id" v-for="city in cities">
      {{ city.title }}
    </option>
  </select>
  <div class="form__input-container">
    <input
      type="checkbox"
      name="online"
      v-model.trim="checked"
      @change="$emit('validate', isValid), setCity(currentCity)"
      id="online"
    />
    <label for="online">Онлайн</label>
  </div>
</template>

<script>
export default {
  props: ["setCity"],
  data() {
    return {
      citySelect: "",
      checked: false,
    };
  },
  computed: {
    cities() {
      return this.$store.state.cities;
    },
    isValid() {
      return this.citySelect || this.checked ? true : false;
    },
    currentCity() {
      return this.checked ? "online" : this.citySelect;
    },
  },
  mounted() {
    this.$store.dispatch("getCities");
  },
};
</script>

<style>
</style>


