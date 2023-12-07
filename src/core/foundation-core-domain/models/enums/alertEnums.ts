export enum AlertStatus
{
  None = 0,
  Pending = 1,
  Untriggered = 2,
  Unresolved = 3,
  Resolved = 4,
  Expired = 5,
  Triggered = 6,
  Abandoned = 7
}

export enum Criticity {
  None = 0,
  Information = 1,
  Warning = 2,
  Error = 3
}

export enum TriggerOn {
    None = 0,
    RisingEdge = 1,
    Everytime = 2
}

export enum ResolveOn {
  None = 0,
  OutOfTrigger = 1,
  NewOperation = 2
}