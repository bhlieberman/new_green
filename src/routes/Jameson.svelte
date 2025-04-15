<script>
  import { lang } from "./stores";
  import { translations } from "$lib/i18n";
</script>

<div class="">
  {#if $lang == "fr"}
    <blockquote class="sm:text-sm md:text-lg">
      {translations["jameson"]["fr"]}
    </blockquote>
  {:else if $lang == "en"}
    <blockquote class="sm:text-sm md:text-lg">
      {translations["jameson"]["en"]}
    </blockquote>
  {/if}
  <cite class="text-xl">Frederic Jameson</cite>
</div>
