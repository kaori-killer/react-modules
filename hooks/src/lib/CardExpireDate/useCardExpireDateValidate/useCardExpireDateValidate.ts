import { useState } from "react";

import validateRange from "../../utils/validateRange";
import { checkBasicValidation } from "../../utils/checkBasicValidation";

import { staticValidationMessages } from "../../../constants/validationMessages";

type CardExpireDate = {
  month: string;
  year: string;
};

const useCardExpireDateValidate = () => {
  const [isValid, setIsValid] = useState({
    month: true,
    year: true,
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  const validateCardExpireDate = (
    expireDate: CardExpireDate,
    key: "month" | "year"
  ) => {
    const result = checkBasicValidation({
      value: expireDate[key],
      maxLength: 2,
    });

    if (!result.isValid) {
      setIsValid((prev) => ({
        ...prev,
        [key]: result.isValid,
      }));
      setErrorMessage(result.errorMessage);
      return result.isValid;
    }

    if (key === "month" && expireDate[key].length === 2) {
      if (
        !validateRange({
          value: Number(expireDate[key]),
          min: 1,
          max: 12,
        })
      ) {
        setIsValid({
          ...isValid,
          month: false,
        });

        setErrorMessage(staticValidationMessages.rangeMonth);
        return false;
      }
    }

    if (key === "year" && expireDate[key].length === 2) {
      if (
        !validateRange({
          value: Number(expireDate[key]),
          min: currentYear,
          max: currentYear + 5,
        })
      ) {
        setIsValid({
          ...isValid,
          year: false,
        });

        setErrorMessage(staticValidationMessages.invalidYear);
        return false;
      }
    }

    if (
      expireDate.month.length === 2 &&
      expireDate.year.length === 2 &&
      !(
        Number(expireDate.year) === currentYear &&
        Number(expireDate.month) >= currentMonth
      )
    ) {
      setIsValid({
        ...isValid,
        month: false,
      });

      setErrorMessage(staticValidationMessages.invalidExpire);
      return false;
    }

    setIsValid({
      ...isValid,
      [key]: true,
    });

    setErrorMessage(null);
    return true;
  };

  return { isValid, errorMessage, validateCardExpireDate };
};

export default useCardExpireDateValidate;
