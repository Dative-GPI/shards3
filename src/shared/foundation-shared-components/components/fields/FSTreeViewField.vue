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
    <FSCol>
      <template
        v-if="isExtraSmall"
      >
        <FSTextField
          class="fs-tree-view-field"
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
          :style="style"
          :modelValue="innerValue"
          @update:modelValue="$emit('update:modelValue', $event)"
          @click="openMobileOverlay"
          v-bind="$attrs"
        >
          <template
            v-for="(_, name) in fieldSlots"
            v-slot:[name]="slotData"
          >
            <slot
              :name="name"
              v-bind="slotData"
            />
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
              <v-treeview
                :itemTitle="$props.itemTitle"
                :itemValue="$props.itemValue"
                :items="treeItems"
              >
                <template
                  v-for="(_, name) in menuSlots"
                  v-slot:[name]="slotData"
                >
                  <slot
                    :name="name"
                    v-bind="slotData"
                  />
                </template>
                <template
                  #prepend="{ item }"
                >
                  <FSCheckbox
                    v-if="$props.multiple"
                    :class="listItemClass(item[$props.itemValue])"
                    :editable="$props.editable"
                    :modelValue="$props.modelValue?.includes(item[$props.itemValue])"
                    @update:modelValue="() => onCheckboxChange(item[$props.itemValue])"
                  >
                    <template
                      #label="{ font }"
                    >
                      <slot
                        name="menu-prepend"
                        :item="item"
                      />
                      <FSSpan
                        :font="font"
                      >
                        {{ item[$props.itemTitle] }}
                      </FSSpan>
                    </template>
                  </FSCheckbox>
                  <FSRadio
                    v-if="!$props.multiple"
                    :selected="$props.modelValue === item[$props.itemValue]"
                    :class="listItemClass(item[$props.itemValue])"
                    :editable="$props.editable"
                    :modelValue="item[$props.itemValue]"
                    @update:modelValue="onRadioChange"
                  >
                    <template
                      #label="{ font }"
                    >
                      <slot
                        name="menu-prepend"
                        :item="item"
                      />
                      <FSSpan
                        :font="font"
                      >
                        {{ item[$props.itemTitle] }}
                      </FSSpan>
                    </template>
                  </FSRadio>
                </template>
                <template
                  #title
                />
              </v-treeview>
            </FSFadeOut>
          </template>
        </FSDialogMenu>
      </template>
      <template
        v-else
      >
        <v-menu
          :closeOnContentClick="false"
          :modelValue="menu && $props.editable"
          @update:modelValue="menu = $event"
        >
          <template
            #activator="{ props }"
          >
            <FSTextField
              class="fs-tree-view-field"
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
              :style="style"
              :modelValue="innerValue"
              @update:modelValue="$emit('update:modelValue', $event)"
              v-bind="{ ...$attrs, ...props }"
            >
              <template
                v-for="(_, name) in fieldSlots"
                v-slot:[name]="slotData"
              >
                <slot
                  :name="name"
                  v-bind="slotData"
                />
              </template>
            </FSTextField>
          </template>
          <v-treeview
            :itemTitle="$props.itemTitle"
            :itemValue="$props.itemValue"
            :items="treeItems"
          >
            <template
              v-for="(_, name) in menuSlots"
              v-slot:[name]="slotData"
            >
              <slot
                :name="name"
                v-bind="slotData"
              />
            </template>
            <template
              #prepend="{ item }"
            >
              <FSCheckbox
                v-if="$props.multiple"
                :class="listItemClass(item[$props.itemValue])"
                :editable="$props.editable"
                :modelValue="$props.modelValue?.includes(item[$props.itemValue])"
                @update:modelValue="() => onCheckboxChange(item[$props.itemValue])"
              >
                <template
                  #label="{ font }"
                >
                  <slot
                    name="menu-prepend"
                    :item="item"
                  />
                  <FSSpan
                    :font="font"
                  >
                    {{ item[$props.itemTitle] }}
                  </FSSpan>
                </template>
              </FSCheckbox>
              <FSRadio
                v-if="!$props.multiple"
                :selected="$props.modelValue === item[$props.itemValue]"
                :class="listItemClass(item[$props.itemValue])"
                :editable="$props.editable"
                :modelValue="item[$props.itemValue]"
                @update:modelValue="onRadioChange"
              >
                <template
                  #label="{ font }"
                >
                  <slot
                    name="menu-prepend"
                    :item="item"
                  />
                  <FSSpan
                    :font="font"
                  >
                    {{ item[$props.itemTitle] }}
                  </FSSpan>
                </template>
              </FSRadio>
            </template>
            <template
              #title
            />
          </v-treeview>
        </v-menu>
      </template>
    </FSCol>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { useBreakpoints, useColors, useRules, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import { VTreeview } from "vuetify/labs/VTreeview";

import FSDialogMenu from "../FSDialogMenu.vue";
import FSTextField from "./FSTextField.vue";
import FSCheckbox from "../FSCheckbox.vue";
import FSFadeOut from "../FSFadeOut.vue";
import FSLoader from "../FSLoader.vue";
import FSRadio from "../FSRadio.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSTreeViewField",
  components: {
    VTreeview,
    FSDialogMenu,
    FSTextField,
    FSCheckbox,
    FSFadeOut,
    FSLoader,
    FSRadio,
    FSSpan,
    FSCol,
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
    itemParent: {
      type: String,
      required: false,
      default: "parentId"
    },
    exclude: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
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
    },
    loading: {
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
    delete slots["menu-prepend"];

    const backgrounds = getColors(ColorEnum.Background);

    const dialog = ref(false);
    const menu = ref(false);

    const style = computed((): { [key: string]: string | undefined | null } => {
      if (!props.editable) {
        return {
          "--fs-tree-view-field-cursor": "default"
        };
      }
      else {
        return {
          "--fs-tree-view-field-cursor"          : "pointer",
          "--fs-tree-view-field-background-color": backgrounds.base
        };
      }
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const height = computed(() => {
      const other = 8 + 8; // Paddings
      return `calc(100vh - 40px - ${other}px)`;
    });

    const fieldSlots = computed((): any => {
      return Object.keys(slots).filter(k => !k.startsWith("menu-")).reduce((acc, key) => {
        acc[key] = slots[key];
        return acc;
      }, {});
    });

    const menuSlots = computed((): any => {
      return Object.keys(slots).filter(k => k.startsWith("menu-")).reduce((acc, key) => {
        acc[key.substring("menu-".length)] = slots[key];
        return acc;
      }, {});
    });

    const innerValue = computed((): string | null => {
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

    const treeItems = computed((): any[] => {
      const filter = ((parentId: string | null) => {
        return props.items.filter((item: any) => {
          if (props.exclude.includes(item[props.itemValue])) {
            return false;
          }
          return item[props.itemParent] == parentId;
        });
      });
      const process = ((item: any) => {
        if (props.items.some((child: any) => child[props.itemParent] === item[props.itemValue])) {
          return {
            ...item,
            children: filter(item[props.itemValue]).map(process)
          };
        }
        return item;
      });
      return filter(null).map(process);
    });

    const listItemClass = (value: string): string[] => {
      const classNames: string[] = [];
      if (props.multiple) {
        if (Array.isArray(props.modelValue)) {
          if (props.modelValue.includes(value)) {
            classNames.push("fs-tree-view-item-selected");
          }
        }
        else if (props.modelValue === value) {
          classNames.push("fs-tree-view-item-selected");
        }
      }
      else {
        if (props.modelValue === value) {
          classNames.push("fs-tree-view-item-selected");
        }
      }
      return classNames;
    };

    const openMobileOverlay = () => {
      if (!props.editable) {
        return;
      }
      dialog.value = true;
    };

    const onRadioChange = (value: any): void => {
      emit("update:modelValue", value);
      dialog.value = false;
      menu.value = false;
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
      isExtraSmall,
      innerValue,
      fieldSlots,
      validateOn,
      menuSlots,
      treeItems,
      messages,
      dialog,
      height,
      style,
      menu,
      openMobileOverlay,
      onCheckboxChange,
      onRadioChange,
      listItemClass
    };
  }
});
</script>