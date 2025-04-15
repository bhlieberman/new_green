<script>
  // @ts-nocheck

  import { lang } from "../../stores.js";

  import { onMount } from "svelte";

  import SwitchEpisode from "../SwitchEpisode.svelte";
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
      <div class="flex flex-col content-center">
        <h1 class="text-3xl my-2 self-center">New York, Part. 1</h1>
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
        {#if $lang == "fr"}
          <div
            style="position: relative; padding-top: 56.25%;"
            class="w-3/4 self-center mb-10"
          >
            <iframe
              title="episode-2-fr"
              src="https://customer-di31uhcaa9kcpxjs.cloudflarestream.com/aaaffef623ef676386b3c46cf0a255f5/iframe?poster=https%3A%2F%2Fcustomer-di31uhcaa9kcpxjs.cloudflarestream.com%2Faaaffef623ef676386b3c46cf0a255f5%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
              loading="lazy"
              style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowfullscreen="true"
            ></iframe>
          </div>
        {:else if $lang == "en"}
          <div
            style="position: relative; padding-top: 56.25%;"
            class="w-3/4 self-center mb-5"
          >
            <iframe
              title="episode-2-en"
              id="movie-frame"
              src="https://customer-di31uhcaa9kcpxjs.cloudflarestream.com/13cf3deafea0679b91946f1c042d05fa/iframe?poster=https%3A%2F%2Fcustomer-di31uhcaa9kcpxjs.cloudflarestream.com%2F13cf3deafea0679b91946f1c042d05fa%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
              loading="lazy"
              style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowfullscreen
            ></iframe>
          </div>
        {/if}
      </div>
      <div class="flex w-3/4 self-center justify-center">
        <SwitchEpisode text={$lang == 'fr' ? 'fr-p' : 'en-p'} navHandler={() => goto("/watch/intro")}
        ></SwitchEpisode>
        <SwitchEpisode text={$lang == 'en' ? 'en-n' : 'fr-n'} navHandler={() => goto("/watch/nyc/2")}
        ></SwitchEpisode>
      </div>
    </div>
  </div>
</div>
