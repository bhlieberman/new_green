<script>
  // @ts-nocheck

  import PostIt from "../../PostIt.svelte";
  import SwitchEpisode from "../SwitchEpisode.svelte";
  import { translations, extractText } from "$lib/i18n";
  import { lang } from "../../stores.js";
  import { goto } from "$app/navigation";

  import { onMount } from "svelte";

  onMount(() => {
    let movieComponent = document.getElementById("movie-frame");
    let spinner = document.getElementById("loading-spinner");
    spinner.style.display = "none";
  });
</script>

<div class="card">
  <div class="card-body bg-surface-900 flex flex-col h-3/4">
    <div class="flex flex-col content-center">
      <h1 class="text-3xl p-5 self-center">New York, Ep. 2</h1>
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
      {#if $lang == "en"}
        <div
          style="position: relative; padding-top: 56.25%;"
          class="w-3/4 self-center mb-10"
        >
          <iframe
            title="episode-3-en"
            id="movie-frame"
            src="https://customer-di31uhcaa9kcpxjs.cloudflarestream.com/cf612b05740cefdec4e310053ee12b44/iframe?poster=https%3A%2F%2Fcustomer-di31uhcaa9kcpxjs.cloudflarestream.com%2Fcf612b05740cefdec4e310053ee12b44%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
            loading="lazy"
            style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowfullscreen
          ></iframe>
        </div>
      {:else if $lang == "fr"}
        <div
          style="position: relative; padding-top: 56.25%;"
          class="w-3/4 self-center mb-10"
        >
          <iframe
            title="episode-3-fr"
            src="https://customer-di31uhcaa9kcpxjs.cloudflarestream.com/cdbf7d3fbfa69650c403ea441c6fbdf4/iframe?poster=https%3A%2F%2Fcustomer-di31uhcaa9kcpxjs.cloudflarestream.com%2Fcdbf7d3fbfa69650c403ea441c6fbdf4%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
            loading="lazy"
            style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowfullscreen="true"
          ></iframe>
        </div>
      {/if}
    </div>
    <div class="flex w-3/4 self-center justify-center">
      <SwitchEpisode
        text={$lang == "fr" ? "fr-p" : "en-p"}
        navHandler={() => goto("/watch/nyc/1")}
      ></SwitchEpisode>
      <SwitchEpisode
        text={$lang == "fr" ? "fr-n" : "en-n"}
        navHandler={() => goto("/watch/boston")}
      ></SwitchEpisode>
    </div>
  </div>
</div>

{#if $lang == "en"}
  <div class="w-1/3 absolute right-0 top-56" style="display:none">
      <PostIt
        rotation="rotate-45"
        text={translations["nyc"]["episode_2"]["en"][0]}
      ></PostIt>
  </div>

  <div class="w-1/3" style="display:none">
    <PostIt
      rotation="-rotate-15"
      text={translations["nyc"]["episode_2"]["en"][1]}
    ></PostIt>
  </div>
{:else if $lang == "fr"}
  <div class="w-1/3 absolute right-0 top-56" style="display:none">
    <PostIt
      rotation="rotate-45"
      text={translations["nyc"]["episode_2"]["fr"][0]}
    ></PostIt>

  </div>
  <div class="w-1/3" style="display:none">
    <PostIt
    rotation="-rotate-15"
    text={translations["nyc"]["episode_2"]["fr"][1]}
  ></PostIt>
  </div>
{/if}
