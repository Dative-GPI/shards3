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
        :validationValue="$props.modelValue"
        :description="$props.description"
        :hideHeader="$props.hideHeader"
        :clearable="$props.clearable"
        :editable="$props.editable"
        :required="$props.required"
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
          <FSSearchField
            :hideHeader="true"
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
      <FSBaseField
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
        <v-autocomplete
          v-else
          class="fs-autocomplete-field"
          variant="outlined"
          :clearable="$props.clearable && $props.editable && !!$props.modelValue"
          :itemTitle="$props.itemTitle"
          :itemValue="$props.itemValue"
          :readonly="!$props.editable"
          :multiple="$props.multiple"
          :validateOn="validateOn"
          :autoSelectFirst="true"
          :persistentClear="true"
          :listProps="listStyle"
          :returnObject="false"
          :items="$props.items"
          :rules="$props.rules"
          :hideDetails="true"
          :menuIcon="null"
          :class="classes"
          :style="style"
          :modelValue="$props.modelValue"
          @update:modelValue="$emit('update:modelValue', $event)"
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
                    v-bind="{
                      item,
                      font: $props.modelValue === item.raw[$props.itemTitle] ? 'text-button' : 'text-body'
                    }"
                  >
                    <FSSpan
                      :font="$props.modelValue === item.raw[$props.itemTitle] ? 'text-button' : 'text-body'"
                    >
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
            #append-item
          >
            <FSRow
              v-if="showSearch && !searchItems.map((item: any) => item[$props.itemTitle]).some(s=>s.toLowerCase() == search.toLowerCase())"
              padding="17px"
            >
              <FSButton
                v-if="search && search.trim().length > 0"
                variant="icon"
                :label="$tr('ui.common.add', 'Add this item')"
                :color="ColorEnum.Primary"
                @click="$emit('add:item', search)"
              />
            </FSRow>
          </template>
          <template
            #no-data
          >
            <template
              v-if="showSearch"
            >
            </template>
            <FSRow
              v-else
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
import type { PropType} from "vue";
import { computed, defineComponent, ref } from "vue";

import { useBreakpoints, useColors, useRules, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSearchField from "./FSSearchField.vue";
import FSDialogMenu from "../FSDialogMenu.vue";
import FSRadioGroup from "../FSRadioGroup.vue";
import FSToggleSet from "../FSToggleSet.vue";
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
  inheritAttrs: false,
  components: {
    FSSearchField,
    FSDialogMenu,
    FSRadioGroup,
    FSBaseField,
    FSTextField,
    FSToggleSet,
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
      type: [Array, String, Object] as PropType<string[] | string | null | any>,
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
    },
    showSearch: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue", "update:search", "add:item"],
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
        "--fs-autocomplete-field-cursor":                   "text",
        "--fs-autocomplete-field-background-color":         backgrounds.base,
        "--fs-autocomplete-field-no-data-background-color": lights.light,
        "--fs-autocomplete-field-border-color":             lights.dark,
        "--fs-autocomplete-field-color":                    darks.base,
        "--fs-autocomplete-field-active-border-color":      darks.dark,
        "--fs-autocomplete-field-error-color":              errors.base,
        "--fs-autocomplete-field-error-border-color":       errors.base
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

    const onClick = () => {
      if (props.modelValue && !props.multiple) {
        search.value="";
      } 
    };

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
      onClick
    };
  }
});
</script>