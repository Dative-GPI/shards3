export enum MessageType {
  None = 0,
  UserApplicationCreation = 1,
  UserOrganisationCreation = 2,
  OrganisationCreation = 3,
  UserApplicationAffectation = 4,
  UserOrganisationAffectation = 5,
  OrganisationAdminElevation = 6,
  AccountInvitation = 7,
  AccountValidation = 8,
  PasswordReinitialisation = 9,
  AlertCreation = 10,
  AlertResolution = 11,
  ConnectivityAlertCreation = 12,
  ConnectivityAlertResolution = 13
}