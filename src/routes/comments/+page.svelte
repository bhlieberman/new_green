<script>
  // @ts-nocheck

  import { goto, invalidateAll } from "$app/navigation";
  import { writable } from "svelte/store";
  import db from "../database";
  import { onMount } from "svelte";

  let comments = writable([]);

  let commentText = "";
  let userText = "";

  onMount(async () => {
    comments.set(await db.comments.all());
  });

  async function addComment(user_name) {
    const comment = await db.comments.create({
      comment: commentText,
      user_name: user_name,
    });
    commentText = "";
    userText = "";
    comments.set(await db.comments.all());
  }
</script>

<div class="flex justify-center">
  <div class="flex flex-col self-center justify-center w-1/2">
    <div class="w-full">
      <ul class="flex flex-col justify-center items-center my-10 rounded-lg shadow divide-y divide-gray-200 mw-md">
        {#each $comments as comment}
          <li class="my-2 px-6 py-4 border-secondary-100 bg-warning-300 text-black border-0 rounded-none">
            <span>{new Date(comment.created_at).toLocaleDateString()}</span>
            <span class="font-semibold text-md">{comment.user_name} wrote:</span>
            <span class="text-md block">
              {comment.comment_text}
            </span>
          </li>
        {:else}
          <li class="text-lg">Be the first to comment...</li>
        {/each}
      </ul>
    </div>
    <div class="">
      <div class="border-0 rounded-none h-56">
        <div class="flex flex-col justify-center items-center card-body">
          <p class="text-lg my-2">Watch the film and please leave a comment below!</p>
          <input class="my-2" placeholder="Your name" bind:value={userText} rows="1" />
          <textarea
            bind:value={commentText}
            class="border-0 rounded-none p-1 m-2"
            name="prompt"
            id="prompt"
            placeholder="Leave a comment..."
          />
          <button on:click={() => addComment(userText)} class="self-center btn variant-filled"
            >Add</button
          >
        </div>
      </div>
    </div>
  </div>
</div>
