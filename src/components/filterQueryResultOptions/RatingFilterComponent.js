import { Rating } from "react-simple-star-rating";
import { Form } from "react-bootstrap";
import { Fragment } from "react";

const RatingFilterComponent = () => {
  return (
    <>
      <span className="fw-bold">Rating</span>
      {Array.from({ length: 5 }).map((_, idx) => (

           
        <Fragment key={idx}>
          {/* Fragment nos permite devolver multiples elementos */}
          <Form.Check type="checkbox" id={`check-api-${idx}`}>
            <Form.Check.Input type="checkbox" isValid />
            <Form.Check.Label style={{ cursor: "pointer" }}>
              {/* Iniciliza en 5 estrellas y va decreciendo */}
              <Rating readonly size={20} initialValue={5 - idx} /> 
            </Form.Check.Label>
          </Form.Check>
        </Fragment>
      ))}
    </>
  );
};

export default RatingFilterComponent;
