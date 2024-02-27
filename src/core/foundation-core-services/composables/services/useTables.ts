import { TableDetails, TableDetailsDTO, UpdateTableDTO } from "@dative-gpi/foundation-core-domain";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { TABLE_URL } from "../../config/urls";

const TableServiceFactory = new ServiceFactory<TableDetailsDTO, TableDetails>("table", TableDetails).create(factory => factory.build(
    factory.addGet(TABLE_URL),
    factory.addUpdate<UpdateTableDTO>(TABLE_URL),
    factory.addNotify()
));


export const useTable = ComposableFactory.get(TableServiceFactory);
export const useUpdateTable = ComposableFactory.update(TableServiceFactory);