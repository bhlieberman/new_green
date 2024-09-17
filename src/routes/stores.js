import {writable} from 'svelte/store'

/** @type string */
export let currentLang;

export let lang = writable("en")

const _ = lang.subscribe(v => {
  currentLang = v
})