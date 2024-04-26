export class ValueRange {
  startValue: number;
  endValue: number;

  constructor(params: ValueRangeDTO) {
    this.startValue = params.startValue;
    this.endValue = params.endValue;
  }
}

export interface ValueRangeDTO {
  startValue: number;
  endValue: number;
}

export interface CreateValueRangeDTO {
  startValue: number;
  endValue: number;
}