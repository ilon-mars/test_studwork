import { BaseResponse } from "@/types/BaseResponse";

export type Starship = {
  MGLT: string,
  cargo_capacity: string | number,
  consumables: string,
  cost_in_credits: string | number,
  created: Date,
  crew: string | number,
  edited: Date,
  hyperdrive_rating: string | number,
  length: string | number,
  manufacturer: string,
  max_atmosphering_speed: string,
  model: string,
  name: string,
  passengers: string | number,
  films: string[],
  pilots: string[],
  starship_class: string,
  url: string
}

export type StarshipResponseChunks = {
  firstChunk: BaseResponse<Starship>,
  otherChunks: Promise<BaseResponse<Starship>[]>
}

export const isStarshipResponse = (response: unknown): response is BaseResponse<Starship> =>
  (response as BaseResponse<Starship>).count !== undefined;

export const isStarshipResponseChunks = (response: unknown): response is StarshipResponseChunks =>
  (response as StarshipResponseChunks).firstChunk !== undefined;
