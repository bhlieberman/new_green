<script>
  import {Accordion, AccordionItem} from '@skeletonlabs/skeleton'
</script>

<div class="flex flex-col items-center mt-5">
  <div class="flex flex-col items-center w-3/4">
    <div class="flex flex-col items-center w-3/4">
      <div class="card p-4">
        <video src="/nyc-extract.mov" controls>
          <track kind="captions" />
        </video>
        <Accordion spacing="space-y-1" class="mt-2 variant-ghost-tertiary rounded-lg">
          <AccordionItem>
            <svelte:fragment slot="summary">
            Synopsis
            </svelte:fragment>
            <svelte:fragment slot="content">
              <p>Shall I compare thee to a summer’s day?</p>
              <p>Thou art more lovely and more temperate:</p>
              <p>Rough winds do shake the darling buds of May,</p>
              <p>And summer’s lease hath all too short a date;</p>
              <p>Sometime too hot the eye of heaven shines,</p>
              <p>And often is his gold complexion dimm'd;</p>
              <p>And every fair from fair sometime declines,</p>
              <p>By chance or nature’s changing course untrimm'd;</p>
              <p>But thy eternal summer shall not fade,</p>
              <p>Nor lose possession of that fair thou ow’st;</p>
              <p>Nor shall death brag thou wander’st in his shade,</p>
              <p>When in eternal lines to time thou grow’st:</p>
              <p>So long as men can breathe or eyes can see,</p>
              <p>So long lives this, and this gives life to thee.</p>
            </svelte:fragment>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</div>
