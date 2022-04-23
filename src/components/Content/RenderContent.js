import content from "./contentData";
import "./RenderContent.css";

export default function RenderContent(props) {
  let instructions = content[props.instruction_type];
  return (
    <div className="Instructions">
          <h1>{instructions.title}</h1>
          {instructions.steps.map ((el, i) =>
          <p key={i}>{el}</p>
          )}
    </div>
  );
}
