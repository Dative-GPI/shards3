import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import type { ColorBase} from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { ChartOrigin } from "@dative-gpi/foundation-core-domain/models";

const { $tr } = useTranslationsProvider();

export const chartOriginLabel = (type: ChartOrigin): string => {
  switch (type) {
    case ChartOrigin.None:             return $tr("ui.chart-type.none", "None");
    case ChartOrigin.Organisation:     return $tr("ui.chart-type.organisation", "Custom");
    case ChartOrigin.OrganisationType: return $tr("ui.chart-type.organisation-type", "Shared");
  }
};

export const chartOriginColor = (type: ChartOrigin): ColorBase => {
  switch (type) {
    case ChartOrigin.None:             return ColorEnum.Error;
    case ChartOrigin.Organisation:     return ColorEnum.Primary;
    case ChartOrigin.OrganisationType: return ColorEnum.Warning;
  }
};