import _ from "lodash";

import { CustomPropertyInfos, PropertyDataType } from "@dative-gpi/foundation-core-domain/models";
import { FSGridItem } from "@dative-gpi/foundation-shared-components/models";

export const CustomPropertyTools = {
  showCategory: (properties: CustomPropertyInfos[], category: string): boolean => {
    return properties.some(cp => cp.categoryLabel === category);
  },
  getExtraGridItems: (properties: CustomPropertyInfos[], category: string): FSGridItem[] => {
    return properties.filter(cp => cp.categoryLabel === category).map(cp => ({
      label: cp.label,
      code: `meta.${cp.code}`,
      value: "",
      hideDefault: cp.dataType === PropertyDataType.Boolean || cp.dataType === PropertyDataType.Icon
    }));
  },
  getExtraGrids: (properties: CustomPropertyInfos[], categories: string[]): { [key: string]: FSGridItem[] } => {
    const extraGrids: { [key: string]: FSGridItem[] } = {};
    const extraCategories = _.groupBy(properties.filter(cp => !categories.includes(cp.categoryLabel)), cp => cp.categoryLabel);
    for (const category in extraCategories) {
      extraGrids[category] = extraCategories[category].map(cp => ({
        label: cp.label,
        code: `meta.${cp.code}`,
        value: "",
        hideDefault: cp.dataType === PropertyDataType.Boolean || cp.dataType === PropertyDataType.Icon
      }));
    }
    return extraGrids;
  },
  getExtraFields: (properties: CustomPropertyInfos[], category: string): CustomPropertyInfos[] => {
    return properties.filter(cp => cp.categoryLabel === category && !cp.readOnlyCore);
  },
  getExtraCategories: (properties: CustomPropertyInfos[], categories: string[], sortFirst: string[]): { [key: string]: CustomPropertyInfos[] } => {
    const unordered =  _.groupBy(properties.filter(cp => !categories.includes(cp.categoryLabel) && !cp.readOnlyCore), cp => cp.categoryLabel);

    return Object.keys(unordered).sort((a: string, b: string) => {
      const aIndex = sortFirst.indexOf(a);
      const bIndex = sortFirst.indexOf(b);
      if ((aIndex !== -1 && bIndex !== -1) || aIndex === bIndex) {
        return 0;
      }
      return bIndex - aIndex;
    }).reduce((obj: { [key: string]: any }, key: string) => {
      obj[key] = unordered[key];
      return obj
    }, {});
  }
}