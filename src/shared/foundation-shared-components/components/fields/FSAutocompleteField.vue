<template>
  <template
    v-if="$props.loading"
  >
    <FSCol>
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
  </template>
  <template
    v-else
  >
    <template
      v-if="isExtraSmall"
    >
      <FSTextField
        :label="$props.label"
        :description="$props.description"
        :hideHeader="$props.hideHeader"
        :required="$props.required"
        :clearable="$props.clearable"
        :editable="$props.editable"
        :readonly="true"
        :rules="$props.rules"
        :messages="messages"
        :validateOn="validateOn"
        :validationValue="$props.modelValue"
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
          <FSSearchField
            v-model="search"
          />
          <FSFadeOut
            :height="height"
          >
            <FSCol
              v-if="$props.multiple"
              gap="12px"
            >
              <FSRow
                v-for="(item, index) in searchItems"
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
              :values="searchItems.map((item: any) => ({ value: item[$props.itemValue], label: item[$props.itemTitle], item: item  }))"
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
      <FSToggleField
        v-if="$props.toggleSet"
        :label="$props.label"
        :description="$props.description"
        :hideHeader="$props.hideHeader"
        :items="$props.items"
        :returnObject="$props.returnObject"
        :required="$props.required"
        :editable="$props.editable"
        :multiple="$props.multiple"
        :rules="$props.rules"
        :validateOn="validateOn"
        :modelValue="$props.modelValue"
        @update:modelValue="onUpdate"
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
      </FSToggleField>
      <FSBaseField
        v-else
        :label="$props.label"
        :description="$props.description"
        :hideHeader="$props.hideHeader"
        :required="$props.required"
        :editable="$props.editable"
        :messages="messages"
      >
        <v-autocomplete
          class="fs-autocomplete-field"
          variant="outlined"
          :menuIcon="null"
          :style="style"
          :listProps="listStyle"
          :class="classes"
          :persistentClear="true"
          :hideDetails="true"
          :items="$props.items"
          :autoSelectFirst="true"
          :multiple="$props.multiple"
          :itemTitle="$props.itemTitle"
          :itemValue="$props.itemValue"
          :readonly="!$props.editable"
          :clearable="$props.clearable && $props.editable && !!$props.modelValue"
          :returnObject="$props.returnObject"
          :rules="$props.rules"
          :validateOn="validateOn"
          :modelValue="$props.modelValue"
          @update:modelValue="onUpdate"
          @click="onClick"
          v-model:search="search"
          v-bind="$attrs"
        >
          <template
            v-for="(_, name) in autocompleteSlots"
            v-slot:[name]="slotData"
          >
            <slot
              :name="`autocomplete-${name}`"
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
        </v-autocomplete>
      </FSBaseField>
    </template>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from "vue";

