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
          <AccordionTrigger className="text-[#8F9199]  ">Why should i record my ideas?</AccordionTrigger>
          <AccordionContent className="text-[#7D7D7D]">
          Recording your ideas ensures secure sharing with others, with blockchain technology guaranteeing immutable records. This provides peace of mind for collaboration, feedback-seeking, and publishing, safeguarding your ownership.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-[#8F9199]">Is it safe to enter my personal details?</AccordionTrigger>
          <AccordionContent className="text-[#7D7D7D]">
          Your personal information, such as your date of birth and ID, doesn't leave your browser. Only a hash of it is stored on the blockchain, creating a verifiable link between your name, date of birth, and government-backed data. This distinction also helps identify individuals with the same name and birthdate.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-[#8F9199]">Why are there two different passwords?
</AccordionTrigger>
          <AccordionContent className="text-[#7D7D7D]">
          The Transaction Password serves as the initial encryption key, ensuring data security during the publishing process. This password is disclosed after data publication. In contrast, the Identity Password remains concealed and exclusively serves to encrypt and verify the user's identity.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  