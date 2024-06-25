import type { TimeUnit } from "../enums/sharedEnums";

export class ChartTimeStep {
  use: boolean;
  value: number;
  unit: TimeUnit;

  constructor(params: ChartTimeStepDTO) {
    this.use = params.use;
    this.value = params.value;
    this.unit = params.unit as TimeUnit;
  }
}

export interface ChartTimeStepDTO {
  use: boolean;
  value: number;
  unit: number;
}

export interface CreateChartTimeStepDTO {
  use: boolean;
  value: number;
  unit: TimeUnit;
}