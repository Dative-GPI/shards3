import { useTimeZone } from "@dative-gpi/foundation-shared-services/composables";

export const useDates = () => {
    const { getMachineOffset, getMachineOffsetMillis, getUserOffset, getUserOffsetMillis } = useTimeZone();

    const pickerToEpoch = (value: Date[]): number[] => {
        // FSCalendar is always in machine time zone, so we need to convert it to user time zone
        return value.slice()
            .map(date => date.getTime() + getMachineOffsetMillis() - getUserOffsetMillis())
            .sort();
    };

    const epochToPicker = (value: number[]): Date[] => {
        // Epoch is always without time zone, so we need to convert it to user time zone
        return value.slice()
            .sort((a, b) => b - a)
            .map(epoch => {
                const date = new Date(0);
                date.setUTCMilliseconds(epoch - getMachineOffsetMillis() + getUserOffsetMillis());
                return date;
        });
    };

    const epochToPickerHeader = (value: number): { d: number, m: number, y: number } => {
        const date = new Date(0);
        date.setUTCMilliseconds(value - getMachineOffsetMillis() + getUserOffsetMillis());
        return { d: date.getDate(), m: date.getMonth(), y: date.getFullYear() };
    };

    return {
        getUserOffset,
        getUserOffsetMillis,
        getMachineOffset,
        getMachineOffsetMillis,
        pickerToEpoch,
        epochToPicker,
        epochToPickerHeader
    };
}
