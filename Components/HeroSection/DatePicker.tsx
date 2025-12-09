"use client";

import { DatePicker as HeroDatePicker } from "@nextui-org/date-picker";
import { parseDate } from "@internationalized/date";

interface DatePickerProps {
  label: string;
  date: string;
  onDateChange: (date: string) => void;
}

const DatePicker = ({ label, date, onDateChange }: DatePickerProps) => {
  const selectedDate = date ? parseDate(date) : undefined;

  return (
    <div className="relative">
      <HeroDatePicker
        label={label}
        value={selectedDate}
        onChange={(newDate) => {
          if (newDate) onDateChange(newDate.toString());
        }}
        className="w-full"
        classNames={{
          inputWrapper:
            "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-md",
          input: "text-white placeholder-white/60",
        }}
      />
    </div>
  );
};

export default DatePicker;
