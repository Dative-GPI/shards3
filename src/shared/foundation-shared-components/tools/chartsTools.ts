import { AxisType, ColorSets, SerieType, ChartType, TimeUnit } from "@dative-gpi/foundation-shared-domain/enums";

import { serieTypeLabel, getEnumEntries } from "@dative-gpi/foundation-core-components/utils";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";

const { $tr } = useTranslationsProvider();

export const chartTypeLabel = (value: ChartType): string => {
  switch (value) {
    case ChartType.Gauge: return $tr("ui.common.gauge", "Gauge");
    case ChartType.Heatmap: return $tr("ui.common.heatmap", "Heatmap");
    case ChartType.Pie: return $tr("ui.common.pie", "Pie");
    case ChartType.ScoreCard: return $tr("ui.common.score-card", "Score card");
    case ChartType.Slider: return $tr("ui.common.slider", "Slider");
    case ChartType.Table: return $tr("ui.common.table", "Table");
    case ChartType.XY: return $tr("ui.common.xy", "XY");
    default: return $tr("ui.common.none", "None");
  }
}

export const colorSetLabel = (value: ColorSets | number): string => {
  switch (value) {
    case ColorSets.Default: return $tr("ui.common.am-charts", "Am Charts");
    case ColorSets.Grafana: return $tr("ui.common.grafana", "Grafana");
    case ColorSets.Armytage: return $tr("ui.common.armytage", "Armytage");
    case ColorSets.Hash: return $tr("ui.common.hash", "Hash");
    case ColorSets.Kelly: return $tr("ui.common.material", "Kelly");
    case ColorSets.ZeileisHornikMurrell: return $tr("ui.common.material", "ZeileisHornikMurrell");
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