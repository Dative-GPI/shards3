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

export enum DataTable {
  None     = 0,
  Number   = 1,
  String   = 2,
  DateTime = 3
}

export enum TimeUnit {
  None        = 0,
  Millisecond = 1,
  Second      = 2,
  Minute      = 3,
  Hour        = 4,
  Day         = 5,
  Week        = 6,
  Month       = 7,
  Year        = 8
}