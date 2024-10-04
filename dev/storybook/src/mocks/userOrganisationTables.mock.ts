import type { UserOrganisationTableInfosDTO } from "@dative-gpi/foundation-core-domain/models";

export const USERORGANISATIONTABLES: UserOrganisationTableInfosDTO[] = [
    {
        id: "1",
        code: "groups1",
        mode: "iterator",
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
        }, {
            columnId: "6",
            text: "InexistantValue",
            value: "none",
            index: 5,
            hidden: false,
            sortable: true,
            filterable: false
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "2",
        code: "locations1",
        mode: "iterator",
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
            text: "Icon",
            value: "icon",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: false
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "3",
        code: "devices1",
        mode: "iterator",
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
            text: "Image",
            value: "imageId",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "3",
            text: "Connectivity",
            value: "connectivity",
            index: 3,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "4",
            text: "Alerts",
            value: "alerts",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "5",
            text: "Status",
            value: "status",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: false
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "31",
        code: "devices2",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Code 1",
            value: "meta.code1",
            index: 0,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Code 2",
            value: "meta.code2",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Code 3",
            value: "meta.code3",
            index: 2,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "4",
            text: "Code 4",
            value: "meta.code4",
            index: 3,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "5",
            text: "Code 5",
            value: "meta.code5",
            index: 4,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "6",
            text: "Code 6",
            value: "meta.code6",
            index: 5,
            hidden: false,
            sortable: true,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "4",
        code: "users1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Name",
            value: "name",
            index: 0,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Email",
            value: "email",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Image",
            value: "imageId",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "3",
            text: "Email authorized",
            value: "allowEmails",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "4",
            text: "SMS Authorized",
            value: "allowSms",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: false
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "5",
        code: "users2",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Name",
            value: "name",
            index: 0,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Email",
            value: "email",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Validity",
            value: "validity",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "3",
            text: "Phone",
            value: "phoneNumber",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: false
        },],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "6",
        code: "dashboards1",
        mode: "iterator",
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
            text: "Icon",
            value: "icon",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Main dashboard",
            value: "main",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "7",
        code: "folders1",
        mode: "iterator",
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
            text: "Icon",
            value: "icon",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Main dashboard",
            value: "main",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "8",
        code: "authTokens1",
        mode: "iterator",
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
            text: "Creation Date",
            value: "creationDate",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Date Max",
            value: "dateMax",
            index: 2,
            hidden: false,
            sortable: true,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "9",
        code: "alerts1",
        mode: null,
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Criticity",
            value: "criticity",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "",
            value: "icon",
            index: 0,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "4",
            text: "Tags",
            value: "tags",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "5",
            text: "Groups",
            value: "groupByValues",
            index: 4,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "6",
            text: "Device Image",
            value: "deviceOrganisationImageId",
            index: 5,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "7",
            text: "Aknowledged",
            value: "acknowledged",
            index: 6,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "8",
            text: "Aknowledged by",
            value: "acknowledgingUserImageId",
            index: 7,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "9",
            text: "Aknowledged",
            value: "acknowledgingTimestamp",
            index: 8,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "10",
            text: "History",
            value: "history",
            index: 9,
            hidden: false,
            sortable: false,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "10",
        code: "charts1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Icon",
            value: "icon",
            index: 0,
            hidden: false,
            sortable: false,
            filterable: false
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "11",
        code: "dataCategories1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "12",
        code: "dataDefinitions1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "3",
            text: "Icon",
            value: "icon",
            index: 0,
            hidden: false,
            sortable: false,
            filterable: false
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "13",
        code: "models1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Image",
            value: "imageId",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "3",
            text: "Connectable",
            value: "connectable",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "14",
        code: "roleOrganisations1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Icon",
            value: "icon",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "3",
            text: "User Type",
            value: "userType",
            index: 3,
            hidden: false,
            sortable: false,
            filterable: true
        }, {
            columnId: "4",
            text: "Tags",
            value: "tags",
            index: 4,
            hidden: false,
            sortable: false,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "15",
        code: "scenarios1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Icon",
            value: "icon",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "3",
            text: "Model Label",
            value: "modelLabel",
            index: 3,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "4",
            text: "Tags",
            value: "tags",
            index: 4,
            hidden: false,
            sortable: false,
            filterable: true
        }],
        sortByKey: null,
        sortByOrder: null
    },
    {
        id: "16",
        code: "serviceAccountOrganisations1",
        mode: "iterator",
        rowsPerPage: 10,
        columns: [{
            columnId: "1",
            text: "Label",
            value: "label",
            index: 1,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "2",
            text: "Validity",
            value: "validity",
            index: 2,
            hidden: false,
            sortable: false,
            filterable: false
        }, {
            columnId: "3",
            text: "Image",
            value: "imageId",
            index: 3,
            hidden: false,
            sortable: true,
            filterable: true
        }, {
            columnId: "4",
            text: "Tags",
            value: "tags",
            index: 4,
            hidden: false,
            sortable: false,
            filterable: true
        },
        {
            columnId: "5",
            text: "User Type",
            value: "userType",
            index: 5,
            hidden: false,
            sortable: false,
            filterable: true
        }
        ],
        sortByKey: null,
        sortByOrder: null
    }
];