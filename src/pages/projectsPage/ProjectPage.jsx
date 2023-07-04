import { ProjectCard } from '../../components/projectCard/projectCard'
import { projects } from '../../data/data'
import './ProjectPage.css'

export const ProjectPage = () => {
  return (
    <div className='project-page page'>
      <p className="head">My Projects</p>
      <div className="project-container">
        {projects?.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  )
}
