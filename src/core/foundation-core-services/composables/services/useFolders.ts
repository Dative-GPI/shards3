import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { FolderDetails, FolderDetailsDTO, FolderFilters, FolderInfos, FolderInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import {  } from "../../config";
import { FOLDER_URL, FOLDERS_URL } from "../../config/urls/folders";

const FolderServiceFactory = new ServiceFactory<FolderDetailsDTO, FolderDetails>("folder", FolderDetails)
  .create(factory => factory.build(
    factory.addGet(FOLDER_URL),
    factory.addGetMany<FolderInfosDTO, FolderInfos, FolderFilters>(FOLDERS_URL, FolderInfos),
    factory.addNotify()
  ));

export const useFolder = ComposableFactory.get(FolderServiceFactory);
export const useFolders = ComposableFactory.getMany(FolderServiceFactory);

