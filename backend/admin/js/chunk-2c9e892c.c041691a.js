(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c9e892c"],{1993:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("avue-crud",{staticStyle:{height:"100vh"},attrs:{data:e.data.result,option:e.option,page:e.page,"cell-style":e.cellStyle},on:{"row-save":e.create,"row-update":e.update,"row-del":e.remove,"update:page":function(t){e.page=t},"on-load":e.onLoad,"refresh-change":e.freshList,"selection-change":e.selectionChange,"search-change":e.searchChange,"row-dblclick":e.handleRowDBLClick}},[r("template",{slot:"menuLeft"},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.downLoadTemplate}},[e._v("下载模板")])],1),r("template",{slot:"tip"},[r("el-button",{attrs:{type:"text",size:"small"},on:{click:e.deleteSelected}},[r("i",{staticClass:"el-icon-delete el-icon--right"},[e._v("删除选中")])])],1),r("el-upload",{attrs:{"show-file-list":!1,action:"/data/upload",accept:"*.csv","on-success":e.onLoad}},[r("el-button",{attrs:{size:"small",type:"text"}},[r("i",{staticClass:"el-icon-upload el-icon--right"},[e._v("Excel上传")])])],1),r("template",{slot:"menuRight"},[r("el-button",{attrs:{icon:"el-icon-s-data",circle:"",size:"small"},on:{click:function(t){e.dialogVisible=!0}}}),r("el-dialog",{attrs:{title:"项目问题占比",visible:e.dialogVisible,width:"60%",top:"20vh"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("ve-pie",{attrs:{data:e.chartData}})],1),r("el-dialog",{attrs:{title:"问题处理详情",visible:e.dialogVisible2,width:"60%",top:"20vh"},on:{"update:visible":function(t){e.dialogVisible2=t}}},[e._v(e._s(e.dialogContent2))])],1)],2)],1)},a=[],i=(r("b0c0"),r("96cf"),r("1da1")),o=r("d4ec"),c=r("bee2"),s=r("262e"),u=r("2caf"),l=r("9ab4"),h=r("60a3"),p=function(e){Object(s["a"])(r,e);var t=Object(u["a"])(r);function r(){var e;return Object(o["a"])(this,r),e=t.apply(this,arguments),e.data={},e.dialogVisible=!1,e.dialogVisible2=!1,e.dialogContent2="",e.page={total:1,pageSize:10,pagerCount:5,currentPage:1,pageSizes:[10,15,20,25,30,50],layout:"total, sizes, prev, pager, next, jumper",background:!0},e.selected=[],e.dicdata={projectName:[{label:"乌干达安全网",value:"updf"},{label:"乌干达警察局无线",value:"upf_wireless"}],productName:[{label:"流量对接",value:"trans"},{label:"OWLS4.1",value:"owls4.1"},{label:"OWLS4.1需求",value:"owls4.1_requirement"},{label:"安全网无线",value:"wireless_updf"},{label:"警察局无线",value:"wireless_upf"}],issuePriority:[{label:"低",value:"low"},{label:"中",value:"mid"},{label:"高",value:"high"}],issueStatus:[{label:"关闭",value:"closed"},{label:"解决中",value:"solving"},{label:"滞后",value:"delay"}],issueType:[{label:"工程",value:"gongchen"},{label:"物流",value:"wuliu"}],issueDepartment:[{label:"客户服务部",value:"gjkf"},{label:"业务产品线",value:"yewu"},{label:"无线产品线",value:"wuxian"}]},e.query={limit:2,position:1,where:{}},e.option={dialogWidth:"60%",dialogTop:"100vh",selection:!0,stripe:!0,title:"问题列表",excelBtn:!0,searchShow:!1,menuWidth:149,column:[{prop:"projectName",label:"项目名称",type:"select",sortable:!0,filter:!0,dicData:e.dicdata.projectName},{prop:"productName",label:"产品名称",type:"select",sortable:!0,filter:!0,dicData:e.dicdata.productName},{prop:"issueBrief",label:"问题描述",type:"textarea",width:"200"},{prop:"issuePriority",label:"优先级",sortable:!0,filter:!0,type:"select",dicData:e.dicdata.issuePriority},{prop:"issueStatus",label:"状态",sortable:!0,filter:!0,type:"select",dicData:e.dicdata.issueStatus,search:!0,searchRange:!0},{prop:"issueType",label:"分类",sortable:!0,filter:!0,type:"select",dicData:e.dicdata.issueType},{prop:"issueCreateTime",label:"提出时间",type:"date",format:"yyyy-MM-dd",valueFormat:"yyyy-MM-dd",sortable:!0,search:!0,searchRange:!0},{prop:"issuePlanTime",label:"目标时间",type:"date",format:"yyyy-MM-dd",valueFormat:"yyyy-MM-dd",sortable:!0},{prop:"issueCloseTime",label:"关闭时间",type:"date",format:"yyyy-MM-dd",valueFormat:"yyyy-MM-dd",sortable:!0},{prop:"issueDetail",label:"处理过程",type:"textarea",width:"190"},{prop:"issueSlution",label:"解决方案",width:"190"},{prop:"issueManager",label:"责任人"},{prop:"issueDepartment",label:"责任部门",type:"select",dicData:e.dicdata.issueDepartment}]},e.chartData={},e}return Object(c["a"])(r,[{key:"fetch",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("data/fetch",{params:{query:this.query}});case 2:t=e.sent,this.page.total=t.data.total,this.data=t.data;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"fetchStatistic",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("data/statistic",{params:{query:this.query}});case 2:t=e.sent,this.chartData=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"freshList",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.fetch();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"create",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("data",t);case 2:this.$message.success("创建成功"),this.fetch(),r(),n();case 6:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,n,a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=JSON.parse(JSON.stringify(t)),delete i.$index,delete i.$projectName,delete i.$productName,delete i.$issuePriority,delete i.$issueStatus,delete i.$issueType,delete i.$issueDepartment,e.next=10,this.$http.put("data/".concat(t._id),i);case 10:this.$message.success("更新成功"),this.fetch(),n(),a();case 14:case"end":return e.stop()}}),e,this)})));function t(t,r,n,a){return e.apply(this,arguments)}return t}()},{key:"remove",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$confirm("是否确认删除？");case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e["catch"](0),e.abrupt("return");case 8:return e.next=10,this.$http.delete("data/".concat(t._id));case 10:this.$message.success("删除成功"),this.fetch();case 12:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"downLoadTemplate",value:function(){this.$message.success("下载模板")}},{key:"onLoad",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.pageSize,n=t.currentPage,this.query.position=n,this.query.limit=r,this.fetch();case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"selectionChange",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.selected=t;case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteSelected",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$confirm("是否确认删除？");case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e["catch"](0),e.abrupt("return");case 8:console.log(this.selected),t=this.selected,r=0;case 11:if(!(r<t.length)){e.next=20;break}return n=t[r],a=n["_id"],console.log(a),e.next=17,this.$http.delete("data/".concat(a));case 17:r++,e.next=11;break;case 20:this.$message.success("删除成功"),this.fetch();case 22:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"searchChange",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.name=t.name?{$regex:t.name}:t.name,this.query.where=t,this.fetch(),console.log(t),r();case 5:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"handleRowDBLClick",value:function(e){this.dialogVisible2=!0,this.dialogContent2=e.issueDetail,console.log(e)}},{key:"cellStyle",value:function(e){var t=e.row.fileStatus;if(e.column.showOverflowTooltip=!0,"fileStatus"==e.column.property){var r="INACTIVE"==t?"red":"green";return{color:r}}}},{key:"created",value:function(){this.fetch(),this.fetchStatistic()}}]),r}(h["c"]);Object(l["a"])([Object(h["b"])(String)],p.prototype,"schoolCode",void 0),p=Object(l["a"])([Object(h["a"])({})],p);var f=p,d=f,y=r("2877"),v=Object(y["a"])(d,n,a,!1,null,null,null);t["default"]=v.exports},"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("d3b7");function n(e,t,r,n,a,i,o){try{var c=e[i](o),s=c.value}catch(u){return void r(u)}c.done?t(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var o=e.apply(t,r);function c(e){n(o,a,i,c,s,"next",e)}function s(e){n(o,a,i,c,s,"throw",e)}c(void 0)}))}}},"96cf":function(e,t){!function(t){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"===typeof e,l=t.regeneratorRuntime;if(l)u&&(e.exports=l);else{l=t.regeneratorRuntime=u?e.exports:{},l.wrap=w;var h="suspendedStart",p="suspendedYield",f="executing",d="completed",y={},v={};v[o]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(D([])));m&&m!==n&&a.call(m,o)&&(v=m);var b=j.prototype=k.prototype=Object.create(v);L.prototype=b.constructor=j,j.constructor=L,j[s]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===L||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(b),e},l.awrap=function(e){return{__await:e}},O(S.prototype),S.prototype[c]=function(){return this},l.AsyncIterator=S,l.async=function(e,t,r,n){var a=new S(w(e,t,r,n));return l.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(b),b[s]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=D,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach($),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,a){return c.type="throw",c.arg=e,t.next=n,a&&(t.method="next",t.arg=r),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;$(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:D(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(e,t,r,n){var a=t&&t.prototype instanceof k?t:k,i=Object.create(a.prototype),o=new N(n||[]);return i._invoke=_(e,r,o),i}function x(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}function k(){}function L(){}function j(){}function O(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function S(e){function t(r,n,i,o){var c=x(e[r],e,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,i,o)}),(function(e){t("throw",e,i,o)})):Promise.resolve(u).then((function(e){s.value=e,i(s)}),o)}o(c.arg)}var r;function n(e,n){function a(){return new Promise((function(r,a){t(e,n,r,a)}))}return r=r?r.then(a,a):a()}this._invoke=n}function _(e,t,r){var n=h;return function(a,i){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw i;return P()}r.method=a,r.arg=i;while(1){var o=r.delegate;if(o){var c=R(o,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=x(e,t,r);if("normal"===s.type){if(n=r.done?d:p,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}function R(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,R(e,t),"throw"===t.method))return y;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var a=x(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,y;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,y):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function D(e){if(e){var t=e[o];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){while(++n<e.length)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}return{next:P}}function P(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},b0c0:function(e,t,r){var n=r("83ab"),a=r("9bf2").f,i=Function.prototype,o=i.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!(s in i)&&a(i,s,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(e){return""}}})},bee2:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return a}))}}]);