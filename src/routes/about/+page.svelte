<script>
  import { lang } from "../stores.js";
  import Attributions from "../watch/Attributions.svelte";

  import { TriangleAlert } from "lucide-svelte";
</script>

<div class="flex flex-col">
  <div class="flex flex-col justify-center items-center">
    <div class="bg-surface-900 flex flex-col w-3/4">
      <div class="h1 self-center p-2">
        {#if $lang == "en"}
          ABOUT
        {:else if $lang == "fr"}
          SUR CE SITE
        {/if}
      </div>
      <div
        class="flex flex-col justify-center text-center lg:w-1/2 self-center"
      >
        <p class="p-2">
          {#if $lang == "en"}
            My name is Naémie, I’m a film student and I wanted to do this
            project because I was afraid for my future, the close future.
          {:else if $lang == "fr"}
            Je m’appelle Naémie, je suis une étudiante en cinéma et je voulais
            commencer ce projet, parce que j’avais peur, peur pour mon futur.
          {/if}
        </p>
        <p class="p-2 text-wrap">
          {#if $lang == "en"}
            So I left school for a year and began my journey.
          {:else if $lang == "fr"}
            J’ai donc arrêté la fac pendant un an et j’ai commencé ce projet.
          {/if}
        </p>
        <p class="p-2">
          {#if $lang == "en"}
            Climate change is the battle of our century and we still have a
            chance to make a change. It’s also an opportunity to rethink our
            connection to the world and suppress social inequalities, which are
            at the center of climate change.
          {:else if $lang == "fr"}
            Le changement climatique est le combat de ce siècle, and nous avons
            encore une chance de faire changer les choses. C’est aussi une
            opportunité pour repenser notre connexion au monde et supprimer les
            inégalités sociales, qui sont au centre du changement climatique. Il
            y a besoin d’une prise de conscience de masse sur ce que nous
            risquons d’affronter, alors regarde le documentaire et partage-le à
            d’autres !
          {/if}
        </p>
        <p class="p-2 text-wrap">
          {#if $lang == "en"}
            We need more awareness on what we are facing. So watch this and
            share it with others ! This production is completely indepedent and
            I want to say a big thanks to all the donors to the crowd-funding
            and to my family for the support. Thank you.
          {:else if $lang == "fr"}
            Cette production est complètement indépendante et je veux remercier
            les donateurs du financement participatif qui ont rendu ce projet
            possible et ma famille pour leurs soutiens. Merci.
          {/if}
        </p>
        <!-- <div class="alert variant-ghost-primary w-3/4 self-center">
          <div class="alert-message flex">
            <div class="flex items-center">
              <TriangleAlert></TriangleAlert>
            </div>
            <div class="flex text-center">
              <p class="p-2 text-wrap self-center">
                {#if $lang == "en"}
                  Donald Trump will resume the US presidency in 2025 and global
                  climate policy will suffer.
                {:else if $lang == "fr"}
                  Donald Trump reprendra la présidence des États-Unis en 2025 et
                  la politique climatique mondiale en pâtira.
                {/if}
              </p>
            </div> 
          </div>
        </div> -->
      </div>
    </div>
  </div>
  <div class="bg-surface-900 mt-10 flex flex-col w-1/2 self-center">
    <div class="h1 self-center p-2">ATTRIBUTIONS</div>
    <div class="self-center">
      <Attributions></Attributions>
    </div>
  </div>
</div>
