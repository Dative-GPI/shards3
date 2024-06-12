import { ChartVariable, ChartVariableDTO, CreateChartVariableDTO } from "../charts/chartVariable";
import { ChartOrganisationInfos, ChartOrganisationInfosDTO } from "./chartOrganisationInfos";
import { ChartPreset, ChartPresetDTO, CreateChartPresetDTO } from "../charts/chartPreset";
import { ChartAxis, ChartAxisDTO, CreateChartAxisDTO } from "../charts/chartAxis";
import { ChartPlot, ChartPlotDTO, CreateChartPlotDTO } from "../charts/chartPlot";
import { CreateChartPresetFilterDTO } from "../charts/chartPresetFilter";
import { ColorSets } from "../enums/chartEnums";
import { ChartTranslation, ChartTranslationDTO } from "../charts/chartTranslation";

export class ChartOrganisationDetails extends ChartOrganisationInfos {
  labelDefault: string;
  titleDefault: string;
  colorSet: ColorSets;
  colorSeed: string;
  xAxis: ChartAxis | null;
  aggregates: boolean | null;
  dynamicVariables: boolean | null;
  chartVariables: ChartVariable[];
  chartPresets: ChartPreset[];
  chartPlots: ChartPlot[];
  translations: ChartTranslation[];

  constructor(params: ChartOrganisationDetailsDTO) {
    super(params);

    this.labelDefault = params.labelDefault;
    this.titleDefault = params.titleDefault;
    this.colorSet = params.colorSet as ColorSets;
    this.colorSeed = params.colorSeed;
    this.xAxis = params.xAxis ?
        new ChartAxis(params.xAxis) : null;
    this.aggregates = params.aggregates;
    this.dynamicVariables = params.dynamicVariables;
    this.chartVariables = params.chartVariables.map(cv => new ChartVariable(cv));
    this.chartPresets = params.chartPresets.map(cp => new ChartPreset(cp));
    this.chartPlots = params.chartPlots.map(cp => new ChartPlot(cp));
    this.translations = params.translations.map(t => new ChartTranslation(t));
  }
}

export interface ChartOrganisationDetailsDTO extends ChartOrganisationInfosDTO {
  labelDefault: string;
  titleDefault: string;
  colorSet: number;
  colorSeed: string;
  xAxis: ChartAxisDTO | null;
  aggregates: boolean | null;
  dynamicVariables: boolean | null;
  chartVariables: ChartVariableDTO[];
  chartPresets: ChartPresetDTO[];
  chartPlots: ChartPlotDTO[];
  translations: ChartTranslationDTO[];
}

export interface CreateChartOrganisationDTO {
  chartCategoryId: string | null;
  imageId: string | null;
  image: string | null;
  labelDefault: string;
  titleDefault: string;
  code: string;
  icon: string;
  tags: string[];
  translations: ChartTranslationDTO[];
}

export interface UpdateChartOrganisationDTO {
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
  chartVariables: CreateChartVariableDTO[];
  chartPresets: CreateChartPresetDTO[];
  chartPresetFilters: CreateChartPresetFilterDTO[];
  chartPlots: CreateChartPlotDTO[];
  translations: ChartTranslationDTO[];
}