import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";

import { TimeUnit } from "@dative-gpi/foundation-shared-domain/enums"

const { $tr } = useTranslationsProvider();

export const timeSteps = [
  { id: TimeUnit.Second,      label: $tr("ui.time-step.second.singular", "Second"), plural: $tr("ui.time-step.second.plural", "Seconds") },
  { id: TimeUnit.Minute,      label: $tr("ui.time-step.minute.singular", "Minute"), plural: $tr("ui.time-step.minute.plural", "Minutes") },
  { id: TimeUnit.Hour,        label: $tr("ui.time-step.hour.singular", "Hour"),     plural: $tr("ui.time-step.hour.plural", "Hours") },
  { id: TimeUnit.Day,         label: $tr("ui.time-step.day.singular", "Day"),       plural: $tr("ui.time-step.day.plural", "Days") },
  { id: TimeUnit.Week,        label: $tr("ui.time-step.week.singular", "Week"),     plural: $tr("ui.time-step.week.plural", "Weeks") },
  { id: TimeUnit.Month,       label: $tr("ui.time-step.month.singular", "Month"),   plural: $tr("ui.time-step.month.plural", "Months") },
  { id: TimeUnit.Year,        label: $tr("ui.time-step.year.singular", "Year"),     plural: $tr("ui.time-step.year.plural", "Years") },
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
  { id: 1,      label: $tr("ui.time-field.second.singular", "Second"), plural: $tr("ui.time-field.second.plural", "Seconds") },
  { id: 60,     label: $tr("ui.time-field.minute.singular", "Minute"), plural: $tr("ui.time-field.minute.plural", "Minutes") },
  { id: 3600,   label: $tr("ui.time-field.hour.singular", "Hour"),     plural: $tr("ui.time-field.hour.plural", "Hours") },
  { id: 86400,  label: $tr("ui.time-field.day.singular", "Day"),       plural: $tr("ui.time-field.day.plural", "Days") },
  { id: 604800, label: $tr("ui.time-field.week.singular", "Week"),     plural: $tr("ui.time-field.week.plural", "Weeks") },
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
