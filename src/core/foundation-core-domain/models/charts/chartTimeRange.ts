import { Days } from "@dative-gpi/foundation-shared-domain/models";

import { ChartTimeRangeTranslation, ChartTimeRangeTranslationDTO, CreateChartTimeRangeTranslationDTO } from "./chartTimeRangeTranslation";
import { TimeRange } from "../shared/timeRange";

export class ChartTimeRange extends TimeRange {
  color: string;
  opacity: number;
  label: string;
  labelDefault: string;
  translations: ChartTimeRangeTranslation[];

  constructor(params: ChartTimeRangeDTO) {
    super(params);

    this.color = params.color;
    this.opacity = params.opacity;
    this.label = params.label;
    this.labelDefault = params.labelDefault;
    this.translations = params.translations.map(t => new ChartTimeRangeTranslation(t));
  }
}

export interface ChartTimeRangeDTO {
  startDay: number;
  startHour: number;
  startMinute: number;
  endDay: number;
  endHour: number;
  endMinute: number;
  color: string;
  opacity: number;
  label: string;
  labelDefault: string;
  translations: ChartTimeRangeTranslationDTO[];
}

export interface CreateChartTimeRangeDTO {
  startDay: Days;
  startHour: number;
  startMinute: number;
  endDay: Days;
  endHour: number;
  endMinute: number;
  color: string;
  opacity: number;
  labelDefault: string;
  translations: CreateChartTimeRangeTranslationDTO[];
}