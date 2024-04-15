import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { CreateFolderDTO, FolderDetails, FolderDetailsDTO, FolderFilters, FolderInfos, FolderInfosDTO, UpdateFolderDTO } from "@dative-gpi/foundation-core-domain/models";

import { FOLDER_URL, FOLDERS_URL } from "../../config";

const FolderServiceFactory = new ServiceFactory<FolderDetailsDTO, FolderDetails>("folder", FolderDetails)
  .create(factory => factory.build(
    factory.addGet(FOLDER_URL),
    factory.addGetMany<FolderInfosDTO, FolderInfos, FolderFilters>(FOLDERS_URL, FolderInfos),
    factory.addCreate<CreateFolderDTO>(FOLDERS_URL),
    factory.addUpdate<UpdateFolderDTO>(FOLDER_URL),
    factory.addRemove(FOLDER_URL),
    factory.addNotify()
  ));

export const useFolder = ComposableFactory.get(FolderServiceFactory);
export const useFolders = ComposableFactory.getMany(FolderServiceFactory);
export const useCreateFolder = ComposableFactory.create(FolderServiceFactory);
export const useUpdateFolder = ComposableFactory.update(FolderServiceFactory);
export const useRemoveFolder = ComposableFactory.remove(FolderServiceFactory);

