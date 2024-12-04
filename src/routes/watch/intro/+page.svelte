<script>
  import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
  import { onMount, onDestroy } from "svelte";

  import { lang } from "../../stores";
  import PostIt from "../../PostIt.svelte";
  import Comments from "../../Comments.svelte";
  import { translations, extractText } from "$lib/i18n";
    import { VideoOff } from "lucide-svelte";

  let postItText =
    "The Amazon, sometimes called the Green Lungs of the Earth, has lost a forest area equivalent to 14,05 times the size of N.Y, from August 2019 to July 2020 (Prodes)".toUpperCase();

  async function loadVideo() {
    let file = await fetch("/watch/intro");
    let data = await file.blob();
    return URL.createObjectURL(data);
  }

  /**
   * @type string
   */
  let videoSource;

  onMount(() => {
    loadVideo()
      .then((url) => {
        console.log("loading video...");
        videoSource = url;
      })
      .catch((err) => {
        console.error("something went wrong: ", err);
      });
  });

  onDestroy(() => {
    URL.revokeObjectURL(videoSource);
  })
</script>

<div class="card">
  <div class="card-body">
    <div class="grid grid-cols-3 w-full">
      <PostIt rotation="-rotate-15" text={postItText}></PostIt>
      <div class="flex flex-col">
        <h1 class="my-2 self-center">New York, Ep. 1</h1>
        <video src={videoSource} controls on:canplay={(e) => e.currentTarget?.play()}>
          <track kind="captions" />
        </video>
        <Accordion
          spacing="space-y-1"
          class="mt-2 variant-ghost-tertiary rounded-lg"
        >
          <AccordionItem>
            <svelte:fragment slot="summary">Synopsis</svelte:fragment>
            <svelte:fragment slot="content">
              {#if $lang == "en"}
                <p>
                  I interview some people on the streets of New York and in
                  Central Park.
                </p>
              {:else if $lang == "fr"}
                <p>
                  Je fait des entretiens avec des gens à New York et dans
                  Central Park.
                </p>
              {/if}
            </svelte:fragment>
          </AccordionItem>
        </Accordion>
        <Comments></Comments>
      </div>
    </div>
  </div>
</div>
