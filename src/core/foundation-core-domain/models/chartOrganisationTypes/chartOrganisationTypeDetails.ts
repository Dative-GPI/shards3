import { ChartVariable, ChartVariableDTO, CreateChartVariableDTO } from "../charts/chartVariable";
import { ChartOrganisationTypeInfos, ChartOrganisationTypeInfosDTO } from "./chartOrganisationTypeInfos";
import { ChartAxis, ChartAxisDTO, CreateChartAxisDTO } from "../charts/chartAxis";
import { ChartPlot, ChartPlotDTO, CreateChartPlotDTO } from "../charts/chartPlot";
import { CreateChartTranslationDTO } from "../charts/chartTranslation";
import { ColorSets } from "../enums/chartEnums";
import { CreateChartPresetDTO } from "../charts/chartPreset";
import { CreateChartPresetFilterDTO } from "../charts/chartPresetFilter";

export class ChartOrganisationTypeDetails extends ChartOrganisationTypeInfos {
    colorSet: ColorSets;
    colorSeed: string;
    xAxis: ChartAxis | null;
    aggregates: boolean | null;
    dynamicVariables: boolean | null;
    chartVariables: ChartVariable[];
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