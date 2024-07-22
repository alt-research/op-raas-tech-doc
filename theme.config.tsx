import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import EnvText from './components/EnvText';


const config: DocsThemeConfig = {
    logo: <span><EnvText envKey="networkName"/> Docs</span>,
  footer: {
    text: <EnvText envKey="networkName"/>,
  }
}

export default config
