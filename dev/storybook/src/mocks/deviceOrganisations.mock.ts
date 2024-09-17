import type { DeviceConnectivityDetailsDTO, DeviceOrganisationAlertDTO, DeviceOrganisationDetailsDTO, DeviceStatusDetailsDTO } from "@dative-gpi/foundation-core-domain/models";

import { ORGANISATIONS } from "./organisations.mock";
import { MANUFACTURERS } from "./manufacturers.mock";
import { MODELSTATUSES } from "./modelStatuses.mock";
import { ARTICLES } from "./articles.mock";
import { MODELS } from "./models.mock";

const ONLINE_PROCESSED = new Date();
const ONLINE_ENQUEUED = new Date(ONLINE_PROCESSED.getTime() - (5 * 60 * 1000));
const ONLINE_DEVICE = new Date(ONLINE_PROCESSED.getTime() - (10 * 60 * 1000));
const WAITING_PROCESSED = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
const WAITING_ENQUEUED = new Date(WAITING_PROCESSED.getTime() - (5 * 60 * 1000));
const WAITING_DEVICE = new Date(WAITING_PROCESSED.getTime() - (5 * 60 * 1000));
const OFFLINE_PROCESSED = new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000));
const OFFLINE_ENQUEUED = new Date(OFFLINE_PROCESSED.getTime() - (5 * 60 * 1000));
const OFFLINE_DEVICE = new Date(OFFLINE_PROCESSED.getTime() - (10 * 60 * 1000));

const DEVICECONNECTIVITIES: DeviceConnectivityDetailsDTO[] = [{
    id: "1",
    sourceTimestamp: ONLINE_DEVICE.toISOString(),
    enqueuedTimestamp: ONLINE_ENQUEUED.toISOString(),
    processedTimestamp: ONLINE_PROCESSED.toISOString(),
    status: 1,
    icon: "mdi-wifi",
    color: "#33FF33"
}, {
    id: "2",
    sourceTimestamp: WAITING_DEVICE.toISOString(),
    enqueuedTimestamp: WAITING_ENQUEUED.toISOString(),
    processedTimestamp: WAITING_PROCESSED.toISOString(),
    status: 2,
    icon: "mdi-wifi",
    color: "#999933"
}, {
    id: "3",
    sourceTimestamp: OFFLINE_DEVICE.toISOString(),
    enqueuedTimestamp: OFFLINE_ENQUEUED.toISOString(),
    processedTimestamp: OFFLINE_PROCESSED.toISOString(),
    status: 4,
    icon: "mdi-wifi",
    color: "#FF3333"
}, {
    id: "4",
    sourceTimestamp: "0001-01-01T00:00:00",
    enqueuedTimestamp: "0001-01-01T00:00:00",
    processedTimestamp: "0001-01-01T00:00:00",
    status: 0,
    icon: "",
    color: ""
}];
  
const DEVICEALERTS: DeviceOrganisationAlertDTO[] = [{
    id: "3",
    sourceTimestamp: OFFLINE_DEVICE.toISOString(),
    enqueuedTimestamp: OFFLINE_ENQUEUED.toISOString(),
    label: "Critical error",
    status: 3,
    criticity: 3
}, {
    id: "3",
    sourceTimestamp: OFFLINE_DEVICE.toISOString(),
    enqueuedTimestamp: OFFLINE_ENQUEUED.toISOString(),
    label: "Warning",
    status: 3,
    criticity: 2
}, {
    id: "3",
    sourceTimestamp: OFFLINE_DEVICE.toISOString(),
    enqueuedTimestamp: OFFLINE_ENQUEUED.toISOString(),
    label: "Information",
    status: 3,
    criticity: 1
}];

