'use client'

import { FormStepProps } from "@/types/formStepProps"

export default function Step1PersonalInfo({ formData, setFormData, error, setError }: FormStepProps) {
  return (
    <section className="mx-4">
      {/* header */}
      <div className="bg-white rounded-xl p-6 md:p-0">
        <div className="text-start space-y-2">
          <h1 className="text-2xl font-semibold md:text-3xl">Personal Info</h1>

          <p className="text-md text-gray-400 md:text-sm">
            Please provide your name, email <br className="md:hidden" />
            address, and phone number.
          </p>
        </div>

        {/* name */}
        <div className="pt-3 relative">
          <label className="text-sm">Name</label>
          <input
            type="text"
            placeholder="e.g.Stephen King"
            value={formData.name}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prev) => ({ ...prev, name: value }));
              if (value.trim() === "") {
                setError((prev) => ({ ...prev, name: "This field is required" }));
              } else if (error.name) {
                setError((prev) => ({ ...prev, name: "" }));
              }
            }}
            className={`${error.name ? "border-red-500" : "border-gray-300"} w-full h-[35px] border rounded-md px-2 focus:outline-none focus:ring-1 focus:ring-purple-300 cursor-pointer`}
          />
          {error.name && <p className="absolute right-2 top-4 text-red-500 text-xs">{error.name}</p>}
        </div>

        {/* email address */}
        <div className="py-3 relative">
          <label className="text-sm">Email Address</label>
          <input
            type="email"
            placeholder="e.g.StephenKing@gmail.com"
            value={formData.email}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prev) => ({ ...prev, email: value }));
              if (value.trim() === "") {
                setError((prev) => ({ ...prev, email: "This field is required" }));
              } else if (error.email) {
                setError((prev) => ({ ...prev, email: "" }));
              }
            }}
            className={`${error.email ? "border-red-500" : "border-gray-300"} w-full h-[35px] border rounded-md px-2 focus:outline-none focus:ring-1 focus:ring-purple-300 cursor-pointer`}
          />
          {error.email && <p className="absolute right-2 top-4 text-red-500 text-xs">{error.email}</p>}
        </div>

        {/* phone number */}
        <div className="pb-3 relative">
          <label className="text-sm">Phone Number</label>
          <input
            type="tel"
            placeholder="e.g.+123456789"
            value={formData.phoneNumber}
            onChange={(e) => {
              const value = e.target.value;
              setFormData((prev) => ({ ...prev, phoneNumber: value }));
              if (value.trim() === "") {
                setError((prev) => ({ ...prev, phoneNumber: "This field is required" }));
              } else if (error.phoneNumber) {
                setError((prev) => ({ ...prev, phoneNumber: "" }));
              }
            }}
            className={`${error.phoneNumber ? "border-red-500" : "border-gray-300"} w-full h-[35px] border rounded-md px-2 focus:outline-none focus:ring-1 focus:ring-purple-300 cursor-pointer`}
          />
          {error.phoneNumber && <p className="absolute right-2 top-1 text-red-500 text-xs">{error.phoneNumber}</p>}
        </div>
      </div>
    </section>
  )
}
