import StudentPersona from "@/components/SecondsPersona";
import PersonaDesign from "@/components/StudentPersona";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <PersonaDesign/>
    <div className="my-10"></div>
    <StudentPersona/>
    </div>

  );
}
