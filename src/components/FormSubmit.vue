<template>
<div class="success">
    <h1 class="success__title">Заявка отправлена</h1>
    <img src="../assets/success_img.png" alt="Заявка отправлена" class="success__image">
</div>
</template>

<script>
export default {
name: 'FormSubmit',
}
</script>

<style>
.success {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.success__title {
  margin: 0 0 20px;
}

.success__image {
  margin: 0 0 20px;
}
</style>