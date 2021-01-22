export interface StatusState {
  loading: number;
  error?: number;
}

export const LOAD_PAGE = "LOAD_PAGE";
export const PAGE_LOADED = "PAGE_LOADED";

interface LoadPage {
  type: typeof LOAD_PAGE;
}

interface PageLoaded {
  type: typeof PAGE_LOADED;
  payload: { error?: number };
}

export type StatusTypes = LoadPage | PageLoaded;
