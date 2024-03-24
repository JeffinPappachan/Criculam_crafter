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

export function Subjectselection() {
  const { profile, setProfile } = useContext(DataContext);
  const handleSelectChange = (event) => {
    setProfile({ ...profile, years: event.target.value });
  };
  return (
    <Select onChange={handleSelectChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Avilable Subjects" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>--Choose an option--</SelectLabel>
          <SelectItem value="IEN1CC01">English 1-IEN1CC01</SelectItem>
          <SelectItem value="ICSC1CR2">Programming in C-ICSC1CR2</SelectItem>
          <SelectItem value="ICSC1CR3">
            Introduction to Computer-ICSC1CR3
          </SelectItem>
          <SelectItem value=" ICSC1CR4 ">
            Database Management Systems-ICSC1CR4
          </SelectItem>
          <SelectItem value=" ICSC1CM5">Mathematics I -ICSC1CM5</SelectItem>
          <SelectItem value="ICSC1CP6">Software Lab I-ICSC1CP6</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select> // Add closing tag for Select element
  );
}
