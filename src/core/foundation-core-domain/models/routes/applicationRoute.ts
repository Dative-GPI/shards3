
import { UserDetails } from "@dative-gpi/foundation-shared-domain/models";

export interface ApplicationRoute {
    path: string,
    alias?: string,
    name?: string,
    components: {
        crumbs?: any;
        onboarding?: any;
        default: any;
        title?: any;
    }
    props?: {
        crumbs?: any
        default?: any,
        onboarding?: any,
        title?: any,
    },
    meta?: {
        showOnDrawer: boolean;

        drawerIcon?: string;
        drawerCategory?: string | ((this: any) => string);
        drawerLabel?: string | ((this: any) => string);

        exact?: boolean;
        disabled?: boolean;
        isAllowed?: (user: UserDetails) => boolean;
        defaultParams?: (params: any) => any;
        fullscreen?: boolean,
        rights?: string[],
        preserveQueryParams?: boolean
    }
}
