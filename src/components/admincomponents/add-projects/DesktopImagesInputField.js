import React, { useState } from "react";

const DesktopImagesInputField = () => {
  const [fieldNames, setFieldNames] = useState(["desktopImage1"]);

  return (
    <div className="add_field">
      <h2>Images For Desktop Devices</h2>
      <input type="file" name="title" required />

      <div className="mt-5">
        <button type="button" className="w-full bg-[black] py-3 rounded-lg">
          Add Another Image
        </button>
      </div>
    </div>
  );
};

export default DesktopImagesInputField;
