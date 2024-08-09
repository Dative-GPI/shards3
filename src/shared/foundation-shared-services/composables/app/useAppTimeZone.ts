import { addMilliseconds, format, parse, subDays } from "date-fns";
import { computed, ref } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { ISO_FORMAT, OPTIONS } from "@dative-gpi/foundation-shared-domain/tools";

import { useAppLanguageCode } from "./useAppLanguageCode";

const timeZone = ref<string | undefined>(undefined);

export const useAppTimeZone = () => {
  const { $tr } = useTranslationsProvider();

  const setAppTimeZone = (payload: string) => {
    timeZone.value = payload;
  };

  const epochToShortDateFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(value);
    return date.toLocaleString(useAppLanguageCode().languageCode.value, { ...OPTIONS.shortDate, timeZone: timeZone.value });
  };

  const epochToLongDateFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(value);
    const now = new Date();
    if (date.toLocaleString(useAppLanguageCode().languageCode.value, { ...OPTIONS.shortDate, timeZone: timeZone.value }) === now.toLocaleString(useAppLanguageCode().languageCode.value, { ...OPTIONS.shortDate, timeZone: timeZone.value })) {
      return $tr("ui.time-zone.today", "Today");
    }
    if (date.toLocaleString(useAppLanguageCode().languageCode.value, { ...OPTIONS.shortDate, timeZone: timeZone.value }) === subDays(now, 1).toLocaleString(useAppLanguageCode().languageCode.value, { ...OPTIONS.shortDate, timeZone: timeZone.value })) {
      return $tr("ui.time-zone.yesterday", "Yesterday");
    }
    const dateString = date.toLocaleString(useAppLanguageCode().languageCode.value, { ...OPTIONS.longDate, timeZone: timeZone.value });
    return dateString[0].toLocaleUpperCase() + dateString.slice(1);
  };

  const epochToShortTimeFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(value);
    return date.toLocaleString(useAppLanguageCode().languageCode.value, { ...OPTIONS.shortTime, timeZone: timeZone.value });
  };

  const epochToLongTimeFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(value);
    const now = new Date();
    if (date.toLocaleString(useAppLanguageCode().languageCode.value, { ...OPTIONS.shortDate, timeZone: timeZone.value }) === now.toLocaleString(useAppLanguageCode().languageCode.value, { ...OPTIONS.shortDate, timeZone: timeZone.value })) {
      return `${$tr("ui.time-zone.today-at", "Today at")} ${date.toLocaleString(useAppLanguageCode().languageCode.value, { ...OPTIONS.time, timeZone: timeZone.value })}`;
    }
    if (date.toLocaleString(useAppLanguageCode().languageCode.value, { ...OPTIONS.shortDate, timeZone: timeZone.value }) === subDays(now, 1).toLocaleString(useAppLanguageCode().languageCode.value, { ...OPTIONS.shortDate, timeZone: timeZone.value })) {
      return `${$tr("ui.time-zone.yesterday-at", "Yesterday at")} ${date.toLocaleString(useAppLanguageCode().languageCode.value, { ...OPTIONS.time, timeZone: timeZone.value })}`;
    }
    const dateString = date.toLocaleString(useAppLanguageCode().languageCode.value, { ...OPTIONS.longTime, timeZone: timeZone.value });
    return dateString[0].toLocaleUpperCase() + dateString.slice(1);
  };

  const epochToTimeOnlyFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(value);
    return date.toLocaleString(useAppLanguageCode().languageCode.value, { ...OPTIONS.time, timeZone: timeZone.value });
  };

  const getOffsetUser = (): number => {
    const offsetParts = (Intl.DateTimeFormat(undefined, {
      timeZone: timeZone.value,
      timeZoneName: "longOffset"
    }).formatToParts(new Date).pop()?.value.slice(3) || "+00:00").split(':');
    return (parseInt(offsetParts[0]) * 60 + parseInt(offsetParts[1])) * 60 * 1000;
  };

  const getOffsetUserChart = (withUTC: boolean = true): string => {
    const offsetPart = (Intl.DateTimeFormat(undefined, {
      timeZone: timeZone.value,
      timeZoneName: "longOffset"
    }).formatToParts(new Date).pop()?.value.slice(3) || "+00:00");
    return `${withUTC ? 'UTC ' : ''}${offsetPart}`;
  }

  const getOffsetMachine = (): number => {
    const offsetParts = (Intl.DateTimeFormat(undefined, {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      timeZoneName: "longOffset"
    }).formatToParts(new Date).pop()?.value.slice(3) || "+00:00").split(':');
    return (parseInt(offsetParts[0]) * 60 + parseInt(offsetParts[1])) * 60 * 1000;
  };

  const getOffsetMachineChart = (withUTC: boolean = true): string => {
    const offsetPart = (Intl.DateTimeFormat(undefined, {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      timeZoneName: "longOffset"
    }).formatToParts(new Date).pop()?.value.slice(3) || "+00:00");
    return `${withUTC ? 'UTC ' : ''}${offsetPart}`;
  }

  const getOffsetDifference = (): number => {
    if (timeZone.value == null) {
      return 0;
    }
    return getOffsetUser() - getOffsetMachine();
  };

  const todayToEpoch = (): number => {
    return (new Date().getTime() + getOffsetDifference());
  };

  const pickerToEpoch = (value: Date | null | undefined): number => {
    if (value != null) {
      return value.getTime() - getOffsetDifference();
    }
    return 0;
  };

  const epochToPicker = (value: number | null | undefined): Date => {
    if (value != null) {
      return new Date(value + getOffsetDifference());
    }
    return new Date(0);
  };

  const epochToPickerHeader = (value: number): { d: number, m: number, y: number } => {
    const date = epochToPicker(value);
    return { d: date.getDate(), m: date.getMonth(), y: date.getFullYear() };
  };

  const todayToPicker = (): string => {
    const date = addMilliseconds(new Date(), -getOffsetMachine());
    date.setSeconds(0, 0);
    return format(date, ISO_FORMAT);
  };

  const yesterdayToPicker = (): string => {
    const date = addMilliseconds(subDays(new Date(), 1), -getOffsetMachine());
    date.setSeconds(0, 0);
    return format(date, ISO_FORMAT);
  };

  const parseForPicker = (value: string, dateFormat: string = ISO_FORMAT): number | null => {
    const date = addMilliseconds(parse(value, dateFormat, new Date()), getOffsetUser());
    if (!isFinite(date.getTime())) {
      return null;
    }
    return date.getTime();
  };

  const formatFromPicker = (date: number | null): string => {
    if (date != null) {
      return format(date - getOffsetMachine(), ISO_FORMAT);
    }
    return "";
  };

  const formatEpochToVariable = (epoch: number | undefined): string => {
    if (epoch == null || !isFinite(epoch)) {
      return "";
    }
    return format(epoch - getOffsetMachine(), ISO_FORMAT);
  };

  const ready = computed(() => timeZone.value !== null);

  return {
    ready,
    timeZone,
    setAppTimeZone,
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
    todayToPicker,
    yesterdayToPicker,
    formatFromPicker,
    formatEpochToVariable,
    getOffsetUser,
    getOffsetMachine,
    getOffsetDifference,
    getOffsetUserChart,
    getOffsetMachineChart
  };
}