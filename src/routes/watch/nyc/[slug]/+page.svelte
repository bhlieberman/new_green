<script>
  import { page } from "$app/stores";
  import EpisodeTwo from "../EpisodeTwo.svelte";
  import EpisodeThree from "../EpisodeThree.svelte";
</script>

{#if $page.params.slug == "1"}
  <EpisodeTwo></EpisodeTwo>
{:else if $page.params.slug == "2"}
  <EpisodeThree></EpisodeThree>
{/if}
