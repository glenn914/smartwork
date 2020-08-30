<template>
  <div>
    <avue-crud
      style="height: 100vh"
      :data="data.result"
      :option="option"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      :page.sync="page"
      @on-load="onLoad"
      @refresh-change="freshList"
      @selection-change="selectionChange"
      @search-change="searchChange"
      :cell-style="cellStyle"
    >
      <template slot="menuLeft">
        <el-button type="primary" size="small" @click="downLoadTemplate">下载模板</el-button>
      </template>
      <template slot="tip">
        <el-button type="text" size="small" @click="deleteSelected">
          <i class="el-icon-delete el-icon--right">删除选中</i>
        </el-button>
      </template>
      <template slot="tip">
        <!-- action="http://localhost/stuinfo/upload" -->
        <!-- action="/stuinfo/upload"-->
        <el-upload
          :show-file-list="false"
          action="/stuinfo/upload"
          accept="*.csv"
          :on-success="onLoad"
        >
          <el-button size="small" type="text">
            <i class="el-icon-upload el-icon--right">批量上传</i>
          </el-button>
        </el-upload>
      </template>
      <template slot="menuRight">
        <el-button icon="el-icon-s-data" circle size="small" @click="dialogVisible = true"></el-button>
        <el-dialog title="Data Analysis" :visible.sync="dialogVisible" width="60%" top="20vh">
          <ve-pie :data="chartData"></ve-pie>
        </el-dialog>
      </template>
    </avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component({})
export default class LFC extends Vue {
  @Prop(String) schoolCode!: string;
  data = {};

  dialogVisible = false;
  page: any = {
    total: 1,
    pageSize: 9, //初始展示多少条目
    pagerCount: 5,
    currentPage: 1,
    pageSizes: [5, 10, 15, 20, 25, 30, 50],
    layout: "total, sizes, prev, pager, next, jumper",
    background: true,
  };

  selected = []; //将选中的行的参数赋值到这边，用于批量删除操作

  dicdata: any = {
    role: [
      { label: "STUDENT", value: "STUDENT" },
      { label: "STAFF", value: "STAFF" },
    ],
    gender: [
      { label: "M", value: "M" },
      { label: "F", value: "F" },
    ],
    class: [
      { label: "BABY", value: "BABY" },
      { label: "MIDDLE", value: "MIDDLE" },
      { label: "TOP", value: "TOP" },
      { label: "DAY CARE", value: "DAY CARE" },
      { label: "P.1", value: "P.1" },
      { label: "P.2", value: "P.2" },
      { label: "P.3", value: "P.3" },
      { label: "P.4", value: "P.4" },
      { label: "P.5", value: "P.5" },
      { label: "P.6", value: "P.6" },
      { label: "P.7", value: "P.7" },
      { label: "S.1", value: "S.1" },
      { label: "S.2", value: "S.2" },
      { label: "S.3", value: "S.3" },
      { label: "S.4", value: "S.4" },
      { label: "S.5", value: "S.5" },
      { label: "S.6", value: "S.6" },
      { label: "STAFF", value: "STAFF" },
    ],
    schoolName: [
      {
        label: "KITEGOMBA C/U PRIMARY SCHOOL",
        value: "KITEGOMBA C/U PRIMARY SCHOOL",
      },
      {
        label: "KIDE NURSERY AND PRIMARY SCHOOL",
        value: "KIDE NURSERY AND PRIMARY SCHOOL",
      },
      { label: "BEST QUALITY SCHOOL", value: "BEST QUALITY SCHOOL" },
      {
        label: "VISION CHRISTIAN JUNIOR SCHOOL",
        value: "VISION CHRISTIAN JUNIOR SCHOOL",
      },
      { label: "HIS GRACE JUNIOR SCHOOL", value: "HIS GRACE JUNIOR SCHOOL" },
      { label: "RAINLAND KINDERGARTEN", value: "RAINLAND KINDERGARTEN" },
      {
        label: "HIDDEN TREASURE NURSERY AND PRIMARY SCHOOL",
        value: "HIDDEN TREASURE NURSERY AND PRIMARY SCHOOL",
      },
      {
        label: "RAYYAN ISLAMIC NURSERY AND PRIMARY SCHOOL",
        value: "RAYYAN ISLAMIC NURSERY AND PRIMARY SCHOOL",
      },
      { label: "NAKIGO SECONDARY SCHOOL", value: "NAKIGO SECONDARY SCHOOL" },
    ],
    createTime: [
      { label: "19T1", value: "19T1" },
      { label: "19T2", value: "19T2" },
      { label: "19T3", value: "19T3" },
    ],
    fileStatus: [
      { label: "INACTIVE", value: "INACTIVE" },
      { label: "ACTIVE", value: "ACTIVE" },
    ],
    fileProgress: [
      { label: "BUDGETING", value: "BUDGETING" },
      { label: "FUND RECEIVED", value: "FUND RECEIVED" },
      { label: "FUND TRANSFERRED", value: "FUND TRANSFERRED" },
    ],
    fileTip: [
      { label: "DROPOUT", value: "DROPOUT" },
      { label: "TRANSFER", value: "TRANSFER" },
      { label: "GRADUATED", value: "GRADUATED" },
      { label: "IRREGULAR ATTENDANCE", value: "IRREGULAR ATTENDANCE" },
      { label: "ERROR", value: "ERROR" },
    ],
    gdRelation: [
      { label: "MOTHER", value: "MOTHER" },
      { label: "FATHER", value: "FATHER" },
      { label: "GRANDMOTHER ", value: "GRANDMOTHER" },
      { label: "GRANDFATHER", value: "GRANDFATHER" },
      { label: "AUNT", value: "AUNT" },
      { label: "UNCLE", value: "UNCLE" },
      { label: "SISTER", value: "SISTER" },
      { label: "BROTHER", value: "BROTHER" },
      { label: "NEIGHBOUR", value: "NEIGHBOUR" },
      { label: "GUARDIAN", value: "GUARDIAN" },
      { label: "STAFF MATE", value: "STAFF MATE" },
      { label: "N/A", value: "N/A" },
    ],
    gdIdType: [
      { label: "ID_CARD", value: "ID_CARD" },
      { label: "PASSPORT", value: "PASSPORT" },
      { label: "DRIVING_LICENSE", value: "DRIVING_LICENSE" },
      { label: "VILLAGE_ID", value: "VILLAGE_ID" },
      { label: "OTHER", value: "OTHER" },
    ],
    schoolNameMap: {
      school_1: "KITEGOMBA C/U PRIMARY SCHOOL",
      school_2: "KIDE NURSERY AND PRIMARY SCHOOL",
      school_3: "BEST QUALITY SCHOOL",
      school_4: "VISION CHRISTIAN JUNIOR SCHOOL",
      school_5: "HIS GRACE JUNIOR SCHOOL",
      school_6: "RAINLAND KINDERGARTEN",
      school_7: "HIDDEN TREASURE NURSERY AND PRIMARY SCHOOL",
      school_8: "RAYYAN ISLAMIC NURSERY AND PRIMARY SCHOOL",
      school_9: "NAKIGO SECONDARY SCHOOL",
    },
  };

