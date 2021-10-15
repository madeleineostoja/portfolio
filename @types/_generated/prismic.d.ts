export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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
    _linkType?: Maybe<Scalars['String']>;
    _meta: Meta;
    body?: Maybe<Array<AboutBody>>;
    image?: Maybe<Scalars['Json']>;
    meta_cover?: Maybe<Scalars['Json']>;
    meta_description?: Maybe<Scalars['String']>;
    meta_title?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['Json']>;
  };

export type AboutBody = AboutBodyImages | AboutBodyRich_Text;

export type AboutBodyImages = {
  __typename?: 'AboutBodyImages';
  fields?: Maybe<Array<AboutBodyImagesFields>>;
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AboutBodyImagesFields = {
  __typename?: 'AboutBodyImagesFields';
  image?: Maybe<Scalars['Json']>;
};

export type AboutBodyRich_Text = {
  __typename?: 'AboutBodyRich_text';
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<AboutBodyRich_TextPrimary>;
  type?: Maybe<Scalars['String']>;
};

export type AboutBodyRich_TextPrimary = {
  __typename?: 'AboutBodyRich_textPrimary';
  content?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type AboutConnectionConnection = {
  __typename?: 'AboutConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AboutConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type AboutConnectionEdge = {
  __typename?: 'AboutConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: About;
};

export type Blog = _Document &
  _Linkable & {
    __typename?: 'Blog';
    _linkType?: Maybe<Scalars['String']>;
    _meta: Meta;
    meta_description?: Maybe<Scalars['String']>;
    meta_title?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['Json']>;
  };

/** A connection to a list of items. */
export type BlogConnectionConnection = {
  __typename?: 'BlogConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BlogConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type BlogConnectionEdge = {
  __typename?: 'BlogConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Blog;
};

export type Collection = _Document &
  _Linkable & {
    __typename?: 'Collection';
    _linkType?: Maybe<Scalars['String']>;
    _meta: Meta;
    meta_cover?: Maybe<Scalars['Json']>;
    meta_description?: Maybe<Scalars['String']>;
    meta_title?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    photos?: Maybe<Array<CollectionPhotos>>;
  };

/** A connection to a list of items. */
export type CollectionConnectionConnection = {
  __typename?: 'CollectionConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CollectionConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type CollectionConnectionEdge = {
  __typename?: 'CollectionConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Collection;
};

export type CollectionPhotos = {
  __typename?: 'CollectionPhotos';
  photo?: Maybe<_Linkable>;
};

export type Global = _Document &
  _Linkable & {
    __typename?: 'Global';
    _linkType?: Maybe<Scalars['String']>;
    _meta: Meta;
    collections?: Maybe<Array<GlobalCollections>>;
  };

export type GlobalCollections = {
  __typename?: 'GlobalCollections';
  collection?: Maybe<_Linkable>;
};

/** A connection to a list of items. */
export type GlobalConnectionConnection = {
  __typename?: 'GlobalConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GlobalConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type GlobalConnectionEdge = {
  __typename?: 'GlobalConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Global;
};

export type Meta = {
  __typename?: 'Meta';
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The id of the document. */
  id: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The tags of the document. */
  tags: Array<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Photo = _Document &
  _Linkable & {
    __typename?: 'Photo';
    _linkType?: Maybe<Scalars['String']>;
    _meta: Meta;
    camera?: Maybe<Scalars['String']>;
    film?: Maybe<Scalars['String']>;
    photo?: Maybe<Scalars['Json']>;
    store_link?: Maybe<_Linkable>;
    title?: Maybe<Scalars['String']>;
  };

/** A connection to a list of items. */
export type PhotoConnectionConnection = {
  __typename?: 'PhotoConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PhotoConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type PhotoConnectionEdge = {
  __typename?: 'PhotoConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Photo;
};

export type Post = _Document &
  _Linkable & {
    __typename?: 'Post';
    _linkType?: Maybe<Scalars['String']>;
    _meta: Meta;
    body?: Maybe<Array<PostBody>>;
    feature_image?: Maybe<Scalars['Json']>;
    summary?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['Json']>;
  };

export type PostBody = PostBodyContent | PostBodyImages;

export type PostBodyContent = {
  __typename?: 'PostBodyContent';
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PostBodyContentPrimary>;
  type?: Maybe<Scalars['String']>;
};

export type PostBodyContentPrimary = {
  __typename?: 'PostBodyContentPrimary';
  content?: Maybe<Scalars['Json']>;
};

export type PostBodyImages = {
  __typename?: 'PostBodyImages';
  fields?: Maybe<Array<PostBodyImagesFields>>;
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type PostBodyImagesFields = {
  __typename?: 'PostBodyImagesFields';
  image?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type PostConnectionConnection = {
  __typename?: 'PostConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PostConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type PostConnectionEdge = {
  __typename?: 'PostConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Post;
};

export type Query = {
  __typename?: 'Query';
  _allDocuments: _DocumentConnection;
  about?: Maybe<About>;
  allAbouts: AboutConnectionConnection;
  allBlogs: BlogConnectionConnection;
  allCollections: CollectionConnectionConnection;
  allGlobals: GlobalConnectionConnection;
  allPhotos: PhotoConnectionConnection;
  allPosts: PostConnectionConnection;
  collection?: Maybe<Collection>;
  photo?: Maybe<Photo>;
  post?: Maybe<Post>;
};

export type Query_AllDocumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  similar?: Maybe<Similar>;
  sortBy?: Maybe<SortDocumentsBy>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
};

export type QueryAboutArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};

export type QueryAllAboutsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  similar?: Maybe<Similar>;
  sortBy?: Maybe<SortAbouty>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  where?: Maybe<WhereAbout>;
};

export type QueryAllBlogsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  similar?: Maybe<Similar>;
  sortBy?: Maybe<SortBlogy>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  where?: Maybe<WhereBlog>;
};

export type QueryAllCollectionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  similar?: Maybe<Similar>;
  sortBy?: Maybe<SortCollectiony>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  where?: Maybe<WhereCollection>;
};

