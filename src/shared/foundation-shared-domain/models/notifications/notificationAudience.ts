import { type Scope } from "@dative-gpi/foundation-shared-domain/enums";

export class NotificationAudience {
  id: string;
  scope: Scope

  constructor(params: NotificationAudienceDTO) {
    this.id = params.id;
    this.scope = params.scope as Scope;
  }
}

export interface NotificationAudienceDTO {
  id: string;
  scope: number;
}