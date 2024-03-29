export interface FSDeviceStatus {
    modelStatusId: string;
    statusGroups: FSDeviceStatusGroup[];
}

export interface FSDeviceStatusGroup {
    label: string;
    groupByValue?: string;
    value?: string;
    unit?: string;
    icon: string;
    color: string;
    sourceTimestamp?: number;
    enqueuedTimestamp?: number;
    processedTimestamp?: number;
}