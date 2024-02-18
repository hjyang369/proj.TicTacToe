import { atom } from "jotai";
import { inputValueData } from "../types/type";
import { initValue, whoIsStartPlayer } from "../modules/constants";

export const settingAtom = atom<inputValueData>(initValue);

export const playerOrderAtom = atom<inputValueData>(whoIsStartPlayer);
