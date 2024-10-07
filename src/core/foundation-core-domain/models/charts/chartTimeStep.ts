import type { TimeUnit } from "@dative-gpi/foundation-shared-domain/enums";

export class ChartTimeStep {
  value: number;
  unit: TimeUnit;

  constructor(params: ChartTimeStepDTO) {
    this.value = params.value;
    this.unit = params.unit as TimeUnit;
  }
}

export interface ChartTimeStepDTO {
  value: number;
  unit: number;
}

export interface CreateChartTimeStepDTO {
  value: number;
  unit: TimeUnit;
}