import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import type { ColorBase} from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { AggregationType, AxisType, ChartOrigin, DisplayAs, FilterType, HeatmapRule, OperationOn, PlanningType, PlotPer, SerieType } from "@dative-gpi/foundation-core-domain/models";

const { $tr } = useTranslationsProvider();

export const chartOriginLabel = (type: ChartOrigin): string => {
  switch (type) {
    case ChartOrigin.None:             return $tr("ui.chart-type.none", "None");
    case ChartOrigin.Organisation:     return $tr("ui.chart-type.organisation", "Custom");
    case ChartOrigin.OrganisationType: return $tr("ui.chart-type.organisation-type", "Shared");
  }
};

export const chartOriginColor = (type: ChartOrigin): ColorBase => {
  switch (type) {
    case ChartOrigin.None:             return ColorEnum.Error;
    case ChartOrigin.Organisation:     return ColorEnum.Primary;
    case ChartOrigin.OrganisationType: return ColorEnum.Warning;
  }
};

export const aggregationTypeLabel = (aggregationType : AggregationType): string => {
  switch (aggregationType) {
    case AggregationType.None      : return $tr("ui.common.none", "None");
    case AggregationType.Sum       : return $tr("ui.common.sum", "Sum");
    case AggregationType.Cardinal      : return $tr("ui.common.cardinal", "Cardinal");
    case AggregationType.Mean  : return $tr("ui.common.cean", "Mean");
    case AggregationType.Median      : return $tr("ui.common.median", "Median");
    case AggregationType.First       : return $tr("ui.common.first", "First");
    case AggregationType.Last      : return $tr("ui.common.last", "Last");
    case AggregationType.Difference       : return $tr("ui.common.difference", "Difference");
    case AggregationType.Minimum        : return $tr("ui.common.minimum", "Minimum");
    case AggregationType.Maximum    : return $tr("ui.common.maximum", "Maximum");
    case AggregationType.Range      : return $tr("ui.common.range", "Range");
    default                   : return "";
  }
}

export const axisTypeLabel = (axisType: AxisType | number): string => {
  switch (axisType) {
    case AxisType.None      : return $tr("ui.common.none", "None");
    case AxisType.Date      : return  $tr("ui.common.date", "Date");
    case AxisType.Value     : return $tr("ui.common.value", "Value");
    case AxisType.Category  : return $tr("ui.common.category", "Category");
    default                 : return "";
  }
}

export const displayAsLabel = (display: DisplayAs | number): string => {

  switch (display) {
    case DisplayAs.None      : return $tr("ui.common.none", "None");
    case DisplayAs.Bars      : return $tr("ui.common.bars", "Bars");
    case DisplayAs.Lines     : return $tr("ui.common.lines", "Lines");
    case DisplayAs.Points    : return $tr("ui.common.point", "Points");
    default                   : return "";
  }
}

export const filterTypeLabel = (filterType: FilterType | number): string => {
  switch (filterType) {
    case FilterType.None          : return $tr("ui.common.none", "None");
    case FilterType.Contains      : return $tr("ui.common.contains", "contains");
    case FilterType.Different     : return "≠";
    case FilterType.EndsWith      : return $tr("ui.common.end-width", "end with") ;
    case FilterType.Equal         : return "=";
    case FilterType.Less          : return "<";
    case FilterType.LessOrEqual   : return "≤";
    case FilterType.More          : return ">";
    case FilterType.MoreOrEqual   : return "≥";
    case FilterType.StartsWith    : return $tr("ui.common.starts-with", "start with");
    default                       : return "";
  }
}

export const heatmapRuleLabel = (heatMap: HeatmapRule | number): string => {
  switch (heatMap) {
    case HeatmapRule.None     : return $tr("ui.common.none", "None");
    case HeatmapRule.Gradient      : return $tr("ui.common.gradient", "Gradient");
    case HeatmapRule.Ranges      : return $tr("ui.common.ranges", "Ranges");
    case HeatmapRule.Fixed : return $tr("ui.common.fixed", "Fixed");
    default                   : return "";
  }
}

export const operationOnLabel = (operationOn: OperationOn | number): string => {

  switch (operationOn) {
    case OperationOn.None     : return $tr("ui.common.none", "None");
    case OperationOn.SameEntity      : return $tr("ui.common.same-entity", "Same entity");
    case OperationOn.SameGroup      : return $tr("ui.common.same-group", "Same group");
    case OperationOn.SameGroupAndEntity : return $tr("ui.common.same-group-entity", "Same group and entity");
    default                   : return "";
  }
}

export const planningTypeLabel = (planningType : PlanningType | number): string => {
  switch (planningType) {
    case PlanningType.None     : return $tr("ui.common.none", "None");
    case PlanningType.UntilNext      : return $tr("ui.common.until-next", "Until next");
    case PlanningType.ElapsedTime      : return $tr("ui.common.elapsed-time", "Elapsed time");
    case PlanningType.SinglePoint : return $tr("ui.common.single-point", "Single point");
    default                   : return "";
  }
}

export const plotPerLabel = (plotper: PlotPer | number): string => {
  
  switch (plotper) {
    case PlotPer.None     : return $tr("ui.common.none", "None");
    case PlotPer.SinglePlot      : return $tr("ui.common.single-slot", "Single slot");
    case PlotPer.Model      : return $tr("ui.common.model", "Model");
    case PlotPer.Group : return $tr("ui.common.group", "Group");
    case PlotPer.Location : return $tr("ui.common.location", "Location");
    case PlotPer.Device : return $tr("ui.common.device", "Device");
    default                   : return "";
  }
}

export const serieTypeLabel = (serieType : SerieType): string => {
  switch (serieType) {
    case SerieType.Lines      : return $tr("ui.common.lines", "Lines");
    case SerieType.Area       : return $tr("ui.common.area", "Area");
    case SerieType.Range      : return $tr("ui.common.range", "Range");
    case SerieType.Histogram  : return $tr("ui.common.histogram", "Histogram");
    case SerieType.Operation      : return $tr("ui.common.operation", "Operation");
    case SerieType.Planning       : return $tr("ui.common.planning", "Planning");
    case SerieType.ScatterPlot      : return $tr("ui.common.scatter-plot", "Scatter plot");
    case SerieType.Top       : return $tr("ui.common.top", "Top");
    case SerieType.Bars        : return $tr("ui.common.bars", "Bars");
    case SerieType.StackedBars    : return $tr("ui.common.stacked-bars", "Stacked bars");
    case SerieType.Pie      : return $tr("ui.common.pie", "Pie");
    case SerieType.Heatmap       : return $tr('ui.common.heatmap', 'Heatmap');
    case SerieType.Slider        : return $tr("ui.common.slider", "Slider");
    case SerieType.Gauge    : return $tr("ui.common.gauge", "Gauge");
    case SerieType.ScoreCard      : return $tr("ui.common.score-card", "Score card");
    case SerieType.Table       : return $tr("ui.common.table", "Table");
    default                   : return "";
  }
}


export const getEnumEntries = (e: any) => {
  return Object.keys(e)
    .filter(key => isNaN(Number(key)))
    .map(key => ({key : key, value : e[key]}));
};