import { onMounted, provide, ref, watch } from "vue";

import { TimeZoneInfos } from "@dative-gpi/foundation-shared-domain/models";

import { TIME_ZONE } from "../config/literals";

let initialized = false;

const timeZone = ref<TimeZoneInfos | null>({
    id: "UTC",
    offset: "UTC +00:00:00"
});

export const useTimeZone = () => {
    const setTimeZone = (payload: TimeZoneInfos) => {
        timeZone.value = payload;
    };

    const getUserOffset = (): string => {
        return timeZone?.value?.offset ?? "UTC +00:00:00";
    };

    const getUserOffsetMillis = (): number => {
        const offset = timeZone?.value?.offset.slice(3) ?? "";
        const matchData = offset.match(/([+-])(\d+)(?::(\d+))?/);
        if (matchData)  {
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
        if (matchData)  {
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
        if (matchData)  {
            const [_, sign, hour, minute] = matchData;
            return parseInt(sign + "1") * ((hour ? parseInt(hour) : 0) * 60 + (minute ? parseInt(minute) : 0)) * 60 * 1000;
        }
        return 0;
    };

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

    if (!initialized) {
        provide(TIME_ZONE, timeZone);

        onMounted(() => {
            if (timeZone.value) {
                return;
            }
            else {
                setTimeZone(new TimeZoneInfos({
                    id: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    offset: getMachineOffset()
                }));
            }
        });
    }

    initialized = true;

    const ready = new Promise((resolve) => {
        if (timeZone.value) {
            resolve(timeZone.value);
        }
        else {
            watch(timeZone, () => {
                if (timeZone.value) {
                    resolve(timeZone.value);
                }
            });
        }
    });

    return {
        ready,
        timeZone,
        setTimeZone,
        getUserOffset,
        getMachineOffset,
        getUserOffsetMillis,
        getMachineOffsetMillis,
        pickerToEpoch,
        epochToPicker,
        epochToPickerHeader
    };
}