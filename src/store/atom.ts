import { atom } from "jotai";
import { inputValueData } from "../types/type";
import { initValue } from "../modules/constants";

export const settingAtom = atom<inputValueData>(initValue);
