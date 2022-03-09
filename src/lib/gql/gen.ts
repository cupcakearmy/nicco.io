import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** A Field Group registered by ACF */
export type GQLAcfFieldGroup = {
  /** The name of the ACF Field Group */
  readonly fieldGroupName: Maybe<Scalars['String']>;
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type GQLAvatar = {
  readonly __typename?: 'Avatar';
  /** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
  readonly default: Maybe<Scalars['String']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  readonly extraAttr: Maybe<Scalars['String']>;
  /** Whether to always show the default image, never the Gravatar. */
  readonly forceDefault: Maybe<Scalars['Boolean']>;
  /** Whether the avatar was successfully found. */
  readonly foundAvatar: Maybe<Scalars['Boolean']>;
  /** Height of the avatar image. */
  readonly height: Maybe<Scalars['Int']>;
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
  readonly rating: Maybe<Scalars['String']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  readonly scheme: Maybe<Scalars['String']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  readonly size: Maybe<Scalars['Int']>;
  /** URL for the gravatar image source. */
  readonly url: Maybe<Scalars['String']>;
  /** Width of the avatar image. */
  readonly width: Maybe<Scalars['Int']>;
};

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum GQLAvatarRatingEnum {
  /** Indicates a G level avatar rating level. */
  G = 'G',
  /** Indicates a PG level avatar rating level. */
  Pg = 'PG',
  /** Indicates an R level avatar rating level. */
  R = 'R',
  /** Indicates an X level avatar rating level. */
  X = 'X'
}

/** The category type */
export type GQLCategory = GQLDatabaseIdentifier & GQLHierarchicalTermNode & GQLMenuItemLinkable & GQLNode & GQLTermNode & GQLUniformResourceIdentifiable & {
  readonly __typename?: 'Category';
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<GQLCategoryToAncestorsCategoryConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly categoryId: Maybe<Scalars['Int']>;
  /** Connection between the category type and the category type */
  readonly children: Maybe<GQLCategoryToCategoryConnection>;
  /** Connection between the category type and the ContentNode type */
  readonly contentNodes: Maybe<GQLCategoryToContentNodeConnection>;
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly databaseId: Scalars['Int'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<GQLTermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<GQLTermNodeToEnqueuedStylesheetConnection>;
  /** The unique resource identifier path */
  readonly id: Scalars['ID'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']>;
  /** Connection between the category type and the category type */
  readonly parent: Maybe<GQLCategoryToParentCategoryConnectionEdge>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** Connection between the category type and the post type */
  readonly posts: Maybe<GQLCategoryToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']>;
  /** Connection between the category type and the Taxonomy type */
  readonly taxonomy: Maybe<GQLCategoryToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  readonly taxonomyName: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};


/** The category type */
export type GQLCategoryAncestorsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The category type */
export type GQLCategoryChildrenArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLCategoryToCategoryConnectionWhereArgs>;
};


/** The category type */
export type GQLCategoryContentNodesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLCategoryToContentNodeConnectionWhereArgs>;
};


/** The category type */
export type GQLCategoryEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The category type */
export type GQLCategoryEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The category type */
export type GQLCategoryPostsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLCategoryToPostConnectionWhereArgs>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum GQLCategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the category type and the category type */
export type GQLCategoryToAncestorsCategoryConnection = {
  readonly __typename?: 'CategoryToAncestorsCategoryConnection';
  /** Edges for the CategoryToAncestorsCategoryConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLCategoryToAncestorsCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLCategory>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLCategoryToAncestorsCategoryConnectionEdge = {
  readonly __typename?: 'CategoryToAncestorsCategoryConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLCategory>;
};

/** Connection between the category type and the category type */
export type GQLCategoryToCategoryConnection = {
  readonly __typename?: 'CategoryToCategoryConnection';
  /** Edges for the CategoryToCategoryConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLCategoryToCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLCategory>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLCategoryToCategoryConnectionEdge = {
  readonly __typename?: 'CategoryToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLCategory>;
};

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type GQLCategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<GQLTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the category type and the ContentNode type */
export type GQLCategoryToContentNodeConnection = {
  readonly __typename?: 'CategoryToContentNodeConnection';
  /** Edges for the CategoryToContentNodeConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLCategoryToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLContentNode>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLCategoryToContentNodeConnectionEdge = {
  readonly __typename?: 'CategoryToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLContentNode>;
};

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export type GQLCategoryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypesOfCategoryEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the category type and the category type */
export type GQLCategoryToParentCategoryConnectionEdge = {
  readonly __typename?: 'CategoryToParentCategoryConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLCategory>;
};

/** Connection between the category type and the post type */
export type GQLCategoryToPostConnection = {
  readonly __typename?: 'CategoryToPostConnection';
  /** Edges for the CategoryToPostConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLCategoryToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLPost>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLCategoryToPostConnectionEdge = {
  readonly __typename?: 'CategoryToPostConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLPost>;
};

/** Arguments for filtering the CategoryToPostConnection connection */
export type GQLCategoryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  readonly categoryId: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  readonly categoryName: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Tag Slug */
  readonly tag: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  readonly tagId: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  readonly tagSlugAnd: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  readonly tagSlugIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the category type and the Taxonomy type */
export type GQLCategoryToTaxonomyConnectionEdge = {
  readonly __typename?: 'CategoryToTaxonomyConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLTaxonomy>;
};

/** A Comment object */
export type GQLComment = GQLDatabaseIdentifier & GQLNode & {
  readonly __typename?: 'Comment';
  /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
  readonly agent: Maybe<Scalars['String']>;
  /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
  readonly approved: Maybe<Scalars['Boolean']>;
  /** The author of the comment */
  readonly author: Maybe<GQLCommentToCommenterConnectionEdge>;
  /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
  readonly authorIp: Maybe<Scalars['String']>;
  /**
   * ID for the comment, unique among comments.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly commentId: Maybe<Scalars['Int']>;
  /** Connection between the Comment type and the ContentNode type */
  readonly commentedOn: Maybe<GQLCommentToContentNodeConnectionEdge>;
  /** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
  readonly content: Maybe<Scalars['String']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
  readonly date: Maybe<Scalars['String']>;
  /** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
  readonly dateGmt: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment object */
  readonly id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
  readonly karma: Maybe<Scalars['Int']>;
  /** Connection between the Comment type and the Comment type */
  readonly parent: Maybe<GQLCommentToParentCommentConnectionEdge>;
  /** The database id of the parent comment node or null if it is the root comment */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent comment node. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** Connection between the Comment type and the Comment type */
  readonly replies: Maybe<GQLCommentToCommentConnection>;
  /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
  readonly type: Maybe<Scalars['String']>;
};


/** A Comment object */
export type GQLCommentContentArgs = {
  format: InputMaybe<GQLPostObjectFieldFormatEnum>;
};


/** A Comment object */
export type GQLCommentParentArgs = {
  where: InputMaybe<GQLCommentToParentCommentConnectionWhereArgs>;
};


/** A Comment object */
export type GQLCommentRepliesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLCommentToCommentConnectionWhereArgs>;
};

/** A Comment Author object */
export type GQLCommentAuthor = GQLCommenter & GQLNode & {
  readonly __typename?: 'CommentAuthor';
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  readonly avatar: Maybe<GQLAvatar>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int'];
  /** The email for the comment author */
  readonly email: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author object */
  readonly id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** The name for the comment author. */
  readonly name: Maybe<Scalars['String']>;
  /** The url the comment author. */
  readonly url: Maybe<Scalars['String']>;
};


/** A Comment Author object */
export type GQLCommentAuthorAvatarArgs = {
  forceDefault: InputMaybe<Scalars['Boolean']>;
  rating: InputMaybe<GQLAvatarRatingEnum>;
  size?: InputMaybe<Scalars['Int']>;
};

/** Connection between the Comment type and the Comment type */
export type GQLCommentToCommentConnection = {
  readonly __typename?: 'CommentToCommentConnection';
  /** Edges for the CommentToCommentConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLCommentToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLComment>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLCommentToCommentConnectionEdge = {
  readonly __typename?: 'CommentToCommentConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLComment>;
};

/** Arguments for filtering the CommentToCommentConnection connection */
export type GQLCommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  readonly authorEmail: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  readonly authorUrl: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  readonly commentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  readonly commentType: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  readonly contentName: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: InputMaybe<GQLCommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  readonly status: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  readonly userId: InputMaybe<Scalars['ID']>;
};

/** Connection between the Comment type and the Commenter type */
export type GQLCommentToCommenterConnectionEdge = {
  readonly __typename?: 'CommentToCommenterConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLCommenter>;
};

/** Connection between the Comment type and the ContentNode type */
export type GQLCommentToContentNodeConnectionEdge = {
  readonly __typename?: 'CommentToContentNodeConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLContentNode>;
};

/** Connection between the Comment type and the Comment type */
export type GQLCommentToParentCommentConnectionEdge = {
  readonly __typename?: 'CommentToParentCommentConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLComment>;
};

/** Arguments for filtering the CommentToParentCommentConnection connection */
export type GQLCommentToParentCommentConnectionWhereArgs = {
  /** Comment author email address. */
  readonly authorEmail: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  readonly authorUrl: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  readonly commentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  readonly commentType: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  readonly contentName: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: InputMaybe<GQLCommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  readonly status: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  readonly userId: InputMaybe<Scalars['ID']>;
};

/** The author of a comment */
export type GQLCommenter = {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  readonly avatar: Maybe<GQLAvatar>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int'];
  /** The email address of the author of a comment. */
  readonly email: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author. */
  readonly id: Scalars['ID'];
  /** Whether the author information is considered restricted. (not fully public) */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** The name of the author of a comment. */
  readonly name: Maybe<Scalars['String']>;
  /** The url of the author of a comment. */
  readonly url: Maybe<Scalars['String']>;
};

/** Options for ordering the connection */
export enum GQLCommentsConnectionOrderbyEnum {
  /** Order by browser user agent of the commenter. */
  CommentAgent = 'COMMENT_AGENT',
  /** Order by true/false approval of the comment. */
  CommentApproved = 'COMMENT_APPROVED',
  /** Order by name of the comment author. */
  CommentAuthor = 'COMMENT_AUTHOR',
  /** Order by e-mail of the comment author. */
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  /** Order by IP address of the comment author. */
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  /** Order by URL address of the comment author. */
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  /** Order by the comment contents. */
  CommentContent = 'COMMENT_CONTENT',
  /** Order by date/time timestamp of the comment. */
  CommentDate = 'COMMENT_DATE',
  /** Order by GMT timezone date/time timestamp of the comment. */
  CommentDateGmt = 'COMMENT_DATE_GMT',
  /** Order by the globally unique identifier for the comment object */
  CommentId = 'COMMENT_ID',
  /** Order by the array list of comment IDs listed in the where clause. */
  CommentIn = 'COMMENT_IN',
  /** Order by the comment karma score. */
  CommentKarma = 'COMMENT_KARMA',
  /** Order by the comment parent ID. */
  CommentParent = 'COMMENT_PARENT',
  /** Order by the post object ID. */
  CommentPostId = 'COMMENT_POST_ID',
  /** Order by the the type of comment, such as 'comment', 'pingback', or 'trackback'. */
  CommentType = 'COMMENT_TYPE',
  /** Order by the user ID. */
  UserId = 'USER_ID'
}

/** Nodes used to manage content */
export type GQLContentNode = {
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<GQLContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String'];
  /** The ID of the node in the database. */
  readonly databaseId: Scalars['Int'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  readonly editingLockedBy: Maybe<GQLContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<GQLContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<GQLContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  readonly guid: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  readonly id: Scalars['ID'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  readonly isPreview: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<GQLContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['String']>;
  /** The database id of the preview node */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  readonly previewRevisionId: Maybe<Scalars['ID']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  readonly slug: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<GQLContentTemplate>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};


/** Nodes used to manage content */
export type GQLContentNodeEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** Nodes used to manage content */
export type GQLContentNodeEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum GQLContentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the ContentNode type and the ContentType type */
export type GQLContentNodeToContentTypeConnectionEdge = {
  readonly __typename?: 'ContentNodeToContentTypeConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLContentType>;
};

/** Connection between the ContentNode type and the User type */
export type GQLContentNodeToEditLastConnectionEdge = {
  readonly __typename?: 'ContentNodeToEditLastConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLUser>;
};

/** Connection between the ContentNode type and the User type */
export type GQLContentNodeToEditLockConnectionEdge = {
  readonly __typename?: 'ContentNodeToEditLockConnectionEdge';
  /** The timestamp for when the node was last edited */
  readonly lockTimestamp: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLUser>;
};

/** Connection between the ContentNode type and the EnqueuedScript type */
export type GQLContentNodeToEnqueuedScriptConnection = {
  readonly __typename?: 'ContentNodeToEnqueuedScriptConnection';
  /** Edges for the ContentNodeToEnqueuedScriptConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLContentNodeToEnqueuedScriptConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLEnqueuedScript>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLContentNodeToEnqueuedScriptConnectionEdge = {
  readonly __typename?: 'ContentNodeToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLEnqueuedScript>;
};

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export type GQLContentNodeToEnqueuedStylesheetConnection = {
  readonly __typename?: 'ContentNodeToEnqueuedStylesheetConnection';
  /** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLContentNodeToEnqueuedStylesheetConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLEnqueuedStylesheet>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLContentNodeToEnqueuedStylesheetConnectionEdge = {
  readonly __typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLEnqueuedStylesheet>;
};

/** A union of Content Node Types that support revisions */
export type GQLContentRevisionUnion = GQLPage | GQLPost;

/** The template assigned to a node of content */
export type GQLContentTemplate = {
  /** The name of the template */
  readonly templateName: Maybe<Scalars['String']>;
};

/** An Post Type object */
export type GQLContentType = GQLNode & GQLUniformResourceIdentifiable & {
  readonly __typename?: 'ContentType';
  /** Whether this content type should can be exported. */
  readonly canExport: Maybe<Scalars['Boolean']>;
  /** Connection between the ContentType type and the Taxonomy type */
  readonly connectedTaxonomies: Maybe<GQLContentTypeToTaxonomyConnection>;
  /** Connection between the ContentType type and the ContentNode type */
  readonly contentNodes: Maybe<GQLContentTypeToContentNodeConnection>;
  /** Whether content of this type should be deleted when the author of it is deleted from the system. */
  readonly deleteWithUser: Maybe<Scalars['Boolean']>;
  /** Description of the content type. */
  readonly description: Maybe<Scalars['String']>;
  /** Whether to exclude nodes of this content type from front end search results. */
  readonly excludeFromSearch: Maybe<Scalars['Boolean']>;
  /** The plural name of the content type within the GraphQL Schema. */
  readonly graphqlPluralName: Maybe<Scalars['String']>;
  /** The singular name of the content type within the GraphQL Schema. */
  readonly graphqlSingleName: Maybe<Scalars['String']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  readonly hasArchive: Maybe<Scalars['Boolean']>;
  /** Whether the content type is hierarchical, for example pages. */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier of the post-type object. */
  readonly id: Scalars['ID'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether this page is set to the static front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** Display name of the content type. */
  readonly label: Maybe<Scalars['String']>;
  /** Details about the content type labels. */
  readonly labels: Maybe<GQLPostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  readonly menuIcon: Maybe<Scalars['String']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  readonly menuPosition: Maybe<Scalars['Int']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  readonly name: Maybe<Scalars['String']>;
  /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
  readonly public: Maybe<Scalars['Boolean']>;
  /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
  readonly publiclyQueryable: Maybe<Scalars['Boolean']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  readonly restBase: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  readonly restControllerClass: Maybe<Scalars['String']>;
  /** Makes this content type available via the admin bar. */
  readonly showInAdminBar: Maybe<Scalars['Boolean']>;
  /** Whether to add the content type to the GraphQL Schema. */
  readonly showInGraphql: Maybe<Scalars['Boolean']>;
  /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
  readonly showInMenu: Maybe<Scalars['Boolean']>;
  /** Makes this content type available for selection in navigation menus. */
  readonly showInNavMenus: Maybe<Scalars['Boolean']>;
  /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
  readonly showInRest: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing this content type in the admin. */
  readonly showUi: Maybe<Scalars['Boolean']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};


/** An Post Type object */
export type GQLContentTypeConnectedTaxonomiesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** An Post Type object */
export type GQLContentTypeContentNodesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLContentTypeToContentNodeConnectionWhereArgs>;
};

/** Allowed Content Types */
export enum GQLContentTypeEnum {
  /** The Type of Content object */
  Attachment = 'ATTACHMENT',
  /** The Type of Content object */
  Page = 'PAGE',
  /** The Type of Content object */
  Post = 'POST',
  /** The Type of Content object */
  Projects = 'PROJECTS',
  /** The Type of Content object */
  Works = 'WORKS'
}

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export enum GQLContentTypeIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the content type. */
  Name = 'NAME'
}

/** Connection between the ContentType type and the ContentNode type */
export type GQLContentTypeToContentNodeConnection = {
  readonly __typename?: 'ContentTypeToContentNodeConnection';
  /** Edges for the ContentTypeToContentNodeConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLContentTypeToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLContentNode>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLContentTypeToContentNodeConnectionEdge = {
  readonly __typename?: 'ContentTypeToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLContentNode>;
};

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type GQLContentTypeToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypeEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type GQLContentTypeToTaxonomyConnection = {
  readonly __typename?: 'ContentTypeToTaxonomyConnection';
  /** Edges for the ContentTypeToTaxonomyConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLContentTypeToTaxonomyConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLTaxonomy>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLContentTypeToTaxonomyConnectionEdge = {
  readonly __typename?: 'ContentTypeToTaxonomyConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLTaxonomy>;
};

/** Allowed Content Types of the Category taxonomy. */
export enum GQLContentTypesOfCategoryEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** Allowed Content Types of the PostFormat taxonomy. */
export enum GQLContentTypesOfPostFormatEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** Allowed Content Types of the Tag taxonomy. */
export enum GQLContentTypesOfTagEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** Allowed Content Types of the Technology taxonomy. */
export enum GQLContentTypesOfTechnologyEnum {
  /** The Type of Content object */
  Projects = 'PROJECTS',
  /** The Type of Content object */
  Works = 'WORKS'
}

/** Input for the createCategory mutation */
export type GQLCreateCategoryInput = {
  /** The slug that the category will be an alias of */
  readonly aliasOf: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The description of the category object */
  readonly description: InputMaybe<Scalars['String']>;
  /** The name of the category object to mutate */
  readonly name: Scalars['String'];
  /** The ID of the category that should be set as the parent */
  readonly parentId: InputMaybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: InputMaybe<Scalars['String']>;
};

/** The payload for the createCategory mutation */
export type GQLCreateCategoryPayload = {
  readonly __typename?: 'CreateCategoryPayload';
  /** The created category */
  readonly category: Maybe<GQLCategory>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Input for the createComment mutation */
export type GQLCreateCommentInput = {
  /** The approval status of the comment. */
  readonly approved: InputMaybe<Scalars['String']>;
  /** The name of the comment's author. */
  readonly author: InputMaybe<Scalars['String']>;
  /** The email of the comment's author. */
  readonly authorEmail: InputMaybe<Scalars['String']>;
  /** The url of the comment's author. */
  readonly authorUrl: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The ID of the post object the comment belongs to. */
  readonly commentOn: InputMaybe<Scalars['Int']>;
  /** Content of the comment. */
  readonly content: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: InputMaybe<Scalars['String']>;
  /** Parent comment of current comment. */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Type of comment. */
  readonly type: InputMaybe<Scalars['String']>;
};

/** The payload for the createComment mutation */
export type GQLCreateCommentPayload = {
  readonly __typename?: 'CreateCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The comment that was created */
  readonly comment: Maybe<GQLComment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  readonly success: Maybe<Scalars['Boolean']>;
};

/** Input for the createMediaItem mutation */
export type GQLCreateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  readonly altText: InputMaybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  readonly authorId: InputMaybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  readonly caption: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The comment status for the mediaItem */
  readonly commentStatus: InputMaybe<Scalars['String']>;
  /** The date of the mediaItem */
  readonly date: InputMaybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  readonly dateGmt: InputMaybe<Scalars['String']>;
  /** Description of the mediaItem */
  readonly description: InputMaybe<Scalars['String']>;
  /** The file name of the mediaItem */
  readonly filePath: InputMaybe<Scalars['String']>;
  /** The file type of the mediaItem */
  readonly fileType: InputMaybe<GQLMimeTypeEnum>;
  /** The WordPress post ID or the graphQL postId of the parent object */
  readonly parentId: InputMaybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  readonly pingStatus: InputMaybe<Scalars['String']>;
  /** The slug of the mediaItem */
  readonly slug: InputMaybe<Scalars['String']>;
  /** The status of the mediaItem */
  readonly status: InputMaybe<GQLMediaItemStatusEnum>;
  /** The title of the mediaItem */
  readonly title: InputMaybe<Scalars['String']>;
};

/** The payload for the createMediaItem mutation */
export type GQLCreateMediaItemPayload = {
  readonly __typename?: 'CreateMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The MediaItem object mutation type. */
  readonly mediaItem: Maybe<GQLMediaItem>;
};

/** Input for the createPage mutation */
export type GQLCreatePageInput = {
  /** The userId to assign as the author of the object */
  readonly authorId: InputMaybe<Scalars['ID']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The comment status for the object */
  readonly commentStatus: InputMaybe<Scalars['String']>;
  /** The content of the object */
  readonly content: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: InputMaybe<Scalars['Int']>;
  /** The ID of the parent object */
  readonly parentId: InputMaybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  readonly password: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  readonly slug: InputMaybe<Scalars['String']>;
  /** The status of the object */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** The title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** The payload for the createPage mutation */
export type GQLCreatePagePayload = {
  readonly __typename?: 'CreatePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  readonly page: Maybe<GQLPage>;
};

/** Input for the createPostFormat mutation */
export type GQLCreatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  readonly aliasOf: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The description of the post_format object */
  readonly description: InputMaybe<Scalars['String']>;
  /** The name of the post_format object to mutate */
  readonly name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: InputMaybe<Scalars['String']>;
};

/** The payload for the createPostFormat mutation */
export type GQLCreatePostFormatPayload = {
  readonly __typename?: 'CreatePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The created post_format */
  readonly postFormat: Maybe<GQLPostFormat>;
};

/** Input for the createPost mutation */
export type GQLCreatePostInput = {
  /** The userId to assign as the author of the object */
  readonly authorId: InputMaybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  readonly categories: InputMaybe<GQLPostCategoriesInput>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The comment status for the object */
  readonly commentStatus: InputMaybe<Scalars['String']>;
  /** The content of the object */
  readonly content: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: InputMaybe<Scalars['String']>;
  /** The excerpt of the object */
  readonly excerpt: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  readonly password: InputMaybe<Scalars['String']>;
  /** The ping status for the object */
  readonly pingStatus: InputMaybe<Scalars['String']>;
  /** URLs that have been pinged. */
  readonly pinged: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Set connections between the post and postFormats */
  readonly postFormats: InputMaybe<GQLPostPostFormatsInput>;
  /** The slug of the object */
  readonly slug: InputMaybe<Scalars['String']>;
  /** The status of the object */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Set connections between the post and tags */
  readonly tags: InputMaybe<GQLPostTagsInput>;
  /** The title of the object */
  readonly title: InputMaybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  readonly toPing: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** The payload for the createPost mutation */
export type GQLCreatePostPayload = {
  readonly __typename?: 'CreatePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  readonly post: Maybe<GQLPost>;
};

/** Input for the createProject mutation */
export type GQLCreateProjectInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The content of the object */
  readonly content: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  readonly password: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  readonly slug: InputMaybe<Scalars['String']>;
  /** The status of the object */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Set connections between the Project and Technologies */
  readonly technologies: InputMaybe<GQLProjectTechnologiesInput>;
  /** The title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** The payload for the createProject mutation */
export type GQLCreateProjectPayload = {
  readonly __typename?: 'CreateProjectPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  readonly project: Maybe<GQLProject>;
};

/** Input for the createTag mutation */
export type GQLCreateTagInput = {
  /** The slug that the post_tag will be an alias of */
  readonly aliasOf: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The description of the post_tag object */
  readonly description: InputMaybe<Scalars['String']>;
  /** The name of the post_tag object to mutate */
  readonly name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: InputMaybe<Scalars['String']>;
};

/** The payload for the createTag mutation */
export type GQLCreateTagPayload = {
  readonly __typename?: 'CreateTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The created post_tag */
  readonly tag: Maybe<GQLTag>;
};

/** Input for the createTechnology mutation */
export type GQLCreateTechnologyInput = {
  /** The slug that the technology will be an alias of */
  readonly aliasOf: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The description of the technology object */
  readonly description: InputMaybe<Scalars['String']>;
  /** The name of the technology object to mutate */
  readonly name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: InputMaybe<Scalars['String']>;
};

/** The payload for the createTechnology mutation */
export type GQLCreateTechnologyPayload = {
  readonly __typename?: 'CreateTechnologyPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The created technology */
  readonly technology: Maybe<GQLTechnology>;
};

/** Input for the createUser mutation */
export type GQLCreateUserInput = {
  /** User's AOL IM account. */
  readonly aim: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** A string containing content about the user. */
  readonly description: InputMaybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  readonly displayName: InputMaybe<Scalars['String']>;
  /** A string containing the user's email address. */
  readonly email: InputMaybe<Scalars['String']>;
  /** 	The user's first name. */
  readonly firstName: InputMaybe<Scalars['String']>;
  /** User's Jabber account. */
  readonly jabber: InputMaybe<Scalars['String']>;
  /** The user's last name. */
  readonly lastName: InputMaybe<Scalars['String']>;
  /** User's locale. */
  readonly locale: InputMaybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  readonly nicename: InputMaybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  readonly nickname: InputMaybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  readonly password: InputMaybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  readonly registered: InputMaybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  readonly richEditing: InputMaybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  readonly roles: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** A string that contains the user's username for logging in. */
  readonly username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  readonly websiteUrl: InputMaybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  readonly yim: InputMaybe<Scalars['String']>;
};

/** The payload for the createUser mutation */
export type GQLCreateUserPayload = {
  readonly __typename?: 'CreateUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  readonly user: Maybe<GQLUser>;
};

/** Input for the createWork mutation */
export type GQLCreateWorkInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The content of the object */
  readonly content: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: InputMaybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  readonly password: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  readonly slug: InputMaybe<Scalars['String']>;
  /** The status of the object */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Set connections between the Work and Technologies */
  readonly technologies: InputMaybe<GQLWorkTechnologiesInput>;
  /** The title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** The payload for the createWork mutation */
export type GQLCreateWorkPayload = {
  readonly __typename?: 'CreateWorkPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  readonly work: Maybe<GQLWork>;
};

/** Object that can be identified with a Database ID */
export type GQLDatabaseIdentifier = {
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
};

/** Date values */
export type GQLDateInput = {
  /** Day of the month (from 1 to 31) */
  readonly day: InputMaybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  readonly month: InputMaybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  readonly year: InputMaybe<Scalars['Int']>;
};

/** Filter the connection based on input */
export type GQLDateQueryInput = {
  /** Nodes should be returned after this date */
  readonly after: InputMaybe<GQLDateInput>;
  /** Nodes should be returned before this date */
  readonly before: InputMaybe<GQLDateInput>;
  /** Column to query against */
  readonly column: InputMaybe<GQLPostObjectsConnectionDateColumnEnum>;
  /** For after/before, whether exact value should be matched or not */
  readonly compare: InputMaybe<Scalars['String']>;
  /** Day of the month (from 1 to 31) */
  readonly day: InputMaybe<Scalars['Int']>;
  /** Hour (from 0 to 23) */
  readonly hour: InputMaybe<Scalars['Int']>;
  /** For after/before, whether exact value should be matched or not */
  readonly inclusive: InputMaybe<Scalars['Boolean']>;
  /** Minute (from 0 to 59) */
  readonly minute: InputMaybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  readonly month: InputMaybe<Scalars['Int']>;
  /** OR or AND, how the sub-arrays should be compared */
  readonly relation: InputMaybe<GQLRelationEnum>;
  /** Second (0 to 59) */
  readonly second: InputMaybe<Scalars['Int']>;
  /** Week of the year (from 0 to 53) */
  readonly week: InputMaybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  readonly year: InputMaybe<Scalars['Int']>;
};

/** The template assigned to the node */
export type GQLDefaultTemplate = GQLContentTemplate & {
  readonly __typename?: 'DefaultTemplate';
  /** The name of the template */
  readonly templateName: Maybe<Scalars['String']>;
};

/** Input for the deleteCategory mutation */
export type GQLDeleteCategoryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The ID of the category to delete */
  readonly id: Scalars['ID'];
};

/** The payload for the deleteCategory mutation */
export type GQLDeleteCategoryPayload = {
  readonly __typename?: 'DeleteCategoryPayload';
  /** The deteted term object */
  readonly category: Maybe<GQLCategory>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  readonly deletedId: Maybe<Scalars['ID']>;
};

/** Input for the deleteComment mutation */
export type GQLDeleteCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** Whether the comment should be force deleted instead of being moved to the trash */
  readonly forceDelete: InputMaybe<Scalars['Boolean']>;
  /** The deleted comment ID */
  readonly id: Scalars['ID'];
};

/** The payload for the deleteComment mutation */
export type GQLDeleteCommentPayload = {
  readonly __typename?: 'DeleteCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The deleted comment object */
  readonly comment: Maybe<GQLComment>;
  /** The deleted comment ID */
  readonly deletedId: Maybe<Scalars['ID']>;
};

/** Input for the deleteMediaItem mutation */
export type GQLDeleteMediaItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  readonly forceDelete: InputMaybe<Scalars['Boolean']>;
  /** The ID of the mediaItem to delete */
  readonly id: Scalars['ID'];
};

/** The payload for the deleteMediaItem mutation */
export type GQLDeleteMediaItemPayload = {
  readonly __typename?: 'DeleteMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The ID of the deleted mediaItem */
  readonly deletedId: Maybe<Scalars['ID']>;
  /** The mediaItem before it was deleted */
  readonly mediaItem: Maybe<GQLMediaItem>;
};

/** Input for the deletePage mutation */
export type GQLDeletePageInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  readonly forceDelete: InputMaybe<Scalars['Boolean']>;
  /** The ID of the page to delete */
  readonly id: Scalars['ID'];
};

/** The payload for the deletePage mutation */
export type GQLDeletePagePayload = {
  readonly __typename?: 'DeletePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  readonly deletedId: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  readonly page: Maybe<GQLPage>;
};

/** Input for the deletePostFormat mutation */
export type GQLDeletePostFormatInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The ID of the postFormat to delete */
  readonly id: Scalars['ID'];
};

/** The payload for the deletePostFormat mutation */
export type GQLDeletePostFormatPayload = {
  readonly __typename?: 'DeletePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  readonly deletedId: Maybe<Scalars['ID']>;
  /** The deteted term object */
  readonly postFormat: Maybe<GQLPostFormat>;
};

/** Input for the deletePost mutation */
export type GQLDeletePostInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  readonly forceDelete: InputMaybe<Scalars['Boolean']>;
  /** The ID of the post to delete */
  readonly id: Scalars['ID'];
};

/** The payload for the deletePost mutation */
export type GQLDeletePostPayload = {
  readonly __typename?: 'DeletePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  readonly deletedId: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  readonly post: Maybe<GQLPost>;
};

/** Input for the deleteProject mutation */
export type GQLDeleteProjectInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  readonly forceDelete: InputMaybe<Scalars['Boolean']>;
  /** The ID of the Project to delete */
  readonly id: Scalars['ID'];
};

/** The payload for the deleteProject mutation */
export type GQLDeleteProjectPayload = {
  readonly __typename?: 'DeleteProjectPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  readonly deletedId: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  readonly project: Maybe<GQLProject>;
};

/** Input for the deleteTag mutation */
export type GQLDeleteTagInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The ID of the tag to delete */
  readonly id: Scalars['ID'];
};