const DEVICESTATUS: DeviceStatusDetailsDTO[] = [{
    id: "1",
    statuses: [{
        modelStatusId: MODELSTATUSES[0].id,
        statusGroups: [{
            sourceTimestamp: ONLINE_DEVICE.toISOString(),
            enqueuedTimestamp: ONLINE_ENQUEUED.toISOString(),
            processedTimestamp: ONLINE_PROCESSED.toISOString(),
            groupByValue: null,
            value: "On",
            unit: null,
            label: "Status",
            icon: "mdi-power-standby",
            color: "#33FF33"
        }]
    }, {
        modelStatusId: MODELSTATUSES[1].id,
        statusGroups: [{
            sourceTimestamp: ONLINE_DEVICE.toISOString(),
            enqueuedTimestamp: ONLINE_ENQUEUED.toISOString(),
            processedTimestamp: ONLINE_PROCESSED.toISOString(),
            groupByValue: "1",
            value: "240",
            unit: "°C",
            label: "Temperature",
            icon: "mdi-thermometer",
            color: "#FF3333"
        }, {
            sourceTimestamp: ONLINE_DEVICE.toISOString(),
            enqueuedTimestamp: ONLINE_ENQUEUED.toISOString(),
            processedTimestamp: ONLINE_PROCESSED.toISOString(),
            groupByValue: "2",
            value: "240",
            unit: "°C",
            label: "Temperature",
            icon: "mdi-thermometer",
            color: "#FF3333"
        }, {
            sourceTimestamp: ONLINE_DEVICE.toISOString(),
            enqueuedTimestamp: ONLINE_ENQUEUED.toISOString(),
            processedTimestamp: ONLINE_PROCESSED.toISOString(),
            groupByValue: "3",
            value: "120",
            unit: "°C",
            label: "Temperature",
            icon: "mdi-thermometer",
            color: "#999933"
        }, {
            sourceTimestamp: ONLINE_DEVICE.toISOString(),
            enqueuedTimestamp: ONLINE_ENQUEUED.toISOString(),
            processedTimestamp: ONLINE_PROCESSED.toISOString(),
            groupByValue: "4",
            value: "120",
            unit: "°C",
            label: "Temperature",
            icon: "mdi-thermometer",
            color: "#999933"
        }]
    }, {
        modelStatusId: MODELSTATUSES[2].id,
        statusGroups: [{
            sourceTimestamp: ONLINE_DEVICE.toISOString(),
            enqueuedTimestamp: ONLINE_ENQUEUED.toISOString(),
            processedTimestamp: ONLINE_PROCESSED.toISOString(),
            groupByValue: "1",
            value: "2400",
            unit: "W",
            label: "Energy",
            icon: "mdi-power-plug",
            color: "#33FF33"
        }, {
            sourceTimestamp: ONLINE_DEVICE.toISOString(),
            enqueuedTimestamp: ONLINE_ENQUEUED.toISOString(),
            processedTimestamp: ONLINE_PROCESSED.toISOString(),
            groupByValue: "2",
            value: "2400",
            unit: "W",
            label: "Energy",
            icon: "mdi-power-plug",
            color: "#33FF33"
        }, {
            sourceTimestamp: ONLINE_DEVICE.toISOString(),
            enqueuedTimestamp: ONLINE_ENQUEUED.toISOString(),
            processedTimestamp: ONLINE_PROCESSED.toISOString(),
            groupByValue: "3",
            value: "800",
            unit: "W",
            label: "Energy",
            icon: "mdi-power-plug",
            color: "#999933"
        }, {
            sourceTimestamp: ONLINE_DEVICE.toISOString(),
            enqueuedTimestamp: ONLINE_ENQUEUED.toISOString(),
            processedTimestamp: ONLINE_PROCESSED.toISOString(),
            groupByValue: "4",
            value: "800",
            unit: "W",
            label: "Energy",
            icon: "mdi-power-plug",
            color: "#999933"
        }]
    }]
}, {
    id: "2",
    statuses: [{
        modelStatusId: MODELSTATUSES[0].id,
        statusGroups: [{
            sourceTimestamp: ONLINE_DEVICE.toISOString(),
            enqueuedTimestamp: ONLINE_ENQUEUED.toISOString(),
            processedTimestamp: ONLINE_PROCESSED.toISOString(),
            groupByValue: null,
            value: "Stand-by",
            unit: null,
            label: "Status",
            icon: "mdi-power-standby",
            color: "#999933"
        }]
    }]
}, {
    id: "3",
    statuses: []
}];

