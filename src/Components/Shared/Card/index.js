import React from "react";
import "./Card.css";
import { pencil } from "../../Image/Layouts";
const Card = ({
  style,
  children,
  className,
  subtitle,
  button_title,
  title,
  pencil_show = false,
}) => {
  return (
    <>
      <div className={`card ${className ? className : ""}`} style={style}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column justify-content-center">
              <div className="card-title">{title}</div>
              <div className="card-subtitle">{subtitle}</div>
            </div>
            <div>
              <button
                type="button"
                class="btn btn-outline-primary px-5 d-flex gap-3"
              >
                {pencil_show ? (
                  <span>
                    <img src={pencil} />
                  </span>
                ) : (
                  ""
                )}
                <span>{button_title}</span>
              </button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
