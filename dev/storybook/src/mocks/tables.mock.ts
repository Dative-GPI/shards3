import { TableInfosDTO } from "@dative-gpi/foundation-core-domain";

export const TABLES: TableInfosDTO[] = [{
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
    }],
    filters: [{
        key: "label",
        value: "First group",
        hidden: true
    }, {
        key: "label",
        value: "first",
        hidden: true
    }],
    sortBy: undefined
}];