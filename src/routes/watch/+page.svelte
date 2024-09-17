<script>
  import {DateTime} from 'luxon'
  import {readable, writable} from 'svelte/store'
  import {lang} from '../stores'

  let debutTime = 
    // need to find a way to derive this?
    writable(($lang == "en" ?
        DateTime.fromISO("2024-09-22", {locale: "en"}) : DateTime.fromISO("2024-09-30", {locale: "fr"})))
    

  let debutStore = readable(
    $debutTime
    .toFormat("d 'd'a'y''s': h 'h'our's' : m 'm'inute's' : s 's'econ'd''s'"), (set) => {
    set(
      $debutTime
        .diffNow("days")
        .toFormat("d 'd'a'y''s': h 'h'our's' : m 'm'inute's' : s 's'econ'd''s'"))

    const interval = setInterval(() => {
      set(
        $debutTime
          .diffNow("days")
          .toFormat("d 'd'a'y''s': h 'h'our's' : m 'm'inute's' : s 's'econ'd''s'"))
    }, 1000)

    return () => clearInterval(interval)
  })
</script>

<div class="">
  <div class="card p-4 flex justify-center">
    <section class="flex flex-col justify-center items-center">
      <h2 class="h1 m-2">Countdown</h2>
      <span class="h4">
        <p class="inline" bind:innerText={$debutStore} contenteditable />
      </span>
      <p class="first-letter:text-lg prose">
        <i>The New Green</i> is a seven-episode docu-series...
      </p>
      <p>
        It will debut on {$debutTime.toLocaleString()}
      </p>
    </section>
  </div>
</div>
