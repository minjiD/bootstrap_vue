"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[49],{874:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var i=t(252);const o={id:"wrap"};function d(n,e,t,d,a,l){const u=(0,i.up)("JoinEdit");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(u,{id:n.id,name:n.name,pw:n.pw,onChild:l.parents},null,8,["id","name","pw","onChild"])])}var a=t(963);const l=n=>((0,i.dD)("data-v-0ad37d05"),n=n(),(0,i.Cn)(),n),u={id:"join"},r=l((()=>(0,i._)("p",null,"회원가입",-1))),p=l((()=>(0,i._)("label",{for:"id"},"ID: ",-1))),s=l((()=>(0,i._)("br",null,null,-1))),m=l((()=>(0,i._)("label",{for:""},"Name: ",-1))),h=l((()=>(0,i._)("br",null,null,-1))),c=l((()=>(0,i._)("label",{for:"pw"},"PW: ",-1))),w=l((()=>(0,i._)("br",null,null,-1)));function j(n,e,t,o,d,l){return(0,i.wg)(),(0,i.iD)("div",u,[r,p,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=n=>d.join.id=n)},null,512),[[a.nr,d.join.id]]),s,m,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=n=>d.join.name=n)},null,512),[[a.nr,d.join.name]]),h,c,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=n=>d.join.pw=n)},null,512),[[a.nr,d.join.pw]]),w,(0,i._)("button",{onClick:e[3]||(e[3]=(...n)=>l.joinUser&&l.joinUser(...n))},"회원가입")])}var _={props:["id","name","pw"],components:{},data(){return{join:{}}},setup(){},created(){this.join.id=this.id,this.join.name=this.name,this.join.pw=this.pw},mounted(){},unmounted(){},methods:{joinUser(){this.$emit("child",this.join)}}},f=t(744);const b=(0,f.Z)(_,[["render",j],["__scopeId","data-v-0ad37d05"]]);var v=b,y={components:{JoinEdit:v},data(){return{exampleData:""}},setup(){},created(){},mounted(){},unmounted(){},methods:{parents(n){this.id=n.id,this.name=n.name,this.pw=n.pw,alert("ID: "+this.id+", Name: "+this.name)}}};const C=(0,f.Z)(y,[["render",d]]);var D=C}}]);
//# sourceMappingURL=join.e1ac6656.js.map