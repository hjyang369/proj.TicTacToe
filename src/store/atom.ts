import { atom } from "jotai";
import { TStringObj, TSelectValue } from "../types/type";
import { initValue, whoIsStartPlayer } from "../modules/constants";

export const settingAtom = atom<TSelectValue>(initValue);

export const playerOrderAtom = atom<TStringObj>(whoIsStartPlayer);
