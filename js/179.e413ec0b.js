"use strict";(self["webpackChunkonline_vue"]=self["webpackChunkonline_vue"]||[]).push([[179],{6583:function(e,a,l){l.d(a,{u:function(){return t}});const t=e=>e<10?"0"+e:""+e},2179:function(e,a,l){l.r(a),l.d(a,{default:function(){return w}});l(7658);var t=l(3396),n=l(7139),s=l(4870),u=l(2483),i=l(2703),r=l(7178),o=l(6583);const d={class:"show-time"};var c;(function(e){e["normal"]="正常出勤",e["absent"]="旷工",e["miss"]="漏打卡",e["late"]="迟到",e["early"]="早退",e["lateAndEarly"]="迟到并早退"})(c||(c={}));var m=(0,t.aZ)({__name:"Sign",setup(e){const a=(0,u.tv)(),l=(0,i.oR)(),m=(0,t.Fl)((()=>l.state.signs.infos)),p=(0,t.Fl)((()=>l.state.users.infos)),f=(0,s.iH)(new Date),w=f.value.getFullYear(),v=(0,s.iH)(f.value.getMonth()+1),y=(0,s.qj)({normal:0,absent:0,miss:0,late:0,early:0,lateAndEarly:0}),b=(0,s.qj)({type:"success",text:"正常"});(0,t.m0)((e=>{const a=m.value.detail[(0,o.u)(v.value)];for(const l in a)switch(a[l]){case c.normal:y.normal++;break;case c.absent:y.absent++;break;case c.miss:y.miss++;break;case c.late:y.late++;break;case c.early:y.early++;break;case c.lateAndEarly:y.lateAndEarly++;break}for(const l in y)"normal"!==l&&0!==y[l]&&(b.type="danger",b.text="异常");e((()=>{b.type="success",b.text="正常";for(const e in y)y[e]=0}))}));const _=()=>{a.push({path:"/exception",query:{month:v.value}})},k=()=>{l.dispatch("signs/putTime",{userid:p.value._id}).then((e=>{0===e.data.errcode&&(l.commit("signs/updateInfos",e.data.infos),r.z8.success("签到成功"))}))},h=()=>{f.value=new Date(`${w}.${v.value}`)},W=e=>e.split("-")[2],g=e=>{const[,a,l]=e.split("-"),t=m.value.time[a][l];if(Array.isArray(t))return t.join("-")};return(e,a)=>{const l=(0,t.up)("el-descriptions-item"),u=(0,t.up)("el-button"),i=(0,t.up)("el-tag"),r=(0,t.up)("el-descriptions"),o=(0,t.up)("el-option"),m=(0,t.up)("el-select"),p=(0,t.up)("el-space"),z=(0,t.up)("el-calendar");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(r,{border:"",direction:"vertical",column:9},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{label:"月份"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(v.value)+"月",1)])),_:1}),((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(c,((e,a)=>(0,t.Wm)(l,{key:a,label:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(y[a]),1)])),_:2},1032,["label"]))),64)),(0,t.Wm)(l,{label:"操作"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{type:"primary",plain:"",size:"small",onClick:_},{default:(0,t.w5)((()=>[(0,t.Uk)("查看详情")])),_:1})])),_:1}),(0,t.Wm)(l,{label:"考勤状态"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{type:b.type,size:"small"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(b.text),1)])),_:1},8,["type"])])),_:1})])),_:1}),(0,t.Wm)(z,{modelValue:f.value,"onUpdate:modelValue":a[1]||(a[1]=e=>f.value=e)},{header:(0,t.w5)((()=>[(0,t.Wm)(u,{type:"primary",onClick:k},{default:(0,t.w5)((()=>[(0,t.Uk)("在线签到")])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,{plain:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)((0,s.SU)(w))+"年",1)])),_:1}),(0,t.Wm)(m,{modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value=e),onChange:h},{default:(0,t.w5)((()=>[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(12,(e=>(0,t.Wm)(o,{key:e,value:e,label:e+"月"},null,8,["value","label"]))),64))])),_:1},8,["modelValue"])])),_:1})])),dateCell:(0,t.w5)((({data:e})=>[(0,t._)("div",null,(0,n.zw)(W(e.day)),1),(0,t._)("div",d,(0,n.zw)(g(e.day)),1)])),_:1},8,["modelValue"])],64)}}}),p=l(89);const f=(0,p.Z)(m,[["__scopeId","data-v-433b5ef0"]]);var w=f}}]);
//# sourceMappingURL=179.e413ec0b.js.map