<template>
  <FSCol
    v-if="$props.loading"
  >
    <FSLoader
      v-if="!$props.hideHeader"
      variant="text-overline"
    />
    <FSLoader
      v-if="$props.loading"
      width="100%"
      :height="['40px', '36px']"
    />
  </FSCol>
  <FSCol
    v-else-if="isExtraSmall"
  >
    <FSTextField
      :validationValue="$props.modelValue"
      :description="$props.description"
      :hideHeader="$props.hideHeader"
      :clearable="$props.clearable"
      :editable="$props.editable"
      :required="$props.required"
      :validateOn="validateOn"
      :label="$props.label"
      :rules="$props.rules"
      :messages="messages"
      :readonly="true"
      :modelValue="mobileValue"
      @click="openMobileOverlay"
      v-bind="$attrs"
    >
      <template
        v-for="(_, name) in $slots"
        v-slot:[name]="slotData"
      >
        <slot
          :name="name"
          v-bind="slotData"
        />
      </template>
      <template
        #prepend-inner
      >
        <slot
          v-if="selectedItem"
          name="item-prepend"
          v-bind="{ item: selectedItem }"
        />
      </template>
      <template
        #clear
      >
        <FSRow
          :wrap="false"
        >
          <slot
            v-if="selectedItem"
            name="item-append"
            v-bind="{ item: selectedItem }"
          />
          <slot
            name="clear"
          >
            <FSButton
              v-if="$props.clearable && $props.editable && !!$props.modelValue"
              icon="mdi-close"
              variant="icon"
              :color="ColorEnum.Dark"
              @click="onClear"
            />
          </slot>
        </FSRow>
      </template>
      <template
        #append-inner
      >
        <FSButton
          icon="mdi-chevron-down"
          variant="icon"
          :editable="$props.editable"
          :color="ColorEnum.Dark"
          @click="openMobileOverlay"
        />
      </template>
    </FSTextField>
    <FSSlideGroup
      v-if="$props.multiple && Array.isArray($props.modelValue)"
    >
      <FSCard
        v-for="(item, index) in $props.items.filter((item: any) => $props.modelValue.includes(item[$props.itemValue!]))"
        variant="standard"
        :height="['40px', '36px']"
        :color="ColorEnum.Light"
        :border="false"
        :key="index"
      >
        <FSRow
          align="center-left"
          padding="0 8px"
          :wrap="false"
        >
          <slot
            name="item-prepend"
            v-bind="{ item }"
          />
          <FSSpan>
            {{ item[$props.itemTitle!] }}
          </FSSpan>
          <slot
            name="item-append"
            v-bind="{ item }"
          />
          <FSButton
            icon="mdi-close"
            variant="icon"
            :color="ColorEnum.Dark"
            @click="() => onCheckboxChange(item[$props.itemValue!])"
          />
        </FSRow>
      </FSCard>
    </FSSlideGroup>
    <FSDialogMenu
      v-model="dialog"
    >
      <template
        #body
      >
        <FSFadeOut
          :maxHeight="maxHeight"
        >
          <FSCol
            gap="12px"
          >
            <FSRow
              v-for="(item, index) in $props.items"
              :key="index"
            >
              <FSCheckbox
                v-if="$props.multiple"
                :label="item[$props.itemTitle!]"
                :editable="$props.editable"
                :modelValue="$props.modelValue?.includes(item[$props.itemValue!])"
                @update:modelValue="() => onCheckboxChange(item[$props.itemValue!])"
              >
                <template
                  #label="{ font }"
                >
                  <FSRow
                    align="center-left"
                    :wrap="false"
                  >
                    <slot
                      name="item-prepend"
                      v-bind="{ item }"
                    />
                    <FSSpan
                      :font="font"
                    >
                      {{ item[$props.itemTitle!] }}
                    </FSSpan>
                  </FSRow>
                </template>
              </FSCheckbox>
              <FSRadio
                v-else
                :selected="$props.modelValue === item[$props.itemValue!]"
                :label="item[$props.itemTitle!]"
                :editable="$props.editable"
                :item="item"
                :modelValue="item[$props.itemValue!]"
                @update:modelValue="() => onRadioChange(item[$props.itemValue!])"
              >
                <template
                  #label="{ font }"
                >
                  <FSRow
                    align="center-left"
                    :wrap="false"
                  >
                    <slot
                      name="item-prepend"
                      v-bind="{ item }"
                    />
                    <FSSpan
                      :font="font"
                    >
                      {{ item[$props.itemTitle!] }}
                    </FSSpan>
                  </FSRow>
                </template>
              </FSRadio>
              <FSRow
                align="center-right"
              >
                <slot
                  name="item-append"
                  v-bind="{ item }"
                />
              </FSRow>
            </FSRow>
          </FSCol>
        </FSFadeOut>
        <FSRow
          v-if="!$props.items || $props.items.length === 0"
          padding="4px 3px"
        >
          <FSSpan>
            {{ $tr("ui.select-field.no-data", "No data") }}
          </FSSpan>
        </FSRow>
      </template>
    </FSDialogMenu>
  </FSCol>
  <FSBaseField
    v-else
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :editable="$props.editable"
    :label="$props.label"
    :messages="messages"
  >
    <FSToggleSet
      v-if="$props.toggleSet"
      :editable="$props.editable"
      :multiple="$props.multiple"
      :required="$props.required"
      :values="$props.items"
      :rules="$props.rules"
      :modelValue="$props.modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      v-bind="$attrs"
    >
      <template
        v-for="(_, name) in toggleSetSlots"
        v-slot:[name]="slotData"
      >
        <slot
          :name="`toggle-set-${name}`"
          v-bind="slotData"
        />
      </template>
    </FSToggleSet>
    <FSCol
      v-else
    >
      <v-select
        class="fs-select-field"
        variant="outlined"
        :clearable="$props.clearable && $props.editable && !!$props.modelValue"
        :itemTitle="$props.itemTitle"
        :itemValue="$props.itemValue"
        :readonly="!$props.editable"
        :multiple="$props.multiple"
        :validateOn="validateOn"
        :persistentClear="true"
        :listProps="listStyle"
        :returnObject="false"
        :items="$props.items"
        :rules="$props.rules"
        :hideDetails="true"
        :menuIcon="null"
        :style="style"
        :modelValue="$props.modelValue"
        @update:modelValue="onSingleChange"
        v-bind="$attrs"
      >
        <template
          v-for="(_, name) in selectSlots"
          v-slot:[name]="slotData"
        >
          <slot
            :name="`select-${name}`"
            v-bind="slotData"
          />
        </template>
        <template
          #item="{ props, item }"
        >
          <v-list-item
            v-bind="{ ...props, title: '' }"
          >
            <FSRow
              align="center-left"
              :wrap="false"
            >
              <FSCheckbox
                v-if="$props.multiple"
                :modelValue="$props.modelValue?.includes(item.raw[$props.itemValue!])"
                @click="props.onClick"
              >
                <template
                  #label="{ font }"
                >
                  <slot
                    name="item-prepend"
                    v-bind="{ item: item.raw }"
                  />
                  <FSSpan
                    :font="font"
                  >
                    {{ item.raw[$props.itemTitle!] }}
                  </FSSpan>
                </template>
              </FSCheckbox>
              <template
                v-else
              >
                <slot
                  name="item-prepend"
                  v-bind="{ item: item.raw }"
                />
                <FSSpan
                  :font="$props.modelValue === item.raw[$props.itemTitle!] ? 'text-button' : 'text-body'"
                >
                  {{ item.raw[$props.itemTitle!] }}
                </FSSpan>
              </template>
              <FSRow
                align="center-right"
              >
                <slot
                  name="item-append"
                  v-bind="{ item: item.raw }"
                />
              </FSRow>
            </FSRow>
          </v-list-item>
        </template>
        <template
          #prepend-inner
        >
          <slot
            v-if="selectedItem"
            name="item-prepend"
            v-bind="{ item: selectedItem }"
          />
        </template>
        <template
          v-if="$props.multiple"
          #selection="{ index }"
        >
          <FSSpan
            v-if="index === $props.modelValue.length - 1"
          >
            {{ $props.placeholder }}
          </FSSpan>
        </template>
        <template
          #clear
        >
          <FSRow
            :wrap="false"
          >
            <slot
              v-if="selectedItem"
              name="item-append"
              v-bind="{ item: selectedItem }"
            />
            <slot
              name="clear"
            >
              <FSButton
                v-if="$props.clearable && $props.editable && !!$props.modelValue"
                icon="mdi-close"
                variant="icon"
                :color="ColorEnum.Dark"
                @click="onClear"
              />
            </slot>
          </FSRow>
        </template>
        <template
          #append-inner
        >
          <slot
            name="append-inner"
          >
            <FSButton
              icon="mdi-chevron-down"
              variant="icon"
              :editable="$props.editable"
              :color="ColorEnum.Dark"
            />
          </slot>
        </template>
        <template
          #no-data
        >
          <FSRow
            v-if="!$props.items || $props.items.length === 0"
            padding="15px"
          >
            <FSSpan>
              {{ $tr("ui.select-field.no-data", "No data") }}
            </FSSpan>
          </FSRow>
        </template>
      </v-select>
      <FSSlideGroup
        v-if="$props.multiple && Array.isArray($props.modelValue)"
      >
        <FSCard
          v-for="(item, index) in $props.items.filter((item: any) => $props.modelValue.includes(item[$props.itemValue!]))"
          variant="standard"
          :height="['40px', '36px']"
          :color="ColorEnum.Light"
          :border="false"
          :key="index"
        >
          <FSRow
            align="center-left"
            padding="0 8px"
          >
            <slot
              name="item-prepend"
              v-bind="{ item }"
            />
            <FSSpan>
              {{ item[$props.itemTitle!] }}
            </FSSpan>
            <slot
              name="item-append"
              v-bind="{ item }"
            />
            <FSButton
              icon="mdi-close"
              variant="icon"
              :color="ColorEnum.Dark"
              @click="() => onCheckboxChange(item[$props.itemValue!])"
            />
          </FSRow>
        </FSCard>
      </FSSlideGroup>
    </FSCol>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, type Slot, type StyleValue } from "vue";

