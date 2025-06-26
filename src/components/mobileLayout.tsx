'use client'

import React from "react"
import Step1PersonalInfo from "./step/step1-personalInfo"
import Step2SelectYourPlan from "./step/step2-selectYourPlan"
import Step3PickAddOns from "./step/step3-pickAddOns"
import Step4FinishingUp from "./step/step4-finishingUp"
import Step5ThankYou from "./step/step5-thankYou"
import { FormData } from "@/types/formStepProps"

interface mobileLayoutProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  isConfirm: boolean;
  setIsConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  error: {
    name: string;
    email: string;
    phoneNumber: string;
  };
  setError: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    phoneNumber: string;
  }>>;
}

export default function MobileLayout({ currentStep, setCurrentStep, formData, setFormData, isConfirm, setIsConfirm, error, setError }: mobileLayoutProps) {

  const handleNextButton = async () => {
    if (currentStep === 1) {
      const newError = {
        name: formData.name.trim() === "" ? "This field is required" : "",
        email: formData.email.trim() === "" ? "This field is required" : "",
        phoneNumber: formData.phoneNumber == "" ? "This field is required" : ""
      };

      setError(newError);

      const hasError = Object.values(newError).some((error) => error !== "");
      if (hasError) return;
    }

    if (currentStep === 4) {
      setIsConfirm(true);
    } else {
      setCurrentStep((prev) => prev + 1)
    }
  }

  return (
    <section>
      <div className="flex flex-col min-h-screen">
        {/* step indicator */}
        <div className="bg-mobile w-full h-[172px]">
          <div className="flex justify-center gap-4 py-8">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`${currentStep == step ? "bg-blue-300 text-[#02295a] border-[#02295a]" : "text-white border-white"} 
                        flex items-center justify-center w-8 h-8 rounded-full border text-sm font-semibold`}>
                {step}
              </div>
            ))}
          </div>

          {/* form card */}
          <div>
            {!isConfirm && currentStep === 1 && (
              <Step1PersonalInfo formData={formData} setFormData={setFormData} error={error} setError={setError} />
            )}

            {!isConfirm && currentStep === 2 && (
              <Step2SelectYourPlan formData={formData} setFormData={setFormData} error={error} setError={setError} />
            )}

            {!isConfirm && currentStep === 3 && (
              <Step3PickAddOns formData={formData} setFormData={setFormData} error={error} setError={setError} />
            )}

            {!isConfirm && currentStep === 4 && (
              <Step4FinishingUp formData={formData} />
            )}

            {isConfirm && <Step5ThankYou />}
          </div>
        </div>

        {/* button */}
        {!isConfirm && (
          <div className="mt-auto bg-white flex justify-between p-4">
            {/* back button */}
            {currentStep > 1 && (
              <button type="button" onClick={() => setCurrentStep((prev) => prev - 1)} className="text-gray-400 text-sm font-semibold cursor-pointer">
                Go back
              </button>
            )}

            {/* next and confirm button */}
            <button
              type="button"
              onClick={handleNextButton}
              className="bg-[#02295a] rounded-md text-sm text-white px-4 py-2 ml-auto hover:bg-[#473dff] cursor-pointer">
              {currentStep === 4 ? "Confirm" : "Next Step"}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
