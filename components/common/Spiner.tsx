"use client";

import { Spinner, type SpinnerProps } from "@/components/ui/kibo-ui/spinner";

const variants: SpinnerProps["variant"][] = [
  // "default",
  // "circle",
  // "pinwheel",
  // "circle-filled",
  // "ellipsis",
  // "ring",
  // "bars",
  "infinite",
];

const Spiner = () => (
  <div className="grid h-screen w-full  items-center justify-center gap-8">
    {variants.map((variant) => (
      <div
        className="flex  items-center justify-center"
        key={variant}
      >
        <Spinner key={variant} size={200} variant={variant } />
        
      </div>
    ))}
  </div>
);

export default Spiner;
