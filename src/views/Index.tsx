import Divider from "@/components/Divider";
import Star from "@/components/Star";
import { Hero, About, Technologies } from "@/components/portfolio";
import Projects from "@/components/portfolio/Projects";
import Works from "@/components/portfolio/Works";
const App = () => {
  return (
    <>
      <div className="px-4 py-2">
        <Hero />
        <div className="group">
          <Divider id="about" label="About" />
          <About />
        </div>
        <div className="group">
          <Divider id="technologies" label="Technologies" />
          <Technologies />
        </div>
        <div className="group overflow-hidden">
          <Divider id="works" label="Works" />
          <Works />
        </div>
        <div className="group relative overflow-hidden">
          <Star className="absolute top-10 w-full text-primary-200/20 duration-1000 group-hover:rotate-45 md:left-1/2 md:size-1/3" />
          <Divider id="project" label="Project" />
          <Projects />
        </div>
      </div>
    </>
  );
};
export default App;
