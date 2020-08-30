<template>
<el-button icon="el-icon-s-data" circle size="small" @click="showData">点击事件</el-button>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Test extends Vue {
  data = {};
  a = {
    a:"111",
    b:"222"
  };

  b = this.a

  async showData(){
    this.b = this.a
    console.log(this.a)
    console.log(this.b)
  }

  async fetch() {
    const res = await this.$http.get("stuinfo/test");
    this.a = res.data    //后台是return {a:"888",b:"888"}
  }

  created(){
    this.fetch()
  }
}
</script>

<style>
</style>