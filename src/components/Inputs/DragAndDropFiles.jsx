import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FileUploader } from "react-drag-drop-files";
import { Typography } from '@mui/material';

const DragAndDropFiles = ({ handleChange, file }) => {
  const fileTypes = ["JPEG", "PNG", "GIF"];

  return (
    <div className="App">
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <Typography fontSize={14}>{file ? `File name: ${file[0].name}` : "No hay archivo en el área de carga"}</Typography>
    </div>
  );
}

DragAndDropFiles.propTypes = {}

export default DragAndDropFiles