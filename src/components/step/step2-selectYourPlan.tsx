'use client'

import { FormStepProps } from "@/types/formStepProps"
import { plans } from "@/types/plan"
import Image from "next/image"

export default function Step2SelectYourPlan({ formData, setFormData }: FormStepProps) {
  return (
    <section className="mx-4">
      <div className="bg-white rounded-xl p-6 md:p-0">
        {/* header */}
        <div className="text-start space-y-2 md:space-y-2">
          <h1 className="text-2xl font-semibold md:text-3xl">Select your plan</h1>

          <p className="text-md text-gray-400">
            You have the option of monthly or <br className="md:hidden" />
            yearly billing.
          </p>
        </div>

        {/* plan */}
        <div className="flex flex-col gap-3 pt-4 md:flex-row md:pb-3">
          {plans.map((plan) => (
            <button type="button" key={plan.id} onClick={() => setFormData((prev) => ({ ...prev, plan: plan.id }))}
              className={`${formData.plan === plan.id ? "bg-[#f0f5ff] border-[#473dff]" : "border-gray-200"} border rounded-md p-3 flex items-center cursor-pointer md:flex-col md:items-start md:w-full md:p-3`}>
              <Image src={plan.icon} alt={plan.name} width={40} height={40} className="mr-3 md:w-[35px] md:pb-8" />
              <div>
                <h2 className="text-md font-semibold text-start md:text-sm">{plan.name}</h2>

                {/* promotion for mobile */}
                <p className="text-sm text-gray-400 text-start md:hidden">
                  {formData.billing === "monthly" ? plan.price.monthly : plan.price.yearly}
                  {formData.billing === "yearly" && (
                    <span className="text-xs text-red-500 px-2">({plan.promotion})</span>
                  )}
                </p>

                {/* promotion for desktop */}
                <p className="hidden md:flex flex-col text-xs text-gray-400 text-start">
                  {formData.billing === "monthly" ? plan.price.monthly : plan.price.yearly}
                  {formData.billing === "yearly" && (
                    <span className="text-xs text-red-500">({plan.promotion})</span>
                  )}
                </p>
              </div>
            </button>
          ))}
        </div>


        {/* billing toggle */}
        <div className="flex items-center justify-center gap-6 bg-[#f0f5ff] rounded-md text-sm font-semibold p-3 mt-4">
          <span className={`${formData.billing === "monthly" ? "text-black" : "text-gray-300"}`}>monthly</span>
          <label className="switch">
            <input type="checkbox" checked={formData.billing == "yearly"}
              onChange={() => setFormData((prev) => ({ ...prev, billing: prev.billing === "monthly" ? "yearly" : "monthly" }))} />
            <span className="slider round"></span>
          </label>

          <span className={`${formData.billing === "yearly" ? "text-black" : "text-gray-300"}`}>yearly</span>
        </div>
      </div>
    </section>
  )
}
