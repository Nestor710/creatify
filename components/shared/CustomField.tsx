import React, { forwardRef } from "react";
import { Control } from "react-hook-form";
import { z } from "zod";

import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "../ui/form";

import { formSchema } from "./TransformationForm";

type CustomFieldProps = {
  control: Control<z.infer<typeof formSchema>> | undefined;
  render: (props: { field: any }) => React.ReactNode;
  name: keyof z.infer<typeof formSchema>;
  formLabel?: string;
  className?: string;
};

export const CustomField = ({
  control,
  render,
  name,
  formLabel,
  className,
}: CustomFieldProps) => {
  // Utilizamos forwardRef para el componente de renderizado interno
  const ForwardedRender = forwardRef(({ field }: { field: any }, ref) => {
    // Combinamos el ref con el campo original
    const fieldWithRef = { ...field, ref };
    return render({ field: fieldWithRef });
  });

  // Asignamos un displayName para ayudar con el debugging
  ForwardedRender.displayName = `ForwardedRender_${name}`;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {formLabel && <FormLabel>{formLabel}</FormLabel>}
          <FormControl>
            <ForwardedRender field={field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};