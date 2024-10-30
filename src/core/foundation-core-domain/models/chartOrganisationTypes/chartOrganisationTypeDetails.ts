import type { ChartPresetFilterDTO, CreateChartPresetFilterDTO } from "../charts/chartPresetFilter";
import { ChartPresetFilter } from "../charts/chartPresetFilter";
import type { ChartOrganisationTypeInfosDTO } from "./chartOrganisationTypeInfos";
import { ChartOrganisationTypeInfos } from "./chartOrganisationTypeInfos";
import type { ChartVariableDTO, CreateChartVariableDTO } from "../charts/chartVariable";
import { ChartVariable } from "../charts/chartVariable";
import type { ChartPresetDTO, CreateChartPresetDTO } from "../charts/chartPreset";
import { ChartPreset } from "../charts/chartPreset";
import type { ChartTranslationDTO } from "../charts/chartTranslation";
import { ChartTranslation } from "../charts/chartTranslation";
import type { ChartAxisDTO, CreateChartAxisDTO } from "../charts/chartAxis";
import { ChartAxis } from "../charts/chartAxis";
import type { ChartPlotDTO, CreateChartPlotDTO } from "../charts/chartPlot";
import { ChartPlot } from "../charts/chartPlot";
import { ChartFilter } from "../charts/chartFilter";
import type { ChartFilterDTO, CreateChartFilterDTO } from "../charts/chartFilter";
import { ChartModifier } from "../charts/chartModifier";
import type { ChartModifierDTO, CreateChartModifierDTO } from "../charts/chartModifier";
import { ChartOperand } from "../charts/chartOperand";
import type { ChartOperandDTO, CreateChartOperandDTO } from "../charts/chartOperand";
import { ChartSerie } from "../charts/chartSerie";
import type { ChartSerieDTO, CreateChartSerieDTO } from "../charts/chartSerie";
import type { ColorSets } from "@dative-gpi/foundation-shared-domain/enums";
import { ChartAllowedStep, type ChartAllowedStepDTO, type CreateChartAllowedStepDTO } from "../charts/chartAllowedStep";

export class ChartOrganisationTypeDetails extends ChartOrganisationTypeInfos {
  labelDefault: string;
  titleDefault: string;
  colorSet: ColorSets;
  colorSeed: string;
  xAxis: ChartAxis | null;
  aggregates: boolean | null;
  dynamicVariables: boolean | null;
  showAllowedStep: boolean | null;
  showPlotPerOnGraph: boolean | null;
  chartVariables: ChartVariable[];
  chartPresets: ChartPreset[];
  chartPresetFilters: ChartPresetFilter[];
  chartPlots: ChartPlot[];
  chartSeries: ChartSerie[];
  chartOperands: ChartOperand[];
  chartFilters: ChartFilter[];
  chartModifiers: ChartModifier[];
  yAxis: ChartAxis[];
  chartAllowedSteps: ChartAllowedStep[];
  translations: ChartTranslation[];

  constructor(params: ChartOrganisationTypeDetailsDTO) {
    super(params);

    this.labelDefault = params.labelDefault;
    this.titleDefault = params.titleDefault;
    this.colorSet = params.colorSet as ColorSets;
    this.colorSeed = params.colorSeed;
    this.xAxis = params.xAxis ?
      new ChartAxis(params.xAxis) : null;
    this.aggregates = params.aggregates;
    this.dynamicVariables = params.dynamicVariables;
    this.showAllowedStep = params.showAllowedStep;
    this.showPlotPerOnGraph = params.showPlotPerOnGraph;
    this.chartVariables = params.chartVariables.map(cv => new ChartVariable(cv));
    this.chartPresets = params.chartPresets.map(cp => new ChartPreset(cp));
    this.chartPresetFilters = params.chartPresetFilters.map(cpf => new ChartPresetFilter(cpf));
    this.chartPlots = params.chartPlots.map(cp => new ChartPlot(cp));
    this.chartSeries = params.chartSeries.map(cs => new ChartSerie(cs));
    this.chartOperands = params.chartOperands.map(co => new ChartOperand(co));
    this.chartFilters = params.chartFilters.map(cf => new ChartFilter(cf));
    this.chartModifiers = params.chartModifiers.map(cm => new ChartModifier(cm));
    this.yAxis = params.yAxis.map(ya => new ChartAxis(ya));
    this.chartAllowedSteps = params.chartAllowedSteps.map(cas => new ChartAllowedStep(cas));
    this.translations = params.translations.map((translation) => new ChartTranslation(translation));
  }
}

export interface ChartOrganisationTypeDetailsDTO extends ChartOrganisationTypeInfosDTO {
  labelDefault: string;
  titleDefault: string;
  colorSet: number;
  colorSeed: string;
  xAxis: ChartAxisDTO | null;
  aggregates: boolean | null;
  dynamicVariables: boolean | null;
  showAllowedStep: boolean | null;
  showPlotPerOnGraph: boolean | null;
  chartVariables: ChartVariableDTO[];
  chartPresets: ChartPresetDTO[];
  chartPresetFilters: ChartPresetFilterDTO[];
  chartPlots: ChartPlotDTO[];
  chartSeries: ChartSerieDTO[];
  chartOperands: ChartOperandDTO[];
  chartFilters: ChartFilterDTO[];
  chartModifiers: ChartModifierDTO[];
  yAxis: ChartAxisDTO[];
  chartAllowedSteps: ChartAllowedStepDTO[];
  translations: ChartTranslationDTO[];
}

export interface CreateChartOrganisationTypeDTO {
  chartOrganisationId: string;
  organisationTypeId: string | null;
}

export interface UpdateChartOrganisationTypeDTO {
  chartCategoryId: string | null;
  imageId: string | null;
  image: string | null;
  labelDefault: string;
  titleDefault: string;
  code: string;
  icon: string;
  tags: string[];
  multiple: boolean;
  chartType: number;
  colorSet: number;
  colorSeed: string;
  xAxis: CreateChartAxisDTO | null;
  aggregates: boolean | null;
  dynamicVariables: boolean | null;
  showAllowedStep: boolean | null;
  showPlotPerOnGraph: boolean | null;
  chartVariables: CreateChartVariableDTO[];
  chartPresets: CreateChartPresetDTO[];
  chartPresetFilters: CreateChartPresetFilterDTO[];
  chartPlots: CreateChartPlotDTO[];
  chartSeries: CreateChartSerieDTO[];
  chartOperands: CreateChartOperandDTO[];
  chartFilters: CreateChartFilterDTO[];
  chartModifiers: CreateChartModifierDTO[];
  yAxis: CreateChartAxisDTO[];
  chartAllowedSteps: CreateChartAllowedStepDTO[];
  translations: ChartTranslationDTO[];
}