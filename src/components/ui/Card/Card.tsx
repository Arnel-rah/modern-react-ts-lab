import  { type ReactNode } from "react";
import { cardStyles } from "./Card.styles";

interface CardProps { children: ReactNode; className?: string }
interface SubComponentProps { children: ReactNode; className?: string }

const CardHeader = ({ children, className }: SubComponentProps) => (
  <div className={`${cardStyles.header} ${className || ""}`}>
    {typeof children === "string" ? <h3 className={cardStyles.title}>{children}</h3> : children}
  </div>
);

const CardBody = ({ children, className }: SubComponentProps) => (
  <div className={`${cardStyles.body} ${className || ""}`}>{children}</div>
);

const CardFooter = ({ children, className }: SubComponentProps) => (
  <div className={`${cardStyles.footer} ${className || ""}`}>{children}</div>
);

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`${cardStyles.container} ${className || ""}`}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
