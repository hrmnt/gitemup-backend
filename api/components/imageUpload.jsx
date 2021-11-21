import React, { useState, useEffect } from "react";
import { DropZone, Box, Label, DropZoneItem } from "@admin-bro/design-system";

const ImageUpload = (props) => {
  const [files, setFiles] = useState([]);
  const { property, onChange, record } = props;

  const photoToUpload = record.params[property.name];

  const handleDropZoneChange = (files1) => {
    onChange(property.name, [...files, ...files1]);
  };

  useEffect(() => {
    const uploadedPhoto = Object.entries(record.params)
      .map((ss) => {
        if (ss[0].includes("images")) {
          return ss[1];
        }
      })
      .filter((s1) => s1 !== null && s1 !== undefined);
    setFiles(uploadedPhoto);
  }, []);

  const toggleItem = (item) => {
    const as = files.filter((s) => {
      return s !== item;
    });
    setFiles(as);
    onChange(property.name, [...as]);
  };

  return (
    <Box marginBottom="xxl">
      <Label>{property.label}</Label>
      <DropZone multiple onChange={handleDropZoneChange} />{" "}
      {files &&
        files.map((item) => {
          return (
            <DropZoneItem
              onRemove={() => toggleItem(item)}
              filename={item}
              src={`/api${item}`}
            />
          );
        })}{" "}
      {}
    </Box>
  );
};

export default ImageUpload;
