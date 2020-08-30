<template>
  <div>
    <template>
      <!-- action="http://localhost/stuinfo/upload" -->
      <!-- action="/stuinfo/upload"-->
      <el-upload
        :show-file-list="false"
        action="/stuinfo/upload"
        accept="*.csv"
        :on-success="finish"
      >
        <el-button size="small" type="text">
          <i class="el-icon-upload el-icon--right">UPLOAD SCHOOL DATA</i>
        </el-button>
      </el-upload>
    </template>
    <el-row class="el_row">
      <el-col :span="6" v-for="item in schoolList" :key="item" :offset="1">
        <el-card>
          <img
            src="/img/dbsa_1.jpg"
            class="image"
          />
          <div style="padding: 14px;">
            <span>{{item}}</span>
            <div class="bottom clearfix">
              <el-link
                type="primary"
                :href="'#/projects/lfc/'+schoolNameMap[item]+'/SchoolDetail'"
                target="_self"
              >Go Detail</el-link>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class SchoolBrief extends Vue {
  data = {};
  query: any = {
    limit: 2,
    position: 1,
    where: {},
  };
  schoolNameMap = {
    "KITEGOMBA C/U PRIMARY SCHOOL": "school_1",
    "KIDE NURSERY AND PRIMARY SCHOOL": "school_2",
    "BEST QUALITY SCHOOL": "school_3",
    "VISION CHRISTIAN JUNIOR SCHOOL": "school_4",
    "HIS GRACE JUNIOR SCHOOL": "school_5",
    "RAINLAND KINDERGARTEN": "school_6",
    "HIDDEN TREASURE NURSERY AND PRIMARY SCHOOL": "school_7",
    "RAYYAN ISLAMIC NURSERY AND PRIMARY SCHOOL": "school_8",
    "NAKIGO SECONDARY SCHOOL": "school_9",
  };
  schoolList = [];
  finish() {
    this.$message("Success");
    this.fetchStatistic();
  }

  async fetchStatistic() {
    //从数据库获取数据统计
    const resAnalysis = await this.$http.get("stuinfo/schoolCard", {
      params: {
        query: this.query,
      },
    });
    this.schoolList = resAnalysis.data;
  }

  created() {
    this.fetchStatistic();
  }
}
</script>

<style>
.el_row {
  width: 800px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>