<script>
  // @ts-nocheck

  import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
  import { onMount, onDestroy } from "svelte";

  import { lang } from "../../stores";
  import PostIt from "../../PostIt.svelte";
  import SwitchEpisode from "../SwitchEpisode.svelte";
  import { translations, extractText } from "$lib/i18n";
  import { goto } from "$app/navigation";

  onMount(() => {
    let movieComponent = document.getElementById("movie-frame");
    let spinner = document.getElementById("loading-spinner");
    spinner.style.display = "none";
  });

</script>

<div class="card">
  <div class="card-body bg-surface-900">
    <div class="flex flex-col content-center">
      <h1 class="text-3xl p-5 self-center">Introduction</h1>
      <div
        id="loading-spinner"
        class="self-center h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      >
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span
        >
      </div>
      <div
        style="position: relative; padding-top: 56.25%;"
        class="w-3/4 self-center mb-10"
      >
        {#if $lang == "fr"}
          <iframe
            title="episode-1-fr"
            id="movie-frame"
            src="https://customer-di31uhcaa9kcpxjs.cloudflarestream.com/f74e3824bea5de69d8d0d1b195b4c9e2/iframe?poster=https%3A%2F%2Fcustomer-di31uhcaa9kcpxjs.cloudflarestream.com%2Ff74e3824bea5de69d8d0d1b195b4c9e2%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
            loading="lazy"
            style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowfullscreen
          ></iframe>
        {:else if $lang == "en"}
          <iframe
            title="episode-1-en"
            src="https://customer-di31uhcaa9kcpxjs.cloudflarestream.com/8280915265179b33172b57259d5650ee/iframe?poster=https%3A%2F%2Fcustomer-di31uhcaa9kcpxjs.cloudflarestream.com%2F8280915265179b33172b57259d5650ee%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
            loading="lazy"
            style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowfullscreen="true"
          ></iframe>
        {/if}
      </div>
    </div>
    <div class="flex justify-center">
      <SwitchEpisode
        navHandler={() => goto("/watch/nyc/1")}
        text={$lang == "en" ? "en-n" : "fr-n"}
      ></SwitchEpisode>
    </div>
  </div>
</div>
<div style="display:none">
  {#if $lang == "en"}
    <PostIt rotation="-rotate-15" text={translations.nyc.intro.en}></PostIt>
  {:else if $lang == "fr"}
    <PostIt rotation="-rotate-15" text={translations.nyc.intro.fr}></PostIt>
  {/if}
</div>
