import{F as l}from"./FSButton-xawrBwn0.js";import{F as i}from"./FSForm-Bg-mYOth.js";import{F as n}from"./FSText-B9kmC_JD.js";import{F as a}from"./FSAutocompleteRole-CFyHChsm.js";import{F as s}from"./FSTextField-BJ0CYXhH.js";import{T as d}from"./rules-BoPQyOiY.js";import"./vue.esm-bundler-CLWyqtrq.js";import"./FSClickable-CX-mXFfM.js";import"./FSCard-CtrctGW7.js";import"./FSCol-B1LPjIXg.js";import"./css-Ca-HPGcF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-B7tdsi71.js";import"./useColors-D61Fe1_L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-bwyTeVCn.js";import"./VProgressCircular-D5Exu0y-.js";import"./color-CiZ0sQz8.js";import"./useRender-BBsw_RbX.js";import"./resizeObserver-pTuJHNwh.js";import"./VIcon-CTYwU69W.js";import"./tag-CMDXkDN7.js";import"./FSSpan-C4Iz3qX9.js";import"./useSlots-YtBg7QOA.js";import"./FSIcon-nvjMvWEC.js";import"./VInput-CwrHorP9.js";import"./locale-DAz5thp-.js";import"./proxiedModel-3ec75IAg.js";import"./index-3KSGAm21.js";import"./transition-D0Fyuczc.js";import"./density-BAQxqMxc.js";import"./forwardRefs-DWGaNmQL.js";import"./FSAutocompleteField-ca2IAtlh.js";import"./FSSearchField-B2afuG5O.js";import"./useTranslations-BiPIEqtB.js";import"./FSDialogMenu-C9Ewv9NN.js";import"./VDialog-CeEdJB8x.js";import"./VOverlay-DzJttMyd.js";import"./anchor-D3k-mERr.js";import"./dimensions-CApMEhqN.js";import"./display-ClZIxUPC.js";import"./lazy-BKgvycCZ.js";import"./router-Bm0MCij7.js";import"./VDefaultsProvider-BaHTfC8g.js";import"./FSRadioGroup-DJ8Wh-Vs.js";import"./FSRadio-YkCJJZtr.js";import"./useRules-D8GiojYJ.js";import"./VSelectionControl-CFm2WUhz.js";import"./index-CgBlQs6Z.js";import"./VLabel-CBBC7WmF.js";import"./FSToggleSet-CWkSWZ4R.js";import"./FSSlideGroup-DqfnNVEm.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Bfe_5BeH.js";import"./group-BZx0j_nI.js";import"./FSWrapGroup-BLZ0_EVh.js";import"./VField-BXxuzAJZ.js";import"./VSpacer-gQABP9En.js";import"./loader-BsCFilcr.js";import"./rounded-BEQ3HMtY.js";import"./FSCheckbox-Bp2dYBN8.js";import"./FSFadeOut-Cm2RoYLR.js";import"./FSLoader-DpxcFPRZ.js";import"./elevation-CB-eCL4u.js";import"./VSelect-DovITVmj.js";import"./VList-COAYh1Wj.js";import"./ssrBoot-pwfi9K1z.js";import"./border-Bs-XyEFQ.js";import"./VImg-CU4XwkhE.js";import"./index-C8D2gGUS.js";import"./VDivider-bKfGyljG.js";import"./VMenu-CBjAwdlw.js";import"./filter-IREZNmJK.js";import"./FSChip-D3Gdm6wa.js";import"./permissionInfos-D2e06JXk.js";import"./base-DgvHU1oF.js";import"./useAppOrganisationId-B5BDd-xv.js";import"./serviceFactory-D_XwB3_y.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-BGJVwV03.js";import"./useAutocomplete-BUBL_XZR.js";import"./useAppTimeZone-CjMaOqrj.js";import"./time-DShBRzYX.js";const Hr={title:"Foundation/Core/Miscellaneous",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{valid:!1,name:"",roleId:null,roleType:0,textRules:d}},render:(m,{argTypes:p})=>({components:{FSForm:i,FSText:n,FSTextField:s,FSAutocompleteRole:a,FSButton:l},props:Object.keys(p),setup(){return{...m}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSForm v-model="args.valid" variant="submit">
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <FSText>
            Form validity: {{ args.valid }}
          </FSText>
          <FSTextField
            label="Name"
            :rules="[args.textRules.required()]"
            :required="true"
            v-model="args.name"
          />
          <FSAutocompleteRole
            label="Role"
            :rules="[args.textRules.required(), args.textRules.phone()]"
            :required="true"
            v-model="args.roleId"
            v-model:type="args.roleType"
          />
          <div style="display: flex; gap: 10px;">
            <FSButton
              type="submit"
              label="Submit form"
            />
          </div>
        </div>
      </FSForm>
    </div>`})};var t,e,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      name: "",
      roleId: null,
      roleType: 0,
      textRules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSText,
      FSTextField,
      FSAutocompleteRole,
      FSButton
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSForm v-model="args.valid" variant="submit">
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <FSText>
            Form validity: {{ args.valid }}
          </FSText>
          <FSTextField
            label="Name"
            :rules="[args.textRules.required()]"
            :required="true"
            v-model="args.name"
          />
          <FSAutocompleteRole
            label="Role"
            :rules="[args.textRules.required(), args.textRules.phone()]"
            :required="true"
            v-model="args.roleId"
            v-model:type="args.roleType"
          />
          <div style="display: flex; gap: 10px;">
            <FSButton
              type="submit"
              label="Submit form"
            />
          </div>
        </div>
      </FSForm>
    </div>\`
  })
}`,...(o=(e=r.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const Jr=["InviteUserOrganisationForm"];export{r as InviteUserOrganisationForm,Jr as __namedExportsOrder,Hr as default};
