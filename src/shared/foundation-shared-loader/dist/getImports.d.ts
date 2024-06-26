import { type TemplateMatch } from './parseTemplate';
export declare function getImports(source: string, skipShared: boolean, skipCore: boolean, skipAdmin: boolean, skipExtension: boolean): {
    imports: Map<string, string[]>;
    components: TemplateMatch[];
    directives: TemplateMatch[];
};
