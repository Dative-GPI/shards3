import{d as q,c as o,y as b,z as i,A as l,B as n,m as k,L as r,E as m,G as p,D as f}from"./vue.esm-bundler-gWFTcvUr.js";import{F as C}from"./FSImage-BrJH4Ha7.js";import{_ as c}from"./FSSpan-DK2fprHX.js";import{F as V}from"./FSTile-DZ8i-4S3.js";import{_ as g}from"./FSCol-DX423FHf.js";import{_ as I}from"./FSRow-Bpa2jjpJ.js";import{u as $}from"./css-Bc8dJONt.js";import{C as J}from"./useColors-4hVwr1YC.js";import{u as B}from"./useTranslations-DebMVrXy.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as M}from"./FSIcon-C7-l9IT-.js";import"./FSImageUI-BrSJNuQ9.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CZGZ62iP.js";import"./FSLoader-DufGLro4.js";import"./color-CI1OEbFE.js";import"./theme-DA9ermhM.js";import"./dimensions-CmIA1DmV.js";import"./elevation-B3TY2UXi.js";import"./locale-C1ZNn_CS.js";import"./VImg-CHF0S8ll.js";import"./rounded-DlJ8CYNz.js";import"./transition-14-CCvbq.js";import"./index-BHt-17iJ.js";import"./useSlots-qbJuQIJ1.js";import"./FSClickable-aki8YuqU.js";import"./FSCard-B-jXuIJy.js";import"./VProgressCircular-DqlO5PEF.js";import"./VIcon-BiBYr0XY.js";import"./FSCheckbox-FFHve3-B.js";import"./useRules-CMc02QlE.js";import"./VSelectionControl-CyZYkafj.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./index-BTMLtsqI.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./index-C2ELxjkU.js";import"./index-3zl-tJp_.js";const T=q({name:"FSUserOrganisationTileUI",components:{FSImage:C,FSSpan:c,FSTile:V,FSCol:g,FSRow:I},props:{imageId:{type:String,required:!1,default:null},name:{type:String,required:!1,default:null},roleIcon:{type:String,required:!1,default:null},roleLabel:{type:String,required:!1,default:null},admin:{type:Boolean,required:!1,default:!1},width:{type:[Array,String,Number],required:!1,default:()=>[352,336]},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{isMobileSized:a}=$(),{$tr:y}=B(),h=o(()=>e.admin?"mdi-crown-outline":e.roleIcon),S=o(()=>e.admin?y("ui.user-organisation.admin","Administrator"):e.roleLabel),d=o(()=>e.imageId?a.value?90:100:0),u=o(()=>e.imageId?`calc(100% - ${d.value}px - 24px)`:"100%");return{ColorEnum:J,imageSize:d,infoWidth:u,roleLabel:S,roleIcon:h}}});function A(e,a,y,h,S,d){const u=b("FSImage"),_=b("FSTile");return i(),l(_,k({activeColor:e.ColorEnum.Primary,editable:e.$props.editable,width:e.$props.width,modelValue:e.$props.modelValue},e.$attrs),{default:n(()=>[r(g,{align:"center-center",width:"fill"},{default:n(()=>[r(I,{align:"center-center",gap:"24px",wrap:!1,height:e.imageSize},{default:n(()=>[r(g,{gap:"4px",width:e.infoWidth},{default:n(()=>[r(c,{font:"text-button",lineClamp:2},{default:n(()=>[m(p(e.$props.name),1)]),_:1}),e.roleLabel?(i(),l(I,{key:0,align:"center-left",gap:"4px",wrap:!1},{default:n(()=>[e.roleIcon?(i(),l(M,{key:0,variant:"soft",color:e.ColorEnum.Dark},{default:n(()=>[m(p(e.roleIcon),1)]),_:1},8,["color"])):f("",!0),r(c,{font:"text-overline",variant:"soft"},{default:n(()=>[m(p(e.roleLabel),1)]),_:1})]),_:1})):f("",!0)]),_:1},8,["width"]),e.$props.imageId?(i(),l(u,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):f("",!0)]),_:1},8,["height"])]),_:1})]),_:1},16,["activeColor","editable","width","modelValue"])}const v=z(T,[["render",A]]);T.__docgenInfo={displayName:"FSUserOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"name",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"admin",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [352, 336]"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSUserOrganisationTileUI.vue"]};const Te={title:"Foundation/Shared/Tiles/UserOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{values:[{id:"1",name:"Jean-Michel Quelqu'un",admin:!0},{id:"2",name:"Jean-Michel Personne",roleLabel:"Red shirt",roleIcon:"mdi-cog",admin:!1},{id:"3",name:"Juano Alphonso Santos de la Cruz de la Balina",roleLabel:"User",roleIcon:"mdi-account-outline",admin:!1}],selected:[!1,!1,!1]}},render:(e,{argTypes:a})=>({components:{FSUserOrganisationTileUI:v},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :imageId="userOrganisation.imageId"
        :name="userOrganisation.name"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>`})},t={args:{args:{values:[{id:"1",name:"Jean-Michel Quelqu'un",admin:!0},{id:"2",name:"Jean-Michel Personne",roleLabel:"Red shirt",roleIcon:"mdi-cog",admin:!1},{id:"3",name:"Juano Alphonso Santos de la Cruz de la Balina",roleLabel:"User",roleIcon:"mdi-account-outline",admin:!1}],selected:[!1,!1]}},render:(e,{argTypes:a})=>({components:{FSUserOrganisationTileUI:v},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :name="userOrganisation.name"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>`})};var O,w,F;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        name: "Jean-Michel Quelqu'un",
        admin: true
      }, {
        id: "2",
        name: "Jean-Michel Personne",
        roleLabel: "Red shirt",
        roleIcon: "mdi-cog",
        admin: false
      }, {
        id: "3",
        name: "Juano Alphonso Santos de la Cruz de la Balina",
        roleLabel: "User",
        roleIcon: "mdi-account-outline",
        admin: false
      }],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSUserOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :imageId="userOrganisation.imageId"
        :name="userOrganisation.name"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(F=(w=s.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var U,L,x;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        name: "Jean-Michel Quelqu'un",
        admin: true
      }, {
        id: "2",
        name: "Jean-Michel Personne",
        roleLabel: "Red shirt",
        roleIcon: "mdi-cog",
        admin: false
      }, {
        id: "3",
        name: "Juano Alphonso Santos de la Cruz de la Balina",
        roleLabel: "User",
        roleIcon: "mdi-account-outline",
        admin: false
      }],
      selected: [false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSUserOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :name="userOrganisation.name"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(x=(L=t.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};const _e=["Variations","Imageless"];export{t as Imageless,s as Variations,_e as __namedExportsOrder,Te as default};
