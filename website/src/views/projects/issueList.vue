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
        <!-- 业务上线使用/data/upload -->
        <!-- action="http://localhost/data/upload" -->
        <!-- action="/data/upload"-->
        <el-upload
          :show-file-list="false"
          action="/data/upload"
          accept="*.csv"
          :on-success="onLoad"
        >
          <el-button size="small" type="text">
            <i class="el-icon-upload el-icon--right">Excel上传</i>
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
export default class issueList extends Vue {
  @Prop(String) schoolCode!: string;
  data = {};

  dialogVisible = false;
  page: any = {
    total: 1,
    pageSize: 10, //初始展示多少条目
    pagerCount: 5,
    currentPage: 1,
    pageSizes: [10, 15, 20, 25, 30, 50],
    layout: "total, sizes, prev, pager, next, jumper",
    background: true,
  };

  selected = []; //将选中的行的参数赋值到这边，用于批量删除操作

  dicdata: any = {
    projectName: [
      { label: "乌干达安全网", value: "updf" },
      { label: "乌干达警察局无线", value: "upf_wireless" },
    ],
    productName: [
      { label: "流量对接", value: "trans" },
      { label: "OWLS4.1", value: "owls4.1" },
      { label: "OWLS4.1需求", value: "owls4.1_requirement" },
      { label: "安全网无线", value: "wireless_updf" },
      { label: "警察局无线", value: "wireless_upf" },
    ],
    issuePriority: [
      { label: "低", value: "low" },
      { label: "中", value: "mid" },
      { label: "高", value: "high" },
    ],
    issueStatus: [
      { label: "关闭", value: "closed" },
      { label: "解决中", value: "solving" },
      { label: "滞后", value: "delay" },
    ],
    issueType: [
      { label: "工程", value: "gongchen" },
      { label: "物流", value: "wuliu" },
    ],
    issueDepartment: [
      { label: "客户服务部", value: "gjkf" },
      { label: "业务产品线", value: "yewu" },
      { label: "无线产品线", value: "wuxian" },
    ],
  };

  query: any = {
    limit: 2,
    position: 1,
    where: {},
  };

  option = {
    dialogWidth: "60%",
    dialogTop: "100vh",
    selection: true, //打开勾选功能
    stripe: true, //条纹样式
    title: "问题列表",
    excelBtn: true,
    searchShow: false,
    menuWidth: 149,
    column: [
      {
        prop: "projectName",
        label: "项目名称",
        type: "select",
        sortable: true,
        filter: true,
        dicData: this.dicdata.projectName,
      },
      {
        prop: "productName",
        label: "产品名称",
        type: "select",
        sortable: true,
        filter: true,
        dicData: this.dicdata.productName,
      },
      {
        prop: "issueBrief",
        label: "问题描述",
        width: "200",
      },
      {
        prop: "issuePriority",
        label: "优先级",
        sortable: true,
        filter: true,
        type: "select",
        dicData: this.dicdata.issuePriority,
      },
      {
        prop: "issueStatus",
        label: "状态",
        sortable: true,
        filter: true,
        type: "select",
        dicData: this.dicdata.issueStatus,
        search: true,
        searchRange: true,
      },
      {
        prop: "issueType",
        label: "分类",
        sortable: true,
        filter: true,
        type: "select",
        dicData: this.dicdata.issueType,
      },
      {
        prop: "issueCreateTime",
        label: "提出时间",
        type: "date",
        format: "yyyy-MM-dd",
        valueFormat: "yyyy-MM-dd",
        sortable: true,
        search: true,
        searchRange: true,
      },
      {
        prop: "issuePlanTime",
        label: "目标时间",
        type: "date",
        format: "yyyy-MM-dd",
        valueFormat: "yyyy-MM-dd",
        sortable: true,
      },
      {
        prop: "issueCloseTime",
        label: "关闭时间",
        type: "date",
        format: "yyyy-MM-dd",
        valueFormat: "yyyy-MM-dd",
        sortable: true,
      },
      { prop: "issueSlution", label: "解决方案", width: "190" },
      { prop: "issueManager", label: "责任人" },
      {
        prop: "issueDepartment",
        label: "责任部门",
        type: "select",
        dicData: this.dicdata.issueDepartment,
      },
    ],
  };

  chartData = {};

  ///下面是API方法
  async fetch() {
    //从数据库获取数据
    const res = await this.$http.get("data/fetch", {
      params: {
        query: this.query,
      },
    });
    this.page.total = res.data.total;
    this.data = res.data;
  }

  async fetchStatistic() {
    //从数据库获取数据统计
    const resAnalysis = await this.$http.get("data/statistic", {
      params: {
        query: this.query,
      },
    });
    this.chartData = resAnalysis.data;
  }

  async freshList() {
    //初始化where条件，刷新列表
    // this.query.where = {
    //   schoolName: this.dicdata.schoolNameMap[this.schoolCode],
    // };
    this.fetch();
  }

  async create(row, done, loading) {
    await this.$http.post("data", row);
    this.$message.success("创建成功");
    this.fetch();
    done();
    loading();
  }

  async update(row, index, done, loading) {
    const data = JSON.parse(JSON.stringify(row));
    delete data.$index;
    delete data.$projectName;
    delete data.$productName;
    delete data.$issuePriority;
    delete data.$issueStatus;
    delete data.$issueType;
    delete data.$issueDepartment;
    await this.$http.put(`data/${row._id}`, data);
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
    await this.$http.delete(`data/${row._id}`);
    this.$message.success("删除成功");
    this.fetch();
  }

  downLoadTemplate() {
    this.$message.success("下载模板");
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
      await this.$http.delete(`data/${id}`);
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