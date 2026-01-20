import Projects from "@/components/Projects";
import { getSortedProjectsData } from "@/lib/markdown";

export const metadata = {
  title: "Projects | Krit Visitstump",
};

export default function ProjectsPage() {
  // Fetch All Projects from Markdown
  const allProjects = getSortedProjectsData();

  return (
    <section className="projects-page">
      <Projects projects={allProjects} title="all projects" />
    </section>
  );
}