<template>
  <div v-html="icon"></div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
