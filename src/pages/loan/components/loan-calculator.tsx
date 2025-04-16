/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Slider, Input, Card, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { CustomButton } from "@/components/shared/shared_customs";

export const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(75000);
  const [loanTenor, setLoanTenor] = useState(36);
  const interestRate = 9.5; // Fixed APR
  const maxLoan = 150000;
  const minLoan = 0;

  // Calculate EMI (Equated Monthly Installment)
  const monthlyRate = interestRate / 100 / 12;
  const emi =
    loanTenor > 0
      ? (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTenor))
      : 0;

  const loan_summary = [
    {
      title: "Estimated Loan Amount",
      value: `₵ ${loanAmount.toLocaleString()}`,
    },
    { title: "Interest Rate", value: `${interestRate}%` },
    {
      title: "Equated Monthly Installment (EMI)",
      value: `₵ ${emi.toFixed(2)}`,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-5 md:p-20 md:px-28 mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 ">
        {/* Loan Input Section */}
        <div className="flex-1 lg:border-r border-gray-300 md:pr-10 md:w-[365px]">
          <div className="mb-5">
            <p className="flex justify-between items-center font-medium">
              Loan Amount <span className="text-[#242424]">9.5% APR</span>
            </p>
            <Slider
              className="max-w-md "
              minValue={minLoan}
              maxValue={maxLoan}
              step={1000}
              value={loanAmount}
              classNames={{
                thumb: "bg-[#4C7F64]",
                track: ["bg-[#4C7F64]/20", "h-2"],
                filler: "bg-[#4C7F64]",
              }}
              onChange={(val: any) => setLoanAmount(val)}
            />
            <div className="flex gap-2 w-full items-center mt-3">
              <p className="text-xl font-bold text-white bg-[#4C7F64] py-2 px-3 rounded-lg">
                ₵
              </p>
              <Input
                type="number"
                value={loanAmount.toString()}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full text-lg bg-white border rounded-lg"
              />
            </div>
          </div>

          <div>
            <p className="font-medium">Loan Tenor (Months)</p>
            <Slider
              className="max-w-md"
              minValue={12}
              maxValue={60}
              classNames={{
                thumb: "bg-[#4C7F64]",
                track: ["bg-[#4C7F64]/20", "h-2"],
                filler: "bg-[#4C7F64]",
              }}
              step={12}
              marks={[12, 24, 36, 48, 60].map((val) => ({
                value: val,
                label: val.toString(),
              }))}
              value={loanTenor}
              onChange={(val: any) => setLoanTenor(val)}
            />
          </div>
        </div>

        {/* Loan Summary Card */}
        <Card className=" bg-[#4C7F64] text-white rounded-md flex flex-col justify-between md:w-[365px] ">
          {loan_summary.map((item, index) => (
            <>
              <p
                key={index}
                className=" p-4 flex items-center justify-between w-full"
              >
                <p className=" text-sm font-light text-[#FDFEFD] w-[50%]">
                  {item.title}
                </p>
                <p className="text-[$FDFEFD] font-medium text-base w-full flex justify-between">
                  <p></p>
                  <p className="">{item.value}</p>
                </p>
              </p>
              {index < loan_summary.length - 1 && (
                <Divider className="bg-[#acacac]  h-[0.08px]" />
              )}
            </>
          ))}
        </Card>
      </div>

      {/* Apply Button */}
      <div className="w-full flex justify-end mt-5 md:mt-10">
        <CustomButton className="border border-[#619B7D] rounded-full">
          Apply Now{" "}
          <Icon
            icon="material-symbols-light:arrow-right-alt-rounded"
            fontSize={30}
            className="text-[#619B7D]"
          />
        </CustomButton>
      </div>
    </div>
  );
};
