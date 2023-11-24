"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function AccordionDemo() {
    return (
        <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[#8F9199] text-left ">Why should I record my ideas?</AccordionTrigger>
          <AccordionContent className="text-[#7D7D7D] text-left">
          Recording your ideas with blockchain technology creates a immutable record which links you and your idea. This provides a peace of mind during collaboration, feedback-seeking, and publishing, safeguarding your ownership.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-[#8F9199] text-left"> Is it safe to enter my personal details?</AccordionTrigger>
          <AccordionContent className="text-[#7D7D7D]">
          Your personal information - such as your date of birth and ID - doesn't leave your browser. Only a hash of it is stored along other post details on the blockchain, creating a verifiable link between your name, date of birth, and an official ID. This distinction also helps identify individuals with the same name and birthdate.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-[#8F9199] text-left">Why are there two seperate passwords?
</AccordionTrigger>
          <AccordionContent className="text-[#7D7D7D] text-left">
          Both passwords serve as encryption keys at different stages of publication. The Transaction Password serves as the initial encryption key, encrypting the initial posting process where the entire post is encrypted to secure authorship from block miners. This password is disclosed only after the initial data is successfully recorded and confirmed with at least 7 block confirmations. In contrast, the Identity Password remains concealed and exclusively serves to encrypt and verify the user's identity, which is used to verify authorship in case of a dispute.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  