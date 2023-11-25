"use client"


import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"

export default function Component(props) {
  return (
    <Card key="1" className="border-0 bg-transparent">
      <CardContent className={props.colorr? "flex flex-col space-y-4 p-4 bg-transparent text-red-300":"flex flex-col space-y-4 p-4 bg-transparent text-[#DADADA]"}>
        <div className="flex items-start space-x-2">
          <Checkbox id="terms" className={props.colorr? "border-red-300" : "border-[#DADADA]"} checked={props.checked} onCheckedChange={props.setChecked}/>
          <div className="space-y-1 leading-none">
            <Label htmlFor="terms">I accept the terms and conditions</Label>
            <p className="text-xs">
              By proceeding, you agree to our {" "}
              <Link className="underline" href="/terms">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </CardContent>
    </Card>

  )
}

