export enum UserType {
  None = 0,
  User = 1,
  ServiceAccount = 2,
  Extension = 3
}

export enum UserValidityState {
  None = 0,
  InvitationNotSent = 1,
  InvitationSent = 2,
  AccountCreated = 3,
  AccountValidated = 4
}