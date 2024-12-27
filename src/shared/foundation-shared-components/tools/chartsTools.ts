import { AxisType, ColorSets, SerieType, ChartType, TimeUnit, ChartOrigin, AggregationType, DisplayAs, FilterType, HeatmapRule, OperationOn, PlanningType, PlotPer } from "@dative-gpi/foundation-shared-domain/enums";

import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { ColorEnum, type ColorBase } from "../models";

const { $tr } = useTranslationsProvider();

export const chartOriginLabel = (type: ChartOrigin): string => {
  switch (type) {
    case ChartOrigin.None: return $tr("ui.common.none", "None");
    case ChartOrigin.Organisation: return $tr("ui.common.custom", "Custom");
    case ChartOrigin.OrganisationType: return $tr("ui.common.shared", "Shared");
  }
};

export const chartOriginColor = (type: ChartOrigin): ColorBase => {
  switch (type) {
    case ChartOrigin.None: return ColorEnum.Error;
    case ChartOrigin.Organisation: return ColorEnum.Primary;
    case ChartOrigin.OrganisationType: return ColorEnum.Warning;
  }
};

export const chartTypeLabel = (value: ChartType): string => {
  switch (value) {
    case ChartType.Gauge: return $tr("ui.chart-type.gauge", "Gauge");
    case ChartType.Heatmap: return $tr("ui.chart-type.heatmap", "Heatmap");
    case ChartType.Pie: return $tr("ui.chart-type.pie", "Pie");
    case ChartType.ScoreCard: return $tr("ui.chart-type.score-card", "Score card");
    case ChartType.Slider: return $tr("ui.chart-type.slider", "Slider");
    case ChartType.Table: return $tr("ui.chart-type.table", "Table");
    case ChartType.XY: return $tr("ui.chart-type.xy", "XY");
    default: return $tr("ui.common.none", "None");
  }
}

export const colorSetLabel = (value: ColorSets | number): string => {
  switch (value) {
    case ColorSets.Default: return $tr("ui.color-sets.am-charts", "Am Charts");
    case ColorSets.Grafana: return $tr("ui.color-sets.grafana", "Grafana");
    case ColorSets.Armytage: return $tr("ui.color-sets.armytage", "High contrast (26 colors)");
    case ColorSets.Hash: return $tr("ui.color-sets.hash", "Hash");
    case ColorSets.Kelly: return $tr("ui.color-sets.kelly", "High contrast (22 colors)");
    case ColorSets.ZeileisHornikMurrell: return $tr("ui.color-sets.zeileis", "Colorblind accessible");
    default: return $tr("ui.common.none", "None");
  }
}


export const chartIcon = (value: ChartType): string => {
  switch (value) {
    case ChartType.Gauge: return "mdi-gauge";
    case ChartType.Heatmap: return "mdi-blur-linear";
    case ChartType.Pie: return "mdi-chart-pie";
    case ChartType.ScoreCard: return "mdi-counter";
    case ChartType.Slider: return "mdi-ruler";
    case ChartType.Table: return "mdi-table";
    case ChartType.XY: return "mdi-chart-line";
    default: return $tr("ui.common.none", "None");
  }
}

export const serieTypeIcon = (serieType: SerieType): string => {
  switch (serieType) {
    case SerieType.Lines: return "mdi-chart-line";
    case SerieType.Area: return "mdi-chart-areaspline";
    case SerieType.Range: return "mdi-chart-line-stacked";
    case SerieType.Histogram: return "mdi-chart-histogram";
    case SerieType.Operation: return "mdi-division";
    case SerieType.Planning: return "mdi-chart-timeline";
    case SerieType.ScatterPlot: return "mdi-chart-scatter-plot";
    case SerieType.Top: return "mdi-podium-gold";
    case SerieType.Bars: return "mdi-chart-bar";
    case SerieType.StackedBars: return "mdi-chart-bar-stacked";
    case SerieType.Pie: return "mdi-chart-pie";
    case SerieType.Heatmap: return "mdi-blur-linear";
    case SerieType.Slider: return "mdi-blur-linear";
    case SerieType.Gauge: return "mdi-gauge";
    case SerieType.ScoreCard: return "mdi-counter";
    case SerieType.Table: return "mdi-table";
    default: return "";
  }
}

