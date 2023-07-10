import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  PropsWithChildren,
  ReactNode,
} from "react";
import { Controller, useFormContext } from "react-hook-form";

import { ErrorMessage } from "@hookform/error-message";
import cx from "classnames";

const FormItem: FC<
  PropsWithChildren<{
    name: string;
    label?: string;
    labelClassName?: string;
    required?: boolean;
    labelTooltip?: ReactNode;
    helpText?: ReactNode;
    description?: ReactNode;
    containerClassName?: string;
    showError?: boolean;
    errorClassName?: string;
  }>
> = ({
  name,
  label,
  labelClassName,
  required,
  labelTooltip,
  helpText,
  description,
  containerClassName,
  showError = true,
  errorClassName,
  children,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={cx(containerClassName, "form-item", {
        "has-error": errors?.[name],
      })}
    >
      {label && (
        <div className={cx(labelClassName, "form-item__label")}>
          {label}
          {required ? <span> *</span> : ""} {labelTooltip ?? ""}
        </div>
      )}
      {description && (
        <div className={cx(labelClassName, "form-item__description")}>
          {description}
        </div>
      )}

      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // Element is HTML
          if (typeof child?.type === "string") {
            return child;
          }

          // Element is React Element
          return (
            <Controller
              name={name}
              control={control}
              render={({ field }) => {
                return cloneElement<any>(child, {
                  field,
                  ...props,
                });
              }}
            />
          );
        }
        return null;
      })}

      {showError && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <div
              className={cx(
                "mt-2 text-left text-sm text-[#ff5858] font-normal",
                errorClassName
              )}
            >
              {message}
            </div>
          )}
        />
      )}
    </div>
  );
};

export default FormItem;
