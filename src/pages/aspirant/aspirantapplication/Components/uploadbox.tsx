import { useRef, useState } from "react";
import { uploadFile } from "../../../../api/upload.api";
import "../style.css";

interface UploadBoxProps {
  enrollment: any;
  title: string;
  handleUrl: (url: string) => void;
}

function UploadBox({ title, handleUrl, enrollment }: UploadBoxProps) {
  const [uploading, setuploading] = useState(false);
  const [uploadfailed, setuploadfailed] = useState(false);
  const [file, setFile] = useState<File | { name: string } | null>({
    name: enrollment,
  });

  const [ , setUrl] = useState(enrollment);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
const handleFileChange = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  if (!e.target.files?.length) return;

  const selectedFile = e.target.files[0];

  setFile(selectedFile);
  setuploading(true);
  setuploadfailed(false);

  try {
    const cloudinaryResponse = await uploadFile(selectedFile);

    const url = cloudinaryResponse.secure_url;

    setUrl(url);
    console.log("URL BEFORE HANDLE:", url);
    handleUrl(url);

    setuploading(false);
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    setuploading(false);
    setuploadfailed(true);
  }
};


  return (
    <>
      <div className="upload-box" onClick={() => fileInputRef.current?.click()}>
        <div className="Upload-boxess-styling">
          <input
            hidden
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
          />

          <h3>{title}</h3>

          <p>
            {uploading ? (
              <>
                <span className="upload-spinner"></span>
                Uploading...
              </>
            ) : file ? (
              file.name
            ) : (
              "Click to upload"
            )}
          </p>
        </div>
      </div>

      {uploadfailed && (
        <div className="upload-failed-modal">
          <p className="upload-failed-message">
            Upload failed. Please try again.
          </p>

          <button onClick={() => setuploadfailed(false)}>Try again</button>
        </div>
      )}
    </>
  );
}

export default UploadBox;
