import { DateType, Days } from "@dative-gpi/foundation-shared-domain/enums";
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

const { getUserOffset } = useAppTimeZone();


export const applyOffset = (r: DateTimeRange, negative: boolean) => {
  const range: DateTimeRange = {
    startDay: r.startDay,
    startHour: r.startHour,
    startMinute: r.startMinute,
    endDay: r.endDay,
    endHour: r.endHour,
    endMinute: r.endMinute,
    variant: r.variant
  };
  if(r.variant == DateType.UTC){
    let innerStartHour = 0;
    let innerEndHour = 0;
    if (negative) {
      innerStartHour = r.startHour - getUserOffset() / 1000 / 60 / 60;
      innerEndHour = r.endHour - getUserOffset() / 1000 / 60 / 60;
    }
    else {
      innerStartHour = r.startHour + getUserOffset() / 1000 / 60 / 60;
      innerEndHour = r.endHour + getUserOffset() / 1000 / 60 / 60;
    }

    if (![Days.AllDays].includes(r.startDay)) {
      if (innerStartHour > 23) {
        range.startDay = (r.startDay + 1) % 7;
        range.startHour -= 24;
      }
      else if (innerStartHour < 0) {
        range.startDay = (r.startDay + 6) % 7;
        range.startHour += 24;
      }

      if (innerEndHour > 23) {
        range.endDay = (r.endDay + 1) % 7;
        range.endHour -= 24;
      }
      else if (innerEndHour < 0) {
        range.endDay = (r.endDay + 6) % 7;
        range.endHour += 24;
      }
    }
    else {
      if (innerStartHour > 23) {
        range.startHour -= 24;
      }
      else if (innerStartHour < 0) {
        range.startHour += 24;
      }

      if (innerEndHour > 23) {
        range.endHour -= 24;
      }
      else if (innerEndHour < 0) {
        range.endHour += 24;
      }
    }
    return range;
  }
  else{
    return r;
  }
}

export interface DateTimeRange {
  startDay: Days;
  startHour: number;
  startMinute: number;
  endDay: Days;
  endHour: number;
  endMinute: number;
  variant: DateType;
}