import { useBreakpoints, useColors, useRules, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSDialogMenu from "../FSDialogMenu.vue";
import FSSlideGroup from "../FSSlideGroup.vue";
import FSToggleSet from "../FSToggleSet.vue";
import FSBaseField from "./FSBaseField.vue";
import FSTextField from "./FSTextField.vue";
import FSCheckbox from "../FSCheckbox.vue";
import FSFadeOut from "../FSFadeOut.vue";
import FSButton from "../FSButton.vue";
import FSLoader from "../FSLoader.vue";
import FSRadio from "../FSRadio.vue";
import FSCard from "../FSCard.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSSelectField",
  components: {
    FSDialogMenu,
    FSSlideGroup,
    FSBaseField,
    FSTextField,
    FSToggleSet,
    FSCheckbox,
    FSFadeOut,
    FSButton,
    FSLoader,
    FSRadio,
    FSCard,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    placeholder: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    description: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    items: {
      type: Array as PropType<any[]>,
      required: true
    },
    itemValue: {
      type: String,
      required: false,
      default: "id"
    },
    itemTitle: {
      type: String,
      required: false,
      default: "label"
    },
    modelValue: {
      type: [Array, String, Number] as PropType<(string | number)[] | string | number | null | any>,
      required: false,
      default: null
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    rules: {
      type: Array as PropType<any[]>,
      required: false,
      default: () => []
    },
    messages: {
      type: Array as PropType<string[]>,
      required: false,
      default: null
    },
    clearable: {
      type: Boolean,
      required: false,
      default: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    toggleSet: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { validateOn, getMessages } = useRules();
    const { isExtraSmall } = useBreakpoints();
    const { getColors } = useColors();
    const { slots } = useSlots();

    delete slots.label;
    delete slots.description;

    const backgrounds = getColors(ColorEnum.Background);
    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const dialog = ref(false);

    const style = computed((): StyleValue => {
      if (!props.editable) {
        return {
          "--fs-select-field-cursor"             : "default",
          "--fs-select-field-border-color"       : lights.base,
          "--fs-select-field-color"              : lights.dark,
          "--fs-select-field-active-border-color": lights.base
        };
      }
      return {
        "--fs-select-field-cursor"             : "pointer",
        "--fs-select-field-background-color"   : backgrounds.base,
        "--fs-select-field-border-color"       : lights.dark,
        "--fs-select-field-color"              : darks.base,
        "--fs-select-field-active-border-color": darks.dark,
        "--fs-select-field-error-border-color" : errors.base
      };
    });

    const selectSlots = computed((): { [key: string]: Slot<any> } => {
      return Object.keys(slots).filter(k => k.startsWith("select-")).reduce((acc: { [key: string]: Slot<any> }, key) => {
        acc[key.substring("select-".length)] = slots[key];
        return acc;
      }, {});
    });

    const toggleSetSlots = computed((): { [key: string]: Slot<any> } => {
      return Object.keys(slots).filter(k => k.startsWith("toggle-set-")).reduce((acc: { [key: string]: Slot<any> }, key) => {
        acc[key.substring("toggle-set-".length)] = slots[key];
        return acc;
      }, {});
    });

    const listStyle = computed((): { style: StyleValue } => {
      return {
        style: style.value
      };
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const selectedItem = computed((): any => {
      if (props.multiple) {
        return null;
      }
      if (Array.isArray(props.modelValue) && props.modelValue.length > 0) {
        return props.items.find((item: any) => item[props.itemValue] === props.modelValue[0]) ?? null;
      }
      else if (props.modelValue) {
        return props.items.find((item: any) => item[props.itemValue] === props.modelValue) ?? null;
      }
      return null;
    });

    const selectedItems = computed((): any[] => {
      if (Array.isArray(props.modelValue) && props.modelValue.length > 0) {
        return props.items.filter((item: any) => props.modelValue.includes(item[props.itemValue]));
      }
      else if (props.modelValue) {
        const item = props.items.find((item: any) => item[props.itemValue] === props.modelValue);
        if (item) {
          return [item];
        }
      }
      return [];
    });

    const maxHeight = computed(() => {
      const other = 8 + 8; // Paddings
      return `calc(100vh - 40px - ${other}px)`;
    });

    const mobileValue = computed((): string | null => {
      if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
        return props.placeholder;
      }
      if (selectedItem.value) {
        return selectedItem.value[props.itemTitle];
      }
      return null;
    });

    const openMobileOverlay = () => {
      if (!props.editable) {
        return;
      }
      dialog.value = true;
    };

    const onRadioChange = (value: string | null) => {
      emit("update:modelValue", value);
      dialog.value = false;
    };

    const onCheckboxChange = (value: string) => {
      if (Array.isArray(props.modelValue)) {
        if (props.modelValue.includes(value)) {
          emit("update:modelValue", props.modelValue.filter((item: any) => item !== value));
        }
        else {
          emit("update:modelValue", [...props.modelValue, value]);
        }
      }
      else if (props.modelValue != null) {
        if (props.modelValue === value) {
          emit("update:modelValue", []);
        }
        else {
          emit("update:modelValue", [props.modelValue, value]);
        }
      }
      else {
        emit("update:modelValue", [value]);
      }
    };

    const onSingleChange = (value: string) => {
      emit("update:modelValue", value);
    };

    const onClear = () => {
      emit("update:modelValue", null);
    };

    return {
      toggleSetSlots,
      selectedItems,
      isExtraSmall,
      selectedItem,
      mobileValue,
      selectSlots,
      validateOn,
      ColorEnum,
      listStyle,
      maxHeight,
      messages,
      dialog,
      style,
      openMobileOverlay,
      onCheckboxChange,
      onSingleChange,
      onRadioChange,
      onClear
    };
  }
});
</script>