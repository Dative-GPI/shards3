import { AutoRefresh } from '../enums';

export const autoRefreshToSeconds = (autoRefresh: AutoRefresh): number => {
  switch (autoRefresh) {
    case AutoRefresh.FifteenSeconds:
      return 15;
    case AutoRefresh.ThirtySeconds:
      return 30;
    case AutoRefresh.OneMinute:
      return 60;
    case AutoRefresh.FiveMinutes:
      return 300;
    case AutoRefresh.FifteenMinutes:
      return 900;
    case AutoRefresh.ThirtyMinutes:
      return 1800;
    case AutoRefresh.OneHour:
      return 3600;
    default:
      return 0;
  }
}