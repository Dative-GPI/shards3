import { parseTemplate, type TemplateMatch } from './parseTemplate'
import * as sharedImportMap from '@dative-gpi/foundation-shared-components/importMap.json'
import * as coreImportMap from '@dative-gpi/foundation-core-components/importMap.json'
import * as adminImportMap from '@dative-gpi/foundation-admin-components/importMap.json'

export function getImports (source: string) {
  const { components, directives } = parseTemplate(source)
  const resolvedComponents: TemplateMatch[] = []
  const resolvedDirectives: TemplateMatch[] = []
  const imports = new Map<string, string[]>()

  if (components.size || directives.size) {
    components.forEach(component => {
      if (component.name in sharedImportMap.components) {
        resolvedComponents.push(component)
        addImport(imports, component.name, component.symbol, (sharedImportMap.components as any)[component.name].from)
      }
      else if (component.name in coreImportMap.components) {
        resolvedComponents.push(component)
        addImport(imports, component.name, component.symbol, (coreImportMap.components as any)[component.name].from)
      }
      else if (component.name in adminImportMap.components) {
        resolvedComponents.push(component)
        addImport(imports, component.name, component.symbol, (adminImportMap.components as any)[component.name].from)
      }
    })
    // directives.forEach(directive => {
    //   if (importMap.directives.includes(directive.name)) {
    //     resolvedDirectives.push(directive)
    //   }
    // })
  }

  // resolvedComponents.forEach(component => {
  //   addImport(imports, component.name, component.symbol, (sharedImportMap.components as any)[component.name].from)
  // })
  // resolvedDirectives.forEach(directive => {
  //   addImport(imports, directive.name, directive.symbol, 'foundation/lib/directives/index.mjs')
  // })

  return {
    imports,
    components: resolvedComponents,
    directives: resolvedDirectives,
  }
}

function addImport (imports: Map<string, string[]>, name: string, as: string, from: string) {
  if (!imports.has(from)) {
    imports.set(from, [])
  }
  imports.get(from)!.push(`${as}`)
}