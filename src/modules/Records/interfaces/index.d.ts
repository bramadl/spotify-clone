import type { TrackArtist } from "@/modules/Tracks/interfaces";

export interface Record {
  id: string;
  thumbnail: string;
  title: string;
  description?: string;
  artist?: Array<TrackArtist>;
  color?: string;
  type: string;
}
