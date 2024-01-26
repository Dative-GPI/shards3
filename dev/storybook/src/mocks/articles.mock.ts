import { ArticleDetailsDTO } from "@dative-gpi/foundation-core-domain";

import { MANUFACTURERS } from "./manufacturers.mock";
import { IMAGES } from "./images.mock";

export const ARTICLES: ArticleDetailsDTO[] = [{
    id: "1",
    imageId: IMAGES[0].id,
    label: "Article 1",
    manufacturerId: MANUFACTURERS[0].id,
    familyId: "1",
    familyLabel: "Family 1",
    code: "article1",
    description: "Manufacturer's first article"
}];