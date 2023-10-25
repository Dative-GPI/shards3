<template>
    <div>
        Here is the components containing : {{ organisation?.label }}
        <div>
            Device : {{ device }}
        </div>
    </div>
</template>
  
<script lang="ts">
import { OrganisationDetails } from '@dative-gpi/foundation-shared-ui-domain'
import { onMounted, ref, defineComponent } from 'vue';
import { useOrganisation } from '@dative-gpi/foundation-shared-ui-services';
import { ServiceFactory } from '@dative-gpi/bones-ui';

import axios from 'axios';

export default defineComponent({
    setup() {
        const { get, entity: organisation } = useOrganisation();
        const device = ref('NOT mocked device :(');
        onMounted(async () => {
            get("testId");
        })

        return {
            organisation,
            device
        }
    }
});
</script>