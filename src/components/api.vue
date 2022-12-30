<template>
  <div class="apiData"  v-if="loading">
    Api 載入中
  </div>
  <div class="apiData" v-else>
    <h1>Api page</h1>
      <ul v-for="item in data" :value="item">
        <li>
          <div>姓名：{{ item.name }}</div>
          <div>居住地：{{ item.city }}</div>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  name: "api",
  data() {
    return {
      data: [],
      loading: true,
    }
  },
  beforeCreate() {
      fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
      .then(res => res.json())
      .then(data => {
        this.data = data;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>