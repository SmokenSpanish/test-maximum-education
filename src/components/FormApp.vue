<template>
  <h1>Форма подачи заявки в отдел сервиса и качества</h1>
  <form>
    <label>Ваш филиал:</label>
    <CitiesForm/>
    <ThemeForm/>
    <DescriptionForm/>
    <FileForm/>
  </form>
</template>

<script>
import CitiesForm from './CitiesForm';
import ThemeForm from './ThemeForm';
import DescriptionForm from './DescriptionForm';
import FileForm from './FileForm';

export default {
  name: 'FormApp',
  components: {
    CitiesForm, ThemeForm, DescriptionForm, FileForm
  },
  data () {
    return {

    }
  },
computed: {

  },
}
</script>

<style>
form {
  max-width: 420px;
  width: 100%;
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

input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"],[type="radio"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
</style>
