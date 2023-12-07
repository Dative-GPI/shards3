import { onMounted, provide, ref, watch } from "vue";

import { TimeZoneInfos } from "@dative-gpi/foundation-core-domain/models";

import { TIME_ZONE } from "../config/literals";

let initialized = false;

const timeZone = ref<TimeZoneInfos | null>(null);

const getLocalOffset = (): string => {
    const timeZoneName = Intl.DateTimeFormat("ia", {
        timeZoneName: "short",
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }).formatToParts().find((i) => i.type === "timeZoneName")?.value ?? "";

    const offset = timeZoneName.slice(3);
    if (!offset) {
        return "UTC ";
    }
  
    const matchData = offset.match(/([+-])(\d+)(?::(\d+))?/);
    if (matchData)  {
        const [_, sign, hour, minute] = matchData;
        return `UTC ${sign}${hour.padStart(2, "0")}:${(minute ?? "").padStart(2, "0")}:00`;
    }
    return "UTC ";
};

export const useTimeZone = () => {
    const setTimeZone = (payload: TimeZoneInfos) => {
        localStorage.setItem(TIME_ZONE, JSON.stringify(payload));
        timeZone.value = payload;
    };

    if (!initialized) {
        provide(TIME_ZONE, timeZone);

        onMounted(() => {
            if (timeZone.value) {
                return;
            }
            if (localStorage.getItem(TIME_ZONE) != null) {
                timeZone.value = JSON.parse(localStorage.getItem(TIME_ZONE)!) as TimeZoneInfos;
            }
            else {
                setTimeZone(new TimeZoneInfos({
                    id: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    offset: getLocalOffset()
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
        setTimeZone
    };
}