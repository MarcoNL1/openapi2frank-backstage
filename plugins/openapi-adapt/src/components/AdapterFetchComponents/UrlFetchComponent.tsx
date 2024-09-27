import React, { useState } from 'react';

function UrlComponent({ url }) {
  const [message, setMessage] = useState(''); // State to hold the response message

  function handleClick(option: string) {
    fetch(
      `http://localhost:7007/api/proxy/openapi-frank-generator/${option}-url`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ url }).toString(),
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
    <div style={{ textAlign: 'center' }}>
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
      {message && <div>{message}</div>} {/* Display the message in the UI */}
    </div>
  );

  function makeId(length: number) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
}

function MyForm({ url, setUrl }) {
  return (
    <form>
      <label>
        Enter the URL of an OpenAPI document:
        <input
          style={{
            padding: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
            marginBottom: '20px',
          }}
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
      </label>
    </form>
  );
}

export { UrlComponent, MyForm };
