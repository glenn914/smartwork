<template>
<div>
  <avue-crud :data="data.data" 
  :option= "option"
  @row-save= "create"
  @row-update= "update"
  @row-del = "remove"
  ></avue-crud>
</div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";

@Component({})
export default class UserCRUD extends Vue{
  data={};
  
  option = {
    addBtnText:'Create',
    editBtnText:'Edit',
    delBtnText:'Delete',
    column: [
      {prop:"username", label: "Username"},
      {prop:"password", label: "Password",type:'password',hide: true},
      {prop:"usertype", label: "Usertype", type:"select",dicData:[
        {label:'AdminUser',value:'admin'},
        {label:'NormalUser',value:'normal_user'}
      ]}
    ]
  }

    async create (row,done,loading ){
      // const data = JSON.parse(JSON.stringify(row));
      // delete data.$usertype;
      await this.$http.post('userinfo', row)
        this.$message.success("创建成功")
      this.fetch()
      done()
      loading()
    }

  async update (row,index,done,loading){
    const data = JSON.parse(JSON.stringify(row))
    delete data.$index;
    delete data.$usertype;
    await this.$http.put(`userinfo/${row._id}`,data)
    this.$message.success("更新成功")
    this.fetch()
    done()
    loading()
  }

  async remove(row){
    // await this.$confirm("是否确认删除？")
    try {
      await this.$confirm("是否确认删除？")
    }catch (e) {
      return
    }
    await this.$http.delete(`userinfo/${row._id}`)
    this.$message.success('删除成功')
    this.fetch()
  }

  async fetch(){
    const res = await this.$http.get('userinfo')
    this.data = res
  }

  created(){
    this.fetch()
  }
}
</script>

<style>

</style>