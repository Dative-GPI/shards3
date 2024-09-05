export enum ChartOrigin {
  None             = 0,
  Organisation     = 1,
  OrganisationType = 2
}

export enum ChartType {
  None      = 0,
  XY        = 1,
  Pie       = 2,
  Heatmap   = 3,
  Slider    = 4,
  Gauge     = 5,
  ScoreCard = 6,
  Table     = 7
}

export enum ColorSets {
  Default              = 0,
  Grafana              = 1,
  Kelly                = 2,
  Armytage             = 3,
  ZeileisHornikMurrell = 4,
  Hash                 = 5
}

export enum AxisType {
  None     = 0,
  Date     = 1,
  Value    = 2,
  Category = 3
}

export enum SerieType {
  None        = 0,
  Lines       = 1,
  Area        = 2,
  Range       = 3,
  Histogram   = 4,
  Operation   = 5,
  Planning    = 6,
  ScatterPlot = 7,
  Top         = 8,
  Bars        = 9,
  StackedBars = 10,
  Pie         = 11,
  Heatmap     = 12,
  Slider      = 13,
  Gauge       = 14,
  ScoreCard   = 15,
  Table       = 16
}

export enum PlotPer {
  None       = 0,
  SinglePlot = 1,
  Model      = 2,
  Group      = 3,
  Location   = 4,
  Device     = 5
}

export enum AggregationType {
  None       = 0,
  Sum        = 1,
  Cardinal   = 2,
  Mean       = 3,
  Median     = 4,
  First      = 5,
  Last       = 6,
  Difference = 7,
  Minimum    = 8,
  Maximum    = 9,
  Range      = 10
}

export enum PlanningType {
  None        = 0,
  UntilNext   = 1,
  ElapsedTime = 2,
  SinglePoint = 3
}

export enum DisplayAs {
  None   = 0,
  Bars   = 1,
  Lines  = 2,
  Points = 3
}

export enum OperationOn {
  None               = 0,
  SameGroup          = 1,
  SameEntity         = 2,
  SameGroupAndEntity = 3
}

export enum HeatmapRule {
  None     = 0,
  Gradient = 1,
  Ranges   = 2,
  Fixed    = 3
}

export enum PieBreakdown {
  Entity = 0,
  Serie  = 1,
  Group  = 2
}

export enum Position {
  None     = 0,
  Abscissa = 1,
  Ordinate = 2
}