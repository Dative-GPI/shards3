import { ChartAllowedStepTranslation, type ChartAllowedStepTranslationDTO, type CreateChartAllowedStepTranslationDTO } from "./chartAllowedStepTranslation";

export class ChartAllowedStep {
  id: string;
  value: string;
  labelDefault: string;
  label: string;
  translations: ChartAllowedStepTranslation[];

  constructor(params: ChartAllowedStepDTO) {
    this.id = params.id;
    this.labelDefault = params.labelDefault;
    this.value = params.value;
    this.label = params.label;
    this.translations = params.translations.map(t => new ChartAllowedStepTranslation(t));
  }
}

export interface ChartAllowedStepDTO {
  id: string;
  value: string;
  labelDefault: string;
  label: string;
  translations: ChartAllowedStepTranslationDTO[];
}

export interface CreateChartAllowedStepDTO {
  value: string;
  labelDefault: string;
  translations: CreateChartAllowedStepTranslationDTO[];
}