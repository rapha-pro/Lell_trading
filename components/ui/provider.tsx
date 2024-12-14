"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import { system } from "@/theme/index"


export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system || defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
