import{j as k,e as i,I as p,J as s,K as t,L as a,x as q,v as l,U as c,V as f,N as g}from"./vue.esm-bundler-b2d5d1a7.js";import{F as C}from"./FSImage-42c24b58.js";import{F as B}from"./FSText-747b43d9.js";import{F as $}from"./FSTile-02e00a03.js";import{_ as y}from"./FSCol-8af42802.js";import{_ as v}from"./FSRow-ad0fe7ea.js";import{u as J}from"./css-9d61559d.js";import{C as z}from"./useColors-1799ca43.js";import{u as A}from"./useTranslations-5ccc1c67.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as j}from"./FSIcon-6a2b7637.js";import"./FSLoader-d736f414.js";import"./color-1b074b3b.js";import"./theme-66179376.js";import"./dimensions-31f51931.js";import"./elevation-b9c046ce.js";import"./locale-602cc07b.js";import"./proxiedModel-92ce7dab.js";import"./useRender-3dd3f3c7.js";import"./base-0de1729e.js";import"./serviceFactory-3393b4e4.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-6dbd7c00.js";import"./VImg-ba624ef1.js";import"./rounded-5a33644a.js";import"./transition-42bdb3ea.js";import"./index-4361ac4f.js";import"./useSlots-0e4d21ee.js";import"./FSClickable-f13d43bf.js";import"./FSCard-c003de31.js";import"./VProgressCircular-b30bdd5e.js";import"./resizeObserver-b444ab71.js";import"./VIcon-18e13c83.js";import"./tag-33f1d162.js";import"./FSCheckbox-cb8c7fe9.js";import"./FSSpan-2ee73edb.js";import"./useRules-999feed4.js";import"./VCheckboxBtn-87c4493b.js";import"./VSelectionControl-27b8b6a4.js";import"./density-aec4d930.js";import"./index-7713af82.js";import"./VLabel-fe75201b.js";import"./VInput-16b8deac.js";import"./index-c0240410.js";import"./index-a0e5e2a3.js";var I=(e=>(e[e.User=0]="User",e[e.ServiceAccount=1]="ServiceAccount",e[e.Extension=2]="Extension",e))(I||{});const V=k({name:"FSUserOrganisationTileUI",components:{FSImage:C,FSText:B,FSTile:$,FSCol:y,FSRow:v},props:{imageId:{type:String,required:!1,default:null},name:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},userType:{type:Number,required:!1,default:I.User},roleIcon:{type:String,required:!1,default:null},roleLabel:{type:String,required:!1,default:null},admin:{type:Boolean,required:!1,default:!1},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{isMobileSized:n}=J(),{$tr:S}=A(),O=i(()=>{switch(e.userType){case I.ServiceAccount:return e.label;default:return e.name}}),T=i(()=>e.admin?"mdi-crown-outline":e.roleIcon),h=i(()=>e.admin?S("ui.user-organisation.admin","Administrator"):e.roleLabel),r=i(()=>n.value?90:100),m=i(()=>{let o=n.value?288:304;return e.imageId&&(o-=r.value),o});return{imageSize:r,infoWidth:m,ColorEnum:z,roleLabel:h,roleIcon:T,title:O}}});function E(e,n,S,O,T,h){const r=p("FSText"),m=p("FSImage"),o=p("FSTile");return s(),t(o,q({editable:e.$props.editable,modelValue:e.$props.modelValue},e.$attrs),{default:a(()=>[l(y,{align:"center-center",width:"fill"},{default:a(()=>[l(v,{align:"center-center",gap:"24px",wrap:!1,height:e.imageSize},{default:a(()=>[l(y,{gap:"4px",width:e.infoWidth},{default:a(()=>[l(r,{font:"text-button",lineClamp:2},{default:a(()=>[c(f(e.title),1)]),_:1}),e.roleLabel?(s(),t(v,{key:0,align:"center-left",gap:"4px"},{default:a(()=>[e.roleIcon?(s(),t(j,{key:0,variant:"light",color:e.ColorEnum.Dark},{default:a(()=>[c(f(e.roleIcon),1)]),_:1},8,["color"])):g("",!0),l(r,{font:"text-overline",variant:"light"},{default:a(()=>[c(f(e.roleLabel),1)]),_:1})]),_:1})):g("",!0)]),_:1},8,["width"]),e.$props.imageId?(s(),t(m,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):g("",!0)]),_:1},8,["height"])]),_:1})]),_:1},16,["editable","modelValue"])}const b=N(V,[["render",E]]);V.__docgenInfo={displayName:"FSUserOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"name",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"userType",type:{name:"UserType"},required:!1,defaultValue:{func:!1,value:"UserType.User"}},{name:"roleIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"admin",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSUserOrganisationTileUI.vue"]};const Be={title:"Foundation/Shared/Tiles/UserOrganisation",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{values:[{id:"1",name:"Jean Martin",userType:0,imageId:"1",admin:!0},{id:"2",label:"Service user",userType:1,roleLabel:"Service administrator",roleIcon:"mdi-cog",imageId:"1",admin:!1},{id:"3",name:"Juano Alphonso Santos de la Cruz de la Balina",userType:0,roleLabel:"User",roleIcon:"mdi-account-outline",imageId:"1",admin:!1}],selected:[!1,!1,!1]}},render:(e,{argTypes:n})=>({components:{FSUserOrganisationTileUI:b},props:Object.keys(n),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :imageId="userOrganisation.imageId"
        :name="userOrganisation.name"
        :label="userOrganisation.label"
        :userType="userOrganisation.userType"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>`})},d={args:{args:{values:[{id:"1",name:"Jean Martin",userType:0,admin:!0},{id:"2",label:"Service user",userType:1,roleLabel:"Service administrator",roleIcon:"mdi-cog",admin:!1},{id:"3",name:"Juano Alphonso Santos de la Cruz de la Balina",userType:0,roleLabel:"User",roleIcon:"mdi-account-outline",admin:!1}],selected:[!1,!1]}},render:(e,{argTypes:n})=>({components:{FSUserOrganisationTileUI:b},props:Object.keys(n),setup(){return{...e}},template:`
  <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
    <FSUserOrganisationTileUI
      v-for="(userOrganisation, index) in args.values"
      :key="index"
      :name="userOrganisation.name"
      :label="userOrganisation.label"
      :userType="userOrganisation.userType"
      :roleIcon="userOrganisation.roleIcon"
      :roleLabel="userOrganisation.roleLabel"
      :admin="userOrganisation.admin"
      v-model="args.selected[index]"
    />
  </div>`})};var w,F,x;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        name: "Jean Martin",
        userType: 0,
        imageId: "1",
        admin: true
      }, {
        id: "2",
        label: "Service user",
        userType: 1,
        roleLabel: "Service administrator",
        roleIcon: "mdi-cog",
        imageId: "1",
        admin: false
      }, {
        id: "3",
        name: "Juano Alphonso Santos de la Cruz de la Balina",
        userType: 0,
        roleLabel: "User",
        roleIcon: "mdi-account-outline",
        imageId: "1",
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
        :label="userOrganisation.label"
        :userType="userOrganisation.userType"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(x=(F=u.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var U,L,_;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        name: "Jean Martin",
        userType: 0,
        admin: true
      }, {
        id: "2",
        label: "Service user",
        userType: 1,
        roleLabel: "Service administrator",
        roleIcon: "mdi-cog",
        admin: false
      }, {
        id: "3",
        name: "Juano Alphonso Santos de la Cruz de la Balina",
        userType: 0,
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
      :label="userOrganisation.label"
      :userType="userOrganisation.userType"
      :roleIcon="userOrganisation.roleIcon"
      :roleLabel="userOrganisation.roleLabel"
      :admin="userOrganisation.admin"
      v-model="args.selected[index]"
    />
  </div>\`
  })
}`,...(_=(L=d.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const $e=["Variations","Imageless"];export{d as Imageless,u as Variations,$e as __namedExportsOrder,Be as default};
