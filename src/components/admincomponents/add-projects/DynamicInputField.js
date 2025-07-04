import React, { useState } from "react";

const DynamicInputField = (props) => {
  const [fieldNames, setFieldNames] = useState(["desktopImage1"]);
  const [numberOfInputs, setNumberOfInputs] = useState(1);

  const { addAnotherButtonName, inputType, name, title } = props;

  const handleAddInput = () => {
    const newNumberOfInput = numberOfInputs + 1;
    setNumberOfInputs(newNumberOfInput);
  };
  return (
    <div className="add_field">
      <h2>{title}</h2>
      <div className="flex flex-col gap-5">
        {Array.from({ length: numberOfInputs }).map((_, index) => {
          return (
            <div>
              <input
                placeholder="work"
                type={inputType}
                name={name + index}
                required
              />
            </div>
          );
        })}{" "}
      </div>
      <div className="mt-5">
        <button
          type="button"
          onClick={handleAddInput}
          className="w-full bg-[black] py-3 rounded-lg"
        >
          {addAnotherButtonName}
        </button>
      </div>
    </div>
  );
};

export default DynamicInputField;
