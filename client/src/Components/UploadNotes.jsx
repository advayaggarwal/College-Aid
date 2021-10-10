// import React, { useState } from "react";
// import axios from "axios";
// import { set } from "mongoose";

// function UploadNotes() {
//   const [notes, setNotes] = useState({
//     email: "",
//     link: null,
//     description: "",
//   });

//   const [selectedFile, setSelectedFile] = useState(null);

//   function submitted(e) {
//     e.preventDefault();
//     console.log(notes);
//     axios.post("http://localhost:5000/upload", notes).then((response) => {
//       console.log(response.data);
//     });
//     setNotes({
//       email: "",
//       link: null,
//       description: "",
//     });
//   }

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setNotes((prevNotes) => {
//       return {
//         ...prevNotes,
//         [name]: value,
//       };
//     });
//   }

//   function onFileChange(event) {
//     // Update the state
//     setSelectedFile({ selectedFile: event.target.files[0] });
//   }

//   function onFileUpload() {
//     // Create an object of formData
//     const formData = new FormData();

//     // Update the formData object
//     formData.append(
//       "myFile",
//       this.state.selectedFile,
//       this.state.selectedFile.name
//     );

//     // Details of the uploaded file
//     console.log(this.state.selectedFile);

//     // Request made to the backend api
//     // Send formData object
//     axios.post("http://localhost:5000/upload", formData);
//   }

//   return (
//     <div className="bg-white py-8 px-0 mt-36 flex justify-center">
//       <form onSubmit={submitted} encType="multipart/form-data">
//         <div className="my-4">
//           <label className="font-semibold text-lg">Email</label>
//           <input
//             className="shadow border rounded w-96 py-2 px-3 flex mt-2"
//             name="email"
//             value={notes.email}
//             type="email"
//             placeholder="Email"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="my-4">
//           <label className="font-semibold text-lg">Description</label>
//           <input
//             className="shadow border rounded w-96 py-2 px-3 flex mt-2"
//             name="description"
//             value={notes.description.password}
//             type="description"
//             placeholder="Description"
//             onChange={handleChange}
//           />
//         </div>
//         <input type="file" id="myFile" name="file" onChange={onFileChange} />
//         <div className="flex justify-center">
//           <button
//             className="bg-green-400 px-6 py-3 mt-4 border-2 rounded-md"
//             onClick={onFileUpload}
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default UploadNotes;

import axios from "axios";

import React, { Component } from "react";

class App extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    console.log(formData);
    // Request made to the backend api
    // Send formData object
    axios.post("http://localhost:5000/upload", this.state.selectedFile);
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h1>GeeksforGeeks</h1>
        <h3>File Upload using React!</h3>
        <div>
          <input type="file" name="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Upload!</button>
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default App;
