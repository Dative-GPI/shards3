export class RouteInfos {
    extensionId: string;
    showOnDrawer: boolean;
    drawerIcon: string;
    drawerCategory: string;
    drawerLabel: string;
    exact: boolean;
    path: string;
    uri: string;
    name: string;

    constructor(params: RouteInfosDTO) {
        this.extensionId = params.extensionId;
        this.showOnDrawer = params.showOnDrawer;
        this.drawerIcon = params.drawerIcon;
        this.drawerCategory = params.drawerCategory;
        this.drawerLabel = params.drawerLabel;
        this.exact = params.exact;
        this.path = params.path;
        this.uri = params.uri;
        this.name = params.name;
    }
}

export interface RouteInfosDTO {
    extensionId: string;
    showOnDrawer: boolean;
    drawerIcon: string;
    drawerCategory: string;
    drawerLabel: string;
    exact: boolean;
    path: string;
    uri: string;
    name: string;
}