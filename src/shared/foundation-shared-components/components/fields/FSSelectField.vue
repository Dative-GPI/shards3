<template>
  <FSCol>
    <template
      v-if="isExtraSmall"
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
        @update:modelValue="$emit('update:modelValue', $event)"
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
          v-if="mobileSelectionProps"
          #prepend-inner
        >
          <slot
            name="selection-mobile"
            v-bind="mobileSelectionProps"
          />
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
              @click="openMobileOverlay"
            />
          </slot>
        </template>
      </FSTextField>
      <FSDialogMenu
        v-model="dialog"
      >
        <template
          #body
        >
          <FSFadeOut
            :height="height"
          >
            <FSCol
              v-if="$props.multiple"
              gap="12px"
            >
              <FSRow
                v-for="(item, index) in $props.items"
                :key="index"
              >
                <FSCheckbox
                  :label="item[$props.itemTitle]"
                  :editable="$props.editable"
                  :modelValue="$props.modelValue?.includes(item[$props.itemValue])"
                  @update:modelValue="() => onCheckboxChange(item[$props.itemValue])"
                >
                  <template
                    #label="{ font }"
                  >
                    <slot
                      name="item-label"
                      v-bind="mobileItemProps(item, font)"
                    />
                  </template>
                </FSCheckbox>
              </FSRow>
            </FSCol>
            <FSRadioGroup
              v-else
              gap="12px"
              :values="$props.items.map((item: any) => ({ value: item[$props.itemValue], label: item[$props.itemTitle], item: item }))"
              :editable="$props.editable"
              :modelValue="$props.modelValue"
              @update:modelValue="onRadioChange"
            >
              <template
                #label="{ item, font }"
              >
                <slot
                  name="item-label"
                  v-bind="mobileItemProps(item, font)"
                />
              </template>
            </FSRadioGroup>
          </FSFadeOut>
        </template>
      </FSDialogMenu>
    </template>
    <template
      v-else
    >
      <FSBaseField
        :description="$props.description"
        :hideHeader="$props.hideHeader"
        :required="$props.required"
        :editable="$props.editable"
        :label="$props.label"
        :messages="messages"
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
          @update:modelValue="$emit('update:modelValue', $event)"
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
            #item="{ props, item }"
          >
            <v-list-item
              v-bind="{ ...props, title: '' }"
            >
              <FSRow
                align="center-left"
              >
                <FSCheckbox
                  v-if="$props.multiple"
                  :modelValue="$props.modelValue?.includes(item.raw[$props.itemValue])"
                  @click="props.onClick"
                >
                  <template
                    #label="{ font }"
                  >
                    <slot
                      name="item-label"
                      v-bind="{ item, font }"
                    >
                      <FSSpan
                        :font="font"
                      >
                        {{ item.raw[$props.itemTitle] }}
                      </FSSpan>
                    </slot>
                  </template>
                </FSCheckbox>
                <FSSpan
                  v-else
                >
                  <slot
                    name="item-label"
                    v-bind="{ item }"
                  >
                    <FSSpan>
                      {{ item.raw[$props.itemTitle] }}
                    </FSSpan>
                  </slot>
                </FSSpan>
              </FSRow>
            </v-list-item>
          </template>
          <template
            #clear
          >
            <slot
              name="clear"
            >
              <FSButton
                v-if="$props.clearable && $props.editable && !!$props.modelValue"
                icon="mdi-close"
                variant="icon"
                :color="ColorEnum.Dark"
                @click="$emit('update:modelValue', null)"
              />
            </slot>
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
              padding="17px"
            >
              <FSSpan>
                {{ $tr("ui.common.no-data", "No data") }}
              </FSSpan>
            </FSRow>
          </template>
        </v-select>
      </FSBaseField>
    </template>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, type StyleValue } from "vue";

import { useBreakpoints, useColors, useRules } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSDialogMenu from "../FSDialogMenu.vue";
import FSRadioGroup from "../FSRadioGroup.vue";
import FSBaseField from "./FSBaseField.vue";
import FSTextField from "./FSTextField.vue";
import FSCheckbox from "../FSCheckbox.vue";
import FSFadeOut from "../FSFadeOut.vue";
import FSButton from "../FSButton.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSSelectField",
  components: {
    FSDialogMenu,
    FSRadioGroup,
    FSBaseField,
    FSTextField,
    FSCheckbox,
    FSFadeOut,
    FSButton,
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
      type: [Array, String, Number] as PropType<(string | number)[] | string | number | null>,
      required: false,
      default: null
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
    multiple: {
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
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { validateOn, getMessages } = useRules();
    const { isExtraSmall } = useBreakpoints();
    const { getColors } = useColors();

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

    const listStyle = computed((): { [key: string] : object } => {
      return {
        style: style.value
      };
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const height = computed(() => {
      const other = 8 + 8; // Paddings
      return `calc(100vh - 40px - ${other}px)`;
    });

    const mobileValue = computed((): string | null => {
      if (props.multiple) {
        if (Array.isArray(props.modelValue)) {
          return props.modelValue.map((value: any) => {
            const item = props.items.find((item: object) => item[props.itemValue] === value);
            if (item) {
              return item[props.itemTitle];
            }
          }).filter(value => !!value).join(", ");
        }
      }
      if (props.modelValue) {
        const item = props.items.find((item: object) => item[props.itemValue] === props.modelValue);
        if (item) {
          return item[props.itemTitle];
        }
      }
      return null;
    });

    const mobileSelectionProps = computed((): any | null => {
      const item = props.items.find((item: any) => item[props.itemValue] === props.modelValue);
      if (item) {
        return {
          item: {
            title: "",
            value: item[props.itemValue],
            props: {
              title: item[props.itemTitle],
              value: item[props.itemValue]
            },
            raw: { ...item }
          },
          font: "text-body"
        };
      }
      return null;
    });

    const mobileItemProps = (item: any, font: "text-body" | "text-button" | null): any => {
      return {
        item: {
          title: "",
          value: item[props.itemValue],
          props: {
            title: item[props.itemTitle],
            value: item[props.itemValue]
          },
          raw: { ...item }
        },
        font
      }
    };

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

    return {
      mobileSelectionProps,
      isExtraSmall,
      mobileValue,
      validateOn,
      ColorEnum,
      listStyle,
      messages,
      dialog,
      height,
      style,
      openMobileOverlay,
      onCheckboxChange,
      mobileItemProps,
      onRadioChange
    };
  }
});
</script>