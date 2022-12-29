import React, { FC, useState, useRef } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };
  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("DRAG");
  };
  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("DROP");
  };

  return (
    <div>
      <input
        value={value}
        onChange={changeHandler}
        type="text"
        placeholder="Управляемый"
      />
      <input ref={inputRef} type="text" placeholder="Не управляемый" />
      <button onClick={clickHandler}>Press</button>
      <div
        draggable
        onDrag={dragHandler}
        style={{
          width: "200px",
          height: "200px",
          background: "red",
          marginTop: "20px",
        }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: "200px",
          height: "200px",
          marginTop: "20px",
          marginBottom: "20px",
          background: isDrag ? "blue" : "red",
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
