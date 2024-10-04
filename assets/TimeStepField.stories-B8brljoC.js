import o from"./FSTimeStepField-BBDolEws.js";import{F as n}from"./FSCol-Bj1WIVag.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./FSNumberField-BQp9qXZp.js";import"./FSTextField-KbqtOOXa.js";import"./FSBaseField-CkKSPx2p.js";import"./FSSpan-DpOLTsx1.js";import"./css-DVhR3h-A.js";import"./useSlots-zwOl0abH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-D4JfwQlG.js";import"./useColors-3CjboYRA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DkyKeiX7.js";import"./VSpacer-DLFo12A6.js";import"./color-B0htL_ZM.js";import"./FSButton-CVLEcQTp.js";import"./FSClickable-DB2xZ1ce.js";import"./FSCard-CPhdbHks.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./FSIcon-DUHP8dRZ.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./locale-BGMMnFfJ.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./form-D-VMHmUh.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./FSSelectField-TRkQNw1Z.js";import"./FSDialogMenu-B1YbpCEf.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./dimensions-Cku-Ba4r.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-l9gZ_81L.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Byp9YOIJ.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-D1nUZzQm.js";import"./FSWrapGroup-C-l9ybIX.js";import"./FSCheckbox-DZWstXnV.js";import"./VSelectionControl-Bl6rLftH.js";import"./index-E_I8r0kf.js";import"./FSFadeOut-BVg8JJoP.js";import"./FSLoader-S8abBhij.js";import"./elevation-DH_sKWqU.js";import"./FSRadio-CKmzEXUE.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-DZ_uFpFv.js";import"./VMenu-OPxqXTkz.js";import"./time-COVV56Hd.js";import"./useTranslations-CEnu7PZQ.js";const xt={title:"Foundation/Shared/Input fields/TimeStepField",component:o,tags:["autodocs"]},t={args:{args:{value1:{unit:2,value:0},value2:{unit:4,value:1},value3:{unit:5,value:1}}},render:(p,{argTypes:m})=>({components:{FSTimeStepField:o,FSCol:n},props:Object.keys(m),setup(){return{...p}},template:`
    <FSCol>
      <FSTimeStepField
        label="Time"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Required time, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Uneditable time, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})};var i,e,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      value1: {
        unit: 2,
        value: 0
      },
      value2: {
        unit: 4,
        value: 1
      },
      value3: {
        unit: 5,
        value: 1
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTimeStepField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSTimeStepField
        label="Time"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Required time, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTimeStepField
        label="Uneditable time, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const Ct=["Variations"];export{t as Variations,Ct as __namedExportsOrder,xt as default};