  query: any = {
    limit: 2,
    position: 1,
    where: {
      schoolName: this.dicdata.schoolNameMap[this.schoolCode],
    },
  };

  option = {
    // dialogDirection: 'ttb',
    // dialogType:'drawer',
    dialogWidth: "60%",
    dialogTop: "100vh",
    selection: true, //打开勾选功能
    // reserveSelection:true,    //支持跨页勾选
    stripe: true, //条纹样式
    title: "lfcList",
    addBtnText: "Create",
    editBtnText: "Edit",
    delBtnText: "Delete",
    excelBtnText: "Excel",
    excelBtn: true,
    printBtn: true,
    printBtnText: "Print",
    // dateBtn: true,
    searchShow: false,
    menuWidth: 149,
    column: [
      { prop: "id", label: "ID", sortable: true },
      {
        prop: "role",
        label: "ROLE",
        sortable: true,
        filter: true,
        type: "radio",
        dicData: this.dicdata.role,
        width: "85",
      },
      {
        prop: "name",
        label: "NAME",
        sortable: true,
        search: true,
        width: "161",
      },
      {
        prop: "gender",
        label: "GENDER",
        sortable: true,
        filter: true,
        type: "radio",
        dicData: this.dicdata.gender,
        width: "105",
      },
      {
        prop: "class",
        label: "CLASS",
        sortable: true,
        filter: true,
        type: "select",
        dicData: this.dicdata.class,
        width: "95",
      },
      {
        prop: "schoolName",
        label: "SCHOOLNAME",
        sortable: true,
        filter: true,
        type: "select",
        dicData: this.dicdata.schoolName,
        width: "140",
      },
      {
        prop: "gdName",
        label: "Guardian's Name",
        sortable: true,
        width: "161",
      },
      {
        prop: "gdRelation",
        label: "Relationship",
        sortable: true,
        filter: true,
        type: "select",
        dicData: this.dicdata.gdRelation,
        width: "130",
      },
      { prop: "gdContact", label: "Contact", sortable: true, width: "90" },
      { prop: "gdId", label: "Guardian's ID", sortable: true, width: "130" },
      {
        prop: "gdIdType",
        label: "GD's ID Type",
        sortable: true,
        filter: true,
        type: "select",
        dicData: this.dicdata.gdIdType,
        width: "130",
      },
      {
        prop: "createTime",
        label: "建档时间",
        sortable: true,
        filter: true,
        type: "select",
        dicData: this.dicdata.createTime,
        width: "105",
      },
      // {
      //   prop: "createTime",
      //   label: "建档时间",
      //   type: "date",
      //   format: "yyyy-MM-dd",
      //   valueFormat: "yyyy-MM-dd",
      //   sortable: true,
      //   search: true,
      //   searchRange:true,
      // },
      {
        prop: "fileStatus",
        label: "档案状态",
        sortable: true,
        filter: true,
        type: "switch",
        dicData: this.dicdata.fileStatus,
        search: true,
        width: "105",
      },
      {
        prop: "fileProgress",
        label: "档案进度",
        sortable: true,
        filter: true,
        type: "select",
        dicData: this.dicdata.fileProgress,
        width: "105",
      },
      {
        prop: "fileTip",
        label: "档案备注",
        sortable: true,
        filter: true,
        type: "select",
        dicData: this.dicdata.fileTip,
        width: "105",
      },
      {
        prop: "privateKey",
        label: "私钥",
        sortable: true,
        addDisabled: true,
        editDisabled: true,
      },
      {
        prop: "bnbAddress",
        label: "钱包地址",
        sortable: true,
        addDisabled: true,
        editDisabled: true,
        width: "105",
      },
    ],
  };

