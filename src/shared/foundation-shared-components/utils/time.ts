import { useTranslationsProvider } from "@dative-gpi/foundation-shared-services";

const { $tr } = useTranslationsProvider();

export const timeScale: any[] = [
  { label: $tr("ui.time-field.second", "Second"), id: 1 },
  { label: $tr("ui.time-field.minute", "Minute"), id: 60 },
  { label: $tr("ui.time-field.hour", "Hour"), id: 3600 },
  { label: $tr("ui.time-field.day", "Day"), id: 86400 },
  { label: $tr("ui.time-field.month", "Month"), id: 2592000 },
  { label: $tr("ui.time-field.year", "Year"), id: 31536000 }
];

export const getTimeScaleIndex = (secondValue: number): number => {
  let i = 0;
  if (secondValue === 0 || secondValue === null) return i;
  for (i; i < timeScale.length - 1; i++) {
    if (secondValue % timeScale[i].id !== 0) {
      return i - 1;
    }
  }
  return i;
};

export const getTimeBestString = (secondValue: number): string => {
  let i = getTimeScaleIndex(secondValue);
  let value = secondValue / timeScale[i].id;
  if (value === 1) {
    return `${value} ${timeScale[i].label}`;
  }
  return `${value} ${timeScale[i].label}s`;
}
