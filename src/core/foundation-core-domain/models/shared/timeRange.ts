import type { Days, DateType } from "@dative-gpi/foundation-shared-domain/enums";

export class TimeRange {
  startDay: Days;
  startHour: number;
  startMinute: number;
  endDay: Days;
  endHour: number;
  endMinute: number;
  variant: DateType;

  constructor(params: TimeRangeDTO) {
    this.startDay = params.startDay;
    this.startHour = params.startHour;
    this.startMinute = params.startMinute;
    this.endDay = params.endDay;
    this.endHour = params.endHour;
    this.endMinute = params.endMinute;
    this.variant = params.variant;
  }
}

export interface TimeRangeDTO {
  startDay: Days;
  startHour: number;
  startMinute: number;
  endDay: Days;
  endHour: number;
  endMinute: number;
  variant: DateType;
}

export interface CreateTimeRangeDTO {
  startDay: Days;
  startHour: number;
  startMinute: number;
  endDay: Days;
  endHour: number;
  endMinute: number;
  variant: DateType;
}