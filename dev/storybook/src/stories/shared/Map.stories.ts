import type { Meta, StoryObj } from '@storybook/vue3';

import { LocationInfos } from '@dative-gpi/foundation-core-domain/models';
import { SiteInfos } from '@dative-gpi/foundation-shared-domain/models';

import FSMap from "@dative-gpi/foundation-shared-components/components/map/FSMap.vue";

const meta = {
  title: 'Foundation/Shared/Map',
  component: FSMap,
  tags: ['autodocs']
} satisfies Meta<typeof FSMap>;

export default meta;
type Story = StoryObj<typeof meta>;

const location1 = new LocationInfos({
  "id": "3fb7ebf0-3227-4767-bb96-001384efdd57",
  "organisationId": "e7650411-48ff-4064-bf34-473350985098",
  "deviceOrganisationsIds": [
    "4c910b7e-053c-4adb-81cb-b50069c6fbf1",
    "8c10328e-6fe3-44ff-9d5f-d7312c71aa2f",
    "83963f32-6bd5-453d-b271-2b5a41672966",
    "3e5f9f59-5274-4fe8-ab5f-00a91ef8c2be",
    "07c2c80c-a5e1-41d2-9415-ab066a0009ae",
    "39f082ea-b594-49fa-8af4-1c562fde5c67",
    "9a5defba-f7c9-4b85-a511-bcefc45a3db6",
    "2237730d-0bd6-4037-945d-c68f6b678d2e",
    "01b80c0a-147e-495c-9689-886de892df1b",
    "b70798f8-b8d8-4990-9893-1cec07cd3f3f",
    "556158ce-e29e-45d1-8fdb-fbbd6e0e853f",
    "1d13f124-4739-4d23-bf42-1011cc83a499",
    "b5d508ca-35ab-4e9a-956f-631986054eab",
    "11754704-3e18-47cd-93de-c31c77ae0f4b",
    "fce81b40-fac2-4fdb-aab0-c67a5582751a",
    "aef1eb69-b0cb-42a6-8100-154a1825c957"
  ],
  "modelsIds": [
    "9a588e50-3461-4ff7-9edb-4d6d310357e2",
    "b0bd50e9-3166-4a72-aff5-abb1c8e3861d",
    "d4586ec6-3a8b-4588-9ac3-03df80ed0251",
    "808479dc-6e96-4380-9c35-df21bd155c22"
  ],
  "label": "Le Mans GERAL",
  "icon": "mdi-factory",
  "code": "",
  "deviceOrganisationsCount": 16,
  "tags": [],
  "address": {
    "formattedAddress": "Bd Marie et Alexandre Oyon, 72100 Le Mans, France",
    "locality": "Le Mans",
    "country": "France",
    "latitude": 47.9946047,
    "longitude": 0.1907672,
    "placeId": "EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",
    "placeLabel": "Boulevard Marie et Alexandre Oyon, Le Mans, France"

  }
})

const location2 = new LocationInfos({
  "id": "83963f32-6bd5-453d-b271-2b5a41672966",
  "organisationId": "e7650411-48ff-4064-bf34-473350985098",
  "deviceOrganisationsIds": [],
  "modelsIds": [],
  "label": "Dative GPI",
  "icon": "mdi-laptop",
  "code": "",
  "deviceOrganisationsCount": 0,
  "tags": [],
  "address": {
    "formattedAddress": "100 rue de norvège, Colombier Saugnieu, France",
    "locality": "Colombier Saugnieu",
    "country": "France",
    "latitude": 45.71175,
    "longitude": 5.071489,
    "placeId": "",
    "placeLabel": "Dative, France"

  }
})

const location3 = new LocationInfos({
  "id": "44e00e4b-ef50-4f88-9fb2-d94659ee5881",
  "organisationId": "e7650411-48ff-4064-bf34-473350985098",
  "deviceOrganisationsIds": [],
  "modelsIds": [],
  "label": "Gerard Perrier Industrie",
  "icon": "mdi-home",
  "code": "",
  "deviceOrganisationsCount": 0,
  "tags": [],
  "address": {
    "formattedAddress": "160 rue de norvège, Colombier Saugnieu, France",
    "locality": "Colombier Saugnieu",
    "country": "France",
    "latitude": 45.71129,
    "longitude": 5.071729,
    "placeId": "",
    "placeLabel": "GPI, France"

  }
})

const location4 = new LocationInfos({
  "id": "4a3ced7a-d7e7-4004-b40a-ed57fa45615d",
  "organisationId": "e7650411-48ff-4064-bf34-473350985098",
  "deviceOrganisationsIds": [],
  "modelsIds": [],
  "label": "Seirel Automatismes SAS",
  "icon": "mdi-snowflake",
  "code": "",
  "deviceOrganisationsCount": 0,
  "tags": [],
  "address": {
    "formattedAddress": "7 Rue Galilée, 69800 Saint-Priest, France",
    "locality": "Saint-Priest",
    "country": "France",
    "latitude": 45.682349,
    "longitude": 4.956942,
    "placeId": "",
    "placeLabel": "Seirel, France"

  }
})

const site1 = new SiteInfos({
  "id": "3fb7ebf0-3227-4767-bb96-001384efdd57",
  "organisationId": "e7650411-48ff-4064-bf34-473350985098",
  "label": "GPI Aéroport Lyon Saint-Exupéry",
  "color": "#0000ff",
  "coordinates": [
    [45.7120, 5.0712],
    [45.7110, 5.0713],
    [45.7110, 5.0723],
    [45.7118, 5.0720],
    [45.7120, 5.0716]
  ]
})

export const Variations: Story = {
  args: {
    args: {
      locations1: [
        { ...location1 }
      ],
      locations2: [
        { ...location1 }
      ],
      locations3: [
        { ...location3 },
        { ...location2 },
        { ...location4 }
      ],
      sites1: [
        { ...site1 }
      ],
      selectedLocationId1: location1.id,
      selectedLocationId2: null,
      selectedLocationId3: null,
      selectedSiteId1: null
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSMap },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSMap >
        <template v-slot:leftoverlay >
          <div style="background-color:white; padding:8px;boredr-radius:4px; display: flex; flex-direction: column; gap: 10px;">
            <span>Left overlay</span>
            <span>Left overlay</span>
            <span>Left overlay</span>
            <span>Left overlay</span>
            <span>Left overlay</span>
            <span>Left overlay</span>
            <span>Left overlay</span>
            <span>Left overlay</span>
            <span>Left overlay</span>
            <span>Left overlay</span>
            <span>Left overlay</span>
            <span>Left overlay</span>
            <span>Left overlay</span>
            <span>Left overlay</span>
            <span>Left overlay</span>
            <span>Left overlay</span>
            <span>Left overlay</span>
            <span>Left overlay</span>
          </div>
        </template>
      </FSMap>
      <FSMap
        :editable="false"
        :modelValue="args.locations3"
        :sites="args.sites1"
        height="600px"
        v-model:selectedLocationId="args.selectedLocationId3"
        v-model:selectedSiteId="args.selectedSiteId1"
      />
      <FSMap
        :editable="true"
        v-model="args.locations1"
        height="600px"
        :border="false"
        v-model:selectedLocationId="args.selectedLocationId1"
      />
      <FSMap
        :editable="false"
        v-model="args.locations2"
        height="300px"
        width="300px"
        :selectableLayers="['osm']"
        :grayscale="true"
        :showMyLocation="false"
        :showZoomButtons="false"
        v-model:selectedLocationId="args.selectedLocationId2"
      />
    </div>`,
  })
}