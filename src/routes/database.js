import { createClient } from "@supabase/supabase-js";
import { PUBLIC_PROJECT_URL, PUBLIC_API_KEY } from "$env/static/public";
import { writable } from "svelte/store";
import { DateTime } from "luxon";

export const supabase = createClient(PUBLIC_PROJECT_URL, PUBLIC_API_KEY)

const commentsStore = writable()

export default {
    get existing() {
        return commentsStore;
    },

    comments: {

        async all() {
            const { data } = await supabase.from("Comments").select("*").order("created_at")

            return data
        },
        async create({ comment, user_name }
        ) {
            const { data } = await supabase.from("Comments").insert({ created_at: DateTime.now(), comment_text: comment, user_name: user_name }).select().maybeSingle();

            return data;
        }
    }
}