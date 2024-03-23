import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
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
import { Label } from "@/components/ui/label";
import { Weight } from "lucide-react";
const Curriculum = () => {
  const { profile, setProfile } = useContext(DataContext);
  // const [years, setYears] = useState(0);
  const semesters = profile.years * 2;

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

            <Input disabled type="text" placeholder="MG University" />
            <Input
              disabled
              type="text"
              placeholder="Bharata Mata College,Thrikkakara"
            />
            <CourseSelect />

            <Input disabled type="text" value={`Semesters: ${semesters}`} />
            <Card
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "40px",
              }}
            >
              <CardDescription style={{ fontWeight: "bold" }}>
                First Semester
              </CardDescription>
              <Label htmlFor="course1">Course-1</Label>
              <Input disabled type="text" placeholder="course-1" />
              <Label htmlFor="course2">Course-2</Label>
              <Input disabled type="text" placeholder="course-2" />
              <Label htmlFor="course3">Course-3</Label>
              <Input disabled type="text" placeholder="course-3" />
              <Label htmlFor="course4">Course-4</Label>
              <Input disabled type="text" placeholder="course-4" />
              <Label htmlFor="course5">Course-5</Label>
              <Input disabled type="text" placeholder="course-5" />
            </Card>
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
