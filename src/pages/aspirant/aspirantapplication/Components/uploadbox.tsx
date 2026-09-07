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
  const [file, setFile] = useState<File | { name: string }>({
    name: enrollment,
  });

  const [ setUrl] = useState(enrollment);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];

      setFile(selectedFile);
      setuploading(true);

      const cloudinaryResponse = await uploadFile(selectedFile);

      setUrl(cloudinaryResponse.secure_url);
      handleUrl(cloudinaryResponse.secure_url);
      setuploading(false);
    }
  };

  return (
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
  );
}

export default UploadBox;
