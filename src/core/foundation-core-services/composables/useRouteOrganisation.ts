import type { RouteLocation } from "vue-router";

import { useAppOrganisationId } from "../composables"

export const useRouteOrganisation = () => {
    const { organisationId } = useAppOrganisationId();

    const $r = (route: Partial<RouteLocation>) => {
        if (route.params) {
            route.params.organisationId = organisationId.value!;
        }
        else {
            route.params = {
                organisationId: organisationId.value!
            }
        }

        return route;
    }

    return {
        $r
    }
}