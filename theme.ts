import { createSystem, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
    },

    tokens: {
      colors: {
        primary: {
          default: { value: "#D97706" },
          _dark: { value: "#FBBF24" },
        },
        secondary: {
          default: { value: "#F97316" },
          _dark: { value: "#FB923C" },
        },
        tertiary: {
          default: { value: "#EC4899" },
          _dark: { value: "#F472B6" },
        },
        fourth: {
          default: { value: "#2563EB" },
          _dark: { value: "#3B82F6" },
        },
        background: {
          default: { value: "#FFFFFF" },
          _dark: { value: "#1A202C" },
        },
        text: {
          default: { value: "#1A202C" },
          _dark: { value: "#F7FAFC" },
        },
        border: {
          default: { value: "#E2E8F0" },
          _dark: { value: "#4A5568" },
        },
        success: {
          default: { value: "#38A169" },
          _dark: { value: "#48BB78" },
        },
        warning: {
          default: { value: "#D69E2E" },
          _dark: { value: "#ECC94B" },
        },
        error: {
          default: { value: "#E53E3E" },
          _dark: { value: "#F56565" },
        },
        info: {
          default: { value: "#3182CE" },
          _dark: { value: "#4299E1" },
        },
      },
      fonts: {
        body: { value: "Inter, system-ui, sans-serif" },
        heading: { value: "Inter, Georgia, serif" },
        mono: { value: "Menlo, monospace" },
      },
      radii: {
        none: { value: "0" },
        sm: { value: "4px" },
        md: { value: "8px" },
        lg: { value: "16px" },
        full: { value: "9999px" },
      },
      shadows: {
        sm: { value: "0 1px 2px rgba(0, 0, 0, 0.05)" },
        md: { value: "0 4px 6px rgba(0, 0, 0, 0.1)" },
        lg: { value: "0 10px 15px rgba(0, 0, 0, 0.1)" },
        xl: { value: "0 20px 25px rgba(0, 0, 0, 0.15)" },
      },
    },
  },
});

const system = createSystem(config);
export default system;
