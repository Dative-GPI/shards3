import { DateType, Days } from "@dative-gpi/foundation-shared-domain/enums";
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";

const { $tr } = useTranslationsProvider();

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

  if (r.variant == DateType.UTC) {
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
        range.startHour = innerStartHour - 24;
      }
      else if (innerStartHour < 0) {
        range.startDay = (r.startDay + 6) % 7;
        range.startHour = innerStartHour + 24;
      }
      else {
        range.startHour = innerStartHour;
      }

      if (innerEndHour > 23) {
        range.endDay = (r.endDay + 1) % 7;
        range.endHour = innerEndHour - 24;
      }
      else if (innerEndHour < 0) {
        range.endDay = (r.endDay + 6) % 7;
        range.endHour = innerEndHour + 24;
      }
      else {
        range.endHour = innerEndHour;
      }
    }
    else {
      if (innerStartHour > 23) {
        range.startHour = innerStartHour - 24;
      }
      else if (innerStartHour < 0) {
        range.startHour = innerStartHour + 24;
      }
      else {
        range.startHour = innerStartHour;
      }

      if (innerEndHour > 23) {
        range.endHour = innerEndHour - 24;
      }
      else if (innerEndHour < 0) {
        range.endHour = innerEndHour + 24;
      }
      else {
        range.endHour = innerEndHour;
      }
    }
    return {
      startDay: range.startDay,
      startHour: range.startHour,
      startMinute: r.startMinute,
      endDay: range.endDay,
      endHour: range.endHour,
      endMinute: range.endMinute,
      variant: range.variant
    };
  }
  else {
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

export const dayLabel = (day: Days | number): string => {
  switch (day) {
    case Days.Monday:
      return $tr("ui.days.monday", "Monday");
    case Days.Tuesday:
      return $tr("ui.days.tuesday", "Tuesday");
    case Days.Wednesday:
      return $tr("ui.days.wednesday", "Wednesday");
    case Days.Thursday:
      return $tr("ui.days.thursday", "Thursday");
    case Days.Friday:
      return $tr("ui.days.friday", "Friday");
    case Days.Saturday:
      return $tr("ui.days.saturday", "Saturday");
    case Days.Sunday:
      return $tr("ui.days.sunday", "Sunday");
    default:
      return $tr("ui.days.all-days", "All days");
  }
}