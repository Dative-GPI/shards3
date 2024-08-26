import{F as r}from"./FSButton-dygcJigB.js";import{F as n}from"./FSText-BG5TFIna.js";import{_ as x}from"./FSCol-CeBQ3oDD.js";import{_ as s}from"./FSRow-Dfo2nEmE.js";import{a as i,u as t}from"./useAppTimeZone-DE7FdD8F.js";import"./vue.esm-bundler-DR8xMV81.js";import"./FSClickable-CP6bLZUE.js";import"./FSCard-Kv363PpN.js";import"./useColors-4gNoc1f6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DvfleoEk.js";import"./css-DYbKqpMF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VProgressCircular-CQOkkHxu.js";import"./color-DRqqT5iF.js";import"./VIcon-CB8o8wL4.js";import"./FSSpan-RI5Hh5xF.js";import"./useSlots-O0e9MAUJ.js";import"./FSIcon-Cgoa9X6m.js";import"./useAppLanguageCode-B0gM_GlZ.js";import"./useTranslations-yeF_ketc.js";const B={title:"Foundation/Shared/Global/DateTimes",tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{utcToEpoch:i,timeZone:t().timeZone,setTimeZone:t().setAppTimeZone,epochToShortDateFormat:t().epochToShortDateFormat,epochToLongDateFormat:t().epochToLongDateFormat,epochToShortTimeFormat:t().epochToShortTimeFormat,epochToLongTimeFormat:t().epochToLongTimeFormat,epochToTimeFormat:t().epochToTimeOnlyFormat,todayToEpoch:t().todayToEpoch,todayAtMidnight:()=>{const e=new Date;return e.setHours(0,0,0,0),e.getTime()},today:()=>new Date().getTime(),yesterday:()=>{const e=new Date;return e.setDate(e.getDate()-1),e.getTime()}}},render:(e,{argTypes:S})=>({components:{FSCol:x,FSRow:s,FSButton:r,FSText:n},props:Object.keys(S),setup(){return{...e}},template:`
    <div style="display: flex; flex-wrap: wrap; gap: 20px;  margin-bottom: 40px; align-items: center;">
        <FSCol gap="32px">
            <FSRow>
                <FSButton
                    label="Africa/Abidjan"
                    @click="args.setTimeZone('Africa/Abidjan')"
                />
                <FSButton
                    label="Europe/Paris"
                    @click="args.setTimeZone('Europe/Paris')"
                />
                <FSButton
                    label="America/Guatemala"
                    @click="args.setTimeZone('America/Guatemala')"
                />
                <FSButton
                    label="Asia/Kamchatka"
                    @click="args.setTimeZone('Asia/Kamchatka')"
                />
            </FSRow>
            <FSText> TimeZone: {{ args.timeZone }} </FSText>
            <FSText> todayToEpoch: {{ args.todayToEpoch() }} </FSText>
            <FSCol gap="16px">
                <FSText> domain/tools/utcToEpoch (ignores time zone) </FSText>
                <FSRow :wrap="false">
                    <FSCol width="300px">
                        <FSText> • 2022-01-01T00:00:00Z </FSText>
                        <FSText> • 2022-01-01T00:00:00+01:00 </FSText>
                        <FSText> • 2022-01-01T00:00:00.500+01:00 </FSText>
                        <FSText> • 2022-01-01T00:00:00.999-12:00 </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> {{ args.utcToEpoch('2022-01-01T00:00:00Z') }} </FSText>
                        <FSText> {{ args.utcToEpoch('2022-01-01T00:00:00+01:00') }} </FSText>
                        <FSText> {{ args.utcToEpoch('2022-01-01T00:00:00.500+01:00') }} </FSText>
                        <FSText> {{ args.utcToEpoch('2022-01-01T00:00:00.999-12:00') }} </FSText>
                    </FSCol>
                </FSRow>
            </FSCol>
            <FSCol gap="16px">
                <FSText> services/composables/useAppTimeZone/epochToLongTimeFormat </FSText>
                <FSRow :wrap="false">
                    <FSCol width="300px">
                        <FSText> • 1640995200000 </FSText>
                        <FSText> • 1711929600000 </FSText>
                        <FSText> • {{ args.today() }} </FSText>
                        <FSText> • {{ args.todayAtMidnight() }} </FSText>
                        <FSText> • {{ args.yesterday() }} </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> {{ args.epochToLongTimeFormat(1640995200000) }} </FSText>
                        <FSText> {{ args.epochToLongTimeFormat(1711929600000) }} </FSText>
                        <FSText> {{ args.epochToLongTimeFormat(args.today()) }} </FSText>
                        <FSText> {{ args.epochToLongTimeFormat(args.todayAtMidnight()) }} </FSText>
                        <FSText> {{ args.epochToLongTimeFormat(args.yesterday()) }} </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> European winter time </FSText>
                        <FSText> European summer time </FSText>
                        <FSText> Now </FSText>
                        <FSText> Today at midnight </FSText>
                        <FSText> Yesterday at the same time </FSText>
                    </FSCol>
                </FSRow>
            </FSCol>
            <FSCol gap="16px">
                <FSText> services/composables/useAppTimeZone/epochToLongDateFormat </FSText>
                <FSRow :wrap="false">
                    <FSCol width="300px">
                        <FSText> • 1640995200000 </FSText>
                        <FSText> • 1711929600000 </FSText>
                        <FSText> • {{ args.today() }} </FSText>
                        <FSText> • {{ args.todayAtMidnight() }} </FSText>
                        <FSText> • {{ args.yesterday() }} </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> {{ args.epochToLongDateFormat(1640995200000) }} </FSText>
                        <FSText> {{ args.epochToLongDateFormat(1711929600000) }} </FSText>
                        <FSText> {{ args.epochToLongDateFormat(args.today()) }} </FSText>
                        <FSText> {{ args.epochToLongDateFormat(args.todayAtMidnight()) }} </FSText>
                        <FSText> {{ args.epochToLongDateFormat(args.yesterday()) }} </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> European winter time </FSText>
                        <FSText> European summer time </FSText>
                        <FSText> Now </FSText>
                        <FSText> Today at midnight </FSText>
                        <FSText> Yesterday at the same time </FSText>
                    </FSCol>
                </FSRow>
            </FSCol>
            <FSCol gap="16px">
                <FSText> services/composables/useAppTimeZone/epochToShortDateFormat </FSText>
                <FSRow :wrap="false">
                    <FSCol width="300px">
                        <FSText> • 1640995200000 </FSText>
                        <FSText> • 1711929600000 </FSText>
                        <FSText> • {{ args.today() }} </FSText>
                        <FSText> • {{ args.todayAtMidnight() }} </FSText>
                        <FSText> • {{ args.yesterday() }} </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> {{ args.epochToShortDateFormat(1640995200000) }} </FSText>
                        <FSText> {{ args.epochToShortDateFormat(1711929600000) }} </FSText>
                        <FSText> {{ args.epochToShortDateFormat(args.today()) }} </FSText>
                        <FSText> {{ args.epochToShortDateFormat(args.todayAtMidnight()) }} </FSText>
                        <FSText> {{ args.epochToShortDateFormat(args.yesterday()) }} </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> European winter time </FSText>
                        <FSText> European summer time </FSText>
                        <FSText> Now </FSText>
                        <FSText> Today at midnight </FSText>
                        <FSText> Yesterday at the same time </FSText>
                    </FSCol>
                </FSRow>
            </FSCol>
            <FSCol gap="16px">
                <FSText> services/composables/useAppTimeZone/epochToShortTimeFormat </FSText>
                <FSRow :wrap="false">
                    <FSCol width="300px">
                        <FSText> • 1640995200000 </FSText>
                        <FSText> • 1711929600000 </FSText>
                        <FSText> • {{ args.today() }} </FSText>
                        <FSText> • {{ args.todayAtMidnight() }} </FSText>
                        <FSText> • {{ args.yesterday() }} </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> {{ args.epochToShortTimeFormat(1640995200000) }} </FSText>
                        <FSText> {{ args.epochToShortTimeFormat(1711929600000) }} </FSText>
                        <FSText> {{ args.epochToShortTimeFormat(args.today()) }} </FSText>
                        <FSText> {{ args.epochToShortTimeFormat(args.todayAtMidnight()) }} </FSText>
                        <FSText> {{ args.epochToShortTimeFormat(args.yesterday()) }} </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> European winter time </FSText>
                        <FSText> European summer time </FSText>
                        <FSText> Now </FSText>
                        <FSText> Today at midnight </FSText>
                        <FSText> Yesterday at the same time </FSText>
                    </FSCol>
                </FSRow>
            </FSCol>
        </FSCol>
    </div>`})};var F,T,a;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    args: {
      utcToEpoch,
      timeZone: useAppTimeZone().timeZone,
      setTimeZone: useAppTimeZone().setAppTimeZone,
      epochToShortDateFormat: useAppTimeZone().epochToShortDateFormat,
      epochToLongDateFormat: useAppTimeZone().epochToLongDateFormat,
      epochToShortTimeFormat: useAppTimeZone().epochToShortTimeFormat,
      epochToLongTimeFormat: useAppTimeZone().epochToLongTimeFormat,
      epochToTimeFormat: useAppTimeZone().epochToTimeOnlyFormat,
      todayToEpoch: useAppTimeZone().todayToEpoch,
      todayAtMidnight: () => {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        return date.getTime();
      },
      today: () => {
        return new Date().getTime();
      },
      yesterday: () => {
        const date = new Date();
        date.setDate(date.getDate() - 1);
        return date.getTime();
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSCol,
      FSRow,
      FSButton,
      FSText
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-wrap: wrap; gap: 20px;  margin-bottom: 40px; align-items: center;">
        <FSCol gap="32px">
            <FSRow>
                <FSButton
                    label="Africa/Abidjan"
                    @click="args.setTimeZone('Africa/Abidjan')"
                />
                <FSButton
                    label="Europe/Paris"
                    @click="args.setTimeZone('Europe/Paris')"
                />
                <FSButton
                    label="America/Guatemala"
                    @click="args.setTimeZone('America/Guatemala')"
                />
                <FSButton
                    label="Asia/Kamchatka"
                    @click="args.setTimeZone('Asia/Kamchatka')"
                />
            </FSRow>
            <FSText> TimeZone: {{ args.timeZone }} </FSText>
            <FSText> todayToEpoch: {{ args.todayToEpoch() }} </FSText>
            <FSCol gap="16px">
                <FSText> domain/tools/utcToEpoch (ignores time zone) </FSText>
                <FSRow :wrap="false">
                    <FSCol width="300px">
                        <FSText> • 2022-01-01T00:00:00Z </FSText>
                        <FSText> • 2022-01-01T00:00:00+01:00 </FSText>
                        <FSText> • 2022-01-01T00:00:00.500+01:00 </FSText>
                        <FSText> • 2022-01-01T00:00:00.999-12:00 </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> {{ args.utcToEpoch('2022-01-01T00:00:00Z') }} </FSText>
                        <FSText> {{ args.utcToEpoch('2022-01-01T00:00:00+01:00') }} </FSText>
                        <FSText> {{ args.utcToEpoch('2022-01-01T00:00:00.500+01:00') }} </FSText>
                        <FSText> {{ args.utcToEpoch('2022-01-01T00:00:00.999-12:00') }} </FSText>
                    </FSCol>
                </FSRow>
            </FSCol>
            <FSCol gap="16px">
                <FSText> services/composables/useAppTimeZone/epochToLongTimeFormat </FSText>
                <FSRow :wrap="false">
                    <FSCol width="300px">
                        <FSText> • 1640995200000 </FSText>
                        <FSText> • 1711929600000 </FSText>
                        <FSText> • {{ args.today() }} </FSText>
                        <FSText> • {{ args.todayAtMidnight() }} </FSText>
                        <FSText> • {{ args.yesterday() }} </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> {{ args.epochToLongTimeFormat(1640995200000) }} </FSText>
                        <FSText> {{ args.epochToLongTimeFormat(1711929600000) }} </FSText>
                        <FSText> {{ args.epochToLongTimeFormat(args.today()) }} </FSText>
                        <FSText> {{ args.epochToLongTimeFormat(args.todayAtMidnight()) }} </FSText>
                        <FSText> {{ args.epochToLongTimeFormat(args.yesterday()) }} </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> European winter time </FSText>
                        <FSText> European summer time </FSText>
                        <FSText> Now </FSText>
                        <FSText> Today at midnight </FSText>
                        <FSText> Yesterday at the same time </FSText>
                    </FSCol>
                </FSRow>
            </FSCol>
            <FSCol gap="16px">
                <FSText> services/composables/useAppTimeZone/epochToLongDateFormat </FSText>
                <FSRow :wrap="false">
                    <FSCol width="300px">
                        <FSText> • 1640995200000 </FSText>
                        <FSText> • 1711929600000 </FSText>
                        <FSText> • {{ args.today() }} </FSText>
                        <FSText> • {{ args.todayAtMidnight() }} </FSText>
                        <FSText> • {{ args.yesterday() }} </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> {{ args.epochToLongDateFormat(1640995200000) }} </FSText>
                        <FSText> {{ args.epochToLongDateFormat(1711929600000) }} </FSText>
                        <FSText> {{ args.epochToLongDateFormat(args.today()) }} </FSText>
                        <FSText> {{ args.epochToLongDateFormat(args.todayAtMidnight()) }} </FSText>
                        <FSText> {{ args.epochToLongDateFormat(args.yesterday()) }} </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> European winter time </FSText>
                        <FSText> European summer time </FSText>
                        <FSText> Now </FSText>
                        <FSText> Today at midnight </FSText>
                        <FSText> Yesterday at the same time </FSText>
                    </FSCol>
                </FSRow>
            </FSCol>
            <FSCol gap="16px">
                <FSText> services/composables/useAppTimeZone/epochToShortDateFormat </FSText>
                <FSRow :wrap="false">
                    <FSCol width="300px">
                        <FSText> • 1640995200000 </FSText>
                        <FSText> • 1711929600000 </FSText>
                        <FSText> • {{ args.today() }} </FSText>
                        <FSText> • {{ args.todayAtMidnight() }} </FSText>
                        <FSText> • {{ args.yesterday() }} </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> {{ args.epochToShortDateFormat(1640995200000) }} </FSText>
                        <FSText> {{ args.epochToShortDateFormat(1711929600000) }} </FSText>
                        <FSText> {{ args.epochToShortDateFormat(args.today()) }} </FSText>
                        <FSText> {{ args.epochToShortDateFormat(args.todayAtMidnight()) }} </FSText>
                        <FSText> {{ args.epochToShortDateFormat(args.yesterday()) }} </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> European winter time </FSText>
                        <FSText> European summer time </FSText>
                        <FSText> Now </FSText>
                        <FSText> Today at midnight </FSText>
                        <FSText> Yesterday at the same time </FSText>
                    </FSCol>
                </FSRow>
            </FSCol>
            <FSCol gap="16px">
                <FSText> services/composables/useAppTimeZone/epochToShortTimeFormat </FSText>
                <FSRow :wrap="false">
                    <FSCol width="300px">
                        <FSText> • 1640995200000 </FSText>
                        <FSText> • 1711929600000 </FSText>
                        <FSText> • {{ args.today() }} </FSText>
                        <FSText> • {{ args.todayAtMidnight() }} </FSText>
                        <FSText> • {{ args.yesterday() }} </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> {{ args.epochToShortTimeFormat(1640995200000) }} </FSText>
                        <FSText> {{ args.epochToShortTimeFormat(1711929600000) }} </FSText>
                        <FSText> {{ args.epochToShortTimeFormat(args.today()) }} </FSText>
                        <FSText> {{ args.epochToShortTimeFormat(args.todayAtMidnight()) }} </FSText>
                        <FSText> {{ args.epochToShortTimeFormat(args.yesterday()) }} </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> European winter time </FSText>
                        <FSText> European summer time </FSText>
                        <FSText> Now </FSText>
                        <FSText> Today at midnight </FSText>
                        <FSText> Yesterday at the same time </FSText>
                    </FSCol>
                </FSRow>
            </FSCol>
        </FSCol>
    </div>\`
  })
}`,...(a=(T=o.parameters)==null?void 0:T.docs)==null?void 0:a.source}}};const N=["DefaultTheme"];export{o as DefaultTheme,N as __namedExportsOrder,B as default};
