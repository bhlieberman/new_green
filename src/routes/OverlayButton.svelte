<script>
  import { ArrowRightCircle } from "lucide-svelte";
  import { lang } from "./stores";
    import { goto } from "$app/navigation";

  export let episodeLink;
  export let episodeNumber;
</script>

<div class="">
  <div class="flex flex-col">
    <div class="btn variant-outline-primary">
      <a href={episodeLink}>
        <span class="badge bg-primary-500"
          ><ArrowRightCircle></ArrowRightCircle></span
        >
        <span class="flex-auto">
          <dd>
            Episode {episodeNumber}
          </dd>
        </span>
      </a>
    </div>
  </div>
</div>
