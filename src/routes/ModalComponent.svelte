<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import { lang } from "./stores";
  import LanguageSettings from "./LanguageSettings.svelte";

  export let parent;

  let ua;
  onMount(() => {
    ua = window.navigator.userAgent.match(/Mobile/);
  });
</script>

<div
  class="flex-col bg-surface-100-800-token w-screen h-screen p-4 flex justify-center items-center"
>
  <div class="flex flex-col text-center">
    {#if $lang == "en"}
      <div class="sm:text-xl md:text-5xl my-2">Welcome to The New Green!</div>
      <div class="sm:text-md md:text-3xl text-wrap my-2">
        This is a documentary film about the climate crisis. It is available in
        English with French subtitles.
        {#if ua}
          The videos are best viewed on a full-sized screen.
        {/if}
        <p>Pick your language:</p>
      </div>
    {:else if $lang == "fr"}
      <div class="sm:text-xl md:text-5xl my-2">Bienvenue sur The New Green!</div>
      <div class="sm:text-xl md:text-3xl my-2">
        C'est une série documentaire sur la crise climatique. Elle est
        disponible en anglais avec sous-titres français.
        {#if ua}
          Les vidéos sont plus faciles à visionner sur un grand écran.
        {/if}
        <p>Choisis ta langue:</p>
      </div>
    {/if}
    <div class="flex my-5 self-center space-x-2">
      <LanguageSettings></LanguageSettings>
    </div>
  </div>
  <button class="btn variant-filled-secondary" on:click={parent.onClose}
    >Go!</button
  >
</div>
