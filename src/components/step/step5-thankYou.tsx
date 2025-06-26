import Image from "next/image";

export default function Step5ThankYou() {
  return (
    <section className="mx-4">
      <div className="bg-white rounded-xl text-center p-6 py-20 md:p-0 md:py-20">
        <Image src="/images/icon-thank-you.svg" alt="thankYou" width={50} height={50} className="mx-auto pb-6" />
        <h1 className="text-2xl font-semibold pb-2">Thank you!</h1>
        <p className="text-sm text-gray-400 leading-6 md:text-md">
          Thanks for confirming your subscription! <br className="md:hidden" />
          We hope you have fun using our <br className="md:hidden" />
          platform. If you ever need support, <br className="md:hidden" />
          please feel free to email us at <br className="md:hidden" />
          support@loremgaming.com
        </p>
      </div>
    </section>
  )
}
