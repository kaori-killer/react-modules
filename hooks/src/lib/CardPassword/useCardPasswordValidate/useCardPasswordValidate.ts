import { useState } from "react";

import { checkBasicValidation } from "../../utils/checkBasicValidation";

const useCardPasswordValidate = () => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardPassword = (cardPassword: string): boolean => {
    const result = checkBasicValidation({
      value: cardPassword,
      maxLength: 2,
    });

    setIsValid(result.isValid);
    setErrorMessage(result.errorMessage);

    return result.isValid;
  };

  return { isValid, errorMessage, validateCardPassword };
};

export default useCardPasswordValidate;
