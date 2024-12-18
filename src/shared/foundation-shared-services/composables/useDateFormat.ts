import { addMilliseconds, format, parse, subDays } from "date-fns";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { ISO_FORMAT, OPTIONS } from "@dative-gpi/foundation-shared-domain/tools";

import { useAppLanguageCode, useAppTimeZone } from "./app/";

export const useDateFormat = () => {
  const { $tr } = useTranslationsProvider();

  const { languageCode } = useAppLanguageCode();
  const { timeZone, getOffsetDifference, getMachineOffset, getUserOffset } = useAppTimeZone();

  const isEpochToday = (value: number | null | undefined): boolean => {
    if (value == null || !isFinite(value)) {
      return false;
    }
    const date = new Date(value);
    const now = new Date();
    return date.toLocaleString(languageCode.value, { ...OPTIONS.shortDate, timeZone: timeZone.value }) 
      === now.toLocaleString(languageCode.value, { ...OPTIONS.shortDate, timeZone: timeZone.value });
  }

  const isEpochYesterday = (value: number | null | undefined): boolean => {
    if (value == null || !isFinite(value)) {
      return false;
    }
    const date = new Date(value);
    const now = new Date();
    return date.toLocaleString(languageCode.value, { ...OPTIONS.shortDate, timeZone: timeZone.value }) 
      === subDays(now, 1).toLocaleString(languageCode.value, { ...OPTIONS.shortDate, timeZone: timeZone.value });
  }

  const dayToMillisecond = (value: number): number => {
    return value * 24 * 60 * 60 * 1000
  }

  const epochToDayMonthLongOnly = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(value);
    return date.toLocaleString(languageCode.value, { ...OPTIONS.dayMonthLongOnly, timeZone: timeZone.value });
  }

  const epochToDayMonthShortOnly = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(value);
    return date.toLocaleString(languageCode.value, { ...OPTIONS.dayMonthShortOnly, timeZone: timeZone.value });
  }

  const epochToShortDateFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(value);
    return date.toLocaleString(languageCode.value, { ...OPTIONS.shortDate, timeZone: timeZone.value });
  };

  const epochToLongDateFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(value);
    if (isEpochToday(value)) {
      return $tr("ui.common.today", "Today");
    }
    if (isEpochYesterday(value)) {
      return $tr("ui.common.yesterday", "Yesterday");
    }
    const dateString = date.toLocaleString(languageCode.value, { ...OPTIONS.longDate, timeZone: timeZone.value });
    return dateString[0].toLocaleUpperCase() + dateString.slice(1);
  };

  const epochToShortTimeFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(value);
    return date.toLocaleString(languageCode.value, { ...OPTIONS.shortTime, timeZone: timeZone.value });
  };

  const epochToMonthShortTimeFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(value);
    return date.toLocaleString(languageCode.value, { ...OPTIONS.monthShortTime, timeZone: timeZone.value });
  };

  const epochToLocalDayStart = (value: number | null | undefined): number => {
    if (value == null || !isFinite(value)) {
      return 0;
    }
    const date = new Date(value);
    return date.setHours(0, 0, 0, 0);
  }

  const epochToLocalDayEnd = (value: number | null | undefined): number => {
    if (value == null || !isFinite(value)) {
      return 0;
    }
    const date = new Date(value);
    return date.setHours(23, 59, 59, 999);
  }

  const epochToLongTimeFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(value);
    if (isEpochToday(value)) {
      return `${$tr("ui.common.today-at", "Today at")} ${date.toLocaleString(languageCode.value, { ...OPTIONS.time, timeZone: timeZone.value })}`;
    }
    if (isEpochYesterday(value)) {
      return `${$tr("ui.common.yesterday-at", "Yesterday at")} ${date.toLocaleString(languageCode.value, { ...OPTIONS.time, timeZone: timeZone.value })}`;
    }
    const dateString = date.toLocaleString(languageCode.value, { ...OPTIONS.longTime, timeZone: timeZone.value });
    return dateString[0].toLocaleUpperCase() + dateString.slice(1);
  };

  const epochToMonthYearOnlyFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(value);
    return date.toLocaleString(languageCode.value, { ...OPTIONS.monthYearOnly, timeZone: timeZone.value });
  }

  const epochToTimeOnlyFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(value);
    return date.toLocaleString(languageCode.value, { ...OPTIONS.time, timeZone: timeZone.value });
  };

  const epochToShortTimeOnlyFormat = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(value);
    return date.toLocaleString(languageCode.value, { ...OPTIONS.shortTimeOnly, timeZone: timeZone.value });
  }

  const epochToWeekNumber = (value: number | null | undefined): string => {
    if (value == null || !isFinite(value)) {
      return "";
    }
    const date = new Date(value);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    const week1 = new Date(date.getFullYear(), 0, 4);
    return `${1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7)}`;
  }

  const todayToEpoch = (): number => {
    return new Date().getTime() + getOffsetDifference();
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

  const millisecondToDay = (value: number): number => {
    return value / 1000 / 60 / 60 / 24;
  }

  const todayToPicker = (): string => {
    const date = addMilliseconds(new Date(), -getMachineOffset());
    date.setSeconds(0, 0);
    return format(date, ISO_FORMAT);
  };

  const yesterdayToPicker = (): string => {
    const yesterday = subDays(new Date(), 1);
    const date = addMilliseconds(yesterday, -getMachineOffset(yesterday.getTime()));
    date.setSeconds(0, 0);
    return format(date, ISO_FORMAT);
  };

  const parseForPicker = (value: string, dateFormat: string = ISO_FORMAT): number | null => {
    const date = addMilliseconds(parse(value, dateFormat, new Date()), getUserOffset());
    if (!isFinite(date.getTime())) {
      return null;
    }
    return date.getTime();
  };

  const epochToISO = (epoch: number | null): string => {
    if (epoch != null) {
      return format(epoch - getMachineOffset(epoch), ISO_FORMAT);
    }
    return "";
  };

  return {
    todayToEpoch,
    pickerToEpoch,
    dayToMillisecond,
    epochToDayMonthLongOnly,
    epochToPicker,
    epochToPickerHeader,
    epochToLocalDayStart,
    epochToLocalDayEnd,
    epochToLongDateFormat,
    epochToLongTimeFormat,
    epochToMonthYearOnlyFormat,
    epochToShortDateFormat,
    epochToShortTimeFormat,
    epochToDayMonthShortOnly,
    epochToMonthShortTimeFormat,
    epochToShortTimeOnlyFormat,
    epochToTimeOnlyFormat,
    epochToWeekNumber,
    millisecondToDay,
    parseForPicker,
    todayToPicker,
    yesterdayToPicker,
    epochToISO
  };
}