<script>
  import PostIt from "../../PostIt.svelte";
  import { translations, extractText } from "$lib/i18n";
  import { lang } from "../../stores.js";
</script>

<div>
  <div class="grid grid-cols-3">
    {#if $lang == "en"}
      <div class="w-1/3">
        <div class="flex justify-center items-center" style="display:none">
          <PostIt
            rotation="rotate-45"
            text={translations["nyc"]["episode_2"]["en"][0]}
          ></PostIt>

        </div>
      </div>
      <div style="position: relative; padding-top: 56.25%;" class="w-1/3">
        <iframe
          title="episode-2-en"
          src="https://customer-di31uhcaa9kcpxjs.cloudflarestream.com/13cf3deafea0679b91946f1c042d05fa/iframe?poster=https%3A%2F%2Fcustomer-di31uhcaa9kcpxjs.cloudflarestream.com%2F13cf3deafea0679b91946f1c042d05fa%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
          loading="lazy"
          style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowfullscreen
        ></iframe>
      </div>
      <div class="w-1/3" style="display:none">
        <PostIt
          rotation="rotate-15"
          text={translations["nyc"]["episode_2"]["en"][1]}
        ></PostIt>
      </div>
    {:else if $lang == "fr"}
      <PostIt
        rotation="rotate-45"
        text={translations["nyc"]["episode_2"]["fr"][0]}
      ></PostIt>
      <div>Bientôt disponible</div>
      <PostIt
        rotation="rotate-15"
        text={translations["nyc"]["episode_2"]["fr"][1]}
      ></PostIt>
    {/if}
  </div>
</div>
