import Footer from "@/components/footer"
export default function Component () {
  return (
    <div>
    <section className='w-full  py-20 md:py-20 lg:py-32 xl:py-48'>
      <div className='container px-4 md:px-6'>
        <div className='space-y-8'>
          <div className='space-y-2'>
            <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
              Terms and Conditions
            </h1>
            <p className='text-zinc-500 md:text-lg dark:text-zinc-400'>
            Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
            </p>
          </div>
          <div className='space-y-6'>
            <div className='w-full max-w-xl space-y-2'>
              <h2 className='text-2xl font-bold'>Section 1: Security</h2>
              <p className='text-zinc-500 md:text-lg dark:text-zinc-400'>
              You are responsible for maintaining the security of your wallet, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your wallet, whether your account is with our website or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
            </div>
            <div className='w-full max-w-xl space-y-2'>
              <h2 className='text-2xl font-bold'>
                Section 2: Dispute Resolution
              </h2>
              <p className='text-zinc-500 md:text-lg dark:text-zinc-400'>
              In case of any disputes, users should use the records on the website directly as proof. Users are responsible for recording and verifying proofs. The platform may not provide legal assistance.
              </p>
            </div>
            <div className='w-full max-w-xl space-y-2'>
              <h2 className='text-2xl font-bold'>Section 3: Service Availability</h2>
              <p className='text-zinc-500 md:text-lg dark:text-zinc-400'>
              The platform reserves the right to discontinue the service at any time. In such an event, users can still retrieve their posts as all data is located on the blockchain.
              </p>
            </div>
            <div className='w-full max-w-xl space-y-2'>
              <h2 className='text-2xl font-bold'>
                Section 4: Limitation of Liability
              </h2>
              <p className='text-zinc-500 md:text-lg dark:text-zinc-400'>
              In no event shall we, nor our directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
              </p>
            </div>
            <div className='w-full max-w-xl space-y-2'>
              <h2 className='text-2xl font-bold'>
                Section 5: Changes
              </h2>
              <p className='text-zinc-500 md:text-lg dark:text-zinc-400'>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
<Footer/></div>
  )
}
