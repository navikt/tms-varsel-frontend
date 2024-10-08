import {atom, type PreinitializedWritableAtom} from 'nanostores';
import type {ToggleOptions} from "@components/PageHeader/Filter/Filter.tsx";

export const TIDLIGERE_HASH = "#tidligere"
export const $showTidligere: PreinitializedWritableAtom<boolean>   = atom(window.location.hash === TIDLIGERE_HASH);

export const $filterSearch: PreinitializedWritableAtom<string>  = atom("");
export const $filterVarselType: PreinitializedWritableAtom<ToggleOptions>  = atom("alle");

export const setFilterSearch = (search: string) => {
    $filterSearch.set(search)
}