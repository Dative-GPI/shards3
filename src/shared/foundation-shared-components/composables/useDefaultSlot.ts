import { useSlots } from "vue"

export const useDefaultSlot = () => {
    const { default: slot } = useSlots();
    
    const getChildren = () => {
        if (slot != null) {
            switch (typeof(slot()[0].type)) {
                // Directive wrapper (v-for, v-if)
                case "symbol":
                    switch (slot()[0].type) {
                        case Symbol.for("v-fgt"):
                            return slot()[0].children;
                        case Symbol.for("v-cmt"):
                            return slot();
                    }
                // Custom component
                case "object":
                    return slot();
                // Pre-existing component
                case "string":
                    return slot();
            }
        }
    }

    return {
        getChildren
    }
}