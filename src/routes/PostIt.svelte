<script>
  /**@type string*/
  export let text;
  export let rotation;

  let class_ = "post-it " + rotation
</script>

<div class="flex flex-col items-center justify-center max-w-sm">
  <div class={class_}>{text}</div>
</div>

<style>
  .post-it {
    width: 200px;
    height: 200px;
    background: #ffa;
    overflow: auto;
    padding: 20px;
    border-radius: 0 0 0 30px/45px;
    box-shadow:
      inset 0 -40px 40px rgba(0, 0, 0, 0.2),
      inset 0 25px 10px rgba(0, 0, 0, 0.2),
      0 5px 6px 5px rgba(0, 0, 0, 0.2);
    font-family: "Bodoni Moda";
    line-height: 1.7em;
    font-size: 12px;
    color: #130d6b;
  }
</style>
