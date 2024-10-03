import React, { ChangeEvent, useRef, useState } from 'react';
import styles from './FetchComponents.module.css';
import { makeId } from './MakeIdComponent';
import DeleteIcon from '@material-ui/icons/Delete';

function FileComponent() {
  const [message, setMessage] = useState('');
  const [apiFile, setApiFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const updateFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setApiFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0];
      setApiFile(file);
    }
  };

  function handleClick(option: string) {
    const formData = new FormData();
    formData.append('file', apiFile as Blob);

    fetch(
      // `http://localhost:7007/api/proxy/openapi-frank-generator/${option}-file`,
      `http://localhost:8080/${option}-file`,
      {
        method: 'POST',
        body: formData,
      },
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Return the response as a Blob (binary data) instead of JSON
        return response.blob();
      })
      .then(blob => {
        // Create a download link for the zip file
        const objUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = objUrl;
        a.download = `${option}_${makeId(10)}.zip`; // Give a default filename to the downloaded file
        document.body.appendChild(a);
        a.click(); // Programmatically trigger a click to download the file
        window.URL.revokeObjectURL(objUrl); // Clean up the URL object after the download
        setMessage('File downloaded successfully!'); // Update the UI with success message
        setTimeout(() => setMessage(''), 3000); // Clear the message after 3 seconds
      })
      .catch(error => {
        setMessage(`Failed to download file: ${error.message}`); // Display error message in the UI
        setTimeout(() => setMessage(''), 3000); // Clear the message after 3 seconds
      });
  }

  return (
    <div className="container">
      <div
        className={styles.dropZone}
        onDragOver={handleDragOver}
        onDrop={handleFileDrop}
        onClick={handleFileUploadClick}
      >
        {apiFile ? (
          <div>
            {apiFile.name}
            <DeleteIcon
              onClick={(event) => {
                event.stopPropagation();
                setApiFile(null);
                if (fileInputRef.current) {
                  fileInputRef.current.value = '';
                }
              }}
            />
          </div>
        ) : (
          <span> Drag and Drop here </span>
        )}
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: 'none' }}
          onChange={updateFile}
        />
      </div>
      <div
        onClick={() => handleClick('receiver')}
        style={{
          textAlign: 'center',
          width: '200px',
          padding: '10px',
          border: '1px solid gray',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '10px',
        }}
      >
        Generate Receivers
      </div>
      <div
        onClick={() => handleClick('sender')}
        style={{
          textAlign: 'center',
          width: '200px',
          padding: '10px',
          border: '1px solid gray',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '10px',
        }}
      >
        Generate Senders
      </div>
      <div
        onClick={() => handleClick('xsd')}
        style={{
          textAlign: 'center',
          width: '200px',
          padding: '10px',
          border: '1px solid gray',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '10px',
        }}
      >
        Generate XSD Only
      </div>

      {message && <div>{message}</div>} {/* Display the message in the UI */}
    </div>
  );
}

export { FileComponent };