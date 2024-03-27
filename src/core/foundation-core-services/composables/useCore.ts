import { ref } from "vue";

import { useOrganisationId } from "./useOrganisationId";

let called = false;

const ready = ref(false);

export async function useCore() {
	if (called) {
		return {
			ready
		};
	}

	called = true;

	const { ready: organisationIdReady } = useOrganisationId();

	await organisationIdReady;
	ready.value = true;

	return {
		ready
	};
}