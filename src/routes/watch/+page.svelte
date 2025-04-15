<script>
  import { ArrowRightCircle } from "lucide-svelte";
  import { lang } from "../stores";
</script>

<nav class="list-nav">
  <div class="card p-4 flex justify-center">
    <dl class="list-dl">
      <div class="flex flex-col">
        <div class="text-2xl">Introduction</div>
        <div class="btn variant-outline-primary">
          <a href="/watch/intro">
            <span class="badge bg-primary-500"
              ><ArrowRightCircle></ArrowRightCircle></span
            >
            <span class="flex-auto">
              <dd>Episode {#if $lang == "en"}one{:else if $lang == "fr"}un{/if}</dd>
            </span>
          </a>
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <div class="text-2xl">New York</div>
        <div class="btn variant-outline-primary">
          <a href="/watch/nyc/1">
            <span class="badge bg-primary-500"
              ><ArrowRightCircle></ArrowRightCircle></span
            >
            <span class="flex-auto">
              <dt>Part 1</dt>
              <dd>Episode {#if $lang == "en"}two{:else if $lang == "fr"}deux{/if}</dd>
            </span>
          </a>
        </div>
        <div class="btn variant-outline-primary">
          <a href="/watch/nyc/2">
            <span class="badge bg-primary-500"
              ><ArrowRightCircle></ArrowRightCircle></span
            >
            <span class="flex-auto">
              <dt>Part 2</dt>
              <dd>Episode {#if $lang == "en"}three{:else if $lang == "fr"}trois{/if}</dd>
            </span>
          </a>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="text-2xl">Boston</div>
        <div class="btn variant-outline-primary">
          <a href="/watch/boston">
            <span class="badge bg-primary-500"
              ><ArrowRightCircle></ArrowRightCircle></span
            >
            <span class="flex-auto">
              <dd>Episode {#if $lang == "en"}four{:else if $lang == "fr"}quatre{/if}</dd>
            </span>
          </a>
        </div>
      </div>
      <!-- <div class="btn variant-outline-primary">
        <a href="/#">
          <span class="badge bg-primary-500"
            ><ArrowRightCircle></ArrowRightCircle></span
          >
          <span class="flex-auto">
            <dt>New Orleans, Part 1</dt>
            <dd>Episode five</dd>
          </span>
        </a>
      </div>
      <div class="btn variant-outline-primary">
        <a href="/#">
          <span class="badge bg-primary-500"
            ><ArrowRightCircle></ArrowRightCircle></span
          >
          <span class="flex-auto">
            <dt>New Orleans, Part 2</dt>
            <dd>Episode six</dd>
          </span>
        </a>
      </div>
      <div class="btn variant-outline-primary">
        <a href="/#">
          <span class="badge bg-primary-500"
            ><ArrowRightCircle></ArrowRightCircle></span
          >
          <span class="flex-auto">
            <dt>New Orleans, Part 3</dt>
            <dd>Episode seven</dd>
          </span>
        </a>
      </div> -->
    </dl>
  </div>
</nav>
