import { computed } from "vue";

import { useFoundationShared } from "@dative-gpi/foundation-shared-services/composables";

import { useAppOrganisationId } from "./app/useAppOrganisationId";

export function useFoundationCore() {

	const { ready: sharedReady } = useFoundationShared();
	const { ready: organisationReady } = useAppOrganisationId();

	const ready = computed(() => sharedReady.value && organisationReady.value);

	return {
		ready
	};
}