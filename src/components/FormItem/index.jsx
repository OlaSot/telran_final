import React, { useState } from "react";
import FormButton from "../FormButton";
import FormInput from "../FormInput";
import { useForm } from "react-hook-form";
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import { clearCartAction } from "../../store/reducers/cartReducer";

export default function FormItem({
  text,
  btn_style,
  input_style_sale,
  onSubmitFunction,
}) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const mobile_phone_register = register("phone", {
    required: "*This field is required",
    pattern: {
      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      message: "*wrong format",
    },
  });

  const [showModal, setShowModal] = useState(false);

  const submit = (data) => {
    dispatch(clearCartAction());
    onSubmitFunction(data);
    reset();
    setShowModal(true);
  };

  return (
    <div className={s.main_container}>
      {showModal && (
        <div className={s.modal}>
          Successful order!
          <button onClick={() => setShowModal(false)}>x</button>
        </div>
      )}
      <form onSubmit={handleSubmit(submit)}>
        <FormInput
          input_style={input_style_sale}
          type="tel"
          placeholder="+49"
          name="phone"
          {...mobile_phone_register}
        />
        {errors.phone && <p className={s.req_text}>{errors.phone.message}</p>}
        <FormButton btn_style={btn_style}>{text}</FormButton>
      </form>
    </div>
  );
}
