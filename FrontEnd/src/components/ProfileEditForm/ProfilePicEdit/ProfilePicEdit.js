import { Box, Button, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import React from "react";

const ProfilePicEdit = () => {
  return (
    <Box>
      <Formik
        initialValues={{ file: null }}
        onSubmit={(values) => {
            console.log({ 
                  fileName: values.file.name, 
                  type: values.file.type,
                  size: `${values.file.size} bytes`
                })
            }}
      >
        {({ handleSubmit, setFieldValue }) => (
          <Form>
            <input
              id="file"
              name="file"
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={(event) => {
                setFieldValue("file", event.currentTarget.files[0]);
              }}
            />

            <Button onClick={handleSubmit}>Submit</Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ProfilePicEdit;
