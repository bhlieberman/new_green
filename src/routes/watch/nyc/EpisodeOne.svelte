<script>
  import { lang } from "../../stores.js";
</script>

{#if $lang == "fr"}
  <div style="position: relative; padding-top: 56.25%;">
    <iframe
      title="episode-1-fr"
      src="https://customer-di31uhcaa9kcpxjs.cloudflarestream.com/6d35153336d0fd1f2b4c8dd65104cb56/iframe?poster=https%3A%2F%2Fcustomer-di31uhcaa9kcpxjs.cloudflarestream.com%2F6d35153336d0fd1f2b4c8dd65104cb56%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
      loading="lazy"
      style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
      allowfullscreen
    ></iframe>
  </div>
{:else if $lang == "en"}
  <div style="position: relative; padding-top: 56.25%;">
    <iframe
      title="episode-1-en"
      src="https://customer-di31uhcaa9kcpxjs.cloudflarestream.com/8280915265179b33172b57259d5650ee/iframe?poster=https%3A%2F%2Fcustomer-di31uhcaa9kcpxjs.cloudflarestream.com%2F8280915265179b33172b57259d5650ee%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
      loading="lazy"
      style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
      allowfullscreen
    ></iframe>
  </div>
{/if}
