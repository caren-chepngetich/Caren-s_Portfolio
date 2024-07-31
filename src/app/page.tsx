import About from "./about";
import Expertise from "./expertise";
import Navbar from "./navbar";
import Projects from "./projects";
import Skills from "./skills";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Expertise/>
     
      <Projects/>
      <Skills/>
      <About/>
    </main>
  );
}
