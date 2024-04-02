import { useAppOrganisationId } from "../../composables";

const { organisationId } = useAppOrganisationId();

export function urlFactory(url: (orgId: string) => string) {
    return () => {
        if (!organisationId.value) {
            throw new Error("OrganisationId is not set");
        }
        return url(organisationId.value);
    }
}