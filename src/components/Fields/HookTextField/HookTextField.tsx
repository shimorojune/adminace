import { TextField, TextFieldProps } from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type HookTextFieldProps<FormFieldValues> = {
  name: Path<FormFieldValues>;
} & Partial<TextFieldProps>;

export function HookTextField<FormFieldValues extends FieldValues>(
  props: HookTextFieldProps<FormFieldValues>
) {
  // PROPS
  const { name, ...fieldProps } = props;

  // HOOKS
  const formContext = useFormContext<FormFieldValues>();

  // DRAW
  return (
    <Controller
      name={name}
      control={formContext.control}
      render={({ field }) => {
        // FIELD
        const { ref, name, onBlur, onChange, value } = field;

        // DRAW
        return (
          <TextField
            id={`textFieldForm.${name}`}
            ref={ref}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            variant="filled"
            {...fieldProps}
          />
        );
      }}
    />
  );
}
