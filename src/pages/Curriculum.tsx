import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputComponent } from "@/components/InputComponent";
import { CourseSelect } from "@/components/Courseselect"; // Import the CourseSelect component

const Curriculum = () => {
  const { profile, setProfile } = useContext(DataContext);
  return (
    <div className="w-screen p-20 flex flex-col items-center justify-center">
      <Card className="p-10 w-[90%] max-w-[500px]">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Curriculum Details</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center flex-col justify-center">
          <div className="flex flex-col gap-3">
            {/* <Input
              type="number"
              min="1900"
              max="2099"
              required
              placeholder="10th Passing year"
              onChange={(event) =>
                setProfile({
                  ...profile,
                  Tenpassingyear: event.target.value,
                })
              }
            /> */}
            <CourseSelect />{" "}
            {/* Replace <courseselect /> with <CourseSelect /> */}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button size="sm" variant="secondary" className="bg-green-800">
            <Link to="/profile/curriculum">Next</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
// Import the Syllabus component

export default Curriculum;
