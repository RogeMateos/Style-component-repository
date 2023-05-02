import { StyledCard } from "./styles/Card.styled";

export default function Card({ item: { id, title, body, image } }) {
  return (
    /* The `StyledCard` component is being passed a prop called `layout`. The value of this prop is
  determined by the expression `id % 2 === 0 && "row-reverse"`. */
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
