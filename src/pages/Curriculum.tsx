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
// Import the CourseSelect component
import { Label } from "@/components/ui/label";
import { Weight } from "lucide-react";
import { Subjectselection } from "@/components/Subjectselection";
const Curriculum = () => {
  const { profile, setProfile } = useContext(DataContext);
  // const [years, setYears] = useState(0);

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
              <Subjectselection />
              <Label htmlFor="course2">Course-2</Label>
              <Subjectselection />
              <Label htmlFor="course3">Course-3</Label>
              <Subjectselection />
              <Label htmlFor="course4">Course-4</Label>
              <Subjectselection />
              <Label htmlFor="course5">Course-5</Label>
              <Subjectselection />
            </Card>
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
                Second Semester
              </CardDescription>
              <Label htmlFor="course1">Course-1</Label>
              <Subjectselection />
              <Label htmlFor="course2">Course-2</Label>
              <Subjectselection />
              <Label htmlFor="course3">Course-3</Label>
              <Subjectselection />
              <Label htmlFor="course4">Course-4</Label>
              <Subjectselection />
              <Label htmlFor="course5">Course-5</Label>
              <Subjectselection />
            </Card>
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
                Third Semester
              </CardDescription>
              <Label htmlFor="course1">Course-1</Label>
              <Subjectselection />
              <Label htmlFor="course2">Course-2</Label>
              <Subjectselection />
              <Label htmlFor="course3">Course-3</Label>
              <Subjectselection />
              <Label htmlFor="course4">Course-4</Label>
              <Subjectselection />
              <Label htmlFor="course5">Course-5</Label>
              <Subjectselection />
            </Card>
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
                Fourth Semester
              </CardDescription>
              <Label htmlFor="course1">Course-1</Label>
              <Subjectselection />
              <Label htmlFor="course2">Course-2</Label>
              <Subjectselection />
              <Label htmlFor="course3">Course-3</Label>
              <Subjectselection />
              <Label htmlFor="course4">Course-4</Label>
              <Subjectselection />
              <Label htmlFor="course5">Course-5</Label>
              <Subjectselection />
            </Card>
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
                Fifth Semester
              </CardDescription>
              <Label htmlFor="course1">Course-1</Label>
              <Subjectselection />
              <Label htmlFor="course2">Course-2</Label>
              <Subjectselection />
              <Label htmlFor="course3">Course-3</Label>
              <Subjectselection />
              <Label htmlFor="course4">Course-4</Label>
              <Subjectselection />
              <Label htmlFor="course5">Course-5</Label>
              <Subjectselection />
            </Card>
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
                Sixth Semester
              </CardDescription>
              <Label htmlFor="course1">Course-1</Label>
              <Subjectselection />
              <Label htmlFor="course2">Course-2</Label>
              <Subjectselection />
              <Label htmlFor="course3">Course-3</Label>
              <Subjectselection />
              <Label htmlFor="course4">Course-4</Label>
              <Subjectselection />
              <Label htmlFor="course5">Course-5</Label>
              <Subjectselection />
            </Card>
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
                Seventh Semester
              </CardDescription>
              <Label htmlFor="course1">Course-1</Label>
              <Subjectselection />
              <Label htmlFor="course2">Course-2</Label>
              <Subjectselection />
              <Label htmlFor="course3">Course-3</Label>
              <Subjectselection />
              <Label htmlFor="course4">Course-4</Label>
              <Subjectselection />
              <Label htmlFor="course5">Course-5</Label>
              <Subjectselection />
            </Card>
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
                Eight Semester
              </CardDescription>
              <Label htmlFor="course1">Course-1</Label>
              <Subjectselection />
              <Label htmlFor="course2">Course-2</Label>
              <Subjectselection />
              <Label htmlFor="course3">Course-3</Label>
              <Subjectselection />
              <Label htmlFor="course4">Course-4</Label>
              <Subjectselection />
              <Label htmlFor="course5">Course-5</Label>
              <Subjectselection />
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
