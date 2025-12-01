import validateMaxLength from "./validateMaxLength";
import validateNumber from "./validateNumber";

import {
  staticValidationMessages,
  dynamicValidationMessages,
} from "../../constants/validationMessages";

type ValidationResult = {
  isValid: boolean;
  errorMessage: null | string;
};

type checkBasicValidationProps = {
  value: string;
  maxLength: number;
};

export const checkBasicValidation = ({
  value,
  maxLength,
}: checkBasicValidationProps): ValidationResult => {
  if (!validateNumber(value)) {
    return {
      isValid: false,
      errorMessage: staticValidationMessages.numberOnly,
    };
  }

  if (!validateMaxLength(value, maxLength)) {
    return {
      isValid: false,
      errorMessage: dynamicValidationMessages.limitedLength(maxLength),
    };
  }
  return { isValid: true, errorMessage: null };
};
