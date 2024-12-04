<script>
  import PostIt from "../../PostIt.svelte";
  import { translations, extractText } from "$lib/i18n";
  import { lang } from "../../stores.js";
</script>

<div>
  <div class="grid grid-cols-3">
    {#if $lang == "en"}
      <PostIt
        rotation="rotate-45"
        text={translations["nyc"]["episode_2"]["en"][0]}
      ></PostIt>
      <div>Movie here</div>
      <PostIt
        rotation="rotate-15"
        text={translations["nyc"]["episode_2"]["en"][1]}
      ></PostIt>
    {:else if $lang == "fr"}
      <PostIt
        rotation="rotate-45"
        text={translations["nyc"]["episode_2"]["fr"][0]}
      ></PostIt>
      <div>Film ici</div>
      <PostIt
        rotation="rotate-15"
        text={translations["nyc"]["episode_2"]["fr"][1]}
      ></PostIt>
    {/if}
  </div>
</div>
