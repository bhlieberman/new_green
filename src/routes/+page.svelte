<script>
  import { Construction } from "lucide-svelte";
  import { writable } from "svelte/store";
  import { lang } from "./stores";
  import OverlayButton from "./OverlayButton.svelte";

  let hovering = writable({
    nola: false,
    boston: false,
    new_york: false,
    intro: false,
  });
</script>

<div class="flex items-center justify-center">
  <section id="about-main" class="flex flex-col items-center h-full w-3/4 mt-6">
    <div class="h1 m-2 pb-2">EPISODES</div>
    <hr class="!border-t-8" />
    <div id="posters" class="h-64 grid sm:grid-cols-1 md:grid-cols-4 gap-3">
        <div
          class="card p-4 h-full flex flex-col justify-center"
          on:mouseover={() => {
            hovering.set({ ...$hovering, intro: true });
          }}
          on:mouseleave={() => {
            hovering.set({ ...$hovering, intro: false });
          }}
          on:focus
          role="button"
          tabindex="0"
        >
          {#if $hovering.intro}
          <div class="hover:opacity-60">
              <OverlayButton episodeLink="/watch/intro" episodeNumber="1"
              ></OverlayButton>
            </div>
          {:else}
            <img
              src="affiche-intro.png"
              alt="A poster of the film The New Green dedicated to the episodes on the city of New York."
              class="object-fit"
            />
            <div class="flex justify-center">
              <p class="h3 m-2">Intro</p>
            </div>
          {/if}
        </div>
        <div
          class="h-full card p-4 hover:bg-transparent flex flex-col justify-center"
          on:mouseover={() => {
            hovering.set({ ...$hovering, new_york: true });
          }}
          on:mouseleave={() => {
            hovering.set({ ...$hovering, new_york: false });
          }}
          on:focus
          role="button"
          tabindex="0"
        >
          {#if $hovering.new_york}
            <div class="hover:opacity-60 flex flex-col space-y-2">
              <OverlayButton episodeLink="/watch/nyc/1" episodeNumber="2"
              ></OverlayButton>
              <OverlayButton episodeLink="/watch/nyc/2" episodeNumber="3"
              ></OverlayButton>
            </div>
          {:else}
            <img
              src="affiche-nyc.jpg"
              alt="A poster of the film The New Green dedicated to the episodes on the city of New York."
              class="object-fit"
            />
            <div class="flex justify-center">
              <p class="h3 m-2">NYC</p>
            </div>
          {/if}
        </div>
        <div
          class="h-full card p-4 flex flex-col justify-center"
          on:mouseover={() => {
            hovering.set({ ...$hovering, boston: true });
          }}
          on:mouseleave={() => {
            hovering.set({ ...$hovering, boston: false });
          }}
          on:focus
          role="button"
          tabindex="0"
        >
          {#if $hovering.boston}
            <div class="hover:opacity-60">
              <OverlayButton episodeLink="/watch/boston" episodeNumber="4"
              ></OverlayButton>
            </div>
          {:else}
            <img
              src="affiche-boston.jpg"
              alt="A poster of the film The New Green dedicated to the episodes on the city of Boston."
              class="object-contain"
            />
            <div class="flex justify-center">
              <p class="h3 m-2">Boston</p>
            </div>
          {/if}
        </div>

      <div
        class="h-full card p-4 flex flex-col justify-center"
        on:mouseover={() => {
          hovering.set({ ...$hovering, nola: true });
        }}
        on:mouseleave={() => {
          hovering.set({ ...$hovering, nola: false });
        }}
        on:focus
        role="button"
        tabindex="0"
      >
        {#if $hovering.nola}
          <div class="hover:opacity-60">
            <p class="h3">
              {#if $lang == "fr"}
                Disponible bientôt!
              {:else if $lang == "en"}
                Coming soon!
              {/if}
            </p>
            <Construction></Construction>
          </div>
        {:else}
          <img
            src="affiche-nola.jpg"
            alt="A poster of the film The New Green dedicated to the episodes on the city of New Orleans."
            class="object-fit"
          />
          <div class="flex justify-center">
            <p class="h3 m-2 text-nowrap">New Orleans</p>
          </div>
        {/if}
      </div>
    </div>
    <hr class="!border-t-8" />
   </section>
</div>
