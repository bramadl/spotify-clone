export interface TrackArtist {
  id: string;
  name: string;
  profile_url: string;
}

export interface Track {
  thumbnail: string;
  title: string;
  track_url: string;
  artists: Array<TrackArtist>;
  is_liked: boolean;
}
