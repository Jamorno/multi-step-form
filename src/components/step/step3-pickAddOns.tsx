'use client'

import { FormStepProps } from "@/types/formStepProps"
import { addOn } from "@/types/addons"

export default function Step3PickAddOns({ formData, setFormData }: FormStepProps) {

  const toggleAddon = (id: string) => {
    const isSelect = formData.addOn.includes(id);
    const updated = isSelect ? formData.addOn.filter((item) => item !== id) : [...formData.addOn, id];
    setFormData((prev) => ({ ...prev, addOn: updated }));
  }
  return (
    <section className="mx-4">
      <div className="bg-white rounded-xl p-6 md:p-0">
        {/* header */}
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl md:pb-2">Pick add-ons</h2>
          <p className="text-md text-gray-400">
            Add-ons help enhance your gaming <br className="md:hidden" />
            experience.
          </p>
        </div>

        {/* pick add on card */}
        <div className="flex flex-col gap-3 pt-4 md:pt-8">
          {addOn.map((addon) => (
            <label
              key={addon.id}
              className={`${formData.addOn.includes(addon.id) ? "bg-[#f0f5ff] border-[#473dff]" : "border-gray-200"} flex justify-between border rounded-md p-3 items-center gap-4 w-full cursor-pointer`}>

              <div className="flex items-center gap-4">
                <input type="checkbox" checked={formData.addOn.includes(addon.id)}
                  onChange={() => toggleAddon(addon.id)} className="w-5 h-5 accent-[#473dff]" />
                <div>
                  <h2 className="text-sm font-semibold">{addon.name}</h2>
                  <p className="text-xs text-gray-400">{addon.description}</p>
                </div>
              </div>

              <div className="text-sm font-semibold">
                {addon.price[formData.billing]}
              </div>
            </label>
          ))}
        </div>
      </div>
    </section>
  )
}
