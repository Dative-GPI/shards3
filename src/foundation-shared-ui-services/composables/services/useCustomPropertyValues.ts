import { Ref, readonly, ref } from "vue";

import { CustomPropertyValueDetails, CustomPropertyValueDetailsDTO, CustomPropertyValueInfos, CustomPropertyValueInfosDTO, PropertyEntity } from "@dative-gpi/foundation-shared-ui-domain";
import { ServiceFactory } from "@dative-gpi/bones-ui";

import { CUSTOM_PROPERTY_VALUES_URL } from "../../config/urls";

const CustomPropertyValueServiceFactory = new ServiceFactory<CustomPropertyValueDetailsDTO, CustomPropertyValueDetails>("customPropertyValue", CustomPropertyValueDetails).create(factory => factory.build(
    factory.addNotify(() => ({
        getMany: async (entity: PropertyEntity, entityId: string, code: string): Promise<CustomPropertyValueInfos[]> => {
            const response = await ServiceFactory.http.get(CUSTOM_PROPERTY_VALUES_URL(entity, entityId, code));
            const result = response.data.map((dto: CustomPropertyValueInfosDTO) => new CustomPropertyValueInfos(dto));

            return result;
        }
    }))
));

export const useCustomPropertyValues = () => {
    const service = CustomPropertyValueServiceFactory();

    const fetching = ref(false);
    const fetched = ref<CustomPropertyValueInfos[] | null>(null) as Ref<CustomPropertyValueInfos[] | null>;

    const fetch = async (entity: PropertyEntity, entityId: string, code: string) => {
        fetching.value = true;
        try {
            fetched.value = await service.getMany(entity, entityId, code);
        }
        finally {
            fetching.value = false;
        }

        return readonly(fetched as Ref<CustomPropertyValueInfos[]>);
    }

    return {
        fetching: readonly(fetching),
        fetch,
        fetched: readonly(fetched)
    }
}