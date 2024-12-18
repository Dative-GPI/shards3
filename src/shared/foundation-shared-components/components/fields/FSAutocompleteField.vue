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
          v-if="selectedItem && showExtra"
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
            v-if="selectedItem && showExtra"
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
      cardPadding="16px"
      v-model="dialog"
    >
      <template
        #body
      >
        <FSSearchField
          :clearable="$props.clearable"
          :hideHeader="true"
          v-model="search"
        />
        <FSFadeOut
          :maxHeight="maxHeight"
        >
          <FSCol
            gap="12px"
          >
            <FSRow
              v-for="(item, index) in searchItems"
              align="center-left"
              height="36px"
              :wrap="false"
              :key="index"
              @click="$props.multiple ?
                onCheckboxChange(item[$props.itemValue!]) :
                onRadioChange(item[$props.itemValue!])
              "
            >
              <FSRow
                style="min-width: 0;"
                :wrap="false"
              >
                <slot
                  name="item-prepend"
                  v-bind="{ item }"
                />
                <FSSpan
                  :font="selectedItems.includes(item) ? 'text-button' : 'text-body'"
                >
                  {{ item[$props.itemTitle!] }}
                </FSSpan>
              </FSRow>
              <FSRow
                align="center-right"
                width="hug"
                :wrap="false"
              >
                <slot
                  name="item-append"
                  v-bind="{ item }"
                />
                <FSCheckbox
                  v-if="$props.multiple"
                  :editable="$props.editable"
                  :modelValue="$props.modelValue?.includes(item[$props.itemValue!])"
                  @update:modelValue="onCheckboxChange(item[$props.itemValue!])"
                />
                <FSRadio
                  v-else
                  :selected="$props.modelValue === item[$props.itemValue!]"
                  :editable="$props.editable"
                  :item="item"
                  :modelValue="item[$props.itemValue!]"
                  @update:modelValue="onRadioChange(item[$props.itemValue!])"
                />
              </FSRow>
            </FSRow>
          </FSCol>
        </FSFadeOut>
        <FSRow
          v-if="allowAddItem"
          padding="4px 3px"
        >
          <FSButton
            variant="icon"
            :label="$tr('autocomplete-field.add-item', 'Add new item')"
            :color="ColorEnum.Primary"
            @click="$emit('add:item', search)"
          />
        </FSRow>
        <FSRow
          v-if="!allowAddItem && searchItems.length === 0"
          padding="4px 3px"
        >
          <FSSpan>
            {{ $tr("ui.common.no-data", "No data") }}
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
      <v-autocomplete
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
        :style="style"
        :modelValue="$props.modelValue"
        @update:modelValue="onSingleChange"
        @click="onClick"
        @blur="onBlur"
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
            v-if="selectedItem && showExtra"
            name="item-prepend"
            v-bind="{ item: selectedItem }"
          />
        </template>
        <template
          v-if="$props.multiple"
          #selection="{ index }"
        >
          <FSSpan
            v-if="index === $props.modelValue.length - 1 && showExtra"
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
              v-if="selectedItem && showExtra"
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
          #append-item
        >
          <FSRow
            v-if="allowAddItem"
            padding="15px"
          >
            <FSButton
              variant="icon"
              :label="$tr('autocomplete-field.add-item', 'Add new item')"
              :color="ColorEnum.Primary"
              @click="$emit('add:item', search)"
            />
          </FSRow>
        </template>
        <template
          #no-data
        >
          <FSRow
            v-if="!allowAddItem"
            padding="15px"
          >
            <FSSpan>
              {{ $tr("ui.common.no-data", "No data") }}
            </FSSpan>
          </FSRow>
        </template>
      </v-autocomplete>
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
import { computed, defineComponent, type PropType, ref, type Slot, type StyleValue, watch } from "vue";

import { useBreakpoints, useColors, useRules, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSearchField from "./FSSearchField.vue";
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
  name: "FSAutocompleteField",
  inheritAttrs: false,
  components: {
    FSSearchField,
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
    const { fontStyles, isExtraSmall, isMobileSized } = useBreakpoints();
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
    const showExtra = ref(true);

    const style = computed((): StyleValue => {
      if (!props.editable) {
        return {
          "--fs-autocomplete-field-cursor"             : "default",
          "--fs-autocomplete-field-border-color"       : lights.base,
          "--fs-autocomplete-field-color"              : lights.dark,
          "--fs-autocomplete-field-active-border-color": lights.base,
          "--fs-base-field-input-height"               : isMobileSized.value ? "34px" : "38px",
          ...fontStyles.value
        };
      }
      return {
        "--fs-autocomplete-field-cursor"                  : "text",
        "--fs-autocomplete-field-background-color"        : backgrounds.base,
        "--fs-autocomplete-field-no-data-background-color": lights.light,
        "--fs-autocomplete-field-border-color"            : lights.dark,
        "--fs-autocomplete-field-color"                   : darks.base,
        "--fs-autocomplete-field-active-border-color"     : darks.dark,
        "--fs-autocomplete-field-error-color"             : errors.base,
        "--fs-autocomplete-field-error-border-color"      : errors.base,
        "--fs-base-field-input-height"                    : isMobileSized.value ? "34px" : "38px",
        ...fontStyles.value
      };
    });

    const autocompleteSlots = computed((): { [key: string]: Slot<any> } => {
      return Object.keys(slots).filter(k => k.startsWith("autocomplete-")).reduce((acc: { [key: string]: Slot<any> }, key) => {
        acc[key.substring("autocomplete-".length)] = slots[key];
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

    const searchItems = computed((): any[] => {
      return props.items.filter((item: any) => {
        return item[props.itemTitle].toLowerCase().includes(search.value.toLowerCase());
      });
    });

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

    const allowAddItem = computed((): boolean => {
      return props.showSearch && search.value.trim().length > 0;
    });

    const maxHeight = computed(() => {
      const other = 8 + 8                      // Paddings
        + (isMobileSized.value ? 36 : 40) + 8; // Header
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
      if (value && !Array.isArray(value)) {
        showExtra.value = true;
      }
    };

    const onClear = () => {
      emit("update:modelValue", null);
      search.value = "";
    };

    const onClick = (): void => {
      search.value = "";
      showExtra.value = false;
    };

    const onBlur = () => {
      showExtra.value = true;
    };

    watch(search, () => {
      emit("update:search", search.value);
    });

    return {
      autocompleteSlots,
      toggleSetSlots,
      selectedItems,
      isExtraSmall,
      allowAddItem,
      selectedItem,
      mobileValue,
      searchItems,
      validateOn,
      ColorEnum,
      listStyle,
      maxHeight,
      showExtra,
      messages,
      dialog,
      search,
      slots,
      style,
      openMobileOverlay,
      onCheckboxChange,
      onSingleChange,
      onRadioChange,
      onClear,
      onClick,
      onBlur
    };
  }
});
</script>