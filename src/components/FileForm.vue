<template>
  <label>Загрузка документов</label>
  <p class="form__file">Приложите, пожалуйста, полноэкранный скриншот. Это поможет быстрее решить проблему.</p>
    <input class="form__file-input" type="file" name="files" @change="handleFileChange($event)">
</template>

<script>
export default {
  methods: {
    handleFileChange(evt) {
      const file = evt.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
      }
    }
  }
}
</script>

<style>
  .form__file {
  color: #a0a0a0;
  max-width: 420px;
  margin: 0 0 15px;
}
</style>