export type QueryAllGlobalsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  similar?: Maybe<Similar>;
  sortBy?: Maybe<SortGlobaly>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  where?: Maybe<WhereGlobal>;
};

export type QueryAllPhotosArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  similar?: Maybe<Similar>;
  sortBy?: Maybe<SortPhotoy>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  where?: Maybe<WherePhoto>;
};

export type QueryAllPostsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  similar?: Maybe<Similar>;
  sortBy?: Maybe<SortPosty>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  where?: Maybe<WherePost>;
};

export type QueryCollectionArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};

export type QueryPhotoArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};

export type QueryPostArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};

export type RelatedDocument = {
  __typename?: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
  /** The type of the document. */
  type: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
};

export enum SortAbouty {
  MetaDescriptionAsc = 'meta_description_ASC',
  MetaDescriptionDesc = 'meta_description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  MetaTitleAsc = 'meta_title_ASC',
  MetaTitleDesc = 'meta_title_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortBlogy {
  MetaDescriptionAsc = 'meta_description_ASC',
  MetaDescriptionDesc = 'meta_description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  MetaTitleAsc = 'meta_title_ASC',
  MetaTitleDesc = 'meta_title_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortCollectiony {
  MetaDescriptionAsc = 'meta_description_ASC',
  MetaDescriptionDesc = 'meta_description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  MetaTitleAsc = 'meta_title_ASC',
  MetaTitleDesc = 'meta_title_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
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
  CameraAsc = 'camera_ASC',
  CameraDesc = 'camera_DESC',
  FilmAsc = 'film_ASC',
  FilmDesc = 'film_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortPosty {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SummaryAsc = 'summary_ASC',
  SummaryDesc = 'summary_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type WhereAbout = {
  meta_description?: Maybe<Scalars['String']>;
  meta_description_fulltext?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_title_fulltext?: Maybe<Scalars['String']>;
  /** title */
  title_fulltext?: Maybe<Scalars['String']>;
};

export type WhereBlog = {
  meta_description?: Maybe<Scalars['String']>;
  meta_description_fulltext?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_title_fulltext?: Maybe<Scalars['String']>;
  /** title */
  title_fulltext?: Maybe<Scalars['String']>;
};

export type WhereCollection = {
  meta_description?: Maybe<Scalars['String']>;
  meta_description_fulltext?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_title_fulltext?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_fulltext?: Maybe<Scalars['String']>;
  photos?: Maybe<WhereCollectionPhotos>;
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
  camera?: Maybe<Scalars['String']>;
  camera_fulltext?: Maybe<Scalars['String']>;
  film?: Maybe<Scalars['String']>;
  film_fulltext?: Maybe<Scalars['String']>;
  /** store_link */
  store_link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_fulltext?: Maybe<Scalars['String']>;
};

export type WherePost = {
  summary?: Maybe<Scalars['String']>;
  summary_fulltext?: Maybe<Scalars['String']>;
  /** title */
  title_fulltext?: Maybe<Scalars['String']>;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename?: '_DocumentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename?: '_DocumentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: _Document;
};

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename?: '_ExternalLink';
  _linkType?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

/** A linked file */
export type _FileLink = _Linkable & {
  __typename?: '_FileLink';
  _linkType?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  size: Scalars['Long'];
  url: Scalars['String'];
};

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename?: '_ImageLink';
  _linkType?: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  name: Scalars['String'];
  size: Scalars['Long'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars['String']>;
};

export type Similar = {
  documentId: Scalars['String'];
  max: Scalars['Int'];
};
