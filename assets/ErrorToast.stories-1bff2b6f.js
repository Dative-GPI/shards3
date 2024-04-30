import{j as w,e as i,J as v,K as _,L as t,M as E,R as u,z as s,S as l,U as T}from"./vue.esm-bundler-82a4b45a.js";import{_ as g}from"./FSIcon-97799824.js";import{_ as S}from"./FSSpan-4bf272e8.js";import{_ as n}from"./FSRow-2ccfd21b.js";import{_ as F}from"./FSCol-8326ac62.js";import{u as R,C}from"./useColors-698e8610.js";import{s as c}from"./css-c39c4a6e.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as k}from"./FSButton-c71cf6ce.js";import"./VIcon-cdae09b0.js";import"./color-616211f8.js";import"./theme-380662da.js";import"./useRender-9b5fad83.js";import"./tag-c823df72.js";import"./useSlots-f55d2513.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSClickable-a4cc0438.js";import"./FSCard-ebbda5de.js";import"./VProgressCircular-86578fb4.js";import"./resizeObserver-bcc9c76e.js";const q=[{code:"errors.missingorganisation",default:"Missing organisation header",status:400},{code:"errors.missinglanguage",default:"Missing language header",status:400},{code:"errors.invalidchart",default:"Invalid chart configuration",status:400},{code:"errors.invalidscenario",default:"Invalid scenario configuration",status:400},{code:"errors.passwordtooshort",default:"Password too short",status:400},{code:"errors.passwordtoolong",default:"Password too long",status:400},{code:"errors.passwordlowercase",default:"Lowercase character required",status:400},{code:"errors.passworduppercase",default:"Uppercase character required",status:400},{code:"errors.passwordnumber",default:"Number required",status:400},{code:"errors.passwordspecial",default:"Special character required",status:400},{code:"errors.authenticationfailed",default:"Authentication failed",status:401},{code:"errors.noregistereduser",default:"No registered user",status:401},{code:"errors.badcredentials",default:"Bad credentials",status:401},{code:"errors.unauthorizedorganisation",default:"Unauthorized organisation",status:403},{code:"errors.unauthorizedextension",default:"Unauthorized extension",status:403},{code:"errors.unauthorizeduser",default:"Unauthorized user",status:403},{code:"errors.usernotinorganisation",default:"User not in organisation",status:403},{code:"errors.noadminprivilege",default:"No admin privilege",status:403},{code:"errors.dashboardLocked",default:"Dashboard locked",status:403},{code:"errors.entitynotfound",default:"Entity not found",status:404},{code:"errors.imagenotfound",default:"Image not found",status:404},{code:"errors.tokennotfound",default:"Token not found",status:404},{code:"errors.alreadyregistereduser",default:"Already registered user",status:409},{code:"errors.devicealreadyinorganisation",default:"Device already in organisation",status:409},{code:"errors.devicealreadywatched",default:"Device already watched",status:409},{code:"errors.useralreadyinorganisation",default:"User already in organisation",status:409},{code:"errors.emailfailure",default:"Email failure",status:422},{code:"errors.requirevalidation",default:"Require validation",status:422},{code:"errors.databaseerror",default:"Database error",status:449},{code:"errors.graphsettingserror",default:"Microsoft graph settings error",status:500},{code:"errors.graphusererror",default:"Microsoft graph user error",status:500},{code:"errors.nomappableproperty",default:"No mappable property",status:500},{code:"errors.unvalidextensioncookie",default:"Unvalid extension cookie",status:500},{code:"errors.unexpectederror",default:"Unexpected error",status:500}],U=r=>q.find(e=>e.code===r)||{code:"errors.unexpectederror",default:"Unexpected error",status:500},h=w({name:"FSErrorToast",components:{FSIcon:g,FSSpan:S,FSRow:n,FSCol:F},props:{errorCode:{type:String,required:!0},variant:{type:String,required:!1,default:"full"},borderRadius:{type:[String,Number],required:!1,default:"4px"}},setup(r){const{getColors:e}=R(),o=e(C.Error),d=i(()=>{switch(r.variant){case"standard":return{"--fs-error-toast-border-radius":c(r.borderRadius),"--fs-error-toast-background-color":o.light,"--fs-error-toast-color":o.dark};default:return{"--fs-error-toast-border-radius":c(r.borderRadius),"--fs-error-toast-background-color":o.base,"--fs-error-toast-color":o.light}}});return{error:i(()=>U(r.errorCode)),style:d}}});function z(r,e,o,d,b,N){return v(),_(F,{padding:"18px 32px",class:"fs-error-toast",align:"center-center",gap:"24px",style:E(r.style)},{default:t(()=>[u(r.$slots,"body",{},()=>[s(n,{align:"center-center",wrap:!1},{default:t(()=>[s(g,null,{default:t(()=>[l(" mdi-alert-outline ")]),_:1}),s(S,null,{default:t(()=>[l(T(r.$tr(r.error.code,r.error.default)),1)]),_:1})]),_:1})]),u(r.$slots,"footer")]),_:3},8,["style"])}const y=x(h,[["render",z]]);h.__docgenInfo={displayName:"FSErrorToast",exportName:"default",description:"",tags:{},props:[{name:"errorCode",type:{name:"string"},required:!0},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}}],slots:[{name:"body"},{name:"footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSErrorToast.vue"]};const er={title:"Foundation/Shared/ErrorToast",component:y,tags:["autodocs"]},a={args:{args:{code1:"errors.missingorganisation",code2:"errors.noadminprivilege",code3:"errors.alreadyregistereduser"}},render:(r,{argTypes:e})=>({components:{FSErrorToast:y,FSRow:n,FSButton:k},props:Object.keys(e),setup(){return{...r}},template:`
      <FSRow gap="10px" align="bottom-center">
        <FSErrorToast
          :errorCode="args.code1"
          variant="standard"
        >
        <template #footer>
          <FSRow align="center-center">
            <FSButton
              color="error"
              label="Delete"
              variant="full"
            />
          </FSRow>
        </template>
        </FSErrorToast>
        <FSErrorToast
          :errorCode="args.code2"
        />
        <FSErrorToast
          :errorCode="args.code3"
        />
      </FSRow>`})};var p,f,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    args: {
      code1: "errors.missingorganisation",
      code2: "errors.noadminprivilege",
      code3: "errors.alreadyregistereduser"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSErrorToast,
      FSRow,
      FSButton
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <FSRow gap="10px" align="bottom-center">
        <FSErrorToast
          :errorCode="args.code1"
          variant="standard"
        >
        <template #footer>
          <FSRow align="center-center">
            <FSButton
              color="error"
              label="Delete"
              variant="full"
            />
          </FSRow>
        </template>
        </FSErrorToast>
        <FSErrorToast
          :errorCode="args.code2"
        />
        <FSErrorToast
          :errorCode="args.code3"
        />
      </FSRow>\`
  })
}`,...(m=(f=a.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const or=["Variations"];export{a as Variations,or as __namedExportsOrder,er as default};
