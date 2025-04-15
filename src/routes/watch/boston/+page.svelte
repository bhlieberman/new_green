<script>
  // @ts-nocheck

  import { Construction } from "lucide-svelte";
  import { lang } from "../../stores";

  import SwitchEpisode from "../SwitchEpisode.svelte";
  import { goto } from "$app/navigation";
</script>

<div class="card">
  <div class="card-body bg-surface-900 flex flex-col h-3/4">
    {#if $lang == "fr"}
      <div class="flex flex-col justify-center">
        <div class="h-1/2 flex flex-col">
          <h1 class="text-3xl my-2 self-center">Boston</h1>
          <div
            style="position: relative; padding-top: 56.25%;"
            class="w-3/4 self-center mb-10"
          >
            <iframe
              title="episode-4-fr"
              src="https://customer-di31uhcaa9kcpxjs.cloudflarestream.com/02b8ec6ecbae6240b4ff7ba489965f79/iframe?poster=https%3A%2F%2Fcustomer-di31uhcaa9kcpxjs.cloudflarestream.com%2F02b8ec6ecbae6240b4ff7ba489965f79%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
              loading="lazy"
              style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
      </div>
    {:else if $lang == "en"}
      <div class="flex flex-col justify-center">
        <div class="flex flex-col justify-center h-1/2">
          <h1 class="text-3xl self-center p-5">Boston</h1>
          <div
            style="position: relative; padding-top: 56.25%;"
            class="w-3/4 self-center mb-10"
          >
            <iframe
              title="episode-4-en"
              id="movie-frame"
              src="https://customer-di31uhcaa9kcpxjs.cloudflarestream.com/b44be2e29d7106e1e322db3c62b235cf/iframe?poster=https%3A%2F%2Fcustomer-di31uhcaa9kcpxjs.cloudflarestream.com%2Fb44be2e29d7106e1e322db3c62b235cf%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
              loading="lazy"
              style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    {/if}
    <div class="flex w-3/4 self-center justify-center">
      <SwitchEpisode
        text={$lang == "fr" ? "fr-p" : "en-p"}
        navHandler={() => goto("/watch/nyc/2")}
      ></SwitchEpisode>
      <SwitchEpisode
        text={$lang == "fr" ? "fr-n" : "en-n"}
        disabled
        navHandler={() => goto("/watch/nola/1")}
      ></SwitchEpisode>
    </div>
  </div>
</div>
