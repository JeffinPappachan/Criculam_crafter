import React from "react";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
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
  const { profile, setProfile } = useContext(DataContext);
  const handleSelectChange = (event) => {
    setProfile({ ...profile, years: event.target.value });
  };
  return (
    <Select onChange={handleSelectChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Number of years" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>--Choose an option--</SelectLabel>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select> // Add closing tag for Select element
  );
}
