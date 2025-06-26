'use client'

import { FormData } from "@/types/formStepProps"
import { plans } from "@/types/plan"
import { addOn } from "@/types/addons"

type Props = {
  formData: FormData;
}

export default function Step4FinishingUp({ formData }: Props) {

  const selectedPlan = plans.find(plan => plan.id === formData.plan)
  const selectedAddons = addOn.filter(add => formData.addOn.includes(add.id))

  const selectedPlanPrice = selectedPlan ? parseInt(selectedPlan.price[formData.billing].replace(/\D/g, "")) : 0;
  const totalPrice = selectedPlanPrice + selectedAddons.reduce((sum, addon) => {
    const addonPrice = parseInt(addon.price[formData.billing].replace(/\D/g, ""));
    return sum + addonPrice
  }, 0);

  return (
    <section className="mx-4 md:mx-0">
      {/* summary card */}
      <div className="bg-white rounded-xl p-6 md:p-0">
        {/* header */}
        <div className="mb-4 md:mb-8 md:space-y-2">
          <h2 className="text-2xl font-semibold md:text-3xl">Finishing up</h2>
          <p className="text-md text-gray-400">
            Double-check everything looks OK <br className="md:hidden" />
            before confirming.
          </p>
        </div>

        <div className="bg-[#f0f5ff] rounded-xl p-3">
          {/* plan */}
          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
            <div className="text-sm font-semibold">
              <h2>
                {selectedPlan?.name} ({formData.billing})
              </h2>
              <button type="button" className="text-gray-400 font-semibold underline hover:text-[#473dff] cursor-pointer">
                Change
              </button>
            </div>
            <span className="text-[#02295a] font-semibold">{selectedPlan?.price[formData.billing]}</span>
          </div>

          {/* add ons */}
          <div className="flex flex-col gap-2 pt-3">
            {selectedAddons.map(add => (
              <div key={add.id} className="flex justify-between text-sm">
                <span className="text-gray-400">{add.name}</span>
                <span className="text-[#02295a]">{add.price[formData.billing]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* total */}
        <div className="flex justify-between items-center px-3 pt-4">
          <p className="text-sm text-gray-400 font-semibold">Total (per {formData.billing === "monthly" ? "month" : "year"})</p>
          <p className="text-lg text-[#473dff] font-semibold">+${totalPrice}/{formData.billing === "monthly" ? "mo" : "yr"}</p>
        </div>
      </div>
    </section>
  )
}
