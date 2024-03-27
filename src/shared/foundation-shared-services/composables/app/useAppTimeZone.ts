import { computed, ref, watch } from "vue";

import { enUS, enGB, fr, it, es, de, Locale } from "date-fns/locale";
import { format, subDays } from "date-fns";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { TimeZoneInfos } from "@dative-gpi/foundation-shared-domain/models";

import { useAppLanguageCode } from "./useAppLanguageCode";

const timeZone = ref<TimeZoneInfos | null>(null);

export const useAppTimeZone = () => {
    const setTimeZone = (payload: TimeZoneInfos) => {
        timeZone.value = payload;
    };

    const getUserOffset = (): string => {
        return timeZone?.value?.offset ?? "UTC +00:00:00";
    };

    const getUserOffsetMillis = (): number => {
        const offset = timeZone?.value?.offset.slice(3) ?? "";
        const matchData = offset.match(/([+-])(\d+)(?::(\d+))?/);
        if (matchData) {
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
    }

    const pickerToEpoch = (value: Date): number => {
        // FSCalendar is always in machine time zone, so we need to convert it to user time zone
        return value.getTime() + getMachineOffsetMillis() - getUserOffsetMillis();
    };

    const epochToPicker = (value: number): Date => {
        // Epoch is always without time zone, so we need to convert it to user time zone
        const date = new Date(0);
        date.setUTCMilliseconds(value - getMachineOffsetMillis() + getUserOffsetMillis());
        return date;
    };

    const epochToPickerHeader = (value: number): { d: number, m: number, y: number } => {
        const date = new Date(0);
        date.setUTCMilliseconds(value - getMachineOffsetMillis() + getUserOffsetMillis());
        return { d: date.getDate(), m: date.getMonth(), y: date.getFullYear() };
    };

    const epochToLongDateFormat = (value: number): string => {
        if (value == null || !isFinite(value)) {
            return "";
        }
        const date = new Date(0);
        date.setUTCMilliseconds(value - getMachineOffsetMillis() + getUserOffsetMillis());
        return format(date, "EEEE dd LLLL yyyy", { locale: getLocale() });
    };

    const epochToLongTimeFormat = (value: number): string => {
        if (value == null || !isFinite(value)) {
            return "";
        }
        const date = new Date(0);
        date.setUTCMilliseconds(value - getMachineOffsetMillis() + getUserOffsetMillis());
        return format(date, overrideFormat(date, "EEEE dd LLLL yyyy HH:mm"), { locale: getLocale() })
    };

    const epochToShortDateFormat = (value: number): string => {
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

    const epochToShortTimeFormat = (value: number): string => {
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
        return `'${useTranslationsProvider().$tr("ui.time-zone.today-at", "Today at").replaceAll("'", "''")}' HH:mm:ss`;
    }

    const yesterdayTimeFormat = (): string => {
        return `'${useTranslationsProvider().$tr("ui.time-zone.yesterday-at", "Yesterday at").replaceAll("'", "''")}' HH:mm:ss`;
    }

    const overrideFormat = (date: Date, askedFormat: string): string => {
        let now = new Date();
        if (date.toDateString() === now.toDateString()) {
            return todayTimeFormat();
        }
        if (date.toDateString() === subDays(now, 1).toDateString()) {
            return yesterdayTimeFormat();
        }
        return askedFormat;
    }

    const getLocale = (): Locale => {
        switch (useAppLanguageCode().languageCode.value) {
            case "fr-FR": return fr;
            case "es-ES": return es;
            case "it-IT": return it;
            case "en-GB": return enGB;
            case "de-DE": return de;
            default: return enUS;
        }
    }

    const ready = computed(() => timeZone.value !== null);

    return {
        ready,
        timeZone,
        setTimeZone,
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
        epochToShortTimeFormat
    };
}