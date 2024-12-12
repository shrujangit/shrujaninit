import { CORE_CONCEPTS } from "../../data"
import "./CoreConcepts.css"
function CoreConcepts({image, title, description}) {
    return (
      <li>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p> 
      </li>
    );
}

export default function Core() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
      {CORE_CONCEPTS.map((x, i) => (
        <CoreConcepts key={i} {...x}/>
      ))}
      </ul>
    </section>
  )
}