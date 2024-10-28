"use client";

import * as React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "relative",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

export default function UploadButton() {
    const [fileContent, setFileContent] = React.useState("");
    const [isImage, setIsImage] = React.useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;

        if (target && target.files && target.files[0]) {
            const file = target.files[0];
            const reader = new FileReader();

            if (file.type.startsWith("image/")) {
                reader.onload = (e) => {
                    setFileContent(e.target?.result as string);
                    setIsImage(true);
                };
                reader.readAsDataURL(file);
            } else {
                reader.onload = (e) => {
                    setFileContent(e.target?.result as string);
                    setIsImage(false);
                };
                reader.readAsText(file);
            }
        }
    };

    return (
        <div className="w-full p-5 space-y-2">
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Upload File
                <VisuallyHiddenInput type="file" onChange={handleFileChange} multiple />
            </Button>

            {fileContent && isImage ? (
                <div className="w-full">
                    <h3>Image Preview:</h3>
                    <img
                        src={fileContent}
                        alt="Uploaded file preview"
                        className="w-1/2 h-auto mr-auto ml-auto rounded"
                    />
                </div>
            ) : (
                <div className="text-left">
                    <h3>File Content:</h3>
                    <pre className="bg-slate-200 p-4">{fileContent}</pre>
                </div>
            )}
        </div>
    );
}
