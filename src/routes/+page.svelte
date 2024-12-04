<script>
  import bostonPoster from "$lib/assets/affiche-boston.jpg";
  import introPoster from "$lib/assets/affiche-intro.png";
  import nycPoster from "$lib/assets/affiche-nyc.jpg";
  import nolaPoster from "$lib/assets/affiche-nola.jpg";
  import { translations } from "$lib/i18n";

  import { Construction } from "lucide-svelte";
  import { writable } from "svelte/store";
  import { lang } from "./stores";

  let hovering = writable(false);
</script>

<div class="flex items-center justify-center">
  <section id="about-main" class="flex flex-col items-center h-full w-3/4 mt-6">
    <div class="h1 m-2 pb-2">EPISODES</div>

    <hr class="!border-t-8" />
    <div id="posters" class="grid grid-cols-4 gap-3">
      <a href="/watch/intro">
        <div class="card p-4 hover:bg-transparent">
          <img
            src={introPoster}
            alt="A poster of the film The New Green dedicated to the episodes on the city of New York."
            class="object-fit"
          />
          <div class="flex justify-center">
            <p class="h3 m-2">Intro</p>
          </div>
        </div>
      </a>
      <a href="/watch">
        <div
          class="card p-4"
          on:mouseover={() => {
            hovering.set(true);
          }}
          on:mouseleave={() => {
            hovering.set(false);
          }}
          on:focus
          role="button"
          tabindex="0"
        >
          {#if $hovering}
            <div class="h-44 hover:opacity-60">
              <p class="h3">Coming soon!</p>
              <Construction></Construction>
            </div>
          {:else}
            <img
              src={nycPoster}
              alt="A poster of the film The New Green dedicated to the episodes on the city of New York."
              class="object-fit"
            />
            <div class="flex justify-center">
              <p class="h3 m-2">NYC</p>
            </div>
          {/if}
        </div>
      </a>

      <a href="/watch">
        <div
          class="card p-4"
          on:mouseover={() => {
            hovering.set(true);
          }}
          on:mouseleave={() => {
            hovering.set(false);
          }}
          on:focus
          role="button"
          tabindex="0"
        >
          {#if $hovering}
            <div class="h-44 hover:opacity-60">
              <p class="h3">Coming soon!</p>
              <Construction></Construction>
            </div>
          {:else}
            <img
              src={bostonPoster}
              alt="A poster of the film The New Green dedicated to the episodes on the city of Boston."
              class="object-fit"
            />
            <div class="flex justify-center">
              <p class="h3 m-2">Boston</p>
            </div>
          {/if}
        </div>
      </a>

      <a href="/watch">
        <div
          class="card p-4"
          on:mouseover={() => {
            hovering.set(true);
          }}
          on:mouseleave={() => {
            hovering.set(false);
          }}
          on:focus
          role="button"
          tabindex="0"
        >
          {#if $hovering}
            <div class="h-44 hover:opacity-60">
              <p class="h3">Coming soon!</p>
              <Construction></Construction>
            </div>
          {:else}
            <img
              src={nolaPoster}
              alt="A poster of the film The New Green dedicated to the episodes on the city of New Orleans."
              class="object-fit"
            />
            <div class="flex justify-center">
              <p class="h3 m-2 text-nowrap">New Orleans</p>
            </div>
          {/if}
        </div>
      </a>
    </div>
    <hr class="!border-t-8" />
    {#if $lang == "fr"}
      <blockquote>
        <b>
          {translations["jameson"]["fr"]}
        </b>
      </blockquote>
    {:else if $lang == "en"}
      <blockquote>
        <b>
          {translations["jameson"]["en"]}
        </b>
      </blockquote>
    {/if}
    <cite>Frederic Jameson</cite>
  </section>
</div>
