import { type CreateTerminalDTO, TerminalDetails, type TerminalDetailsDTO, type TerminalFilters, TerminalInfos, type TerminalInfosDTO, type UpdateTerminalDTO } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { TERMINALS_URL, TERMINAL_URL } from "../../config/urls";

const TerminalServiceFactory = new ServiceFactory<TerminalDetailsDTO, TerminalDetails>("terminal", TerminalDetails).create(factory => factory.build(
  factory.addGetMany<TerminalInfosDTO, TerminalInfos, TerminalFilters>(TERMINALS_URL, TerminalInfos),
  factory.addCreate<CreateTerminalDTO>(TERMINALS_URL),
  factory.addUpdate<UpdateTerminalDTO>(TERMINAL_URL),
  factory.addRemove(TERMINAL_URL),
  factory.addNotify()
));

export const useTerminals = ComposableFactory.getMany(TerminalServiceFactory);
export const useCreateTerminal = ComposableFactory.create(TerminalServiceFactory);
export const useUpdateTerminal = ComposableFactory.update(TerminalServiceFactory);
export const useRemoveTerminal = ComposableFactory.remove(TerminalServiceFactory);