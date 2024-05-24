export interface FSModelStatus {
  id: string;
  label: string;
  index: number;
  groupById?: string | null;
  groupByLabel?: string | null;
  showDefault: boolean;
  iconDefault?: string | null;
  colorDefault?: string | null;
}