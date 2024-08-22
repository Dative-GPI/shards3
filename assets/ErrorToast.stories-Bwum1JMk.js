import{d as w,c as i,z as v,A as _,B as t,O as E,I as u,L as s,E as l,G as T}from"./vue.esm-bundler-BATn8cDU.js";import{_ as g}from"./FSIcon-Kk713u84.js";import{_ as S}from"./FSSpan-C8YxV3Vj.js";import{_ as n}from"./FSRow-Gvoj2sTW.js";import{_ as F}from"./FSCol-D9tDKebi.js";import{u as C,C as R}from"./useColors-D4RQatlL.js";import{s as c}from"./css-C5boehQC.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as k}from"./FSButton-D0V1nthY.js";import"./VIcon-BgP_kyAH.js";import"./color-jM82jTdX.js";import"./theme-C-7Kj0lB.js";import"./useSlots-iSUV1mlj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./FSClickable-DYDREYld.js";import"./FSCard-CAgq3XuJ.js";import"./VProgressCircular-Bi_qA2kG.js";const q=[{code:"errors.missingorganisation",default:"Missing organisation header",status:400},{code:"errors.missinglanguage",default:"Missing language header",status:400},{code:"errors.invalidchart",default:"Invalid chart configuration",status:400},{code:"errors.invalidscenario",default:"Invalid scenario configuration",status:400},{code:"errors.passwordtooshort",default:"Password too short",status:400},{code:"errors.passwordtoolong",default:"Password too long",status:400},{code:"errors.passwordlowercase",default:"Lowercase character required",status:400},{code:"errors.passworduppercase",default:"Uppercase character required",status:400},{code:"errors.passwordnumber",default:"Number required",status:400},{code:"errors.passwordspecial",default:"Special character required",status:400},{code:"errors.authenticationfailed",default:"Authentication failed",status:401},{code:"errors.noregistereduser",default:"No registered user",status:401},{code:"errors.badcredentials",default:"Bad credentials",status:401},{code:"errors.unauthorizedorganisation",default:"Unauthorized organisation",status:403},{code:"errors.unauthorizedextension",default:"Unauthorized extension",status:403},{code:"errors.unauthorizeduser",default:"Unauthorized user",status:403},{code:"errors.usernotinorganisation",default:"User not in organisation",status:403},{code:"errors.noadminprivilege",default:"No admin privilege",status:403},{code:"errors.dashboardLocked",default:"Dashboard locked",status:403},{code:"errors.entitynotfound",default:"Entity not found",status:404},{code:"errors.imagenotfound",default:"Image not found",status:404},{code:"errors.tokennotfound",default:"Token not found",status:404},{code:"errors.alreadyregistereduser",default:"Already registered user",status:409},{code:"errors.devicealreadyinorganisation",default:"Device already in organisation",status:409},{code:"errors.devicealreadywatched",default:"Device already watched",status:409},{code:"errors.useralreadyinorganisation",default:"User already in organisation",status:409},{code:"errors.emailfailure",default:"Email failure",status:422},{code:"errors.requirevalidation",default:"Require validation",status:422},{code:"errors.databaseerror",default:"Database error",status:449},{code:"errors.graphsettingserror",default:"Microsoft graph settings error",status:500},{code:"errors.graphusererror",default:"Microsoft graph user error",status:500},{code:"errors.nomappableproperty",default:"No mappable property",status:500},{code:"errors.unvalidextensioncookie",default:"Unvalid extension cookie",status:500},{code:"errors.unexpectederror",default:"Unexpected error",status:500}],z=r=>q.find(e=>e.code===r)||{code:"errors.unexpectederror",default:"Unexpected error",status:500},h=w({name:"FSErrorToast",components:{FSIcon:g,FSSpan:S,FSRow:n,FSCol:F},props:{errorCode:{type:String,required:!0},variant:{type:String,required:!1,default:"full"},borderRadius:{type:[String,Number],required:!1,default:"4px"}},setup(r){const{getColors:e}=C(),o=e(R.Error),d=i(()=>{switch(r.variant){case"standard":return{"--fs-error-toast-border-radius":c(r.borderRadius),"--fs-error-toast-background-color":o.light,"--fs-error-toast-color":o.dark};default:return{"--fs-error-toast-border-radius":c(r.borderRadius),"--fs-error-toast-background-color":o.base,"--fs-error-toast-color":o.light}}});return{error:i(()=>z(r.errorCode)),style:d}}});function N(r,e,o,d,b,U){return v(),_(F,{class:"fs-error-toast",align:"center-center",padding:"18px 32px",gap:"24px",style:E(r.style)},{default:t(()=>[u(r.$slots,"body",{},()=>[s(n,{align:"center-center",wrap:!1},{default:t(()=>[s(g,null,{default:t(()=>[l(" mdi-alert-outline ")]),_:1}),s(S,null,{default:t(()=>[l(T(r.$tr(r.error.code,r.error.default)),1)]),_:1})]),_:1})]),u(r.$slots,"footer")]),_:3},8,["style"])}const y=x(h,[["render",N]]);h.__docgenInfo={displayName:"FSErrorToast",exportName:"default",description:"",tags:{},props:[{name:"errorCode",type:{name:"string"},required:!0},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}}],slots:[{name:"body"},{name:"footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSErrorToast.vue"]};const Y={title:"Foundation/Shared/ErrorToast",component:y,tags:["autodocs"]},a={args:{args:{code1:"errors.missingorganisation",code2:"errors.noadminprivilege",code3:"errors.alreadyregistereduser"}},render:(r,{argTypes:e})=>({components:{FSErrorToast:y,FSRow:n,FSButton:k},props:Object.keys(e),setup(){return{...r}},template:`
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
}`,...(m=(f=a.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const Z=["Variations"];export{a as Variations,Z as __namedExportsOrder,Y as default};
