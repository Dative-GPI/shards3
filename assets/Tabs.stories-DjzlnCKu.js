import{_ as b}from"./FSSlideGroup-CntZC7f2.js";import{_ as F}from"./FSFadeOut-CszUv8uk.js";import{F as d}from"./FSButton-cXGosxtu.js";import{F as r}from"./FSWindow-RglzuROT.js";import{F as S}from"./FSText-4yVUx1mI.js";import{F as l,a as u}from"./FSTab-B9diENcB.js";import{F as T}from"./FSCol-DD5MeAoT.js";import{_ as s}from"./FSRow-BjeBkMPV.js";import"./vue.esm-bundler-l-siv0w9.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-F5m9he5w.js";import"./useColors-Bs2u1_6J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useBreakpoints-mbnqo5a1.js";import"./useSlots-C_N_WAus.js";import"./css-C_oz6kYw.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./proxiedModel-KpugNjnZ.js";import"./index-B089V-om.js";import"./color-De-77ojK.js";import"./display-BWzbFTnS.js";import"./VIcon-D6ql3n-m.js";import"./locale-CTwwbPAi.js";import"./resizeObserver-CjMDZ25n.js";import"./FSClickable-B8_y_vmt.js";import"./FSCard-Cocsqd0c.js";import"./VProgressCircular-RI9KLr8_.js";import"./FSSpan-DwE651wI.js";import"./FSIcon-DfqW6nqQ.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./density-Dt_pQxP_.js";import"./elevation-BZDXH0CP.js";import"./rounded-uHrmshEX.js";import"./dimensions-9QoL2_-9.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./router-CIHGWUSM.js";import"./index-Cr304eD2.js";import"./VDefaultsProvider-CfqLszOw.js";import"./lazy-DuBjUwFb.js";import"./ssrBoot-DD96sY1N.js";import"./transition-AZsQzdUZ.js";import"./vue-router-C4bv40Tb.js";import"./forwardRefs-DWGaNmQL.js";const rt={title:"Foundation/Shared/Tabs",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{tab1:0,tab2:0,tab3:2,tab4:3,tab5:0,tab6:0,tab7:0,tab8:0,tab9:0}},render:(o,{argTypes:i})=>({components:{FSTabs:l,FSTab:u,FSText:S,FSWindow:r,FSCol:T,FSRow:s,FSFadeOut:F,FSSlideGroup:b,FSButton:d},props:Object.keys(i),setup(){return{...o}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Tabs in FadeOut </FSText>
        <FSFadeOut height="200px">
          <FSCol>
            <FSTabs v-model:tab="args.tab1" color="success">
              <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
              <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
            </FSTabs>
            <FSWindow :modelValue="args.tab1" width="100%">
              <FSCol :value="0">
                <FSText v-for="(arg, index) in 50">
                  Line {{ index }}
                </FSText>
              </FSCol>
              <FSCol :value="1">
                <FSText v-for="(arg, index) in 5">
                  Line {{ index }}
                </FSText>
              </FSCol>
            </FSWindow>
          </FSCol>
        </FSFadeOut>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <div style="width: 60%">
          <FSText> Fade outs in tabs </FSText>
          <FSTabs v-model:tab="args.tab2" color="success">
            <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
            <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
          </FSTabs>
          <FSWindow v-model="args.tab2" width="100%" >
            <FSFadeOut :value="0" height="200px">
              <FSCol>
                <FSText v-for="(arg, index) in 50">
                  Line {{ index }}
                </FSText>
              </FSCol>
            </FSFadeOut>
            <FSFadeOut :value="1" height="400px">
              <FSFadeOut height="200px" style="min-height: 200px" :scrollOutside="false">
                <FSCol>
                  <FSText v-for="(arg, index) in 80">
                    Inside {{ index }}
                  </FSText>
                </FSCol>
              </FSFadeOut>
              <FSCol>
                <FSText v-for="(arg, index) in 80">
                  Outside {{ index }}
                </FSText>
              </FSCol>
            </FSFadeOut>
          </FSWindow>
        </div>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Slide groups in tabs </FSText>
        <FSTabs v-model:tab="args.tab3" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        </FSTabs>
        <FSWindow v-model="args.tab3" width="100%">
          <FSCol :value="0">
            <FSSlideGroup :value="0">
              <FSButton label="Button 1" />
              <FSButton label="Button 2" />
              <FSButton label="Button 3" />
              <FSButton label="Button 4" />
              <FSButton label="Button 5" />
              <FSButton label="Button 7" />
              <FSButton label="Button 8" />
              <FSButton label="Button 9" />
              <FSButton label="Button 10" />
              <FSButton label="Button 11" />
              <FSButton label="Button 12" />
              <FSButton label="Button 13" />
              <FSButton label="Button 14" />
            </FSSlideGroup>
          </FSCol>
          <FSSlideGroup :value="1">
            <FSButton label="Button 1" />
            <FSButton label="Button 2" />
            <FSButton label="Button 3" />
            <FSButton label="Button 4" />
            <FSButton label="Button 5" />
            <FSButton label="Button 7" />
            <FSButton label="Button 8" />
            <FSButton label="Button 9" />
            <FSButton label="Button 10" />
            <FSButton label="Button 11" />
            <FSButton label="Button 12" />
            <FSButton label="Button 13" />
            <FSButton label="Button 14" />
            <FSButton label="Button 15" />
            <FSButton label="Button 16" />
            <FSButton label="Button 17" />
            <FSButton label="Button 18" />
            <FSButton label="Button 19" />
          </FSSlideGroup>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />

        <FSText> Primary color, labels only </FSText>
        <FSTabs v-model:tab="args.tab4">
          <FSTab label="Tab 1" :value="0" />
          <FSTab label="Tab 2" :value="1" />
          <FSTab label="Tab 3" :value="2" />
          <FSTab label="Tab 4" :value="3" />
          <FSTab label="Tab 5" :value="4" />
        </FSTabs>
        <FSWindow v-model="args.tab4">
          <FSCol v-for="arg in 5" :key="arg">
            <FSCol>
              <FSText font="text-h1">
                Tab {{ arg }}
              </FSText>
              <FSText font="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </FSText>
            </FSCol>
          </FSCol>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Warning color, labels & tags </FSText>
        <FSTabs v-model:tab="args.tab5" color="warning">
          <FSTab label="Tab 1" :value="1" tag="1" />
          <FSTab label="Tab 2" :value="2" tag="2" />
          <FSTab label="Tab 3" :value="3" tag="3" />
          <FSTab label="Tab 4" :value="4" tag="4" />
          <FSTab label="Tab 5" :value="5" tag="5" />
        </FSTabs>
        <FSWindow v-model="args.tab5">
          <FSText v-for="arg in 5" :value="arg">
            Tab {{ arg }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Error color, prepend icons & large labels </FSText>
        <FSTabs v-model:tab="args.tab6" color="error">
          <FSTab label="Tab with a really really long name (and an icon) 1" :value="0" prependIcon="mdi-numeric-1-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 2" :value="1" prependIcon="mdi-numeric-2-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 3" :value="2" prependIcon="mdi-numeric-3-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 4" :value="3" prependIcon="mdi-numeric-4-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 5" :value="4" prependIcon="mdi-numeric-5-circle-outline" />
        </FSTabs>
        <FSWindow v-model="args.tab6">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Success color, prepend icons, labels, tags, append icons </FSText>
        <FSTabs v-model:tab="args.tab7" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
          <FSTab :value="2" label="Tab 3" prependIcon="mdi-numeric-3-circle-outline" tag="3" />
          <FSTab :value="3" label="Tab 4" prependIcon="mdi-numeric-4-circle-outline" appendIcon="mdi-dice-4-outline" />
          <FSTab :value="4" label="Tab 5" prependIcon="mdi-numeric-5-circle-outline" appendIcon="mdi-dice-5-outline" tag="5" />
        </FSTabs>
        <FSWindow v-model="args.tab7">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Buttons after tabs </FSText>
        <FSTabs v-model:tab="args.tab8">
          <FSTab :value="0" label="Tab 1" />
          <FSTab :value="1" label="Tab 2" />
          <FSTab :value="2" label="Tab 3" />
          <FSTab :value="3" label="Tab 4, this one has a really long name. Like it is really long you know." />
          <FSTab :value="4" label="Tab 5. Actually, this one is too, come to think of it" />
          <FSRow padding="0 8px" :wrap="false">
            <FSButton label="Button 1" />
            <FSButton label="Button 2" />
            <FSButton label="Button 3" />
          </FSRow>
        </FSTabs>
        <FSWindow v-model="args.tab8">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Buttons outside tabs </FSText>
        <FSRow padding="0 8px" :wrap="false">
          <FSTabs v-model:tab="args.tab9">
            <FSTab :value="0" label="Tab 1" />
            <FSTab :value="1" label="Tab 2" />
            <FSTab :value="2" label="Tab 3" />
            <FSTab :value="3" label="Tab 4, this one has a really long name. Like it is really long you know." />
            <FSTab :value="4" label="Tab 5. Actually, this one is too, come to think of it" />
          </FSTabs>
          <FSButton label="Button 1" />
          <FSButton label="Button 2" />
          <FSButton label="Button 3" />
        </FSRow>
        <FSWindow v-model="args.tab9">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
      </div>
    `})};var e,a,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    args: {
      tab1: 0,
      tab2: 0,
      tab3: 2,
      tab4: 3,
      tab5: 0,
      tab6: 0,
      tab7: 0,
      tab8: 0,
      tab9: 0
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTabs,
      FSTab,
      FSText,
      FSWindow,
      FSCol,
      FSRow,
      FSFadeOut,
      FSSlideGroup,
      FSButton
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Tabs in FadeOut </FSText>
        <FSFadeOut height="200px">
          <FSCol>
            <FSTabs v-model:tab="args.tab1" color="success">
              <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
              <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
            </FSTabs>
            <FSWindow :modelValue="args.tab1" width="100%">
              <FSCol :value="0">
                <FSText v-for="(arg, index) in 50">
                  Line {{ index }}
                </FSText>
              </FSCol>
              <FSCol :value="1">
                <FSText v-for="(arg, index) in 5">
                  Line {{ index }}
                </FSText>
              </FSCol>
            </FSWindow>
          </FSCol>
        </FSFadeOut>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <div style="width: 60%">
          <FSText> Fade outs in tabs </FSText>
          <FSTabs v-model:tab="args.tab2" color="success">
            <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
            <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
          </FSTabs>
          <FSWindow v-model="args.tab2" width="100%" >
            <FSFadeOut :value="0" height="200px">
              <FSCol>
                <FSText v-for="(arg, index) in 50">
                  Line {{ index }}
                </FSText>
              </FSCol>
            </FSFadeOut>
            <FSFadeOut :value="1" height="400px">
              <FSFadeOut height="200px" style="min-height: 200px" :scrollOutside="false">
                <FSCol>
                  <FSText v-for="(arg, index) in 80">
                    Inside {{ index }}
                  </FSText>
                </FSCol>
              </FSFadeOut>
              <FSCol>
                <FSText v-for="(arg, index) in 80">
                  Outside {{ index }}
                </FSText>
              </FSCol>
            </FSFadeOut>
          </FSWindow>
        </div>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Slide groups in tabs </FSText>
        <FSTabs v-model:tab="args.tab3" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        </FSTabs>
        <FSWindow v-model="args.tab3" width="100%">
          <FSCol :value="0">
            <FSSlideGroup :value="0">
              <FSButton label="Button 1" />
              <FSButton label="Button 2" />
              <FSButton label="Button 3" />
              <FSButton label="Button 4" />
              <FSButton label="Button 5" />
              <FSButton label="Button 7" />
              <FSButton label="Button 8" />
              <FSButton label="Button 9" />
              <FSButton label="Button 10" />
              <FSButton label="Button 11" />
              <FSButton label="Button 12" />
              <FSButton label="Button 13" />
              <FSButton label="Button 14" />
            </FSSlideGroup>
          </FSCol>
          <FSSlideGroup :value="1">
            <FSButton label="Button 1" />
            <FSButton label="Button 2" />
            <FSButton label="Button 3" />
            <FSButton label="Button 4" />
            <FSButton label="Button 5" />
            <FSButton label="Button 7" />
            <FSButton label="Button 8" />
            <FSButton label="Button 9" />
            <FSButton label="Button 10" />
            <FSButton label="Button 11" />
            <FSButton label="Button 12" />
            <FSButton label="Button 13" />
            <FSButton label="Button 14" />
            <FSButton label="Button 15" />
            <FSButton label="Button 16" />
            <FSButton label="Button 17" />
            <FSButton label="Button 18" />
            <FSButton label="Button 19" />
          </FSSlideGroup>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />

        <FSText> Primary color, labels only </FSText>
        <FSTabs v-model:tab="args.tab4">
          <FSTab label="Tab 1" :value="0" />
          <FSTab label="Tab 2" :value="1" />
          <FSTab label="Tab 3" :value="2" />
          <FSTab label="Tab 4" :value="3" />
          <FSTab label="Tab 5" :value="4" />
        </FSTabs>
        <FSWindow v-model="args.tab4">
          <FSCol v-for="arg in 5" :key="arg">
            <FSCol>
              <FSText font="text-h1">
                Tab {{ arg }}
              </FSText>
              <FSText font="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </FSText>
            </FSCol>
          </FSCol>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Warning color, labels & tags </FSText>
        <FSTabs v-model:tab="args.tab5" color="warning">
          <FSTab label="Tab 1" :value="1" tag="1" />
          <FSTab label="Tab 2" :value="2" tag="2" />
          <FSTab label="Tab 3" :value="3" tag="3" />
          <FSTab label="Tab 4" :value="4" tag="4" />
          <FSTab label="Tab 5" :value="5" tag="5" />
        </FSTabs>
        <FSWindow v-model="args.tab5">
          <FSText v-for="arg in 5" :value="arg">
            Tab {{ arg }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Error color, prepend icons & large labels </FSText>
        <FSTabs v-model:tab="args.tab6" color="error">
          <FSTab label="Tab with a really really long name (and an icon) 1" :value="0" prependIcon="mdi-numeric-1-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 2" :value="1" prependIcon="mdi-numeric-2-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 3" :value="2" prependIcon="mdi-numeric-3-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 4" :value="3" prependIcon="mdi-numeric-4-circle-outline" />
          <FSTab label="Tab with a really really long name (and an icon) 5" :value="4" prependIcon="mdi-numeric-5-circle-outline" />
        </FSTabs>
        <FSWindow v-model="args.tab6">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Success color, prepend icons, labels, tags, append icons </FSText>
        <FSTabs v-model:tab="args.tab7" color="success">
          <FSTab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
          <FSTab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
          <FSTab :value="2" label="Tab 3" prependIcon="mdi-numeric-3-circle-outline" tag="3" />
          <FSTab :value="3" label="Tab 4" prependIcon="mdi-numeric-4-circle-outline" appendIcon="mdi-dice-4-outline" />
          <FSTab :value="4" label="Tab 5" prependIcon="mdi-numeric-5-circle-outline" appendIcon="mdi-dice-5-outline" tag="5" />
        </FSTabs>
        <FSWindow v-model="args.tab7">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Buttons after tabs </FSText>
        <FSTabs v-model:tab="args.tab8">
          <FSTab :value="0" label="Tab 1" />
          <FSTab :value="1" label="Tab 2" />
          <FSTab :value="2" label="Tab 3" />
          <FSTab :value="3" label="Tab 4, this one has a really long name. Like it is really long you know." />
          <FSTab :value="4" label="Tab 5. Actually, this one is too, come to think of it" />
          <FSRow padding="0 8px" :wrap="false">
            <FSButton label="Button 1" />
            <FSButton label="Button 2" />
            <FSButton label="Button 3" />
          </FSRow>
        </FSTabs>
        <FSWindow v-model="args.tab8">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSText> Buttons outside tabs </FSText>
        <FSRow padding="0 8px" :wrap="false">
          <FSTabs v-model:tab="args.tab9">
            <FSTab :value="0" label="Tab 1" />
            <FSTab :value="1" label="Tab 2" />
            <FSTab :value="2" label="Tab 3" />
            <FSTab :value="3" label="Tab 4, this one has a really long name. Like it is really long you know." />
            <FSTab :value="4" label="Tab 5. Actually, this one is too, come to think of it" />
          </FSTabs>
          <FSButton label="Button 1" />
          <FSButton label="Button 2" />
          <FSButton label="Button 3" />
        </FSRow>
        <FSWindow v-model="args.tab9">
          <FSText v-for="(arg, index) in 5">
            Tab {{ index }}
          </FSText>
        </FSWindow>
      </div>
    \`
  })
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const St=["Variations"];export{t as Variations,St as __namedExportsOrder,rt as default};
