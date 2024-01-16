export * from "@dative-gpi/foundation-shared-domain/models/enums/dashboardEnums";

export enum StructureLevel {
  None                      = 0,
  OrganisationDashboard     = 1,
  OrganisationTypeDashboard = 2,
  OrganisationWidget        = 3,
  OrganisationTypeWidget    = 4,
  GroupDashboard            = 5,
  GroupWidget               = 6,
  AlertDashboard            = 7,
  AlertWidget               = 8,
  OrganisationList          = 9
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