export enum Scope {
  None = 0,
  Public = 0b1111,
  Application = 0b1000,
  Organisation = 0b0100,
  User = 0b0010,
  UserOrganisation = 0b0001
}

export enum ApplicationScope {
  None             = 0,
  OrganisationType = 1,
  Organisation     = 2
}

export enum EntityType {
  None = 0,
  Model = 1,
  Group = 2,
  Location = 3,
  Device = 5,
  User = 6,
  Dashboard = 7,
  Folder = 8
}