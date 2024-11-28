import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";

import { TimeUnit } from "@dative-gpi/foundation-shared-domain/enums"

const { $tr } = useTranslationsProvider();

export const timeSteps = [
  { id: TimeUnit.Second,      label: $tr("ui.common.second", "Second"), plural: $tr("ui.common.seconds", "Seconds") },
  { id: TimeUnit.Minute,      label: $tr("ui.common.minute", "Minute"), plural: $tr("ui.common.minutes", "Minutes") },
  { id: TimeUnit.Hour,        label: $tr("ui.common.hour", "Hour"),     plural: $tr("ui.common.hours", "Hours") },
  { id: TimeUnit.Day,         label: $tr("ui.common.day", "Day"),       plural: $tr("ui.common.days", "Days") },
  { id: TimeUnit.Week,        label: $tr("ui.common.week", "Week"),     plural: $tr("ui.common.weeks", "Weeks") },
  { id: TimeUnit.Month,       label: $tr("ui.common.month", "Month"),   plural: $tr("ui.common.months", "Months") },
  { id: TimeUnit.Year,        label: $tr("ui.common.year", "Year"),     plural: $tr("ui.common.years", "Years") },
];

export const timeStepToString = (value: { value: number, unit: TimeUnit } | null): string => {
  if (!value) {
    return "";
  }

  const unit = timeSteps.find(step => step.id === value.unit);
  if (!unit) {
    return "";
  }
  
  return `${value.value} ${value.value === 1 ? unit.label.toLowerCase() : unit.plural.toLowerCase()}`;
};

// TODO : remove everything below this line
export const timeScale: any[] = [
  { id: 1,      label: $tr("ui.common.second", "Second"), plural: $tr("ui.common.seconds", "Seconds") },
  { id: 60,     label: $tr("ui.common.minute", "Minute"), plural: $tr("ui.common.minutes", "Minutes") },
  { id: 3600,   label: $tr("ui.common.hour", "Hour"),     plural: $tr("ui.common.hours", "Hours") },
  { id: 86400,  label: $tr("ui.common.day", "Day"),       plural: $tr("ui.common.days", "Days") },
  { id: 604800, label: $tr("ui.common.week", "Week"),     plural: $tr("ui.common.weeks", "Weeks") },
];

export const getTimeScaleIndex = (value: number): number => {
  if (!value) {
    return 0;
  }
  for (let i = timeScale.length - 1; i >= 0; i--) {
    if (value % timeScale[i].id === 0) {
      return i;
    }
  }
  return 0;
};

export const getTimeBestString = (value: number): string => {
  const unit = getTimeScaleIndex(value);
  const figure = value / timeScale[unit].id;
  return `${figure} ${figure === 1 ? timeScale[unit].label.toLowerCase() : timeScale[unit].plural.toLowerCase()}`;
};
