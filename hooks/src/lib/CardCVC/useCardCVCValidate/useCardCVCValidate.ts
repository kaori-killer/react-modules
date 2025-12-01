import { useState } from "react";

import { checkBasicValidation } from "../../utils/checkBasicValidation";

const useCardCVCValidate = () => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardCVC = (cardCVC: string) => {
    const result = checkBasicValidation({
      value: cardCVC,
      maxLength: 3,
    });

    setIsValid(result.isValid);
    setErrorMessage(result.errorMessage);
  };

  return { isValid, errorMessage, validateCardCVC };
};

export default useCardCVCValidate;
