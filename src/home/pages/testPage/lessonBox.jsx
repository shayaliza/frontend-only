import React from "react";
import "./style.css";

function LessonBox({
  type,
  title,
  description,
  isLocked,
  icon,
  buttonText,
  buttonIcon,
}) {
  return (
    <div
      className={`lesson-box-container ${
        isLocked ? "locked" : ""
      } bg-neutral-1000 lg:self-center self-center mt-24 rounded-2xl`}
    >
      <div className="lesson-box-head flex justify-between px-4 py-3 align-center">
        <div className="lessons flex gap-3 align-center text-white">
          <div className="icon flex align-center">
            <i className={icon}></i>
          </div>
          <p className="flex align-center">{title}</p>
        </div>
      </div>
      <div className="lesson-box-content flex flex-col justify-between bg-neutral-1000 px-4 text-center text-white py-4">
        <p className="pb-4">{description}</p>
        <div className="lesson-box-button flex gap-2 justify-center">
          {isLocked ? (
            <img src="./assets/lock.png" alt="Locked" />
          ) : (
            <>
              <p>{buttonText}</p>
              <img src={buttonIcon} alt="Button Icon" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LessonBox;
