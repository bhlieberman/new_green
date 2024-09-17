<script>
  import bostonPoster from '$lib/assets/affiche-boston.jpg'
  import nycPoster from '$lib/assets/affiche-nyc.jpg'
  import nolaPoster from '$lib/assets/affiche-nola.jpg'
</script>

<div class="flex items-center justify-center">
  <section id="about-main" class="flex flex-col items-center h-full w-3/4 mt-6">
    <div id="posters" class="grid grid-cols-3 gap-3">
      <div class="card p-4">
        <img
          src={nycPoster}
          alt="A poster of the film The New Green dedicated to the episodes on the city of New York."
          class=""
        />
        <p>
          Three episode of the docu-series takes place in New York City. See it <a
            href="/watch/nyc">here</a
          >.
        </p>
      </div>

      <div class="card p-4">
        <img
          src={bostonPoster}
          alt="A poster of the film The New Green dedicated to the episodes on the city of Boston."
          class=""
        />
        <p>
          One episode of the docu-series takes place in Boston. See it <a
            href="/watch">here</a
          >.
        </p>
      </div>

      <div class="card p-4">
        <img
          src={nolaPoster}
          alt="A poster of the film The New Green dedicated to the episodes on the city of New Orleans."
          class=""
        />
        <p>
          Three episode of the docu-series takes place in New Orleans. See it <a
            href="/watch">here</a
          >.
        </p>
      </div>
    </div>
  </section>
</div>
