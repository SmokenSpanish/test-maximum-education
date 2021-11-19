<template>
  <h1>Форма подачи заявки в отдел сервиса и качества</h1>
  <form>
    <label>Ваш филиал:</label>
    <select
    name="city"
    v-model="citySelect"
    required
    :disabled="checked"
    :setCities="setCities"
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
      @change="$emit('validate', isValid), setCity(currentCity)"
      />
      <label>Онлайн</label>
    </div>
  </form>
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
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
</style>
