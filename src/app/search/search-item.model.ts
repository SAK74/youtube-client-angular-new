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

export interface ItemModel {
  kind: string;
  etag: string;
  id: string;
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
