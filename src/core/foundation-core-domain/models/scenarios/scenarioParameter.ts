
import { TranslationScenarioParameter, type TranslationScenarioParameterDTO } from './translationScenarioParameter';

export class ScenarioParameter {
  id : string;
  scenarioId: string;
  hiddenCode : string;
  labelDefault : string;
  valueDefault : string;
  editable : boolean;
  label : string;
  translations : TranslationScenarioParameter[];

  constructor(params: ScenarioParameterDTO) {
    this.id = params.id;
    this.scenarioId = params.scenarioId;
    this.hiddenCode = params.hiddenCode;
    this.labelDefault = params.labelDefault;
    this.valueDefault = params.valueDefault;
    this.editable = params.editable;
    this.label = params.label;
    this.translations = params.translations.map(t => new TranslationScenarioParameter(t));
  }
}

export interface ScenarioParameterDTO {
  id : string;
  scenarioId: string;
  hiddenCode : string;
  labelDefault : string;
  valueDefault : string;
  editable : boolean;
  label : string;
  translations : TranslationScenarioParameterDTO[];
}

export interface CreateScenarioParameterDTO {
  id : string
  scenarioId: string;
  hiddenCode : string;
  labelDefault : string;
  valueDefault : string;
  editable : boolean;
  translations : TranslationScenarioParameterDTO[];
}