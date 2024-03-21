import { useOrganisationId } from "@dative-gpi/foundation-shared-services/composables";

const { organisationId } = useOrganisationId();

export function urlFactory(url: (orgId: string) => string) {
    return () => {
        if (!organisationId.value) {
            throw new Error("OrganisationId is not set");
        }
        return url(organisationId.value);
    }
}