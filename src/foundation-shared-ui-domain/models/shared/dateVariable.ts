export class DateVariable {
    name: string;
    expression: string;
  
    constructor(params: DateVariableDTO) {
      this.name = params.name;
      this.expression = params.expression;
    }
  }
  
  export interface DateVariableDTO {
    name: string;
    expression: string;
  }