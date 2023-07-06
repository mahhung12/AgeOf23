import type { ChangeEvent, FC, FocusEvent } from "react";
import type { ControllerRenderProps } from "react-hook-form";

import { LENGTH_CONSTANTS } from "@/constant";
import { Input } from "antd";
import type { TextAreaProps } from "antd/lib/input/TextArea";

interface IFormTextarea {
  field?: ControllerRenderProps<any, string>;
  maxLength?: number;
  rows?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
}

const { MAX_LENGTH_INPUT, DEFAULT_TEXTAREA_ROWS } = LENGTH_CONSTANTS;

const Textarea: FC<TextAreaProps & IFormTextarea> = ({
  field,
  onChange,
  onBlur,
  maxLength = MAX_LENGTH_INPUT,
  rows = DEFAULT_TEXTAREA_ROWS,
  ...props
}) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    field?.onChange(e);
    if (onChange) onChange(e);
  };

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    if (e.target.value.trim() !== field?.value)
      field?.onChange(e.target.value.trim());

    field?.onBlur();
    if (onBlur) onBlur(e);
  };

  return (
    <Input.TextArea
      {...field}
      maxLength={maxLength}
      rows={rows}
      onChange={handleChange}
      onBlur={handleBlur}
      {...props}
    />
  );
};

export default Textarea;
