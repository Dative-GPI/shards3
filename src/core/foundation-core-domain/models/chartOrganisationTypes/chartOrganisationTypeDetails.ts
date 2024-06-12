import { ChartOrganisationTypeInfos, ChartOrganisationTypeInfosDTO } from "./chartOrganisationTypeInfos";
import { ChartVariable, ChartVariableDTO, CreateChartVariableDTO } from "../charts/chartVariable";
import { ChartPreset, ChartPresetDTO, CreateChartPresetDTO } from "../charts/chartPreset";
import { ChartAxis, ChartAxisDTO, CreateChartAxisDTO } from "../charts/chartAxis";
import { ChartPlot, ChartPlotDTO, CreateChartPlotDTO } from "../charts/chartPlot";
import { CreateChartPresetFilterDTO } from "../charts/chartPresetFilter";
import { ChartTranslationDTO } from "../charts/chartTranslation";
import { ColorSets } from "../enums/chartEnums";

export class ChartOrganisationTypeDetails extends ChartOrganisationTypeInfos {
  colorSet: ColorSets;
  colorSeed: string;
  xAxis: ChartAxis | null;
  aggregates: boolean | null;
  dynamicVariables: boolean | null;
  chartVariables: ChartVariable[];
  chartPresets: ChartPreset[];
  chartPlots: ChartPlot[];

  constructor(params: ChartOrganisationTypeDetailsDTO) {
    super(params);

    this.colorSet = params.colorSet as ColorSets;
    this.colorSeed = params.colorSeed;
    this.xAxis = params.xAxis ?
      new ChartAxis(params.xAxis) : null;
    this.aggregates = params.aggregates;
    this.dynamicVariables = params.dynamicVariables;
    this.chartVariables = params.chartVariables.map(cv => new ChartVariable(cv));
    this.chartPresets = params.chartPresets.map(cp => new ChartPreset(cp));
    this.chartPlots = params.chartPlots.map(cp => new ChartPlot(cp));
  }
}

export interface ChartOrganisationTypeDetailsDTO extends ChartOrganisationTypeInfosDTO {
  colorSet: number;
  colorSeed: string;
  xAxis: ChartAxisDTO | null;
  aggregates: boolean | null;
  dynamicVariables: boolean | null;
  chartVariables: ChartVariableDTO[];
  chartPresets: ChartPresetDTO[];
  chartPlots: ChartPlotDTO[];
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
  chartVariables: CreateChartVariableDTO[];
  chartPresets: CreateChartPresetDTO[];
  chartPresetFilters: CreateChartPresetFilterDTO[];
  chartPlots: CreateChartPlotDTO[];
  translations: ChartTranslationDTO[];
}