import React, { useContext } from "react";
import { Upload, Form, message, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import FormContext from "../../../context";
import axe from "../../../../../helpers/axios";
import { assocPath } from "ramda";

const ImageGroupInput = ({ path, childPath }) => {
  const context = useContext(FormContext);
  const { setFieldsValue, getFieldValue } = context;

  const normFile = e => {
    console.log("uploadEvent", e);
    console.log("e && e.fileList", e && e.fileList);
    // console.log('e.response.filename', e.response.filename)
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const afterUploadFile = filename => {
    console.log("afterUploadFile", filename);
    const formVals = getFieldValue();
    const images = getFieldValue([...path, "imageGroup"]) || [];
    const someTing = assocPath([...path, "imageGroup"], [...images, filename])(formVals);
    setFieldsValue(someTing);
  };

  const uploadFile = event => {
    console.log("event", event);
    const { file, onProgress, onSuccess, onError } = event;
    const formData = new FormData();
    console.log("file", file);
    formData.append("file", file);
    axe
      .post("/admin/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: ({ total, loaded }) => {
          onProgress(
            { percent: parseFloat(Math.round((loaded / total) * 100).toFixed(2)) },
            file
          );
        },
      })
      .then(({ data: response }) => {
        message.success(`${response.filename} was successfully uploaded.`);
        afterUploadFile(response.filename);
        onSuccess(response, file);
      })
      .catch(onError);
  };

  const handleRemovePhoto = file => {
    console.log("file", file);
  };

  const name = [...childPath, "imageGroup"];

  return (
    <>
      <Form.Item noStyle>
        <Form.Item name={name} fieldKey={name} noStyle>
          <span />
        </Form.Item>
      </Form.Item>
      <Form.Item label='Fotky'>
        {/* <Form.Item valuePropName='fileList' getValueFromEvent={normFile} noStyle> */}
        <Upload.Dragger customRequest={uploadFile} multiple onRemove={handleRemovePhoto}>
          <p className='ant-upload-drag-icon'>
            <PlusOutlined className='ant-upload-drag-icon' />
          </p>
          <p className='ant-upload-text'>Klikněte nebo přeneste soubory sem.</p>
        </Upload.Dragger>
        {/* </Form.Item> */}
      </Form.Item>
    </>
  );
};

export default ImageGroupInput;
