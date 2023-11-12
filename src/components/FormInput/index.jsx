import React, { forwardRef } from "react";
import s from "./index.module.css";

const FormInput = forwardRef(({ input_style, ...props }, ref) => {
  return (
    <div>
      <input {...props} className={s[input_style]} ref={ref} />
    </div>
  );
});

export default FormInput;
