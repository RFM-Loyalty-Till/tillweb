'use client'

import { Theme } from '@astryxdesign/core/theme'
import { neutralTheme } from '@astryxdesign/theme-neutral/built'

export function Providers({ children }: { children: React.ReactNode }) {
  return <Theme theme={neutralTheme}>{children}</Theme>
}
