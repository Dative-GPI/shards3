export interface FSDeviceStatus {
    modelStatusId: string;
    statusGroups: FSDeviceStatusGroup[];
}

export interface FSDeviceStatusGroup {
    label: string;
    groupByValue?: string | null;
    value?: string | null;
    unit?: string | null;
    icon: string;
    color: string;
    sourceTimestamp?: number | null;
    enqueuedTimestamp?: number | null;
    processedTimestamp?: number | null;
}