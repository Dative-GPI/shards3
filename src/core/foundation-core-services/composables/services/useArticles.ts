import { ArticleDetails, ArticleDetailsDTO, ArticleFilters, ArticleInfos, ArticleInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { ARTICLES_URL, ARTICLE_URL } from "../../config/urls";

const ArticleServiceFactory = new ServiceFactory<ArticleDetailsDTO, ArticleDetails>("article", ArticleDetails).create(factory => factory.build(
    factory.addGet(ARTICLE_URL),
    factory.addGetMany<ArticleInfosDTO, ArticleInfos, ArticleFilters>(ARTICLES_URL, ArticleInfos),
    factory.addNotify()
));

export const useArticle = ComposableFactory.get(ArticleServiceFactory);
export const useArticles = ComposableFactory.getMany(ArticleServiceFactory);