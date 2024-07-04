export enum DashboardType {
  None             = 0,
  Organisation     = 1,
  OrganisationType = 2,
  Shallow          = 3
}

export enum DashboardVariableType {
  Number   = 0,
  String   = 1,
  TimeStep = 2
}

export enum AutoRefresh {
  None           = 0,
  FifteenSeconds = 1,
  ThirtySeconds  = 2,
  OneMinute      = 3,
  FiveMinutes    = 4,
  FifteenMinutes = 5,
  ThirtyMinutes  = 6,
  OneHour        = 7
}

export enum WidgetCategory {
  None     = 0,
  Modifier = 1
}