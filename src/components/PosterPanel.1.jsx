import React, { useState } from "react";

export const PosterPanel = (prop) => {
  const [file, setfile] = useState(null);

  const onFileChange = (event) => setfile(event.target.files[0]);

  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append("photo", file, file.name);
    // console.log(file, formData.values());
    const response = await fetch(
      `https://localhost:3000/api/v1/interview/${prop.posterID}/poster`,
      {
        method: "POST",
        body: formData,
        mode: "cors",
        credentials: "include",
      }
    );
    const result = await response.json();
    if (result.status === "success") {
      prop.successnotify(result.message);
    } else {
      prop.errornotify(result.message);
    }
    await prop.setposterpanel(false);

    window.addEventListener("click", function (e) {
      removeposterpanel(e);
    });
    function removeposterpanel(e) {
      let model = document.getElementById("posterpanel");
      e.target == model ? prop.setposterpanel(false) : false;
    }
  };
  return (
    <>
      <div id="posterpanel">
        <div>
          <input type="file" name="photo" id="photo" onChange={onFileChange} />
          <button onClick={onFileUpload}>Upload</button>
        </div>
      </div>
    </>
  );
};
