"use client"

import {  useState } from "react"
import { ClockIcon } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"


export default function Calendrier() {

  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <div className="rounded-md border bg-black ">
        <Calendar
          mode="single"
          className="p-2"
          selected={date}
          onSelect={setDate}
          classNames={{
    day_button:
      "relative flex size-9 font-bold items-center justify-center rounded-md text-white " +
      "group-data-selected:bg-emerald-600 group-data-selected:text-white  " +
      "hover:not-in-data-selected:bg-emerald-100",
    weekday: "text-white font-bold",
      today: "bg-primary rounded-xl",
    // le petit rond de "aujourd'hui"
  }}

          
        />
        {/* <div className="border-t p-3">
          <div className="flex items-center gap-3">
            <Label htmlFor={id} className="text-xs">
              Enter time
            </Label>
            <div className="relative grow">
              <Input
                id={id}
                type="time"
                step="1"
                defaultValue="12:00:00"
                className="peer appearance-none ps-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                <ClockIcon size={16} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <p
        className="text-muted-foreground mt-4 text-center text-xs"
        role="region"
        aria-live="polite"
      >
        Time input -{" "}
        <a
          className="hover:text-foreground underline"
          href="https://daypicker.dev/"
          target="_blank"
          rel="noopener nofollow"
        >
          React DayPicker
        </a>
      </p> */}
    </div>
  )
}
