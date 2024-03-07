import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";

const { $tr } = useTranslationsProvider();

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
  return `${figure} ${figure === 1 ? timeScale[unit].label.toLowerCase() : timeScale[unit].plural.toLowerCaser()}`;
}
