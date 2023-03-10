import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";

export default function Textfield({
  label,
  slug,
  required,
  size,
  errortext,
  register,
  errors,
  rowcount,
  maxLength,
  errormaxLength,
  errorPattern,
  type,
  dropdownvalue,
  pattern,
  isedit,
}) {
  const alwaysup = { shrink: true };
  return (
    <div className="w-full">
      {type === "dropdown" ? (
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={dropdownvalue}
          fullWidth
          //   onChange={(event, value) =>
          //     slug === "category" ? setcategoryItem(value) : null
          //   }
          size={size}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              //   defaultValue="none"
              InputLabelProps={isedit ? alwaysup : null}
              {...register(slug, { required: required ? required : null })}
              error={
                Object.keys(errors).length > 0
                  ? Object.entries(errors)
                      ?.map(([key, value]) => ({ key, value }))
                      ?.find((item) => item.key === slug)?.value?.type ===
                    "required"
                  : null
              }
              helperText={
                Object.keys(errors).length > 0
                  ? Object.entries(errors)
                      ?.map(([key, value]) => ({ key, value }))
                      ?.find((item) => item.key === slug)?.value?.type ===
                    "required"
                    ? errortext
                    : null
                  : null
              }
            />
          )}
        />
      ) : (
        <TextField
          label={label}
          fullWidth
          id="outlined-size-small"
          // defaultValue={slug}
          multiline
          rows={rowcount}
          size={size}
          InputLabelProps={isedit ? alwaysup : null}
          {...register(slug, {
            required: required ? required : null,
            pattern: pattern.key !== "" ? pattern.key : null,
            maxLength: maxLength,
          })}
          error={
            Object.keys(errors).length > 0
              ? Object.entries(errors)
                  ?.map(([key, value]) => ({ key, value }))
                  ?.find((item) => item.key === slug)?.value?.type ===
                  "required" ||
                Object.entries(errors)
                  ?.map(([key, value]) => ({ key, value }))
                  ?.find((item) => item.key === slug)?.value?.type ===
                  "maxLength" ||
                Object.entries(errors)
                  ?.map(([key, value]) => ({ key, value }))
                  ?.find((item) => item.key === slug)?.value?.type === "pattern"
              : null
          }
          helperText={
            Object.keys(errors).length > 0
              ? Object.entries(errors)
                  ?.map(([key, value]) => ({ key, value }))
                  ?.find((item) => item.key === slug)?.value?.type ===
                "required"
                ? errortext
                : Object.entries(errors)
                    ?.map(([key, value]) => ({ key, value }))
                    ?.find((item) => item.key === slug)?.value?.type ===
                  "maxLength"
                ? errormaxLength
                : Object.entries(errors)
                    ?.map(([key, value]) => ({ key, value }))
                    ?.find((item) => item.key === slug)?.value?.type ===
                  "pattern"
                ? errorPattern
                : null
              : null
          }
        />
      )}
    </div>
  );
}