export const aggregationTypeLabel = (aggregationType: AggregationType): string => {
  switch (aggregationType) {
    case AggregationType.Sum: return $tr("ui.aggregation-type.sum", "Sum");
    case AggregationType.Cardinal: return $tr("ui.aggregation-type.cardinal", "Cardinal");
    case AggregationType.Mean: return $tr("ui.aggregation-type.mean", "Mean");
    case AggregationType.Median: return $tr("ui.aggregation-type.median", "Median");
    case AggregationType.First: return $tr("ui.aggregation-type.first", "First");
    case AggregationType.Last: return $tr("ui.aggregation.last", "Last");
    case AggregationType.Difference: return $tr("ui.aggregation-type.difference", "Difference");
    case AggregationType.Minimum: return $tr("ui.common.minimum", "Minimum");
    case AggregationType.Maximum: return $tr("ui.common.maximum", "Maximum");
    case AggregationType.Range: return $tr("ui.aggregation-type.range", "Range");
    default: return $tr("ui.common.none", "None");
  }
};

export const axisTypeLabel = (axisType: AxisType | number): string => {
  switch (axisType) {
    case AxisType.Date: return $tr("ui.common.date", "Date");
    case AxisType.Value: return $tr("ui.common.value", "Value");
    case AxisType.Category: return $tr("ui.common.category", "Category");
    default: return $tr("ui.common.none", "None");
  }
};

export const displayAsLabel = (display: DisplayAs | number): string => {
  switch (display) {
    case DisplayAs.Bars: return $tr("ui.common.bars", "Bars");
    case DisplayAs.Lines: return $tr("ui.common.lines", "Lines");
    case DisplayAs.Points: return $tr("ui.common.points", "Points");
    default: return $tr("ui.common.none", "None");
  }
};

export const filterTypeLabel = (filterType: FilterType | number): string => {
  switch (filterType) {
    case FilterType.Contains: return $tr("ui.common.contains", "contains");
    case FilterType.Different: return "≠";
    case FilterType.EndsWith: return $tr("ui.filter-type.ends-with", "ends with");
    case FilterType.Equal: return "=";
    case FilterType.Less: return "<";
    case FilterType.LessOrEqual: return "≤";
    case FilterType.More: return ">";
    case FilterType.MoreOrEqual: return "≥";
    case FilterType.StartsWith: return $tr("ui.filter-type.starts-with", "start with");
    default: return $tr("ui.common.none", "None");
  }
};

export const heatmapRuleLabel = (heatMap: HeatmapRule | number): string => {
  switch (heatMap) {
    case HeatmapRule.Gradient: return $tr("ui.common.gradient", "Gradient");
    case HeatmapRule.Ranges: return $tr("ui.common.ranges", "Ranges");
    case HeatmapRule.Fixed: return $tr("ui.common.fixed", "Fixed");
    default: return $tr("ui.common.none", "None");
  }
};

export const operationOnLabel = (operationOn: OperationOn | number): string => {
  switch (operationOn) {
    case OperationOn.SameEntity: return $tr("ui.operation-on.same-entity", "Same entity");
    case OperationOn.SameGroup: return $tr("ui.operation-on.same-group", "Same group");
    case OperationOn.SameGroupAndEntity: return $tr("ui.operation-on.same-group-entity", "Same group and entity");
    default: return $tr("ui.common.none", "None");
  }
};

export const planningTypeLabel = (planningType: PlanningType | number): string => {
  switch (planningType) {
    case PlanningType.UntilNext: return $tr("ui.planning-type.until-next", "Until next");
    case PlanningType.ElapsedTime: return $tr("ui.planning-type.elapsed-time", "Elapsed time");
    case PlanningType.SinglePoint: return $tr("ui.planning-type.single-point", "Single point");
    default: return $tr("ui.common.none", "None");
  }
};

export const plotPerLabel = (plotper: PlotPer | number): string => {
  switch (plotper) {
    case PlotPer.SinglePlot: return $tr("ui.plot-per.single-slot", "Single slot");
    case PlotPer.Model: return $tr("ui.common.model", "Model");
    case PlotPer.Group: return $tr("ui.common.group", "Group");
    case PlotPer.Location: return $tr("ui.common.location", "Location");
    case PlotPer.Device: return $tr("ui.common.device", "Device");
    default: return $tr("ui.common.none", "None");
  }
};

