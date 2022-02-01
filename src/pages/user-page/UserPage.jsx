import React, { useState, useEffect, useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./UserPage.css";
import TextError from "./../../components/text-error/TextError";

const initialValues = {
  name: "",
  email: "",
  birth: "",
};

const styledButton = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    cursor: 'pointer'
}

const requiredField = "Este campo deve ser preenchido.";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required(requiredField)
    .min(2, "Digite um nome válido."),
  email: Yup.string().email().required(requiredField),
  birth: Yup.date()
});

const onSubmit = (values, actions) => {
  console.log("Submit", values);
};

const UserPage = () => {
  const [cities, setCities] = useState("");
  const fileInputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response) => response.json())
      .then((result) => setCities(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="main-background">
      <Formik
        initialValues={initialValues}
        validateOnMount
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid }) => (
          <Form>
            <div className="container-form">
              <div className="container-user">
                <label htmlFor="name">
                  Nome completo <span className="required-field">*</span> :{" "}
                </label>
                <Field id="name" name="name" />
                <ErrorMessage name="name" component={TextError} />
              </div>
              <div className="container-user">
                <label htmlFor="email">
                  Email <span className="required-field">*</span> :{" "}
                </label>
                <Field name="email" id="email" />
                <ErrorMessage name="email" component={TextError} />
              </div>
              <div className="container-user">
                <label htmlFor="birth">
                  Data de nascimento <span className="required-field">*</span> :{" "}
                </label>
                <Field  type="date" name='birth' id='birth'/>
                <ErrorMessage name="email" component={TextError} />
              </div>
              <div>
                <button style={styledButton} onClick={(event) => {
                  event.preventDefault();
                }}>Add image</button>
                <input type="file" style={{display: 'none'}} ref={fileInputRef}/>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserPage;
