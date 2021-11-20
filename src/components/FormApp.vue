<template>
  <form class="form">
    <h1 class="form__title">Форма подачи заявки в отдел сервиса и качества</h1>
    <div class="form__container">
    <label>Ваш филиал</label>
    <CitiesForm/>
    <ThemeForm/>
    <DescriptionForm/>
    <FileForm/>
    <button class="form__submit-button" :disabled="!isFormValid">Отправить</button>
    </div>
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
.form {
  width: 90%;
  margin: 30px auto;
}

.form__container {
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 5px;
  border: 2px solid #eee;
}

label {
  color: rgb(122, 121, 121);
  display: inline-block;
  margin: 12px 0 12px;
  font-size: 0.8em;
}

input, select {
  display: block;
  padding: 10px 6px;
  width: 30%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  color: rgb(165, 148, 148);
}

input[type="checkbox"],[type="radio"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.form__submit-button {
  text-transform: uppercase;
  width: 136px;
  height: 36px;
  background: #da9169;
  border: 1px solid #cf7240;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 10px;
}

.form__submit-button:disabled {
  background: #e1e1e1;
  border: none;
  cursor: default;
}
</style>