/** The payload for the deleteTag mutation */
export type GQLDeleteTagPayload = {
  readonly __typename?: 'DeleteTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  readonly deletedId: Maybe<Scalars['ID']>;
  /** The deteted term object */
  readonly tag: Maybe<GQLTag>;
};

/** Input for the deleteTechnology mutation */
export type GQLDeleteTechnologyInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The ID of the Technology to delete */
  readonly id: Scalars['ID'];
};

/** The payload for the deleteTechnology mutation */
export type GQLDeleteTechnologyPayload = {
  readonly __typename?: 'DeleteTechnologyPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  readonly deletedId: Maybe<Scalars['ID']>;
  /** The deteted term object */
  readonly technology: Maybe<GQLTechnology>;
};

/** Input for the deleteUser mutation */
export type GQLDeleteUserInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The ID of the user you want to delete */
  readonly id: Scalars['ID'];
  /** Reassign posts and links to new User ID. */
  readonly reassignId: InputMaybe<Scalars['ID']>;
};

/** The payload for the deleteUser mutation */
export type GQLDeleteUserPayload = {
  readonly __typename?: 'DeleteUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The ID of the user that you just deleted */
  readonly deletedId: Maybe<Scalars['ID']>;
  /** The deleted user object */
  readonly user: Maybe<GQLUser>;
};

/** Input for the deleteWork mutation */
export type GQLDeleteWorkInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  readonly forceDelete: InputMaybe<Scalars['Boolean']>;
  /** The ID of the Work to delete */
  readonly id: Scalars['ID'];
};

/** The payload for the deleteWork mutation */
export type GQLDeleteWorkPayload = {
  readonly __typename?: 'DeleteWorkPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  readonly deletedId: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  readonly work: Maybe<GQLWork>;
};

/** The discussion setting type */
export type GQLDiscussionSettings = {
  readonly __typename?: 'DiscussionSettings';
  /** Allow people to submit comments on new posts. */
  readonly defaultCommentStatus: Maybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  readonly defaultPingStatus: Maybe<Scalars['String']>;
};

/** Asset enqueued by the CMS */
export type GQLEnqueuedAsset = {
  /** @todo */
  readonly args: Maybe<Scalars['Boolean']>;
  /** Dependencies needed to use this asset */
  readonly dependencies: Maybe<ReadonlyArray<Maybe<GQLEnqueuedScript>>>;
  /** Extra information needed for the script */
  readonly extra: Maybe<Scalars['String']>;
  /** The handle of the enqueued asset */
  readonly handle: Maybe<Scalars['String']>;
  /** The ID of the enqueued asset */
  readonly id: Scalars['ID'];
  /** The source of the asset */
  readonly src: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  readonly version: Maybe<Scalars['String']>;
};

/** Script enqueued by the CMS */
export type GQLEnqueuedScript = GQLEnqueuedAsset & GQLNode & {
  readonly __typename?: 'EnqueuedScript';
  /** @todo */
  readonly args: Maybe<Scalars['Boolean']>;
  /** Dependencies needed to use this asset */
  readonly dependencies: Maybe<ReadonlyArray<Maybe<GQLEnqueuedScript>>>;
  /** Extra information needed for the script */
  readonly extra: Maybe<Scalars['String']>;
  /** The handle of the enqueued asset */
  readonly handle: Maybe<Scalars['String']>;
  /** The ID of the enqueued asset */
  readonly id: Scalars['ID'];
  /** The source of the asset */
  readonly src: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  readonly version: Maybe<Scalars['String']>;
};

/** Stylesheet enqueued by the CMS */
export type GQLEnqueuedStylesheet = GQLEnqueuedAsset & GQLNode & {
  readonly __typename?: 'EnqueuedStylesheet';
  /** @todo */
  readonly args: Maybe<Scalars['Boolean']>;
  /** Dependencies needed to use this asset */
  readonly dependencies: Maybe<ReadonlyArray<Maybe<GQLEnqueuedScript>>>;
  /** Extra information needed for the script */
  readonly extra: Maybe<Scalars['String']>;
  /** The handle of the enqueued asset */
  readonly handle: Maybe<Scalars['String']>;
  /** The ID of the enqueued asset */
  readonly id: Scalars['ID'];
  /** The source of the asset */
  readonly src: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  readonly version: Maybe<Scalars['String']>;
};

/** The general setting type */
export type GQLGeneralSettings = {
  readonly __typename?: 'GeneralSettings';
  /** A date format for all date strings. */
  readonly dateFormat: Maybe<Scalars['String']>;
  /** Site tagline. */
  readonly description: Maybe<Scalars['String']>;
  /** This address is used for admin purposes, like new user notification. */
  readonly email: Maybe<Scalars['String']>;
  /** WordPress locale code. */
  readonly language: Maybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  readonly startOfWeek: Maybe<Scalars['Int']>;
  /** A time format for all time strings. */
  readonly timeFormat: Maybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  readonly timezone: Maybe<Scalars['String']>;
  /** Site title. */
  readonly title: Maybe<Scalars['String']>;
  /** Site URL. */
  readonly url: Maybe<Scalars['String']>;
};

/** Content node with hierarchical (parent/child) relationships */
export type GQLHierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<GQLHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  readonly children: Maybe<GQLHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The parent of the node. The parent object can be of various types */
  readonly parent: Maybe<GQLHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
};


