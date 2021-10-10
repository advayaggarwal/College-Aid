import axios from "axios";

import React, { Component } from "react";

class App extends Component {
    

  state = {
    selectedFile: null,
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    const formData = new FormData();

    formData.append("myFile", this.state.selectedFile);

    console.log(this.state.selectedFile);

    console.log(formData);
    axios.post("http://localhost:5000/upload", formData);
  };

  render() {
    return (
      <div className="bg-white py-8 px-0 mt-36 flex justify-center">
        <div>
          <h3 className="font-semibold text-lg">Upload File</h3>
          <div>
            <input type="file" onChange={this.onFileChange} />
            <button
              className="bg-green-400 px-6 py-3 mt-4 border-2 rounded-md"
              onClick={this.onFileUpload}
            >
              Upload!
            </button>
          </div>
          {/* {this.fileData()} */}
        </div>
      </div>
    );
  }
}

export default App;
