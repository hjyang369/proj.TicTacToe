import { atom } from "jotai";
import { TStringObj } from "../types/type";
import { initValue, whoIsStartPlayer } from "../modules/constants";

export const settingAtom = atom<TStringObj>(initValue);

export const playerOrderAtom = atom<TStringObj>(whoIsStartPlayer);
