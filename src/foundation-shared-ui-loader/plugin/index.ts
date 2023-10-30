import { Plugin } from 'vite'

import { importPlugin } from './importPlugin'

function FoundationSharedAutoImport ( ): Plugin[] {

  console.log("Auto import foundation shared ui components.");

  const plugins: Plugin[] = []
    plugins.push(importPlugin())

  return plugins
}

module.exports = FoundationSharedAutoImport
export default FoundationSharedAutoImport