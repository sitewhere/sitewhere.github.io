<i18n>
{
  "en": {
    "hello": "hello world!"
  },
  "ja": {
    "hello": "こんにちは、世界！"
  }
}
</i18n>

<template>
  <div>
    <h1>{{ $t('hello') }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>

<style>
</style>
