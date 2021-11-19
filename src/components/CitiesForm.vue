<template>
  <select
    name="city"
    v-model="citySelect"
    required
    :disabled="checked"
    >
      <option value="" selected disabled>Выберите город</option>
      <option :value="city.title" :key="city.id" v-for="city in cities">
        {{ city.title }}
      </option>
    </select>
    <div class="">
      <input
      type="checkbox"
      name="online"
      v-model.trim="checked"
      />
      <label>Онлайн</label>
    </div>
</template>

<script>
export default {
  data () {
    return {
      citySelect: '',
      checked: false,
    }
  },
  computed: {
    cities() {
      return this.$store.state.cities;
    },
    isValid() {
      return (this.selected || this.checked) ? true : false;
    },
    currentCity() {
      return this.checked ? 'online' : this.selected;
    }
  },
  mounted() {
      this.$store.dispatch('getCities');
    }
}
</script>

<style>

</style>