  chartData= {}

  ///下面是API方法
  async fetch() {
    //从数据库获取数据
    const res = await this.$http.get("stuinfo/fetch", {
      params: {
        query: this.query,
      },
    });
    this.page.total = res.data.total;
    this.data = res.data;
  }

  async fetchStatistic() {
    //从数据库获取数据统计
    const resAnalysis = await this.$http.get("stuinfo/statistic", {
      params: {
        query: this.query,
      },
    });
    this.chartData = resAnalysis.data
  }

  async freshList() {
    //初始化where条件，刷新列表
    this.query.where = {
      schoolName: this.dicdata.schoolNameMap[this.schoolCode],
    };
    this.fetch();
  }

  async create(row, done, loading) {
    await this.$http.post("stuinfo", row);
    this.$message.success("创建成功");
    this.fetch();
    done();
    loading();
  }

  async update(row, index, done, loading) {
    const data = JSON.parse(JSON.stringify(row));
    delete data.$index;
    delete data.$role;
    delete data.$gender;
    delete data.$class;
    delete data.$schoolName;
    delete data.$fileStatus;
    delete data.$fileProgress;
    delete data.$fileTip;
    delete data.$gdRelation;
    delete data.$gdIdType;
    await this.$http.put(`stuinfo/${row._id}`, data);
    this.$message.success("更新成功");
    this.fetch();
    done();
    loading();
  }

  async remove(row) {
    try {
      await this.$confirm("是否确认删除？");
    } catch (e) {
      return;
    }
    await this.$http.delete(`stuinfo/${row._id}`);
    this.$message.success("删除成功");
    this.fetch();
  }

  downLoadTemplate() {
    this.$message.success("下载模板");
    this.fetch();
  }

  async onLoad({ pageSize, currentPage }) {
    this.query.position = currentPage;
    this.query.limit = pageSize;
    this.fetch();
  }

  async selectionChange(val) {
    this.selected = val;
  }

  async print(val) {
    console.log(val);
  }

  async deleteSelected() {
    try {
      await this.$confirm("是否确认删除？");
    } catch (e) {
      return;
    }
    console.log(this.selected);
    const group = this.selected;
    for (var i = 0; i < group.length; i++) {
      var obj = group[i];
      var id = obj["_id"];
      console.log(id);
      await this.$http.delete(`stuinfo/${id}`);
    }
    this.$message.success("删除成功");
    this.fetch();
  }

  async searchChange(val, done) {
    //通过三元运算符判断属性是否为空，为空则不增加正则表达式
    val.name = val.name ? { $regex: val.name } : val.name;
    // val.fileStatus = val.fileStatus
    // val.createTime = val.createTime ? { $gte: val.createTime[0], $lte: val.createTime[1]} : val.createTime
    this.query.where = val;
    this.fetch();
    console.log(val);
    done();
  }

  cellStyle(row) {
    const rowFileStatus = row.row.fileStatus;
    // console.log(row)
    // row.column.headerAlign = "is-center"
    row.column.showOverflowTooltip = true;
    if (row.column.property == "fileStatus") {
      const isActive = rowFileStatus == "INACTIVE" ? "red" : "green";
      return {
        color: isActive,
      };
    }
  }

  created() {
    this.fetch();
    this.fetchStatistic();
  }
}
</script>

<style>
</style>