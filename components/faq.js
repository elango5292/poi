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
          By leveraging the immutability of blockchain technology, you can permanently link yourself to your ideas, providing steadfast ownership and peace of mind during collaboration, feedback, and publication.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-[#8F9199] text-left"> Is it safe to enter my personal details?</AccordionTrigger>
          <AccordionContent className="text-[#7D7D7D]">
          Your personal information, like date of birth and ID, never leaves your browser. Instead, only a secure hash is stored on the blockchain along with other post details. This creates a verifiable link between your name, date of birth, and official ID, while also protecting your privacy. This method also helps differentiate individuals with the same name and birthdate.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-[#8F9199] text-left">What is the purpose of having two separate passwords?
</AccordionTrigger>
          <AccordionContent className="text-[#7D7D7D] text-left">
          Both passwords serve as encryption keys at different stages of publication. The Transaction Password serves as the initial encryption key, encrypting the initial posting process where the entire post is encrypted to secure authorship from block miners. This password is disclosed only after the initial data is successfully recorded and confirmed with at least 7 block confirmations. In contrast, the Identity Password remains concealed and exclusively serves to encrypt and verify the user's identity, which is used to verify authorship in case of a dispute.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-[#8F9199] text-left">What is the cost to publish a post on your platform?
</AccordionTrigger>
          <AccordionContent className="text-[#7D7D7D] text-left">
          The cost of publishing a post on a blockchain depends on its length and the chosen platform. For 1000-word posts, Filecoin and Polygon offer the most economical options, typically costing around $5 for Filecoin and $20 for Polygon. Other blockchains like BNB and Avalanche fall in the $150 range. Publishing on Ethereum is generally not advisable due to its higher fees.
          </AccordionContent>
        </AccordionItem>
      </Accordion>                                                             
    )
  }
  