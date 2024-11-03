"use client";
import React from "react";

export function TypographySmall({ children }: { children: React.ReactNode }) {
  return (
    <small className="text-lg font-medium leading-none justify-center items-center ml-2 mb-2">
      {children}
    </small>
  );
}
