export enum UserType {
    User = 0,
    ServiceAccount = 1,
    Extension = 2
}
  
export enum UserValidityState {
    InvitationNotSent = 0x000,
    InvitationSent = 0x001,
    AccountCreated = 0x011,
    AccountValidated = 0x111
}