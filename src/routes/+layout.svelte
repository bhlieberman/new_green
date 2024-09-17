<script>
import {writable} from 'svelte/store'
import {AppBar, AppRail, AppRailAnchor, AppRailTile, Drawer, getDrawerStore, initializeStores, LightSwitch} from '@skeletonlabs/skeleton';
import Film from 'lucide-svelte/icons/film'
import House from 'lucide-svelte/icons/house'
import LeafyGreen from 'lucide-svelte/icons/leafy-green'
import Scroll from 'lucide-svelte/icons/scroll'
import Check from 'lucide-svelte/icons/check'
import "../output.css";
import "../globals.css"
import {lang} from './stores.js'

let currentTile = 0;



initializeStores()
const drawerStore = getDrawerStore()
</script>

<!-- need to add a Navigation Tabs component for mobile viewing -->
<Drawer width="w-[280px] md:w-[480px]">
  <AppRail>
    <AppRailTile
      name="film-tile"
      title="Watch"
      value={0}
      bind:group={currentTile}
    >
      <svelte:fragment slot="lead">
        <div class="flex justify-center">
          <a href="/watch">
            <Film />
          </a>
        </div>
        <span>Watch</span>
      </svelte:fragment>
    </AppRailTile>
    <AppRailTile
      name="about-tile"
      title="About"
      value={1}
      bind:group={currentTile}
    >
      <svelte:fragment slot="lead">
        <div class="flex justify-center">
          <a href="/about">
            <Scroll />
          </a>
        </div>
        <span>About</span>
      </svelte:fragment>
    </AppRailTile>
    <svelte:fragment slot="trail">
      <div class="flex justify-center">
        <LightSwitch />
      </div>
      <AppRailAnchor href="/" title="Home">
        <div class="flex justify-center">
          <House />
        </div>
        <span>Home</span>
      </AppRailAnchor>
    </svelte:fragment>
  </AppRail>
</Drawer>

<AppBar>
  <svelte:fragment slot="lead">
    <div class="flex">
      <button on:click={() => drawerStore.open()}>
        <LeafyGreen />
      </button>
    </div>
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
        lang.set(l)
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
