<script>
  // @ts-nocheck

  import {
    AppBar,
    LightSwitch,
    TabGroup,
    TabAnchor,
  } from "@skeletonlabs/skeleton";
  import { writable } from "svelte/store";
  import { page } from "$app/stores";
  import Film from "lucide-svelte/icons/film";
  import House from "lucide-svelte/icons/house";
  import LeafyGreen from "lucide-svelte/icons/leafy-green";
  import { MessageCircle } from "lucide-svelte";
  import Scroll from "lucide-svelte/icons/scroll";
  import "../build.css";
  import LanguageSettings from "./LanguageSettings.svelte";
  import Jameson from "./Jameson.svelte";
  import { lang } from "./stores.js";
  import {
    initializeStores,
    Modal,
    getModalStore,
  } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  import ModalComponent from "./ModalComponent.svelte";

  let translations = {
    watch: "voir",
    home: "accueil",
    about: "sur ce site",
  };

  let modalOpen = writable(false);

  initializeStores();
  const modalStore = getModalStore();

  let pageAlreadyLoaded = writable(false);

  let modalRegistry = {
    welcomeModal: { ref: ModalComponent },
  };

  let modalSettings = {
    type: "component",
    component: "welcomeModal",
  };

  onMount(() => {
    if (!$pageAlreadyLoaded) {
      modalStore.trigger(modalSettings);
      pageAlreadyLoaded.set(true);
    }
  });
</script>

<Modal
  components={modalRegistry}
  triggerBase="btn preset-tonal"
  contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl max-w-screen-sm"
  backdropClasses="backdrop-blur-sm"
></Modal>

<TabGroup class="sm:max-w-screen-sm md:max-w-screen-md border-none">
  <TabAnchor selected={$page.url.pathname === "/"}>
    <svelte:fragment slot="lead">
      <a href="/">
        <div class="flex justify-center">
          <House />
        </div>
        <span
          >{#if $lang == "en"}Home{:else if $lang == "fr"}Accueil{/if}</span
        >
      </a>
    </svelte:fragment>
  </TabAnchor>
  <TabAnchor selected={$page.url.pathname === "/about"}>
    <svelte:fragment slot="lead">
      <a href="/about">
        <div class="flex justify-center">
          <Scroll />
        </div>
        <span
          >{#if $lang == "en"}About{:else if $lang == "fr"}Sur ce site{/if}</span
        >
      </a>
    </svelte:fragment>
  </TabAnchor>
  <TabAnchor>
    <svelte:fragment slot="lead">
      <a href="/comments">
        <div class="flex justify-center">
          <MessageCircle />
        </div>
        <span>
          {#if $lang == "en"}Comments{:else if $lang == "fr"}Commentaires{/if}
        </span>
      </a>
    </svelte:fragment>
  </TabAnchor>
</TabGroup>

<AppBar>
  <svelte:fragment slot="lead">
    <a href="/">
      <div class="flex">
        <LeafyGreen />
      </div>
    </a>
  </svelte:fragment>
  <svelte:fragment slot="headline">
    <div class="flex flex-col space-y-2">
      <h1 class="text-3xl">THE NEW GREEN</h1>
      <Jameson></Jameson>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <LanguageSettings></LanguageSettings>
  </svelte:fragment>
</AppBar>
<slot />