export const DEVICEORGANISATIONS: DeviceOrganisationDetailsDTO[] = [{
    id: "1",
    deviceId: "1",
    manufacturerId: MANUFACTURERS[0].id,
    manufacturerLabel: MANUFACTURERS[0].label,
    articleId: ARTICLES[0].id,
    articleLabel: ARTICLES[0].label,
    modelId: MODELS[0].id,
    modelLabel: MODELS[0].label,
    ownerId: null,
    ownerLabel: null,
    organisationId: ORGANISATIONS[0].id,
    managerId: null,
    managerName: null,
    locationId: null,
    locationLabel: null,
    locationAddress: null,
    groupId: null,
    groupLabel: null,
    groupIcon: null,
    label: "Device 1",
    code: "980001",
    imageId: "1",
    tags: [],
    unrestricted: true,
    online: 1,
    meta: {},
    modelStatuses: MODELSTATUSES.slice(),
    status: DEVICESTATUS[0],
    connectivity: DEVICECONNECTIVITIES[0],
    alerts: [],
    worstAlert: null,
    articleCode: ARTICLES[0].code,
    familyId: ARTICLES[0].familyId,
    familyLabel: ARTICLES[0].familyLabel,
    description: "Organisation's first device",
    options: [],
    path: []
}, {
    id: "2",
    deviceId: "2",
    manufacturerId: MANUFACTURERS[0].id,
    manufacturerLabel: MANUFACTURERS[0].label,
    articleId: ARTICLES[0].id,
    articleLabel: ARTICLES[0].label,
    modelId: MODELS[0].id,
    modelLabel: MODELS[0].label,
    ownerId: null,
    ownerLabel: null,
    organisationId: ORGANISATIONS[0].id,
    managerId: null,
    managerName: null,
    locationId: null,
    locationLabel: null,
    locationAddress: null,
    groupId: null,
    groupLabel: null,
    groupIcon: null,
    label: "Device 2 with a very very very very long name",
    code: "980002",
    imageId: "1",
    tags: [],
    unrestricted: true,
    online: 2,
    meta: { "code1": "1", "code2": "false", "code3": "You are a bold one", "code4": "172670000000", "code5": "mdi-account" },
    modelStatuses: MODELSTATUSES.slice(),
    status: DEVICESTATUS[1],
    connectivity: DEVICECONNECTIVITIES[1],
    alerts: [],
    worstAlert: null,
    articleCode: ARTICLES[0].code,
    familyId: ARTICLES[0].familyId,
    familyLabel: ARTICLES[0].familyLabel,
    description: "Organisation's second device",
    options: [],
    path: []
}, {
    id: "3",
    deviceId: "3",
    manufacturerId: MANUFACTURERS[0].id,
    manufacturerLabel: MANUFACTURERS[0].label,
    articleId: ARTICLES[0].id,
    articleLabel: ARTICLES[0].label,
    modelId: MODELS[0].id,
    modelLabel: MODELS[0].label,
    ownerId: null,
    ownerLabel: null,
    organisationId: ORGANISATIONS[0].id,
    managerId: null,
    managerName: null,
    locationId: null,
    locationLabel: null,
    locationAddress: null,
    groupId: null,
    groupLabel: null,
    groupIcon: null,
    label: "Device 3",
    code: "980003",
    imageId: "1",
    tags: [],
    unrestricted: true,
    online: 2,
    meta: { "code1": "10", "code2": "false", "code3": "General Kenobi", "code4": "172650000000", "code5": "mdi-bell" },
    modelStatuses: MODELSTATUSES.slice(),
    status: DEVICESTATUS[2],
    connectivity: DEVICECONNECTIVITIES[2],
    alerts: DEVICEALERTS,
    worstAlert: DEVICEALERTS[0],
    articleCode: ARTICLES[0].code,
    familyId: ARTICLES[0].familyId,
    familyLabel: ARTICLES[0].familyLabel,
    description: "Organisation's third device",
    options: [],
    path: []
}, {
    id: "4",
    deviceId: "4",
    manufacturerId: MANUFACTURERS[0].id,
    manufacturerLabel: MANUFACTURERS[0].label,
    articleId: ARTICLES[0].id,
    articleLabel: ARTICLES[0].label,
    modelId: MODELS[0].id,
    modelLabel: MODELS[0].label,
    ownerId: null,
    ownerLabel: null,
    organisationId: ORGANISATIONS[0].id,
    managerId: null,
    managerName: null,
    locationId: null,
    locationLabel: null,
    locationAddress: null,
    groupId: null,
    groupLabel: null,
    groupIcon: null,
    label: "Device 4",
    code: "980004",
    imageId: "1",
    tags: [],
    unrestricted: true,
    online: 2,
    meta: { "code1": "5", "code2": "true", "code3": "Hello there", "code4": "172660000000", "code5": "mdi-thermometer" },
    modelStatuses: [],
    status: { id: "4", statuses: [] },
    connectivity: DEVICECONNECTIVITIES[3],
    alerts: [],
    worstAlert: null,
    articleCode: ARTICLES[0].code,
    familyId: ARTICLES[0].familyId,
    familyLabel: ARTICLES[0].familyLabel,
    description: "Organisation's fourth device",
    options: [],
    path: []
}];
