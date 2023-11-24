import { createFeature } from '@ngrx/store';
import { videoReducer } from './reducers/videos.reducer';

export const videoFeature = createFeature({
  name: 'videos',
  reducer: videoReducer,
});

export const { selectVideosState } = videoFeature;
