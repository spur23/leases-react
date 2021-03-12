import { RouteComponentProps } from "@reach/router";
import Payments from "../components/Payments";
import { usePayments } from "../hooks/usePayments";
import React, { useState } from "react";
import { generatePaymentStream } from "../helpers/utils";
import { InputTypes } from "./CreateLease";
import { useForm } from "../hooks/useForm";
import Input from "../components/input/Input";
import { calculatePresentValue, formatNumberDecimal } from "../helpers/utils";
import StyledPresentValueCalc from "./StyledPresentValueCalc";

const leaseInitialValues = {
  prepaid: "true",
  interestRate: 0,
};

const PresentValueCalculatorPage = (_props: RouteComponentProps) => {
  const [presentValue, setPresentValue] = useState(0);
  const [error, setError] = useState("");
  const [values, handleChange] = useForm(leaseInitialValues);

  const [
    payments,
    onChangePayments,
    onClickAddPayment,
    onClickDeletePayment,
  ] = usePayments();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (payments[0].startDate === "" && payments[0].endDate === "") {
      setError("Please enter a payment start and end date");

      return;
    } else if (payments[0].amount === 0) {
      setError("Please enter a payment amount");

      return;
    }

    const leasePayments = generatePaymentStream(payments).paymentStream();

    let prepaid: boolean;
    prepaid = values.prepaid === "true";

    setPresentValue(
      calculatePresentValue(leasePayments, values.interestRate / 100, prepaid)
    );
  };

  const inputObject = [
    {
      label: "Prepaid:",
      type: InputTypes.Select,
      name: "prepaid",
      id: "prepaid",
      value: values.prepaid,
      onChange: handleChange,
      options: [
        { text: "Yes", value: "true" },
        { text: "No", value: "false" },
      ],
      required: true,
    },

    {
      label: "Interest Rate:",
      type: InputTypes.Number,
      name: "interestRate",
      id: "interestRate",
      value: values.interestRate,
      onChange: handleChange,
      required: true,
    },
  ];

  return (
    <StyledPresentValueCalc>
      <h4>PV Calculator</h4>
      <form onSubmit={onSubmit}>
        <div className="presentvalue-container">
          <p>Calculated Present Value: </p>
          <p>{formatNumberDecimal(presentValue)}</p>
        </div>
        {inputObject.map((input, index) => (
          <div key={`${input}-${index}`} className="input-container">
            <Input config={input} />
          </div>
        ))}
        <div className="payments-container">
          <div className="error">
            <p>{error !== "" ? error : null}</p>
          </div>
          <Payments
            onChange={onChangePayments}
            onClickAdd={onClickAddPayment}
            onClickDelete={onClickDeletePayment}
            paymentsArr={payments}
          />
        </div>
        <div className="submit-button-container">
          <button type="submit" className="form-submit">
            Calculate PV
          </button>
        </div>
      </form>
    </StyledPresentValueCalc>
  );
};

export default PresentValueCalculatorPage;
