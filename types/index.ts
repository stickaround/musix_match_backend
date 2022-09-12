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
