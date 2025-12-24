'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'
import { useEffect } from 'react'

// Initialize Cal.com embed on the client when the theme provider mounts.
// Uses dynamic import so build doesn't require the package to be installed at build-time.
function useCalInit() {
  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const mod = await import('@calcom/embed-react')
        if (!mounted) return
        const { getCalApi } = mod
        const namespace = process.env.NEXT_PUBLIC_CAL_NAMESPACE ?? 'smartgalaxylabs'
        const cal = await getCalApi({ namespace })
        // If the user supplied NEXT_PUBLIC_CAL_CONFIG it should be a JSON string
        const configFromEnv = process.env.NEXT_PUBLIC_CAL_CONFIG
        const config = configFromEnv ? JSON.parse(configFromEnv) : { hideEventTypeDetails: false, layout: 'month_view' }
        cal('ui', config)
      } catch (e) {
        // If the package isn't installed, fail silently so the app still runs.
        // You can install with `npm install @calcom/embed-react` or `yarn add @calcom/embed-react`.
        // console.warn('Cal embed not initialized', e)
      }
    })()

    return () => {
      mounted = false
    }
  }, [])
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useCalInit()

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
