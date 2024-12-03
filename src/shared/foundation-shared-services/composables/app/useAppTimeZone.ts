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

  const getUserOffsetName = (epoch: number | null = null): string => {
    const formatter = getUserFormatter();
    const date = formatter.formatToParts(epoch ? new Date(epoch) : new Date());
    const timeZoneName = date.find((part) => part.type === "timeZoneName")?.value || "UTC+00:00";
    return timeZoneName
  }

  const getUserOffset = (epoch: number | null = null): number => {
    const timeZoneName = getUserOffsetName(epoch);
    const [hours, minutes] = timeZoneName.slice(3).split(':');
    if (isNaN(parseInt(hours)) || isNaN(parseInt(minutes))) {
      return 0;
    }
    return (parseInt(hours) * 60 + parseInt(minutes)) * 60 * 1000;
  };

  const getMachineOffsetName = (epoch: number | null = null): string => {
    const formatter = getMachineFormatter();
    const date = formatter.formatToParts(epoch ? new Date(epoch) : new Date());
    const timeZoneName = date.find((part) => part.type === "timeZoneName")?.value || "UTC+00:00";
    return timeZoneName;
  };

  const getMachineOffset = (epoch: number | null = null): number => {
    const timeZoneName = getMachineOffsetName(epoch);
    const [hours, minutes] = timeZoneName.slice(3).split(':');
    if (isNaN(parseInt(hours)) || isNaN(parseInt(minutes))) {
      return 0;
    }
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