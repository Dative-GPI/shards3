export enum SelectedEntities {
  None = 0,
  Models = 1,
  Groups = 2,
  Locations = 3,
  Devices = 5
}

export enum FilterType {
  None        = 0,
  Equal       = 1,
  More        = 2,
  Less        = 3,
  MoreOrEqual = 4,
  LessOrEqual = 5,
  Different   = 6,
  Contains    = 7,
  StartsWith  = 8,
  EndsWith    = 9
}