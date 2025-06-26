'use client'

import { useState } from "react";
import type { FormData } from "@/types/formStepProps";
import MobileLayout from "./mobileLayout";
import DesktopLayout from "./desktopLayout";

export default function MuliStepform() {

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    plan: "",
    billing: "monthly",
    addOn: [],
  })

  const [isConfirm, setIsconfirm] = useState(false);

  const stepLabels = [
    { num: "step 1", title: "Your Info" },
    { num: "step 2", title: "Select Plan" },
    { num: "step 3", title: "Add-ons" },
    { num: "step 4", title: "Summary" },
  ]

  const [error, setError] = useState({
    name: "",
    email: "",
    phoneNumber: ""
  })

  return (
    <>
      <div className="md:hidden">
        <MobileLayout
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}
          isConfirm={isConfirm}
          setIsConfirm={setIsconfirm}
          error={error}
          setError={setError}
        />
      </div>

      <div className="hidden md:block">
        <DesktopLayout
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}
          isConfirm={isConfirm}
          setIsConfirm={setIsconfirm}
          stepLabels={stepLabels}
          error={error}
          setError={setError}
        />
      </div>
    </>
  )
}
