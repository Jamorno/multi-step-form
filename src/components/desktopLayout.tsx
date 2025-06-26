'use client'

import Step1PersonalInfo from "./step/step1-personalInfo"
import Step2SelectYourPlan from "./step/step2-selectYourPlan"
import Step3PickAddOns from "./step/step3-pickAddOns"
import Step4FinishingUp from "./step/step4-finishingUp"
import Step5ThankYou from "./step/step5-thankYou"
import type { FormData } from "@/types/formStepProps"

interface desktopLayoutProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  isConfirm: boolean;
  setIsConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  stepLabels: {
    num: string;
    title: string;
  }[];
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

export default function DesktopLayout({ currentStep, setCurrentStep, formData, setFormData, isConfirm, setIsConfirm, stepLabels, error, setError }: desktopLayoutProps) {

  const handleNextButton = async () => {
    if (currentStep === 1) {
      const newError = {
        name: formData.name.trim() === "" ? "This filed is required" : "",
        email: formData.email.trim() === "" ? "This filed is required" : "",
        phoneNumber: formData.phoneNumber == "" ? "This filed is required" : ""
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
      <div className="flex justify-center items-center bg-[#f0f5ff] min-h-screen">
        <div className="bg-white flex rounded-xl w-[800px] min-h-[500px] p-4">

          {/* step indicator */}
          <div className="flex flex-col justify-start bg-desktop rounded-xl w-[275px] p-6">
            {stepLabels.map((item, index) => (
              <div key={index} className="flex items-center gap-4 py-2">
                {/* number in circle */}
                <div className={`${currentStep === index + 1 ? "bg-[#bfd3fe] text-[#02295a]" : "text-white border-white"} 
                                w-8 h-8 rounded-full border text-sm flex justify-center items-center`}>
                  {index + 1}
                </div>

                {/* text */}
                <div>
                  <p className="text-xs text-gray-400">{item.num}</p>
                  <p className="text-sm text-white font-semibold uppercase">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* form card */}
          <div className="flex flex-col justify-between w-full py-8 pl-20 pr-14">
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

            <div className="px-4">
              {/* button */}
              {!isConfirm && (
                <div className="mt-auto bg-white flex justify-between">
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
          </div>
        </div>
      </div>
    </section>
  )
}
