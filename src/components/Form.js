import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

function Form(props) {
  const { title, fields } = props.template;
  const onSubmit = props.onSubmit;
  const onChangeValue = props.onChangeValue;

  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const resetFields = () => {
    resetField("Name");
    resetField("Email");
    resetField("Password");
    resetField("Balance");
    resetField("Deposit");
  };

  const renderFields = (fields) => {
    return fields.map((field) => {
      let { title, type, name, validationProps } = field;

      switch (type) {
        case "text":
          return (
            <div key={name} className="form-group mb-4">
              <label htmlFor={name}>{title}</label>
              <input
                type={type}
                className="form-control"
                id={name}
                aria-describedby={name}
                onChange={(e) => onChangeValue("name", e.target.value)}
                {...register(title, {
                  required: true,
                  pattern: /^[a-z ,.'-]+$/i,
                })}
              />
              {errors[title] && (
                <small className="text-danger">{validationProps}</small>
              )}
            </div>
          );
        case "email":
          return (
            <div key={name} className="form-group mb-4">
              <label htmlFor={name}>{title}</label>
              <input
                type={type}
                className="form-control"
                id={name}
                aria-describedby={name}
                {...register(title, {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors[title] && (
                <small className="text-danger">{validationProps}</small>
              )}
            </div>
          );
        case "password":
          return (
            <div key={name} className="form-group mb-4">
              <label htmlFor={name}>{title}</label>
              <input
                type={type}
                className="form-control"
                id={name}
                aria-describedby={name}
                {...register(title, {
                  required: true,
                  pattern:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
                })}
              />
              {errors[title] && (
                <small className="text-danger">{validationProps}</small>
              )}
            </div>
          );

        case "number":
          return (
            <div key={name} className="form-group mb-4">
              <label htmlFor={name}>{title}</label>
              <input
                type={type}
                className="form-control"
                id={name}
                aria-describedby={name}
                {...register(title, {
                  required: true,
                  min: 0,
                  valueAsNumber: true,
                  validate: {
                    positive: (v) => parseInt(v) > 0,
                  },
                })}
              />
              {errors[title] && (
                <small className="text-danger">{validationProps}</small>
              )}
            </div>
          );
        default:
          return (
            <>
              <div>
                <h5>No data to show...</h5>
              </div>
            </>
          );
      }
    });
  };

  const renderSubmitButton = () => {
    switch (title) {
      case "Create Account":
        return (
          <Button
            type="submit"
            className="btn btn-primary w-100 mt-4"
            data-toggle="modal"
            data-target="#exampleModal"
            data-backdrop="static"
            data-keyboard="false"
            disabled={!isValid}
          >
            {title}
          </Button>
        );

      default:
        return (
          <Button
            type="submit"
            className="btn btn-primary w-100 mt-4"
            disabled={!isValid}
          >
            {title}
          </Button>
        );
    }
  };

  const handler = (data) => {
    onSubmit(data);
    resetFields();
  };

  console.log("Error :: ", errors);
  console.log("isValid :: ", isValid);

  return (
    <>
      <form
        className="needs-validation m-auto"
        onSubmit={handleSubmit(handler)}
        noValidate
      >
        {renderFields(fields)}
        {renderSubmitButton()}
      </form>
    </>
  );
}

export default Form;
