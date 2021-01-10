export interface IBlog {
  status: string;
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
  published_at: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  coverImage: CoverImage;
  author: Author;
  id: string;
}

export interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Medium {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Small {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Formats {
  thumbnail: Thumbnail;
  large: Large;
  medium: Medium;
  small: Small;
}

export interface CoverImage {
  _id: string;
  name: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  width: number;
  height: number;
  url: string;
  formats: Formats;
  provider: string;
  related: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
}

export interface Thumbnail2 {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Formats2 {
  thumbnail: Thumbnail2;
}

export interface Picture {
  _id: string;
  name: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  width: number;
  height: number;
  url: string;
  formats: Formats2;
  provider: string;
  related: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
}

export interface Author {
  _id: string;
  name: string;
  published_at: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  picture: Picture;
  id: string;
}
