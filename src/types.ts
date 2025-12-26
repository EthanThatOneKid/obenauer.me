export type FileSearchStore = {
  name: string;
  displayName: string;
};

export type Document = {
  name: string;
  displayName: string;
};


export type PagerHelper<T> = {
  page?: T[];
  hasNextPage?: () => boolean;
  nextPage?: () => Promise<PagerHelper<T>>;
};

export type OperationHelper = {
  name: string;
  done?: boolean;
};