import { useBreakpoints, useColors, useRules, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSearchField from "./FSSearchField.vue";
import FSToggleField from "./FSToggleField.vue";
import FSDialogMenu from "../FSDialogMenu.vue";
import FSRadioGroup from "../FSRadioGroup.vue";
import FSBaseField from "./FSBaseField.vue";
import FSTextField from "./FSTextField.vue";
import FSCheckbox from "../FSCheckbox.vue";
import FSFadeOut from "../FSFadeOut.vue";
import FSButton from "../FSButton.vue";
import FSLoader from "../FSLoader.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSAutocompleteField",
  components: {
    FSSearchField,
    FSToggleField,
    FSDialogMenu,
    FSRadioGroup,
    FSBaseField,
    FSTextField,
    FSCheckbox,
    FSFadeOut,
    FSButton,
    FSLoader,
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
      type: [Array, String] as PropType<string[] | string | null>,
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
    returnObject: {
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
  emits: ["update:modelValue", "update:search"],
  setup: (props, { emit }) => {
    const { isExtraSmall, isMobileSized } = useBreakpoints();
    const { validateOn, getMessages } = useRules();
    const { getColors } = useColors();
    const { slots } = useSlots();

    delete slots.label;
    delete slots.description;

    const backgrounds = getColors(ColorEnum.Background);
    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const dialog = ref(false);
    const search = ref("");

    const style = computed((): { [key: string]: string | undefined } => {
      if (!props.editable) {
        return {
          "--fs-autocomplete-field-cursor":              "default",
          "--fs-autocomplete-field-border-color":        lights.base,
          "--fs-autocomplete-field-color":               lights.dark,
          "--fs-autocomplete-field-active-border-color": lights.base
        };
      }
      return {
        "--fs-autocomplete-field-cursor":              "text",
        "--fs-autocomplete-field-background-color":    backgrounds.base,
        "--fs-autocomplete-field-border-color":        lights.dark,
        "--fs-autocomplete-field-color":               darks.base,
        "--fs-autocomplete-field-active-border-color": darks.dark,
        "--fs-autocomplete-field-error-color":         errors.base,
        "--fs-autocomplete-field-error-border-color":  errors.base
      };
    });

    const autocompleteSlots = computed((): any => {
      return Object.keys(slots).filter(k => k.startsWith("autocomplete-")).reduce((acc, key) => {
        acc[key.substring("autocomplete-".length)] = slots[key];
        return acc;
      }, {});
    });

    const toggleSetSlots = computed((): any => {
      return Object.keys(slots).filter(k => k.startsWith("toggle-set-")).reduce((acc, key) => {
        acc[key.substring("toggle-set-".length)] = slots[key];
        return acc;
      }, {});
    });

    const listStyle = computed((): any => {
      return {
        style: style.value
      };
    });

    const classes = computed((): string[] => {
      const classNames = ["fs-autocomplete-field"];
      if (props.multiple) {
        classNames.push("fs-autocomplete-multiple-field");
      }
      return classNames;
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const searchItems = computed(() => {
      return props.items.filter((item: any) => {
        return item[props.itemTitle].toLowerCase().includes(search.value.toLowerCase());
      });
    });

    const height = computed(() => {
      const other = 8 + 8                // Paddings
        + (isMobileSized ? 36 : 40) + 8; // Header
      return `calc(100vh - 40px - ${other}px)`;
    });

    const mobileValue = computed((): string | null => {
      if (props.multiple) {
        if (Array.isArray(props.modelValue)) {
          return props.modelValue.map((value: any) => {
            const item = props.items.find((item: Object) => item[props.itemValue] === value);
            if (item) {
              return item[props.itemTitle];
            }
          }).filter(value => !!value).join(", ");
        }
      }
      if (props.modelValue) {
        const item = props.items.find((item: Object) => item[props.itemValue] === props.modelValue);
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
      if (props.returnObject) {
        emit("update:modelValue", props.items.find((item: any) => item[props.itemValue] === value) ?? null);
      }
      else {
        emit("update:modelValue", value);
      }
      dialog.value = false;
    };

    const onCheckboxChange = (value: string) => {
      if (props.returnObject) {
        const item = props.items.find(item => item[props.itemValue] === value);
        if (Array.isArray(props.modelValue)) {
          if (props.modelValue.find(item => item[props.itemValue] === value)) {
            emit("update:modelValue", props.modelValue.filter((item: any) => item[props.itemValue] !== value));
          }
          else {
            if (item) {
              emit("update:modelValue", [...props.modelValue, item]);
            }
          }
        }
        else {
          if (props.modelValue) {
            if (props.modelValue[props.itemValue] === value) {
              emit("update:modelValue", []);
            }
            else {
              emit("update:modelValue", [props.modelValue, item]);
            }
          }
          else {
            emit("update:modelValue", [item]);
          }
        }
      }
      else {
        if (Array.isArray(props.modelValue)) {
          if (props.modelValue.includes(value)) {
            emit("update:modelValue", props.modelValue.filter((item: any) => item !== value));
          }
          else {
            emit("update:modelValue", [...props.modelValue, value]);
          }
        }
        else {
          if (props.modelValue === value) {
            emit("update:modelValue", []);
          }
          else {
            emit("update:modelValue", [props.modelValue, value]);
          }
        }
      }
    };

    const onUpdate = (value: string[] | string) => {
      emit("update:modelValue", value);
    };

    const onClick = () => {
      search.value = "";
      emit("update:search", search.value);
      emit("update:modelValue", null);
    }

    watch(search, () => {
      emit("update:search", search.value);
    });

    return {
      mobileSelectionProps,
      autocompleteSlots,
      toggleSetSlots,
      isExtraSmall,
      mobileValue,
      searchItems,
      validateOn,
      ColorEnum,
      listStyle,
      messages,
      classes,
      dialog,
      height,
      search,
      slots,
      style,
      openMobileOverlay,
      onCheckboxChange,
      mobileItemProps,
      onRadioChange,
      onUpdate,
      onClick
    };
  }
});
</script>