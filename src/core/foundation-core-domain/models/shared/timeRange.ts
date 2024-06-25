import type { Days } from "@dative-gpi/foundation-shared-domain/models";

export class TimeRange {
  startDay: Days;
  startHour: number;
  startMinute: number;
  endDay: Days;
  endHour: number;
  endMinute: number;

  constructor(params: TimeRangeDTO) {
    this.startDay = params.startDay;
    this.startHour = params.startHour;
    this.startMinute = params.startMinute;
    this.endDay = params.endDay;
    this.endHour = params.endHour;
    this.endMinute = params.endMinute;
  }
}

export interface TimeRangeDTO {
  startDay: Days;
  startHour: number;
  startMinute: number;
  endDay: Days;
  endHour: number;
  endMinute: number;
}

export interface CreateTimeRangeDTO {
  startDay: Days;
  startHour: number;
  startMinute: number;
  endDay: Days;
  endHour: number;
  endMinute: number;
}