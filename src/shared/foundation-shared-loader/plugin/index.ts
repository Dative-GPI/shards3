import type { Plugin } from 'vite'

import { importPlugin } from './importPlugin'

function FoundationSharedAutoImport ({ 
  skipShared = false, 
  skipCore = false, 
  skipAdmin = false
} = {}): Plugin[] {
  const plugins: Plugin[] = []
    plugins.push(importPlugin(skipShared, skipCore, skipAdmin))

  return plugins
}

module.exports = FoundationSharedAutoImport
export default FoundationSharedAutoImport