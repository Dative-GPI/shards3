import { format, subDays, addDays, addMilliseconds, parse } from "date-fns";
import type { Locale } from "date-fns/locale";
import { enUS, enGB, fr, it, es, de } from "date-fns/locale";
import { computed, ref } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import type { TimeZoneInfos } from "@dative-gpi/foundation-shared-domain/models";
import { isoTimeFormat } from "@dative-gpi/foundation-shared-domain/tools";

import { useAppLanguageCode } from "./useAppLanguageCode";

const timeZone = ref<TimeZoneInfos | null>(null);

export const useAppTimeZone = () => {
  const setAppTimeZone = (payload: TimeZoneInfos) => {
    timeZone.value = payload;
  };

  const getOffsetNumber = (offsetString: string, hours: boolean = false): number => {
    let offset = 0;
    switch (offsetString.toLowerCase().replaceAll(" ", "")) {
      case "utc-11:00:00": offset = -11; break;
      case "utc-10:00:00": offset = -10; break;
      case "utc-09:00:00": offset = -9; break;
      case "utc-08:00:00": offset = -8; break;
      case "utc-07:00:00": offset = -7; break;
      case "utc-06:00:00": offset = -6; break;
      case "utc-05:00:00": offset = -5; break;
      case "utc-04:00:00": offset = -4; break;
      case "utc-03:00:00": offset = -3; break;
      case "utc-02:00:00": offset = -2; break;
      case "utc-01:00:00": offset = -1; break;
      case "utc+01:00:00": offset = +1; break;
      case "utc+02:00:00": offset = +2; break;
      case "utc+03:00:00": offset = +3; break;
      case "utc+04:00:00": offset = +4; break;
      case "utc+05:00:00": offset = +5; break;
      case "utc+06:00:00": offset = +6; break;
      case "utc+07:00:00": offset = +7; break;
      case "utc+08:00:00": offset = +8; break;
      case "utc+09:00:00": offset = +9; break;
      case "utc+10:00:00": offset = +10; break;
      case "utc+11:00:00": offset = +11; break;
      case "utc+12:00:00": offset = +12; break;
      case "utc+13:00:00": offset = +13; break;
      case "utc+14:00:00": offset = +14; break;
    }
    return hours ? offset : offset * 60 * 60 * 1000;
  };

  const userOffset = (): number => {
    return getOffsetNumber(getUserOffset());
  };

  const machineOffset = (): number => {
    return getOffsetNumber(getMachineOffset());
  };

  const getUserOffset = (): string => {
    return timeZone?.value?.offset ?? "UTC +00:00:00";
  };

  const getUserOffsetMillis = (): number => {
    const offset = timeZone?.value?.offset.slice(3) ?? "";
    const matchData = offset.match(/([+-])(\d+)(?::(\d+))?/);
    if (matchData) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, sign, hour, minute] = matchData;
      return parseInt(sign + "1") * ((hour ? parseInt(hour) : 0) * 60 + (minute ? parseInt(minute) : 0)) * 60 * 1000;
    }
    return 0;
  };

  const getMachineOffset = (): string => {
    const timeZoneName = Intl.DateTimeFormat("ia", {
      timeZoneName: "short",
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }).formatToParts().find((i) => i.type === "timeZoneName")?.value ?? "";

    const offset = timeZoneName.slice(3);
    if (!offset) {
      return "UTC +00:00:00";
    }
    const matchData = offset.match(/([+-])(\d+)(?::(\d+))?/);
    if (matchData) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, sign, hour, minute] = matchData;
      return `UTC ${sign}${hour.padStart(2, "0")}:${(minute ?? "").padStart(2, "0")}:00`;
    }
    return "UTC +00:00:00";
  };

  const getMachineOffsetMillis = (): number => {
    const timeZoneName = Intl.DateTimeFormat("ia", {
      timeZoneName: "short",
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }).formatToParts().find((i) => i.type === "timeZoneName")?.value ?? "";

    const offset = timeZoneName.slice(3);
    if (!offset) {
      return 0;
    }
    const matchData = offset.match(/([+-])(\d+)(?::(\d+))?/);
    if (matchData) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, sign, hour, minute] = matchData;
      return parseInt(sign + "1") * ((hour ? parseInt(hour) : 0) * 60 + (minute ? parseInt(minute) : 0)) * 60 * 1000;
    }
    return 0;
  };

  const todayToEpoch = (resetHours: boolean): number => {
    const today = new Date();
    if (resetHours) {
      today.setHours(0, 0, 0, 0);
    }
    return today.getTime() + getMachineOffsetMillis() - getUserOffsetMillis();
  };

  const pickerToEpoch = (value: Date | null | undefined): number => {
    if (value != null) {
      // FSCalendar is always in machine time zone, so we need to convert it to user time zone
      return value.getTime() + getMachineOffsetMillis() - getUserOffsetMillis();
    }
    return 0;
  };

  const epochToPicker = (value: number | null | undefined): Date => {
    const date = new Date(0);
    if (value != null) {
      // Epoch is always without time zone, so we need to convert it to user time zone
      date.setUTCMilliseconds(value - getMachineOffsetMillis() + getUserOffsetMillis());
    }
    return date;
  };

  const epochToPickerHeader = (value: number): { d: number, m: number, y: number } => {
    const date = new Date(0);
    if (value != null) {
      date.setUTCMilliseconds(value - getMachineOffsetMillis() + getUserOffsetMillis());
    }
    return { d: date.getDate(), m: date.getMonth(), y: date.getFullYear() };
  };

  const epochToLongDateFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(0);
    date.setUTCMilliseconds(value - getMachineOffsetMillis() + getUserOffsetMillis());
    return format(date, "EEEE dd LLLL yyyy", { locale: getLocale() });
  };

  const epochToLongTimeFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(0);
    date.setUTCMilliseconds(value - getMachineOffsetMillis() + getUserOffsetMillis());
    return format(date, overrideFormat(date, "EEEE dd LLLL yyyy HH:mm"), { locale: getLocale() })
  };

  const epochToShortDateFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(0);
    date.setUTCMilliseconds(value - getMachineOffsetMillis() + getUserOffsetMillis());
    switch (getLocale()) {
      case enUS: {
        return format(date, "MM/dd/yyyy", { locale: getLocale() });
      }
      default: {
        return format(date, "dd/MM/yyyy", { locale: getLocale() });
      }
    }
  };

  const epochToTimeOnlyFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(0);
    date.setUTCMilliseconds(value - getMachineOffsetMillis() + getUserOffsetMillis());
    return format(date, "HH:mm:ss", { locale: getLocale() });
  };

  const epochToShortTimeFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(0);
    date.setUTCMilliseconds(value - getMachineOffsetMillis() + getUserOffsetMillis());
    switch (getLocale()) {
      case enUS: {
        return format(date, "MM/dd/yyyy HH:mm", { locale: getLocale() });
      }
      default: {
        return format(date, "dd/MM/yyyy HH:mm", { locale: getLocale() });
      }
    }
  };

  const todayTimeFormat = (): string => {
    return `'${useTranslationsProvider().$tr("ui.time-zone.today-at", "Today at").replace(/'/g, "''")}' HH:mm:ss`;
  };

  const yesterdayTimeFormat = (): string => {
    return `'${useTranslationsProvider().$tr("ui.time-zone.yesterday-at", "Yesterday at").replace(/'/g, "''")}' HH:mm:ss`;
  };

  const overrideFormat = (date: Date, askedFormat: string): string => {
    const now = new Date();
    if (date.toDateString() === now.toDateString()) {
      return todayTimeFormat();
    }
    if (date.toDateString() === subDays(now, 1).toDateString()) {
      return yesterdayTimeFormat();
    }
    return askedFormat;
  };

  const getLocale = (): Locale => {
    switch (useAppLanguageCode().languageCode.value) {
      case "fr-FR": return fr;
      case "es-ES": return es;
      case "it-IT": return it;
      case "en-GB": return enGB;
      case "de-DE": return de;
      default: return enUS;
    }
  };

  const parseForPicker = (value: string, dateFormat: string = isoTimeFormat()): number | null => {
    let date = parse(value!, dateFormat, new Date());
    date = addMilliseconds(date, userOffset());
    if (!isFinite(date.getTime())) {
      return null;
    }
    return date.getTime();
  };

  const formatCurrentForPicker = (daysOffset: number = -1): string => {
    let date = new Date();
    date.setSeconds(0, 0);
    date = addMilliseconds(addDays(date, daysOffset), -machineOffset());
    return format(date, isoTimeFormat());
  };

  const formatFromPicker = (date: number | null): string => {
    if (date != null) {
      const epoch = date - machineOffset() + (machineOffset() - userOffset());
      return format(epoch, isoTimeFormat());
    }
    return "";
  };

  const formatEpochToVariable = (epoch: number | undefined): string => {
    if (epoch == null || !isFinite(epoch)) {
      return "";
    }
    return format(epoch - machineOffset(), isoTimeFormat());
  };

  const ready = computed(() => timeZone.value !== null);

  return {
    ready,
    timeZone,
    setAppTimeZone,
    getUserOffset,
    getMachineOffset,
    getUserOffsetMillis,
    getMachineOffsetMillis,
    todayToEpoch,
    pickerToEpoch,
    epochToPicker,
    epochToPickerHeader,
    epochToLongDateFormat,
    epochToLongTimeFormat,
    epochToShortDateFormat,
    epochToShortTimeFormat,
    epochToTimeOnlyFormat,
    parseForPicker,
    formatCurrentForPicker,
    formatFromPicker,
    formatEpochToVariable
  };
}