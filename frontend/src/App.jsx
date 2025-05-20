import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import axios from 'axios';

function App() {
  const [code, setCode] = useState("");
  const [file, setFile] = useState("main.py");
  const [project, setProject] = useState("sample_project");

  const handleGenerate = async () => {
    const res = await axios.post("http://localhost:8000/generate-code", {
      prompt: `Create a simple Flask REST API with /login and /logout`,
      language: "python"
    });
    setCode(res.data.code);
  };

  const handleSave = async () => {
    await axios.post("http://localhost:8000/write-file", {
      project: project,
      relative_path: `src/${file}`,
      content: code
    });
  };

  return (
    <div>
      <input placeholder="Project Name" value={project} onChange={e => setProject(e.target.value)} />
      <input placeholder="File Name" value={file} onChange={e => setFile(e.target.value)} />
      <button onClick={handleGenerate}>Generate Code</button>
      <button onClick={handleSave}>Save</button>
      <MonacoEditor
        height="600"
        language="python"
        value={code}
        onChange={setCode}
      />
    </div>
  );
}

export default App;
