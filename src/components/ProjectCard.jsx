import data from '../data.json'
import './ProjectCard.css'

const ProjectCard = () => {
  return (
    <div className="gallery">
      {data.map((project) => {
        const { id, name, link, gitLink, poster } = project
        return (
          <div key={id} className="card-container">
            <a href={link} target="_blank">
              <img src={poster} alt={name} className="project-poster" />
            </a>
            <a href={link} target="_blank">
              <p className="project-name">
                {name.length > 33 ? `${name.substring(0, 33)}...` : name}
              </p>
            </a>
            <div className="buttons">
              <a href={link} target="_blank">
                <button className="live-link">Live Link</button>
              </a>
              <a href={gitLink} target="_blank">
                <button className="github-link">Github</button>
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default ProjectCard
