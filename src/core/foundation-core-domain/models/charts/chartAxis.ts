import type { ChartValueRangeDTO, CreateChartValueRangeDTO } from "./chartValueRange";
import { ChartValueRange } from "./chartValueRange";
import type { CreateChartTimeRangeDTO, ChartTimeRangeDTO } from "./chartTimeRange";
import { ChartTimeRange } from "./chartTimeRange";
import { AxisType } from "../enums/chartEnums";

export class ChartAxis {
  type: AxisType;
  logarithmic: boolean;
  boundaries: boolean;
  min?: number;
  max?: number;
  unit?: string;
  valueRanges: ChartValueRange[];
  timeRanges: ChartTimeRange[];

  constructor(params?: ChartAxisDTO) {
    if (params == null) {
      this.type = AxisType.None;
      this.logarithmic = false;
      this.boundaries = false;
      this.unit = "";
      this.valueRanges = [];
      this.timeRanges = [];
    }
    else {
      this.type = params.type as AxisType;
      this.logarithmic = params.logarithmic;
      this.boundaries = params.boundaries;
      this.min = params.min;
      this.max = params.max;
      this.unit = params.unit;
      this.valueRanges = params.valueRanges.map(vr => new ChartValueRange(vr));
      this.timeRanges = params.timeRanges.map(tr => new ChartTimeRange(tr));
    }
  }
}

export interface ChartAxisDTO {
  type: AxisType;
  logarithmic: boolean;
  boundaries: boolean;
  min?: number;
  max?: number;
  unit?: string;
  valueRanges: ChartValueRangeDTO[];
  timeRanges: ChartTimeRangeDTO[];
}

export interface CreateChartAxisDTO {
  type: AxisType;
  logarithmic: boolean;
  boundaries: boolean;
  min?: number;
  max?: number;
  unit?: string;
  valueRanges: CreateChartValueRangeDTO[];
  timeRanges: CreateChartTimeRangeDTO[];
}