import { onMounted, ref } from "vue";
import type { JTDParser, JTDSchemaType } from "ajv/dist/jtd";
import Ajv from "ajv/dist/jtd";
import _ from "lodash";

export const useExtensionCommunication = () => {
  const subscriberCounter = ref(0);
  const subscribers = ref<Subscriber[]>([]);
  const ajv = new Ajv();

  const refreshSchema: JTDSchemaType<RefreshPayload> = {
    properties: {
      refresh: { type: "string" },
    },
  }

  const subscribe =  <T> (
    schema: JTDSchemaType<T>, 
    uri: string, 
    callback: (payload: T, origin: string) => void
  ) => {
    subscriberCounter.value++;
    subscribers.value.push({
      parser: ajv.compileParser(schema),
      uri,
      callback,
      id: subscriberCounter.value,
    });
    return subscriberCounter.value;
  }

  const subscribeToRefresh = (entity: string, callback: () => void) => {
    return subscribe(refreshSchema, "*", ev => ev.refresh === entity && callback());
  }

  const unsubscribe = (id: number) => {
    const index = subscribers.value.findIndex((s) => s.id == id);
    if (index != -1) {
      subscribers.value.splice(index, 1);
    }
  }

  const onMessageReceived = (event: MessageEvent) => {
    subscribers.value
      .filter((s) => s.uri === "*" || new URL(event.origin).hostname == new URL(s.uri).hostname)
      .map((s) => ({
        callback: s.callback,
        data: s.parser(event.data),
      }))
      .filter((s) => !!s.data)
      .forEach((s) => {
        try {
          s.callback(s.data, event.origin);
        } catch (error) {
          console.log(error);
        }
      });

    forward(event.data, event.origin);
  }

  const forward = (data: string, origin: string) => {
    const frames = _.filter(document.getElementsByTagName("iframe"),
      (ifr) => ifr && new URL(ifr.src).hostname == new URL(origin).hostname)
      .map((ifr) => {
        return ifr.contentWindow;
      });
    for(const frame of frames){
      if (frame) {
        frame.postMessage(data, "*");
      }
    }
  }

  onMounted(() => {
    window.addEventListener(
      "message",
      onMessageReceived,
      false
    );
  });


  return {
    subscribe,
    subscribeToRefresh,
    unsubscribe,
  }

}

interface Subscriber {
  parser: JTDParser;
  uri: string;
  callback: (payload: any, origin: string) => void;
  id: number;
}

interface RefreshPayload {
  refresh: string;
}