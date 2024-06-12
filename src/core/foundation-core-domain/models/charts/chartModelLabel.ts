export class ChartModelLabel {
  id: string;
  label: string;

  constructor(params: ChartModelLabelDTO) {
    this.id = params.id;
    this.label = params.label;
  }
}

export interface ChartModelLabelDTO {
  id: string;
  label: string;
}