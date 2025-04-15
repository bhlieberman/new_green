<script>
  import { lang } from "./stores";
</script>

{#each [["en", "\u{1F1FA}\u{1F1F8}"], ["fr", "\u{1F1EB}\u{1F1F7}"]] as [l, emoji]}
  <button
    id="lang-chip"
    class="chip {$lang == l ? 'variant-filled' : 'variant-soft'} h-10 w-20"
    on:click={(_) => {
      lang.set(l);
    }}
  >
    <span class="text-xl">{emoji}</span>
  </button>
{/each}
