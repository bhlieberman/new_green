<script>
  import {
    AppBar,
    LightSwitch,
    Tab,
    TabGroup,
    TabAnchor,
  } from "@skeletonlabs/skeleton";
  import { page } from "$app/stores";
  import Film from "lucide-svelte/icons/film";
  import House from "lucide-svelte/icons/house";
  import LeafyGreen from "lucide-svelte/icons/leafy-green";
  import Scroll from "lucide-svelte/icons/scroll";
  import Check from "lucide-svelte/icons/check";
  import "../output.css";
  import { lang } from "./stores.js";
  
  let translations = {
    watch: "voir",
    home: "accueil",
    about: "sur ce site",
  };

</script>

<!-- need to add a Navigation Tabs component for mobile viewing -->
<TabGroup>
  <TabAnchor selected={$page.url.pathname === "/watch"}>
    <svelte:fragment slot="lead">
      <a href="/watch">
        <div class="flex justify-center">
          <Film />
        </div>
        <span
          >{#if $lang == "en"}Watch{:else if $lang == "fr"}Voir{/if}</span
        >
      </a>
    </svelte:fragment>
  </TabAnchor>
  <TabAnchor
    selected={$page.url.pathname === "/about"}
  >
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
  <TabAnchor
    selected={$page.url.pathname === "/"}
  >
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
  <h1>THE NEW GREEN</h1>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    {#each ["en", "fr"] as l}
      <button
        id="lang-chip"
        class="chip {$lang == l ? 'variant-filled' : 'variant-soft'}"
        on:click={(_) => {
          lang.set(l);
        }}
      >
        {#if $lang == l}
          <span><Check size={15} /></span>
        {/if}
        <span>{l}</span>
      </button>
    {/each}
  </svelte:fragment>
</AppBar>
<slot />
