import React, { useState } from "react";
import { Card, CardContent, Button } from "@material-ui/core";
import { Formik, Form, Field, FormikConfig, FormikValues } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

const onSubmit = () => {};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("Este campo deve ser preenchido")
    .min(2, "O nome precisa ter mais de 1 letra"),
  lastName: Yup.string()
    .required("Este campo deve ser preenchido")
    .min(2, "O sobrenome precisa ter mais de 1 letra"),
  email: Yup.string()
    .email("Digite um email válido")
    .required("Este campo deve ser preenchido"),
});

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
        } else {
          setStep((step) => step + 1);
        }
      }}
    >
      <Form autoComplete="off">
        {currentChild}

        {step > 0 ? (
          <Button onClick={() => setStep((step) => step - 1)}>Voltar</Button>
        ) : null}
        <Button type="submit">{isLastStep() ? "Enviar" : "Próximo"}</Button>
      </Form>
    </Formik>
  );
}


export function FormikStep({ children, ...props }: FormikConfig<FormikValues>) {

} 

export default function Signup() {
  return (
    <Card>
      <CardContent>
        <FormikStepper
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <div>
            <Field name="firstName" component={TextField} label="First Name" />

            <Field name="lasName" component={TextField} label="Last Name" />
          </div>

          <div>
            <Field name="email" component={TextField} label="Email" />
          </div>
          <div>
            <Field name="phoneNumber" component={TextField} label="Telefone" />
          </div>
        </FormikStepper>
      </CardContent>
    </Card>
  );
}
