// 상수, 타입
import { initValue, whoIsStartPlayer } from "../modules/constants";
import { TStringObj, TSelectValue } from "../types/type";
//
import { atom } from "jotai";

// 유저가 설정한 조건 저장한 전역 상태
export const settingAtom = atom<TSelectValue>(initValue);
// 게임 플레이할 순서
export const playerOrderAtom = atom<TStringObj>(whoIsStartPlayer);
