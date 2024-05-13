import{j as k,e as i,I as p,J as s,K as t,L as a,B as q,A as l,U as c,V as f,N as g}from"./vue.esm-bundler-41eda46b.js";import{F as C}from"./FSImage-563135ef.js";import{F as B}from"./FSText-f60941a6.js";import{F as $}from"./FSTile-d711885d.js";import{_ as y}from"./FSCol-282cc158.js";import{_ as v}from"./FSRow-1508d56d.js";import{u as A}from"./css-35e8563f.js";import{C as J}from"./useColors-baaa98f5.js";import{u as z}from"./useTranslations-3bd97805.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as j}from"./FSIcon-713345eb.js";import"./FSLoader-5fe6d2d9.js";import"./color-45753032.js";import"./theme-be1bd2db.js";import"./dimensions-5b54e342.js";import"./elevation-878f110a.js";import"./locale-84078765.js";import"./proxiedModel-03601969.js";import"./useRender-dd35ddd1.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-00c2f0ee.js";import"./VImg-63ad34dc.js";import"./rounded-3de0fd3d.js";import"./transition-695cd20f.js";import"./index-5d4def8c.js";import"./useSlots-e8ea556e.js";import"./FSClickable-416c7a7e.js";import"./FSCard-8067a4d4.js";import"./VProgressCircular-58a86136.js";import"./resizeObserver-d58b88df.js";import"./VIcon-8cf7ec9e.js";import"./tag-64b4b0e7.js";import"./FSCheckbox-90b24572.js";import"./FSSpan-8af5ddcc.js";import"./useRules-d33c1ab7.js";import"./VSelectionControl-42a6862f.js";import"./density-b42ba92f.js";import"./index-4ba2035c.js";import"./VLabel-19fa20ee.js";import"./VInput-4d87c32a.js";import"./index-dc0570e5.js";import"./index-a0e5e2a3.js";var I=(e=>(e[e.User=0]="User",e[e.ServiceAccount=1]="ServiceAccount",e[e.Extension=2]="Extension",e))(I||{});const V=k({name:"FSUserOrganisationTileUI",components:{FSImage:C,FSText:B,FSTile:$,FSCol:y,FSRow:v},props:{imageId:{type:String,required:!1,default:null},name:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},userType:{type:Number,required:!1,default:I.User},roleIcon:{type:String,required:!1,default:null},roleLabel:{type:String,required:!1,default:null},admin:{type:Boolean,required:!1,default:!1},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{isMobileSized:n}=A(),{$tr:S}=z(),O=i(()=>{switch(e.userType){case I.ServiceAccount:return e.label;default:return e.name}}),T=i(()=>e.admin?"mdi-crown-outline":e.roleIcon),h=i(()=>e.admin?S("ui.user-organisation.admin","Administrator"):e.roleLabel),r=i(()=>n.value?90:100),m=i(()=>{let o=n.value?288:304;return e.imageId&&(o-=r.value),o});return{imageSize:r,infoWidth:m,ColorEnum:J,roleLabel:h,roleIcon:T,title:O}}});function E(e,n,S,O,T,h){const r=p("FSText"),m=p("FSImage"),o=p("FSTile");return s(),t(o,q({editable:e.$props.editable,modelValue:e.$props.modelValue},e.$attrs),{default:a(()=>[l(y,{align:"center-center",width:"fill"},{default:a(()=>[l(v,{align:"center-center",gap:"24px",wrap:!1,height:e.imageSize},{default:a(()=>[l(y,{gap:"4px",width:e.infoWidth},{default:a(()=>[l(r,{font:"text-button",lineClamp:2},{default:a(()=>[c(f(e.title),1)]),_:1}),e.roleLabel?(s(),t(v,{key:0,align:"center-left",gap:"4px"},{default:a(()=>[e.roleIcon?(s(),t(j,{key:0,variant:"light",color:e.ColorEnum.Dark},{default:a(()=>[c(f(e.roleIcon),1)]),_:1},8,["color"])):g("",!0),l(r,{font:"text-overline",variant:"light"},{default:a(()=>[c(f(e.roleLabel),1)]),_:1})]),_:1})):g("",!0)]),_:1},8,["width"]),e.$props.imageId?(s(),t(m,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):g("",!0)]),_:1},8,["height"])]),_:1})]),_:1},16,["editable","modelValue"])}const b=N(V,[["render",E]]);V.__docgenInfo={displayName:"FSUserOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"name",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"userType",type:{name:"UserType"},required:!1,defaultValue:{func:!1,value:"UserType.User"}},{name:"roleIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"admin",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSUserOrganisationTileUI.vue"]};const Ce={title:"Foundation/Shared/Tiles/UserOrganisation",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{values:[{id:"1",name:"Jean Martin",userType:0,imageId:"1",admin:!0},{id:"2",label:"Service user",userType:1,roleLabel:"Service administrator",roleIcon:"mdi-cog",imageId:"1",admin:!1},{id:"3",name:"Juano Alphonso Santos de la Cruz de la Balina",userType:0,roleLabel:"User",roleIcon:"mdi-account-outline",imageId:"1",admin:!1}],selected:[!1,!1,!1]}},render:(e,{argTypes:n})=>({components:{FSUserOrganisationTileUI:b},props:Object.keys(n),setup(){return{...e}},template:`
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
}`,...(_=(L=d.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const Be=["Variations","Imageless"];export{d as Imageless,u as Variations,Be as __namedExportsOrder,Ce as default};
