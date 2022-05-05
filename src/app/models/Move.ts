// Generated by https://quicktype.io

import { NamedAPIResource } from './NamedAPIResource';

export interface Move {
  accuracy: number;
  contest_combos: ContestCombos;
  contest_effect: ContestEffect;
  contest_type: NamedAPIResource;
  damage_class: NamedAPIResource;
  effect_chance: null;
  effect_changes: any[];
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  generation: NamedAPIResource;
  id: number;
  learned_by_pokemon: NamedAPIResource[];
  machines: Machine[];
  meta: Meta;
  name: string;
  names: Name[];
  past_values: any[];
  power: number;
  pp: number;
  priority: number;
  stat_changes: any[];
  super_contest_effect: ContestEffect;
  target: NamedAPIResource;
  type: NamedAPIResource;
}

export interface ContestCombos {
  normal: Normal;
  super: Normal;
}

export interface Normal {
  use_after: null;
  use_before: NamedAPIResource[] | null;
}

export interface ContestEffect {
  url: string;
}

export interface EffectEntry {
  effect: string;
  language: NamedAPIResource;
  short_effect: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface Machine {
  machine: {
    url: string;
  };
  version_group: NamedAPIResource;
}

export interface Meta {
  ailment: NamedAPIResource;
  ailment_chance: number;
  category: NamedAPIResource;
  crit_rate: number;
  drain: number;
  flinch_chance: number;
  healing: number;
  max_hits: number | null;
  max_turns: number | null;
  min_hits: number | null;
  min_turns: number | null;
  stat_chance: number;
}

export interface Name {
  language: NamedAPIResource;
  name: string;
}