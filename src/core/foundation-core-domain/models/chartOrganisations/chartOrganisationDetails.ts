import { ChartVariable, ChartVariableDTO, CreateChartVariableDTO } from "../charts/chartVariable";
import { ChartOrganisationInfos, ChartOrganisationInfosDTO } from "./chartOrganisationInfos";
import { ChartAxis, ChartAxisDTO, CreateChartAxisDTO } from "../charts/chartAxis";
import { ChartPlot, ChartPlotDTO, CreateChartPlotDTO } from "../charts/chartPlot";
import { CreateChartTranslationDTO } from "../charts/chartTranslation";
import { ColorSets } from "../enums/chartEnums";
import { ChartPreset, ChartPresetDTO, CreateChartPresetDTO } from "../charts/chartPreset";
import { CreateChartPresetFilterDTO } from "../charts/chartPresetFilter";

export class ChartOrganisationDetails extends ChartOrganisationInfos {
    colorSet: ColorSets;
    colorSeed: string;
    xAxis: ChartAxis | null;
    aggregates: boolean | null;
    dynamicVariables: boolean | null;
    chartVariables: ChartVariable[];
    chartPresets: ChartPreset[];
    chartPlots: ChartPlot[];

    constructor(params: ChartOrganisationDetailsDTO) {
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

export interface ChartOrganisationDetailsDTO extends ChartOrganisationInfosDTO {
    colorSet: number;
    colorSeed: string;
    xAxis: ChartAxisDTO | null;
    aggregates: boolean | null;
    dynamicVariables: boolean | null;
    chartVariables: ChartVariableDTO[];
    chartPresets: ChartPresetDTO[];
    chartPlots: ChartPlotDTO[];
}

export interface CreateChartOrganisationDTO {
    chartCategoryId: string | null;
    imageId: string | null;
    image: string | null;
    code: string;
    icon: string;
    tags: string[];
    labelDefault: string;
    titleDefault: string;
    translations: CreateChartTranslationDTO[];
}

export interface UpdateChartOrganisationDTO {
    chartCategoryId: string | null;
    imageId: string | null;
    image: string | null;
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
    labelDefault: string;
    titleDefault: string;
    translations: CreateChartTranslationDTO[];
}