import { Days } from "@dative-gpi/foundation-shared-domain/enums";
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

const { getUserOffset } = useAppTimeZone();


export const applyOffset = (r: DateTimeRange, negative: boolean) => {

  const range: DateTimeRange = r;

  if (negative) {
    range.startHour = r.startHour - getUserOffset() / 1000 / 60 / 60;
    range.endHour = r.endHour - getUserOffset() / 1000 / 60 / 60;
  }
  else {
    range.startHour = r.startHour + getUserOffset() / 1000 / 60 / 60;
    range.endHour = r.endHour + getUserOffset() / 1000 / 60 / 60;
  }


  if (![Days.AllDays].includes(r.startDay)) {
    if (r.startHour > 23) {

      range.startDay = (r.startDay + 1) % 7;
      range.startHour -= 24;
    }
    else if (r.startHour < 0) {
      range.startDay = (r.startDay + 6) % 7;
      range.startHour += 24;
    }

    if (r.endHour > 23) {
      range.endDay = (r.endDay + 1) % 7;
      range.endHour -= 24;
    }
    else if (r.endHour < 0) {
      range.endDay = (r.endDay + 6) % 7;
      range.endHour += 24;
    }
  }
  else {
    if (r.startHour > 23) {
      range.startHour -= 24;
    }
    else if (r.startHour < 0) {
      range.startHour += 24;
    }

    if (r.endHour > 23) {
      range.endHour -= 24;
    }
    else if (r.endHour < 0) {
      range.endHour += 24;
    }
  }
  return range;
}

export interface DateTimeRange {
  startDay: Days;
  startHour: number;
  startMinute: number;
  endDay: Days;
  endHour: number;
  endMinute: number;
}