<script>
  import { page } from "$app/stores";
  import EpisodeOne from "../EpisodeOne.svelte";
  import EpisodeTwo from "../EpisodeTwo.svelte";
</script>

<div class="card">
  {#if $page.params.slug == "1"}
    <div class="card-body">
      <div class="grid grid-cols-3 w-full">
        <div class="w-1/3"></div>
        <div class="flex flex-col">
          <h1 class="my-2 self-center">New York, Ep. 1</h1>
          <EpisodeOne></EpisodeOne>
        </div>
      </div>
    </div>
  {:else if $page.params.slug == "2"}
    <div class="card-body">
        <div class="flex flex-col content-center">
          <h1 class="my-2 self-center">New York, Ep. 2</h1>
          <EpisodeTwo></EpisodeTwo>
      </div>
    </div>
  {/if}
</div>
