import type { StoryObj } from '@storybook/vue3';
import FSFadeOut from "@dative-gpi/foundation-shared-components/components/FSFadeOut.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";

const meta = {
  title: 'Foundation/Shared/Global/Containers/FadeOut',
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { FSFadeOut, FSCol, FSButton, FSRow },
    template: `
      <div style="display: flex; flex-direction: column; gap: 80px;">
      <FSRow gap="80px">
        <div style="display: flex; flex-direction: column;">
          <pre>&lt;FSFadeOut height="200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
          <FSFadeOut height="200px" style="width: 150px; border: 2px dotted black;">
            <FSCol style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
              <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
              <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
              <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
              <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
              <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
              <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
              <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 8 </div>
              <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 9 </div>
              <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 10 </div>
              <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 11 </div>
              <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 12 </div>
              <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 13 </div>
              <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 14 </div>
              <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 15 </div>
            </FSCol>
          </FSFadeout>
          FSFadeOut scrollbar is hidden but its space is reserved
        </div>
        <div style="display: flex; flex-direction: column;">
          <pre>&lt;FSFadeOut maskHeight="128px" height="200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
          <FSFadeOut height="200px" maskHeight="128px" style="width: 150px; border: 2px dotted black;">
            <FSCol style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
              <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
              <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
              <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
              <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
              <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
              <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
            </FSCol>
          </FSFadeout>
        </div>
        <div style="display: flex; flex-direction: column;">
          <pre>&lt;FSFadeOut height="200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
          <FSFadeOut height="200px" style="width: 150px; border: 2px dotted black;">
            <FSCol style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
              <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
              <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            </FSCol>
          </FSFadeout>
          If the content is smaller than the FSFadeOut, the container size fit the content
        </div>
      </FSRow>

      <FSRow gap="80px">
        <div style="display: flex; flex-direction: column;">
          <pre>&lt;FSFadeOut height="200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
          <FSFadeOut height="180px" style="width: 150px; border: 2px dotted black;">
            <FSCol style="background-color: plum; padding: 4px;">
              <FSButton icon="mdi-numeric-1" />
              <FSButton icon="mdi-numeric-2" />
              <FSButton icon="mdi-numeric-3" />
              <FSButton icon="mdi-numeric-4" />
            </FSCol>
          </FSFadeout>
          If the content starts to fit after mounting, the mask and scrollbar disappear
        </div>

        <FSCol width="350px" style="margin: 8px">
          <FSFadeOut height="180px" style="border: 0px dotted black;">
            <FSCol style="background-color: plum; padding: 4px;">
              <FSButton icon="mdi-numeric-1" />
              <FSButton icon="mdi-numeric-2" />
              <FSButton icon="mdi-numeric-3" />
              <FSButton icon="mdi-numeric-4" />
            </FSCol>
          </FSFadeout>
        </FSCol>

      </FSRow>


      <FSRow padding="24px 4px" width="min(800px, 100%)" style="border: 0px dotted black;">
        <FSCol 
          style="min-height: 0;"
          height="fill"
        >
          <FSFadeOut height="180px" >
            <FSCol style="background-color: plum; padding: 4px;">
              <FSButton icon="mdi-numeric-1" label="Conqsjqsdjkq qjsdjkqds kjqsd jk" />
              <FSButton icon="mdi-numeric-2" />
              <FSButton icon="mdi-numeric-3" />
              <FSButton icon="mdi-numeric-4" />
            </FSCol>
          </FSFadeout>
        </FSCol>
      </FSRow>
    `,
  })
};

export const NestedFadeOut: Story = {
  render: () => ({
    components: { FSFadeOut, FSCol, FSRow },
    template: `
      <div style="display: flex; justify-content: center; padding: 20px;">
        <FSFadeOut height="300px" style="width: 200px; border: 1px solid #333;">
          <FSCol style="background-color: lightblue; padding: 8px;">
            <div>Contenu extérieur</div>
            <FSFadeOut maxHeight="150px" style="border: 1px dashed #333;">
              <FSCol style="background-color: lightcoral; padding: 8px;">
                <div v-for="n in 10" :key="n" 
                     style="display: flex; align-items: center; height: 32px; margin: 4px 0; background-color: #f9c8c8;">
                  Élément {{ n }}
                </div>
              </FSCol>
            </FSFadeOut>
             <div
              v-for="n in 10"
             >
              Contenu extérieur
            </div>
          </FSCol>
        </FSFadeOut>
      </div>
    `,
  }),
};
