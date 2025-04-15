<script>
  export let navHandler;
  export let disabled;
  export let text;
</script>

<button
  type="button"
  class="m-1 h-full btn btn-md variant-filled-warning w-fit"
  on:click={navHandler}
  {disabled}
>
  {#if text == 'fr-n'}
  Suivant
  {:else if text == 'fr-p'}
  Precédent
  {:else if text == 'en-n'}
  Next
  {:else if text == 'en-p'}
  Previous
  {/if}
</button>
