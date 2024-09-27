import{F as n}from"./FSButton-DMlgbucp.js";import{F as x}from"./FSText-Der-WemT.js";import{F as s}from"./FSCol-TPWSQPHs.js";import{_ as m}from"./FSRow-CmD7j8Pv.js";import{i}from"./datesTools-BRWlXl6j.js";import{u as a}from"./useAppTimeZone-oM-olaqI.js";import{u as t}from"./useDateFormat-C-ZOz_ut.js";import"./vue.esm-bundler-DjjVIdVI.js";import"./FSClickable-DB3UYOUU.js";import"./FSCard-CXVJHnbm.js";import"./useColors-CdvgF10X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-v7reDO7s.js";import"./css-BkQhD285.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VProgressCircular-D-6SFgJ3.js";import"./color-BKGJvBEr.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./FSIcon-BCbpBdVG.js";import"./VIcon-CzaRZDPI.js";import"./useAppLanguageCode-j9rfmXXK.js";import"./useTranslations-f9CWAvtI.js";const O={title:"Foundation/Shared/Global/DateTimes",tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{isoToEpoch:i,timeZone:a().timeZone,setTimeZone:a().setAppTimeZone,epochToShortDateFormat:t().epochToShortDateFormat,epochToLongDateFormat:t().epochToLongDateFormat,epochToShortTimeFormat:t().epochToShortTimeFormat,epochToLongTimeFormat:t().epochToLongTimeFormat,epochToTimeFormat:t().epochToTimeOnlyFormat,todayToEpoch:t().todayToEpoch,todayAtMidnight:()=>{const e=new Date;return e.setHours(0,0,0,0),e.getTime()},today:()=>new Date().getTime(),yesterday:()=>{const e=new Date;return e.setDate(e.getDate()-1),e.getTime()}}},render:(e,{argTypes:r})=>({components:{FSCol:s,FSRow:m,FSButton:n,FSText:x},props:Object.keys(r),setup(){return{...e}},template:`
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
                <FSText> domain/tools/isoToEpoch (ignores time zone) </FSText>
                <FSRow :wrap="false">
                    <FSCol width="300px">
                        <FSText> • 2022-01-01T00:00:00Z </FSText>
                        <FSText> • 2022-01-01T00:00:00+01:00 </FSText>
                        <FSText> • 2022-01-01T00:00:00.500+01:00 </FSText>
                        <FSText> • 2022-01-01T00:00:00.999-12:00 </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> {{ args.isoToEpoch('2022-01-01T00:00:00Z') }} </FSText>
                        <FSText> {{ args.isoToEpoch('2022-01-01T00:00:00+01:00') }} </FSText>
                        <FSText> {{ args.isoToEpoch('2022-01-01T00:00:00.500+01:00') }} </FSText>
                        <FSText> {{ args.isoToEpoch('2022-01-01T00:00:00.999-12:00') }} </FSText>
                    </FSCol>
                </FSRow>
            </FSCol>
            <FSCol gap="16px">
                <FSText> services/composables/useDateFormat/epochToLongTimeFormat </FSText>
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
                <FSText> services/composables/useDateFormat/epochToLongDateFormat </FSText>
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
                <FSText> services/composables/useDateFormat/epochToShortDateFormat </FSText>
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
                <FSText> services/composables/useDateFormat/epochToShortTimeFormat </FSText>
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
    </div>`})};var F,T,S;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    args: {
      isoToEpoch,
      timeZone: useAppTimeZone().timeZone,
      setTimeZone: useAppTimeZone().setAppTimeZone,
      epochToShortDateFormat: useDateFormat().epochToShortDateFormat,
      epochToLongDateFormat: useDateFormat().epochToLongDateFormat,
      epochToShortTimeFormat: useDateFormat().epochToShortTimeFormat,
      epochToLongTimeFormat: useDateFormat().epochToLongTimeFormat,
      epochToTimeFormat: useDateFormat().epochToTimeOnlyFormat,
      todayToEpoch: useDateFormat().todayToEpoch,
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
                <FSText> domain/tools/isoToEpoch (ignores time zone) </FSText>
                <FSRow :wrap="false">
                    <FSCol width="300px">
                        <FSText> • 2022-01-01T00:00:00Z </FSText>
                        <FSText> • 2022-01-01T00:00:00+01:00 </FSText>
                        <FSText> • 2022-01-01T00:00:00.500+01:00 </FSText>
                        <FSText> • 2022-01-01T00:00:00.999-12:00 </FSText>
                    </FSCol>
                    <FSCol width="300px">
                        <FSText> {{ args.isoToEpoch('2022-01-01T00:00:00Z') }} </FSText>
                        <FSText> {{ args.isoToEpoch('2022-01-01T00:00:00+01:00') }} </FSText>
                        <FSText> {{ args.isoToEpoch('2022-01-01T00:00:00.500+01:00') }} </FSText>
                        <FSText> {{ args.isoToEpoch('2022-01-01T00:00:00.999-12:00') }} </FSText>
                    </FSCol>
                </FSRow>
            </FSCol>
            <FSCol gap="16px">
                <FSText> services/composables/useDateFormat/epochToLongTimeFormat </FSText>
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
                <FSText> services/composables/useDateFormat/epochToLongDateFormat </FSText>
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
                <FSText> services/composables/useDateFormat/epochToShortDateFormat </FSText>
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
                <FSText> services/composables/useDateFormat/epochToShortTimeFormat </FSText>
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
}`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const _=["DefaultTheme"];export{o as DefaultTheme,_ as __namedExportsOrder,O as default};
