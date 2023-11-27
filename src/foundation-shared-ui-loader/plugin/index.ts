import { Plugin } from 'vite'

import { importPlugin } from './importPlugin'

function FoundationSharedAutoImport ( ): Plugin[] {
  const plugins: Plugin[] = []
    plugins.push(importPlugin())

  return plugins
}

module.exports = FoundationSharedAutoImport
export default FoundationSharedAutoImport