interface ThumbType {
  url: string;
  width: number;
  height: number;
}

type Statistic =
  | 'viewCount'
  | 'likeCount'
  | 'dislikeCount'
  | 'favoriteCount'
  | 'commentCount';

export interface SourceModel {
  kind: string;
  etag: string;
  id: Record<'kind' | 'videoId' | 'channelId' | 'playlistId', string>;

  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: ThumbType;
      medium: ThumbType;
      high: ThumbType;
      standard: ThumbType;
      maxres: ThumbType;
    };
    channelTitle: string;
  };
}

export interface ItemModel extends SourceModel {
  snippet: SourceModel['snippet'] & {
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: Record<Statistic, string>;
}
