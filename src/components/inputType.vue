<template>
  <div class="inputType">
    <button @click="changeInput(1)">text</button>
    <button @click="changeInput(2)">radio</button>
    <button @click="changeInput(3)">select</button>
  </div>
</template>

<script>
export default {
  name: "inputType",
  props: {
    propsData: String,
    isTextType: Boolean,
    isRadioType: Boolean,
    isSelectType: Boolean,
  },
  methods: {
    changeInput(e) {
      this.$emit("changeInput", e);
    },
  },
};
</script>