/** Content node with hierarchical (parent/child) relationships */
export type GQLHierarchicalContentNodeAncestorsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLHierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** Content node with hierarchical (parent/child) relationships */
export type GQLHierarchicalContentNodeChildrenArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLHierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type GQLHierarchicalContentNodeToContentNodeAncestorsConnection = {
  readonly __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection';
  /** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLHierarchicalContentNodeToContentNodeAncestorsConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLContentNode>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLHierarchicalContentNodeToContentNodeAncestorsConnectionEdge = {
  readonly __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLContentNode>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export type GQLHierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypeEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type GQLHierarchicalContentNodeToContentNodeChildrenConnection = {
  readonly __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
  /** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLHierarchicalContentNodeToContentNodeChildrenConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLContentNode>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLHierarchicalContentNodeToContentNodeChildrenConnectionEdge = {
  readonly __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLContentNode>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export type GQLHierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypeEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type GQLHierarchicalContentNodeToParentContentNodeConnectionEdge = {
  readonly __typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLContentNode>;
};

/** Term node with hierarchical (parent/child) relationships */
export type GQLHierarchicalTermNode = {
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
};

/** File details for a Media Item */
export type GQLMediaDetails = {
  readonly __typename?: 'MediaDetails';
  /** The filename of the mediaItem */
  readonly file: Maybe<Scalars['String']>;
  /** The height of the mediaItem */
  readonly height: Maybe<Scalars['Int']>;
  /** Meta information associated with the mediaItem */
  readonly meta: Maybe<GQLMediaItemMeta>;
  /** The available sizes of the mediaItem */
  readonly sizes: Maybe<ReadonlyArray<Maybe<GQLMediaSize>>>;
  /** The width of the mediaItem */
  readonly width: Maybe<Scalars['Int']>;
};

/** The mediaItem type */
export type GQLMediaItem = GQLContentNode & GQLDatabaseIdentifier & GQLHierarchicalContentNode & GQLNode & GQLNodeWithAuthor & GQLNodeWithComments & GQLNodeWithTemplate & GQLNodeWithTitle & GQLUniformResourceIdentifiable & {
  readonly __typename?: 'MediaItem';
  /** Alternative text to display when resource is not displayed */
  readonly altText: Maybe<Scalars['String']>;
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<GQLHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<GQLNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']>;
  /** The caption for the resource */
  readonly caption: Maybe<Scalars['String']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  readonly children: Maybe<GQLHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** Connection between the mediaItem type and the Comment type */
  readonly comments: Maybe<GQLMediaItemToCommentConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<GQLContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['String']>;
  /** Description of the image (stored as post_content) */
  readonly description: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  readonly editingLockedBy: Maybe<GQLContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<GQLContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<GQLContentNodeToEnqueuedStylesheetConnection>;
  /** The filesize in bytes of the resource */
  readonly fileSize: Maybe<Scalars['Int']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  readonly guid: Maybe<Scalars['String']>;
  /** The globally unique identifier of the attachment object. */
  readonly id: Scalars['ID'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  readonly isPreview: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<GQLContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** Details about the mediaItem */
  readonly mediaDetails: Maybe<GQLMediaDetails>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly mediaItemId: Scalars['Int'];
  /** Url of the mediaItem */
  readonly mediaItemUrl: Maybe<Scalars['String']>;
  /** Type of resource */
  readonly mediaType: Maybe<Scalars['String']>;
  /** The mime type of the mediaItem */
  readonly mimeType: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['String']>;
  /** The parent of the node. The parent object can be of various types */
  readonly parent: Maybe<GQLHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** The database id of the preview node */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  readonly previewRevisionId: Maybe<Scalars['ID']>;
  /** The sizes attribute value for an image. */
  readonly sizes: Maybe<Scalars['String']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  readonly slug: Maybe<Scalars['String']>;
  /** Url of the mediaItem */
  readonly sourceUrl: Maybe<Scalars['String']>;
  /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
  readonly srcSet: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** The template assigned to the node */
  readonly template: Maybe<GQLContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type GQLMediaItemAncestorsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLHierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The mediaItem type */
export type GQLMediaItemCaptionArgs = {
  format: InputMaybe<GQLPostObjectFieldFormatEnum>;
};


/** The mediaItem type */
export type GQLMediaItemChildrenArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLHierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The mediaItem type */
export type GQLMediaItemCommentsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLMediaItemToCommentConnectionWhereArgs>;
};


/** The mediaItem type */
export type GQLMediaItemDescriptionArgs = {
  format: InputMaybe<GQLPostObjectFieldFormatEnum>;
};


/** The mediaItem type */
export type GQLMediaItemEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The mediaItem type */
export type GQLMediaItemEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The mediaItem type */
export type GQLMediaItemFileSizeArgs = {
  size: InputMaybe<GQLMediaItemSizeEnum>;
};


/** The mediaItem type */
export type GQLMediaItemSizesArgs = {
  size: InputMaybe<GQLMediaItemSizeEnum>;
};


/** The mediaItem type */
export type GQLMediaItemSourceUrlArgs = {
  size: InputMaybe<GQLMediaItemSizeEnum>;
};


/** The mediaItem type */
export type GQLMediaItemSrcSetArgs = {
  size: InputMaybe<GQLMediaItemSizeEnum>;
};


/** The mediaItem type */
export type GQLMediaItemTitleArgs = {
  format: InputMaybe<GQLPostObjectFieldFormatEnum>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum GQLMediaItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a media item by its source url */
  SourceUrl = 'SOURCE_URL',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Meta connected to a MediaItem */
export type GQLMediaItemMeta = {
  readonly __typename?: 'MediaItemMeta';
  /** Aperture measurement of the media item. */
  readonly aperture: Maybe<Scalars['Float']>;
  /** Information about the camera used to create the media item. */
  readonly camera: Maybe<Scalars['String']>;
  /** The text string description associated with the media item. */
  readonly caption: Maybe<Scalars['String']>;
  /** Copyright information associated with the media item. */
  readonly copyright: Maybe<Scalars['String']>;
  /** The date/time when the media was created. */
  readonly createdTimestamp: Maybe<Scalars['Int']>;
  /** The original creator of the media item. */
  readonly credit: Maybe<Scalars['String']>;
  /** The focal length value of the media item. */
  readonly focalLength: Maybe<Scalars['Float']>;
  /** The ISO (International Organization for Standardization) value of the media item. */
  readonly iso: Maybe<Scalars['Int']>;
  /** List of keywords used to describe or identfy the media item. */
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The vertical or horizontal aspect of the media item. */
  readonly orientation: Maybe<Scalars['String']>;
  /** The shutter speed information of the media item. */
  readonly shutterSpeed: Maybe<Scalars['Float']>;
  /** A useful title for the media item. */
  readonly title: Maybe<Scalars['String']>;
};

/** The size of the media item object. */
export enum GQLMediaItemSizeEnum {
  /** MediaItem with the large size */
  Large = 'LARGE',
  /** MediaItem with the lg size */
  Lg = 'LG',
  /** MediaItem with the md size */
  Md = 'MD',
  /** MediaItem with the medium size */
  Medium = 'MEDIUM',
  /** MediaItem with the medium_large size */
  MediumLarge = 'MEDIUM_LARGE',
  /** MediaItem with the sm size */
  Sm = 'SM',
  /** MediaItem with the thumbnail size */
  Thumbnail = 'THUMBNAIL',
  /** MediaItem with the xl size */
  Xl = 'XL',
  /** MediaItem with the xs size */
  Xs = 'XS',
  /** MediaItem with the xxl size */
  Xxl = 'XXL',
  /** MediaItem with the xxxl size */
  Xxxl = 'XXXL',
  /** MediaItem with the 1536x1536 size */
  '1536X1536' = '_1536X1536',
  /** MediaItem with the 2048x2048 size */
  '2048X2048' = '_2048X2048'
}

/** The status of the media item object. */
export enum GQLMediaItemStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the trash status */
  Trash = 'TRASH'
}

/** Connection between the mediaItem type and the Comment type */
export type GQLMediaItemToCommentConnection = {
  readonly __typename?: 'MediaItemToCommentConnection';
  /** Edges for the MediaItemToCommentConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLMediaItemToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLComment>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLMediaItemToCommentConnectionEdge = {
  readonly __typename?: 'MediaItemToCommentConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLComment>;
};

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type GQLMediaItemToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  readonly authorEmail: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  readonly authorUrl: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  readonly commentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  readonly commentType: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  readonly contentName: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: InputMaybe<GQLCommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  readonly status: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  readonly userId: InputMaybe<Scalars['ID']>;
};

/** Details of an available size for a media item */
export type GQLMediaSize = {
  readonly __typename?: 'MediaSize';
  /** The filename of the referenced size */
  readonly file: Maybe<Scalars['String']>;
  /** The filesize of the resource */
  readonly fileSize: Maybe<Scalars['Int']>;
  /** The height of the referenced size */
  readonly height: Maybe<Scalars['String']>;
  /** The mime type of the referenced size */
  readonly mimeType: Maybe<Scalars['String']>;
  /** The referenced size name */
  readonly name: Maybe<Scalars['String']>;
  /** The url of the referenced size */
  readonly sourceUrl: Maybe<Scalars['String']>;
  /** The width of the referenced size */
  readonly width: Maybe<Scalars['String']>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type GQLMenu = GQLDatabaseIdentifier & GQLNode & {
  readonly __typename?: 'Menu';
  /** The number of items in the menu */
  readonly count: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** The globally unique identifier of the nav menu object. */
  readonly id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** The locations a menu is assigned to */
  readonly locations: Maybe<ReadonlyArray<Maybe<GQLMenuLocationEnum>>>;
  /**
   * WP ID of the nav menu.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly menuId: Maybe<Scalars['Int']>;
  /** Connection between the Menu type and the MenuItem type */
  readonly menuItems: Maybe<GQLMenuToMenuItemConnection>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  readonly name: Maybe<Scalars['String']>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  readonly slug: Maybe<Scalars['String']>;
};


/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type GQLMenuMenuItemsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLMenuToMenuItemConnectionWhereArgs>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type GQLMenuItem = GQLDatabaseIdentifier & GQLNode & {
  readonly __typename?: 'MenuItem';
  /** Connection between the MenuItem type and the MenuItem type */
  readonly childItems: Maybe<GQLMenuItemToMenuItemConnection>;
  /** Connection from MenuItem to it&#039;s connected node */
  readonly connectedNode: Maybe<GQLMenuItemToMenuItemLinkableConnectionEdge>;
  /**
   * The object connected to this menu item.
   * @deprecated Deprecated in favor of the connectedNode field
   */
  readonly connectedObject: Maybe<GQLMenuItemObjectUnion>;
  /** Class attribute for the menu item link */
  readonly cssClasses: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** Description of the menu item. */
  readonly description: Maybe<Scalars['String']>;
  /** The globally unique identifier of the nav menu item object. */
  readonly id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Label or title of the menu item. */
  readonly label: Maybe<Scalars['String']>;
  /** Link relationship (XFN) of the menu item. */
  readonly linkRelationship: Maybe<Scalars['String']>;
  /** The locations the menu item&#039;s Menu is assigned to */
  readonly locations: Maybe<ReadonlyArray<Maybe<GQLMenuLocationEnum>>>;
  /** The Menu a MenuItem is part of */
  readonly menu: Maybe<GQLMenuItemToMenuConnectionEdge>;
  /**
   * WP ID of the menu item.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly menuItemId: Maybe<Scalars['Int']>;
  /** Menu item order */
  readonly order: Maybe<Scalars['Int']>;
  /** The database id of the parent menu item or null if it is the root */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent nav menu item object. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
  readonly path: Maybe<Scalars['String']>;
  /** Target attribute for the menu item link. */
  readonly target: Maybe<Scalars['String']>;
  /** Title attribute for the menu item link */
  readonly title: Maybe<Scalars['String']>;
  /** URL or destination of the menu item. */
  readonly url: Maybe<Scalars['String']>;
};


/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type GQLMenuItemChildItemsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLMenuItemToMenuItemConnectionWhereArgs>;
};

/** Nodes that can be linked to as Menu Items */
export type GQLMenuItemLinkable = {
  /** The unique resource identifier path */
  readonly databaseId: Scalars['Int'];
  /** The unique resource identifier path */
  readonly id: Scalars['ID'];
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum GQLMenuItemNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Deprecated in favor of MenuItemLinkeable Interface */
export type GQLMenuItemObjectUnion = GQLCategory | GQLPage | GQLPost | GQLProject | GQLTag | GQLTechnology | GQLWork;

/** Connection between the MenuItem type and the Menu type */
export type GQLMenuItemToMenuConnectionEdge = {
  readonly __typename?: 'MenuItemToMenuConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLMenu>;
};

/** Connection between the MenuItem type and the MenuItem type */
export type GQLMenuItemToMenuItemConnection = {
  readonly __typename?: 'MenuItemToMenuItemConnection';
  /** Edges for the MenuItemToMenuItemConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLMenuItemToMenuItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLMenuItem>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLMenuItemToMenuItemConnectionEdge = {
  readonly __typename?: 'MenuItemToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLMenuItem>;
};

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type GQLMenuItemToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  readonly location: InputMaybe<GQLMenuLocationEnum>;
  /** The database ID of the parent menu object */
  readonly parentDatabaseId: InputMaybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  readonly parentId: InputMaybe<Scalars['ID']>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type GQLMenuItemToMenuItemLinkableConnectionEdge = {
  readonly __typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLMenuItemLinkable>;
};

/** Registered menu locations */
export enum GQLMenuLocationEnum {
  /** Empty menu location */
  Empty = 'EMPTY'
}

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum GQLMenuNodeIdTypeEnum {
  /** Identify a menu node by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a menu node by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a menu node by it's name */
  Name = 'NAME'
}

/** Connection between the Menu type and the MenuItem type */
export type GQLMenuToMenuItemConnection = {
  readonly __typename?: 'MenuToMenuItemConnection';
  /** Edges for the MenuToMenuItemConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLMenuToMenuItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLMenuItem>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLMenuToMenuItemConnectionEdge = {
  readonly __typename?: 'MenuToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLMenuItem>;
};

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type GQLMenuToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  readonly location: InputMaybe<GQLMenuLocationEnum>;
  /** The database ID of the parent menu object */
  readonly parentDatabaseId: InputMaybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  readonly parentId: InputMaybe<Scalars['ID']>;
};

/** The MimeType of the object */
export enum GQLMimeTypeEnum {
  /** MimeType application/java */
  ApplicationJava = 'APPLICATION_JAVA',
  /** MimeType application/msword */
  ApplicationMsword = 'APPLICATION_MSWORD',
  /** MimeType application/octet-stream */
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  /** MimeType application/onenote */
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  /** MimeType application/oxps */
  ApplicationOxps = 'APPLICATION_OXPS',
  /** MimeType application/pdf */
  ApplicationPdf = 'APPLICATION_PDF',
  /** MimeType application/rar */
  ApplicationRar = 'APPLICATION_RAR',
  /** MimeType application/rtf */
  ApplicationRtf = 'APPLICATION_RTF',
  /** MimeType application/ttaf+xml */
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  /** MimeType application/vnd.apple.keynote */
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  /** MimeType application/vnd.apple.numbers */
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  /** MimeType application/vnd.apple.pages */
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  /** MimeType application/vnd.ms-access */
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  /** MimeType application/vnd.ms-excel */
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  /** MimeType application/vnd.ms-excel.addin.macroEnabled.12 */
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  /** MimeType application/vnd.ms-excel.sheet.binary.macroEnabled.12 */
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  /** MimeType application/vnd.ms-excel.sheet.macroEnabled.12 */
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  /** MimeType application/vnd.ms-excel.template.macroEnabled.12 */
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint */
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  /** MimeType application/vnd.ms-powerpoint.addin.macroEnabled.12 */
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.presentation.macroEnabled.12 */
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.slideshow.macroEnabled.12 */
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.slide.macroEnabled.12 */
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.template.macroEnabled.12 */
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  /** MimeType application/vnd.ms-project */
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  /** MimeType application/vnd.ms-word.document.macroEnabled.12 */
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  /** MimeType application/vnd.ms-word.template.macroEnabled.12 */
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  /** MimeType application/vnd.ms-write */
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  /** MimeType application/vnd.ms-xpsdocument */
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  /** MimeType application/vnd.oasis.opendocument.chart */
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  /** MimeType application/vnd.oasis.opendocument.database */
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  /** MimeType application/vnd.oasis.opendocument.formula */
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  /** MimeType application/vnd.oasis.opendocument.graphics */
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  /** MimeType application/vnd.oasis.opendocument.presentation */
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  /** MimeType application/vnd.oasis.opendocument.spreadsheet */
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  /** MimeType application/vnd.oasis.opendocument.text */
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.presentation */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.slide */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.slideshow */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.template */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  /** MimeType application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  /** MimeType application/vnd.openxmlformats-officedocument.spreadsheetml.template */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  /** MimeType application/vnd.openxmlformats-officedocument.wordprocessingml.document */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  /** MimeType application/vnd.openxmlformats-officedocument.wordprocessingml.template */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  /** MimeType application/wordperfect */
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  /** MimeType application/x-7z-compressed */
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  /** MimeType application/x-gzip */
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  /** MimeType application/x-tar */
  ApplicationXTar = 'APPLICATION_X_TAR',
  /** MimeType application/zip */
  ApplicationZip = 'APPLICATION_ZIP',
  /** MimeType audio/aac */
  AudioAac = 'AUDIO_AAC',
  /** MimeType audio/flac */
  AudioFlac = 'AUDIO_FLAC',
  /** MimeType audio/midi */
  AudioMidi = 'AUDIO_MIDI',
  /** MimeType audio/mpeg */
  AudioMpeg = 'AUDIO_MPEG',
  /** MimeType audio/ogg */
  AudioOgg = 'AUDIO_OGG',
  /** MimeType audio/wav */
  AudioWav = 'AUDIO_WAV',
  /** MimeType audio/x-matroska */
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  /** MimeType audio/x-ms-wax */
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  /** MimeType audio/x-ms-wma */
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  /** MimeType audio/x-realaudio */
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  /** MimeType image/bmp */
  ImageBmp = 'IMAGE_BMP',
  /** MimeType image/gif */
  ImageGif = 'IMAGE_GIF',
  /** MimeType image/heic */
  ImageHeic = 'IMAGE_HEIC',
  /** MimeType image/jpeg */
  ImageJpeg = 'IMAGE_JPEG',
  /** MimeType image/png */
  ImagePng = 'IMAGE_PNG',
  /** MimeType image/svg+xml */
  ImageSvgXml = 'IMAGE_SVG_XML',
  /** MimeType image/tiff */
  ImageTiff = 'IMAGE_TIFF',
  /** MimeType image/webp */
  ImageWebp = 'IMAGE_WEBP',
  /** MimeType image/x-icon */
  ImageXIcon = 'IMAGE_X_ICON',
  /** MimeType text/calendar */
  TextCalendar = 'TEXT_CALENDAR',
  /** MimeType text/css */
  TextCss = 'TEXT_CSS',
  /** MimeType text/csv */
  TextCsv = 'TEXT_CSV',
  /** MimeType text/plain */
  TextPlain = 'TEXT_PLAIN',
  /** MimeType text/richtext */
  TextRichtext = 'TEXT_RICHTEXT',
  /** MimeType text/tab-separated-values */
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  /** MimeType text/vtt */
  TextVtt = 'TEXT_VTT',
  /** MimeType video/3gpp */
  Video_3Gpp = 'VIDEO_3GPP',
  /** MimeType video/3gpp2 */
  Video_3Gpp2 = 'VIDEO_3GPP2',
  /** MimeType video/avi */
  VideoAvi = 'VIDEO_AVI',
  /** MimeType video/divx */
  VideoDivx = 'VIDEO_DIVX',
  /** MimeType video/mp4 */
  VideoMp4 = 'VIDEO_MP4',
  /** MimeType video/mpeg */
  VideoMpeg = 'VIDEO_MPEG',
  /** MimeType video/ogg */
  VideoOgg = 'VIDEO_OGG',
  /** MimeType video/quicktime */
  VideoQuicktime = 'VIDEO_QUICKTIME',
  /** MimeType video/webm */
  VideoWebm = 'VIDEO_WEBM',
  /** MimeType video/x-flv */
  VideoXFlv = 'VIDEO_X_FLV',
  /** MimeType video/x-matroska */
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  /** MimeType video/x-ms-asf */
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  /** MimeType video/x-ms-wm */
  VideoXMsWm = 'VIDEO_X_MS_WM',
  /** MimeType video/x-ms-wmv */
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  /** MimeType video/x-ms-wmx */
  VideoXMsWmx = 'VIDEO_X_MS_WMX'
}

/** An object with an ID */
export type GQLNode = {
  /** The globally unique ID for the object */
  readonly id: Scalars['ID'];
};

/** A node that can have an author assigned to it */
export type GQLNodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<GQLNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithAuthor type and the User type */
export type GQLNodeWithAuthorToUserConnectionEdge = {
  readonly __typename?: 'NodeWithAuthorToUserConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLUser>;
};

/** A node that can have comments associated with it */
export type GQLNodeWithComments = {
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
};

/** A node that supports the content editor */
export type GQLNodeWithContentEditor = {
  /** The content of the post. */
  readonly content: Maybe<Scalars['String']>;
};


/** A node that supports the content editor */
export type GQLNodeWithContentEditorContentArgs = {
  format: InputMaybe<GQLPostObjectFieldFormatEnum>;
};

/** A node that can have an excerpt */
export type GQLNodeWithExcerpt = {
  /** The excerpt of the post. */
  readonly excerpt: Maybe<Scalars['String']>;
};


/** A node that can have an excerpt */
export type GQLNodeWithExcerptExcerptArgs = {
  format: InputMaybe<GQLPostObjectFieldFormatEnum>;
};

/** A node that can have a featured image set */
export type GQLNodeWithFeaturedImage = {
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<GQLContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  readonly editingLockedBy: Maybe<GQLContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<GQLContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<GQLContentNodeToEnqueuedStylesheetConnection>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<GQLNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  readonly guid: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  readonly id: Scalars['ID'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  readonly isPreview: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<GQLContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['String']>;
  /** The database id of the preview node */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  readonly previewRevisionId: Maybe<Scalars['ID']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  readonly slug: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<GQLContentTemplate>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};


/** A node that can have a featured image set */
export type GQLNodeWithFeaturedImageEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** A node that can have a featured image set */
export type GQLNodeWithFeaturedImageEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type GQLNodeWithFeaturedImageToMediaItemConnectionEdge = {
  readonly __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLMediaItem>;
};

/** A node that can have page attributes */
export type GQLNodeWithPageAttributes = {
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: Maybe<Scalars['Int']>;
};

/** A node that can have revisions */
export type GQLNodeWithRevisions = {
  /** True if the node is a revision of another node */
  readonly isRevision: Maybe<Scalars['Boolean']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  readonly revisionOf: Maybe<GQLNodeWithRevisionsToContentNodeConnectionEdge>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type GQLNodeWithRevisionsToContentNodeConnectionEdge = {
  readonly __typename?: 'NodeWithRevisionsToContentNodeConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLContentNode>;
};

/** A node that can have a template associated with it */
export type GQLNodeWithTemplate = {
  /** The template assigned to the node */
  readonly template: Maybe<GQLContentTemplate>;
};

/** A node that NodeWith a title */
export type GQLNodeWithTitle = {
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']>;
};


/** A node that NodeWith a title */
export type GQLNodeWithTitleTitleArgs = {
  format: InputMaybe<GQLPostObjectFieldFormatEnum>;
};

/** A node that can have trackbacks and pingbacks */
export type GQLNodeWithTrackbacks = {
  /** Whether the pings are open or closed for this particular post. */
  readonly pingStatus: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  readonly pinged: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** URLs queued to be pinged. */
  readonly toPing: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

/** The cardinality of the connection order */
export enum GQLOrderEnum {
  /** Sort the query result set in an ascending order */
  Asc = 'ASC',
  /** Sort the query result set in a descending order */
  Desc = 'DESC'
}

/** The page type */
export type GQLPage = GQLContentNode & GQLDatabaseIdentifier & GQLHierarchicalContentNode & GQLMenuItemLinkable & GQLNode & GQLNodeWithAuthor & GQLNodeWithComments & GQLNodeWithContentEditor & GQLNodeWithFeaturedImage & GQLNodeWithPageAttributes & GQLNodeWithRevisions & GQLNodeWithTemplate & GQLNodeWithTitle & GQLUniformResourceIdentifiable & {
  readonly __typename?: 'Page';
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  readonly ancestors: Maybe<GQLHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<GQLNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  readonly children: Maybe<GQLHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** Connection between the page type and the Comment type */
  readonly comments: Maybe<GQLPageToCommentConnection>;
  /** The content of the post. */
  readonly content: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<GQLContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String'];
  /** The unique resource identifier path */
  readonly databaseId: Scalars['Int'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  readonly editingLockedBy: Maybe<GQLContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<GQLContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<GQLContentNodeToEnqueuedStylesheetConnection>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<GQLNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  readonly guid: Maybe<Scalars['String']>;
  /** The globally unique identifier of the page object. */
  readonly id: Scalars['ID'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether this page is set to the static front page. */
  readonly isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  readonly isPostsPage: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  readonly isPreview: Maybe<Scalars['Boolean']>;
  /** Whether this page is set to the privacy page. */
  readonly isPrivacyPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** True if the node is a revision of another node */
  readonly isRevision: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<GQLContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: Maybe<Scalars['Int']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly pageId: Scalars['Int'];
  /** The parent of the node. The parent object can be of various types */
  readonly parent: Maybe<GQLHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  readonly parentDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  readonly parentId: Maybe<Scalars['ID']>;
  /** Connection between the page type and the page type */
  readonly preview: Maybe<GQLPageToPreviewConnectionEdge>;
  /** The database id of the preview node */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  readonly previewRevisionId: Maybe<Scalars['ID']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  readonly revisionOf: Maybe<GQLNodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the page type and the page type */
  readonly revisions: Maybe<GQLPageToRevisionConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  readonly slug: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  readonly template: Maybe<GQLContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};


/** The page type */
export type GQLPageAncestorsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLHierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The page type */
export type GQLPageChildrenArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLHierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The page type */
export type GQLPageCommentsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLPageToCommentConnectionWhereArgs>;
};


/** The page type */
export type GQLPageContentArgs = {
  format: InputMaybe<GQLPostObjectFieldFormatEnum>;
};


/** The page type */
export type GQLPageEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The page type */
export type GQLPageEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The page type */
export type GQLPageRevisionsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLPageToRevisionConnectionWhereArgs>;
};


/** The page type */
export type GQLPageTitleArgs = {
  format: InputMaybe<GQLPostObjectFieldFormatEnum>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum GQLPageIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the page type and the Comment type */
export type GQLPageToCommentConnection = {
  readonly __typename?: 'PageToCommentConnection';
  /** Edges for the PageToCommentConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLPageToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLComment>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLPageToCommentConnectionEdge = {
  readonly __typename?: 'PageToCommentConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLComment>;
};

/** Arguments for filtering the PageToCommentConnection connection */
export type GQLPageToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  readonly authorEmail: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  readonly authorUrl: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  readonly commentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  readonly commentType: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  readonly contentName: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: InputMaybe<GQLCommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  readonly status: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  readonly userId: InputMaybe<Scalars['ID']>;
};

/** Connection between the page type and the page type */
export type GQLPageToPreviewConnectionEdge = {
  readonly __typename?: 'PageToPreviewConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLPage>;
};

/** Connection between the page type and the page type */
export type GQLPageToRevisionConnection = {
  readonly __typename?: 'PageToRevisionConnection';
  /** Edges for the pageToRevisionConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLPageToRevisionConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLPage>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLPageToRevisionConnectionEdge = {
  readonly __typename?: 'PageToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLPage>;
};

/** Arguments for filtering the pageToRevisionConnection connection */
export type GQLPageToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** An plugin object */
export type GQLPlugin = GQLNode & {
  readonly __typename?: 'Plugin';
  /** Name of the plugin author(s), may also be a company name. */
  readonly author: Maybe<Scalars['String']>;
  /** URI for the related author(s)/company website. */
  readonly authorUri: Maybe<Scalars['String']>;
  /** Description of the plugin. */
  readonly description: Maybe<Scalars['String']>;
  /** The globally unique identifier of the plugin object. */
  readonly id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Display name of the plugin. */
  readonly name: Maybe<Scalars['String']>;
  /** Plugin path. */
  readonly path: Maybe<Scalars['String']>;
  /** URI for the plugin website. This is useful for directing users for support requests etc. */
  readonly pluginUri: Maybe<Scalars['String']>;
  /** Current version of the plugin. */
  readonly version: Maybe<Scalars['String']>;
};

/** The post type */
export type GQLPost = GQLContentNode & GQLDatabaseIdentifier & GQLMenuItemLinkable & GQLNode & GQLNodeWithAuthor & GQLNodeWithComments & GQLNodeWithContentEditor & GQLNodeWithExcerpt & GQLNodeWithFeaturedImage & GQLNodeWithRevisions & GQLNodeWithTemplate & GQLNodeWithTitle & GQLNodeWithTrackbacks & GQLUniformResourceIdentifiable & {
  readonly __typename?: 'Post';
  /** Connection between the NodeWithAuthor type and the User type */
  readonly author: Maybe<GQLNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  readonly authorDatabaseId: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  readonly authorId: Maybe<Scalars['ID']>;
  /** Connection between the post type and the category type */
  readonly categories: Maybe<GQLPostToCategoryConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  readonly commentCount: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  readonly commentStatus: Maybe<Scalars['String']>;
  /** Connection between the post type and the Comment type */
  readonly comments: Maybe<GQLPostToCommentConnection>;
  /** The content of the post. */
  readonly content: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<GQLContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String'];
  /** The unique resource identifier path */
  readonly databaseId: Scalars['Int'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  readonly editingLockedBy: Maybe<GQLContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<GQLContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<GQLContentNodeToEnqueuedStylesheetConnection>;
  /** The excerpt of the post. */
  readonly excerpt: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<GQLNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  readonly guid: Maybe<Scalars['String']>;
  /** The globally unique identifier of the post object. */
  readonly id: Scalars['ID'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  readonly isPreview: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** True if the node is a revision of another node */
  readonly isRevision: Maybe<Scalars['Boolean']>;
  /** Whether this page is sticky */
  readonly isSticky: Scalars['Boolean'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<GQLContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['String']>;
  /** Whether the pings are open or closed for this particular post. */
  readonly pingStatus: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  readonly pinged: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Post&quot; was set to Show in GraphQL. */
  readonly post: Maybe<GQLPost_Post>;
  /** Connection between the post type and the postFormat type */
  readonly postFormats: Maybe<GQLPostToPostFormatConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly postId: Scalars['Int'];
  /** Connection between the post type and the post type */
  readonly preview: Maybe<GQLPostToPreviewConnectionEdge>;
  /** The database id of the preview node */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  readonly previewRevisionId: Maybe<Scalars['ID']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  readonly revisionOf: Maybe<GQLNodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the post type and the post type */
  readonly revisions: Maybe<GQLPostToRevisionConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  readonly slug: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** Connection between the post type and the tag type */
  readonly tags: Maybe<GQLPostToTagConnection>;
  /** The template assigned to a node of content */
  readonly template: Maybe<GQLContentTemplate>;
  /** Connection between the post type and the TermNode type */
  readonly terms: Maybe<GQLPostToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  readonly toPing: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};


/** The post type */
export type GQLPostCategoriesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLPostToCategoryConnectionWhereArgs>;
};


/** The post type */
export type GQLPostCommentsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLPostToCommentConnectionWhereArgs>;
};


/** The post type */
export type GQLPostContentArgs = {
  format: InputMaybe<GQLPostObjectFieldFormatEnum>;
};


/** The post type */
export type GQLPostEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The post type */
export type GQLPostEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The post type */
export type GQLPostExcerptArgs = {
  format: InputMaybe<GQLPostObjectFieldFormatEnum>;
};


/** The post type */
export type GQLPostPostFormatsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLPostToPostFormatConnectionWhereArgs>;
};


/** The post type */
export type GQLPostRevisionsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLPostToRevisionConnectionWhereArgs>;
};


/** The post type */
export type GQLPostTagsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLPostToTagConnectionWhereArgs>;
};


/** The post type */
export type GQLPostTermsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLPostToTermNodeConnectionWhereArgs>;
};


/** The post type */
export type GQLPostTitleArgs = {
  format: InputMaybe<GQLPostObjectFieldFormatEnum>;
};

/** Set relationships between the post to categories */
export type GQLPostCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  readonly append: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  readonly nodes: InputMaybe<ReadonlyArray<InputMaybe<GQLPostCategoriesNodeInput>>>;
};

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type GQLPostCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  readonly description: InputMaybe<Scalars['String']>;
  /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
  readonly id: InputMaybe<Scalars['ID']>;
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  readonly name: InputMaybe<Scalars['String']>;
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  readonly slug: InputMaybe<Scalars['String']>;
};

/** The postFormat type */
export type GQLPostFormat = GQLDatabaseIdentifier & GQLNode & GQLTermNode & GQLUniformResourceIdentifiable & {
  readonly __typename?: 'PostFormat';
  /** Connection between the postFormat type and the ContentNode type */
  readonly contentNodes: Maybe<GQLPostFormatToContentNodeConnection>;
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  readonly databaseId: Scalars['Int'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<GQLTermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<GQLTermNodeToEnqueuedStylesheetConnection>;
  /** The unique resource identifier path */
  readonly id: Scalars['ID'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly postFormatId: Maybe<Scalars['Int']>;
  /** Connection between the postFormat type and the post type */
  readonly posts: Maybe<GQLPostFormatToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']>;
  /** Connection between the postFormat type and the Taxonomy type */
  readonly taxonomy: Maybe<GQLPostFormatToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  readonly taxonomyName: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};


/** The postFormat type */
export type GQLPostFormatContentNodesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLPostFormatToContentNodeConnectionWhereArgs>;
};


/** The postFormat type */
export type GQLPostFormatEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The postFormat type */
export type GQLPostFormatEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The postFormat type */
export type GQLPostFormatPostsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLPostFormatToPostConnectionWhereArgs>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum GQLPostFormatIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the postFormat type and the ContentNode type */
export type GQLPostFormatToContentNodeConnection = {
  readonly __typename?: 'PostFormatToContentNodeConnection';
  /** Edges for the PostFormatToContentNodeConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLPostFormatToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLContentNode>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLPostFormatToContentNodeConnectionEdge = {
  readonly __typename?: 'PostFormatToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLContentNode>;
};

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export type GQLPostFormatToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypesOfPostFormatEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the postFormat type and the post type */
export type GQLPostFormatToPostConnection = {
  readonly __typename?: 'PostFormatToPostConnection';
  /** Edges for the PostFormatToPostConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLPostFormatToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLPost>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLPostFormatToPostConnectionEdge = {
  readonly __typename?: 'PostFormatToPostConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLPost>;
};

/** Arguments for filtering the PostFormatToPostConnection connection */
export type GQLPostFormatToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  readonly categoryId: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  readonly categoryName: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Tag Slug */
  readonly tag: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  readonly tagId: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  readonly tagSlugAnd: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  readonly tagSlugIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the postFormat type and the Taxonomy type */
export type GQLPostFormatToTaxonomyConnectionEdge = {
  readonly __typename?: 'PostFormatToTaxonomyConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLTaxonomy>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum GQLPostIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** The format of post field data. */
export enum GQLPostObjectFieldFormatEnum {
  /** Provide the field value directly from database */
  Raw = 'RAW',
  /** Apply the default WordPress rendering */
  Rendered = 'RENDERED'
}

/** The column to use when filtering by date */
export enum GQLPostObjectsConnectionDateColumnEnum {
  /** The date the comment was created in local time. */
  Date = 'DATE',
  /** The most recent modification date of the comment. */
  Modified = 'MODIFIED'
}

/** Field to order the connection by */
export enum GQLPostObjectsConnectionOrderbyEnum {
  /** Order by author */
  Author = 'AUTHOR',
  /** Order by the number of comments it has acquired */
  CommentCount = 'COMMENT_COUNT',
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by title */
  Title = 'TITLE'
}

/** Options for ordering the connection */
export type GQLPostObjectsConnectionOrderbyInput = {
  /** The field to order the connection by */
  readonly field: GQLPostObjectsConnectionOrderbyEnum;
  /** Possible directions in which to order a list of items */
  readonly order: GQLOrderEnum;
};

/** Set relationships between the post to postFormats */
export type GQLPostPostFormatsInput = {
  /** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
  readonly append: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  readonly nodes: InputMaybe<ReadonlyArray<InputMaybe<GQLPostPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type GQLPostPostFormatsNodeInput = {
  /** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
  readonly description: InputMaybe<Scalars['String']>;
  /** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
  readonly id: InputMaybe<Scalars['ID']>;
  /** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  readonly name: InputMaybe<Scalars['String']>;
  /** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  readonly slug: InputMaybe<Scalars['String']>;
};

/** The status of the object. */
export enum GQLPostStatusEnum {
  /** Objects with the acf-disabled status */
  AcfDisabled = 'ACF_DISABLED',
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the draft status */
  Draft = 'DRAFT',
  /** Objects with the future status */
  Future = 'FUTURE',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the pending status */
  Pending = 'PENDING',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the publish status */
  Publish = 'PUBLISH',
  /** Objects with the request-completed status */
  RequestCompleted = 'REQUEST_COMPLETED',
  /** Objects with the request-confirmed status */
  RequestConfirmed = 'REQUEST_CONFIRMED',
  /** Objects with the request-failed status */
  RequestFailed = 'REQUEST_FAILED',
  /** Objects with the request-pending status */
  RequestPending = 'REQUEST_PENDING',
  /** Objects with the trash status */
  Trash = 'TRASH'
}

/** Set relationships between the post to tags */
export type GQLPostTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  readonly append: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  readonly nodes: InputMaybe<ReadonlyArray<InputMaybe<GQLPostTagsNodeInput>>>;
};

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type GQLPostTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  readonly description: InputMaybe<Scalars['String']>;
  /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
  readonly id: InputMaybe<Scalars['ID']>;
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  readonly name: InputMaybe<Scalars['String']>;
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  readonly slug: InputMaybe<Scalars['String']>;
};

/** Connection between the post type and the category type */
export type GQLPostToCategoryConnection = {
  readonly __typename?: 'PostToCategoryConnection';
  /** Edges for the PostToCategoryConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLPostToCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLCategory>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLPostToCategoryConnectionEdge = {
  readonly __typename?: 'PostToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLCategory>;
};

/** Arguments for filtering the PostToCategoryConnection connection */
export type GQLPostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<GQLTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the post type and the Comment type */
export type GQLPostToCommentConnection = {
  readonly __typename?: 'PostToCommentConnection';
  /** Edges for the PostToCommentConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLPostToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLComment>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLPostToCommentConnectionEdge = {
  readonly __typename?: 'PostToCommentConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLComment>;
};

/** Arguments for filtering the PostToCommentConnection connection */
export type GQLPostToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  readonly authorEmail: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  readonly authorUrl: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  readonly commentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  readonly commentType: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  readonly contentName: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: InputMaybe<GQLCommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  readonly status: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  readonly userId: InputMaybe<Scalars['ID']>;
};

/** Connection between the post type and the postFormat type */
export type GQLPostToPostFormatConnection = {
  readonly __typename?: 'PostToPostFormatConnection';
  /** Edges for the PostToPostFormatConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLPostToPostFormatConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLPostFormat>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLPostToPostFormatConnectionEdge = {
  readonly __typename?: 'PostToPostFormatConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLPostFormat>;
};

/** Arguments for filtering the PostToPostFormatConnection connection */
export type GQLPostToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<GQLTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the post type and the post type */
export type GQLPostToPreviewConnectionEdge = {
  readonly __typename?: 'PostToPreviewConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLPost>;
};

/** Connection between the post type and the post type */
export type GQLPostToRevisionConnection = {
  readonly __typename?: 'PostToRevisionConnection';
  /** Edges for the postToRevisionConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLPostToRevisionConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLPost>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLPostToRevisionConnectionEdge = {
  readonly __typename?: 'PostToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLPost>;
};

/** Arguments for filtering the postToRevisionConnection connection */
export type GQLPostToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  readonly categoryId: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  readonly categoryName: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Tag Slug */
  readonly tag: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  readonly tagId: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  readonly tagSlugAnd: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  readonly tagSlugIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the post type and the tag type */
export type GQLPostToTagConnection = {
  readonly __typename?: 'PostToTagConnection';
  /** Edges for the PostToTagConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLPostToTagConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLTag>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLPostToTagConnectionEdge = {
  readonly __typename?: 'PostToTagConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLTag>;
};

/** Arguments for filtering the PostToTagConnection connection */
export type GQLPostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<GQLTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the post type and the TermNode type */
export type GQLPostToTermNodeConnection = {
  readonly __typename?: 'PostToTermNodeConnection';
  /** Edges for the PostToTermNodeConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLPostToTermNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLTermNode>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLPostToTermNodeConnectionEdge = {
  readonly __typename?: 'PostToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLTermNode>;
};

/** Arguments for filtering the PostToTermNodeConnection connection */
export type GQLPostToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<GQLTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  readonly taxonomies: InputMaybe<ReadonlyArray<InputMaybe<GQLTaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']>;
};

/** Details for labels of the PostType */
export type GQLPostTypeLabelDetails = {
  readonly __typename?: 'PostTypeLabelDetails';
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  readonly addNew: Maybe<Scalars['String']>;
  /** Label for adding a new singular item. */
  readonly addNewItem: Maybe<Scalars['String']>;
  /** Label to signify all items in a submenu link. */
  readonly allItems: Maybe<Scalars['String']>;
  /** Label for archives in nav menus */
  readonly archives: Maybe<Scalars['String']>;
  /** Label for the attributes meta box. */
  readonly attributes: Maybe<Scalars['String']>;
  /** Label for editing a singular item. */
  readonly editItem: Maybe<Scalars['String']>;
  /** Label for the Featured Image meta box title. */
  readonly featuredImage: Maybe<Scalars['String']>;
  /** Label for the table views hidden heading. */
  readonly filterItemsList: Maybe<Scalars['String']>;
  /** Label for the media frame button. */
  readonly insertIntoItem: Maybe<Scalars['String']>;
  /** Label for the table hidden heading. */
  readonly itemsList: Maybe<Scalars['String']>;
  /** Label for the table pagination hidden heading. */
  readonly itemsListNavigation: Maybe<Scalars['String']>;
  /** Label for the menu name. */
  readonly menuName: Maybe<Scalars['String']>;
  /** General name for the post type, usually plural. */
  readonly name: Maybe<Scalars['String']>;
  /** Label for the new item page title. */
  readonly newItem: Maybe<Scalars['String']>;
  /** Label used when no items are found. */
  readonly notFound: Maybe<Scalars['String']>;
  /** Label used when no items are in the trash. */
  readonly notFoundInTrash: Maybe<Scalars['String']>;
  /** Label used to prefix parents of hierarchical items. */
  readonly parentItemColon: Maybe<Scalars['String']>;
  /** Label for removing the featured image. */
  readonly removeFeaturedImage: Maybe<Scalars['String']>;
  /** Label for searching plural items. */
  readonly searchItems: Maybe<Scalars['String']>;
  /** Label for setting the featured image. */
  readonly setFeaturedImage: Maybe<Scalars['String']>;
  /** Name for one object of this post type. */
  readonly singularName: Maybe<Scalars['String']>;
  /** Label for the media frame filter. */
  readonly uploadedToThisItem: Maybe<Scalars['String']>;
  /** Label in the media frame for using a featured image. */
  readonly useFeaturedImage: Maybe<Scalars['String']>;
  /** Label for viewing a singular item. */
  readonly viewItem: Maybe<Scalars['String']>;
  /** Label for viewing post type archives. */
  readonly viewItems: Maybe<Scalars['String']>;
};

/** Field Group */
export type GQLPost_Post = GQLAcfFieldGroup & {
  readonly __typename?: 'Post_Post';
  readonly featured: Maybe<GQLMediaItem>;
  /** The name of the ACF Field Group */
  readonly fieldGroupName: Maybe<Scalars['String']>;
};

/** The Project type */
export type GQLProject = GQLContentNode & GQLDatabaseIdentifier & GQLMenuItemLinkable & GQLNode & GQLNodeWithContentEditor & GQLNodeWithFeaturedImage & GQLNodeWithTemplate & GQLNodeWithTitle & GQLUniformResourceIdentifiable & {
  readonly __typename?: 'Project';
  /** The content of the post. */
  readonly content: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<GQLContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String'];
  /** The unique resource identifier path */
  readonly databaseId: Scalars['Int'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  readonly editingLockedBy: Maybe<GQLContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<GQLContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<GQLContentNodeToEnqueuedStylesheetConnection>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<GQLNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  readonly guid: Maybe<Scalars['String']>;
  /** The globally unique identifier of the projects object. */
  readonly id: Scalars['ID'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  readonly isPreview: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<GQLContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['String']>;
  /** Connection between the Project type and the Project type */
  readonly preview: Maybe<GQLProjectToPreviewConnectionEdge>;
  /** The database id of the preview node */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  readonly previewRevisionId: Maybe<Scalars['ID']>;
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Projects&quot; was set to Show in GraphQL. */
  readonly project: Maybe<GQLProject_Project>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly projectId: Scalars['Int'];
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  readonly slug: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** Connection between the Project type and the Technology type */
  readonly technologies: Maybe<GQLProjectToTechnologyConnection>;
  /** The template assigned to a node of content */
  readonly template: Maybe<GQLContentTemplate>;
  /** Connection between the Project type and the TermNode type */
  readonly terms: Maybe<GQLProjectToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};


/** The Project type */
export type GQLProjectContentArgs = {
  format: InputMaybe<GQLPostObjectFieldFormatEnum>;
};


/** The Project type */
export type GQLProjectEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The Project type */
export type GQLProjectEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The Project type */
export type GQLProjectTechnologiesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLProjectToTechnologyConnectionWhereArgs>;
};


/** The Project type */
export type GQLProjectTermsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLProjectToTermNodeConnectionWhereArgs>;
};


/** The Project type */
export type GQLProjectTitleArgs = {
  format: InputMaybe<GQLPostObjectFieldFormatEnum>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum GQLProjectIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Set relationships between the Project to Technologies */
export type GQLProjectTechnologiesInput = {
  /** If true, this will append the Technology to existing related Technologies. If false, this will replace existing relationships. Default true. */
  readonly append: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  readonly nodes: InputMaybe<ReadonlyArray<InputMaybe<GQLProjectTechnologiesNodeInput>>>;
};

/** List of Technologies to connect the Project to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type GQLProjectTechnologiesNodeInput = {
  /** The description of the Technology. This field is used to set a description of the Technology if a new one is created during the mutation. */
  readonly description: InputMaybe<Scalars['String']>;
  /** The ID of the Technology. If present, this will be used to connect to the Project. If no existing Technology exists with this ID, no connection will be made. */
  readonly id: InputMaybe<Scalars['ID']>;
  /** The name of the Technology. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  readonly name: InputMaybe<Scalars['String']>;
  /** The slug of the Technology. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  readonly slug: InputMaybe<Scalars['String']>;
};

/** Connection between the Project type and the Project type */
export type GQLProjectToPreviewConnectionEdge = {
  readonly __typename?: 'ProjectToPreviewConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLProject>;
};

/** Connection between the Project type and the Technology type */
export type GQLProjectToTechnologyConnection = {
  readonly __typename?: 'ProjectToTechnologyConnection';
  /** Edges for the ProjectToTechnologyConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLProjectToTechnologyConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLTechnology>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLProjectToTechnologyConnectionEdge = {
  readonly __typename?: 'ProjectToTechnologyConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLTechnology>;
};

/** Arguments for filtering the ProjectToTechnologyConnection connection */
export type GQLProjectToTechnologyConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<GQLTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Project type and the TermNode type */
export type GQLProjectToTermNodeConnection = {
  readonly __typename?: 'ProjectToTermNodeConnection';
  /** Edges for the ProjectToTermNodeConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLProjectToTermNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLTermNode>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLProjectToTermNodeConnectionEdge = {
  readonly __typename?: 'ProjectToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLTermNode>;
};

/** Arguments for filtering the ProjectToTermNodeConnection connection */
export type GQLProjectToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<GQLTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  readonly taxonomies: InputMaybe<ReadonlyArray<InputMaybe<GQLTaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']>;
};

/** Field Group */
export type GQLProject_Project = GQLAcfFieldGroup & {
  readonly __typename?: 'Project_Project';
  readonly date: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  /** The name of the ACF Field Group */
  readonly fieldGroupName: Maybe<Scalars['String']>;
  readonly link: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<GQLTag>>>;
};

/** The reading setting type */
export type GQLReadingSettings = {
  readonly __typename?: 'ReadingSettings';
  /** Blog pages show at most. */
  readonly postsPerPage: Maybe<Scalars['Int']>;
};

/** Input for the registerUser mutation */
export type GQLRegisterUserInput = {
  /** User's AOL IM account. */
  readonly aim: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** A string containing content about the user. */
  readonly description: InputMaybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  readonly displayName: InputMaybe<Scalars['String']>;
  /** A string containing the user's email address. */
  readonly email: InputMaybe<Scalars['String']>;
  /** 	The user's first name. */
  readonly firstName: InputMaybe<Scalars['String']>;
  /** User's Jabber account. */
  readonly jabber: InputMaybe<Scalars['String']>;
  /** The user's last name. */
  readonly lastName: InputMaybe<Scalars['String']>;
  /** User's locale. */
  readonly locale: InputMaybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  readonly nicename: InputMaybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  readonly nickname: InputMaybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  readonly password: InputMaybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  readonly registered: InputMaybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  readonly richEditing: InputMaybe<Scalars['String']>;
  /** A string that contains the user's username. */
  readonly username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  readonly websiteUrl: InputMaybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  readonly yim: InputMaybe<Scalars['String']>;
};

/** The payload for the registerUser mutation */
export type GQLRegisterUserPayload = {
  readonly __typename?: 'RegisterUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  readonly user: Maybe<GQLUser>;
};

/** The logical relation between each item in the array when there are more than one. */
export enum GQLRelationEnum {
  /** The logical AND condition returns true if both operands are true, otherwise, it returns false. */
  And = 'AND',
  /** The logical OR condition returns false if both operands are false, otherwise, it returns true. */
  Or = 'OR'
}

/** Input for the resetUserPassword mutation */
export type GQLResetUserPasswordInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** Password reset key */
  readonly key: InputMaybe<Scalars['String']>;
  /** The user's login (username). */
  readonly login: InputMaybe<Scalars['String']>;
  /** The new password. */
  readonly password: InputMaybe<Scalars['String']>;
};

/** The payload for the resetUserPassword mutation */
export type GQLResetUserPasswordPayload = {
  readonly __typename?: 'ResetUserPasswordPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  readonly user: Maybe<GQLUser>;
};

/** Input for the restoreComment mutation */
export type GQLRestoreCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The ID of the comment to be restored */
  readonly id: Scalars['ID'];
};

/** The payload for the restoreComment mutation */
export type GQLRestoreCommentPayload = {
  readonly __typename?: 'RestoreCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The restored comment object */
  readonly comment: Maybe<GQLComment>;
  /** The ID of the restored comment */
  readonly restoredId: Maybe<Scalars['ID']>;
};

/** The root mutation */
export type GQLRootMutation = {
  readonly __typename?: 'RootMutation';
  /** The payload for the createCategory mutation */
  readonly createCategory: Maybe<GQLCreateCategoryPayload>;
  /** The payload for the createComment mutation */
  readonly createComment: Maybe<GQLCreateCommentPayload>;
  /** The payload for the createMediaItem mutation */
  readonly createMediaItem: Maybe<GQLCreateMediaItemPayload>;
  /** The payload for the createPage mutation */
  readonly createPage: Maybe<GQLCreatePagePayload>;
  /** The payload for the createPost mutation */
  readonly createPost: Maybe<GQLCreatePostPayload>;
  /** The payload for the createPostFormat mutation */
  readonly createPostFormat: Maybe<GQLCreatePostFormatPayload>;
  /** The payload for the createProject mutation */
  readonly createProject: Maybe<GQLCreateProjectPayload>;
  /** The payload for the createTag mutation */
  readonly createTag: Maybe<GQLCreateTagPayload>;
  /** The payload for the createTechnology mutation */
  readonly createTechnology: Maybe<GQLCreateTechnologyPayload>;
  /** The payload for the createUser mutation */
  readonly createUser: Maybe<GQLCreateUserPayload>;
  /** The payload for the createWork mutation */
  readonly createWork: Maybe<GQLCreateWorkPayload>;
  /** The payload for the deleteCategory mutation */
  readonly deleteCategory: Maybe<GQLDeleteCategoryPayload>;
  /** The payload for the deleteComment mutation */
  readonly deleteComment: Maybe<GQLDeleteCommentPayload>;
  /** The payload for the deleteMediaItem mutation */
  readonly deleteMediaItem: Maybe<GQLDeleteMediaItemPayload>;
  /** The payload for the deletePage mutation */
  readonly deletePage: Maybe<GQLDeletePagePayload>;
  /** The payload for the deletePost mutation */
  readonly deletePost: Maybe<GQLDeletePostPayload>;
  /** The payload for the deletePostFormat mutation */
  readonly deletePostFormat: Maybe<GQLDeletePostFormatPayload>;
  /** The payload for the deleteProject mutation */
  readonly deleteProject: Maybe<GQLDeleteProjectPayload>;
  /** The payload for the deleteTag mutation */
  readonly deleteTag: Maybe<GQLDeleteTagPayload>;
  /** The payload for the deleteTechnology mutation */
  readonly deleteTechnology: Maybe<GQLDeleteTechnologyPayload>;
  /** The payload for the deleteUser mutation */
  readonly deleteUser: Maybe<GQLDeleteUserPayload>;
  /** The payload for the deleteWork mutation */
  readonly deleteWork: Maybe<GQLDeleteWorkPayload>;
  /** Increase the count. */
  readonly increaseCount: Maybe<Scalars['Int']>;
  /** The payload for the registerUser mutation */
  readonly registerUser: Maybe<GQLRegisterUserPayload>;
  /** The payload for the resetUserPassword mutation */
  readonly resetUserPassword: Maybe<GQLResetUserPasswordPayload>;
  /** The payload for the restoreComment mutation */
  readonly restoreComment: Maybe<GQLRestoreCommentPayload>;
  /** The payload for the sendPasswordResetEmail mutation */
  readonly sendPasswordResetEmail: Maybe<GQLSendPasswordResetEmailPayload>;
  /** The payload for the UpdateCategory mutation */
  readonly updateCategory: Maybe<GQLUpdateCategoryPayload>;
  /** The payload for the updateComment mutation */
  readonly updateComment: Maybe<GQLUpdateCommentPayload>;
  /** The payload for the updateMediaItem mutation */
  readonly updateMediaItem: Maybe<GQLUpdateMediaItemPayload>;
  /** The payload for the updatePage mutation */
  readonly updatePage: Maybe<GQLUpdatePagePayload>;
  /** The payload for the updatePost mutation */
  readonly updatePost: Maybe<GQLUpdatePostPayload>;
  /** The payload for the UpdatePostFormat mutation */
  readonly updatePostFormat: Maybe<GQLUpdatePostFormatPayload>;
  /** The payload for the updateProject mutation */
  readonly updateProject: Maybe<GQLUpdateProjectPayload>;
  /** The payload for the updateSettings mutation */
  readonly updateSettings: Maybe<GQLUpdateSettingsPayload>;
  /** The payload for the UpdateTag mutation */
  readonly updateTag: Maybe<GQLUpdateTagPayload>;
  /** The payload for the UpdateTechnology mutation */
  readonly updateTechnology: Maybe<GQLUpdateTechnologyPayload>;
  /** The payload for the updateUser mutation */
  readonly updateUser: Maybe<GQLUpdateUserPayload>;
  /** The payload for the updateWork mutation */
  readonly updateWork: Maybe<GQLUpdateWorkPayload>;
};


/** The root mutation */
export type GQLRootMutationCreateCategoryArgs = {
  input: GQLCreateCategoryInput;
};


/** The root mutation */
export type GQLRootMutationCreateCommentArgs = {
  input: GQLCreateCommentInput;
};


/** The root mutation */
export type GQLRootMutationCreateMediaItemArgs = {
  input: GQLCreateMediaItemInput;
};


/** The root mutation */
export type GQLRootMutationCreatePageArgs = {
  input: GQLCreatePageInput;
};


/** The root mutation */
export type GQLRootMutationCreatePostArgs = {
  input: GQLCreatePostInput;
};


/** The root mutation */
export type GQLRootMutationCreatePostFormatArgs = {
  input: GQLCreatePostFormatInput;
};


/** The root mutation */
export type GQLRootMutationCreateProjectArgs = {
  input: GQLCreateProjectInput;
};


/** The root mutation */
export type GQLRootMutationCreateTagArgs = {
  input: GQLCreateTagInput;
};


/** The root mutation */
export type GQLRootMutationCreateTechnologyArgs = {
  input: GQLCreateTechnologyInput;
};


/** The root mutation */
export type GQLRootMutationCreateUserArgs = {
  input: GQLCreateUserInput;
};


/** The root mutation */
export type GQLRootMutationCreateWorkArgs = {
  input: GQLCreateWorkInput;
};


/** The root mutation */
export type GQLRootMutationDeleteCategoryArgs = {
  input: GQLDeleteCategoryInput;
};


/** The root mutation */
export type GQLRootMutationDeleteCommentArgs = {
  input: GQLDeleteCommentInput;
};


/** The root mutation */
export type GQLRootMutationDeleteMediaItemArgs = {
  input: GQLDeleteMediaItemInput;
};


/** The root mutation */
export type GQLRootMutationDeletePageArgs = {
  input: GQLDeletePageInput;
};


/** The root mutation */
export type GQLRootMutationDeletePostArgs = {
  input: GQLDeletePostInput;
};


/** The root mutation */
export type GQLRootMutationDeletePostFormatArgs = {
  input: GQLDeletePostFormatInput;
};


/** The root mutation */
export type GQLRootMutationDeleteProjectArgs = {
  input: GQLDeleteProjectInput;
};


/** The root mutation */
export type GQLRootMutationDeleteTagArgs = {
  input: GQLDeleteTagInput;
};


/** The root mutation */
export type GQLRootMutationDeleteTechnologyArgs = {
  input: GQLDeleteTechnologyInput;
};


/** The root mutation */
export type GQLRootMutationDeleteUserArgs = {
  input: GQLDeleteUserInput;
};


/** The root mutation */
export type GQLRootMutationDeleteWorkArgs = {
  input: GQLDeleteWorkInput;
};


/** The root mutation */
export type GQLRootMutationIncreaseCountArgs = {
  count: InputMaybe<Scalars['Int']>;
};


/** The root mutation */
export type GQLRootMutationRegisterUserArgs = {
  input: GQLRegisterUserInput;
};


/** The root mutation */
export type GQLRootMutationResetUserPasswordArgs = {
  input: GQLResetUserPasswordInput;
};


/** The root mutation */
export type GQLRootMutationRestoreCommentArgs = {
  input: GQLRestoreCommentInput;
};


/** The root mutation */
export type GQLRootMutationSendPasswordResetEmailArgs = {
  input: GQLSendPasswordResetEmailInput;
};


/** The root mutation */
export type GQLRootMutationUpdateCategoryArgs = {
  input: GQLUpdateCategoryInput;
};


/** The root mutation */
export type GQLRootMutationUpdateCommentArgs = {
  input: GQLUpdateCommentInput;
};


/** The root mutation */
export type GQLRootMutationUpdateMediaItemArgs = {
  input: GQLUpdateMediaItemInput;
};


/** The root mutation */
export type GQLRootMutationUpdatePageArgs = {
  input: GQLUpdatePageInput;
};


/** The root mutation */
export type GQLRootMutationUpdatePostArgs = {
  input: GQLUpdatePostInput;
};


/** The root mutation */
export type GQLRootMutationUpdatePostFormatArgs = {
  input: GQLUpdatePostFormatInput;
};


/** The root mutation */
export type GQLRootMutationUpdateProjectArgs = {
  input: GQLUpdateProjectInput;
};


/** The root mutation */
export type GQLRootMutationUpdateSettingsArgs = {
  input: GQLUpdateSettingsInput;
};


/** The root mutation */
export type GQLRootMutationUpdateTagArgs = {
  input: GQLUpdateTagInput;
};


/** The root mutation */
export type GQLRootMutationUpdateTechnologyArgs = {
  input: GQLUpdateTechnologyInput;
};


/** The root mutation */
export type GQLRootMutationUpdateUserArgs = {
  input: GQLUpdateUserInput;
};


/** The root mutation */
export type GQLRootMutationUpdateWorkArgs = {
  input: GQLUpdateWorkInput;
};

/** The root entry point into the Graph */
export type GQLRootQuery = {
  readonly __typename?: 'RootQuery';
  /** Entry point to get all settings for the site */
  readonly allSettings: Maybe<GQLSettings>;
  /** Connection between the RootQuery type and the category type */
  readonly categories: Maybe<GQLRootQueryToCategoryConnection>;
  /** A 0bject */
  readonly category: Maybe<GQLCategory>;
  /** Returns a Comment */
  readonly comment: Maybe<GQLComment>;
  /** Connection between the RootQuery type and the Comment type */
  readonly comments: Maybe<GQLRootQueryToCommentConnection>;
  /** A node used to manage content */
  readonly contentNode: Maybe<GQLContentNode>;
  /** Connection between the RootQuery type and the ContentNode type */
  readonly contentNodes: Maybe<GQLRootQueryToContentNodeConnection>;
  /** Fetch a Content Type node by unique Identifier */
  readonly contentType: Maybe<GQLContentType>;
  /** Connection between the RootQuery type and the ContentType type */
  readonly contentTypes: Maybe<GQLRootQueryToContentTypeConnection>;
  /** Fields of the &#039;DiscussionSettings&#039; settings group */
  readonly discussionSettings: Maybe<GQLDiscussionSettings>;
  /** Fields of the &#039;GeneralSettings&#039; settings group */
  readonly generalSettings: Maybe<GQLGeneralSettings>;
  /** An object of the mediaItem Type.  */
  readonly mediaItem: Maybe<GQLMediaItem>;
  /**
   * A mediaItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  readonly mediaItemBy: Maybe<GQLMediaItem>;
  /** Connection between the RootQuery type and the mediaItem type */
  readonly mediaItems: Maybe<GQLRootQueryToMediaItemConnection>;
  /** A WordPress navigation menu */
  readonly menu: Maybe<GQLMenu>;
  /** A WordPress navigation menu item */
  readonly menuItem: Maybe<GQLMenuItem>;
  /** Connection between the RootQuery type and the MenuItem type */
  readonly menuItems: Maybe<GQLRootQueryToMenuItemConnection>;
  /** Connection between the RootQuery type and the Menu type */
  readonly menus: Maybe<GQLRootQueryToMenuConnection>;
  /** Fetches an object given its ID */
  readonly node: Maybe<GQLNode>;
  /** Fetches an object given its Unique Resource Identifier */
  readonly nodeByUri: Maybe<GQLUniformResourceIdentifiable>;
  /** An object of the page Type.  */
  readonly page: Maybe<GQLPage>;
  /**
   * A page object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  readonly pageBy: Maybe<GQLPage>;
  /** Connection between the RootQuery type and the page type */
  readonly pages: Maybe<GQLRootQueryToPageConnection>;
  /** A WordPress plugin */
  readonly plugin: Maybe<GQLPlugin>;
  /** Connection between the RootQuery type and the Plugin type */
  readonly plugins: Maybe<GQLRootQueryToPluginConnection>;
  /** An object of the post Type.  */
  readonly post: Maybe<GQLPost>;
  /**
   * A post object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  readonly postBy: Maybe<GQLPost>;
  /** A 0bject */
  readonly postFormat: Maybe<GQLPostFormat>;
  /** Connection between the RootQuery type and the postFormat type */
  readonly postFormats: Maybe<GQLRootQueryToPostFormatConnection>;
  /** Connection between the RootQuery type and the post type */
  readonly posts: Maybe<GQLRootQueryToPostConnection>;
  /** An object of the Project Type.  */
  readonly project: Maybe<GQLProject>;
  /**
   * A Project object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  readonly projectBy: Maybe<GQLProject>;
  /** Connection between the RootQuery type and the Project type */
  readonly projects: Maybe<GQLRootQueryToProjectConnection>;
  /** Fields of the &#039;ReadingSettings&#039; settings group */
  readonly readingSettings: Maybe<GQLReadingSettings>;
  /** Connection between the RootQuery type and the EnqueuedScript type */
  readonly registeredScripts: Maybe<GQLRootQueryToEnqueuedScriptConnection>;
  /** Connection between the RootQuery type and the EnqueuedStylesheet type */
  readonly registeredStylesheets: Maybe<GQLRootQueryToEnqueuedStylesheetConnection>;
  /** Connection between the RootQuery type and the ContentRevisionUnion type */
  readonly revisions: Maybe<GQLRootQueryToContentRevisionUnionConnection>;
  /** A 0bject */
  readonly tag: Maybe<GQLTag>;
  /** Connection between the RootQuery type and the tag type */
  readonly tags: Maybe<GQLRootQueryToTagConnection>;
  /** Connection between the RootQuery type and the Taxonomy type */
  readonly taxonomies: Maybe<GQLRootQueryToTaxonomyConnection>;
  /** Fetch a Taxonomy node by unique Identifier */
  readonly taxonomy: Maybe<GQLTaxonomy>;
  /** Connection between the RootQuery type and the Technology type */
  readonly technologies: Maybe<GQLRootQueryToTechnologyConnection>;
  /** A 0bject */
  readonly technology: Maybe<GQLTechnology>;
  /** A node in a taxonomy used to group and relate content nodes */
  readonly termNode: Maybe<GQLTermNode>;
  /** Connection between the RootQuery type and the TermNode type */
  readonly terms: Maybe<GQLRootQueryToTermNodeConnection>;
  /** A Theme object */
  readonly theme: Maybe<GQLTheme>;
  /** Connection between the RootQuery type and the Theme type */
  readonly themes: Maybe<GQLRootQueryToThemeConnection>;
  /** Returns a user */
  readonly user: Maybe<GQLUser>;
  /** Returns a user role */
  readonly userRole: Maybe<GQLUserRole>;
  /** Connection between the RootQuery type and the UserRole type */
  readonly userRoles: Maybe<GQLRootQueryToUserRoleConnection>;
  /** Connection between the RootQuery type and the User type */
  readonly users: Maybe<GQLRootQueryToUserConnection>;
  /** Returns the current user */
  readonly viewer: Maybe<GQLUser>;
  /** An object of the Work Type.  */
  readonly work: Maybe<GQLWork>;
  /**
   * A Work object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  readonly workBy: Maybe<GQLWork>;
  /** Connection between the RootQuery type and the Work type */
  readonly works: Maybe<GQLRootQueryToWorkConnection>;
  /** Fields of the &#039;WritingSettings&#039; settings group */
  readonly writingSettings: Maybe<GQLWritingSettings>;
};


/** The root entry point into the Graph */
export type GQLRootQueryCategoriesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLRootQueryToCategoryConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type GQLRootQueryCategoryArgs = {
  id: Scalars['ID'];
  idType: InputMaybe<GQLCategoryIdType>;
};


/** The root entry point into the Graph */
export type GQLRootQueryCommentArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type GQLRootQueryCommentsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLRootQueryToCommentConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type GQLRootQueryContentNodeArgs = {
  asPreview: InputMaybe<Scalars['Boolean']>;
  contentType: InputMaybe<GQLContentTypeEnum>;
  id: Scalars['ID'];
  idType: InputMaybe<GQLContentNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type GQLRootQueryContentNodesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLRootQueryToContentNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type GQLRootQueryContentTypeArgs = {
  id: Scalars['ID'];
  idType: InputMaybe<GQLContentTypeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type GQLRootQueryContentTypesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type GQLRootQueryMediaItemArgs = {
  asPreview: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType: InputMaybe<GQLMediaItemIdType>;
};


/** The root entry point into the Graph */
export type GQLRootQueryMediaItemByArgs = {
  id: InputMaybe<Scalars['ID']>;
  mediaItemId: InputMaybe<Scalars['Int']>;
  slug: InputMaybe<Scalars['String']>;
  uri: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type GQLRootQueryMediaItemsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLRootQueryToMediaItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type GQLRootQueryMenuArgs = {
  id: Scalars['ID'];
  idType: InputMaybe<GQLMenuNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type GQLRootQueryMenuItemArgs = {
  id: Scalars['ID'];
  idType: InputMaybe<GQLMenuItemNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type GQLRootQueryMenuItemsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLRootQueryToMenuItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type GQLRootQueryMenusArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLRootQueryToMenuConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type GQLRootQueryNodeArgs = {
  id: InputMaybe<Scalars['ID']>;
};


/** The root entry point into the Graph */
export type GQLRootQueryNodeByUriArgs = {
  uri: Scalars['String'];
};


/** The root entry point into the Graph */
export type GQLRootQueryPageArgs = {
  asPreview: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType: InputMaybe<GQLPageIdType>;
};


/** The root entry point into the Graph */
export type GQLRootQueryPageByArgs = {
  id: InputMaybe<Scalars['ID']>;
  pageId: InputMaybe<Scalars['Int']>;
  uri: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type GQLRootQueryPagesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLRootQueryToPageConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type GQLRootQueryPluginArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type GQLRootQueryPluginsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type GQLRootQueryPostArgs = {
  asPreview: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType: InputMaybe<GQLPostIdType>;
};


/** The root entry point into the Graph */
export type GQLRootQueryPostByArgs = {
  id: InputMaybe<Scalars['ID']>;
  postId: InputMaybe<Scalars['Int']>;
  slug: InputMaybe<Scalars['String']>;
  uri: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type GQLRootQueryPostFormatArgs = {
  id: Scalars['ID'];
  idType: InputMaybe<GQLPostFormatIdType>;
};


/** The root entry point into the Graph */
export type GQLRootQueryPostFormatsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLRootQueryToPostFormatConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type GQLRootQueryPostsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLRootQueryToPostConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type GQLRootQueryProjectArgs = {
  asPreview: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType: InputMaybe<GQLProjectIdType>;
};


/** The root entry point into the Graph */
export type GQLRootQueryProjectByArgs = {
  id: InputMaybe<Scalars['ID']>;
  projectId: InputMaybe<Scalars['Int']>;
  slug: InputMaybe<Scalars['String']>;
  uri: InputMaybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type GQLRootQueryProjectsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLRootQueryToProjectConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type GQLRootQueryRegisteredScriptsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type GQLRootQueryRegisteredStylesheetsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type GQLRootQueryRevisionsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLRootQueryToContentRevisionUnionConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type GQLRootQueryTagArgs = {
  id: Scalars['ID'];
  idType: InputMaybe<GQLTagIdType>;
};


/** The root entry point into the Graph */
export type GQLRootQueryTagsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLRootQueryToTagConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type GQLRootQueryTaxonomiesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type GQLRootQueryTaxonomyArgs = {
  id: Scalars['ID'];
  idType: InputMaybe<GQLTaxonomyIdTypeEnum>;
};


/** The root entry point into the Graph */
export type GQLRootQueryTechnologiesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLRootQueryToTechnologyConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type GQLRootQueryTechnologyArgs = {
  id: Scalars['ID'];
  idType: InputMaybe<GQLTechnologyIdType>;
};


/** The root entry point into the Graph */
export type GQLRootQueryTermNodeArgs = {
  id: Scalars['ID'];
  idType: InputMaybe<GQLTermNodeIdTypeEnum>;
  taxonomy: InputMaybe<GQLTaxonomyEnum>;
};


/** The root entry point into the Graph */
export type GQLRootQueryTermsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLRootQueryToTermNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type GQLRootQueryThemeArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type GQLRootQueryThemesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type GQLRootQueryUserArgs = {
  id: Scalars['ID'];
  idType: InputMaybe<GQLUserNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type GQLRootQueryUserRoleArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type GQLRootQueryUserRolesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type GQLRootQueryUsersArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLRootQueryToUserConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type GQLRootQueryWorkArgs = {
  asPreview: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  idType: InputMaybe<GQLWorkIdType>;
};


/** The root entry point into the Graph */
export type GQLRootQueryWorkByArgs = {
  id: InputMaybe<Scalars['ID']>;
  slug: InputMaybe<Scalars['String']>;
  uri: InputMaybe<Scalars['String']>;
  workId: InputMaybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type GQLRootQueryWorksArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLRootQueryToWorkConnectionWhereArgs>;
};

/** Connection between the RootQuery type and the category type */
export type GQLRootQueryToCategoryConnection = {
  readonly __typename?: 'RootQueryToCategoryConnection';
  /** Edges for the RootQueryToCategoryConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLCategory>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToCategoryConnectionEdge = {
  readonly __typename?: 'RootQueryToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLCategory>;
};

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type GQLRootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<GQLTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Comment type */
export type GQLRootQueryToCommentConnection = {
  readonly __typename?: 'RootQueryToCommentConnection';
  /** Edges for the RootQueryToCommentConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLComment>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToCommentConnectionEdge = {
  readonly __typename?: 'RootQueryToCommentConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLComment>;
};

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type GQLRootQueryToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  readonly authorEmail: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  readonly authorUrl: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  readonly commentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  readonly commentType: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  readonly contentName: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: InputMaybe<GQLCommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  readonly status: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  readonly userId: InputMaybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type GQLRootQueryToContentNodeConnection = {
  readonly __typename?: 'RootQueryToContentNodeConnection';
  /** Edges for the RootQueryToContentNodeConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLContentNode>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToContentNodeConnectionEdge = {
  readonly __typename?: 'RootQueryToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLContentNode>;
};

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type GQLRootQueryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypeEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentRevisionUnion type */
export type GQLRootQueryToContentRevisionUnionConnection = {
  readonly __typename?: 'RootQueryToContentRevisionUnionConnection';
  /** Edges for the RootQueryToContentRevisionUnionConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToContentRevisionUnionConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLContentRevisionUnion>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToContentRevisionUnionConnectionEdge = {
  readonly __typename?: 'RootQueryToContentRevisionUnionConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLContentRevisionUnion>;
};

/** Arguments for filtering the RootQueryToContentRevisionUnionConnection connection */
export type GQLRootQueryToContentRevisionUnionConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypeEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentType type */
export type GQLRootQueryToContentTypeConnection = {
  readonly __typename?: 'RootQueryToContentTypeConnection';
  /** Edges for the RootQueryToContentTypeConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToContentTypeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLContentType>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToContentTypeConnectionEdge = {
  readonly __typename?: 'RootQueryToContentTypeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLContentType>;
};

/** Connection between the RootQuery type and the EnqueuedScript type */
export type GQLRootQueryToEnqueuedScriptConnection = {
  readonly __typename?: 'RootQueryToEnqueuedScriptConnection';
  /** Edges for the RootQueryToEnqueuedScriptConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToEnqueuedScriptConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLEnqueuedScript>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToEnqueuedScriptConnectionEdge = {
  readonly __typename?: 'RootQueryToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLEnqueuedScript>;
};

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export type GQLRootQueryToEnqueuedStylesheetConnection = {
  readonly __typename?: 'RootQueryToEnqueuedStylesheetConnection';
  /** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToEnqueuedStylesheetConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLEnqueuedStylesheet>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToEnqueuedStylesheetConnectionEdge = {
  readonly __typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLEnqueuedStylesheet>;
};

/** Connection between the RootQuery type and the mediaItem type */
export type GQLRootQueryToMediaItemConnection = {
  readonly __typename?: 'RootQueryToMediaItemConnection';
  /** Edges for the RootQueryToMediaItemConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToMediaItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLMediaItem>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToMediaItemConnectionEdge = {
  readonly __typename?: 'RootQueryToMediaItemConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLMediaItem>;
};

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type GQLRootQueryToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Menu type */
export type GQLRootQueryToMenuConnection = {
  readonly __typename?: 'RootQueryToMenuConnection';
  /** Edges for the RootQueryToMenuConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToMenuConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLMenu>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToMenuConnectionEdge = {
  readonly __typename?: 'RootQueryToMenuConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLMenu>;
};

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type GQLRootQueryToMenuConnectionWhereArgs = {
  /** The ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  readonly location: InputMaybe<GQLMenuLocationEnum>;
  /** The slug of the menu to query items for */
  readonly slug: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the MenuItem type */
export type GQLRootQueryToMenuItemConnection = {
  readonly __typename?: 'RootQueryToMenuItemConnection';
  /** Edges for the RootQueryToMenuItemConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToMenuItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLMenuItem>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToMenuItemConnectionEdge = {
  readonly __typename?: 'RootQueryToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLMenuItem>;
};

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type GQLRootQueryToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  readonly location: InputMaybe<GQLMenuLocationEnum>;
  /** The database ID of the parent menu object */
  readonly parentDatabaseId: InputMaybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  readonly parentId: InputMaybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the page type */
export type GQLRootQueryToPageConnection = {
  readonly __typename?: 'RootQueryToPageConnection';
  /** Edges for the RootQueryToPageConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToPageConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLPage>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToPageConnectionEdge = {
  readonly __typename?: 'RootQueryToPageConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLPage>;
};

/** Arguments for filtering the RootQueryToPageConnection connection */
export type GQLRootQueryToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Plugin type */
export type GQLRootQueryToPluginConnection = {
  readonly __typename?: 'RootQueryToPluginConnection';
  /** Edges for the RootQueryToPluginConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToPluginConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLPlugin>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToPluginConnectionEdge = {
  readonly __typename?: 'RootQueryToPluginConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLPlugin>;
};

/** Connection between the RootQuery type and the post type */
export type GQLRootQueryToPostConnection = {
  readonly __typename?: 'RootQueryToPostConnection';
  /** Edges for the RootQueryToPostConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLPost>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToPostConnectionEdge = {
  readonly __typename?: 'RootQueryToPostConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLPost>;
};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type GQLRootQueryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  readonly categoryId: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  readonly categoryName: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Tag Slug */
  readonly tag: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  readonly tagId: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  readonly tagSlugAnd: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  readonly tagSlugIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the postFormat type */
export type GQLRootQueryToPostFormatConnection = {
  readonly __typename?: 'RootQueryToPostFormatConnection';
  /** Edges for the RootQueryToPostFormatConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToPostFormatConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLPostFormat>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToPostFormatConnectionEdge = {
  readonly __typename?: 'RootQueryToPostFormatConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLPostFormat>;
};

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type GQLRootQueryToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<GQLTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Project type */
export type GQLRootQueryToProjectConnection = {
  readonly __typename?: 'RootQueryToProjectConnection';
  /** Edges for the RootQueryToProjectConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToProjectConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLProject>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToProjectConnectionEdge = {
  readonly __typename?: 'RootQueryToProjectConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLProject>;
};

/** Arguments for filtering the RootQueryToProjectConnection connection */
export type GQLRootQueryToProjectConnectionWhereArgs = {
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the tag type */
export type GQLRootQueryToTagConnection = {
  readonly __typename?: 'RootQueryToTagConnection';
  /** Edges for the RootQueryToTagConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToTagConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLTag>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToTagConnectionEdge = {
  readonly __typename?: 'RootQueryToTagConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLTag>;
};

/** Arguments for filtering the RootQueryToTagConnection connection */
export type GQLRootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<GQLTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Taxonomy type */
export type GQLRootQueryToTaxonomyConnection = {
  readonly __typename?: 'RootQueryToTaxonomyConnection';
  /** Edges for the RootQueryToTaxonomyConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToTaxonomyConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLTaxonomy>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToTaxonomyConnectionEdge = {
  readonly __typename?: 'RootQueryToTaxonomyConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLTaxonomy>;
};

/** Connection between the RootQuery type and the Technology type */
export type GQLRootQueryToTechnologyConnection = {
  readonly __typename?: 'RootQueryToTechnologyConnection';
  /** Edges for the RootQueryToTechnologyConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToTechnologyConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLTechnology>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToTechnologyConnectionEdge = {
  readonly __typename?: 'RootQueryToTechnologyConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLTechnology>;
};

/** Arguments for filtering the RootQueryToTechnologyConnection connection */
export type GQLRootQueryToTechnologyConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<GQLTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the TermNode type */
export type GQLRootQueryToTermNodeConnection = {
  readonly __typename?: 'RootQueryToTermNodeConnection';
  /** Edges for the RootQueryToTermNodeConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToTermNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLTermNode>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToTermNodeConnectionEdge = {
  readonly __typename?: 'RootQueryToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLTermNode>;
};

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type GQLRootQueryToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<GQLTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  readonly taxonomies: InputMaybe<ReadonlyArray<InputMaybe<GQLTaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Theme type */
export type GQLRootQueryToThemeConnection = {
  readonly __typename?: 'RootQueryToThemeConnection';
  /** Edges for the RootQueryToThemeConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToThemeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLTheme>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToThemeConnectionEdge = {
  readonly __typename?: 'RootQueryToThemeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLTheme>;
};

/** Connection between the RootQuery type and the User type */
export type GQLRootQueryToUserConnection = {
  readonly __typename?: 'RootQueryToUserConnection';
  /** Edges for the RootQueryToUserConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToUserConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLUser>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToUserConnectionEdge = {
  readonly __typename?: 'RootQueryToUserConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLUser>;
};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type GQLRootQueryToUserConnectionWhereArgs = {
  /** Array of userIds to exclude. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  readonly hasPublishedPosts: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypeEnum>>>;
  /** Array of userIds to include. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  /** The user login. */
  readonly login: InputMaybe<Scalars['String']>;
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  readonly loginIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  readonly loginNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** The user nicename. */
  readonly nicename: InputMaybe<Scalars['String']>;
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  readonly nicenameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  readonly nicenameNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLUsersConnectionOrderbyInput>>>;
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  readonly role: InputMaybe<GQLUserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  readonly roleIn: InputMaybe<ReadonlyArray<InputMaybe<GQLUserRoleEnum>>>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  readonly roleNotIn: InputMaybe<ReadonlyArray<InputMaybe<GQLUserRoleEnum>>>;
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  readonly searchColumns: InputMaybe<ReadonlyArray<InputMaybe<GQLUsersConnectionSearchColumnEnum>>>;
};

/** Connection between the RootQuery type and the UserRole type */
export type GQLRootQueryToUserRoleConnection = {
  readonly __typename?: 'RootQueryToUserRoleConnection';
  /** Edges for the RootQueryToUserRoleConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToUserRoleConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLUserRole>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToUserRoleConnectionEdge = {
  readonly __typename?: 'RootQueryToUserRoleConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLUserRole>;
};

/** Connection between the RootQuery type and the Work type */
export type GQLRootQueryToWorkConnection = {
  readonly __typename?: 'RootQueryToWorkConnection';
  /** Edges for the RootQueryToWorkConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLRootQueryToWorkConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLWork>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLRootQueryToWorkConnectionEdge = {
  readonly __typename?: 'RootQueryToWorkConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLWork>;
};

/** Arguments for filtering the RootQueryToWorkConnection connection */
export type GQLRootQueryToWorkConnectionWhereArgs = {
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Input for the sendPasswordResetEmail mutation */
export type GQLSendPasswordResetEmailInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** A string that contains the user's username or email address. */
  readonly username: Scalars['String'];
};

/** The payload for the sendPasswordResetEmail mutation */
export type GQLSendPasswordResetEmailPayload = {
  readonly __typename?: 'SendPasswordResetEmailPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The user that the password reset email was sent to */
  readonly user: Maybe<GQLUser>;
};

/** All of the registered settings */
export type GQLSettings = {
  readonly __typename?: 'Settings';
  /** Settings of the the string Settings Group */
  readonly discussionSettingsDefaultCommentStatus: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  readonly discussionSettingsDefaultPingStatus: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  readonly generalSettingsDateFormat: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  readonly generalSettingsDescription: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  readonly generalSettingsEmail: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  readonly generalSettingsLanguage: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  readonly generalSettingsStartOfWeek: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  readonly generalSettingsTimeFormat: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  readonly generalSettingsTimezone: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  readonly generalSettingsTitle: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  readonly generalSettingsUrl: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  readonly readingSettingsPostsPerPage: Maybe<Scalars['Int']>;
  /** Settings of the the integer Settings Group */
  readonly writingSettingsDefaultCategory: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  readonly writingSettingsDefaultPostFormat: Maybe<Scalars['String']>;
  /** Settings of the the boolean Settings Group */
  readonly writingSettingsUseSmilies: Maybe<Scalars['Boolean']>;
};

/** The tag type */
export type GQLTag = GQLDatabaseIdentifier & GQLMenuItemLinkable & GQLNode & GQLTermNode & GQLUniformResourceIdentifiable & {
  readonly __typename?: 'Tag';
  /** Connection between the tag type and the ContentNode type */
  readonly contentNodes: Maybe<GQLTagToContentNodeConnection>;
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly databaseId: Scalars['Int'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<GQLTermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<GQLTermNodeToEnqueuedStylesheetConnection>;
  /** The unique resource identifier path */
  readonly id: Scalars['ID'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']>;
  /** Connection between the tag type and the post type */
  readonly posts: Maybe<GQLTagToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly tagId: Maybe<Scalars['Int']>;
  /** Connection between the tag type and the Taxonomy type */
  readonly taxonomy: Maybe<GQLTagToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  readonly taxonomyName: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};


/** The tag type */
export type GQLTagContentNodesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLTagToContentNodeConnectionWhereArgs>;
};


/** The tag type */
export type GQLTagEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The tag type */
export type GQLTagEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The tag type */
export type GQLTagPostsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLTagToPostConnectionWhereArgs>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum GQLTagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the tag type and the ContentNode type */
export type GQLTagToContentNodeConnection = {
  readonly __typename?: 'TagToContentNodeConnection';
  /** Edges for the TagToContentNodeConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLTagToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLContentNode>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLTagToContentNodeConnectionEdge = {
  readonly __typename?: 'TagToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLContentNode>;
};

/** Arguments for filtering the TagToContentNodeConnection connection */
export type GQLTagToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypesOfTagEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the tag type and the post type */
export type GQLTagToPostConnection = {
  readonly __typename?: 'TagToPostConnection';
  /** Edges for the TagToPostConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLTagToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLPost>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLTagToPostConnectionEdge = {
  readonly __typename?: 'TagToPostConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLPost>;
};

/** Arguments for filtering the TagToPostConnection connection */
export type GQLTagToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  readonly categoryId: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  readonly categoryName: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Tag Slug */
  readonly tag: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  readonly tagId: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  readonly tagSlugAnd: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  readonly tagSlugIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the tag type and the Taxonomy type */
export type GQLTagToTaxonomyConnectionEdge = {
  readonly __typename?: 'TagToTaxonomyConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLTaxonomy>;
};

/** A taxonomy object */
export type GQLTaxonomy = GQLNode & {
  readonly __typename?: 'Taxonomy';
  /** List of Content Types associated with the Taxonomy */
  readonly connectedContentTypes: Maybe<GQLTaxonomyToContentTypeConnection>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  readonly description: Maybe<Scalars['String']>;
  /** The plural name of the post type within the GraphQL Schema. */
  readonly graphqlPluralName: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  readonly graphqlSingleName: Maybe<Scalars['String']>;
  /** Whether the taxonomy is hierarchical */
  readonly hierarchical: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier of the taxonomy object. */
  readonly id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Name of the taxonomy shown in the menu. Usually plural. */
  readonly label: Maybe<Scalars['String']>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  readonly name: Maybe<Scalars['String']>;
  /** Whether the taxonomy is publicly queryable */
  readonly public: Maybe<Scalars['Boolean']>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  readonly restBase: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  readonly restControllerClass: Maybe<Scalars['String']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  readonly showCloud: Maybe<Scalars['Boolean']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  readonly showInAdminColumn: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  readonly showInGraphql: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the admin menu */
  readonly showInMenu: Maybe<Scalars['Boolean']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  readonly showInNavMenus: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  readonly showInQuickEdit: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  readonly showInRest: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  readonly showUi: Maybe<Scalars['Boolean']>;
};


/** A taxonomy object */
export type GQLTaxonomyConnectedContentTypesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/** Allowed taxonomies */
export enum GQLTaxonomyEnum {
  /** Taxonomy enum category */
  Category = 'CATEGORY',
  /** Taxonomy enum post_format */
  Postformat = 'POSTFORMAT',
  /** Taxonomy enum post_tag */
  Tag = 'TAG',
  /** Taxonomy enum technology */
  Technology = 'TECHNOLOGY'
}

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export enum GQLTaxonomyIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the taxonomy */
  Name = 'NAME'
}

/** Connection between the Taxonomy type and the ContentType type */
export type GQLTaxonomyToContentTypeConnection = {
  readonly __typename?: 'TaxonomyToContentTypeConnection';
  /** Edges for the TaxonomyToContentTypeConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLTaxonomyToContentTypeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLContentType>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLTaxonomyToContentTypeConnectionEdge = {
  readonly __typename?: 'TaxonomyToContentTypeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLContentType>;
};

/** The Technology type */
export type GQLTechnology = GQLDatabaseIdentifier & GQLMenuItemLinkable & GQLNode & GQLTermNode & GQLUniformResourceIdentifiable & {
  readonly __typename?: 'Technology';
  /** Connection between the Technology type and the ContentNode type */
  readonly contentNodes: Maybe<GQLTechnologyToContentNodeConnection>;
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly databaseId: Scalars['Int'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<GQLTermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<GQLTermNodeToEnqueuedStylesheetConnection>;
  /** The unique resource identifier path */
  readonly id: Scalars['ID'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']>;
  /** Connection between the Technology type and the Project type */
  readonly projects: Maybe<GQLTechnologyToProjectConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']>;
  /** Connection between the Technology type and the Taxonomy type */
  readonly taxonomy: Maybe<GQLTechnologyToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  readonly taxonomyName: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  readonly technologyId: Maybe<Scalars['Int']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
  /** Connection between the Technology type and the Work type */
  readonly works: Maybe<GQLTechnologyToWorkConnection>;
};


/** The Technology type */
export type GQLTechnologyContentNodesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLTechnologyToContentNodeConnectionWhereArgs>;
};


/** The Technology type */
export type GQLTechnologyEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The Technology type */
export type GQLTechnologyEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The Technology type */
export type GQLTechnologyProjectsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLTechnologyToProjectConnectionWhereArgs>;
};


/** The Technology type */
export type GQLTechnologyWorksArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLTechnologyToWorkConnectionWhereArgs>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum GQLTechnologyIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the Technology type and the ContentNode type */
export type GQLTechnologyToContentNodeConnection = {
  readonly __typename?: 'TechnologyToContentNodeConnection';
  /** Edges for the TechnologyToContentNodeConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLTechnologyToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLContentNode>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLTechnologyToContentNodeConnectionEdge = {
  readonly __typename?: 'TechnologyToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLContentNode>;
};

/** Arguments for filtering the TechnologyToContentNodeConnection connection */
export type GQLTechnologyToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypesOfTechnologyEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the Technology type and the Project type */
export type GQLTechnologyToProjectConnection = {
  readonly __typename?: 'TechnologyToProjectConnection';
  /** Edges for the TechnologyToProjectConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLTechnologyToProjectConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLProject>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLTechnologyToProjectConnectionEdge = {
  readonly __typename?: 'TechnologyToProjectConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLProject>;
};

/** Arguments for filtering the TechnologyToProjectConnection connection */
export type GQLTechnologyToProjectConnectionWhereArgs = {
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the Technology type and the Taxonomy type */
export type GQLTechnologyToTaxonomyConnectionEdge = {
  readonly __typename?: 'TechnologyToTaxonomyConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLTaxonomy>;
};

/** Connection between the Technology type and the Work type */
export type GQLTechnologyToWorkConnection = {
  readonly __typename?: 'TechnologyToWorkConnection';
  /** Edges for the TechnologyToWorkConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLTechnologyToWorkConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLWork>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLTechnologyToWorkConnectionEdge = {
  readonly __typename?: 'TechnologyToWorkConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLWork>;
};

/** Arguments for filtering the TechnologyToWorkConnection connection */
export type GQLTechnologyToWorkConnectionWhereArgs = {
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type GQLTermNode = {
  /** The number of objects connected to the object */
  readonly count: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int'];
  /** The description of the object */
  readonly description: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<GQLTermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<GQLTermNodeToEnqueuedStylesheetConnection>;
  /** The unique resource identifier path */
  readonly id: Scalars['ID'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The link to the term */
  readonly link: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  readonly name: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  readonly slug: Maybe<Scalars['String']>;
  /** The name of the taxonomy that the object is associated with */
  readonly taxonomyName: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  readonly termGroupId: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  readonly termTaxonomyId: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type GQLTermNodeEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type GQLTermNodeEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export enum GQLTermNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the TermNode type and the EnqueuedScript type */
export type GQLTermNodeToEnqueuedScriptConnection = {
  readonly __typename?: 'TermNodeToEnqueuedScriptConnection';
  /** Edges for the TermNodeToEnqueuedScriptConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLTermNodeToEnqueuedScriptConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLEnqueuedScript>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLTermNodeToEnqueuedScriptConnectionEdge = {
  readonly __typename?: 'TermNodeToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLEnqueuedScript>;
};

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export type GQLTermNodeToEnqueuedStylesheetConnection = {
  readonly __typename?: 'TermNodeToEnqueuedStylesheetConnection';
  /** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLTermNodeToEnqueuedStylesheetConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLEnqueuedStylesheet>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLTermNodeToEnqueuedStylesheetConnectionEdge = {
  readonly __typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLEnqueuedStylesheet>;
};

/** Options for ordering the connection by */
export enum GQLTermObjectsConnectionOrderbyEnum {
  /** Order the connection by item count. */
  Count = 'COUNT',
  /** Order the connection by description. */
  Description = 'DESCRIPTION',
  /** Order the connection by name. */
  Name = 'NAME',
  /** Order the connection by slug. */
  Slug = 'SLUG',
  /** Order the connection by term group. */
  TermGroup = 'TERM_GROUP',
  /** Order the connection by term id. */
  TermId = 'TERM_ID',
  /** Order the connection by term order. */
  TermOrder = 'TERM_ORDER'
}

/** A theme object */
export type GQLTheme = GQLNode & {
  readonly __typename?: 'Theme';
  /** Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ). */
  readonly author: Maybe<Scalars['String']>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
  readonly authorUri: Maybe<Scalars['String']>;
  /** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
  readonly description: Maybe<Scalars['String']>;
  /** The globally unique identifier of the theme object. */
  readonly id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
  readonly name: Maybe<Scalars['String']>;
  /** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot(). */
  readonly screenshot: Maybe<Scalars['String']>;
  /** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet(). */
  readonly slug: Maybe<Scalars['String']>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ). */
  readonly themeUri: Maybe<Scalars['String']>;
  /** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
  readonly version: Maybe<Scalars['String']>;
};

/** Any node that has a URI */
export type GQLUniformResourceIdentifiable = {
  /** The unique resource identifier path */
  readonly id: Scalars['ID'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
};

/** Input for the UpdateCategory mutation */
export type GQLUpdateCategoryInput = {
  /** The slug that the category will be an alias of */
  readonly aliasOf: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The description of the category object */
  readonly description: InputMaybe<Scalars['String']>;
  /** The ID of the category object to update */
  readonly id: Scalars['ID'];
  /** The name of the category object to mutate */
  readonly name: InputMaybe<Scalars['String']>;
  /** The ID of the category that should be set as the parent */
  readonly parentId: InputMaybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: InputMaybe<Scalars['String']>;
};

/** The payload for the UpdateCategory mutation */
export type GQLUpdateCategoryPayload = {
  readonly __typename?: 'UpdateCategoryPayload';
  /** The created category */
  readonly category: Maybe<GQLCategory>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Input for the updateComment mutation */
export type GQLUpdateCommentInput = {
  /** The approval status of the comment. */
  readonly approved: InputMaybe<Scalars['String']>;
  /** The name of the comment's author. */
  readonly author: InputMaybe<Scalars['String']>;
  /** The email of the comment's author. */
  readonly authorEmail: InputMaybe<Scalars['String']>;
  /** The url of the comment's author. */
  readonly authorUrl: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The ID of the post object the comment belongs to. */
  readonly commentOn: InputMaybe<Scalars['Int']>;
  /** Content of the comment. */
  readonly content: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: InputMaybe<Scalars['String']>;
  /** The ID of the comment being updated. */
  readonly id: Scalars['ID'];
  /** Parent comment of current comment. */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Type of comment. */
  readonly type: InputMaybe<Scalars['String']>;
};

/** The payload for the updateComment mutation */
export type GQLUpdateCommentPayload = {
  readonly __typename?: 'UpdateCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The comment that was created */
  readonly comment: Maybe<GQLComment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  readonly success: Maybe<Scalars['Boolean']>;
};

/** Input for the updateMediaItem mutation */
export type GQLUpdateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  readonly altText: InputMaybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  readonly authorId: InputMaybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  readonly caption: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The comment status for the mediaItem */
  readonly commentStatus: InputMaybe<Scalars['String']>;
  /** The date of the mediaItem */
  readonly date: InputMaybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  readonly dateGmt: InputMaybe<Scalars['String']>;
  /** Description of the mediaItem */
  readonly description: InputMaybe<Scalars['String']>;
  /** The file name of the mediaItem */
  readonly filePath: InputMaybe<Scalars['String']>;
  /** The file type of the mediaItem */
  readonly fileType: InputMaybe<GQLMimeTypeEnum>;
  /** The ID of the mediaItem object */
  readonly id: Scalars['ID'];
  /** The WordPress post ID or the graphQL postId of the parent object */
  readonly parentId: InputMaybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  readonly pingStatus: InputMaybe<Scalars['String']>;
  /** The slug of the mediaItem */
  readonly slug: InputMaybe<Scalars['String']>;
  /** The status of the mediaItem */
  readonly status: InputMaybe<GQLMediaItemStatusEnum>;
  /** The title of the mediaItem */
  readonly title: InputMaybe<Scalars['String']>;
};

/** The payload for the updateMediaItem mutation */
export type GQLUpdateMediaItemPayload = {
  readonly __typename?: 'UpdateMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The MediaItem object mutation type. */
  readonly mediaItem: Maybe<GQLMediaItem>;
};

/** Input for the updatePage mutation */
export type GQLUpdatePageInput = {
  /** The userId to assign as the author of the object */
  readonly authorId: InputMaybe<Scalars['ID']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The comment status for the object */
  readonly commentStatus: InputMaybe<Scalars['String']>;
  /** The content of the object */
  readonly content: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: InputMaybe<Scalars['String']>;
  /** The ID of the page object */
  readonly id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: InputMaybe<Scalars['Int']>;
  /** The ID of the parent object */
  readonly parentId: InputMaybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  readonly password: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  readonly slug: InputMaybe<Scalars['String']>;
  /** The status of the object */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** The title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** The payload for the updatePage mutation */
export type GQLUpdatePagePayload = {
  readonly __typename?: 'UpdatePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  readonly page: Maybe<GQLPage>;
};

/** Input for the UpdatePostFormat mutation */
export type GQLUpdatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  readonly aliasOf: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The description of the post_format object */
  readonly description: InputMaybe<Scalars['String']>;
  /** The ID of the postFormat object to update */
  readonly id: Scalars['ID'];
  /** The name of the post_format object to mutate */
  readonly name: InputMaybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: InputMaybe<Scalars['String']>;
};

/** The payload for the UpdatePostFormat mutation */
export type GQLUpdatePostFormatPayload = {
  readonly __typename?: 'UpdatePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The created post_format */
  readonly postFormat: Maybe<GQLPostFormat>;
};

/** Input for the updatePost mutation */
export type GQLUpdatePostInput = {
  /** The userId to assign as the author of the object */
  readonly authorId: InputMaybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  readonly categories: InputMaybe<GQLPostCategoriesInput>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The comment status for the object */
  readonly commentStatus: InputMaybe<Scalars['String']>;
  /** The content of the object */
  readonly content: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: InputMaybe<Scalars['String']>;
  /** The excerpt of the object */
  readonly excerpt: InputMaybe<Scalars['String']>;
  /** The ID of the post object */
  readonly id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  readonly password: InputMaybe<Scalars['String']>;
  /** The ping status for the object */
  readonly pingStatus: InputMaybe<Scalars['String']>;
  /** URLs that have been pinged. */
  readonly pinged: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Set connections between the post and postFormats */
  readonly postFormats: InputMaybe<GQLPostPostFormatsInput>;
  /** The slug of the object */
  readonly slug: InputMaybe<Scalars['String']>;
  /** The status of the object */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Set connections between the post and tags */
  readonly tags: InputMaybe<GQLPostTagsInput>;
  /** The title of the object */
  readonly title: InputMaybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  readonly toPing: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** The payload for the updatePost mutation */
export type GQLUpdatePostPayload = {
  readonly __typename?: 'UpdatePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  readonly post: Maybe<GQLPost>;
};

/** Input for the updateProject mutation */
export type GQLUpdateProjectInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The content of the object */
  readonly content: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: InputMaybe<Scalars['String']>;
  /** The ID of the Project object */
  readonly id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  readonly password: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  readonly slug: InputMaybe<Scalars['String']>;
  /** The status of the object */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Set connections between the Project and Technologies */
  readonly technologies: InputMaybe<GQLProjectTechnologiesInput>;
  /** The title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** The payload for the updateProject mutation */
export type GQLUpdateProjectPayload = {
  readonly __typename?: 'UpdateProjectPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  readonly project: Maybe<GQLProject>;
};

/** Input for the updateSettings mutation */
export type GQLUpdateSettingsInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** Allow people to submit comments on new posts. */
  readonly discussionSettingsDefaultCommentStatus: InputMaybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  readonly discussionSettingsDefaultPingStatus: InputMaybe<Scalars['String']>;
  /** A date format for all date strings. */
  readonly generalSettingsDateFormat: InputMaybe<Scalars['String']>;
  /** Site tagline. */
  readonly generalSettingsDescription: InputMaybe<Scalars['String']>;
  /** This address is used for admin purposes, like new user notification. */
  readonly generalSettingsEmail: InputMaybe<Scalars['String']>;
  /** WordPress locale code. */
  readonly generalSettingsLanguage: InputMaybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  readonly generalSettingsStartOfWeek: InputMaybe<Scalars['Int']>;
  /** A time format for all time strings. */
  readonly generalSettingsTimeFormat: InputMaybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  readonly generalSettingsTimezone: InputMaybe<Scalars['String']>;
  /** Site title. */
  readonly generalSettingsTitle: InputMaybe<Scalars['String']>;
  /** Site URL. */
  readonly generalSettingsUrl: InputMaybe<Scalars['String']>;
  /** Blog pages show at most. */
  readonly readingSettingsPostsPerPage: InputMaybe<Scalars['Int']>;
  /** Default post category. */
  readonly writingSettingsDefaultCategory: InputMaybe<Scalars['Int']>;
  /** Default post format. */
  readonly writingSettingsDefaultPostFormat: InputMaybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  readonly writingSettingsUseSmilies: InputMaybe<Scalars['Boolean']>;
};

/** The payload for the updateSettings mutation */
export type GQLUpdateSettingsPayload = {
  readonly __typename?: 'UpdateSettingsPayload';
  /** Update all settings. */
  readonly allSettings: Maybe<GQLSettings>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** Update the DiscussionSettings setting. */
  readonly discussionSettings: Maybe<GQLDiscussionSettings>;
  /** Update the GeneralSettings setting. */
  readonly generalSettings: Maybe<GQLGeneralSettings>;
  /** Update the ReadingSettings setting. */
  readonly readingSettings: Maybe<GQLReadingSettings>;
  /** Update the WritingSettings setting. */
  readonly writingSettings: Maybe<GQLWritingSettings>;
};

/** Input for the UpdateTag mutation */
export type GQLUpdateTagInput = {
  /** The slug that the post_tag will be an alias of */
  readonly aliasOf: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The description of the post_tag object */
  readonly description: InputMaybe<Scalars['String']>;
  /** The ID of the tag object to update */
  readonly id: Scalars['ID'];
  /** The name of the post_tag object to mutate */
  readonly name: InputMaybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: InputMaybe<Scalars['String']>;
};

/** The payload for the UpdateTag mutation */
export type GQLUpdateTagPayload = {
  readonly __typename?: 'UpdateTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The created post_tag */
  readonly tag: Maybe<GQLTag>;
};

/** Input for the UpdateTechnology mutation */
export type GQLUpdateTechnologyInput = {
  /** The slug that the technology will be an alias of */
  readonly aliasOf: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The description of the technology object */
  readonly description: InputMaybe<Scalars['String']>;
  /** The ID of the Technology object to update */
  readonly id: Scalars['ID'];
  /** The name of the technology object to mutate */
  readonly name: InputMaybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  readonly slug: InputMaybe<Scalars['String']>;
};

/** The payload for the UpdateTechnology mutation */
export type GQLUpdateTechnologyPayload = {
  readonly __typename?: 'UpdateTechnologyPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The created technology */
  readonly technology: Maybe<GQLTechnology>;
};

/** Input for the updateUser mutation */
export type GQLUpdateUserInput = {
  /** User's AOL IM account. */
  readonly aim: InputMaybe<Scalars['String']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** A string containing content about the user. */
  readonly description: InputMaybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  readonly displayName: InputMaybe<Scalars['String']>;
  /** A string containing the user's email address. */
  readonly email: InputMaybe<Scalars['String']>;
  /** 	The user's first name. */
  readonly firstName: InputMaybe<Scalars['String']>;
  /** The ID of the user */
  readonly id: Scalars['ID'];
  /** User's Jabber account. */
  readonly jabber: InputMaybe<Scalars['String']>;
  /** The user's last name. */
  readonly lastName: InputMaybe<Scalars['String']>;
  /** User's locale. */
  readonly locale: InputMaybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  readonly nicename: InputMaybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  readonly nickname: InputMaybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  readonly password: InputMaybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  readonly registered: InputMaybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  readonly richEditing: InputMaybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  readonly roles: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** A string containing the user's URL for the user's web site. */
  readonly websiteUrl: InputMaybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  readonly yim: InputMaybe<Scalars['String']>;
};

/** The payload for the updateUser mutation */
export type GQLUpdateUserPayload = {
  readonly __typename?: 'UpdateUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  readonly user: Maybe<GQLUser>;
};

/** Input for the updateWork mutation */
export type GQLUpdateWorkInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: InputMaybe<Scalars['String']>;
  /** The content of the object */
  readonly content: InputMaybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  readonly date: InputMaybe<Scalars['String']>;
  /** The ID of the Work object */
  readonly id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  readonly menuOrder: InputMaybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  readonly password: InputMaybe<Scalars['String']>;
  /** The slug of the object */
  readonly slug: InputMaybe<Scalars['String']>;
  /** The status of the object */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Set connections between the Work and Technologies */
  readonly technologies: InputMaybe<GQLWorkTechnologiesInput>;
  /** The title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** The payload for the updateWork mutation */
export type GQLUpdateWorkPayload = {
  readonly __typename?: 'UpdateWorkPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  readonly work: Maybe<GQLWork>;
};

/** A User object */
export type GQLUser = GQLCommenter & GQLDatabaseIdentifier & GQLNode & GQLUniformResourceIdentifiable & {
  readonly __typename?: 'User';
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  readonly avatar: Maybe<GQLAvatar>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  readonly capKey: Maybe<Scalars['String']>;
  /** A list of capabilities (permissions) granted to the user */
  readonly capabilities: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Connection between the User type and the Comment type */
  readonly comments: Maybe<GQLUserToCommentConnection>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Scalars['Int'];
  /** Description of the user. */
  readonly description: Maybe<Scalars['String']>;
  /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
  readonly email: Maybe<Scalars['String']>;
  /** Connection between the User type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<GQLUserToEnqueuedScriptConnection>;
  /** Connection between the User type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<GQLUserToEnqueuedStylesheetConnection>;
  /** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
  readonly extraCapabilities: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
  readonly firstName: Maybe<Scalars['String']>;
  /** The globally unique identifier for the user object. */
  readonly id: Scalars['ID'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
  readonly lastName: Maybe<Scalars['String']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  readonly locale: Maybe<Scalars['String']>;
  /** Connection between the User type and the mediaItem type */
  readonly mediaItems: Maybe<GQLUserToMediaItemConnection>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
  readonly name: Maybe<Scalars['String']>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  readonly nicename: Maybe<Scalars['String']>;
  /** Nickname of the user. */
  readonly nickname: Maybe<Scalars['String']>;
  /** Connection between the User type and the page type */
  readonly pages: Maybe<GQLUserToPageConnection>;
  /** Connection between the User type and the post type */
  readonly posts: Maybe<GQLUserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  readonly registeredDate: Maybe<Scalars['String']>;
  /** Connection between the User and Revisions authored by the user */
  readonly revisions: Maybe<GQLUserToContentRevisionUnionConnection>;
  /** Connection between the User type and the UserRole type */
  readonly roles: Maybe<GQLUserToUserRoleConnection>;
  /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
  readonly slug: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
  /** A website url that is associated with the user. */
  readonly url: Maybe<Scalars['String']>;
  /**
   * The Id of the user. Equivalent to WP_User-&gt;ID
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly userId: Maybe<Scalars['Int']>;
  /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
  readonly username: Maybe<Scalars['String']>;
};


/** A User object */
export type GQLUserAvatarArgs = {
  forceDefault: InputMaybe<Scalars['Boolean']>;
  rating: InputMaybe<GQLAvatarRatingEnum>;
  size?: InputMaybe<Scalars['Int']>;
};


/** A User object */
export type GQLUserCommentsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLUserToCommentConnectionWhereArgs>;
};


/** A User object */
export type GQLUserEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** A User object */
export type GQLUserEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** A User object */
export type GQLUserMediaItemsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLUserToMediaItemConnectionWhereArgs>;
};


/** A User object */
export type GQLUserPagesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLUserToPageConnectionWhereArgs>;
};


/** A User object */
export type GQLUserPostsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLUserToPostConnectionWhereArgs>;
};


/** A User object */
export type GQLUserRevisionsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLUserToContentRevisionUnionConnectionWhereArgs>;
};


/** A User object */
export type GQLUserRolesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export enum GQLUserNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The Email of the User */
  Email = 'EMAIL',
  /** The hashed Global ID */
  Id = 'ID',
  /** The slug of the User */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
  /** The username the User uses to login with */
  Username = 'USERNAME'
}

/** A user role object */
export type GQLUserRole = GQLNode & {
  readonly __typename?: 'UserRole';
  /** The capabilities that belong to this role */
  readonly capabilities: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The display name of the role */
  readonly displayName: Maybe<Scalars['String']>;
  /** The globally unique identifier for the user role object. */
  readonly id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** The registered name of the role */
  readonly name: Maybe<Scalars['String']>;
};

/** Names of available user roles */
export enum GQLUserRoleEnum {
  /** User role with specific capabilities */
  Administrator = 'ADMINISTRATOR',
  /** User role with specific capabilities */
  Author = 'AUTHOR',
  /** User role with specific capabilities */
  Contributor = 'CONTRIBUTOR',
  /** User role with specific capabilities */
  Editor = 'EDITOR',
  /** User role with specific capabilities */
  Subscriber = 'SUBSCRIBER'
}

/** Connection between the User type and the Comment type */
export type GQLUserToCommentConnection = {
  readonly __typename?: 'UserToCommentConnection';
  /** Edges for the UserToCommentConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLUserToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLComment>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLUserToCommentConnectionEdge = {
  readonly __typename?: 'UserToCommentConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLComment>;
};

/** Arguments for filtering the UserToCommentConnection connection */
export type GQLUserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  readonly authorEmail: InputMaybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Comment author URL. */
  readonly authorUrl: InputMaybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  readonly commentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  readonly commentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  readonly commentType: InputMaybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  readonly commentTypeIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  readonly commentTypeNotIn: InputMaybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  readonly contentAuthor: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  readonly contentAuthorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  readonly contentAuthorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  readonly contentId: InputMaybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  readonly contentIdIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  readonly contentIdNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  readonly contentName: InputMaybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  readonly contentParent: InputMaybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentStatus: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  readonly contentType: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  readonly includeUnapproved: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  readonly karma: InputMaybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field to order the comments by. */
  readonly orderby: InputMaybe<GQLCommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Comment status to limit results by. */
  readonly status: InputMaybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  readonly userId: InputMaybe<Scalars['ID']>;
};

/** Connection between the User type and the ContentRevisionUnion type */
export type GQLUserToContentRevisionUnionConnection = {
  readonly __typename?: 'UserToContentRevisionUnionConnection';
  /** Edges for the UserToContentRevisionUnionConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLUserToContentRevisionUnionConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLContentRevisionUnion>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLUserToContentRevisionUnionConnectionEdge = {
  readonly __typename?: 'UserToContentRevisionUnionConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLContentRevisionUnion>;
};

/** Arguments for filtering the UserToContentRevisionUnionConnection connection */
export type GQLUserToContentRevisionUnionConnectionWhereArgs = {
  /** The Types of content to filter */
  readonly contentTypes: InputMaybe<ReadonlyArray<InputMaybe<GQLContentTypeEnum>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the EnqueuedScript type */
export type GQLUserToEnqueuedScriptConnection = {
  readonly __typename?: 'UserToEnqueuedScriptConnection';
  /** Edges for the UserToEnqueuedScriptConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLUserToEnqueuedScriptConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLEnqueuedScript>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLUserToEnqueuedScriptConnectionEdge = {
  readonly __typename?: 'UserToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLEnqueuedScript>;
};

/** Connection between the User type and the EnqueuedStylesheet type */
export type GQLUserToEnqueuedStylesheetConnection = {
  readonly __typename?: 'UserToEnqueuedStylesheetConnection';
  /** Edges for the UserToEnqueuedStylesheetConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLUserToEnqueuedStylesheetConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLEnqueuedStylesheet>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLUserToEnqueuedStylesheetConnectionEdge = {
  readonly __typename?: 'UserToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLEnqueuedStylesheet>;
};

/** Connection between the User type and the mediaItem type */
export type GQLUserToMediaItemConnection = {
  readonly __typename?: 'UserToMediaItemConnection';
  /** Edges for the UserToMediaItemConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLUserToMediaItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLMediaItem>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLUserToMediaItemConnectionEdge = {
  readonly __typename?: 'UserToMediaItemConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLMediaItem>;
};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type GQLUserToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the page type */
export type GQLUserToPageConnection = {
  readonly __typename?: 'UserToPageConnection';
  /** Edges for the UserToPageConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLUserToPageConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLPage>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLUserToPageConnectionEdge = {
  readonly __typename?: 'UserToPageConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLPage>;
};

/** Arguments for filtering the UserToPageConnection connection */
export type GQLUserToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the post type */
export type GQLUserToPostConnection = {
  readonly __typename?: 'UserToPostConnection';
  /** Edges for the UserToPostConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLUserToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLPost>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLUserToPostConnectionEdge = {
  readonly __typename?: 'UserToPostConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLPost>;
};

/** Arguments for filtering the UserToPostConnection connection */
export type GQLUserToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  readonly author: InputMaybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  readonly authorIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  readonly authorName: InputMaybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  readonly authorNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Category ID */
  readonly categoryId: InputMaybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Use Category Slug */
  readonly categoryName: InputMaybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  readonly categoryNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  readonly dateQuery: InputMaybe<GQLDateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  readonly hasPassword: InputMaybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  readonly id: InputMaybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  readonly mimeType: InputMaybe<GQLMimeTypeEnum>;
  /** Slug / post_name of the object */
  readonly name: InputMaybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  readonly nameIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  readonly orderby: InputMaybe<ReadonlyArray<InputMaybe<GQLPostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  readonly parent: InputMaybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  readonly parentIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  readonly parentNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  readonly password: InputMaybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  readonly search: InputMaybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  readonly stati: InputMaybe<ReadonlyArray<InputMaybe<GQLPostStatusEnum>>>;
  /** Show posts with a specific status. */
  readonly status: InputMaybe<GQLPostStatusEnum>;
  /** Tag Slug */
  readonly tag: InputMaybe<Scalars['String']>;
  /** Use Tag ID */
  readonly tagId: InputMaybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  readonly tagNotIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  readonly tagSlugAnd: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  readonly tagSlugIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Title of the object */
  readonly title: InputMaybe<Scalars['String']>;
};

/** Connection between the User type and the UserRole type */
export type GQLUserToUserRoleConnection = {
  readonly __typename?: 'UserToUserRoleConnection';
  /** Edges for the UserToUserRoleConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLUserToUserRoleConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLUserRole>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLUserToUserRoleConnectionEdge = {
  readonly __typename?: 'UserToUserRoleConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLUserRole>;
};

/** Field to order the connection by */
export enum GQLUsersConnectionOrderbyEnum {
  /** Order by display name */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email address */
  Email = 'EMAIL',
  /** Order by login */
  Login = 'LOGIN',
  /** Preserve the login order given in the LOGIN_IN array */
  LoginIn = 'LOGIN_IN',
  /** Order by nice name */
  NiceName = 'NICE_NAME',
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  NiceNameIn = 'NICE_NAME_IN',
  /** Order by registration date */
  Registered = 'REGISTERED',
  /** Order by URL */
  Url = 'URL'
}

/** Options for ordering the connection */
export type GQLUsersConnectionOrderbyInput = {
  /** The field name used to sort the results. */
  readonly field: GQLUsersConnectionOrderbyEnum;
  /** The cardinality of the order of the connection */
  readonly order: InputMaybe<GQLOrderEnum>;
};

/** Column used for searching for users. */
export enum GQLUsersConnectionSearchColumnEnum {
  /** The user's email address. */
  Email = 'EMAIL',
  /** The globally unique ID. */
  Id = 'ID',
  /** The username the User uses to login with. */
  Login = 'LOGIN',
  /** A URL-friendly name for the user. The default is the user's username. */
  Nicename = 'NICENAME',
  /** The URL of the user\s website. */
  Url = 'URL'
}

/** Information about pagination in a connection. */
export type GQLWpPageInfo = {
  readonly __typename?: 'WPPageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

/** The Work type */
export type GQLWork = GQLContentNode & GQLDatabaseIdentifier & GQLMenuItemLinkable & GQLNode & GQLNodeWithContentEditor & GQLNodeWithFeaturedImage & GQLNodeWithTemplate & GQLNodeWithTitle & GQLUniformResourceIdentifiable & {
  readonly __typename?: 'Work';
  /** The content of the post. */
  readonly content: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  readonly contentType: Maybe<GQLContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  readonly contentTypeName: Scalars['String'];
  /** The unique resource identifier path */
  readonly databaseId: Scalars['Int'];
  /** Post publishing date. */
  readonly date: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  readonly dateGmt: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  readonly desiredSlug: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  readonly editingLockedBy: Maybe<GQLContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  readonly enclosure: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  readonly enqueuedScripts: Maybe<GQLContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  readonly enqueuedStylesheets: Maybe<GQLContentNodeToEnqueuedStylesheetConnection>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  readonly featuredImage: Maybe<GQLNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  readonly featuredImageDatabaseId: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  readonly featuredImageId: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  readonly guid: Maybe<Scalars['String']>;
  /** The globally unique identifier of the works object. */
  readonly id: Scalars['ID'];
  /** Whether the node is a Content Node */
  readonly isContentNode: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  readonly isPreview: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  readonly isRestricted: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  readonly isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  readonly lastEditedBy: Maybe<GQLContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  readonly link: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  readonly modified: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  readonly modifiedGmt: Maybe<Scalars['String']>;
  /** Connection between the Work type and the Work type */
  readonly preview: Maybe<GQLWorkToPreviewConnectionEdge>;
  /** The database id of the preview node */
  readonly previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  readonly previewRevisionId: Maybe<Scalars['ID']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  readonly slug: Maybe<Scalars['String']>;
  /** The current status of the object */
  readonly status: Maybe<Scalars['String']>;
  /** Connection between the Work type and the Technology type */
  readonly technologies: Maybe<GQLWorkToTechnologyConnection>;
  /** The template assigned to a node of content */
  readonly template: Maybe<GQLContentTemplate>;
  /** Connection between the Work type and the TermNode type */
  readonly terms: Maybe<GQLWorkToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  readonly title: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  readonly uri: Maybe<Scalars['String']>;
  /** Added to the GraphQL Schema because the ACF Field Group &quot;Works&quot; was set to Show in GraphQL. */
  readonly work: Maybe<GQLWork_Work>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  readonly workId: Scalars['Int'];
};


/** The Work type */
export type GQLWorkContentArgs = {
  format: InputMaybe<GQLPostObjectFieldFormatEnum>;
};


/** The Work type */
export type GQLWorkEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The Work type */
export type GQLWorkEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** The Work type */
export type GQLWorkTechnologiesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLWorkToTechnologyConnectionWhereArgs>;
};


/** The Work type */
export type GQLWorkTermsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  where: InputMaybe<GQLWorkToTermNodeConnectionWhereArgs>;
};


/** The Work type */
export type GQLWorkTitleArgs = {
  format: InputMaybe<GQLPostObjectFieldFormatEnum>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum GQLWorkIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Set relationships between the Work to Technologies */
export type GQLWorkTechnologiesInput = {
  /** If true, this will append the Technology to existing related Technologies. If false, this will replace existing relationships. Default true. */
  readonly append: InputMaybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  readonly nodes: InputMaybe<ReadonlyArray<InputMaybe<GQLWorkTechnologiesNodeInput>>>;
};

/** List of Technologies to connect the Work to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type GQLWorkTechnologiesNodeInput = {
  /** The description of the Technology. This field is used to set a description of the Technology if a new one is created during the mutation. */
  readonly description: InputMaybe<Scalars['String']>;
  /** The ID of the Technology. If present, this will be used to connect to the Work. If no existing Technology exists with this ID, no connection will be made. */
  readonly id: InputMaybe<Scalars['ID']>;
  /** The name of the Technology. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  readonly name: InputMaybe<Scalars['String']>;
  /** The slug of the Technology. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  readonly slug: InputMaybe<Scalars['String']>;
};

/** Connection between the Work type and the Work type */
export type GQLWorkToPreviewConnectionEdge = {
  readonly __typename?: 'WorkToPreviewConnectionEdge';
  /** The node of the connection, without the edges */
  readonly node: Maybe<GQLWork>;
};

/** Connection between the Work type and the Technology type */
export type GQLWorkToTechnologyConnection = {
  readonly __typename?: 'WorkToTechnologyConnection';
  /** Edges for the WorkToTechnologyConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLWorkToTechnologyConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLTechnology>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLWorkToTechnologyConnectionEdge = {
  readonly __typename?: 'WorkToTechnologyConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLTechnology>;
};

/** Arguments for filtering the WorkToTechnologyConnection connection */
export type GQLWorkToTechnologyConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<GQLTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']>;
};

/** Connection between the Work type and the TermNode type */
export type GQLWorkToTermNodeConnection = {
  readonly __typename?: 'WorkToTermNodeConnection';
  /** Edges for the WorkToTermNodeConnection connection */
  readonly edges: Maybe<ReadonlyArray<Maybe<GQLWorkToTermNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  readonly nodes: Maybe<ReadonlyArray<Maybe<GQLTermNode>>>;
  /** Information about pagination in a connection. */
  readonly pageInfo: Maybe<GQLWpPageInfo>;
};

/** An edge in a connection */
export type GQLWorkToTermNodeConnectionEdge = {
  readonly __typename?: 'WorkToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  readonly cursor: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  readonly node: Maybe<GQLTermNode>;
};

/** Arguments for filtering the WorkToTermNodeConnection connection */
export type GQLWorkToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  readonly cacheDomain: InputMaybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  readonly childOf: InputMaybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  readonly childless: InputMaybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  readonly descriptionLike: InputMaybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  readonly exclude: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  readonly excludeTree: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  readonly hideEmpty: InputMaybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  readonly hierarchical: InputMaybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  readonly include: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  readonly name: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  readonly nameLike: InputMaybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  readonly objectIds: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  readonly order: InputMaybe<GQLOrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  readonly orderby: InputMaybe<GQLTermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  readonly padCounts: InputMaybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  readonly parent: InputMaybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  readonly search: InputMaybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  readonly slug: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  readonly taxonomies: InputMaybe<ReadonlyArray<InputMaybe<GQLTaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  readonly termTaxonomId: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  readonly updateTermMetaCache: InputMaybe<Scalars['Boolean']>;
};

/** Field Group */
export type GQLWork_Work = GQLAcfFieldGroup & {
  readonly __typename?: 'Work_Work';
  readonly date: Maybe<Scalars['String']>;
  /** The name of the ACF Field Group */
  readonly fieldGroupName: Maybe<Scalars['String']>;
  readonly image: Maybe<GQLMediaItem>;
  readonly link: Maybe<Scalars['String']>;
  readonly role: Maybe<Scalars['String']>;
};

/** The writing setting type */
export type GQLWritingSettings = {
  readonly __typename?: 'WritingSettings';
  /** Default post category. */
  readonly defaultCategory: Maybe<Scalars['Int']>;
  /** Default post format. */
  readonly defaultPostFormat: Maybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  readonly useSmilies: Maybe<Scalars['Boolean']>;
};

export type GQLBaseMediaItemFragment = { readonly __typename?: 'MediaItem', readonly srcSet: string, readonly altText: string, readonly sourceUrl: string };

export type GQLMediaItemsManyQueryVariables = Exact<{ [key: string]: never; }>;


export type GQLMediaItemsManyQuery = { readonly __typename?: 'RootQuery', readonly mediaItems: { readonly __typename?: 'RootQueryToMediaItemConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'MediaItem', readonly srcSet: string, readonly altText: string, readonly sourceUrl: string }> } };

export type GQLMediaItemsOneQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;


export type GQLMediaItemsOneQuery = { readonly __typename?: 'RootQuery', readonly mediaItem: { readonly __typename?: 'MediaItem', readonly srcSet: string, readonly altText: string, readonly sourceUrl: string } };

export type GQLBasePageFragment = { readonly __typename?: 'Page', readonly id: string, readonly slug: string, readonly title: string, readonly content: string, readonly status: string };

export type GQLPagesManyQueryVariables = Exact<{ [key: string]: never; }>;


export type GQLPagesManyQuery = { readonly __typename?: 'RootQuery', readonly pages: { readonly __typename?: 'RootQueryToPageConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Page', readonly id: string, readonly slug: string, readonly title: string, readonly content: string, readonly status: string }> } };

export type GQLPagesOneQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;


export type GQLPagesOneQuery = { readonly __typename?: 'RootQuery', readonly page: { readonly __typename?: 'Page', readonly id: string, readonly slug: string, readonly title: string, readonly content: string, readonly status: string } };

export type GQLBaseWorkFragment = { readonly __typename?: 'Work', readonly id: string, readonly slug: string, readonly title: string, readonly content: string, readonly status: string, readonly work: { readonly __typename?: 'Work_Work', readonly date: string, readonly link: string, readonly role: string, readonly image: { readonly __typename?: 'MediaItem', readonly srcSet: string, readonly altText: string, readonly sourceUrl: string } } };

export type GQLWorksManyQueryVariables = Exact<{ [key: string]: never; }>;


export type GQLWorksManyQuery = { readonly __typename?: 'RootQuery', readonly works: { readonly __typename?: 'RootQueryToWorkConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Work', readonly id: string, readonly slug: string, readonly title: string, readonly content: string, readonly status: string, readonly work: { readonly __typename?: 'Work_Work', readonly date: string, readonly link: string, readonly role: string, readonly image: { readonly __typename?: 'MediaItem', readonly srcSet: string, readonly altText: string, readonly sourceUrl: string } } }> } };

export type GQLWorksOneQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;


export type GQLWorksOneQuery = { readonly __typename?: 'RootQuery', readonly work: { readonly __typename?: 'Work', readonly id: string, readonly slug: string, readonly title: string, readonly content: string, readonly status: string, readonly work: { readonly __typename?: 'Work_Work', readonly date: string, readonly link: string, readonly role: string, readonly image: { readonly __typename?: 'MediaItem', readonly srcSet: string, readonly altText: string, readonly sourceUrl: string } } } };

export type GQLBaseProjectFragment = { readonly __typename?: 'Project', readonly id: string, readonly slug: string, readonly title: string, readonly content: string, readonly status: string, readonly project: { readonly __typename?: 'Project_Project', readonly date: string, readonly link: string, readonly description: string } };

export type GQLProjectsManyQueryVariables = Exact<{ [key: string]: never; }>;


export type GQLProjectsManyQuery = { readonly __typename?: 'RootQuery', readonly projects: { readonly __typename?: 'RootQueryToProjectConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Project', readonly id: string, readonly slug: string, readonly title: string, readonly content: string, readonly status: string, readonly project: { readonly __typename?: 'Project_Project', readonly date: string, readonly link: string, readonly description: string } }> } };

export type GQLProjectsOneQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;


export type GQLProjectsOneQuery = { readonly __typename?: 'RootQuery', readonly project: { readonly __typename?: 'Project', readonly id: string, readonly slug: string, readonly title: string, readonly content: string, readonly status: string, readonly project: { readonly __typename?: 'Project_Project', readonly date: string, readonly link: string, readonly description: string } } };

export type GQLBasePostFragment = { readonly __typename?: 'Post', readonly id: string, readonly slug: string, readonly title: string, readonly content: string, readonly status: string, readonly date: string, readonly modified: string, readonly tags: { readonly __typename?: 'PostToTagConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Tag', readonly id: string, readonly slug: string, readonly name: string, readonly count: number }> }, readonly post: { readonly __typename?: 'Post_Post', readonly featured: { readonly __typename?: 'MediaItem', readonly srcSet: string, readonly altText: string, readonly sourceUrl: string } } };

export type GQLPostsManyQueryVariables = Exact<{ [key: string]: never; }>;


export type GQLPostsManyQuery = { readonly __typename?: 'RootQuery', readonly posts: { readonly __typename?: 'RootQueryToPostConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Post', readonly id: string, readonly slug: string, readonly title: string, readonly content: string, readonly status: string, readonly date: string, readonly modified: string, readonly tags: { readonly __typename?: 'PostToTagConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Tag', readonly id: string, readonly slug: string, readonly name: string, readonly count: number }> }, readonly post: { readonly __typename?: 'Post_Post', readonly featured: { readonly __typename?: 'MediaItem', readonly srcSet: string, readonly altText: string, readonly sourceUrl: string } } }> } };

export type GQLPostsOneQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;


export type GQLPostsOneQuery = { readonly __typename?: 'RootQuery', readonly post: { readonly __typename?: 'Post', readonly id: string, readonly slug: string, readonly title: string, readonly content: string, readonly status: string, readonly date: string, readonly modified: string, readonly tags: { readonly __typename?: 'PostToTagConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Tag', readonly id: string, readonly slug: string, readonly name: string, readonly count: number }> }, readonly post: { readonly __typename?: 'Post_Post', readonly featured: { readonly __typename?: 'MediaItem', readonly srcSet: string, readonly altText: string, readonly sourceUrl: string } } } };

export type GQLPostsManyByTagQueryVariables = Exact<{
  tag: Scalars['String'];
}>;


export type GQLPostsManyByTagQuery = { readonly __typename?: 'RootQuery', readonly posts: { readonly __typename?: 'RootQueryToPostConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Post', readonly id: string, readonly slug: string, readonly title: string, readonly content: string, readonly status: string, readonly date: string, readonly modified: string, readonly tags: { readonly __typename?: 'PostToTagConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Tag', readonly id: string, readonly slug: string, readonly name: string, readonly count: number }> }, readonly post: { readonly __typename?: 'Post_Post', readonly featured: { readonly __typename?: 'MediaItem', readonly srcSet: string, readonly altText: string, readonly sourceUrl: string } } }> } };

export type GQLSearchQueryVariables = Exact<{ [key: string]: never; }>;


export type GQLSearchQuery = { readonly __typename?: 'RootQuery', readonly posts: { readonly __typename?: 'RootQueryToPostConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Post', readonly id: string, readonly slug: string, readonly title: string, readonly content: string, readonly status: string, readonly date: string, readonly modified: string, readonly tags: { readonly __typename?: 'PostToTagConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Tag', readonly id: string, readonly slug: string, readonly name: string, readonly count: number }> }, readonly post: { readonly __typename?: 'Post_Post', readonly featured: { readonly __typename?: 'MediaItem', readonly srcSet: string, readonly altText: string, readonly sourceUrl: string } } }> }, readonly projects: { readonly __typename?: 'RootQueryToProjectConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Project', readonly id: string, readonly slug: string, readonly title: string, readonly content: string, readonly status: string, readonly project: { readonly __typename?: 'Project_Project', readonly date: string, readonly link: string, readonly description: string } }> }, readonly works: { readonly __typename?: 'RootQueryToWorkConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Work', readonly id: string, readonly slug: string, readonly title: string, readonly content: string, readonly status: string, readonly work: { readonly __typename?: 'Work_Work', readonly date: string, readonly link: string, readonly role: string, readonly image: { readonly __typename?: 'MediaItem', readonly srcSet: string, readonly altText: string, readonly sourceUrl: string } } }> } };

export type GQLBaseTagFragment = { readonly __typename?: 'Tag', readonly id: string, readonly slug: string, readonly name: string, readonly count: number };

export type GQLTagsManyQueryVariables = Exact<{ [key: string]: never; }>;


export type GQLTagsManyQuery = { readonly __typename?: 'RootQuery', readonly tags: { readonly __typename?: 'RootQueryToTagConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'Tag', readonly id: string, readonly slug: string, readonly name: string, readonly count: number }> } };

export const BasePageFragmentDoc = gql`
    fragment BasePage on Page {
  id
  slug
  title
  content
  status
}
    `;
export const BaseMediaItemFragmentDoc = gql`
    fragment BaseMediaItem on MediaItem {
  srcSet
  altText
  sourceUrl
}
    `;
export const BaseWorkFragmentDoc = gql`
    fragment BaseWork on Work {
  id
  slug
  title
  content
  status
  work {
    date
    image {
      ...BaseMediaItem
    }
    link
    role
  }
}
    ${BaseMediaItemFragmentDoc}`;
export const BaseProjectFragmentDoc = gql`
    fragment BaseProject on Project {
  id
  slug
  title
  content
  status
  project {
    date
    link
    description
  }
}
    `;
export const BaseTagFragmentDoc = gql`
    fragment BaseTag on Tag {
  id
  slug
  name
  count
}
    `;
export const BasePostFragmentDoc = gql`
    fragment BasePost on Post {
  id
  slug
  title
  content
  status
  date
  modified
  tags {
    nodes {
      ...BaseTag
    }
  }
  post {
    featured {
      ...BaseMediaItem
    }
  }
}
    ${BaseTagFragmentDoc}
${BaseMediaItemFragmentDoc}`;
export const MediaItemsManyDocument = gql`
    query MediaItemsMany {
  mediaItems(first: 100, where: {status: PUBLISH}) {
    nodes {
      ...BaseMediaItem
    }
  }
}
    ${BaseMediaItemFragmentDoc}`;
export const MediaItemsOneDocument = gql`
    query MediaItemsOne($slug: ID!) {
  mediaItem(id: $slug, idType: URI) {
    ...BaseMediaItem
  }
}
    ${BaseMediaItemFragmentDoc}`;
export const PagesManyDocument = gql`
    query PagesMany {
  pages(first: 100, where: {status: PUBLISH}) {
    nodes {
      ...BasePage
    }
  }
}
    ${BasePageFragmentDoc}`;
export const PagesOneDocument = gql`
    query PagesOne($slug: ID!) {
  page(id: $slug, idType: URI) {
    ...BasePage
  }
}
    ${BasePageFragmentDoc}`;
export const WorksManyDocument = gql`
    query WorksMany {
  works(first: 100, where: {status: PUBLISH}) {
    nodes {
      ...BaseWork
    }
  }
}
    ${BaseWorkFragmentDoc}`;
export const WorksOneDocument = gql`
    query WorksOne($slug: ID!) {
  work(id: $slug, idType: URI) {
    ...BaseWork
  }
}
    ${BaseWorkFragmentDoc}`;
export const ProjectsManyDocument = gql`
    query ProjectsMany {
  projects(first: 100, where: {status: PUBLISH}) {
    nodes {
      ...BaseProject
    }
  }
}
    ${BaseProjectFragmentDoc}`;
export const ProjectsOneDocument = gql`
    query ProjectsOne($slug: ID!) {
  project(id: $slug, idType: URI) {
    ...BaseProject
  }
}
    ${BaseProjectFragmentDoc}`;
export const PostsManyDocument = gql`
    query PostsMany {
  posts(first: 100, where: {status: PUBLISH}) {
    nodes {
      ...BasePost
    }
  }
}
    ${BasePostFragmentDoc}`;
export const PostsOneDocument = gql`
    query PostsOne($slug: ID!) {
  post(id: $slug, idType: URI) {
    ...BasePost
  }
}
    ${BasePostFragmentDoc}`;
export const PostsManyByTagDocument = gql`
    query PostsManyByTag($tag: String!) {
  posts(first: 100, where: {status: PUBLISH, tag: $tag}) {
    nodes {
      ...BasePost
    }
  }
}
    ${BasePostFragmentDoc}`;
export const SearchDocument = gql`
    query Search {
  posts(first: 100) {
    nodes {
      ...BasePost
    }
  }
  projects(first: 100) {
    nodes {
      ...BaseProject
    }
  }
  works(first: 100) {
    nodes {
      ...BaseWork
    }
  }
}
    ${BasePostFragmentDoc}
${BaseProjectFragmentDoc}
${BaseWorkFragmentDoc}`;
export const TagsManyDocument = gql`
    query TagsMany {
  tags(first: 100) {
    nodes {
      ...BaseTag
    }
  }
}
    ${BaseTagFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    MediaItemsMany(variables?: GQLMediaItemsManyQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GQLMediaItemsManyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GQLMediaItemsManyQuery>(MediaItemsManyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MediaItemsMany', 'query');
    },
    MediaItemsOne(variables: GQLMediaItemsOneQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GQLMediaItemsOneQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GQLMediaItemsOneQuery>(MediaItemsOneDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MediaItemsOne', 'query');
    },
    PagesMany(variables?: GQLPagesManyQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GQLPagesManyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GQLPagesManyQuery>(PagesManyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PagesMany', 'query');
    },
    PagesOne(variables: GQLPagesOneQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GQLPagesOneQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GQLPagesOneQuery>(PagesOneDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PagesOne', 'query');
    },
    WorksMany(variables?: GQLWorksManyQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GQLWorksManyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GQLWorksManyQuery>(WorksManyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'WorksMany', 'query');
    },
    WorksOne(variables: GQLWorksOneQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GQLWorksOneQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GQLWorksOneQuery>(WorksOneDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'WorksOne', 'query');
    },
    ProjectsMany(variables?: GQLProjectsManyQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GQLProjectsManyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GQLProjectsManyQuery>(ProjectsManyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProjectsMany', 'query');
    },
    ProjectsOne(variables: GQLProjectsOneQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GQLProjectsOneQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GQLProjectsOneQuery>(ProjectsOneDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProjectsOne', 'query');
    },
    PostsMany(variables?: GQLPostsManyQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GQLPostsManyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GQLPostsManyQuery>(PostsManyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PostsMany', 'query');
    },
    PostsOne(variables: GQLPostsOneQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GQLPostsOneQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GQLPostsOneQuery>(PostsOneDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PostsOne', 'query');
    },
    PostsManyByTag(variables: GQLPostsManyByTagQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GQLPostsManyByTagQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GQLPostsManyByTagQuery>(PostsManyByTagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PostsManyByTag', 'query');
    },
    Search(variables?: GQLSearchQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GQLSearchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GQLSearchQuery>(SearchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Search', 'query');
    },
    TagsMany(variables?: GQLTagsManyQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GQLTagsManyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GQLTagsManyQuery>(TagsManyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TagsMany', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;