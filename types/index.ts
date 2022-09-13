type Artist = {
  artist: {
    artist_id: number;
    artist_name: string;
    artist_name_translation_list: string[];
    artist_comment: string;
    artist_country: string;
    artist_alias_list: string[];
    artist_rating: number;
    artist_twitter_url: string;
    artist_credits: {
      artist_list: Artist[];
    };
    restricted: number;
    updated_time: Date;
    begin_year_date: string;
    begin_date: string;
    end_year_date: string;
    end_date: string;
  };
};

export type ChartingArtistResponse = {
  message: {
    headers: {
      status_code: number;
      executeT_time: number;
    };
    body: {
      artist_list: Artist[];
    };
  };
};

export type MusicGenre = {
  music_genre: {
    music_genre_id: number;
    music_genre_parent_id: number;
    music_genre_name: string;
    music_genre_name_extended: string;
    music_genre_vanity: string;
  };
};

export type Album = {
  album: {
    album_id: number;
    album_mid: string;
    album_name: string;
    album_rating: number;
    album_release_date: Date;
    artist_id: number;
    artist_name: string;
    primary_genres: {
      music_genre_list: MusicGenre[];
    };
    album_pline: string;
    album_copyright: string;
    album_label: string;
    restricted: number;
    updated_time: Date;
    external_ids: {
      spotify: string[];
      itunes: string[];
      amazon_music: string[];
    };
  };
};

export type AlbumListResponse = {
  message: {
    header: {
      status_code: number;
      execute_time: number;
      available: number;
    };
    body: {
      album_list: Album[];
    };
  };
};

export type Track = {
  track: {
    track_id: number;
    track_mbid: string;
    track_length: number;
    lyrics_id: number;
    instrumental: number;
    subtitle_id: number;
    track_name: string;
    track_rating: number;
    album_name: string;
    album_id: number;
    artist_id: number;
    artist_mbid: string;
    artist_name: string;
    updated_time: Date;
  };
};

export type TrackListResponse = {
  message: {
    header: {
      status_code: number;
      execute_time: number;
      available: number;
    };
    body: {
      track_list: Track[];
    };
  };
};
