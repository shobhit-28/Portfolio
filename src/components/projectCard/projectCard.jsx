/* eslint-disable react/prop-types */
import './projectCard.css'

export const ProjectCard = ({project}) => {
  return (
    <div className='project-card'>
        <div className="contents">
            <p className="title">{project.title}</p>
        </div>
    </div>
  )
}
