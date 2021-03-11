import React, { useState } from 'react';

export interface LeaseType {
  economicLife?: number;
  useEconomicLife?: string;
  name?: string;
  description?: string;
  classification?: string;
  prepaid?: string;
  interestRate?: number;
  deferredRent?: number;
  leaseIncentive?: number;
  initialDirectCosts?: number;
}

const useForm = (
  initialValues: LeaseType
): [
  LeaseType,
  (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void
] => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { id, value } = event.currentTarget;

    setValues({ ...values, [id]: value });
  };

  return [values, handleChange];
};

export { useForm };
