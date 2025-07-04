import React, { useEffect } from "react";
import useUpdateValue from "../../../hooks/update-project/useUpdateValue";

const EditWhatDoWeDo = () => {
  const whatWeDo = useUpdateValue((state) => state.whatWeDo);

  const initiaLizeValue = () => {
    const inputs = document.getElementsByClassName("whatDoWeDoEditBox");
    for (let i = 0; i < inputs.length; i++) {
      const singleInput = inputs[i];
      const value = whatWeDo[i];
      singleInput.value = value;
    }
  };
  const addAnotherInput = () => {
    const list = document.getElementsByClassName("whatDoWeDoEditUl")[0];
    const singleList = `
  <li>
    <input required class="w-full whatDoWeDoEditBox" />
  </li>
`;
    list.insertAdjacentHTML("beforeend", singleList);
  };
  useEffect(() => {
    initiaLizeValue();
  }, [whatWeDo]);

  return (
    <div className="form-group">
      <label>What We Do</label>
      <ul className="flex gap-5 flex-col whatDoWeDoEditUl">
        {whatWeDo &&
          whatWeDo?.map((data) => {
            return (
              <li>
                <input className="w-full whatDoWeDoEditBox" />
              </li>
            );
          })}
      </ul>
      <div>
        <button
          type="button"
          onClick={addAnotherInput}
          className="bg-[black] text-[white] w-full text-sm mt-5 py-3 rounded-md"
        >
          Add Work
        </button>
      </div>
    </div>
  );
};

export default EditWhatDoWeDo;
