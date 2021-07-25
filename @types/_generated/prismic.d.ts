export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime */
  DateTime: any;
  /** Raw JSON value */
  Json: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export type About = _Document &
  _Linkable & {
    __typename?: 'About';
    title?: Maybe<Scalars['Json']>;
    image?: Maybe<Scalars['Json']>;
    body?: Maybe<Array<AboutBody>>;
    meta_title?: Maybe<Scalars['String']>;
    meta_description?: Maybe<Scalars['String']>;
    meta_cover?: Maybe<Scalars['Json']>;
    _meta: Meta;
    _linkType?: Maybe<Scalars['String']>;
  };

export type AboutBody = AboutBodyRich_Text | AboutBodyImages;

export type AboutBodyImages = {
  __typename?: 'AboutBodyImages';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<AboutBodyImagesFields>>;
};

export type AboutBodyImagesFields = {
  __typename?: 'AboutBodyImagesFields';
  image?: Maybe<Scalars['Json']>;
};

export type AboutBodyRich_Text = {
  __typename?: 'AboutBodyRich_text';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<AboutBodyRich_TextPrimary>;
};

export type AboutBodyRich_TextPrimary = {
  __typename?: 'AboutBodyRich_textPrimary';
  content?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type AboutConnectionConnection = {
  __typename?: 'AboutConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AboutConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type AboutConnectionEdge = {
  __typename?: 'AboutConnectionEdge';
  /** The item at the end of the edge. */
  node: About;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Blog = _Document &
  _Linkable & {
    __typename?: 'Blog';
    title?: Maybe<Scalars['Json']>;
    meta_title?: Maybe<Scalars['String']>;
    meta_description?: Maybe<Scalars['String']>;
    _meta: Meta;
    _linkType?: Maybe<Scalars['String']>;
  };

/** A connection to a list of items. */
export type BlogConnectionConnection = {
  __typename?: 'BlogConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BlogConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type BlogConnectionEdge = {
  __typename?: 'BlogConnectionEdge';
  /** The item at the end of the edge. */
  node: Blog;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Collection = _Document &
  _Linkable & {
    __typename?: 'Collection';
    name?: Maybe<Scalars['String']>;
    photos?: Maybe<Array<CollectionPhotos>>;
    meta_title?: Maybe<Scalars['String']>;
    meta_description?: Maybe<Scalars['String']>;
    meta_cover?: Maybe<Scalars['Json']>;
    _meta: Meta;
    _linkType?: Maybe<Scalars['String']>;
  };

/** A connection to a list of items. */
export type CollectionConnectionConnection = {
  __typename?: 'CollectionConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CollectionConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type CollectionConnectionEdge = {
  __typename?: 'CollectionConnectionEdge';
  /** The item at the end of the edge. */
  node: Collection;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type CollectionPhotos = {
  __typename?: 'CollectionPhotos';
  photo?: Maybe<_Linkable>;
};

export type Global = _Document &
  _Linkable & {
    __typename?: 'Global';
    collections?: Maybe<Array<GlobalCollections>>;
    _meta: Meta;
    _linkType?: Maybe<Scalars['String']>;
  };

export type GlobalCollections = {
  __typename?: 'GlobalCollections';
  collection?: Maybe<_Linkable>;
};

/** A connection to a list of items. */
export type GlobalConnectionConnection = {
  __typename?: 'GlobalConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GlobalConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type GlobalConnectionEdge = {
  __typename?: 'GlobalConnectionEdge';
  /** The item at the end of the edge. */
  node: Global;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Meta = {
  __typename?: 'Meta';
  /** The id of the document. */
  id: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The tags of the document. */
  tags: Array<Scalars['String']>;
  /** The language of the document. */
  lang: Scalars['String'];
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Photo = _Document &
  _Linkable & {
    __typename?: 'Photo';
    title?: Maybe<Scalars['String']>;
    photo?: Maybe<Scalars['Json']>;
    camera?: Maybe<Scalars['String']>;
    film?: Maybe<Scalars['String']>;
    store_link?: Maybe<_Linkable>;
    _meta: Meta;
    _linkType?: Maybe<Scalars['String']>;
  };

/** A connection to a list of items. */
export type PhotoConnectionConnection = {
  __typename?: 'PhotoConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PhotoConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type PhotoConnectionEdge = {
  __typename?: 'PhotoConnectionEdge';
  /** The item at the end of the edge. */
  node: Photo;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Post = _Document &
  _Linkable & {
    __typename?: 'Post';
    title?: Maybe<Scalars['Json']>;
    summary?: Maybe<Scalars['String']>;
    feature_image?: Maybe<Scalars['Json']>;
    body?: Maybe<Array<PostBody>>;
    _meta: Meta;
    _linkType?: Maybe<Scalars['String']>;
  };

export type PostBody = PostBodyContent | PostBodyImages;

export type PostBodyContent = {
  __typename?: 'PostBodyContent';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PostBodyContentPrimary>;
};

export type PostBodyContentPrimary = {
  __typename?: 'PostBodyContentPrimary';
  content?: Maybe<Scalars['Json']>;
};

export type PostBodyImages = {
  __typename?: 'PostBodyImages';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<PostBodyImagesFields>>;
};

export type PostBodyImagesFields = {
  __typename?: 'PostBodyImagesFields';
  image?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type PostConnectionConnection = {
  __typename?: 'PostConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PostConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type PostConnectionEdge = {
  __typename?: 'PostConnectionEdge';
  /** The item at the end of the edge. */
  node: Post;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  _allDocuments: _DocumentConnection;
  post?: Maybe<Post>;
  allPosts: PostConnectionConnection;
  about?: Maybe<About>;
  allAbouts: AboutConnectionConnection;
  collection?: Maybe<Collection>;
  allCollections: CollectionConnectionConnection;
  photo?: Maybe<Photo>;
  allPhotos: PhotoConnectionConnection;
  allGlobals: GlobalConnectionConnection;
  allBlogs: BlogConnectionConnection;
};

export type Query_AllDocumentsArgs = {
  sortBy?: Maybe<SortDocumentsBy>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryPostArgs = {
  uid: Scalars['String'];
  lang: Scalars['String'];
};

export type QueryAllPostsArgs = {
  sortBy?: Maybe<SortPosty>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WherePost>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryAboutArgs = {
  uid: Scalars['String'];
  lang: Scalars['String'];
};

export type QueryAllAboutsArgs = {
  sortBy?: Maybe<SortAbouty>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereAbout>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryCollectionArgs = {
  uid: Scalars['String'];
  lang: Scalars['String'];
};

export type QueryAllCollectionsArgs = {
  sortBy?: Maybe<SortCollectiony>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereCollection>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryPhotoArgs = {
  uid: Scalars['String'];
  lang: Scalars['String'];
};

export type QueryAllPhotosArgs = {
  sortBy?: Maybe<SortPhotoy>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WherePhoto>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryAllGlobalsArgs = {
  sortBy?: Maybe<SortGlobaly>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereGlobal>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryAllBlogsArgs = {
  sortBy?: Maybe<SortBlogy>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereBlog>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type RelatedDocument = {
  __typename?: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
};

export enum SortAbouty {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  MetaTitleAsc = 'meta_title_ASC',
  MetaTitleDesc = 'meta_title_DESC',
  MetaDescriptionAsc = 'meta_description_ASC',
  MetaDescriptionDesc = 'meta_description_DESC'
}

export enum SortBlogy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  MetaTitleAsc = 'meta_title_ASC',
  MetaTitleDesc = 'meta_title_DESC',
  MetaDescriptionAsc = 'meta_description_ASC',
  MetaDescriptionDesc = 'meta_description_DESC'
}

export enum SortCollectiony {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  MetaTitleAsc = 'meta_title_ASC',
  MetaTitleDesc = 'meta_title_DESC',
  MetaDescriptionAsc = 'meta_description_ASC',
  MetaDescriptionDesc = 'meta_description_DESC'
}

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortGlobaly {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortPhotoy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  CameraAsc = 'camera_ASC',
  CameraDesc = 'camera_DESC',
  FilmAsc = 'film_ASC',
  FilmDesc = 'film_DESC'
}

export enum SortPosty {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SummaryAsc = 'summary_ASC',
  SummaryDesc = 'summary_DESC'
}

export type WhereAbout = {
  /** title */
  title_fulltext?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_title_fulltext?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_description_fulltext?: Maybe<Scalars['String']>;
};

export type WhereBlog = {
  /** title */
  title_fulltext?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_title_fulltext?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_description_fulltext?: Maybe<Scalars['String']>;
};

export type WhereCollection = {
  name?: Maybe<Scalars['String']>;
  name_fulltext?: Maybe<Scalars['String']>;
  photos?: Maybe<WhereCollectionPhotos>;
  meta_title?: Maybe<Scalars['String']>;
  meta_title_fulltext?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_description_fulltext?: Maybe<Scalars['String']>;
};

export type WhereCollectionPhotos = {
  /** photo */
  photo?: Maybe<Scalars['String']>;
};

export type WhereGlobal = {
  collections?: Maybe<WhereGlobalCollections>;
};

export type WhereGlobalCollections = {
  /** collection */
  collection?: Maybe<Scalars['String']>;
};

export type WherePhoto = {
  title?: Maybe<Scalars['String']>;
  title_fulltext?: Maybe<Scalars['String']>;
  camera?: Maybe<Scalars['String']>;
  camera_fulltext?: Maybe<Scalars['String']>;
  film?: Maybe<Scalars['String']>;
  film_fulltext?: Maybe<Scalars['String']>;
  /** store_link */
  store_link?: Maybe<Scalars['String']>;
};

export type WherePost = {
  /** title */
  title_fulltext?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  summary_fulltext?: Maybe<Scalars['String']>;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename?: '_DocumentConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename?: '_DocumentEdge';
  /** The item at the end of the edge. */
  node: _Document;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename?: '_ExternalLink';
  url: Scalars['String'];
  target?: Maybe<Scalars['String']>;
  _linkType?: Maybe<Scalars['String']>;
};

/** A linked file */
export type _FileLink = _Linkable & {
  __typename?: '_FileLink';
  name: Scalars['String'];
  url: Scalars['String'];
  size: Scalars['Long'];
  _linkType?: Maybe<Scalars['String']>;
};

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename?: '_ImageLink';
  name: Scalars['String'];
  url: Scalars['String'];
  size: Scalars['Long'];
  height: Scalars['Int'];
  width: Scalars['Int'];
  _linkType?: Maybe<Scalars['String']>;
};

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars['String']>;
};

export type Similar = {
  documentId: Scalars['String'];
  max: Scalars['Int'];
};
