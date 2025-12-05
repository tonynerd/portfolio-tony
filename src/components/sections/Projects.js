import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ProjectCard from '../ProjectCard';
import { projects } from '../../api/projects';

const Projects = () => (
  <section id="projects" className="py-32 relative">
    <div className="container mx-auto px-6">
      <SectionHeading subtitle="Estudos de caso onde a complexidade encontrou a usabilidade.">
        Projetos Selecionados
      </SectionHeading>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