export const serieTypeLabel = (serieType: SerieType): string => {
  switch (serieType) {
    case SerieType.Lines: return $tr("ui.common.lines", "Lines");
    case SerieType.Area: return $tr("ui.common.area", "Area");
    case SerieType.Range: return $tr("ui.common.range", "Range");
    case SerieType.Histogram: return $tr("ui.common.histogram", "Histogram");
    case SerieType.Operation: return $tr("ui.common.operation", "Operation");
    case SerieType.Planning: return $tr("ui.common.planning", "Planning");
    case SerieType.ScatterPlot: return $tr("ui.common.scatter-plot", "Scatter plot");
    case SerieType.Top: return $tr("ui.serie-type.top", "Top");
    case SerieType.Bars: return $tr("ui.common.bars", "Bars");
    case SerieType.StackedBars: return $tr("ui.common.stacked-bars", "Stacked bars");
    case SerieType.Pie: return $tr("ui.common.pie", "Pie");
    case SerieType.Heatmap: return $tr('ui.common.heatmap', 'Heatmap');
    case SerieType.Slider: return $tr("ui.common.slider", "Slider");
    case SerieType.Gauge: return $tr("ui.common.gauge", "Gauge");
    case SerieType.ScoreCard: return $tr("ui.common.score-card", "Score card");
    case SerieType.Table: return $tr("ui.serie-type.table", "Table");
    default: return "";
  }
};

export const showModifiers = (serieType: SerieType) => {
  switch (serieType) {
    case SerieType.Lines:
      return { showData: true, showFirst: true, firstLabel: $tr('ui.common.group-by', 'Group by') };
    case SerieType.Area:
      return { showData: true, showFirst: true, firstLabel: $tr('ui.common.group-by', 'Group by') };
    case SerieType.Range:
      return { showData: true, showFirst: true, firstLabel: $tr('ui.common.group-by', 'Group by') };
    case SerieType.Histogram:
      return { showData: true, showFirst: true, firstLabel: $tr('ui.common.group-by', 'Group by') };
    case SerieType.Operation:
      return { showData: true, showFirst: true, firstLabel: $tr('ui.common.group-by', 'Group by') };
    case SerieType.Planning:
      return {
        showData: true, showY: true, showFirst: true, showSecond: true,
        ylabel: $tr('ui.common.y-axis-categories', 'Y Axis categories'),
        firstLabel: $tr('ui.common.group-by', 'Group by'),
        secondLabel: $tr('ui.common.elapsed-time-by', 'Elapsed time by'),
      };
    case SerieType.ScatterPlot:
      return {
        showX: true, showY: true, showFirst: true, showSecond: true,
        xlabel: $tr('ui.common.x-axis-data', 'X axis data'),
        ylabel: $tr('ui.common.y-axis-data', 'Y axis data'),
        firstLabel: $tr('ui.common.group-by', 'Group by'),
        secondLabel: $tr('ui.common.size-by', 'Size by')
      };
    case SerieType.Top:
      return {
        showData: true, showY: true, showFirst: true,
        ylabel: $tr('ui.common.y-axis-categories', 'Y Axis categories'),
        firstLabel: $tr('ui.common.group-by', 'Group by')
      };
    case SerieType.Bars:
      return { showData: true, showFirst: true, firstLabel: $tr('ui.common.group-by', 'Group by') };
    case SerieType.StackedBars:
      return {
        showData: true, showFirst: true, showSecond: true,
        firstLabel: $tr('ui.common.group-by', 'Group by'),
        secondLabel: $tr('ui.common.stack-by', 'Stack by')
      };
    case SerieType.Pie:
      return { showData: true, showFirst: true, firstLabel: $tr('ui.common.group-by', 'Group by') };
    case SerieType.Heatmap:
      return {
        showData: true, showX: true, showY: true,
        xlabel: $tr('ui.common.x-axis-categories', 'X Axis categories'),
        ylabel: $tr('ui.common.y-axis-categories', 'Y Axis categories')
      };
    case SerieType.Slider:
      return { showData: true, showFirst: true, firstLabel: $tr('ui.common.group-by', 'Group by') };
    case SerieType.Gauge:
      return { showData: true, showFirst: true, firstLabel: $tr('ui.common.group-by', 'Group by') };
    case SerieType.ScoreCard:
      return { showData: true, showFirst: true, firstLabel: $tr('ui.common.group-by', 'Group by') };
    case SerieType.Table:
      return { showData: true };
    default:
      return {};
  }
}

