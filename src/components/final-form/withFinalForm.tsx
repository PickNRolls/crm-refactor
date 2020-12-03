import React, { ComponentType } from 'react';
import { Field, FieldProps, FieldRenderProps } from 'react-final-form';

const withFinalForm =
  <FV extends unknown,
  FR extends FieldRenderProps<FV, HTMLElement>>(
    WC: ComponentType<{
      name?: string;
      value?: FV;
      type?: string;
      error?: string;
      onChange?: (event: unknown) => void;
    }>,
  ) => (props: FieldProps<FV, FR>) => {
  return (
    <Field {...props}>
      {(fieldProps) => (
        <WC
          {...fieldProps}
          error={fieldProps.meta.submitError || fieldProps.meta.error}
          type={fieldProps.input.type}
          name={fieldProps.input.name}
          value={fieldProps.input.value}
          onChange={fieldProps.input.onChange}
        />
      )}
    </Field>
  );
};

export { withFinalForm };
