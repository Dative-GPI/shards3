import { ChartVariable, ChartVariableDTO, CreateChartVariableDTO } from "../charts/chartVariable";
import { ChartOrganisationTypeInfos, ChartOrganisationTypeInfosDTO } from "./chartOrganisationTypeInfos";
import { ChartAxis, ChartAxisDTO, CreateChartAxisDTO } from "../charts/chartAxis";
import { ChartPlot, ChartPlotDTO, CreateChartPlotDTO } from "../charts/chartPlot";
import { CreateChartTranslationDTO } from "../charts/chartTranslation";
import { ColorSets } from "../enums/chartEnums";

export class ChartOrganisationTypeDetails extends ChartOrganisationTypeInfos {
    colorSet: ColorSets;
    colorSeed: string;
    xAxis: ChartAxis;
    aggregates?: boolean;
    dynamicVariables?: boolean;
    chartVariables: ChartVariable[];
    chartPlots: ChartPlot[];

    constructor(params: ChartOrganisationTypeDetailsDTO) {
        super(params);
    
        this.colorSet = params.colorSet as ColorSets;
        this.colorSeed = params.colorSeed;
        this.xAxis = new ChartAxis(params.xAxis);
        this.aggregates = params.aggregates;
        this.dynamicVariables = params.dynamicVariables;
        this.chartVariables = params.chartVariables.map(cv => new ChartVariable(cv));
        this.chartPlots = params.chartPlots.map(cp => new ChartPlot(cp));
    }
}

export interface ChartOrganisationTypeDetailsDTO extends ChartOrganisationTypeInfosDTO {
    colorSet: number;
    colorSeed: string;
    xAxis?: ChartAxisDTO;
    aggregates?: boolean;
    dynamicVariables?: boolean;
    chartVariables: ChartVariableDTO[];
    chartPlots: ChartPlotDTO[];
}

export interface CreateChartOrganisationTypeDTO {
    chartOrganisationId: string;
    organisationTypeId?: string;
}

export interface UpdateChartOrganisationTypeDTO {
    code: string;
    icon: string;
    tags: string[];
    multiple: boolean;
    chartType: number;
    colorSet: number;
    colorSeed: string;
    xAxis?: CreateChartAxisDTO;
    aggregates?: boolean;
    dynamicVariables?: boolean;
    chartVariables: CreateChartVariableDTO[];
    chartPlots: CreateChartPlotDTO[];
    labelDefault: string;
    titleDefault: string;
    translations: CreateChartTranslationDTO[];
}