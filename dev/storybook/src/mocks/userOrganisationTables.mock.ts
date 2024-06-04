import { UserOrganisationTableInfosDTO } from "@dative-gpi/foundation-core-domain/models";

export const USERORGANISATIONTABLES: UserOrganisationTableInfosDTO[] = [{
    id: "1",
    code: "groups1",
    mode: "table",
    rowsPerPage: 10,
    columns: [{
        columnId: "1",
        text: "Label",
        value: "label",
        index: 0,
        hidden: false,
        sortable: true,
        filterable: true
    }, {
        columnId: "2",
        text: "Code",
        value: "code",
        index: 1,
        hidden: false,
        sortable: true,
        filterable: true
    }, {
        columnId: "3",
        text: "Groups",
        value: "recursiveGroupsIds",
        index: 2,
        hidden: true,
        sortable: false,
        filterable: false
    }, {
        columnId: "4",
        text: "Devices",
        value: "recursiveDeviceOrganisationsIds",
        index: 3,
        hidden: true,
        sortable: false,
        filterable: false
    }, {
        columnId: "5",
        text: "Tags",
        value: "tags",
        index: 4,
        hidden: false,
        sortable: true,
        filterable: false
    }],
    sortByKey: null,
    sortByOrder: null
}];