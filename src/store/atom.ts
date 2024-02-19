// 상수, 타입
import { initValue, whoIsStartPlayer } from "../modules/constants";
import { TStringObj, TSelectValue } from "../types/type";
//
import { atom } from "jotai";

export const settingAtom = atom<TSelectValue>(initValue);

export const playerOrderAtom = atom<TStringObj>(whoIsStartPlayer);
