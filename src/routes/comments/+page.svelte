<script>
  // @ts-nocheck

  import { goto, invalidateAll } from "$app/navigation";

  import { lang } from "../stores.js";
</script>

<div class="flex justify-center">
  <div class="flex flex-col self-center justify-center w-1/2">
    {#if $lang == "en"}
      <h2 class="h1 self-center mt-2">COMMENTS</h2>
    {:else if $lang == "fr"}
      <h2 class="h1 self-center mt-2">COMMENTAIRES</h2>
    {/if}
    <div class="">
      <div class="border-0 rounded-none h-56">
        <div class="flex flex-col justify-center items-center card-body">
          <div class="flex flex-col mt-2">
            {#if $lang == "en"}
              <p>
                If you liked the film and want to leave a comment, please reach
                out to me!
              </p>
              <p>
                I can be reached by <a
                  class="text-cyan-500"
                  href="mailto:naemiecohen@gmail.com">email</a
                >
                or on Instagram <i class="text-cyan-500">@naemiecohen</i>!
              </p>
            {:else if $lang == "fr"}
              <p>
                Si vous avez aimé le film et souhaitez laisser un commentaire,
                n'hésitez pas à m'envoyer un courriel à l'adresse !
              </p>
              <p>
                Je suis joignable par <a
                  class="text-cyan-500"
                  href="mailto:naemiecohen@gmail.com">email</a
                >
                ou sur Instagram <a href="https://www.instagram.com/naemiecohen?utm_source=ig_web_button_share_sheet&igsh=OGtudHhmYmVhMTM5"><i class="text-cyan-500">@naemiecohen</i></a>!
              </p>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
