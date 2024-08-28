import { computed, ref } from "vue";

const timeZone = ref<string | undefined>(undefined);

export const useAppTimeZone = () => {
  const setAppTimeZone = (payload: string) => {
    timeZone.value = payload;
  };

  const getUserFormatter = (): Intl.DateTimeFormat => {
    return new Intl.DateTimeFormat(undefined, {
      timeZone: timeZone.value || Intl.DateTimeFormat().resolvedOptions().timeZone,
      timeZoneName: "longOffset"
    });
  }

  const getMachineFormatter = (): Intl.DateTimeFormat => {
    return new Intl.DateTimeFormat(undefined, {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      timeZoneName: "longOffset"
    });
  }

  const getUserOffsetName = (): string => {
    const formatter = getUserFormatter();
    const currentDate = formatter.formatToParts(new Date());
    const timeZoneName = currentDate.find((part) => part.type === "timeZoneName")?.value || "UTC+00:00";
    return timeZoneName
  }

  const getUserOffset = (): number => {
    const timeZoneName = getUserOffsetName();
    const [hours, minutes] = timeZoneName.slice(3).split(':');

    return (parseInt(hours) * 60 + parseInt(minutes)) * 60 * 1000;
  };

  const getMachineOffsetName = (): string => {
    const formatter = getMachineFormatter();
    const currentDate = formatter.formatToParts(new Date());
    const timeZoneName = currentDate.find((part) => part.type === "timeZoneName")?.value || "UTC+00:00";
    return timeZoneName;
  };

  const getMachineOffset = (): number => {
    const timeZoneName = getMachineOffsetName();
    const [hours, minutes] = timeZoneName.slice(3).split(':');

    return (parseInt(hours) * 60 + parseInt(minutes)) * 60 * 1000;
  }

  const getOffsetDifference = (): number => {
    return getUserOffset() - getMachineOffset();
  };

  const ready = computed(() => timeZone.value !== null);

  return {
    ready,
    timeZone,
    setAppTimeZone,
    getUserOffset,
    getUserOffsetName,
    getMachineOffset,
    getMachineOffsetName,
    getOffsetDifference,
  };
}