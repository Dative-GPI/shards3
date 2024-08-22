import type { Meta, StoryObj } from '@storybook/vue3';

import FSMap from "@dative-gpi/foundation-shared-components/components/map/FSMap.vue";
import type { FSLocation } from '@dative-gpi/foundation-shared-components/models';
import FSFadeOut from '@dative-gpi/foundation-shared-components/components/FSFadeOut.vue';
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import type { FSArea } from '@dative-gpi/foundation-shared-domain/models';

const meta = {
  title: 'Foundation/Shared/Map',
  component: FSMap,
  tags: ['autodocs']
} satisfies Meta<typeof FSMap>;

export default meta;
type Story = StoryObj<typeof meta>;

const location1: FSLocation = {
  "id": "3fb7ebf0-3227-4767-bb96-001384efdd57",
  "label": "Le Mans GERAL",
  "icon": "mdi-factory",
  "color": "primary",
  "address": {
    "formattedAddress": "Bd Marie et Alexandre Oyon, 72100 Le Mans, France",
    "locality": "Le Mans",
    "country": "France",
    "latitude": 47.9946047,
    "longitude": 0.1907672,
    "placeId": "EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",
    "placeLabel": "Boulevard Marie et Alexandre Oyon, Le Mans, France"

  }
}

const location2: FSLocation = {
  "id": "83963f32-6bd5-453d-b271-2b5a41672966",
  "label": "Dative GPI",
  "icon": "mdi-laptop",
  "color": "primary",
  "address": {
    "formattedAddress": "100 rue de norvège, Colombier Saugnieu, France",
    "locality": "Colombier Saugnieu",
    "country": "France",
    "latitude": 45.71175,
    "longitude": 5.071489,
    "placeId": "",
    "placeLabel": "Dative, France"

  }
}

const location3: FSLocation = {
  "id": "44e00e4b-ef50-4f88-9fb2-d94659ee5881",
  "label": "Gerard Perrier Industrie",
  "icon": "mdi-home",
  "color": "primary",
  "address": {
    "formattedAddress": "160 rue de norvège, Colombier Saugnieu, France",
    "locality": "Colombier Saugnieu",
    "country": "France",
    "latitude": 45.71129,
    "longitude": 5.071729,
    "placeId": "",
    "placeLabel": "GPI, France"

  }
}

const location4: FSLocation = {
  "id": "4a3ced7a-d7e7-4004-b40a-ed57fa45615d",
  "label": "Seirel Automatismes SAS",
  "icon": "mdi-snowflake",
  "color": "#FF0000",
  "address": {
    "formattedAddress": "7 Rue Galilée, 69800 Saint-Priest, France",
    "locality": "Saint-Priest",
    "country": "France",
    "latitude": 45.682349,
    "longitude": 4.956942,
    "placeId": "",
    "placeLabel": "Seirel, France"

  }
}

const area1: FSArea = {
  id: 'area1',
  color: 'error',
  coordinates: [
    { latitude: 45.799455, longitude: 4.886445 },
    { latitude: 45.904229, longitude: 5.193776 },
    { latitude: 45.582651, longitude: 5.308631 },
    { latitude: 45.476594, longitude: 5.001300 },
    { latitude: 45.836335, longitude: 4.754118 },

  ]
}

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
      selectedLocationId1: location1.id,
      selectedLocationId2: null,
      selectedLocationId3: null,
      overlayMode1: 'collapse',
      overlayMode2: 'half',
      currentLayer1: 'map',
      currentLayer2: 'imagery',
      areas1: [area1]
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSMap, FSRow, FSCol, FSFadeOut },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSMap
        v-model:overlayMode="args.overlayMode1"
        v-model:currentLayer="args.currentLayer1"
        v-model:selectedLocationId="args.selectedLocationId1"
        :locations="args.locations3"
      >
        <template v-slot:overlay >
          <FSRow>
            <span>I am a fixed header of the left overlay</span>
          </FSRow>
        </template>
      </FSMap>
      <FSMap
        :editable="false"
        :locations="args.locations3"
        :enableScrollWheelZoom="true"
        v-model:overlayMode="args.overlayMode2"
        v-model:currentLayer="args.currentLayer2"
        height="600px"
        v-model:selectedLocationId="args.selectedLocationId3"
        :areas="args.areas1"
      >
        <template v-slot:overlay>
          <FSRow>
            <span>I am a fixed header of the left overlay</span>
          </FSRow>
          <FSCol height="hug" style="min-height: 0;">
            <FSFadeOut height="100%">
                <div style="padding:8px;boredr-radius:4px; display: flex; flex-direction: column; gap: 10px;">
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
            </FSFadeOut>
          </FSCol>
        </template>
      </FSMap>
      <FSMap
        :editable="true"
        :locations="args.locations1"
        height="600px"
        :border="false"
        v-model:selectedLocationId="args.selectedLocationId1"
      />
      <FSMap
        :editable="false"
        :locations="args.locations2"
        height="300px"
        width="300px"
        :selectableLayers="['osm']"
        :grayscale="true"
        :showMyLocation="false"
        :showZoomButtons="false"
        :selectedLocationId="args.selectedLocationId2"
      />
    </div>`,
  })
}