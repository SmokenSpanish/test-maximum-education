<template>
  <h1>Форма подачи заявки в отдел сервиса и качества</h1>
  <form>
    <label>Ваш филиал:</label>
    <select name="city" v-model="city" required :disabled="checked" :setCities="setCities">
      <option value="" selected disabled>Выберите город</option>
      <option :value="filial.title" :key="filial.id" v-for="filial in filials">
        {{ filial.title }}
      </option>
    </select>
    <div class="">
      <input type="checkbox" name="online" />
      <label>Онлайн</label>
    </div>
    <label>Email:</label>
    <input type="email" v-model="email" />
    <label>Password:</label>
    <input type="password" v-model="password" />
  </form>
  <p>City:{{ city }}</p>
  <p>email:{{ email }}</p>
  <p>password:{{ password }}</p>
</template>

<script>
export default {
  data () {
    return {
      city: '',
      checked: false
    }
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
