import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../components-style/PosterPanel.css";

export const PosterPanel = (prop) => {
  const [file, setfile] = useState(null);

  const toastId = React.useRef(null);
  const sendingnotify = (msg) => (toastId.current = toast.loading(msg));
  const dismiss = () => toast.dismiss(toastId.current);

  const onFileChange = (event) => setfile(event.target.files[0]);

  const onFileUpload = async () => {
    if (file === null) {
      prop.setposterpanel(false);
      return;
    }
    sendingnotify("Processing...");
    const formData = new FormData();
    formData.append("photo", file, file.name);
    // console.log(file, formData.values());
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/interview/${prop.posterID}/poster`,
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
      window.open(process.env.REACT_APP_API_URL + result.download, "_blank");
    } else {
      prop.errornotify(result.message);
    }
    prop.setposterpanel(false);
    dismiss();
  };
  function cloaseposterpanel() {
    prop.setposterpanel(false);
  }
  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <div id="posterpanel" onClick={cloaseposterpanel}></div>
      <div id="poster-main">
        <input type="file" name="photo" id="photo" onChange={onFileChange} />
        <button
          onClick={onFileUpload}
          class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M7 12V18H13V12H18l-8-8-8 8h5z" />
          </svg>
          <span>Upload</span>
        </button>
      </div>
    </>
  );
};
export default PosterPanel;
