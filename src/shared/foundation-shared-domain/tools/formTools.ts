

export const FormTools = {
  isNullOrSpaces: (value: string | null | undefined): boolean => {
    return (value == null || value.match(/^ *$/) !== null);
  },
  isNullOrNaN: (value: number | null | undefined): boolean => {
    return (value == null || isNaN(value));
  },
  isEmailAddress: (value: string | null | undefined, allowEmpty: boolean): boolean => {
    if (value == null || value.match(/^ *$/) !== null) {
      return allowEmpty;
    }
    return value.match(/^\S+@\S+$/) !== null;
  },
  isPhoneNumber: (value: string | null | undefined, allowEmpty: boolean): boolean => {
    if (value == null || value.match(/^ *$/) !== null) {
      return allowEmpty;
    }
    return value.match(/^\+?[0-9]{8,}$/) !== null;
  }
}