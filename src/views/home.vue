<template>
  <div class="home">
    <inputType 
      :propsData="propsData" 
      :isTextType="isTextType" 
      :isRadioType="isRadioType" 
      :isSelectType="isSelectType" 
      @changeInput="changeInput" 
    />
    <div class="mainValue">Value: {{ propsData }}</div>

    <div class="api"  v-if="isTextType">
      <input type="text" v-model="propsData" />
    </div>

    <div class="api" v-else-if="isRadioType">
      <input type="radio" id="a" value="A" v-model="propsData" />
      <label for="a">A</label>
      <br />
      <input type="radio" id="b" value="B" v-model="propsData" />
      <label for="b">B</label>
    </div>

    <div class="api" v-else-if="isSelectType">
      <select v-model="propsData">
        <option selected>{{ propsData }}</option>
        <option>A</option>
        <option>B</option>
      </select>
    </div>
  </div>
</template>

<script>
import inputType from "@/components/inputType.vue";

export default {
  name: "home",
  components: {
    inputType,
  },
  data() {
    return {
      propsData: "One",
      typeData: "text",
      isTextType: true,
      isRadioType: false,
      isSelectType: false,
    }
  },
  methods: {
    changeInput(e) {
      if(e === 1) {
        this.isTextType = true;
        this.isRadioType = false;
        this.isSelectType = false;
      }else if (e === 2) {
        this.isTextType = false;
        this.isRadioType = true;
        this.isSelectType = false;
      }else if (e === 3) {
        this.isTextType = false;
        this.isRadioType = false;
        this.isSelectType = true;
      };
    },
  },
};
</script>
