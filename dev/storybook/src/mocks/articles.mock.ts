import type { ArticleDetailsDTO } from "@dative-gpi/foundation-core-domain/models";

import { MANUFACTURERS } from "./manufacturers.mock";

export const ARTICLES: ArticleDetailsDTO[] = [{
    id: "1",
    imageId: "1",
    label: "Article 1",
    manufacturerId: MANUFACTURERS[0].id,
    familyId: "1",
    familyLabel: "Family 1",
    code: "article1",
    description: "Manufacturer's first article"
}];