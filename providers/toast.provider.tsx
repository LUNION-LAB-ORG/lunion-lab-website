"use client";

import { Toast } from "@heroui/react";

type ToastProviderProps = React.ComponentProps<typeof Toast.Provider>;

export default function ToastProvider(props: ToastProviderProps) {
  return <Toast.Provider {...props} />;
}
