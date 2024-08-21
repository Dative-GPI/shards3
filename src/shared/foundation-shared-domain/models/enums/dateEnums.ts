export enum DateSetting {
  None               = 0,
  PastHours          = 1,
  PastDays           = 2,
  PastWeeks          = 3,
  PastMonths         = 4,
  PastYears          = 5,
  CurrentHour        = 6,
  CurrentDay         = 7,
  CurrentWeek        = 8,
  CurrentMonth       = 9,
  CurrentYear        = 10,
  Expression         = 11,
  Pick               = 12,
  LastDay            = 13,
  LastWeek           = 14,
  LastMonth          = 15,
  LastYear           = 16,
  SinceLastDay       = 17,
  SinceLastWeek      = 18,
  SinceLastMonth     = 19,
  SinceLastYear      = 20,
  LastPeriod         = 21,
  MinutesBeforeAfter = 22,
  HoursBeforeAfter   = 23,
  DaysBeforeAfter    = 24,
  WeeksBeforeAfter   = 25,
  MinutesBefore      = 26,
  HoursBefore        = 27,
  DaysBefore         = 28,
  WeeksBefore        = 29
}

export enum Days {
  Monday    = 0,
  Tuesday   = 1,
  Wednesday = 2,
  Thursday  = 3,
  Friday    = 4,
  Saturday  = 5,
  Sunday    = 6,
  AllDays   = 7
}

export enum Months {
  January   = 0,
  February  = 1,
  March     = 2,
  April     = 3,
  May       = 4,
  June      = 5,
  July      = 6,
  August    = 7,
  September = 8,
  October   = 9,
  November  = 10,
  December  = 11,
  AllMonths = 12
}