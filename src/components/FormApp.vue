<template>
  <form class="form" @submit="handleSubmit($event)">
    <h1 class="form__title">Форма подачи заявки в отдел сервиса и качества</h1>
    <div class="form__container">
    
    <CitiesForm @validate="CityValidate" :setCity="setCity"/>
    <ThemeForm @validate="ThemeValidate" :setTheme="setTheme"/>
    <DescriptionForm @validate="DescriptionValidate" :setDescription="setDescription"/>
    <FileForm :setFile="setFile"/>
    
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
      isCityValid: false,
      isThemeValid: false,
      isDescriptionValid: false,
      city: '',
      theme: '',
      description: '',
      file: null,
    }
  },
computed: {
  isFormValid() {
      return (this.isCityValid && this.isThemeValid && this.isDescriptionValid);
    },
  },
methods: {
    CityValidate(isValid) {
      this.isCityValid = isValid ? true : false;
    },
    ThemeValidate(isValid) {
      this.isThemeValid = isValid ? true : false;
    },
    DescriptionValidate(isValid) {
      this.isDescriptionValid = isValid ? true : false;
    },
    setCity(city) {
      this.city = city;
    },
    setTheme(theme) {
      this.theme = theme;
    },
    setDescription(description) {
      this.description = description;
    },
    setFile(file) {
      this.file = file;
    },
    async handleSubmit(evt) {
      evt.preventDefault();

      const { city, theme, description, file } = this;

      await this.$store.dispatch('sendData', { city, theme, description, file });

      if (this.$store.state.isPostSuccess) {
        this.$router.push('/success');
      } else {
        alert('Ошибка отправки заявки');
      }
    }
  }
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

.form__span {
  color: red;
}
</style>