export const chartTypeFromSerieType = (serieType: SerieType): ChartType => {

  switch (serieType) {
    case SerieType.Lines:
    case SerieType.Area:
    case SerieType.Range:
    case SerieType.Histogram:
    case SerieType.Operation:
    case SerieType.Planning:
    case SerieType.ScatterPlot:
    case SerieType.Top:
    case SerieType.Bars:
    case SerieType.StackedBars:
      return ChartType.XY;
    case SerieType.Pie:
      return ChartType.Pie;
    case SerieType.Heatmap:
      return ChartType.Heatmap;
    case SerieType.Slider:
      return ChartType.Slider;
    case SerieType.Gauge:
      return ChartType.Gauge;
    case SerieType.ScoreCard:
      return ChartType.ScoreCard;
    case SerieType.Table:
      return ChartType.Table;
    default:
      return ChartType.None;
  }
}

export const xAxisTypeFromSerieType = (serieType: SerieType): AxisType[] => {

  switch (serieType) {
    case SerieType.Lines:
    case SerieType.Area:
    case SerieType.Range:
    case SerieType.Histogram:
    case SerieType.Operation:
    case SerieType.Planning:
      return [AxisType.Date];

    case SerieType.ScatterPlot:
      return [AxisType.Category, AxisType.Value];

    case SerieType.Top:
      return [AxisType.Value];

    case SerieType.Bars:
    case SerieType.StackedBars:
      return [AxisType.Category];

    case SerieType.Heatmap:
      return [AxisType.Date, AxisType.Category];

    case SerieType.Slider:
      return [AxisType.Value];

    case SerieType.Gauge:
    case SerieType.ScoreCard:
    case SerieType.Table:
    case SerieType.Pie:
      return [];
    default:
      return [];
  }
}

export const yAxisTypeFromSerieType = (serieType: SerieType): AxisType[] => {

  switch (serieType) {
    case SerieType.Lines:
    case SerieType.Area:
    case SerieType.Range:
    case SerieType.Histogram:
    case SerieType.Operation:
      return [AxisType.Value];

    case SerieType.ScatterPlot:
      return [AxisType.Category, AxisType.Value];

    case SerieType.Bars:
    case SerieType.StackedBars:
      return [AxisType.Value];

    case SerieType.Top:
      return [AxisType.Category];

    case SerieType.Planning:
      return [AxisType.Category];

    case SerieType.Heatmap:
      return [AxisType.Category];

    case SerieType.Slider:
      return [AxisType.Value];

    case SerieType.Gauge:
    case SerieType.ScoreCard:
    case SerieType.Table:
    case SerieType.Pie:
      return [];
    default:
      return [];
  }
}

export const hasAxis = (chartType: ChartType) => {
  switch (chartType) {
    case ChartType.XY:
    case ChartType.Heatmap:
      return true;
    default:
      return false;
  }
}


export const getAllowedSeries = (chartType: ChartType, xAxisType: AxisType, yAxisType: AxisType) => {

  const items = getEnumEntries(SerieType).map(e => {
    return {
      value: e.value as SerieType,
      text: serieTypeLabel(e.value),
      icon: serieTypeIcon(e.value),
      chartType: chartTypeFromSerieType(e.value),
      xAxis: xAxisTypeFromSerieType(e.value),
      yAxis: yAxisTypeFromSerieType(e.value)
    }
  });

  const filteredItems = () => {
    switch (chartType) {
      case ChartType.XY: {
        return items.filter(i => i.chartType === ChartType.XY && i.xAxis.includes(xAxisType) && i.yAxis.includes(yAxisType));
      }
      case ChartType.Pie:
      case ChartType.Heatmap:
      case ChartType.Gauge:
      case ChartType.Slider:
      case ChartType.ScoreCard:
      case ChartType.Table: {
        return items.filter(i => i.chartType === chartType);
      }
      default: {
        return [];
      }
    }
  }

  return filteredItems();
}

export const timeMillisecond = (value: number | null | undefined, unit: TimeUnit | undefined): number => {
  if (value === null || value === undefined || unit === undefined) {
    return 0;
  }
  switch (unit) {
    case TimeUnit.None: return 0;
    case TimeUnit.Millisecond: return value;
    case TimeUnit.Second: return value * 1000;
    case TimeUnit.Minute: return value * 60000;
    case TimeUnit.Hour: return value * 3600000;
    case TimeUnit.Day: return value * 86400000;
    case TimeUnit.Week: return value * 604800000;
    case TimeUnit.Month: return value * 2628000000;
    case TimeUnit.Year: return value * 31536000000;
    default: return 0;
  }
}

