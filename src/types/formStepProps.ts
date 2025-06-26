import React from "react";

export type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  plan: string;
  billing: "monthly" | "yearly";
  addOn: string[];
}

export type FormStepProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  error: {
    name: string;
    email: string;
    phoneNumber: string;
  };
  setError: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    phoneNumber: string;
  }>
  >;
}
