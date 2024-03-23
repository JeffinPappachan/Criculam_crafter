import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

export function CourseSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Number of years" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Years</SelectLabel>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
