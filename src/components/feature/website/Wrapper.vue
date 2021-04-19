<template>
  <Wrapper>
    <IntroMessage />
    <Mobile v-if="$vssWidth <= 992" :slides="slides" />
    <Desktop v-if="$vssWidth > 992" :components="slides" />
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";
import VueScreenSize from "vue-screen-size";

import Mobile from "./mobile/Mobile";
import Desktop from "./desktop/Desktop";

import IntroMessage from "./layout/IntroMessage";
import DropdownSelect from "@/components/interactions/DropdownSelect.vue";
import HoverTicket from "@/components/interactions/HoverTicket.vue";

const Wrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

export default {
  components: {
    Wrapper,
    Mobile,
    Desktop,
    IntroMessage,
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  data() {
    return {
      slides: [
        {
          id: 1,
          name: "dropdown-select",
          collab: "kosidocs",
          image: "https://github.com/KOSIDOCS.png",
          component: DropdownSelect,
          background: "#461d67",
          githubUrl: "DropdownSelect.vue",
        },
        {
          id: 2,
          name: "Hover-ticket",
          collab: "kosidocs",
          image: "https://github.com/KOSIDOCS.png",
          component: HoverTicket,
          background: "#000",
          githubUrl: "HoverTicket.vue",
        },
      ],
    };
  },
};
</script>
