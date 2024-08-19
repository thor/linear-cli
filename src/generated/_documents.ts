export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  DateTimeOrDuration: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  TimelessDate: { input: any; output: any; }
  TimelessDateOrDuration: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

/** A bot actor is an actor that is not a user, but an application or integration. */
export type ActorBot = {
  __typename?: 'ActorBot';
  /** A url pointing to the avatar representing this bot. */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The display name of the bot. */
  name?: Maybe<Scalars['String']['output']>;
  /** The sub type of the bot. */
  subType?: Maybe<Scalars['String']['output']>;
  /** The type of bot. */
  type: Scalars['String']['output'];
  /** The display name of the external user on behalf of which the bot acted. */
  userDisplayName?: Maybe<Scalars['String']['output']>;
};

export type AirbyteConfigurationInput = {
  /** Linear export API key. */
  apiKey: Scalars['String']['input'];
};

/** An API key. Grants access to the user's resources. */
export type ApiKey = Node & {
  __typename?: 'ApiKey';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The label of the API key. */
  label: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type ApiKeyConnection = {
  __typename?: 'ApiKeyConnection';
  edges: Array<ApiKeyEdge>;
  nodes: Array<ApiKey>;
  pageInfo: PageInfo;
};

export type ApiKeyCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The API key value. */
  key: Scalars['String']['input'];
  /** The label for the API key. */
  label: Scalars['String']['input'];
};

export type ApiKeyEdge = {
  __typename?: 'ApiKeyEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ApiKey;
};

export type ApiKeyPayload = {
  __typename?: 'ApiKeyPayload';
  /** The API key that was created. */
  apiKey: ApiKey;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Public information of the OAuth application. */
export type Application = {
  __typename?: 'Application';
  /** OAuth application's client ID. */
  clientId: Scalars['String']['output'];
  /** Information about the application. */
  description?: Maybe<Scalars['String']['output']>;
  /** Name of the developer. */
  developer: Scalars['String']['output'];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars['String']['output'];
  /** OAuth application's ID. */
  id: Scalars['String']['output'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Application name. */
  name: Scalars['String']['output'];
};

/** A generic payload return from entity archive or deletion mutations. */
export type ArchivePayload = {
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Contains requested archived model objects. */
export type ArchiveResponse = {
  __typename?: 'ArchiveResponse';
  /** A JSON serialized collection of model objects loaded from the archive */
  archive: Scalars['String']['output'];
  /** The version of the remote database. Incremented by 1 for each migration run on the database. */
  databaseVersion: Scalars['Float']['output'];
  /** Whether the dependencies for the model objects are included in the archive. */
  includesDependencies: Scalars['Boolean']['output'];
  /** The total number of entities in the archive. */
  totalCount: Scalars['Float']['output'];
};

export type AsksChannelConnectPayload = {
  __typename?: 'AsksChannelConnectPayload';
  /** Whether the bot needs to be manually added to the channel. */
  addBot: Scalars['Boolean']['output'];
  /** The integration that was created or updated. */
  integration?: Maybe<Integration>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The new Asks Slack channel mapping for the connected channel. */
  mapping: SlackChannelNameMapping;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Issue assignee sorting options. */
export type AssigneeSort = {
  /** Whether nulls should be sorted first or last */
  nulls?: InputMaybe<PaginationNulls>;
  /** The order for the individual sort */
  order?: InputMaybe<PaginationSortOrder>;
};

/** Issue attachment (e.g. support ticket, pull request). */
export type Attachment = Node & {
  __typename?: 'Attachment';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The creator of the attachment. */
  creator?: Maybe<User>;
  /** The non-Linear user who created the attachment. */
  externalUserCreator?: Maybe<ExternalUser>;
  /** Indicates if attachments for the same source application should be grouped in the Linear UI. */
  groupBySource: Scalars['Boolean']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The issue this attachment belongs to. */
  issue: Issue;
  /** Custom metadata related to the attachment. */
  metadata: Scalars['JSONObject']['output'];
  /** Information about the source which created the attachment. */
  source?: Maybe<Scalars['JSONObject']['output']>;
  /** An accessor helper to source.type, defines the source type of the attachment. */
  sourceType?: Maybe<Scalars['String']['output']>;
  /** Content for the subtitle line in the Linear attachment widget. */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** Content for the title line in the Linear attachment widget. */
  title: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Location of the attachment which is also used as an identifier. */
  url: Scalars['String']['output'];
};

/** A generic payload return from entity archive mutations. */
export type AttachmentArchivePayload = ArchivePayload & {
  __typename?: 'AttachmentArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Attachment>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Attachment collection filtering options. */
export type AttachmentCollectionFilter = {
  /** Compound filters, all of which need to be matched by the attachment. */
  and?: InputMaybe<Array<AttachmentCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the attachments creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Filters that needs to be matched by all attachments. */
  every?: InputMaybe<AttachmentFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the attachment. */
  or?: InputMaybe<Array<AttachmentCollectionFilter>>;
  /** Filters that needs to be matched by some attachments. */
  some?: InputMaybe<AttachmentFilter>;
  /** Comparator for the source type. */
  sourceType?: InputMaybe<SourceTypeComparator>;
  /** Comparator for the subtitle. */
  subtitle?: InputMaybe<NullableStringComparator>;
  /** Comparator for the title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Comparator for the url. */
  url?: InputMaybe<StringComparator>;
};

export type AttachmentConnection = {
  __typename?: 'AttachmentConnection';
  edges: Array<AttachmentEdge>;
  nodes: Array<Attachment>;
  pageInfo: PageInfo;
};

export type AttachmentCreateInput = {
  /** Create a linked comment with markdown body. */
  commentBody?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] Create a linked comment with Prosemirror body. Please use `commentBody` instead. */
  commentBodyData?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Create attachment as a user with the provided name. This option is only available to OAuth applications creating attachments in `actor=application` mode. */
  createAsUser?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if attachments for the same source application should be grouped in the Linear UI. */
  groupBySource?: InputMaybe<Scalars['Boolean']['input']>;
  /** An icon url to display with the attachment. Should be of jpg or png format. Maximum of 1MB in size. Dimensions should be 20x20px for optimal display quality. */
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The issue to associate the attachment with. */
  issueId: Scalars['String']['input'];
  /** Attachment metadata object with string and number values. */
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The attachment subtitle. */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** The attachment title. */
  title: Scalars['String']['input'];
  /** Attachment location which is also used as an unique identifier for the attachment. If another attachment is created with the same `url` value, existing record is updated instead. */
  url: Scalars['String']['input'];
};

export type AttachmentEdge = {
  __typename?: 'AttachmentEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Attachment;
};

/** Attachment filtering options. */
export type AttachmentFilter = {
  /** Compound filters, all of which need to be matched by the attachment. */
  and?: InputMaybe<Array<AttachmentFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the attachments creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Compound filters, one of which need to be matched by the attachment. */
  or?: InputMaybe<Array<AttachmentFilter>>;
  /** Comparator for the source type. */
  sourceType?: InputMaybe<SourceTypeComparator>;
  /** Comparator for the subtitle. */
  subtitle?: InputMaybe<NullableStringComparator>;
  /** Comparator for the title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Comparator for the url. */
  url?: InputMaybe<StringComparator>;
};

export type AttachmentPayload = {
  __typename?: 'AttachmentPayload';
  /** The issue attachment that was created. */
  attachment: Attachment;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type AttachmentSourcesPayload = {
  __typename?: 'AttachmentSourcesPayload';
  /** A unique list of all source types used in this workspace. */
  sources: Scalars['JSONObject']['output'];
};

export type AttachmentUpdateInput = {
  /** An icon url to display with the attachment. Should be of jpg or png format. Maximum of 1MB in size. Dimensions should be 20x20px for optimal display quality. */
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  /** Attachment metadata object with string and number values. */
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The attachment subtitle. */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** The attachment title. */
  title: Scalars['String']['input'];
};

/** Workspace audit log entry object. */
export type AuditEntry = Node & {
  __typename?: 'AuditEntry';
  /** The user that caused the audit entry to be created. */
  actor?: Maybe<User>;
  /** The ID of the user that caused the audit entry to be created. */
  actorId?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Country code of request resulting to audit entry. */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** IP from actor when entry was recorded. */
  ip?: Maybe<Scalars['String']['output']>;
  /** Additional metadata related to the audit entry. */
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  /** The organization the audit log belongs to. */
  organization?: Maybe<Organization>;
  /** Additional information related to the request which performed the action. */
  requestInformation?: Maybe<Scalars['JSONObject']['output']>;
  type: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type AuditEntryConnection = {
  __typename?: 'AuditEntryConnection';
  edges: Array<AuditEntryEdge>;
  nodes: Array<AuditEntry>;
  pageInfo: PageInfo;
};

export type AuditEntryEdge = {
  __typename?: 'AuditEntryEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: AuditEntry;
};

/** Audit entry filtering options. */
export type AuditEntryFilter = {
  /** Filters that the audit entry actor must satisfy. */
  actor?: InputMaybe<NullableUserFilter>;
  /** Comparator for the country code. */
  countryCode?: InputMaybe<StringComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the IP address. */
  ip?: InputMaybe<StringComparator>;
  /** Comparator for the type. */
  type?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type AuditEntryType = {
  __typename?: 'AuditEntryType';
  /** Description of the audit entry type. */
  description: Scalars['String']['output'];
  /** The audit entry type. */
  type: Scalars['String']['output'];
};

export type AuthApiKey = {
  __typename?: 'AuthApiKey';
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
};

export type AuthApiKeyCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The API key value. */
  key: Scalars['String']['input'];
  /** The label for the API key. */
  label: Scalars['String']['input'];
};

export type AuthApiKeyPayload = {
  __typename?: 'AuthApiKeyPayload';
  /** The auth API key that was created. */
  authApiKey: AuthApiKey;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** An email address that can be used for submitting issues. */
export type AuthEmailIntakeAddress = {
  __typename?: 'AuthEmailIntakeAddress';
  /** Unique email address user name (before @) used for incoming email. */
  address: Scalars['String']['output'];
  /** The auth user who created the email intake address. */
  creator?: Maybe<AuthUser>;
  /** Whether the email address is enabled. */
  enabled: Scalars['Boolean']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The auth organization that the email address is associated with. */
  organization: AuthOrganization;
};

export type AuthIntegration = {
  __typename?: 'AuthIntegration';
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
};

/** [INTERNAL] An OAuth userId/createdDate tuple */
export type AuthMembership = {
  __typename?: 'AuthMembership';
  /** The date of the authorization */
  createdAt: Scalars['DateTime']['output'];
  /** The authorizing userId */
  userId: Scalars['String']['output'];
};

export type AuthOauthClient = {
  __typename?: 'AuthOauthClient';
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** OAuth application's client ID. */
  clientId: Scalars['String']['output'];
  /** OAuth application's client secret. */
  clientSecret: Scalars['String']['output'];
  /** The ID of the user who created the OAuth application. */
  creatorId: Scalars['String']['output'];
  /** Information about the application. */
  description?: Maybe<Scalars['String']['output']>;
  /** Name of the developer. */
  developer: Scalars['String']['output'];
  /** Url of the developer. */
  developerUrl: Scalars['String']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** OAuth application's client name. */
  name: Scalars['String']['output'];
  /** The ID of the workspace the OAuth application belongs to. */
  organizationId: Scalars['String']['output'];
  /** Whether the OAuth application can be installed in other organizations. */
  publicEnabled: Scalars['Boolean']['output'];
  /** List of allowed redirect URIs for the application. */
  redirectUris: Array<Scalars['String']['output']>;
  /** The resource types to request when creating new webhooks. */
  webhookResourceTypes: Array<Scalars['String']['output']>;
  /** Webhook secret */
  webhookSecret?: Maybe<Scalars['String']['output']>;
  /** Webhook URL */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

/** AuthOauthClient with token creator IDs and counts (memberships), for use in the GraphQL API. */
export type AuthOauthClientWithMemberships = {
  __typename?: 'AuthOauthClientWithMemberships';
  /** OAuth application's ID. */
  appId: Scalars['String']['output'];
  /** OAuth application's client ID. */
  clientId: Scalars['String']['output'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** User IDs and membership dates of everyone who has authorized the application with the set of scopes. */
  memberships: Array<AuthMembership>;
  /** Application name. */
  name: Scalars['String']['output'];
  /** Scopes that are authorized for this application for a given user. */
  scope: Array<Scalars['String']['output']>;
  /** Total number of members that authorized the application. */
  totalMembers: Scalars['Float']['output'];
  /** The application's webhook URL. */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

/** AuthOauthClient with scope from OauthToken, for use in the GraphQL API. */
export type AuthOauthClientWithScope = {
  __typename?: 'AuthOauthClientWithScope';
  /** OAuth application's ID. */
  appId: Scalars['String']['output'];
  /** OAuth application's client ID. */
  clientId: Scalars['String']['output'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Application name. */
  name: Scalars['String']['output'];
  /** Scopes that are authorized for this application for a given user. */
  scope: Array<Scalars['String']['output']>;
  /** The application's webhook URL. */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

export type AuthOauthClientWithTokens = {
  __typename?: 'AuthOauthClientWithTokens';
  /** The auth OAuth client. */
  client: AuthOauthClient;
  /** The token matching the app, scope, and actor. */
  tokens: Array<OauthToken>;
};

/** An organization. Organizations are root-level objects that contain users and teams. */
export type AuthOrganization = {
  __typename?: 'AuthOrganization';
  /** Allowed authentication providers, empty array means all are allowed */
  allowedAuthServices: Array<Scalars['String']['output']>;
  /** The time at which deletion of the organization was requested. */
  deletionRequestedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the organization is enabled. Used as a superuser tool to lock down the org. */
  enabled: Scalars['Boolean']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The organization's logo URL. */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** The organization's name. */
  name: Scalars['String']['output'];
  /** Previously used URL keys for the organization (last 3 are kept and redirected). */
  previousUrlKeys: Array<Scalars['String']['output']>;
  /** The region the organization is hosted in. */
  region: Scalars['String']['output'];
  /** The feature release channel the organization belongs to. */
  releaseChannel: ReleaseChannel;
  /** Whether SAML authentication is enabled for organization. */
  samlEnabled: Scalars['Boolean']['output'];
  /** [INTERNAL] SAML settings */
  samlSettings?: Maybe<Scalars['JSONObject']['output']>;
  /** Whether SCIM provisioning is enabled for organization. */
  scimEnabled: Scalars['Boolean']['output'];
  /** The email domain or URL key for the organization. */
  serviceId: Scalars['String']['output'];
  /** The organization's unique URL key. */
  urlKey: Scalars['String']['output'];
  userCount: Scalars['Float']['output'];
};

export type AuthOrganizationBucketNamePayload = {
  __typename?: 'AuthOrganizationBucketNamePayload';
  /** The imports bucket name for the organization. */
  importsBucketName: Scalars['String']['output'];
  /** The region for the organization. */
  region: Scalars['String']['output'];
  /** The uploads bucket name for the organization. */
  uploadsBucketName: Scalars['String']['output'];
};

export type AuthOrganizationDomain = {
  __typename?: 'AuthOrganizationDomain';
  authType: OrganizationDomainAuthType;
  claimed?: Maybe<Scalars['Boolean']['output']>;
  /** Prevent users with this domain to create new workspaces. */
  disableOrganizationCreation?: Maybe<Scalars['Boolean']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type AuthOrganizationExistsPayload = {
  __typename?: 'AuthOrganizationExistsPayload';
  /** Whether the organization exists. */
  exists: Scalars['Boolean']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** An invitation to the organization that has been sent via email. */
export type AuthOrganizationInvite = {
  __typename?: 'AuthOrganizationInvite';
  /** The time at which the invite will be expiring. Null, if the invite shouldn't expire. */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
};

export type AuthOrganizationPayload = {
  __typename?: 'AuthOrganizationPayload';
  /** The auth organization that was updated. */
  authOrganization: AuthOrganization;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type AuthOrganizationUpdateInput = {
  /** The organization's unique invite hash. */
  inviteHash?: InputMaybe<Scalars['String']['input']>;
  /** The organization's unique URL key. */
  urlKey?: InputMaybe<Scalars['String']['input']>;
};

export type AuthResolverResponse = {
  __typename?: 'AuthResolverResponse';
  /** Should the signup flow allow access for the domain. */
  allowDomainAccess?: Maybe<Scalars['Boolean']['output']>;
  /** List of organizations allowing this user account to join automatically. */
  availableOrganizations?: Maybe<Array<AuthOrganization>>;
  /** Email for the authenticated account. */
  email: Scalars['String']['output'];
  /** User account ID. */
  id: Scalars['String']['output'];
  /** ID of the organization last accessed by the user. */
  lastUsedOrganizationId?: Maybe<Scalars['String']['output']>;
  /** List of organization available to this user account but locked due to the current auth method. */
  lockedOrganizations?: Maybe<Array<AuthOrganization>>;
  /** List of locked users that are locked by login restrictions */
  lockedUsers: Array<AuthUser>;
  /**
   * Application token.
   * @deprecated Deprecated and not used anymore. Never populated.
   */
  token?: Maybe<Scalars['String']['output']>;
  /** List of active users that belong to the user account. */
  users: Array<AuthUser>;
};

export type AuthSuccessPayload = {
  __typename?: 'AuthSuccessPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** A user that has access to the the resources of an organization. */
export type AuthUser = {
  __typename?: 'AuthUser';
  /** Whether the user is active. */
  active: Scalars['Boolean']['output'];
  /** An URL to the user's avatar image. */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** The user's display (nick) name. Unique within each organization. */
  displayName: Scalars['String']['output'];
  /** The user's email address. */
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The user's full name. */
  name: Scalars['String']['output'];
  /** Organization the user belongs to. */
  organization: AuthOrganization;
  /** Whether the user is an organization admin or guest on a database level. */
  role: UserRoleType;
  /** User account ID the user belongs to. */
  userAccountId: Scalars['String']['output'];
};

/** User authentication session. */
export type AuthenticationSession = {
  __typename?: 'AuthenticationSession';
  /** Used web browser. */
  browserType?: Maybe<Scalars['String']['output']>;
  /** Client used for the session */
  client?: Maybe<Scalars['String']['output']>;
  /** Country codes of all seen locations. */
  countryCodes: Array<Scalars['String']['output']>;
  /** Date when the session was created. */
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  /** IP address. */
  ip?: Maybe<Scalars['String']['output']>;
  /** When was the session last seen */
  lastActiveAt?: Maybe<Scalars['DateTime']['output']>;
  /** Human readable location */
  location?: Maybe<Scalars['String']['output']>;
  /** Location city name. */
  locationCity?: Maybe<Scalars['String']['output']>;
  /** Location country name. */
  locationCountry?: Maybe<Scalars['String']['output']>;
  /** Location country code. */
  locationCountryCode?: Maybe<Scalars['String']['output']>;
  /** Location region code. */
  locationRegionCode?: Maybe<Scalars['String']['output']>;
  /** Name of the session, derived from the client and operating system */
  name: Scalars['String']['output'];
  /** Operating system used for the session */
  operatingSystem?: Maybe<Scalars['String']['output']>;
  /** Type of application used to authenticate. */
  type: AuthenticationSessionType;
  /** Date when the session was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** Session's user-agent. */
  userAgent?: Maybe<Scalars['String']['output']>;
};

/** Authentication session information. */
export type AuthenticationSessionResponse = {
  __typename?: 'AuthenticationSessionResponse';
  /** Used web browser. */
  browserType?: Maybe<Scalars['String']['output']>;
  /** Client used for the session */
  client?: Maybe<Scalars['String']['output']>;
  /** Country codes of all seen locations. */
  countryCodes: Array<Scalars['String']['output']>;
  /** Date when the session was created. */
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  /** IP address. */
  ip?: Maybe<Scalars['String']['output']>;
  /** Identifies the session used to make the request. */
  isCurrentSession: Scalars['Boolean']['output'];
  /** When was the session last seen */
  lastActiveAt?: Maybe<Scalars['DateTime']['output']>;
  /** Human readable location */
  location?: Maybe<Scalars['String']['output']>;
  /** Location city name. */
  locationCity?: Maybe<Scalars['String']['output']>;
  /** Location country name. */
  locationCountry?: Maybe<Scalars['String']['output']>;
  /** Location country code. */
  locationCountryCode?: Maybe<Scalars['String']['output']>;
  /** Location region code. */
  locationRegionCode?: Maybe<Scalars['String']['output']>;
  /** Name of the session, derived from the client and operating system */
  name: Scalars['String']['output'];
  /** Operating system used for the session */
  operatingSystem?: Maybe<Scalars['String']['output']>;
  /** Type of application used to authenticate. */
  type: AuthenticationSessionType;
  /** Date when the session was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** Session's user-agent. */
  userAgent?: Maybe<Scalars['String']['output']>;
};

export enum AuthenticationSessionType {
  Android = 'android',
  Desktop = 'desktop',
  Ios = 'ios',
  Web = 'web'
}

/** [INTERNAL] Public information of the OAuth application, plus the authorized scopes for a given user. */
export type AuthorizedApplication = {
  __typename?: 'AuthorizedApplication';
  /** OAuth application's ID. */
  appId: Scalars['String']['output'];
  /** OAuth application's client ID. */
  clientId: Scalars['String']['output'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Application name. */
  name: Scalars['String']['output'];
  /** Scopes that are authorized for this application for a given user. */
  scope: Array<Scalars['String']['output']>;
  /** Whether or not webhooks are enabled for the application. */
  webhooksEnabled: Scalars['Boolean']['output'];
};

export type AuthorizedApplicationBase = {
  __typename?: 'AuthorizedApplicationBase';
  /** OAuth application's ID. */
  appId: Scalars['String']['output'];
  /** OAuth application's client ID. */
  clientId: Scalars['String']['output'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Application name. */
  name: Scalars['String']['output'];
  /** Scopes that are authorized for this application for a given user. */
  scope: Array<Scalars['String']['output']>;
};

/** Comparator for booleans. */
export type BooleanComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not equals constraint. */
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A comment associated with an issue. */
export type Comment = Node & {
  __typename?: 'Comment';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The comment content in markdown format. */
  body: Scalars['String']['output'];
  /** [Internal] The comment content as a Prosemirror document. */
  bodyData?: Maybe<Scalars['String']['output']>;
  /** The bot that created the comment. */
  botActor?: Maybe<ActorBot>;
  /** The children of the comment. */
  children: CommentConnection;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The document content that the comment is associated with. */
  documentContent?: Maybe<DocumentContent>;
  /** The time user edited the comment. */
  editedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The external user who wrote the comment. */
  externalUser?: Maybe<ExternalUser>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The issue that the comment is associated with. */
  issue?: Maybe<Issue>;
  /** The parent comment under which the current comment is nested. */
  parent?: Maybe<Comment>;
  /** The project update that the comment is associated with. */
  projectUpdate?: Maybe<ProjectUpdate>;
  /** The text that this comment references. Only defined for inline comments. */
  quotedText?: Maybe<Scalars['String']['output']>;
  /** Emoji reaction summary, grouped by emoji type. */
  reactionData: Scalars['JSONObject']['output'];
  /** Reactions associated with the comment. */
  reactions: Array<Reaction>;
  /** The time the resolvingUser resolved the thread. */
  resolvedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The comment that resolved the thread. */
  resolvingComment?: Maybe<Comment>;
  /** The user that resolved the thread. */
  resolvingUser?: Maybe<User>;
  /** [Internal] Summary for comment thread. */
  summaryText?: Maybe<Scalars['String']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Comment's URL. */
  url: Scalars['String']['output'];
  /** The user who wrote the comment. */
  user?: Maybe<User>;
};


/** A comment associated with an issue. */
export type CommentChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** Comment filtering options. */
export type CommentCollectionFilter = {
  /** Compound filters, all of which need to be matched by the comment. */
  and?: InputMaybe<Array<CommentCollectionFilter>>;
  /** Comparator for the comments body. */
  body?: InputMaybe<StringComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the comments document content must satisfy. */
  documentContent?: InputMaybe<DocumentContentFilter>;
  /** Filters that needs to be matched by all comments. */
  every?: InputMaybe<CommentFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the comments issue must satisfy. */
  issue?: InputMaybe<NullableIssueFilter>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Filters that the comment's customer needs must satisfy. */
  needs?: InputMaybe<CustomerNeedCollectionFilter>;
  /** Compound filters, one of which need to be matched by the comment. */
  or?: InputMaybe<Array<CommentCollectionFilter>>;
  /** Filters that the comment parent must satisfy. */
  parent?: InputMaybe<NullableCommentFilter>;
  /** Filters that the comments project update must satisfy. */
  projectUpdate?: InputMaybe<ProjectUpdateFilter>;
  /** Filters that the comments reactions must satisfy. */
  reactions?: InputMaybe<ReactionCollectionFilter>;
  /** Filters that needs to be matched by some comments. */
  some?: InputMaybe<CommentFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Filters that the comments creator must satisfy. */
  user?: InputMaybe<UserFilter>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  edges: Array<CommentEdge>;
  nodes: Array<Comment>;
  pageInfo: PageInfo;
};

export type CommentCreateInput = {
  /** The comment content in markdown format. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] The comment content as a Prosemirror document. */
  bodyData?: InputMaybe<Scalars['JSON']['input']>;
  /** Create comment as a user with the provided name. This option is only available to OAuth applications creating comments in `actor=application` mode. */
  createAsUser?: InputMaybe<Scalars['String']['input']>;
  /** Flag to indicate this comment should be created on the issue's synced Slack comment thread. If no synced Slack comment thread exists, the mutation will fail. */
  createOnSyncedSlackThread?: InputMaybe<Scalars['Boolean']['input']>;
  /** The date when the comment was created (e.g. if importing from another system). Must be a date in the past. If none is provided, the backend will generate the time as now. */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Provide an external user avatar URL. Can only be used in conjunction with the `createAsUser` options. This option is only available to OAuth applications creating comments in `actor=application` mode. */
  displayIconUrl?: InputMaybe<Scalars['String']['input']>;
  /** Flag to prevent auto subscription to the issue the comment is created on. */
  doNotSubscribeToIssue?: InputMaybe<Scalars['Boolean']['input']>;
  /** The document content to associate the comment with. */
  documentContentId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The issue to associate the comment with. */
  issueId?: InputMaybe<Scalars['String']['input']>;
  /** The parent comment under which to nest a current comment. */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** The project update to associate the comment with. */
  projectUpdateId?: InputMaybe<Scalars['String']['input']>;
  /** The text that this comment references. Only defined for inline comments. */
  quotedText?: InputMaybe<Scalars['String']['input']>;
  /** [INTERNAL] The identifiers of the users subscribing to this comment thread. */
  subscriberIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Comment;
};

/** Comment filtering options. */
export type CommentFilter = {
  /** Compound filters, all of which need to be matched by the comment. */
  and?: InputMaybe<Array<CommentFilter>>;
  /** Comparator for the comments body. */
  body?: InputMaybe<StringComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the comments document content must satisfy. */
  documentContent?: InputMaybe<DocumentContentFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the comments issue must satisfy. */
  issue?: InputMaybe<NullableIssueFilter>;
  /** Filters that the comment's customer needs must satisfy. */
  needs?: InputMaybe<CustomerNeedCollectionFilter>;
  /** Compound filters, one of which need to be matched by the comment. */
  or?: InputMaybe<Array<CommentFilter>>;
  /** Filters that the comment parent must satisfy. */
  parent?: InputMaybe<NullableCommentFilter>;
  /** Filters that the comments project update must satisfy. */
  projectUpdate?: InputMaybe<ProjectUpdateFilter>;
  /** Filters that the comments reactions must satisfy. */
  reactions?: InputMaybe<ReactionCollectionFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Filters that the comments creator must satisfy. */
  user?: InputMaybe<UserFilter>;
};

/** A comment related notification. */
export type CommentNotification = {
  __typename?: 'CommentNotification';
  /** Related comment ID. Null if the notification is not related to a comment. */
  commentId?: Maybe<Scalars['String']['output']>;
  /** Related parent comment ID. Null if the notification is not related to a comment. */
  parentCommentId?: Maybe<Scalars['String']['output']>;
  /** Name of the reaction emoji related to the notification. */
  reactionEmoji?: Maybe<Scalars['String']['output']>;
};

export type CommentPayload = {
  __typename?: 'CommentPayload';
  /** The comment that was created or updated. */
  comment: Comment;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type CommentUpdateInput = {
  /** The comment content. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** The comment content as a Prosemirror document. */
  bodyData?: InputMaybe<Scalars['JSON']['input']>;
  /** [INTERNAL] Flag to prevent auto subscription to the issue the comment is updated on. */
  doNotSubscribeToIssue?: InputMaybe<Scalars['Boolean']['input']>;
  /** The text that this comment references. Only defined for inline comments. */
  quotedText?: InputMaybe<Scalars['String']['input']>;
  /** [INTERNAL] The child comment that resolves this thread. */
  resolvingCommentId?: InputMaybe<Scalars['String']['input']>;
  /** [INTERNAL] The user who resolved this thread. */
  resolvingUserId?: InputMaybe<Scalars['String']['input']>;
  /** [INTERNAL] The identifiers of the users subscribing to this comment. */
  subscriberIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Issue completion date sorting options. */
export type CompletedAtSort = {
  /** Whether nulls should be sorted first or last */
  nulls?: InputMaybe<PaginationNulls>;
  /** The order for the individual sort */
  order?: InputMaybe<PaginationSortOrder>;
};

export type ContactCreateInput = {
  /** User's browser information. */
  browser?: InputMaybe<Scalars['String']['input']>;
  /** User's Linear client information. */
  clientVersion?: InputMaybe<Scalars['String']['input']>;
  /** User's device information. */
  device?: InputMaybe<Scalars['String']['input']>;
  /** How disappointed the user would be if they could no longer use Linear. */
  disappointmentRating?: InputMaybe<Scalars['Int']['input']>;
  /** The message the user sent. */
  message: Scalars['String']['input'];
  /** User's operating system. */
  operatingSystem?: InputMaybe<Scalars['String']['input']>;
  /** The type of support contact. */
  type: Scalars['String']['input'];
};

export type ContactPayload = {
  __typename?: 'ContactPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** [INTERNAL] Input for sending a message to the Linear Sales team. */
export type ContactSalesCreateInput = {
  /** Size of the company. */
  companySize?: InputMaybe<Scalars['String']['input']>;
  /** Work email of the person requesting information. */
  email: Scalars['String']['input'];
  /** The message the user sent. */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Name of the person requesting information. */
  name: Scalars['String']['input'];
};

/** [Internal] Comparator for content. */
export type ContentComparator = {
  /** [Internal] Contains constraint. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] Not-contains constraint. */
  notContains?: InputMaybe<Scalars['String']['input']>;
};

export enum ContextViewType {
  ActiveCycle = 'activeCycle',
  ActiveIssues = 'activeIssues',
  Backlog = 'backlog',
  Triage = 'triage',
  UpcomingCycle = 'upcomingCycle'
}

export type CreateCsvExportReportPayload = {
  __typename?: 'CreateCsvExportReportPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type CreateOrJoinOrganizationResponse = {
  __typename?: 'CreateOrJoinOrganizationResponse';
  organization: AuthOrganization;
  user: AuthUser;
};

export type CreateOrganizationInput = {
  /** Whether the organization should allow email domain access. */
  domainAccess?: InputMaybe<Scalars['Boolean']['input']>;
  /** The name of the organization. */
  name: Scalars['String']['input'];
  /** The timezone of the organization, passed in by client. */
  timezone?: InputMaybe<Scalars['String']['input']>;
  /** The URL key of the organization. */
  urlKey: Scalars['String']['input'];
  /** JSON serialized UTM parameters associated with the creation of the workspace. */
  utm?: InputMaybe<Scalars['String']['input']>;
};

/** Issue creation date sorting options. */
export type CreatedAtSort = {
  /** Whether nulls should be sorted first or last */
  nulls?: InputMaybe<PaginationNulls>;
  /** The order for the individual sort */
  order?: InputMaybe<PaginationSortOrder>;
};

/** [ALPHA] A custom attribute on a Customer entity. */
export type CustomAttribute = Node & {
  __typename?: 'CustomAttribute';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The customer that this custom attribute is attached to. */
  customer: Customer;
  /** The field that is defining this custom attribute. */
  field: CustomerSchemaField;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The type of the value stored by the attribute. */
  type: SchemaFieldType;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The value of the custom attribute. */
  value: Scalars['JSON']['output'];
};

export type CustomAttributeConnection = {
  __typename?: 'CustomAttributeConnection';
  edges: Array<CustomAttributeEdge>;
  nodes: Array<CustomAttribute>;
  pageInfo: PageInfo;
};

export type CustomAttributeEdge = {
  __typename?: 'CustomAttributeEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: CustomAttribute;
};

/** A custom view that has been saved by a user. */
export type CustomView = Node & {
  __typename?: 'CustomView';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The color of the icon of the custom view. */
  color?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the custom view. */
  creator: User;
  /** The description of the custom view. */
  description?: Maybe<Scalars['String']['output']>;
  /** The filter applied to issues in the custom view. */
  filterData: Scalars['JSONObject']['output'];
  /**
   * The filters applied to issues in the custom view.
   * @deprecated Will be replaced by `filterData` in a future update
   */
  filters: Scalars['JSONObject']['output'];
  /** The icon of the custom view. */
  icon?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Issues associated with the custom view. */
  issues: IssueConnection;
  /** The model name of the custom view. */
  modelName: Scalars['String']['output'];
  /** The name of the custom view. */
  name: Scalars['String']['output'];
  /** The organization of the custom view. */
  organization: Organization;
  /** The organizations default view preferences for this custom view. */
  organizationViewPreferences?: Maybe<ViewPreferences>;
  /** The user who owns the custom view. */
  owner: User;
  /** The filter applied to projects in the custom view. */
  projectFilterData?: Maybe<Scalars['JSONObject']['output']>;
  /** Projects associated with the custom view. */
  projects: ProjectConnection;
  /** Whether the custom view is shared with everyone in the organization. */
  shared: Scalars['Boolean']['output'];
  /** The custom view's unique URL slug. */
  slugId?: Maybe<Scalars['String']['output']>;
  /** The team associated with the custom view. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user who last updated the custom view. */
  updatedBy: User;
  /** The current users view preferences for this custom view. */
  userViewPreferences?: Maybe<ViewPreferences>;
  /** The calculated view preferences values for this custom view. */
  viewPreferencesValues?: Maybe<ViewPreferencesValues>;
};


/** A custom view that has been saved by a user. */
export type CustomViewIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  sort?: InputMaybe<Array<IssueSortInput>>;
};


/** A custom view that has been saved by a user. */
export type CustomViewProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type CustomViewConnection = {
  __typename?: 'CustomViewConnection';
  edges: Array<CustomViewEdge>;
  nodes: Array<CustomView>;
  pageInfo: PageInfo;
};

export type CustomViewCreateInput = {
  /** The color of the icon of the custom view. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the custom view. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The filter applied to issues in the custom view. */
  filterData?: InputMaybe<IssueFilter>;
  /** The filters applied to issues in the custom view. */
  filters?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The icon of the custom view. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The id of the initiative associated with the custom view. */
  initiativeId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the custom view. */
  name: Scalars['String']['input'];
  /** The owner of the custom view. */
  ownerId?: InputMaybe<Scalars['String']['input']>;
  /** The project filter applied to issues in the custom view. */
  projectFilterData?: InputMaybe<ProjectFilter>;
  /** The id of the project associated with the custom view. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the custom view is shared with everyone in the organization. */
  shared?: InputMaybe<Scalars['Boolean']['input']>;
  /** The id of the team associated with the custom view. */
  teamId?: InputMaybe<Scalars['String']['input']>;
};

export type CustomViewEdge = {
  __typename?: 'CustomViewEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: CustomView;
};

export type CustomViewHasSubscribersPayload = {
  __typename?: 'CustomViewHasSubscribersPayload';
  /** Whether the custom view has subscribers. */
  hasSubscribers: Scalars['Boolean']['output'];
};

/** A custom view notification subscription. */
export type CustomViewNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'CustomViewNotificationSubscription';
  /** Whether the subscription is active or not. */
  active: Scalars['Boolean']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The custom view subscribed to. */
  customView: CustomView;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The contextual initiative view associated with the notification subscription. */
  initiative?: Maybe<Initiative>;
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']['output']>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type CustomViewPayload = {
  __typename?: 'CustomViewPayload';
  /** The custom view that was created or updated. */
  customView: CustomView;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type CustomViewSuggestionPayload = {
  __typename?: 'CustomViewSuggestionPayload';
  /** The suggested view description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The suggested view icon. */
  icon?: Maybe<Scalars['String']['output']>;
  /** The suggested view name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type CustomViewUpdateInput = {
  /** The color of the icon of the custom view. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the custom view. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The filter applied to issues in the custom view. */
  filterData?: InputMaybe<IssueFilter>;
  /** The filters applied to issues in the custom view. */
  filters?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The icon of the custom view. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] The id of the initiative associated with the custom view. */
  initiativeId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the custom view. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The owner of the custom view. */
  ownerId?: InputMaybe<Scalars['String']['input']>;
  /** The project filter applied to issues in the custom view. */
  projectFilterData?: InputMaybe<ProjectFilter>;
  /** [Internal] The id of the project associated with the custom view. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the custom view is shared with everyone in the organization. */
  shared?: InputMaybe<Scalars['Boolean']['input']>;
  /** The id of the team associated with the custom view. */
  teamId?: InputMaybe<Scalars['String']['input']>;
};

/** [ALPHA] A customer whose needs will be tied to issues or projects. */
export type Customer = Node & {
  __typename?: 'Customer';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The domains associated with this customer. */
  domains: Array<Scalars['String']['output']>;
  /** The ids of the customers in external systems. */
  externalIds: Array<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The customer's logo URL. */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** The customer's name. */
  name: Scalars['String']['output'];
  /** The user who owns the customer. */
  owner: User;
  /** The ID of the Slack channel used to interact with the customer. */
  slackChannelId?: Maybe<Scalars['String']['output']>;
  /** The current status of the customer. */
  status: CustomerStatus;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

/** Customer filtering options. */
export type CustomerCollectionFilter = {
  /** Compound filters, all of which need to be matched by the customer. */
  and?: InputMaybe<Array<CustomerCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the customer's domains. */
  domains?: InputMaybe<StringArrayComparator>;
  /** Filters that needs to be matched by all customers. */
  every?: InputMaybe<CustomerFilter>;
  /** Comparator for the customer's external IDs. */
  externalIds?: InputMaybe<StringArrayComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Comparator for the customer name. */
  name?: InputMaybe<StringComparator>;
  /** Filters that the customer's needs must satisfy. */
  needs?: InputMaybe<CustomerNeedCollectionFilter>;
  /** Compound filters, one of which need to be matched by the customer. */
  or?: InputMaybe<Array<CustomerCollectionFilter>>;
  /** Filters that the customer owner must satisfy. */
  owner?: InputMaybe<UserFilter>;
  /** Comparator for the customer slack channel ID. */
  slackChannelId?: InputMaybe<StringComparator>;
  /** Filters that needs to be matched by some customers. */
  some?: InputMaybe<CustomerFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  edges: Array<CustomerEdge>;
  nodes: Array<Customer>;
  pageInfo: PageInfo;
};

export type CustomerCreateInput = {
  /** The domains associated with this customer. */
  domains?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The ids of the customers in external systems. */
  externalIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the customer. */
  name: Scalars['String']['input'];
  /** The user who owns the customer. */
  ownerId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the Slack channel used to interact with the customer. */
  slackChannelId?: InputMaybe<Scalars['String']['input']>;
  /** The status of the customer. */
  statusId?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerEdge = {
  __typename?: 'CustomerEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Customer;
};

/** Customer filtering options. */
export type CustomerFilter = {
  /** Compound filters, all of which need to be matched by the customer. */
  and?: InputMaybe<Array<CustomerFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the customer's domains. */
  domains?: InputMaybe<StringArrayComparator>;
  /** Comparator for the customer's external IDs. */
  externalIds?: InputMaybe<StringArrayComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the customer name. */
  name?: InputMaybe<StringComparator>;
  /** Filters that the customer's needs must satisfy. */
  needs?: InputMaybe<CustomerNeedCollectionFilter>;
  /** Compound filters, one of which need to be matched by the customer. */
  or?: InputMaybe<Array<CustomerFilter>>;
  /** Filters that the customer owner must satisfy. */
  owner?: InputMaybe<UserFilter>;
  /** Comparator for the customer slack channel ID. */
  slackChannelId?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** [ALPHA] A customer need, expressed through a reference to an issue, project, or comment. */
export type CustomerNeed = Node & {
  __typename?: 'CustomerNeed';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The attachment this need is referencing. */
  attachment?: Maybe<Attachment>;
  /** The need content in markdown format. */
  body?: Maybe<Scalars['String']['output']>;
  /** [Internal] The content of the need as a Prosemirror document. */
  bodyData?: Maybe<Scalars['String']['output']>;
  /** The comment this need is referencing. */
  comment?: Maybe<Comment>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The customer that this need is attached to. */
  customer: Customer;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The issue this need is referencing. */
  issue?: Maybe<Issue>;
  /** The priority of the customer need. 0 = No priority, 1 = Critical, 2 = Important, 3 = Nice to have. */
  priority: Scalars['Float']['output'];
  /** The project this need is referencing. */
  project?: Maybe<Project>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

/** Customer needs filtering options. */
export type CustomerNeedCollectionFilter = {
  /** Compound filters, all of which need to be matched by the customer needs. */
  and?: InputMaybe<Array<CustomerNeedCollectionFilter>>;
  /** Filters that the need's comment must satisfy. */
  comment?: InputMaybe<NullableCommentFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the need's customer must satisfy. */
  customer?: InputMaybe<CustomerFilter>;
  /** Filters that needs to be matched by all customer needs. */
  every?: InputMaybe<CustomerNeedFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the need's issue must satisfy. */
  issue?: InputMaybe<NullableIssueFilter>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the customer needs. */
  or?: InputMaybe<Array<CustomerNeedCollectionFilter>>;
  /** Comparator for the customer need priority. */
  priority?: InputMaybe<NumberComparator>;
  /** Filters that the need's project must satisfy. */
  project?: InputMaybe<NullableProjectFilter>;
  /** Filters that needs to be matched by some customer needs. */
  some?: InputMaybe<CustomerNeedFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type CustomerNeedConnection = {
  __typename?: 'CustomerNeedConnection';
  edges: Array<CustomerNeedEdge>;
  nodes: Array<CustomerNeed>;
  pageInfo: PageInfo;
};

export type CustomerNeedCreateInput = {
  /** The attachment this need is referencing. */
  attachmentId?: InputMaybe<Scalars['String']['input']>;
  /** The content of the need in markdown format. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] The content of the need as a Prosemirror document. */
  bodyData?: InputMaybe<Scalars['JSON']['input']>;
  /** The comment this need is referencing. */
  commentId?: InputMaybe<Scalars['String']['input']>;
  /** The uuid of the customer the need belongs to. */
  customerId: Scalars['String']['input'];
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The issue this need is referencing. */
  issueId?: InputMaybe<Scalars['String']['input']>;
  /** The priority of the customer need. 0 = No priority, 1 = Critical, 2 = Important, 3 = Nice to have. */
  priority?: InputMaybe<Scalars['Float']['input']>;
  /** The project this need is referencing. */
  projectId?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerNeedEdge = {
  __typename?: 'CustomerNeedEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: CustomerNeed;
};

/** Customer filtering options. */
export type CustomerNeedFilter = {
  /** Compound filters, all of which need to be matched by the customer need. */
  and?: InputMaybe<Array<CustomerNeedFilter>>;
  /** Filters that the need's comment must satisfy. */
  comment?: InputMaybe<NullableCommentFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the need's customer must satisfy. */
  customer?: InputMaybe<CustomerFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the need's issue must satisfy. */
  issue?: InputMaybe<NullableIssueFilter>;
  /** Compound filters, one of which need to be matched by the customer need. */
  or?: InputMaybe<Array<CustomerNeedFilter>>;
  /** Comparator for the customer need priority. */
  priority?: InputMaybe<NumberComparator>;
  /** Filters that the need's project must satisfy. */
  project?: InputMaybe<NullableProjectFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type CustomerNeedPayload = {
  __typename?: 'CustomerNeedPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The customer need that was created or updated. */
  need: CustomerNeed;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type CustomerNeedUpdateInput = {
  /** The content of the need in markdown format. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] The content of the need as a Prosemirror document. */
  bodyData?: InputMaybe<Scalars['JSON']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The priority of the customer need. 0 = No priority, 1 = Critical, 2 = Important, 3 = Nice to have. */
  priority?: InputMaybe<Scalars['Float']['input']>;
};

export type CustomerPayload = {
  __typename?: 'CustomerPayload';
  /** The customer that was created or updated. */
  customer: Customer;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** [ALPHA] A customer schema. */
export type CustomerSchema = Node & {
  __typename?: 'CustomerSchema';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The schema display name. */
  displayName: Scalars['String']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type CustomerSchemaConnection = {
  __typename?: 'CustomerSchemaConnection';
  edges: Array<CustomerSchemaEdge>;
  nodes: Array<CustomerSchema>;
  pageInfo: PageInfo;
};

export type CustomerSchemaEdge = {
  __typename?: 'CustomerSchemaEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: CustomerSchema;
};

/** [ALPHA] A customer schema field. */
export type CustomerSchemaField = Node & {
  __typename?: 'CustomerSchemaField';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Whether this field is enabled to be used as a custom attribute. */
  enabled: Scalars['Boolean']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The name of the field in the schema. */
  name: Scalars['String']['output'];
  /** The type of the field in the schema. */
  type: SchemaFieldType;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type CustomerSchemaFieldConnection = {
  __typename?: 'CustomerSchemaFieldConnection';
  edges: Array<CustomerSchemaFieldEdge>;
  nodes: Array<CustomerSchemaField>;
  pageInfo: PageInfo;
};

export type CustomerSchemaFieldEdge = {
  __typename?: 'CustomerSchemaFieldEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: CustomerSchemaField;
};

/** [ALPHA] A customer status. */
export type CustomerStatus = Node & {
  __typename?: 'CustomerStatus';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The UI color of the status as a HEX string. */
  color: Scalars['String']['output'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Description of the status. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The name of the status. */
  name: Scalars['String']['output'];
  /** The position of the status in the workspace's customers flow. */
  position: Scalars['Float']['output'];
  /** The type of the customer status. */
  type: CustomerStatusType;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type CustomerStatusConnection = {
  __typename?: 'CustomerStatusConnection';
  edges: Array<CustomerStatusEdge>;
  nodes: Array<CustomerStatus>;
  pageInfo: PageInfo;
};

export type CustomerStatusCreateInput = {
  /** The UI color of the status as a HEX string. */
  color: Scalars['String']['input'];
  /** Description of the status. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the status. */
  name: Scalars['String']['input'];
  /** The position of the status in the workspace's customer flow. */
  position: Scalars['Float']['input'];
  /** The type of the customer status. */
  type: CustomerStatusType;
};

export type CustomerStatusEdge = {
  __typename?: 'CustomerStatusEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: CustomerStatus;
};

export type CustomerStatusPayload = {
  __typename?: 'CustomerStatusPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The customer status that was created or updated. */
  status: CustomerStatus;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** A type of customer status. */
export enum CustomerStatusType {
  Active = 'active',
  Inactive = 'inactive'
}

export type CustomerStatusUpdateInput = {
  /** The UI color of the status as a HEX string. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** Description of the status. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the status. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The position of the status in the workspace's customer flow. */
  position?: InputMaybe<Scalars['Float']['input']>;
  /** The type of the customer status. */
  type?: InputMaybe<CustomerStatusType>;
};

export type CustomerUpdateInput = {
  /** The domains associated with this customer. */
  domains?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The ids of the customers in external systems. */
  externalIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The name of the customer. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The user who owns the customer. */
  ownerId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the Slack channel used to interact with the customer. */
  slackChannelId?: InputMaybe<Scalars['String']['input']>;
  /** The status of the customer. */
  statusId?: InputMaybe<Scalars['String']['input']>;
};

/** A set of issues to be resolved in a specified amount of time. */
export type Cycle = Node & {
  __typename?: 'Cycle';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the cycle was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The completion time of the cycle. If null, the cycle hasn't been completed. */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The number of completed issues in the cycle after each day. */
  completedIssueCountHistory: Array<Scalars['Float']['output']>;
  /** The number of completed estimation points after each day. */
  completedScopeHistory: Array<Scalars['Float']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** [Internal] The current progress of the cycle. */
  currentProgress: Scalars['JSONObject']['output'];
  /** The cycle's description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The end time of the cycle. */
  endsAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The number of in progress estimation points after each day. */
  inProgressScopeHistory: Array<Scalars['Float']['output']>;
  /** The total number of issues in the cycle after each day. */
  issueCountHistory: Array<Scalars['Float']['output']>;
  /** Issues associated with the cycle. */
  issues: IssueConnection;
  /** The custom name of the cycle. */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of the cycle. */
  number: Scalars['Float']['output'];
  /** The overall progress of the cycle. This is the (completed estimate points + 0.25 * in progress estimate points) / total estimate points. */
  progress: Scalars['Float']['output'];
  /** [Internal] The progress history of the cycle. */
  progressHistory: Scalars['JSONObject']['output'];
  /** The total number of estimation points after each day. */
  scopeHistory: Array<Scalars['Float']['output']>;
  /** The start time of the cycle. */
  startsAt: Scalars['DateTime']['output'];
  /** The team that the cycle is associated with. */
  team: Team;
  /** Issues that weren't completed when the cycle was closed. */
  uncompletedIssuesUponClose: IssueConnection;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};


/** A set of issues to be resolved in a specified amount of time. */
export type CycleIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A set of issues to be resolved in a specified amount of time. */
export type CycleUncompletedIssuesUponCloseArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type CycleArchivePayload = ArchivePayload & {
  __typename?: 'CycleArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Cycle>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type CycleConnection = {
  __typename?: 'CycleConnection';
  edges: Array<CycleEdge>;
  nodes: Array<Cycle>;
  pageInfo: PageInfo;
};

export type CycleCreateInput = {
  /** The completion time of the cycle. If null, the cycle hasn't been completed. */
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The description of the cycle. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The end date of the cycle. */
  endsAt: Scalars['DateTime']['input'];
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The custom name of the cycle. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The start date of the cycle. */
  startsAt: Scalars['DateTime']['input'];
  /** The team to associate the cycle with. */
  teamId: Scalars['String']['input'];
};

export type CycleEdge = {
  __typename?: 'CycleEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Cycle;
};

/** Cycle filtering options. */
export type CycleFilter = {
  /** Compound filters, all of which need to be matched by the cycle. */
  and?: InputMaybe<Array<CycleFilter>>;
  /** Comparator for the cycle completed at date. */
  completedAt?: InputMaybe<DateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the cycle ends at date. */
  endsAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the filtering active cycle. */
  isActive?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering future cycles. */
  isFuture?: InputMaybe<BooleanComparator>;
  /** Comparator for filtering for whether the cycle is currently in cooldown. */
  isInCooldown?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering next cycle. */
  isNext?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering past cycles. */
  isPast?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering previous cycle. */
  isPrevious?: InputMaybe<BooleanComparator>;
  /** Filters that the cycles issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the cycle name. */
  name?: InputMaybe<StringComparator>;
  /** Comparator for the cycle number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the cycle. */
  or?: InputMaybe<Array<CycleFilter>>;
  /** Comparator for the cycle start date. */
  startsAt?: InputMaybe<DateComparator>;
  /** Filters that the cycles team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** A cycle notification subscription. */
export type CycleNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'CycleNotificationSubscription';
  /** Whether the subscription is active or not. */
  active: Scalars['Boolean']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The cycle subscribed to. */
  cycle: Cycle;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The contextual initiative view associated with the notification subscription. */
  initiative?: Maybe<Initiative>;
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']['output']>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type CyclePayload = {
  __typename?: 'CyclePayload';
  /** The Cycle that was created or updated. */
  cycle?: Maybe<Cycle>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Input for shifting all cycles from a certain cycle onwards by a certain number of days */
export type CycleShiftAllInput = {
  /** The number of days to shift the cycles by. */
  daysToShift: Scalars['Float']['input'];
  /** The cycle ID at which to start the shift. */
  id: Scalars['String']['input'];
};

/** Issue cycle sorting options. */
export type CycleSort = {
  /** When set to true, cycles wil be ordered with a custom order. Current cycle comes first, followed by upcoming cycles in ASC order, followed by previous cycles in DESC order. */
  currentCycleFirst?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether nulls should be sorted first or last */
  nulls?: InputMaybe<PaginationNulls>;
  /** The order for the individual sort */
  order?: InputMaybe<PaginationSortOrder>;
};

export type CycleUpdateInput = {
  /** The end date of the cycle. */
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The description of the cycle. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The end date of the cycle. */
  endsAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The custom name of the cycle. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The start date of the cycle. */
  startsAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Comparator for dates. */
export type DateComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['DateTimeOrDuration']['input']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['DateTimeOrDuration']['input']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['DateTimeOrDuration']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['DateTimeOrDuration']['input']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['DateTimeOrDuration']['input']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['DateTimeOrDuration']['input']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['DateTimeOrDuration']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['DateTimeOrDuration']['input']>>;
};

/** [INTERNAL] By which resolution is a date defined. */
export enum DateResolutionType {
  HalfYear = 'halfYear',
  Month = 'month',
  Quarter = 'quarter',
  Year = 'year'
}

/** The day of the week. */
export enum Day {
  Friday = 'Friday',
  Monday = 'Monday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
  Thursday = 'Thursday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday'
}

export type DeleteOrganizationInput = {
  /** The deletion code to confirm operation. */
  deletionCode: Scalars['String']['input'];
};

/** A generic payload return from entity deletion mutations. */
export type DeletePayload = ArchivePayload & {
  __typename?: 'DeletePayload';
  /** The identifier of the deleted entity. */
  entityId: Scalars['String']['output'];
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** A diary entry */
export type DiaryEntry = Node & {
  __typename?: 'DiaryEntry';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** [Internal] The entry content as a Prosemirror document. */
  bodyData?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The date for which the entry is created */
  date: Scalars['TimelessDate']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The canonical url for the DiaryEntry. */
  url: Scalars['String']['output'];
  /** The user who the diary belongs to. */
  user: User;
};

export type DiaryEntryConnection = {
  __typename?: 'DiaryEntryConnection';
  edges: Array<DiaryEntryEdge>;
  nodes: Array<DiaryEntry>;
  pageInfo: PageInfo;
};

export type DiaryEntryCreateInput = {
  /** [Internal] The comment content as a Prosemirror diaryEntry. */
  bodyData?: InputMaybe<Scalars['JSON']['input']>;
  /** The date for which the entry is created. */
  date: Scalars['TimelessDate']['input'];
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type DiaryEntryEdge = {
  __typename?: 'DiaryEntryEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: DiaryEntry;
};

export type DiaryEntryPayload = {
  __typename?: 'DiaryEntryPayload';
  /** The diary entry that was created or updated. */
  diaryEntry: DiaryEntry;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type DiaryEntryUpdateInput = {
  /** [Internal] The comment content as a Prosemirror diaryEntry. */
  bodyData?: InputMaybe<Scalars['JSON']['input']>;
  /** The date for which the entry is created. */
  date?: InputMaybe<Scalars['TimelessDate']['input']>;
};

/** A document that can be attached to different entities. */
export type Document = Node & {
  __typename?: 'Document';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The color of the icon. */
  color?: Maybe<Scalars['String']['output']>;
  /** Comments associated with the document. */
  comments: CommentConnection;
  /** The documents content in markdown format. */
  content?: Maybe<Scalars['String']['output']>;
  /**
   * [Internal] The documents content as a Prosemirror document.
   * @deprecated Use content instead.
   */
  contentData?: Maybe<Scalars['JSON']['output']>;
  /** [Internal] The documents content as YJS state. */
  contentState?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the document. */
  creator: User;
  /** The ID of the document content associated with the document. */
  documentContentId?: Maybe<Scalars['String']['output']>;
  /** The time at which the document was hidden. Null if the entity has not been hidden. */
  hiddenAt?: Maybe<Scalars['DateTime']['output']>;
  /** The icon of the document. */
  icon?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** [Internal] The initiative that the document is associated with. */
  initiative?: Maybe<Initiative>;
  /** The last template that was applied to this document. */
  lastAppliedTemplate?: Maybe<Template>;
  /** The project that the document is associated with. */
  project?: Maybe<Project>;
  /** The document's unique URL slug. */
  slugId: Scalars['String']['output'];
  /** The order of the item in the resources list. */
  sortOrder: Scalars['Float']['output'];
  /** The document title. */
  title: Scalars['String']['output'];
  /** A flag that indicates whether the document is in the trash bin. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user who last updated the document. */
  updatedBy: User;
  /** The canonical url for the document. */
  url: Scalars['String']['output'];
};


/** A document that can be attached to different entities. */
export type DocumentCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type DocumentArchivePayload = ArchivePayload & {
  __typename?: 'DocumentArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Document>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Document filtering options. */
export type DocumentCollectionFilter = {
  /** Compound filters, all of which need to be matched by the document. */
  and?: InputMaybe<Array<DocumentCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the document's creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Filters that needs to be matched by all documents. */
  every?: InputMaybe<DocumentFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the document's initiative must satisfy. */
  initiative?: InputMaybe<InitiativeFilter>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the document. */
  or?: InputMaybe<Array<DocumentCollectionFilter>>;
  /** Filters that the document's project must satisfy. */
  project?: InputMaybe<ProjectFilter>;
  /** Comparator for the document slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Filters that needs to be matched by some documents. */
  some?: InputMaybe<DocumentFilter>;
  /** Comparator for the document title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type DocumentConnection = {
  __typename?: 'DocumentConnection';
  edges: Array<DocumentEdge>;
  nodes: Array<Document>;
  pageInfo: PageInfo;
};

/** A document content for a project. */
export type DocumentContent = Node & {
  __typename?: 'DocumentContent';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The document content in markdown format. */
  content?: Maybe<Scalars['String']['output']>;
  /**
   * [Internal] The document content as a Prosemirror document.
   * @deprecated Use `contentState` instead
   */
  contentData?: Maybe<Scalars['JSONObject']['output']>;
  /** The document content state as a base64 encoded string. */
  contentState?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The document that the content is associated with. */
  document?: Maybe<Document>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The initiative that the content is associated with. */
  initiative?: Maybe<Initiative>;
  /** The issue that the content is associated with. */
  issue?: Maybe<Issue>;
  /** The project that the content is associated with. */
  project?: Maybe<Project>;
  /** The project milestone that the content is associated with. */
  projectMilestone?: Maybe<ProjectMilestone>;
  /** The time at which the document content was restored from a previous version. */
  restoredAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

/** Document content filtering options. */
export type DocumentContentFilter = {
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the document content document must satisfy. */
  document?: InputMaybe<DocumentFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the document content project must satisfy. */
  project?: InputMaybe<ProjectFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** A document content history for a document. */
export type DocumentContentHistory = Node & {
  __typename?: 'DocumentContentHistory';
  /** IDs of actors whose edits went into this history item. */
  actorIds: Array<Scalars['String']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** [Internal] The document content as a Prosemirror document. */
  contentData?: Maybe<Scalars['JSONObject']['output']>;
  /** The timestamp associated with the DocumentContent when it was originally saved. */
  contentDataSnapshotAt: Scalars['DateTime']['output'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The document content that this history item is associated with. */
  documentContent: DocumentContent;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type DocumentContentHistoryPayload = {
  __typename?: 'DocumentContentHistoryPayload';
  /** The document content history entries. */
  history: Array<DocumentContentHistoryType>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type DocumentContentHistoryType = {
  __typename?: 'DocumentContentHistoryType';
  /** The ID of the author of the change. */
  actorIds?: Maybe<Array<Scalars['String']['output']>>;
  /** [Internal] The document content as Prosemirror document. */
  contentData?: Maybe<Scalars['JSON']['output']>;
  /** The date when the document content history snapshot was taken. This can be different than createdAt since the content is captured from its state at the previously known updatedAt timestamp in the case of an update. On document create, these timestamps can be the same. */
  contentDataSnapshotAt: Scalars['DateTime']['output'];
  /** The date when the document content history entry was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The UUID of the document content history entry. */
  id: Scalars['String']['output'];
};

export type DocumentCreateInput = {
  /** The color of the icon. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The document content as markdown. */
  content?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] The document content as a Prosemirror document. */
  contentData?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The icon of the document. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] Related initiative for the document. */
  initiativeId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the last template applied to the document. */
  lastAppliedTemplateId?: InputMaybe<Scalars['String']['input']>;
  /** Related project for the document. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The order of the item in the resources list. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** [INTERNAL] The identifiers of the users subscribing to this document. */
  subscriberIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The title of the document. */
  title: Scalars['String']['input'];
};

export type DocumentEdge = {
  __typename?: 'DocumentEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Document;
};

/** Document filtering options. */
export type DocumentFilter = {
  /** Compound filters, all of which need to be matched by the document. */
  and?: InputMaybe<Array<DocumentFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the document's creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the document's initiative must satisfy. */
  initiative?: InputMaybe<InitiativeFilter>;
  /** Compound filters, one of which need to be matched by the document. */
  or?: InputMaybe<Array<DocumentFilter>>;
  /** Filters that the document's project must satisfy. */
  project?: InputMaybe<ProjectFilter>;
  /** Comparator for the document slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Comparator for the document title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** A document related notification. */
export type DocumentNotification = Entity & Node & Notification & {
  __typename?: 'DocumentNotification';
  /** The user that caused the notification. */
  actor?: Maybe<User>;
  /** [Internal] Notification actor initials if avatar is not available. */
  actorAvatarColor?: Maybe<Scalars['String']['output']>;
  /** [Internal] Notification avatar URL. */
  actorAvatarUrl?: Maybe<Scalars['String']['output']>;
  /** [Internal] Notification actor initials if avatar is not available. */
  actorInitials?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The bot that caused the notification. */
  botActor?: Maybe<ActorBot>;
  /** Related comment ID. Null if the notification is not related to a comment. */
  commentId?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Related document ID. */
  documentId: Scalars['String']['output'];
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The external user that caused the notification. */
  externalUserActor?: Maybe<ExternalUser>;
  /** [Internal] Notifications with the same grouping key will be grouped together in the UI. */
  groupingKey: Scalars['String']['output'];
  /** [Internal] Priority of the notification with the same grouping key. Higher number means higher priority. If priority is the same, notifications should be sorted by `createdAt`. */
  groupingPriority: Scalars['Float']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** [Internal] Inbox URL for the notification. */
  inboxUrl: Scalars['String']['output'];
  /** [Internal] If notification actor was Linear. */
  isLinearActor: Scalars['Boolean']['output'];
  /** [Internal] Issue's status type for issue notifications. */
  issueStatusType?: Maybe<Scalars['String']['output']>;
  /** Related parent comment ID. Null if the notification is not related to a comment. */
  parentCommentId?: Maybe<Scalars['String']['output']>;
  /** [Internal] Project update health for new updates. */
  projectUpdateHealth?: Maybe<Scalars['String']['output']>;
  /** Name of the reaction emoji related to the notification. */
  reactionEmoji?: Maybe<Scalars['String']['output']>;
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** [Internal] Notification subtitle. */
  subtitle: Scalars['String']['output'];
  /** [Internal] Notification title. */
  title: Scalars['String']['output'];
  /** Notification type. */
  type: Scalars['String']['output'];
  /** The time at which a notification was unsnoozed.. */
  unsnoozedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** [Internal] URL to the target of the notification. */
  url: Scalars['String']['output'];
  /** The user that received the notification. */
  user: User;
};

export type DocumentPayload = {
  __typename?: 'DocumentPayload';
  /** The document that was created or updated. */
  document: Document;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type DocumentSearchPayload = {
  __typename?: 'DocumentSearchPayload';
  /** Archived entities matching the search term along with all their dependencies. */
  archivePayload: ArchiveResponse;
  edges: Array<DocumentSearchResultEdge>;
  nodes: Array<DocumentSearchResult>;
  pageInfo: PageInfo;
  /** Total number of results for query without filters applied. */
  totalCount: Scalars['Float']['output'];
};

export type DocumentSearchResult = Node & {
  __typename?: 'DocumentSearchResult';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The color of the icon. */
  color?: Maybe<Scalars['String']['output']>;
  /** Comments associated with the document. */
  comments: CommentConnection;
  /** The documents content in markdown format. */
  content?: Maybe<Scalars['String']['output']>;
  /**
   * [Internal] The documents content as a Prosemirror document.
   * @deprecated Use content instead.
   */
  contentData?: Maybe<Scalars['JSON']['output']>;
  /** [Internal] The documents content as YJS state. */
  contentState?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the document. */
  creator: User;
  /** The ID of the document content associated with the document. */
  documentContentId?: Maybe<Scalars['String']['output']>;
  /** The time at which the document was hidden. Null if the entity has not been hidden. */
  hiddenAt?: Maybe<Scalars['DateTime']['output']>;
  /** The icon of the document. */
  icon?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** [Internal] The initiative that the document is associated with. */
  initiative?: Maybe<Initiative>;
  /** The last template that was applied to this document. */
  lastAppliedTemplate?: Maybe<Template>;
  /** Metadata related to search result. */
  metadata: Scalars['JSONObject']['output'];
  /** The project that the document is associated with. */
  project?: Maybe<Project>;
  /** The document's unique URL slug. */
  slugId: Scalars['String']['output'];
  /** The order of the item in the resources list. */
  sortOrder: Scalars['Float']['output'];
  /** The document title. */
  title: Scalars['String']['output'];
  /** A flag that indicates whether the document is in the trash bin. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user who last updated the document. */
  updatedBy: User;
  /** The canonical url for the document. */
  url: Scalars['String']['output'];
};


export type DocumentSearchResultCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type DocumentSearchResultConnection = {
  __typename?: 'DocumentSearchResultConnection';
  edges: Array<DocumentSearchResultEdge>;
  nodes: Array<DocumentSearchResult>;
  pageInfo: PageInfo;
};

export type DocumentSearchResultEdge = {
  __typename?: 'DocumentSearchResultEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: DocumentSearchResult;
};

export type DocumentUpdateInput = {
  /** The color of the icon. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The document content as markdown. */
  content?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] The document content as a Prosemirror document. */
  contentData?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The time at which the document was hidden. */
  hiddenAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The icon of the document. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] Related initiative for the document. */
  initiativeId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the last template applied to the document. */
  lastAppliedTemplateId?: InputMaybe<Scalars['String']['input']>;
  /** Related project for the document. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The order of the item in the resources list. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** [INTERNAL] The identifiers of the users subscribing to this document. */
  subscriberIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The title of the document. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Whether the document has been trashed. */
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A general purpose draft. Used for comments, project updates, etc. */
export type Draft = Node & {
  __typename?: 'Draft';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The text content as a Prosemirror document. */
  bodyData: Scalars['JSON']['output'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Additional properties for the draft. */
  data?: Maybe<Scalars['JSONObject']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Whether the draft was autogenerated for the user. */
  isAutogenerated: Scalars['Boolean']['output'];
  /** The issue for which this is a draft comment. */
  issue?: Maybe<Issue>;
  /** The comment for which this is a draft comment reply. */
  parentComment?: Maybe<Comment>;
  /** The project for which this is a draft project update. */
  project?: Maybe<Project>;
  /** The project update for which this is a draft comment. */
  projectUpdate?: Maybe<ProjectUpdate>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user who created the draft. */
  user: User;
  /** [INTERNAL] Whether the draft was ported from a local draft. */
  wasLocalDraft: Scalars['Boolean']['output'];
};

/** Issue due date sorting options. */
export type DueDateSort = {
  /** Whether nulls should be sorted first or last */
  nulls?: InputMaybe<PaginationNulls>;
  /** The order for the individual sort */
  order?: InputMaybe<PaginationSortOrder>;
};

/** An email address that can be used for submitting issues. */
export type EmailIntakeAddress = Node & {
  __typename?: 'EmailIntakeAddress';
  /** Unique email address user name (before @) used for incoming email. */
  address: Scalars['String']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the email intake address. */
  creator?: Maybe<User>;
  /** Whether the email address is enabled. */
  enabled: Scalars['Boolean']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The organization that the email address is associated with. */
  organization: Organization;
  /** The team that the email address is associated with. */
  team: Team;
  /** The template that the email address is associated with. */
  template?: Maybe<Template>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type EmailIntakeAddressCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifier or key of the team this email address will intake issues for. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the template this email address will intake issues for. */
  templateId?: InputMaybe<Scalars['String']['input']>;
};

export type EmailIntakeAddressPayload = {
  __typename?: 'EmailIntakeAddressPayload';
  /** The email address that was created or updated. */
  emailIntakeAddress: EmailIntakeAddress;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type EmailIntakeAddressUpdateInput = {
  /** Whether the email address is currently enabled. If set to false, the email address will be disabled and no longer accept incoming emails. */
  enabled: Scalars['Boolean']['input'];
};

export type EmailUnsubscribeInput = {
  /** The user's email validation token. */
  token: Scalars['String']['input'];
  /** Email type to unsubscribed from. */
  type: Scalars['String']['input'];
  /** The identifier of the user. */
  userId: Scalars['String']['input'];
};

export type EmailUnsubscribePayload = {
  __typename?: 'EmailUnsubscribePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type EmailUserAccountAuthChallengeInput = {
  /** Auth code for the client initiating the sequence. */
  clientAuthCode?: InputMaybe<Scalars['String']['input']>;
  /** The email for which to generate the magic login code. */
  email: Scalars['String']['input'];
  /** The organization invite link to associate with this authentication. */
  inviteLink?: InputMaybe<Scalars['String']['input']>;
  /** Whether the login was requested from the desktop app. */
  isDesktop?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to only return the login code. This is used by mobile apps to skip showing the login link. */
  loginCodeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** Signup code. */
  signupCode?: InputMaybe<Scalars['String']['input']>;
};

export type EmailUserAccountAuthChallengeResponse = {
  __typename?: 'EmailUserAccountAuthChallengeResponse';
  /** Supported challenge for this user account. Can be either verificationCode or password. */
  authType: Scalars['String']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** A custom emoji. */
export type Emoji = Node & {
  __typename?: 'Emoji';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the emoji. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The emoji's name. */
  name: Scalars['String']['output'];
  /** The organization that the emoji belongs to. */
  organization: Organization;
  /** The source of the emoji. */
  source: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The emoji image URL. */
  url: Scalars['String']['output'];
};

export type EmojiConnection = {
  __typename?: 'EmojiConnection';
  edges: Array<EmojiEdge>;
  nodes: Array<Emoji>;
  pageInfo: PageInfo;
};

export type EmojiCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the custom emoji. */
  name: Scalars['String']['input'];
  /** The URL for the emoji. */
  url: Scalars['String']['input'];
};

export type EmojiEdge = {
  __typename?: 'EmojiEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Emoji;
};

export type EmojiPayload = {
  __typename?: 'EmojiPayload';
  /** The emoji that was created. */
  emoji: Emoji;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** A basic entity. */
export type Entity = {
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

/** An external link for an entity like initiative, etc... */
export type EntityExternalLink = Node & {
  __typename?: 'EntityExternalLink';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the link. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The initiative that the link is associated with. */
  initiative?: Maybe<Initiative>;
  /** The link's label. */
  label: Scalars['String']['output'];
  /** The order of the item in the resources list. */
  sortOrder: Scalars['Float']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The link's URL. */
  url: Scalars['String']['output'];
};

export type EntityExternalLinkConnection = {
  __typename?: 'EntityExternalLinkConnection';
  edges: Array<EntityExternalLinkEdge>;
  nodes: Array<EntityExternalLink>;
  pageInfo: PageInfo;
};

export type EntityExternalLinkCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Related initiative link. */
  initiativeId?: InputMaybe<Scalars['String']['input']>;
  /** The label for the link. */
  label: Scalars['String']['input'];
  /** Related project link. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The order of the item in the entities resources list. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The URL of the link. */
  url: Scalars['String']['input'];
};

export type EntityExternalLinkEdge = {
  __typename?: 'EntityExternalLinkEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: EntityExternalLink;
};

export type EntityExternalLinkPayload = {
  __typename?: 'EntityExternalLinkPayload';
  /** The link that was created or updated. */
  entityExternalLink: EntityExternalLink;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type EntityExternalLinkUpdateInput = {
  /** The label for the link. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** The order of the item in the entities resources list. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The URL of the link. */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Comparator for estimates. */
export type EstimateComparator = {
  /** Compound filters, one of which need to be matched by the estimate. */
  and?: InputMaybe<Array<NullableNumberComparator>>;
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['Float']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Compound filters, all of which need to be matched by the estimate. */
  or?: InputMaybe<Array<NullableNumberComparator>>;
};

/** Issue estimate sorting options. */
export type EstimateSort = {
  /** Whether nulls should be sorted first or last */
  nulls?: InputMaybe<PaginationNulls>;
  /** The order for the individual sort */
  order?: InputMaybe<PaginationSortOrder>;
};

/** An external authenticated (e.g., through Slack) user which doesn't have a Linear account, but can create and update entities in Linear from the external system that authenticated them. */
export type ExternalUser = Node & {
  __typename?: 'ExternalUser';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** An URL to the external user's avatar image. */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The external user's display name. Unique within each organization. Can match the display name of an actual user. */
  displayName: Scalars['String']['output'];
  /** The external user's email address. */
  email?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The last time the external user was seen interacting with Linear. */
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  /** The external user's full name. */
  name: Scalars['String']['output'];
  /** Organization the external user belongs to. */
  organization: Organization;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type ExternalUserConnection = {
  __typename?: 'ExternalUserConnection';
  edges: Array<ExternalUserEdge>;
  nodes: Array<ExternalUser>;
  pageInfo: PageInfo;
};

export type ExternalUserEdge = {
  __typename?: 'ExternalUserEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ExternalUser;
};

/** A facet. Facets are joins between entities. A facet can tie a custom view to a project, or a a project to a roadmap for example. */
export type Facet = Node & {
  __typename?: 'Facet';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The sort order of the facet. */
  sortOrder: Scalars['Float']['output'];
  /** The owning initiative. */
  sourceInitiative?: Maybe<Initiative>;
  /** The owning organization. */
  sourceOrganization?: Maybe<Organization>;
  /** The owning page. */
  sourcePage?: Maybe<FacetPageSource>;
  /** The owning project. */
  sourceProject?: Maybe<Project>;
  /** The owning team. */
  sourceTeam?: Maybe<Team>;
  /** The targeted custom view. */
  targetCustomView?: Maybe<CustomView>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type FacetConnection = {
  __typename?: 'FacetConnection';
  edges: Array<FacetEdge>;
  nodes: Array<Facet>;
  pageInfo: PageInfo;
};

export type FacetEdge = {
  __typename?: 'FacetEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Facet;
};

export enum FacetPageSource {
  Projects = 'projects'
}

/** User favorites presented in the sidebar. */
export type Favorite = Node & {
  __typename?: 'Favorite';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Children of the favorite. Only applies to favorites of type folder. */
  children: FavoriteConnection;
  /** [Internal] Returns the color of the favorite's icon. Unavailable for avatars and views with fixed icons (e.g. cycle). */
  color?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The favorited custom view. */
  customView?: Maybe<CustomView>;
  /** The favorited cycle. */
  cycle?: Maybe<Cycle>;
  /** [Internal] Detail text for favorite's `title` (e.g. team's name for a project). */
  detail?: Maybe<Scalars['String']['output']>;
  /** The favorited document. */
  document?: Maybe<Document>;
  /** [INTERNAL] The favorited facet. */
  facet?: Maybe<Facet>;
  /** The name of the folder. Only applies to favorites of type folder. */
  folderName?: Maybe<Scalars['String']['output']>;
  /** [Internal] Name of the favorite's icon. Unavailable for standard views, issues, and avatars */
  icon?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The favorited initiative. */
  initiative?: Maybe<Initiative>;
  /** The targeted tab of the initiative. */
  initiativeTab?: Maybe<InitiativeTab>;
  /** The favorited issue. */
  issue?: Maybe<Issue>;
  /** The favorited label. */
  label?: Maybe<IssueLabel>;
  /** The owner of the favorite. */
  owner: User;
  /** The parent folder of the favorite. */
  parent?: Maybe<Favorite>;
  /** The team of the favorited predefined view. */
  predefinedViewTeam?: Maybe<Team>;
  /** The type of favorited predefined view. */
  predefinedViewType?: Maybe<Scalars['String']['output']>;
  /** The favorited project. */
  project?: Maybe<Project>;
  /** The targeted tab of the project. */
  projectTab?: Maybe<ProjectTab>;
  /** [DEPRECATED] The favorited team of the project. */
  projectTeam?: Maybe<Team>;
  /** The favorited roadmap. */
  roadmap?: Maybe<Roadmap>;
  /** The order of the item in the favorites list. */
  sortOrder: Scalars['Float']['output'];
  /** [Internal] Favorite's title text (name of the favorite'd object or folder). */
  title: Scalars['String']['output'];
  /** The type of the favorite. */
  type: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** URL of the favorited entity. Folders return 'null' value. */
  url?: Maybe<Scalars['String']['output']>;
  /** The favorited user. */
  user?: Maybe<User>;
};


/** User favorites presented in the sidebar. */
export type FavoriteChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type FavoriteConnection = {
  __typename?: 'FavoriteConnection';
  edges: Array<FavoriteEdge>;
  nodes: Array<Favorite>;
  pageInfo: PageInfo;
};

export type FavoriteCreateInput = {
  /** The identifier of the custom view to favorite. */
  customViewId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the cycle to favorite. */
  cycleId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the document to favorite. */
  documentId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the facet to favorite. */
  facetId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the favorite folder. */
  folderName?: InputMaybe<Scalars['String']['input']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** [INTERNAL] The identifier of the initiative to favorite. */
  initiativeId?: InputMaybe<Scalars['String']['input']>;
  /** The tab of the initiative to favorite. */
  initiativeTab?: InputMaybe<InitiativeTab>;
  /** The identifier of the issue to favorite. */
  issueId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the label to favorite. */
  labelId?: InputMaybe<Scalars['String']['input']>;
  /** The parent folder of the favorite. */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of team for the predefined view to favorite. */
  predefinedViewTeamId?: InputMaybe<Scalars['String']['input']>;
  /** The type of the predefined view to favorite. */
  predefinedViewType?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the project to favorite. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The tab of the project to favorite. */
  projectTab?: InputMaybe<ProjectTab>;
  /** The identifier of the roadmap to favorite. */
  roadmapId?: InputMaybe<Scalars['String']['input']>;
  /** The position of the item in the favorites list. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The identifier of the user to favorite. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type FavoriteEdge = {
  __typename?: 'FavoriteEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Favorite;
};

export type FavoritePayload = {
  __typename?: 'FavoritePayload';
  /** The object that was added as a favorite. */
  favorite: Favorite;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type FavoriteUpdateInput = {
  /** The name of the favorite folder. */
  folderName?: InputMaybe<Scalars['String']['input']>;
  /** The identifier (in UUID v4 format) of the folder to move the favorite under. */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** The position of the item in the favorites list. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
};

/** A feature flag for a project. */
export type FeatureFlag = Node & {
  __typename?: 'FeatureFlag';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the feature flag. */
  creator?: Maybe<User>;
  /** The description of the feature flag. */
  description?: Maybe<Scalars['String']['output']>;
  /** Url to the feature flag provider's page about the feature flag. */
  externalUrl: Scalars['String']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The integration providing the feature flag. */
  integration: Integration;
  /** Whether the feature flag is enabled. */
  isEnabled: Scalars['Boolean']['output'];
  /** The unique key as defined by the feature flag provider. */
  key: Scalars['String']['output'];
  /** The description of the feature flag. */
  lastStageUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user who last changed the stage of the feature flag. */
  lastStageUpdatedBy?: Maybe<User>;
  /** The organization of the feature flag. */
  organization: Organization;
  /** The pending rollout stage for the feature flag. */
  pendingRolloutStage?: Maybe<FeatureFlagRolloutStage>;
  /** The project the feature flag is associated with. */
  project?: Maybe<Project>;
  /** The rollout stage of the feature flag, should be defined for all feature flags in use. */
  rolloutStage: FeatureFlagRolloutStage;
  /** The status of the feature flag. */
  status: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type FeatureFlagConnection = {
  __typename?: 'FeatureFlagConnection';
  edges: Array<FeatureFlagEdge>;
  nodes: Array<FeatureFlag>;
  pageInfo: PageInfo;
};

export type FeatureFlagEdge = {
  __typename?: 'FeatureFlagEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: FeatureFlag;
};

/** A rollout stage for a feature flag. */
export type FeatureFlagRolloutStage = Node & {
  __typename?: 'FeatureFlagRolloutStage';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The description of the rollout stage. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The integration providing the feature flag. */
  integration: Integration;
  /** The name of the rollout stage. */
  name: Scalars['String']['output'];
  /** The organization of the feature flag rollout stage. */
  organization: Organization;
  /** Which feature flag provider segments this rollout stage is associated with. */
  segmentKeys: Array<Scalars['String']['output']>;
  /** The order of the rollout stages within an organization. */
  sortOrder: Scalars['Float']['output'];
  /** The type of the feature flag rollout stage. */
  type: FeatureFlagRolloutStageType;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type FeatureFlagRolloutStageConnection = {
  __typename?: 'FeatureFlagRolloutStageConnection';
  edges: Array<FeatureFlagRolloutStageEdge>;
  nodes: Array<FeatureFlagRolloutStage>;
  pageInfo: PageInfo;
};

export type FeatureFlagRolloutStageEdge = {
  __typename?: 'FeatureFlagRolloutStageEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: FeatureFlagRolloutStage;
};

/** The type of a feature flag rollout stage. */
export enum FeatureFlagRolloutStageType {
  Dev = 'dev',
  Full = 'full',
  Internal = 'internal',
  Partial = 'partial'
}

export type FrontAttachmentPayload = {
  __typename?: 'FrontAttachmentPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Front specific settings. */
export type FrontSettings = {
  __typename?: 'FrontSettings';
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: Maybe<Scalars['Boolean']['output']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: Maybe<Scalars['Boolean']['output']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: Maybe<Scalars['Boolean']['output']>;
};

export type FrontSettingsInput = {
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A trigger that updates the issue status according to Git automations. */
export type GitAutomationState = Node & {
  __typename?: 'GitAutomationState';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * [DEPRECATED] The target branch, if null, the automation will be triggered on any branch.
   * @deprecated Use targetBranch instead.
   */
  branchPattern?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The event that triggers the automation. */
  event: GitAutomationStates;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The associated workflow state. */
  state?: Maybe<WorkflowState>;
  /** The target branch associated to this automation state. */
  targetBranch?: Maybe<GitAutomationTargetBranch>;
  /** The team to which this automation state belongs. */
  team: Team;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type GitAutomationStateConnection = {
  __typename?: 'GitAutomationStateConnection';
  edges: Array<GitAutomationStateEdge>;
  nodes: Array<GitAutomationState>;
  pageInfo: PageInfo;
};

export type GitAutomationStateCreateInput = {
  /** [DEPRECATED] The target branch pattern. If null, all branches are targeted. */
  branchPattern?: InputMaybe<Scalars['String']['input']>;
  /** The event that triggers the automation. */
  event: GitAutomationStates;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The associated workflow state. If null, will override default behaviour and take no action. */
  stateId?: InputMaybe<Scalars['String']['input']>;
  /** The associated target branch. If null, all branches are targeted. */
  targetBranchId?: InputMaybe<Scalars['String']['input']>;
  /** The team associated with the automation state. */
  teamId: Scalars['String']['input'];
};

export type GitAutomationStateEdge = {
  __typename?: 'GitAutomationStateEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: GitAutomationState;
};

export type GitAutomationStatePayload = {
  __typename?: 'GitAutomationStatePayload';
  /** The automation state that was created or updated. */
  gitAutomationState: GitAutomationState;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type GitAutomationStateUpdateInput = {
  /** [DEPRECATED] The target branch pattern. If null, all branches are targeted. */
  branchPattern?: InputMaybe<Scalars['String']['input']>;
  /** The event that triggers the automation. */
  event?: InputMaybe<GitAutomationStates>;
  /** The associated workflow state. */
  stateId?: InputMaybe<Scalars['String']['input']>;
  /** The associated target branch. If null, all branches are targeted. */
  targetBranchId?: InputMaybe<Scalars['String']['input']>;
};

/** The various states of a pull/merge request. */
export enum GitAutomationStates {
  Draft = 'draft',
  Merge = 'merge',
  Mergeable = 'mergeable',
  Review = 'review',
  Start = 'start'
}

/** A Git target branch for which there are automations (GitAutomationState). */
export type GitAutomationTargetBranch = Node & {
  __typename?: 'GitAutomationTargetBranch';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Automation states associated with the target branch. */
  automationStates: GitAutomationStateConnection;
  /** The target branch pattern. */
  branchPattern: Scalars['String']['output'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Whether the branch pattern is a regular expression. */
  isRegex: Scalars['Boolean']['output'];
  /** The team to which this Git target branch automation belongs. */
  team: Team;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};


/** A Git target branch for which there are automations (GitAutomationState). */
export type GitAutomationTargetBranchAutomationStatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type GitAutomationTargetBranchCreateInput = {
  /** The target branch pattern. */
  branchPattern: Scalars['String']['input'];
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Whether the branch pattern is a regular expression. */
  isRegex?: InputMaybe<Scalars['Boolean']['input']>;
  /** The team associated with the Git target branch automation. */
  teamId: Scalars['String']['input'];
};

export type GitAutomationTargetBranchPayload = {
  __typename?: 'GitAutomationTargetBranchPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The Git target branch automation that was created or updated. */
  targetBranch: GitAutomationTargetBranch;
};

export type GitAutomationTargetBranchUpdateInput = {
  /** The target branch pattern. */
  branchPattern?: InputMaybe<Scalars['String']['input']>;
  /** Whether the branch pattern is a regular expression. */
  isRegex?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GitHubCommitIntegrationPayload = {
  __typename?: 'GitHubCommitIntegrationPayload';
  /** The integration that was created or updated. */
  integration?: Maybe<Integration>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The webhook secret to provide to GitHub. */
  webhookSecret: Scalars['String']['output'];
};

export type GitHubEnterpriseServerInstallVerificationPayload = {
  __typename?: 'GitHubEnterpriseServerInstallVerificationPayload';
  /** Has the install been successful. */
  success: Scalars['Boolean']['output'];
};

export type GitHubEnterpriseServerPayload = {
  __typename?: 'GitHubEnterpriseServerPayload';
  /** The app install address. */
  installUrl: Scalars['String']['output'];
  /** The integration that was created or updated. */
  integration?: Maybe<Integration>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The setup address. */
  setupUrl: Scalars['String']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The webhook secret to provide to GitHub. */
  webhookSecret: Scalars['String']['output'];
};

/** Metadata and settings for a GitHub import integration. */
export type GitHubImportSettings = {
  __typename?: 'GitHubImportSettings';
  /** A map storing all available issue labels per repository */
  labels?: Maybe<Scalars['JSONObject']['output']>;
  /** The avatar URL for the GitHub organization. */
  orgAvatarUrl: Scalars['String']['output'];
  /** The GitHub organization's name. */
  orgLogin: Scalars['String']['output'];
  /** The type of Github org */
  orgType: GithubOrgType;
  /** The names of the repositories connected for the GitHub integration. */
  repositories: Array<GitHubRepo>;
};

export type GitHubImportSettingsInput = {
  /** A map storing all available issue labels per repository */
  labels?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The avatar URL for the GitHub organization. */
  orgAvatarUrl: Scalars['String']['input'];
  /** The GitHub organization's name. */
  orgLogin: Scalars['String']['input'];
  /** The type of Github org */
  orgType: GithubOrgType;
  /** The names of the repositories connected for the GitHub integration. */
  repositories: Array<GitHubRepoInput>;
};

/** Metadata and settings for a GitHub Personal integration. */
export type GitHubPersonalSettings = {
  __typename?: 'GitHubPersonalSettings';
  /** The GitHub user's name. */
  login: Scalars['String']['output'];
};

export type GitHubPersonalSettingsInput = {
  /** The GitHub user's name. */
  login: Scalars['String']['input'];
};

/** GitHub repos available to sync. */
export type GitHubRepo = {
  __typename?: 'GitHubRepo';
  /** The full name of the repository. */
  fullName: Scalars['String']['output'];
  /** The GitHub repo id. */
  id: Scalars['Float']['output'];
};

export type GitHubRepoInput = {
  /** The full name of the repository. */
  fullName: Scalars['String']['input'];
  /** The GitHub repo id. */
  id: Scalars['Float']['input'];
};

/** Mapping of Linear teams to GitHub repos. */
export type GitHubRepoMapping = {
  __typename?: 'GitHubRepoMapping';
  /** Whether the sync for this mapping is bidirectional. */
  bidirectional?: Maybe<Scalars['Boolean']['output']>;
  /** Whether this mapping is the default one for issue creation. */
  default?: Maybe<Scalars['Boolean']['output']>;
  /** Labels to filter incoming GitHub issue creation by. */
  gitHubLabels?: Maybe<Array<Scalars['String']['output']>>;
  /** The GitHub repo id. */
  gitHubRepoId: Scalars['Float']['output'];
  /** The Linear team id to map to the given project. */
  linearTeamId: Scalars['String']['output'];
};

export type GitHubRepoMappingInput = {
  /** Whether the sync for this mapping is bidirectional. */
  bidirectional?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether this mapping is the default one for issue creation. */
  default?: InputMaybe<Scalars['Boolean']['input']>;
  /** Labels to filter incoming GitHub issue creation by. */
  gitHubLabels?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The GitHub repo id. */
  gitHubRepoId: Scalars['Float']['input'];
  /** The Linear team id to map to the given project. */
  linearTeamId: Scalars['String']['input'];
};

/** Metadata and settings for a GitHub integration. */
export type GitHubSettings = {
  __typename?: 'GitHubSettings';
  /** The avatar URL for the GitHub organization. */
  orgAvatarUrl?: Maybe<Scalars['String']['output']>;
  /** The GitHub organization's name. */
  orgLogin: Scalars['String']['output'];
  /** The type of Github org */
  orgType?: Maybe<GithubOrgType>;
  /** The names of the repositories connected for the GitHub integration. */
  repositories?: Maybe<Array<GitHubRepo>>;
  /** Mapping of team to repository for syncing. */
  repositoriesMapping?: Maybe<Array<GitHubRepoMapping>>;
};

export type GitHubSettingsInput = {
  /** The avatar URL for the GitHub organization. */
  orgAvatarUrl?: InputMaybe<Scalars['String']['input']>;
  /** The GitHub organization's name. */
  orgLogin: Scalars['String']['input'];
  /** The type of Github org */
  orgType?: InputMaybe<GithubOrgType>;
  /** The names of the repositories connected for the GitHub integration. */
  repositories?: InputMaybe<Array<GitHubRepoInput>>;
  /** Mapping of team to repository for syncing. */
  repositoriesMapping?: InputMaybe<Array<GitHubRepoMappingInput>>;
};

export type GitLabIntegrationCreatePayload = {
  __typename?: 'GitLabIntegrationCreatePayload';
  /** The integration that was created or updated. */
  integration?: Maybe<Integration>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The webhook secret to provide to GitLab. */
  webhookSecret: Scalars['String']['output'];
};

/** Metadata and settings for a GitLab integration. */
export type GitLabSettings = {
  __typename?: 'GitLabSettings';
  /** The ISO timestamp the GitLab access token expires. */
  expiresAt?: Maybe<Scalars['String']['output']>;
  /** Whether the token is limited to a read-only scope. */
  readonly?: Maybe<Scalars['Boolean']['output']>;
  /** The self-hosted URL of the GitLab instance. */
  url?: Maybe<Scalars['String']['output']>;
};

export type GitLabSettingsInput = {
  /** The ISO timestamp the GitLab access token expires. */
  expiresAt?: InputMaybe<Scalars['String']['input']>;
  /** Whether the token is limited to a read-only scope. */
  readonly?: InputMaybe<Scalars['Boolean']['input']>;
  /** The self-hosted URL of the GitLab instance. */
  url?: InputMaybe<Scalars['String']['input']>;
};

export enum GithubOrgType {
  Organization = 'organization',
  User = 'user'
}

/** Google Sheets specific settings. */
export type GoogleSheetsSettings = {
  __typename?: 'GoogleSheetsSettings';
  sheetId: Scalars['Float']['output'];
  spreadsheetId: Scalars['String']['output'];
  spreadsheetUrl: Scalars['String']['output'];
  updatedIssuesAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GoogleSheetsSettingsInput = {
  sheetId: Scalars['Float']['input'];
  spreadsheetId: Scalars['String']['input'];
  spreadsheetUrl: Scalars['String']['input'];
  updatedIssuesAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GoogleUserAccountAuthInput = {
  /** Code returned from Google's OAuth flow. */
  code: Scalars['String']['input'];
  /** An optional parameter to disable new user signup and force login. Default: false. */
  disallowSignup?: InputMaybe<Scalars['Boolean']['input']>;
  /** An optional invite link for an organization used to populate available organizations. */
  inviteLink?: InputMaybe<Scalars['String']['input']>;
  /** The URI to redirect the user to. */
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  /** Signup code. */
  signupCode?: InputMaybe<Scalars['String']['input']>;
  /** The identifiers of the teams to auto-join. */
  teamIdsToJoin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The timezone of the user's browser. */
  timezone: Scalars['String']['input'];
};

/** Comparator for identifiers. */
export type IdComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['ID']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['ID']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ImageUploadFromUrlPayload = {
  __typename?: 'ImageUploadFromUrlPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The URL containing the image. */
  url?: Maybe<Scalars['String']['output']>;
};

/** An initiative to group projects. */
export type Initiative = Node & {
  __typename?: 'Initiative';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The initiative's color. */
  color?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the initiative. */
  creator?: Maybe<User>;
  /** The description of the initiative. */
  description?: Maybe<Scalars['String']['output']>;
  /** The icon of the initiative. */
  icon?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Links associated with the initiative. */
  links: EntityExternalLinkConnection;
  /** The name of the initiative. */
  name: Scalars['String']['output'];
  /** The organization of the initiative. */
  organization: Organization;
  /** The user who owns the initiative. */
  owner?: Maybe<User>;
  /** Projects associated with the initiative. */
  projects: ProjectConnection;
  /** The initiative's unique URL slug. */
  slugId: Scalars['String']['output'];
  /** The sort order of the initiative within the organization. */
  sortOrder: Scalars['Float']['output'];
  /** The status of the initiative. One of Planned, Active, Completed */
  status: InitiativeStatus;
  /** The estimated completion date of the initiative. */
  targetDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** The resolution of the initiative's estimated completion date. */
  targetDateResolution?: Maybe<DateResolutionType>;
  /** A flag that indicates whether the initiative is in the trash bin. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};


/** An initiative to group projects. */
export type InitiativeLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An initiative to group projects. */
export type InitiativeProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type InitiativeArchivePayload = ArchivePayload & {
  __typename?: 'InitiativeArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Initiative>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Initiative collection filtering options. */
export type InitiativeCollectionFilter = {
  /** Compound filters, all of which need to be matched by the initiative. */
  and?: InputMaybe<Array<InitiativeCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the initiative creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Filters that needs to be matched by all initiatives. */
  every?: InputMaybe<InitiativeFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Comparator for the initiative name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the initiative. */
  or?: InputMaybe<Array<InitiativeCollectionFilter>>;
  /** Comparator for the initiative slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Filters that needs to be matched by some initiatives. */
  some?: InputMaybe<InitiativeFilter>;
  /** Comparator for the initiative status. */
  status?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type InitiativeConnection = {
  __typename?: 'InitiativeConnection';
  edges: Array<InitiativeEdge>;
  nodes: Array<Initiative>;
  pageInfo: PageInfo;
};

/** The properties of the initiative to create. */
export type InitiativeCreateInput = {
  /** The initiative's color. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the initiative. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The initiative's icon. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the initiative. */
  name: Scalars['String']['input'];
  /** The owner of the initiative. */
  ownerId?: InputMaybe<Scalars['String']['input']>;
  /** The sort order of the initiative within the organization. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The initiative's status. */
  status?: InputMaybe<InitiativeStatus>;
  /** The estimated completion date of the initiative. */
  targetDate?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** The resolution of the initiative's estimated completion date. */
  targetDateResolution?: InputMaybe<DateResolutionType>;
};

export type InitiativeEdge = {
  __typename?: 'InitiativeEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Initiative;
};

/** Initiative filtering options. */
export type InitiativeFilter = {
  /** Compound filters, all of which need to be matched by the initiative. */
  and?: InputMaybe<Array<InitiativeFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the initiative creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the initiative name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the initiative. */
  or?: InputMaybe<Array<InitiativeFilter>>;
  /** Comparator for the initiative slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Comparator for the initiative status. */
  status?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** An initiative related notification. */
export type InitiativeNotification = Entity & Node & Notification & {
  __typename?: 'InitiativeNotification';
  /** The user that caused the notification. */
  actor?: Maybe<User>;
  /** [Internal] Notification actor initials if avatar is not available. */
  actorAvatarColor?: Maybe<Scalars['String']['output']>;
  /** [Internal] Notification avatar URL. */
  actorAvatarUrl?: Maybe<Scalars['String']['output']>;
  /** [Internal] Notification actor initials if avatar is not available. */
  actorInitials?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The bot that caused the notification. */
  botActor?: Maybe<ActorBot>;
  /** Related comment ID. Null if the notification is not related to a comment. */
  commentId?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The external user that caused the notification. */
  externalUserActor?: Maybe<ExternalUser>;
  /** [Internal] Notifications with the same grouping key will be grouped together in the UI. */
  groupingKey: Scalars['String']['output'];
  /** [Internal] Priority of the notification with the same grouping key. Higher number means higher priority. If priority is the same, notifications should be sorted by `createdAt`. */
  groupingPriority: Scalars['Float']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** [Internal] Inbox URL for the notification. */
  inboxUrl: Scalars['String']['output'];
  /** Related initiative ID. */
  initiativeId: Scalars['String']['output'];
  /** [Internal] If notification actor was Linear. */
  isLinearActor: Scalars['Boolean']['output'];
  /** [Internal] Issue's status type for issue notifications. */
  issueStatusType?: Maybe<Scalars['String']['output']>;
  /** Related parent comment ID. Null if the notification is not related to a comment. */
  parentCommentId?: Maybe<Scalars['String']['output']>;
  /** [Internal] Project update health for new updates. */
  projectUpdateHealth?: Maybe<Scalars['String']['output']>;
  /** Name of the reaction emoji related to the notification. */
  reactionEmoji?: Maybe<Scalars['String']['output']>;
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** [Internal] Notification subtitle. */
  subtitle: Scalars['String']['output'];
  /** [Internal] Notification title. */
  title: Scalars['String']['output'];
  /** Notification type. */
  type: Scalars['String']['output'];
  /** The time at which a notification was unsnoozed.. */
  unsnoozedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** [Internal] URL to the target of the notification. */
  url: Scalars['String']['output'];
  /** The user that received the notification. */
  user: User;
};

/** An initiative notification subscription. */
export type InitiativeNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'InitiativeNotificationSubscription';
  /** Whether the subscription is active or not. */
  active: Scalars['Boolean']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The initiative subscribed to. */
  initiative: Initiative;
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']['output']>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

/** The payload returned by the initiative mutations. */
export type InitiativePayload = {
  __typename?: 'InitiativePayload';
  /** The initiative that was created or updated. */
  initiative: Initiative;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export enum InitiativeStatus {
  Active = 'Active',
  Completed = 'Completed',
  Planned = 'Planned'
}

/** Different tabs available inside an initiative. */
export enum InitiativeTab {
  Overview = 'overview',
  Projects = 'projects'
}

/** Join table between projects and initiatives. */
export type InitiativeToProject = Node & {
  __typename?: 'InitiativeToProject';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The initiative that the project is associated with. */
  initiative: Initiative;
  /** The project that the initiative is associated with. */
  project: Project;
  /** The sort order of the project within the initiative. */
  sortOrder: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type InitiativeToProjectConnection = {
  __typename?: 'InitiativeToProjectConnection';
  edges: Array<InitiativeToProjectEdge>;
  nodes: Array<InitiativeToProject>;
  pageInfo: PageInfo;
};

/** The properties of the initiativeToProject to create. */
export type InitiativeToProjectCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the initiative. */
  initiativeId: Scalars['String']['input'];
  /** The identifier of the project. */
  projectId: Scalars['String']['input'];
  /** The sort order for the project within its organization. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
};

export type InitiativeToProjectEdge = {
  __typename?: 'InitiativeToProjectEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: InitiativeToProject;
};

/** The result of a initiativeToProject mutation. */
export type InitiativeToProjectPayload = {
  __typename?: 'InitiativeToProjectPayload';
  /** The initiativeToProject that was created or updated. */
  initiativeToProject: InitiativeToProject;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** The properties of the initiativeToProject to update. */
export type InitiativeToProjectUpdateInput = {
  /** The sort order for the project within its organization. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
};

/** The properties of the initiative to update. */
export type InitiativeUpdateInput = {
  /** The initiative's color. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the initiative. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The initiative's icon. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** The name of the initiative. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The owner of the initiative. */
  ownerId?: InputMaybe<Scalars['String']['input']>;
  /** The sort order of the initiative within the organization. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The initiative's status. */
  status?: InputMaybe<InitiativeStatus>;
  /** The estimated completion date of the initiative. */
  targetDate?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** The resolution of the initiative's estimated completion date. */
  targetDateResolution?: InputMaybe<DateResolutionType>;
  /** Whether the initiative has been trashed. */
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An integration with an external service. */
export type Integration = Node & {
  __typename?: 'Integration';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user that added the integration. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The organization that the integration is associated with. */
  organization: Organization;
  /** The integration's type. */
  service: Scalars['String']['output'];
  /** The team that the integration is associated with. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type IntegrationConnection = {
  __typename?: 'IntegrationConnection';
  edges: Array<IntegrationEdge>;
  nodes: Array<Integration>;
  pageInfo: PageInfo;
};

export type IntegrationEdge = {
  __typename?: 'IntegrationEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Integration;
};

export type IntegrationHasScopesPayload = {
  __typename?: 'IntegrationHasScopesPayload';
  /** Whether the integration has the required scopes. */
  hasAllScopes: Scalars['Boolean']['output'];
  /** The missing scopes. */
  missingScopes?: Maybe<Array<Scalars['String']['output']>>;
};

export type IntegrationPayload = {
  __typename?: 'IntegrationPayload';
  /** The integration that was created or updated. */
  integration?: Maybe<Integration>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type IntegrationRequestInput = {
  /** Email associated with the request. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Name of the requested integration. */
  name: Scalars['String']['input'];
};

export type IntegrationRequestPayload = {
  __typename?: 'IntegrationRequestPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Linear supported integration services. */
export enum IntegrationService {
  Airbyte = 'airbyte',
  Discord = 'discord',
  Email = 'email',
  Figma = 'figma',
  FigmaPlugin = 'figmaPlugin',
  Front = 'front',
  Github = 'github',
  GithubCommit = 'githubCommit',
  GithubEnterpriseServer = 'githubEnterpriseServer',
  GithubImport = 'githubImport',
  GithubPersonal = 'githubPersonal',
  Gitlab = 'gitlab',
  GoogleCalendarPersonal = 'googleCalendarPersonal',
  GoogleSheets = 'googleSheets',
  Intercom = 'intercom',
  Jira = 'jira',
  JiraPersonal = 'jiraPersonal',
  LaunchDarkly = 'launchDarkly',
  Loom = 'loom',
  Notion = 'notion',
  Opsgenie = 'opsgenie',
  PagerDuty = 'pagerDuty',
  Sentry = 'sentry',
  Slack = 'slack',
  SlackAsks = 'slackAsks',
  SlackCustomViewNotifications = 'slackCustomViewNotifications',
  SlackOrgProjectUpdatesPost = 'slackOrgProjectUpdatesPost',
  SlackPersonal = 'slackPersonal',
  SlackPost = 'slackPost',
  SlackProjectPost = 'slackProjectPost',
  SlackProjectUpdatesPost = 'slackProjectUpdatesPost',
  Zendesk = 'zendesk'
}

/** The integration resource's settings. */
export type IntegrationSettings = {
  __typename?: 'IntegrationSettings';
  front?: Maybe<FrontSettings>;
  gitHub?: Maybe<GitHubSettings>;
  gitHubImport?: Maybe<GitHubImportSettings>;
  gitHubPersonal?: Maybe<GitHubPersonalSettings>;
  gitLab?: Maybe<GitLabSettings>;
  googleSheets?: Maybe<GoogleSheetsSettings>;
  intercom?: Maybe<IntercomSettings>;
  jira?: Maybe<JiraSettings>;
  jiraPersonal?: Maybe<JiraPersonalSettings>;
  launchDarkly?: Maybe<LaunchDarklySettings>;
  notion?: Maybe<NotionSettings>;
  opsgenie?: Maybe<OpsgenieSettings>;
  pagerDuty?: Maybe<PagerDutySettings>;
  sentry?: Maybe<SentrySettings>;
  slack?: Maybe<SlackSettings>;
  slackAsks?: Maybe<SlackAsksSettings>;
  slackCustomViewNotifications?: Maybe<SlackPostSettings>;
  slackOrgProjectUpdatesPost?: Maybe<SlackPostSettings>;
  slackPost?: Maybe<SlackPostSettings>;
  slackProjectPost?: Maybe<SlackPostSettings>;
  zendesk?: Maybe<ZendeskSettings>;
};

export type IntegrationSettingsInput = {
  front?: InputMaybe<FrontSettingsInput>;
  gitHub?: InputMaybe<GitHubSettingsInput>;
  gitHubImport?: InputMaybe<GitHubImportSettingsInput>;
  gitHubPersonal?: InputMaybe<GitHubPersonalSettingsInput>;
  gitLab?: InputMaybe<GitLabSettingsInput>;
  googleSheets?: InputMaybe<GoogleSheetsSettingsInput>;
  intercom?: InputMaybe<IntercomSettingsInput>;
  jira?: InputMaybe<JiraSettingsInput>;
  jiraPersonal?: InputMaybe<JiraPersonalSettingsInput>;
  launchDarkly?: InputMaybe<LaunchDarklySettingsInput>;
  notion?: InputMaybe<NotionSettingsInput>;
  opsgenie?: InputMaybe<OpsgenieInput>;
  pagerDuty?: InputMaybe<PagerDutyInput>;
  sentry?: InputMaybe<SentrySettingsInput>;
  slack?: InputMaybe<SlackSettingsInput>;
  slackAsks?: InputMaybe<SlackAsksSettingsInput>;
  slackCustomViewNotifications?: InputMaybe<SlackPostSettingsInput>;
  slackOrgProjectUpdatesPost?: InputMaybe<SlackPostSettingsInput>;
  slackPost?: InputMaybe<SlackPostSettingsInput>;
  slackProjectPost?: InputMaybe<SlackPostSettingsInput>;
  zendesk?: InputMaybe<ZendeskSettingsInput>;
};

/** Join table between templates and integrations. */
export type IntegrationTemplate = Node & {
  __typename?: 'IntegrationTemplate';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** ID of the foreign entity in the external integration this template is for, e.g., Slack channel ID. */
  foreignEntityId?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The integration that the template is associated with. */
  integration: Integration;
  /** The template that the integration is associated with. */
  template: Template;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type IntegrationTemplateConnection = {
  __typename?: 'IntegrationTemplateConnection';
  edges: Array<IntegrationTemplateEdge>;
  nodes: Array<IntegrationTemplate>;
  pageInfo: PageInfo;
};

export type IntegrationTemplateCreateInput = {
  /** The foreign identifier in the other service. */
  foreignEntityId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the integration. */
  integrationId: Scalars['String']['input'];
  /** The identifier of the template. */
  templateId: Scalars['String']['input'];
};

export type IntegrationTemplateEdge = {
  __typename?: 'IntegrationTemplateEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: IntegrationTemplate;
};

export type IntegrationTemplatePayload = {
  __typename?: 'IntegrationTemplatePayload';
  /** The IntegrationTemplate that was created or updated. */
  integrationTemplate: IntegrationTemplate;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** The configuration of all integrations for a project or a team. */
export type IntegrationsSettings = Node & {
  __typename?: 'IntegrationsSettings';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Project which those settings apply to. */
  project?: Maybe<Project>;
  /** Whether to send a Slack message when a new issue is added to triage. */
  slackIssueAddedToTriage?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a Slack message when an issue is added to the custom view. */
  slackIssueAddedToView?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Whether to send a Slack message when a new issue is created for the project or the team.
   * @deprecated No longer in use. Use `slackIssueAddedToView` instead.
   */
  slackIssueCreated?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a Slack message when a comment is created on any of the project or team's issues. */
  slackIssueNewComment?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a Slack message when an SLA is breached. */
  slackIssueSlaBreached?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a Slack message when an SLA is at high risk. */
  slackIssueSlaHighRisk?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a Slack message when any of the project or team's issues has a change in status. */
  slackIssueStatusChangedAll?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a Slack message when any of the project or team's issues change to completed or cancelled. */
  slackIssueStatusChangedDone?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a Slack message when a project update is created. */
  slackProjectUpdateCreated?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a new project update to team Slack channels. */
  slackProjectUpdateCreatedToTeam?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to send a new project update to workspace Slack channel. */
  slackProjectUpdateCreatedToWorkspace?: Maybe<Scalars['Boolean']['output']>;
  /** Team which those settings apply to. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type IntegrationsSettingsConnection = {
  __typename?: 'IntegrationsSettingsConnection';
  edges: Array<IntegrationsSettingsEdge>;
  nodes: Array<IntegrationsSettings>;
  pageInfo: PageInfo;
};

export type IntegrationsSettingsCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the project to create settings for. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** Whether to send a Slack message when a new issue is added to triage. */
  slackIssueAddedToTriage?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when an issue is added to a view. */
  slackIssueAddedToView?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a new issue is created for the project or the team. */
  slackIssueCreated?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a comment is created on any of the project or team's issues. */
  slackIssueNewComment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to receive notification when an SLA has breached on Slack. */
  slackIssueSlaBreached?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when an SLA is at high risk. */
  slackIssueSlaHighRisk?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when any of the project or team's issues has a change in status. */
  slackIssueStatusChangedAll?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when any of the project or team's issues change to completed or cancelled. */
  slackIssueStatusChangedDone?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a project update is created. */
  slackProjectUpdateCreated?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a project update is created to team channels. */
  slackProjectUpdateCreatedToTeam?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a project update is created to workspace channel. */
  slackProjectUpdateCreatedToWorkspace?: InputMaybe<Scalars['Boolean']['input']>;
  /** The identifier of the team to create settings for. */
  teamId?: InputMaybe<Scalars['String']['input']>;
};

export type IntegrationsSettingsEdge = {
  __typename?: 'IntegrationsSettingsEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: IntegrationsSettings;
};

export type IntegrationsSettingsPayload = {
  __typename?: 'IntegrationsSettingsPayload';
  /** The settings that were created or updated. */
  integrationsSettings: IntegrationsSettings;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type IntegrationsSettingsUpdateInput = {
  /** Whether to send a Slack message when a new issue is added to triage. */
  slackIssueAddedToTriage?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when an issue is added to a view. */
  slackIssueAddedToView?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a new issue is created for the project or the team. */
  slackIssueCreated?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a comment is created on any of the project or team's issues. */
  slackIssueNewComment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to receive notification when an SLA has breached on Slack. */
  slackIssueSlaBreached?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when an SLA is at high risk. */
  slackIssueSlaHighRisk?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when any of the project or team's issues has a change in status. */
  slackIssueStatusChangedAll?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when any of the project or team's issues change to completed or cancelled. */
  slackIssueStatusChangedDone?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a project update is created. */
  slackProjectUpdateCreated?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a project update is created to team channels. */
  slackProjectUpdateCreatedToTeam?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send a Slack message when a project update is created to workspace channel. */
  slackProjectUpdateCreatedToWorkspace?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Intercom specific settings. */
export type IntercomSettings = {
  __typename?: 'IntercomSettings';
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: Maybe<Scalars['Boolean']['output']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: Maybe<Scalars['Boolean']['output']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: Maybe<Scalars['Boolean']['output']>;
};

export type IntercomSettingsInput = {
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An issue. */
export type Issue = Node & {
  __typename?: 'Issue';
  /** The time at which the issue was added to a cycle. */
  addedToCycleAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the issue was added to a project. */
  addedToProjectAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user to whom the issue is assigned to. */
  assignee?: Maybe<User>;
  /** Attachments associated with the issue. */
  attachments: AttachmentConnection;
  /** The time at which the issue was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the issue was automatically closed by the auto pruning process. */
  autoClosedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The order of the item in its column on the board.
   * @deprecated Will be removed in near future, please use `sortOrder` instead
   */
  boardOrder: Scalars['Float']['output'];
  /** The bot that created the issue, if applicable. */
  botActor?: Maybe<ActorBot>;
  /** Suggested branch name for the issue. */
  branchName: Scalars['String']['output'];
  /** The time at which the issue was moved into canceled state. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** Children of the issue. */
  children: IssueConnection;
  /** Comments associated with the issue. */
  comments: CommentConnection;
  /** The time at which the issue was moved into completed state. */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the issue. */
  creator?: Maybe<User>;
  /** Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. Zendesk). */
  customerTicketCount: Scalars['Int']['output'];
  /** The cycle that the issue is associated with. */
  cycle?: Maybe<Cycle>;
  /** The issue's description in markdown format. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * [Internal] The issue's description as a Prosemirror document.
   * @deprecated Use description instead.
   */
  descriptionData?: Maybe<Scalars['JSON']['output']>;
  /** [Internal] The issue's description content as YJS state. */
  descriptionState?: Maybe<Scalars['String']['output']>;
  /** The date at which the issue is due. */
  dueDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** The estimate of the complexity of the issue.. */
  estimate?: Maybe<Scalars['Float']['output']>;
  /** The external user who created the issue. */
  externalUserCreator?: Maybe<ExternalUser>;
  /** The users favorite associated with this issue. */
  favorite?: Maybe<Favorite>;
  /** History entries associated with the issue. */
  history: IssueHistoryConnection;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Issue's human readable identifier (e.g. ENG-123). */
  identifier: Scalars['String']['output'];
  /** Integration type that created this issue, if applicable. */
  integrationSourceType?: Maybe<IntegrationService>;
  /** Inverse relations associated with this issue. */
  inverseRelations: IssueRelationConnection;
  /** Id of the labels associated with this issue. */
  labelIds: Array<Scalars['String']['output']>;
  /** Labels associated with this issue. */
  labels: IssueLabelConnection;
  /** The last template that was applied to this issue. */
  lastAppliedTemplate?: Maybe<Template>;
  /** The issue's unique number. */
  number: Scalars['Float']['output'];
  /** The parent of the issue. */
  parent?: Maybe<Issue>;
  /** Previous identifiers of the issue if it has been moved between teams. */
  previousIdentifiers: Array<Scalars['String']['output']>;
  /** The priority of the issue. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal, 4 = Low. */
  priority: Scalars['Float']['output'];
  /** Label for the priority. */
  priorityLabel: Scalars['String']['output'];
  /** [ALPHA] The order of the item in relation to other items in the organization, when ordered by priority. */
  prioritySortOrder: Scalars['Float']['output'];
  /** The project that the issue is associated with. */
  project?: Maybe<Project>;
  /** The projectMilestone that the issue is associated with. */
  projectMilestone?: Maybe<ProjectMilestone>;
  /** Emoji reaction summary, grouped by emoji type. */
  reactionData: Scalars['JSONObject']['output'];
  /** Reactions associated with the issue. */
  reactions: Array<Reaction>;
  /** Relations associated with this issue. */
  relations: IssueRelationConnection;
  /** The time at which the issue's SLA will breach. */
  slaBreachesAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the issue's SLA began. */
  slaStartedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user who snoozed the issue. */
  snoozedBy?: Maybe<User>;
  /** The time until an issue will be snoozed in Triage view. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** The order of the item in relation to other items in the organization. */
  sortOrder: Scalars['Float']['output'];
  /** The comment that this issue was created from. */
  sourceComment?: Maybe<Comment>;
  /** The time at which the issue was moved into started state. */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the issue entered triage. */
  startedTriageAt?: Maybe<Scalars['DateTime']['output']>;
  /** The workflow state that the issue is associated with. */
  state: WorkflowState;
  /** The order of the item in the sub-issue list. Only set if the issue has a parent. */
  subIssueSortOrder?: Maybe<Scalars['Float']['output']>;
  /** Users who are subscribed to the issue. */
  subscribers: UserConnection;
  /** The team that the issue is associated with. */
  team: Team;
  /** The issue's title. */
  title: Scalars['String']['output'];
  /** A flag that indicates whether the issue is in the trash bin. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The time at which the issue left triage. */
  triagedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Issue URL. */
  url: Scalars['String']['output'];
};


/** An issue. */
export type IssueAttachmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttachmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueInverseRelationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueLabelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueRelationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueSubscribersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type IssueArchivePayload = ArchivePayload & {
  __typename?: 'IssueArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Issue>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type IssueBatchPayload = {
  __typename?: 'IssueBatchPayload';
  /** The issues that were updated. */
  issues: Array<Issue>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Issue filtering options. */
export type IssueCollectionFilter = {
  /** Compound filters, all of which need to be matched by the issue. */
  and?: InputMaybe<Array<IssueCollectionFilter>>;
  /** Filters that the issues assignee must satisfy. */
  assignee?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues attachments must satisfy. */
  attachments?: InputMaybe<AttachmentCollectionFilter>;
  /** Comparator for the issues auto archived at date. */
  autoArchivedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues auto closed at date. */
  autoClosedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues canceled at date. */
  canceledAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the child issues must satisfy. */
  children?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the issues comments must satisfy. */
  comments?: InputMaybe<CommentCollectionFilter>;
  /** Comparator for the issues completed at date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issues creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues cycle must satisfy. */
  cycle?: InputMaybe<NullableCycleFilter>;
  /** Comparator for the issues description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the issues due date. */
  dueDate?: InputMaybe<NullableTimelessDateComparator>;
  /** Comparator for the issues estimate. */
  estimate?: InputMaybe<EstimateComparator>;
  /** Filters that needs to be matched by all issues. */
  every?: InputMaybe<IssueFilter>;
  /** Comparator for filtering issues which are blocked. */
  hasBlockedByRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are blocking. */
  hasBlockingRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are duplicates. */
  hasDuplicateRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues with relations. */
  hasRelatedRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that issue labels must satisfy. */
  labels?: InputMaybe<IssueLabelCollectionFilter>;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: InputMaybe<NullableTemplateFilter>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Filters that the issue's customer needs must satisfy. */
  needs?: InputMaybe<CustomerNeedCollectionFilter>;
  /** Comparator for the issues number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the issue. */
  or?: InputMaybe<Array<IssueCollectionFilter>>;
  /** Filters that the issue parent must satisfy. */
  parent?: InputMaybe<NullableIssueFilter>;
  /** Comparator for the issues priority. */
  priority?: InputMaybe<NullableNumberComparator>;
  /** Filters that the issues project must satisfy. */
  project?: InputMaybe<NullableProjectFilter>;
  /** Filters that the issues project milestone must satisfy. */
  projectMilestone?: InputMaybe<NullableProjectMilestoneFilter>;
  /** Filters that the issues reactions must satisfy. */
  reactions?: InputMaybe<ReactionCollectionFilter>;
  /** [Internal] Comparator for the issues content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the issues sla status. */
  slaStatus?: InputMaybe<SlaStatusComparator>;
  /** Filters that the issues snoozer must satisfy. */
  snoozedBy?: InputMaybe<NullableUserFilter>;
  /** Comparator for the issues snoozed until date. */
  snoozedUntilAt?: InputMaybe<NullableDateComparator>;
  /** Filters that needs to be matched by some issues. */
  some?: InputMaybe<IssueFilter>;
  /** Filters that the source must satisfy. */
  sourceMetadata?: InputMaybe<SourceMetadataComparator>;
  /** Comparator for the issues started at date. */
  startedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the issues state must satisfy. */
  state?: InputMaybe<WorkflowStateFilter>;
  /** Filters that issue subscribers must satisfy. */
  subscribers?: InputMaybe<UserCollectionFilter>;
  /** Filters that the issues team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the issues title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the issues triaged at date. */
  triagedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type IssueConnection = {
  __typename?: 'IssueConnection';
  edges: Array<IssueEdge>;
  nodes: Array<Issue>;
  pageInfo: PageInfo;
};

export type IssueCreateInput = {
  /** The identifier of the user to assign the issue to. */
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  /** The position of the issue in its column on the board view. */
  boardOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The date when the issue was completed (e.g. if importing from another system). Must be a date in the past and after createdAt date. Cannot be provided with an incompatible workflow state. */
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Create issue as a user with the provided name. This option is only available to OAuth applications creating issues in `actor=application` mode. */
  createAsUser?: InputMaybe<Scalars['String']['input']>;
  /** The date when the issue was created (e.g. if importing from another system). Must be a date in the past. If none is provided, the backend will generate the time as now. */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The cycle associated with the issue. */
  cycleId?: InputMaybe<Scalars['String']['input']>;
  /** The issue description in markdown format. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] The issue description as a Prosemirror document. */
  descriptionData?: InputMaybe<Scalars['JSON']['input']>;
  /** Provide an external user avatar URL. Can only be used in conjunction with the `createAsUser` options. This option is only available to OAuth applications creating comments in `actor=application` mode. */
  displayIconUrl?: InputMaybe<Scalars['String']['input']>;
  /** The date at which the issue is due. */
  dueDate?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** The estimated complexity of the issue. */
  estimate?: InputMaybe<Scalars['Int']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifiers of the issue labels associated with this ticket. */
  labelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The ID of the last template applied to the issue. */
  lastAppliedTemplateId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the parent issue. */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the passed sort order should be preserved. */
  preserveSortOrderOnCreate?: InputMaybe<Scalars['Boolean']['input']>;
  /** The priority of the issue. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal, 4 = Low. */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** [ALPHA] The position of the issue related to other issues, when ordered by priority. */
  prioritySortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The project associated with the issue. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The project milestone associated with the issue. */
  projectMilestoneId?: InputMaybe<Scalars['String']['input']>;
  /** The comment the issue is referencing. */
  referenceCommentId?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] The timestamp at which an issue will be considered in breach of SLA. */
  slaBreachesAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The position of the issue related to other issues. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The comment the issue is created from. */
  sourceCommentId?: InputMaybe<Scalars['String']['input']>;
  /** The team state of the issue. */
  stateId?: InputMaybe<Scalars['String']['input']>;
  /** The position of the issue in parent's sub-issue list. */
  subIssueSortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The identifiers of the users subscribing to this ticket. */
  subscriberIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The identifier of the team associated with the issue. */
  teamId: Scalars['String']['input'];
  /** The identifier of a template the issue should be created from. If other values are provided in the input, they will override template values. */
  templateId?: InputMaybe<Scalars['String']['input']>;
  /** The title of the issue. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** [Internal] A draft issue. */
export type IssueDraft = Node & {
  __typename?: 'IssueDraft';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user assigned to the draft. */
  assigneeId?: Maybe<Scalars['String']['output']>;
  /** Serialized array of JSONs representing attachments. */
  attachments?: Maybe<Scalars['JSONObject']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the draft. */
  creator: User;
  /** The cycle associated with the draft. */
  cycleId?: Maybe<Scalars['String']['output']>;
  /** The draft's description in markdown format. */
  description?: Maybe<Scalars['String']['output']>;
  /** [Internal] The draft's description as a Prosemirror document. */
  descriptionData?: Maybe<Scalars['JSON']['output']>;
  /** The date at which the issue would be due. */
  dueDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** The estimate of the complexity of the draft. */
  estimate?: Maybe<Scalars['Float']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The parent draft of the draft. */
  parent?: Maybe<IssueDraft>;
  /** The parent issue of the draft. */
  parentIssue?: Maybe<Issue>;
  /** The priority of the draft. */
  priority: Scalars['Float']['output'];
  /** Label for the priority. */
  priorityLabel: Scalars['String']['output'];
  /** The project associated with the draft. */
  projectId?: Maybe<Scalars['String']['output']>;
  /** The project milestone associated with the draft. */
  projectMilestoneId?: Maybe<Scalars['String']['output']>;
  /** The workflow state associated with the draft. */
  stateId: Scalars['String']['output'];
  /** The order of items in the sub-draft list. Only set if the draft has `parent` set. */
  subIssueSortOrder?: Maybe<Scalars['Float']['output']>;
  /** The team associated with the draft. */
  teamId: Scalars['String']['output'];
  /** The draft's title. */
  title: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type IssueEdge = {
  __typename?: 'IssueEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Issue;
};

/** Issue filtering options. */
export type IssueFilter = {
  /** Compound filters, all of which need to be matched by the issue. */
  and?: InputMaybe<Array<IssueFilter>>;
  /** Filters that the issues assignee must satisfy. */
  assignee?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues attachments must satisfy. */
  attachments?: InputMaybe<AttachmentCollectionFilter>;
  /** Comparator for the issues auto archived at date. */
  autoArchivedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues auto closed at date. */
  autoClosedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues canceled at date. */
  canceledAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the child issues must satisfy. */
  children?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the issues comments must satisfy. */
  comments?: InputMaybe<CommentCollectionFilter>;
  /** Comparator for the issues completed at date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issues creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues cycle must satisfy. */
  cycle?: InputMaybe<NullableCycleFilter>;
  /** Comparator for the issues description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the issues due date. */
  dueDate?: InputMaybe<NullableTimelessDateComparator>;
  /** Comparator for the issues estimate. */
  estimate?: InputMaybe<EstimateComparator>;
  /** Comparator for filtering issues which are blocked. */
  hasBlockedByRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are blocking. */
  hasBlockingRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are duplicates. */
  hasDuplicateRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues with relations. */
  hasRelatedRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that issue labels must satisfy. */
  labels?: InputMaybe<IssueLabelCollectionFilter>;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: InputMaybe<NullableTemplateFilter>;
  /** Filters that the issue's customer needs must satisfy. */
  needs?: InputMaybe<CustomerNeedCollectionFilter>;
  /** Comparator for the issues number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the issue. */
  or?: InputMaybe<Array<IssueFilter>>;
  /** Filters that the issue parent must satisfy. */
  parent?: InputMaybe<NullableIssueFilter>;
  /** Comparator for the issues priority. */
  priority?: InputMaybe<NullableNumberComparator>;
  /** Filters that the issues project must satisfy. */
  project?: InputMaybe<NullableProjectFilter>;
  /** Filters that the issues project milestone must satisfy. */
  projectMilestone?: InputMaybe<NullableProjectMilestoneFilter>;
  /** Filters that the issues reactions must satisfy. */
  reactions?: InputMaybe<ReactionCollectionFilter>;
  /** [Internal] Comparator for the issues content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the issues sla status. */
  slaStatus?: InputMaybe<SlaStatusComparator>;
  /** Filters that the issues snoozer must satisfy. */
  snoozedBy?: InputMaybe<NullableUserFilter>;
  /** Comparator for the issues snoozed until date. */
  snoozedUntilAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the source must satisfy. */
  sourceMetadata?: InputMaybe<SourceMetadataComparator>;
  /** Comparator for the issues started at date. */
  startedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the issues state must satisfy. */
  state?: InputMaybe<WorkflowStateFilter>;
  /** Filters that issue subscribers must satisfy. */
  subscribers?: InputMaybe<UserCollectionFilter>;
  /** Filters that the issues team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the issues title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the issues triaged at date. */
  triagedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type IssueFilterSuggestionPayload = {
  __typename?: 'IssueFilterSuggestionPayload';
  /** The json filter that is suggested. */
  filter?: Maybe<Scalars['JSONObject']['output']>;
};

/** A record of changes to an issue. */
export type IssueHistory = Node & {
  __typename?: 'IssueHistory';
  /**
   * The actor that performed the actions. This field may be empty in the case of integrations or automations.
   * @deprecated Use actors instead.
   */
  actor?: Maybe<User>;
  /** The id of user who made these changes. If null, possibly means that the change made by an integration. */
  actorId?: Maybe<Scalars['String']['output']>;
  /** The actors that performed the actions. This field may be empty in the case of integrations or automations. */
  actors?: Maybe<Array<User>>;
  /** ID's of labels that were added. */
  addedLabelIds?: Maybe<Array<Scalars['String']['output']>>;
  /** The labels that were added to the issue. */
  addedLabels?: Maybe<Array<IssueLabel>>;
  /** Whether the issue is archived at the time of this history entry. */
  archived?: Maybe<Scalars['Boolean']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The linked attachment. */
  attachment?: Maybe<Attachment>;
  /** The id of linked attachment. */
  attachmentId?: Maybe<Scalars['String']['output']>;
  /** Whether the issue was auto-archived. */
  autoArchived?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the issue was auto-closed. */
  autoClosed?: Maybe<Scalars['Boolean']['output']>;
  /** The bot that performed the action. */
  botActor?: Maybe<ActorBot>;
  /** [Internal] Serialized JSON representing changes for certain non-relational properties. */
  changes?: Maybe<Scalars['JSONObject']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user that was unassigned from the issue. */
  fromAssignee?: Maybe<User>;
  /** The id of user from whom the issue was re-assigned from. */
  fromAssigneeId?: Maybe<Scalars['String']['output']>;
  /** The cycle that the issue was moved from. */
  fromCycle?: Maybe<Cycle>;
  /** The id of previous cycle of the issue. */
  fromCycleId?: Maybe<Scalars['String']['output']>;
  /** What the due date was changed from. */
  fromDueDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** What the estimate was changed from. */
  fromEstimate?: Maybe<Scalars['Float']['output']>;
  /** The parent issue that the issue was moved from. */
  fromParent?: Maybe<Issue>;
  /** The id of previous parent of the issue. */
  fromParentId?: Maybe<Scalars['String']['output']>;
  /** What the priority was changed from. */
  fromPriority?: Maybe<Scalars['Float']['output']>;
  /** The project that the issue was moved from. */
  fromProject?: Maybe<Project>;
  /** The id of previous project of the issue. */
  fromProjectId?: Maybe<Scalars['String']['output']>;
  /** The state that the issue was moved from. */
  fromState?: Maybe<WorkflowState>;
  /** The id of previous workflow state of the issue. */
  fromStateId?: Maybe<Scalars['String']['output']>;
  /** The team that the issue was moved from. */
  fromTeam?: Maybe<Team>;
  /** The id of team from which the issue was moved from. */
  fromTeamId?: Maybe<Scalars['String']['output']>;
  /** What the title was changed from. */
  fromTitle?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The issue that was changed. */
  issue: Issue;
  /** The import record. */
  issueImport?: Maybe<IssueImport>;
  /** Changed issue relationships. */
  relationChanges?: Maybe<Array<IssueRelationHistoryPayload>>;
  /** ID's of labels that were removed. */
  removedLabelIds?: Maybe<Array<Scalars['String']['output']>>;
  /** The labels that were removed from the issue. */
  removedLabels?: Maybe<Array<IssueLabel>>;
  /** The user that was assigned to the issue. */
  toAssignee?: Maybe<User>;
  /** The id of user to whom the issue was assigned to. */
  toAssigneeId?: Maybe<Scalars['String']['output']>;
  /** The new project created from the issue. */
  toConvertedProject?: Maybe<Project>;
  /** The id of new project created from the issue. */
  toConvertedProjectId?: Maybe<Scalars['String']['output']>;
  /** The cycle that the issue was moved to. */
  toCycle?: Maybe<Cycle>;
  /** The id of new cycle of the issue. */
  toCycleId?: Maybe<Scalars['String']['output']>;
  /** What the due date was changed to. */
  toDueDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** What the estimate was changed to. */
  toEstimate?: Maybe<Scalars['Float']['output']>;
  /** The parent issue that the issue was moved to. */
  toParent?: Maybe<Issue>;
  /** The id of new parent of the issue. */
  toParentId?: Maybe<Scalars['String']['output']>;
  /** What the priority was changed to. */
  toPriority?: Maybe<Scalars['Float']['output']>;
  /** The project that the issue was moved to. */
  toProject?: Maybe<Project>;
  /** The id of new project of the issue. */
  toProjectId?: Maybe<Scalars['String']['output']>;
  /** The state that the issue was moved to. */
  toState?: Maybe<WorkflowState>;
  /** The id of new workflow state of the issue. */
  toStateId?: Maybe<Scalars['String']['output']>;
  /** The team that the issue was moved to. */
  toTeam?: Maybe<Team>;
  /** The id of team to which the issue was moved to. */
  toTeamId?: Maybe<Scalars['String']['output']>;
  /** What the title was changed to. */
  toTitle?: Maybe<Scalars['String']['output']>;
  /** Whether the issue was trashed or un-trashed. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The users that were notified of the issue. */
  triageResponsibilityNotifiedUsers?: Maybe<Array<User>>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Whether the issue's description was updated. */
  updatedDescription?: Maybe<Scalars['Boolean']['output']>;
};

export type IssueHistoryConnection = {
  __typename?: 'IssueHistoryConnection';
  edges: Array<IssueHistoryEdge>;
  nodes: Array<IssueHistory>;
  pageInfo: PageInfo;
};

export type IssueHistoryEdge = {
  __typename?: 'IssueHistoryEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: IssueHistory;
};

/** An import job for data from an external service. */
export type IssueImport = Node & {
  __typename?: 'IssueImport';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The id for the user that started the job. */
  creatorId: Scalars['String']['output'];
  /** File URL for the uploaded CSV for the import, if there is one. */
  csvFileUrl?: Maybe<Scalars['String']['output']>;
  /** The display name of the import service. */
  displayName: Scalars['String']['output'];
  /** User readable error message, if one has occurred during the import. */
  error?: Maybe<Scalars['String']['output']>;
  /** Error code and metadata, if one has occurred during the import. */
  errorMetadata?: Maybe<Scalars['JSONObject']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The data mapping configuration for the import job. */
  mapping?: Maybe<Scalars['JSONObject']['output']>;
  /** Current step progress in % (0-100). */
  progress?: Maybe<Scalars['Float']['output']>;
  /** The service from which data will be imported. */
  service: Scalars['String']['output'];
  /** Metadata related to import service. */
  serviceMetadata?: Maybe<Scalars['JSONObject']['output']>;
  /** The status for the import job. */
  status: Scalars['String']['output'];
  /** New team's name in cases when teamId not set. */
  teamName?: Maybe<Scalars['String']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type IssueImportCheckPayload = {
  __typename?: 'IssueImportCheckPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type IssueImportDeletePayload = {
  __typename?: 'IssueImportDeletePayload';
  /** The import job that was deleted. */
  issueImport?: Maybe<IssueImport>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Issue import mapping input. */
export type IssueImportMappingInput = {
  /** The mapping configuration for epics. */
  epics?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The mapping configuration for users. */
  users?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The mapping configuration for workflow states. */
  workflowStates?: InputMaybe<Scalars['JSONObject']['input']>;
};

export type IssueImportPayload = {
  __typename?: 'IssueImportPayload';
  /** The import job that was created or updated. */
  issueImport?: Maybe<IssueImport>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Whether an issue import can be synced at the end of an import or not */
export type IssueImportSyncCheckPayload = {
  __typename?: 'IssueImportSyncCheckPayload';
  /** Returns true if the import can be synced, false otherwise */
  canSync: Scalars['Boolean']['output'];
  /** An error message with a root cause of why the import cannot be synced */
  error?: Maybe<Scalars['String']['output']>;
};

export type IssueImportUpdateInput = {
  /** The mapping configuration for the import. */
  mapping: Scalars['JSONObject']['input'];
};

/** Labels that can be associated with issues. */
export type IssueLabel = Node & {
  __typename?: 'IssueLabel';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Children of the label. */
  children: IssueLabelConnection;
  /** The label's color as a HEX string. */
  color: Scalars['String']['output'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the label. */
  creator?: Maybe<User>;
  /** The label's description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Whether this label is considered to be a group. */
  isGroup: Scalars['Boolean']['output'];
  /** Issues associated with the label. */
  issues: IssueConnection;
  /** The label's name. */
  name: Scalars['String']['output'];
  /** @deprecated Workspace labels are identified by their team being null. */
  organization: Organization;
  /** The parent label. */
  parent?: Maybe<IssueLabel>;
  /** The team that the label is associated with. If null, the label is associated with the global workspace. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};


/** Labels that can be associated with issues. */
export type IssueLabelChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** Labels that can be associated with issues. */
export type IssueLabelIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** Issue label filtering options. */
export type IssueLabelCollectionFilter = {
  /** Compound filters, all of which need to be matched by the label. */
  and?: InputMaybe<Array<IssueLabelCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issue labels creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Filters that needs to be matched by all issue labels. */
  every?: InputMaybe<IssueLabelFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Comparator for the name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the label. */
  or?: InputMaybe<Array<IssueLabelCollectionFilter>>;
  /** Filters that the issue label's parent label must satisfy. */
  parent?: InputMaybe<IssueLabelFilter>;
  /** Filters that needs to be matched by some issue labels. */
  some?: InputMaybe<IssueLabelFilter>;
  /** Filters that the issue labels team must satisfy. */
  team?: InputMaybe<NullableTeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type IssueLabelConnection = {
  __typename?: 'IssueLabelConnection';
  edges: Array<IssueLabelEdge>;
  nodes: Array<IssueLabel>;
  pageInfo: PageInfo;
};

export type IssueLabelCreateInput = {
  /** The color of the label. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the label. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the label. */
  name: Scalars['String']['input'];
  /** The identifier of the parent label. */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** The team associated with the label. If not given, the label will be associated with the entire workspace. */
  teamId?: InputMaybe<Scalars['String']['input']>;
};

export type IssueLabelEdge = {
  __typename?: 'IssueLabelEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: IssueLabel;
};

/** Issue label filtering options. */
export type IssueLabelFilter = {
  /** Compound filters, all of which need to be matched by the label. */
  and?: InputMaybe<Array<IssueLabelFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issue labels creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the label. */
  or?: InputMaybe<Array<IssueLabelFilter>>;
  /** Filters that the issue label's parent label must satisfy. */
  parent?: InputMaybe<IssueLabelFilter>;
  /** Filters that the issue labels team must satisfy. */
  team?: InputMaybe<NullableTeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type IssueLabelPayload = {
  __typename?: 'IssueLabelPayload';
  /** The label that was created or updated. */
  issueLabel: IssueLabel;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type IssueLabelUpdateInput = {
  /** The color of the label. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the label. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the label. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the parent label. */
  parentId?: InputMaybe<Scalars['String']['input']>;
};

/** An issue related notification. */
export type IssueNotification = Entity & Node & Notification & {
  __typename?: 'IssueNotification';
  /** The user that caused the notification. */
  actor?: Maybe<User>;
  /** [Internal] Notification actor initials if avatar is not available. */
  actorAvatarColor?: Maybe<Scalars['String']['output']>;
  /** [Internal] Notification avatar URL. */
  actorAvatarUrl?: Maybe<Scalars['String']['output']>;
  /** [Internal] Notification actor initials if avatar is not available. */
  actorInitials?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The bot that caused the notification. */
  botActor?: Maybe<ActorBot>;
  /** The comment related to the notification. */
  comment?: Maybe<Comment>;
  /** Related comment ID. Null if the notification is not related to a comment. */
  commentId?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The external user that caused the notification. */
  externalUserActor?: Maybe<ExternalUser>;
  /** [Internal] Notifications with the same grouping key will be grouped together in the UI. */
  groupingKey: Scalars['String']['output'];
  /** [Internal] Priority of the notification with the same grouping key. Higher number means higher priority. If priority is the same, notifications should be sorted by `createdAt`. */
  groupingPriority: Scalars['Float']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** [Internal] Inbox URL for the notification. */
  inboxUrl: Scalars['String']['output'];
  /** [Internal] If notification actor was Linear. */
  isLinearActor: Scalars['Boolean']['output'];
  /** The issue related to the notification. */
  issue: Issue;
  /** Related issue ID. */
  issueId: Scalars['String']['output'];
  /** [Internal] Issue's status type for issue notifications. */
  issueStatusType?: Maybe<Scalars['String']['output']>;
  /** The parent comment related to the notification, if a notification is a reply comment notification. */
  parentComment?: Maybe<Comment>;
  /** Related parent comment ID. Null if the notification is not related to a comment. */
  parentCommentId?: Maybe<Scalars['String']['output']>;
  /** [Internal] Project update health for new updates. */
  projectUpdateHealth?: Maybe<Scalars['String']['output']>;
  /** Name of the reaction emoji related to the notification. */
  reactionEmoji?: Maybe<Scalars['String']['output']>;
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** The subscriptions related to the notification. */
  subscriptions?: Maybe<Array<NotificationSubscription>>;
  /** [Internal] Notification subtitle. */
  subtitle: Scalars['String']['output'];
  /** The team related to the issue notification. */
  team: Team;
  /** [Internal] Notification title. */
  title: Scalars['String']['output'];
  /** Notification type. */
  type: Scalars['String']['output'];
  /** The time at which a notification was unsnoozed.. */
  unsnoozedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** [Internal] URL to the target of the notification. */
  url: Scalars['String']['output'];
  /** The user that received the notification. */
  user: User;
};

export type IssuePayload = {
  __typename?: 'IssuePayload';
  /** The issue that was created or updated. */
  issue?: Maybe<Issue>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type IssuePriorityValue = {
  __typename?: 'IssuePriorityValue';
  /** Priority's label. */
  label: Scalars['String']['output'];
  /** Priority's number value. */
  priority: Scalars['Int']['output'];
};

/** A relation between two issues. */
export type IssueRelation = Node & {
  __typename?: 'IssueRelation';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The issue whose relationship is being described. */
  issue: Issue;
  /** The related issue. */
  relatedIssue: Issue;
  /** The relationship of the issue with the related issue. */
  type: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type IssueRelationConnection = {
  __typename?: 'IssueRelationConnection';
  edges: Array<IssueRelationEdge>;
  nodes: Array<IssueRelation>;
  pageInfo: PageInfo;
};

export type IssueRelationCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the issue that is related to another issue. */
  issueId: Scalars['String']['input'];
  /** The identifier of the related issue. */
  relatedIssueId: Scalars['String']['input'];
  /** The type of relation of the issue to the related issue. */
  type: IssueRelationType;
};

export type IssueRelationEdge = {
  __typename?: 'IssueRelationEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: IssueRelation;
};

/** Issue relation history's payload. */
export type IssueRelationHistoryPayload = {
  __typename?: 'IssueRelationHistoryPayload';
  /** The identifier of the related issue. */
  identifier: Scalars['String']['output'];
  /** The type of the change. */
  type: Scalars['String']['output'];
};

export type IssueRelationPayload = {
  __typename?: 'IssueRelationPayload';
  /** The issue relation that was created or updated. */
  issueRelation: IssueRelation;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** The type of the issue relation. */
export enum IssueRelationType {
  Blocks = 'blocks',
  Duplicate = 'duplicate',
  Related = 'related'
}

export type IssueRelationUpdateInput = {
  /** The identifier of the issue that is related to another issue. */
  issueId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the related issue. */
  relatedIssueId?: InputMaybe<Scalars['String']['input']>;
  /** The type of relation of the issue to the related issue. */
  type?: InputMaybe<Scalars['String']['input']>;
};

export type IssueSearchPayload = {
  __typename?: 'IssueSearchPayload';
  /** Archived entities matching the search term along with all their dependencies. */
  archivePayload: ArchiveResponse;
  edges: Array<IssueSearchResultEdge>;
  nodes: Array<IssueSearchResult>;
  pageInfo: PageInfo;
  /** Total number of results for query without filters applied. */
  totalCount: Scalars['Float']['output'];
};

export type IssueSearchResult = Node & {
  __typename?: 'IssueSearchResult';
  /** The time at which the issue was added to a cycle. */
  addedToCycleAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the issue was added to a project. */
  addedToProjectAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user to whom the issue is assigned to. */
  assignee?: Maybe<User>;
  /** Attachments associated with the issue. */
  attachments: AttachmentConnection;
  /** The time at which the issue was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the issue was automatically closed by the auto pruning process. */
  autoClosedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The order of the item in its column on the board.
   * @deprecated Will be removed in near future, please use `sortOrder` instead
   */
  boardOrder: Scalars['Float']['output'];
  /** The bot that created the issue, if applicable. */
  botActor?: Maybe<ActorBot>;
  /** Suggested branch name for the issue. */
  branchName: Scalars['String']['output'];
  /** The time at which the issue was moved into canceled state. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** Children of the issue. */
  children: IssueConnection;
  /** Comments associated with the issue. */
  comments: CommentConnection;
  /** The time at which the issue was moved into completed state. */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the issue. */
  creator?: Maybe<User>;
  /** Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. Zendesk). */
  customerTicketCount: Scalars['Int']['output'];
  /** The cycle that the issue is associated with. */
  cycle?: Maybe<Cycle>;
  /** The issue's description in markdown format. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * [Internal] The issue's description as a Prosemirror document.
   * @deprecated Use description instead.
   */
  descriptionData?: Maybe<Scalars['JSON']['output']>;
  /** [Internal] The issue's description content as YJS state. */
  descriptionState?: Maybe<Scalars['String']['output']>;
  /** The date at which the issue is due. */
  dueDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** The estimate of the complexity of the issue.. */
  estimate?: Maybe<Scalars['Float']['output']>;
  /** The external user who created the issue. */
  externalUserCreator?: Maybe<ExternalUser>;
  /** The users favorite associated with this issue. */
  favorite?: Maybe<Favorite>;
  /** History entries associated with the issue. */
  history: IssueHistoryConnection;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Issue's human readable identifier (e.g. ENG-123). */
  identifier: Scalars['String']['output'];
  /** Integration type that created this issue, if applicable. */
  integrationSourceType?: Maybe<IntegrationService>;
  /** Inverse relations associated with this issue. */
  inverseRelations: IssueRelationConnection;
  /** Id of the labels associated with this issue. */
  labelIds: Array<Scalars['String']['output']>;
  /** Labels associated with this issue. */
  labels: IssueLabelConnection;
  /** The last template that was applied to this issue. */
  lastAppliedTemplate?: Maybe<Template>;
  /** Metadata related to search result. */
  metadata: Scalars['JSONObject']['output'];
  /** The issue's unique number. */
  number: Scalars['Float']['output'];
  /** The parent of the issue. */
  parent?: Maybe<Issue>;
  /** Previous identifiers of the issue if it has been moved between teams. */
  previousIdentifiers: Array<Scalars['String']['output']>;
  /** The priority of the issue. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal, 4 = Low. */
  priority: Scalars['Float']['output'];
  /** Label for the priority. */
  priorityLabel: Scalars['String']['output'];
  /** [ALPHA] The order of the item in relation to other items in the organization, when ordered by priority. */
  prioritySortOrder: Scalars['Float']['output'];
  /** The project that the issue is associated with. */
  project?: Maybe<Project>;
  /** The projectMilestone that the issue is associated with. */
  projectMilestone?: Maybe<ProjectMilestone>;
  /** Emoji reaction summary, grouped by emoji type. */
  reactionData: Scalars['JSONObject']['output'];
  /** Reactions associated with the issue. */
  reactions: Array<Reaction>;
  /** Relations associated with this issue. */
  relations: IssueRelationConnection;
  /** The time at which the issue's SLA will breach. */
  slaBreachesAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the issue's SLA began. */
  slaStartedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user who snoozed the issue. */
  snoozedBy?: Maybe<User>;
  /** The time until an issue will be snoozed in Triage view. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** The order of the item in relation to other items in the organization. */
  sortOrder: Scalars['Float']['output'];
  /** The comment that this issue was created from. */
  sourceComment?: Maybe<Comment>;
  /** The time at which the issue was moved into started state. */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the issue entered triage. */
  startedTriageAt?: Maybe<Scalars['DateTime']['output']>;
  /** The workflow state that the issue is associated with. */
  state: WorkflowState;
  /** The order of the item in the sub-issue list. Only set if the issue has a parent. */
  subIssueSortOrder?: Maybe<Scalars['Float']['output']>;
  /** Users who are subscribed to the issue. */
  subscribers: UserConnection;
  /** The team that the issue is associated with. */
  team: Team;
  /** The issue's title. */
  title: Scalars['String']['output'];
  /** A flag that indicates whether the issue is in the trash bin. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /** The time at which the issue left triage. */
  triagedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Issue URL. */
  url: Scalars['String']['output'];
};


export type IssueSearchResultAttachmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttachmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultInverseRelationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultLabelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultRelationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type IssueSearchResultSubscribersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type IssueSearchResultConnection = {
  __typename?: 'IssueSearchResultConnection';
  edges: Array<IssueSearchResultEdge>;
  nodes: Array<IssueSearchResult>;
  pageInfo: PageInfo;
};

export type IssueSearchResultEdge = {
  __typename?: 'IssueSearchResultEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: IssueSearchResult;
};

/** Issue filtering options. */
export type IssueSortInput = {
  /** Sort by assignee name */
  assignee?: InputMaybe<AssigneeSort>;
  /** Sort by issue completion date */
  completedAt?: InputMaybe<CompletedAtSort>;
  /** Sort by issue creation date */
  createdAt?: InputMaybe<CreatedAtSort>;
  /** Sort by Cycle start date */
  cycle?: InputMaybe<CycleSort>;
  /** Sort by issue due date */
  dueDate?: InputMaybe<DueDateSort>;
  /** Sort by estimate */
  estimate?: InputMaybe<EstimateSort>;
  /** Sort by label */
  label?: InputMaybe<LabelSort>;
  /** Sort by manual order */
  manual?: InputMaybe<ManualSort>;
  /** Sort by Project Milestone target date */
  milestone?: InputMaybe<MilestoneSort>;
  /** Sort by priority */
  priority?: InputMaybe<PrioritySort>;
  /** Sort by Project name */
  project?: InputMaybe<ProjectSort>;
  /** Sort by SLA status */
  slaStatus?: InputMaybe<SlaStatusSort>;
  /** Sort by Team name */
  team?: InputMaybe<TeamSort>;
  /** Sort by issue title */
  title?: InputMaybe<TitleSort>;
  /** Sort by issue update date */
  updatedAt?: InputMaybe<UpdatedAtSort>;
  /** Sort by workflow state type */
  workflowState?: InputMaybe<WorkflowStateSort>;
};

export type IssueUpdateInput = {
  /** The identifier of the user to assign the issue to. */
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  /** The position of the issue in its column on the board view. */
  boardOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The cycle associated with the issue. */
  cycleId?: InputMaybe<Scalars['String']['input']>;
  /** The issue description in markdown format. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The issue description as a Prosemirror document. */
  descriptionData?: InputMaybe<Scalars['JSON']['input']>;
  /** The date at which the issue is due. */
  dueDate?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** The estimated complexity of the issue. */
  estimate?: InputMaybe<Scalars['Int']['input']>;
  /** The identifiers of the issue labels associated with this ticket. */
  labelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The ID of the last template applied to the issue. */
  lastAppliedTemplateId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the parent issue. */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** The priority of the issue. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal, 4 = Low. */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** [ALPHA] The position of the issue related to other issues, when ordered by priority. */
  prioritySortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The project associated with the issue. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The project milestone associated with the issue. */
  projectMilestoneId?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] The timestamp at which an issue will be considered in breach of SLA. */
  slaBreachesAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The identifier of the user who snoozed the issue. */
  snoozedById?: InputMaybe<Scalars['String']['input']>;
  /** The time until an issue will be snoozed in Triage view. */
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The position of the issue related to other issues. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The team state of the issue. */
  stateId?: InputMaybe<Scalars['String']['input']>;
  /** The position of the issue in parent's sub-issue list. */
  subIssueSortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The identifiers of the users subscribing to this ticket. */
  subscriberIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The identifier of the team associated with the issue. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** The issue title. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Whether the issue has been trashed. */
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JiraConfigurationInput = {
  /** The Jira personal access token. */
  accessToken: Scalars['String']['input'];
  /** The Jira user's email address. */
  email: Scalars['String']['input'];
  /** The Jira installation hostname. */
  hostname: Scalars['String']['input'];
  /** Whether this integration will be setup using the manual webhook flow. */
  manualSetup?: InputMaybe<Scalars['Boolean']['input']>;
  /** [DEPRECATED] The Jira project keys to scope the integration to. */
  project?: InputMaybe<Scalars['String']['input']>;
};

/** Tuple for mapping Jira projects to Linear teams. */
export type JiraLinearMapping = {
  __typename?: 'JiraLinearMapping';
  /** Whether the sync for this mapping is bidirectional. */
  bidirectional?: Maybe<Scalars['Boolean']['output']>;
  /** Whether this mapping is the default one for issue creation. */
  default?: Maybe<Scalars['Boolean']['output']>;
  /** The Jira id for this project. */
  jiraProjectId: Scalars['String']['output'];
  /** The Linear team id to map to the given project. */
  linearTeamId: Scalars['String']['output'];
};

export type JiraLinearMappingInput = {
  /** Whether the sync for this mapping is bidirectional. */
  bidirectional?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether this mapping is the default one for issue creation. */
  default?: InputMaybe<Scalars['Boolean']['input']>;
  /** The Jira id for this project. */
  jiraProjectId: Scalars['String']['input'];
  /** The Linear team id to map to the given project. */
  linearTeamId: Scalars['String']['input'];
};

/** Jira personal specific settings. */
export type JiraPersonalSettings = {
  __typename?: 'JiraPersonalSettings';
  /** The name of the Jira site currently authorized through the integration. */
  siteName?: Maybe<Scalars['String']['output']>;
};

export type JiraPersonalSettingsInput = {
  /** The name of the Jira site currently authorized through the integration. */
  siteName?: InputMaybe<Scalars['String']['input']>;
};

/** Metadata about a Jira project. */
export type JiraProjectData = {
  __typename?: 'JiraProjectData';
  /** The Jira id for this project. */
  id: Scalars['String']['output'];
  /** The Jira key for this project, such as ENG. */
  key: Scalars['String']['output'];
  /** The Jira name for this project, such as Engineering. */
  name: Scalars['String']['output'];
};

export type JiraProjectDataInput = {
  /** The Jira id for this project. */
  id: Scalars['String']['input'];
  /** The Jira key for this project, such as ENG. */
  key: Scalars['String']['input'];
  /** The Jira name for this project, such as Engineering. */
  name: Scalars['String']['input'];
};

/** Jira specific settings. */
export type JiraSettings = {
  __typename?: 'JiraSettings';
  /** Whether this integration is for Jira Server or not. */
  isJiraServer?: Maybe<Scalars['Boolean']['output']>;
  /** Whether this integration is using a manual setup flow. */
  manualSetup?: Maybe<Scalars['Boolean']['output']>;
  /** The mapping of Jira project id => Linear team id. */
  projectMapping?: Maybe<Array<JiraLinearMapping>>;
  /** The Jira projects for the organization. */
  projects: Array<JiraProjectData>;
  /** Whether the user needs to provide setup information about the webhook to complete the integration setup. Only relevant for integrations that use a manual setup flow */
  setupPending?: Maybe<Scalars['Boolean']['output']>;
};

export type JiraSettingsInput = {
  /** Whether this integration is for Jira Server or not. */
  isJiraServer?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether this integration is using a manual setup flow. */
  manualSetup?: InputMaybe<Scalars['Boolean']['input']>;
  /** The mapping of Jira project id => Linear team id. */
  projectMapping?: InputMaybe<Array<JiraLinearMappingInput>>;
  /** The Jira projects for the organization. */
  projects: Array<JiraProjectDataInput>;
  /** Whether the user needs to provide setup information about the webhook to complete the integration setup. Only relevant for integrations that use a manual setup flow */
  setupPending?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JiraUpdateInput = {
  /** Whether to delete the current manual webhook configuration. */
  deleteWebhook?: InputMaybe<Scalars['Boolean']['input']>;
  /** The id of the integration to update. */
  id: Scalars['String']['input'];
  /** Whether to refresh Jira metadata for the integration. */
  updateMetadata?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to refresh Jira Projects for the integration. */
  updateProjects?: InputMaybe<Scalars['Boolean']['input']>;
  /** Webhook secret for a new manual configuration. */
  webhookSecret?: InputMaybe<Scalars['String']['input']>;
};

export type JoinOrganizationInput = {
  /** An optional invite link for an organization. */
  inviteLink?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the organization. */
  organizationId: Scalars['String']['input'];
};

/** A label notification subscription. */
export type LabelNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'LabelNotificationSubscription';
  /** Whether the subscription is active or not. */
  active: Scalars['Boolean']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The contextual initiative view associated with the notification subscription. */
  initiative?: Maybe<Initiative>;
  /** The label subscribed to. */
  label: IssueLabel;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']['output']>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

/** Issue sorting options. */
export type LabelSort = {
  /** Whether nulls should be sorted first or last */
  nulls?: InputMaybe<PaginationNulls>;
  /** The order for the individual sort */
  order?: InputMaybe<PaginationSortOrder>;
};

/** LaunchDarkly specific settings. */
export type LaunchDarklySettings = {
  __typename?: 'LaunchDarklySettings';
  /** The environment of the LaunchDarkly integration. */
  environment: Scalars['String']['output'];
  /** The project key of the LaunchDarkly integration. */
  projectKey: Scalars['String']['output'];
};

export type LaunchDarklySettingsInput = {
  /** The environment of the LaunchDarkly integration. */
  environment: Scalars['String']['input'];
  /** The project key of the LaunchDarkly integration. */
  projectKey: Scalars['String']['input'];
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Issue manual sorting options. */
export type ManualSort = {
  /** Whether nulls should be sorted first or last */
  nulls?: InputMaybe<PaginationNulls>;
  /** The order for the individual sort */
  order?: InputMaybe<PaginationSortOrder>;
};

/** Issue project milestone options. */
export type MilestoneSort = {
  /** Whether nulls should be sorted first or last */
  nulls?: InputMaybe<PaginationNulls>;
  /** The order for the individual sort */
  order?: InputMaybe<PaginationSortOrder>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates an integration api key for Airbyte to connect with Linear. */
  airbyteIntegrationConnect: IntegrationPayload;
  /** [INTERNAL] Creates a new API key. */
  apiKeyCreate: ApiKeyPayload;
  /** [INTERNAL] Deletes an API key. */
  apiKeyDelete: DeletePayload;
  /**
   * [DEPRECATED] Archives an issue attachment.
   * @deprecated This mutation is deprecated, please use `attachmentDelete` instead
   */
  attachmentArchive: AttachmentArchivePayload;
  /** Creates a new attachment, or updates existing if the same `url` and `issueId` is used. */
  attachmentCreate: AttachmentPayload;
  /** Deletes an issue attachment. */
  attachmentDelete: DeletePayload;
  /** Link an existing Discord message to an issue. */
  attachmentLinkDiscord: AttachmentPayload;
  /** Link an existing Front conversation to an issue. */
  attachmentLinkFront: FrontAttachmentPayload;
  /** Link a GitHub issue to a Linear issue. */
  attachmentLinkGitHubIssue: AttachmentPayload;
  /** Link a GitHub pull request to an issue. */
  attachmentLinkGitHubPR: AttachmentPayload;
  /** Link an existing GitLab MR to an issue. */
  attachmentLinkGitLabMR: AttachmentPayload;
  /** Link an existing Intercom conversation to an issue. */
  attachmentLinkIntercom: AttachmentPayload;
  /** Link an existing Jira issue to an issue. */
  attachmentLinkJiraIssue: AttachmentPayload;
  /** Link an existing Slack message to an issue. */
  attachmentLinkSlack: AttachmentPayload;
  /** Link any url to an issue. */
  attachmentLinkURL: AttachmentPayload;
  /** Link an existing Zendesk ticket to an issue. */
  attachmentLinkZendesk: AttachmentPayload;
  /** Begin syncing the thread for an existing Slack message attachment with a comment thread on its issue. */
  attachmentSyncToSlack: AttachmentPayload;
  /** Updates an existing issue attachment. */
  attachmentUpdate: AttachmentPayload;
  /** Creates a new comment. */
  commentCreate: CommentPayload;
  /** Deletes a comment. */
  commentDelete: DeletePayload;
  /** Resolves a comment. */
  commentResolve: CommentPayload;
  /** Unresolves a comment. */
  commentUnresolve: CommentPayload;
  /** Updates a comment. */
  commentUpdate: CommentPayload;
  /** Saves user message. */
  contactCreate: ContactPayload;
  /** [INTERNAL] Saves sales pricing inquiry to Front. */
  contactSalesCreate: ContactPayload;
  /** Create CSV export report for the organization. */
  createCsvExportReport: CreateCsvExportReportPayload;
  /** Creates an organization from onboarding. */
  createOrganizationFromOnboarding: CreateOrJoinOrganizationResponse;
  /** Create a notification to remind a user about a project update. */
  createProjectUpdateReminder: ProjectUpdateReminderPayload;
  /** Creates a new custom view. */
  customViewCreate: CustomViewPayload;
  /** Deletes a custom view. */
  customViewDelete: DeletePayload;
  /** Updates a custom view. */
  customViewUpdate: CustomViewPayload;
  /** [ALPHA] Creates a new customer. */
  customerCreate: CustomerPayload;
  /** [ALPHA] Deletes a customer. */
  customerDelete: DeletePayload;
  /** [ALPHA] Creates a new customer need. */
  customerNeedCreate: CustomerNeedPayload;
  /** [ALPHA] Deletes a customer need. */
  customerNeedDelete: DeletePayload;
  /** [ALPHA] Updates a customer need */
  customerNeedUpdate: CustomerNeedPayload;
  /** [ALPHA] Creates a new customer status. */
  customerStatusCreate: CustomerStatusPayload;
  /** [ALPHA] Deletes a customer status. */
  customerStatusDelete: DeletePayload;
  /** [ALPHA] Updates a customer status. */
  customerStatusUpdate: CustomerStatusPayload;
  /** [ALPHA] Updates a customer */
  customerUpdate: CustomerPayload;
  /** Archives a cycle. */
  cycleArchive: CycleArchivePayload;
  /** Creates a new cycle. */
  cycleCreate: CyclePayload;
  /** Shifts all cycles starts and ends by a certain number of days, starting from the provided cycle onwards. */
  cycleShiftAll: CyclePayload;
  /** Shifts all cycles starts and ends by a certain number of days, starting from the provided cycle onwards. */
  cycleStartUpcomingCycleToday: CyclePayload;
  /** Updates a cycle. */
  cycleUpdate: CyclePayload;
  /** Creates a new diary entry. */
  diaryEntryCreate: DiaryEntryPayload;
  /** Deletes a diaryEntry. */
  diaryEntryDelete: DeletePayload;
  /** Updates a diaryEntry. */
  diaryEntryUpdate: DiaryEntryPayload;
  /** Creates a new document. */
  documentCreate: DocumentPayload;
  /** Deletes (trashes) a document. */
  documentDelete: DocumentArchivePayload;
  /** Restores a document. */
  documentUnarchive: DocumentArchivePayload;
  /** Updates a document. */
  documentUpdate: DocumentPayload;
  /** Creates a new email intake address. */
  emailIntakeAddressCreate: EmailIntakeAddressPayload;
  /** Deletes an email intake address object. */
  emailIntakeAddressDelete: DeletePayload;
  /** Rotates an existing email intake address. */
  emailIntakeAddressRotate: EmailIntakeAddressPayload;
  /** Updates an existing email intake address. */
  emailIntakeAddressUpdate: EmailIntakeAddressPayload;
  /** Authenticates a user account via email and authentication token. */
  emailTokenUserAccountAuth: AuthResolverResponse;
  /** Unsubscribes the user from one type of email. */
  emailUnsubscribe: EmailUnsubscribePayload;
  /** Finds or creates a new user account by email and sends an email with token. */
  emailUserAccountAuthChallenge: EmailUserAccountAuthChallengeResponse;
  /** Creates a custom emoji. */
  emojiCreate: EmojiPayload;
  /** Deletes an emoji. */
  emojiDelete: DeletePayload;
  /** Creates a new entity link. */
  entityExternalLinkCreate: EntityExternalLinkPayload;
  /** Deletes an entity link. */
  entityExternalLinkDelete: DeletePayload;
  /** Updates an entity link. */
  entityExternalLinkUpdate: EntityExternalLinkPayload;
  /** Creates a new favorite (project, cycle etc). */
  favoriteCreate: FavoritePayload;
  /** Deletes a favorite reference. */
  favoriteDelete: DeletePayload;
  /** Updates a favorite. */
  favoriteUpdate: FavoritePayload;
  /** XHR request payload to upload an images, video and other attachments directly to Linear's cloud storage. */
  fileUpload: UploadPayload;
  /** Creates a new automation state. */
  gitAutomationStateCreate: GitAutomationStatePayload;
  /** Archives an automation state. */
  gitAutomationStateDelete: DeletePayload;
  /** Updates an existing state. */
  gitAutomationStateUpdate: GitAutomationStatePayload;
  /** Creates a Git target branch automation. */
  gitAutomationTargetBranchCreate: GitAutomationTargetBranchPayload;
  /** Archives a Git target branch automation. */
  gitAutomationTargetBranchDelete: DeletePayload;
  /** Updates an existing Git target branch automation. */
  gitAutomationTargetBranchUpdate: GitAutomationTargetBranchPayload;
  /** Authenticate user account through Google OAuth. This is the 2nd step of OAuth flow. */
  googleUserAccountAuth: AuthResolverResponse;
  /** Upload an image from an URL to Linear. */
  imageUploadFromUrl: ImageUploadFromUrlPayload;
  /** XHR request payload to upload a file for import, directly to Linear's cloud storage. */
  importFileUpload: UploadPayload;
  /** Archives a initiative. */
  initiativeArchive: InitiativeArchivePayload;
  /** Creates a new initiative. */
  initiativeCreate: InitiativePayload;
  /** Deletes (trashes) an initiative. */
  initiativeDelete: DeletePayload;
  /** Creates a new initiativeToProject join. */
  initiativeToProjectCreate: InitiativeToProjectPayload;
  /** Deletes a initiativeToProject. */
  initiativeToProjectDelete: DeletePayload;
  /** Updates a initiativeToProject. */
  initiativeToProjectUpdate: InitiativeToProjectPayload;
  /** Unarchives a initiative. */
  initiativeUnarchive: InitiativeArchivePayload;
  /** Updates a initiative. */
  initiativeUpdate: InitiativePayload;
  /** Archives an integration. */
  integrationArchive: DeletePayload;
  /** Connect a Slack channel to Asks. */
  integrationAsksConnectChannel: AsksChannelConnectPayload;
  /** Deletes an integration. */
  integrationDelete: DeletePayload;
  /** Integrates the organization with Discord. */
  integrationDiscord: IntegrationPayload;
  /** Integrates the organization with Figma. */
  integrationFigma: IntegrationPayload;
  /** Integrates the organization with Front. */
  integrationFront: IntegrationPayload;
  /** Connects the organization with a GitHub Enterprise Server. */
  integrationGitHubEnterpriseServerConnect: GitHubEnterpriseServerPayload;
  /** Connect your GitHub account to Linear. */
  integrationGitHubPersonal: IntegrationPayload;
  /** Generates a webhook for the GitHub commit integration. */
  integrationGithubCommitCreate: GitHubCommitIntegrationPayload;
  /** Connects the organization with the GitHub App. */
  integrationGithubConnect: IntegrationPayload;
  /** Connects the organization with the GitHub Import App. */
  integrationGithubImportConnect: IntegrationPayload;
  /** Connects the organization with a GitLab Access Token. */
  integrationGitlabConnect: GitLabIntegrationCreatePayload;
  /** [Internal] Connects the Google Calendar to the user to this Linear account via OAuth2. */
  integrationGoogleCalendarPersonalConnect: IntegrationPayload;
  /** Integrates the organization with Google Sheets. */
  integrationGoogleSheets: IntegrationPayload;
  /** Integrates the organization with Intercom. */
  integrationIntercom: IntegrationPayload;
  /** Disconnects the organization from Intercom. */
  integrationIntercomDelete: IntegrationPayload;
  /**
   * [DEPRECATED] Updates settings on the Intercom integration.
   * @deprecated This mutation is deprecated, please use `integrationSettingsUpdate` instead
   */
  integrationIntercomSettingsUpdate: IntegrationPayload;
  /** Connect your Jira account to Linear. */
  integrationJiraPersonal: IntegrationPayload;
  /** [INTERNAL] Updates a Jira Integration. */
  integrationJiraUpdate: IntegrationPayload;
  /** [INTERNAL] Integrates the organization with LaunchDarkly. */
  integrationLaunchDarklyConnect: IntegrationPayload;
  /**
   * Enables Loom integration for the organization.
   * @deprecated Not available.
   */
  integrationLoom: IntegrationPayload;
  /** [INTERNAL] Integrates the organization with Opsgenie. */
  integrationOpsgenieConnect: IntegrationPayload;
  /** [INTERNAL] Refresh Opsgenie schedule mappings. */
  integrationOpsgenieRefreshScheduleMappings: IntegrationPayload;
  /** [INTERNAL] Integrates the organization with PagerDuty. */
  integrationPagerDutyConnect: IntegrationPayload;
  /** [INTERNAL] Refresh PagerDuty schedule mappings. */
  integrationPagerDutyRefreshScheduleMappings: IntegrationPayload;
  /** Requests a currently unavailable integration. */
  integrationRequest: IntegrationRequestPayload;
  /** Integrates the organization with Sentry. */
  integrationSentryConnect: IntegrationPayload;
  /** [INTERNAL] Updates the integration. */
  integrationSettingsUpdate: IntegrationPayload;
  /** Integrates the organization with Slack. */
  integrationSlack: IntegrationPayload;
  /** Integrates the organization with the Slack Asks app. */
  integrationSlackAsks: IntegrationPayload;
  /** Slack integration for custom view notifications. */
  integrationSlackCustomViewNotifications: SlackChannelConnectPayload;
  /** Imports custom emojis from your Slack workspace. */
  integrationSlackImportEmojis: IntegrationPayload;
  /** Slack integration for organization level project update notifications. */
  integrationSlackOrgProjectUpdatesPost: SlackChannelConnectPayload;
  /** Integrates your personal notifications with Slack. */
  integrationSlackPersonal: IntegrationPayload;
  /** Slack webhook integration. */
  integrationSlackPost: SlackChannelConnectPayload;
  /** Slack integration for project notifications. */
  integrationSlackProjectPost: SlackChannelConnectPayload;
  /** Creates a new integrationTemplate join. */
  integrationTemplateCreate: IntegrationTemplatePayload;
  /** Deletes a integrationTemplate. */
  integrationTemplateDelete: DeletePayload;
  /** Integrates the organization with Zendesk. */
  integrationZendesk: IntegrationPayload;
  /** Creates new settings for one or more integrations. */
  integrationsSettingsCreate: IntegrationsSettingsPayload;
  /** Updates settings related to integrations for a project or a team. */
  integrationsSettingsUpdate: IntegrationsSettingsPayload;
  /** Adds a label to an issue. */
  issueAddLabel: IssuePayload;
  /** Archives an issue. */
  issueArchive: IssueArchivePayload;
  /** Updates multiple issues at once. */
  issueBatchUpdate: IssueBatchPayload;
  /** Creates a new issue. */
  issueCreate: IssuePayload;
  /** Deletes (trashes) an issue. */
  issueDelete: IssueArchivePayload;
  /** [INTERNAL] Updates an issue description from the Front app to handle Front attachments correctly. */
  issueDescriptionUpdateFromFront: IssuePayload;
  /** Kicks off an Asana import job. */
  issueImportCreateAsana: IssueImportPayload;
  /** Kicks off a Jira import job from a CSV. */
  issueImportCreateCSVJira: IssueImportPayload;
  /** Kicks off a Shortcut (formerly Clubhouse) import job. */
  issueImportCreateClubhouse: IssueImportPayload;
  /** Kicks off a GitHub import job. */
  issueImportCreateGithub: IssueImportPayload;
  /** Kicks off a Jira import job. */
  issueImportCreateJira: IssueImportPayload;
  /** [INTERNAL] Kicks off a Linear to Linear import job. */
  issueImportCreateLinearV2: IssueImportPayload;
  /** Deletes an import job. */
  issueImportDelete: IssueImportDeletePayload;
  /** Kicks off import processing. */
  issueImportProcess: IssueImportPayload;
  /** Updates the mapping for the issue import. */
  issueImportUpdate: IssueImportPayload;
  /** Creates a new label. */
  issueLabelCreate: IssueLabelPayload;
  /** Deletes an issue label. */
  issueLabelDelete: DeletePayload;
  /** Updates an label. */
  issueLabelUpdate: IssueLabelPayload;
  /** Creates a new issue relation. */
  issueRelationCreate: IssueRelationPayload;
  /** Deletes an issue relation. */
  issueRelationDelete: DeletePayload;
  /** Updates an issue relation. */
  issueRelationUpdate: IssueRelationPayload;
  /** Adds an issue reminder. Will cause a notification to be sent when the issue reminder time is reached. */
  issueReminder: IssuePayload;
  /** Removes a label from an issue. */
  issueRemoveLabel: IssuePayload;
  /** Subscribes a user to an issue. */
  issueSubscribe: IssuePayload;
  /** Unarchives an issue. */
  issueUnarchive: IssueArchivePayload;
  /** Unsubscribes a user from an issue. */
  issueUnsubscribe: IssuePayload;
  /** Updates an issue. */
  issueUpdate: IssuePayload;
  /** [INTERNAL] Connects the organization with a Jira Personal Access Token. */
  jiraIntegrationConnect: IntegrationPayload;
  /** Join an organization from onboarding. */
  joinOrganizationFromOnboarding: CreateOrJoinOrganizationResponse;
  /** Leave an organization. */
  leaveOrganization: CreateOrJoinOrganizationResponse;
  /** Logout the client. */
  logout: LogoutResponse;
  /** Logout all of user's sessions including the active one. */
  logoutAllSessions: LogoutResponse;
  /** Logout all of user's sessions excluding the current one. */
  logoutOtherSessions: LogoutResponse;
  /** Logout an individual session with its ID. */
  logoutSession: LogoutResponse;
  /** Archives a notification. */
  notificationArchive: NotificationArchivePayload;
  /** Archives a notification and all related notifications. */
  notificationArchiveAll: NotificationBatchActionPayload;
  /** Marks notification and all related notifications as read. */
  notificationMarkReadAll: NotificationBatchActionPayload;
  /** Marks notification and all related notifications as unread. */
  notificationMarkUnreadAll: NotificationBatchActionPayload;
  /** Snoozes a notification and all related notifications. */
  notificationSnoozeAll: NotificationBatchActionPayload;
  /** Creates a new notification subscription for a cycle, custom view, label, project or team. */
  notificationSubscriptionCreate: NotificationSubscriptionPayload;
  /**
   * Deletes a notification subscription reference.
   * @deprecated Update `notificationSubscription.active` to `false` instead.
   */
  notificationSubscriptionDelete: DeletePayload;
  /** Updates a notification subscription. */
  notificationSubscriptionUpdate: NotificationSubscriptionPayload;
  /** Unarchives a notification. */
  notificationUnarchive: NotificationArchivePayload;
  /** Unsnoozes a notification and all related notifications. */
  notificationUnsnoozeAll: NotificationBatchActionPayload;
  /** Updates a notification. */
  notificationUpdate: NotificationPayload;
  /** Cancels the deletion of an organization. Administrator privileges required. */
  organizationCancelDelete: OrganizationCancelDeletePayload;
  /** Delete's an organization. Administrator privileges required. */
  organizationDelete: OrganizationDeletePayload;
  /** Get an organization's delete confirmation token. Administrator privileges required. */
  organizationDeleteChallenge: OrganizationDeletePayload;
  /** [INTERNAL] Verifies a domain claim. */
  organizationDomainClaim: OrganizationDomainSimplePayload;
  /** [INTERNAL] Adds a domain to be allowed for an organization. */
  organizationDomainCreate: OrganizationDomainPayload;
  /** Deletes a domain. */
  organizationDomainDelete: DeletePayload;
  /** [INTERNAL] Updates an organization domain settings. */
  organizationDomainUpdate: OrganizationDomainPayload;
  /** [INTERNAL] Verifies a domain to be added to an organization. */
  organizationDomainVerify: OrganizationDomainPayload;
  /** Creates a new organization invite. */
  organizationInviteCreate: OrganizationInvitePayload;
  /** Deletes an organization invite. */
  organizationInviteDelete: DeletePayload;
  /** Updates an organization invite. */
  organizationInviteUpdate: OrganizationInvitePayload;
  /** Starts a trial for the organization. Administrator privileges required. */
  organizationStartTrial: OrganizationStartTrialPayload;
  /** Updates the user's organization. */
  organizationUpdate: OrganizationPayload;
  /** [INTERNAL] Finish passkey login process. */
  passkeyLoginFinish: AuthResolverResponse;
  /** [INTERNAL] Starts passkey login process. */
  passkeyLoginStart: PasskeyLoginStartResponse;
  /**
   * Archives a project.
   * @deprecated Deprecated in favor of projectDelete.
   */
  projectArchive: ProjectArchivePayload;
  /** Creates a new project. */
  projectCreate: ProjectPayload;
  /** Deletes (trashes) a project. */
  projectDelete: ProjectArchivePayload;
  /** Creates a new project link. */
  projectLinkCreate: ProjectLinkPayload;
  /** Deletes a project link. */
  projectLinkDelete: DeletePayload;
  /** Updates a project link. */
  projectLinkUpdate: ProjectLinkPayload;
  /** Creates a new project milestone. */
  projectMilestoneCreate: ProjectMilestonePayload;
  /** Deletes a project milestone. */
  projectMilestoneDelete: DeletePayload;
  /** Updates a project milestone. */
  projectMilestoneUpdate: ProjectMilestonePayload;
  /** [INTERNAL] Updates all projects currently assigned to to a project status to a new project status. */
  projectReassignStatus: SuccessPayload;
  /** [ALPHA] Creates a new project relation. */
  projectRelationCreate: ProjectRelationPayload;
  /** [ALPHA] Deletes a project relation. */
  projectRelationDelete: DeletePayload;
  /** [ALPHA] Updates a project relation. */
  projectRelationUpdate: ProjectRelationPayload;
  /** Unarchives a project. */
  projectUnarchive: ProjectArchivePayload;
  /** Updates a project. */
  projectUpdate: ProjectPayload;
  /** Creates a new project update. */
  projectUpdateCreate: ProjectUpdatePayload;
  /** Deletes a project update. */
  projectUpdateDelete: DeletePayload;
  /** Creates a new interaction on a project update. */
  projectUpdateInteractionCreate: ProjectUpdateInteractionPayload;
  /** Mark a project update as read. */
  projectUpdateMarkAsRead: ProjectUpdateWithInteractionPayload;
  /** Updates a project update. */
  projectUpdateUpdate: ProjectUpdatePayload;
  /** Creates a push subscription. */
  pushSubscriptionCreate: PushSubscriptionPayload;
  /** Deletes a push subscription. */
  pushSubscriptionDelete: PushSubscriptionPayload;
  /** Creates a new reaction. */
  reactionCreate: ReactionPayload;
  /** Deletes a reaction. */
  reactionDelete: DeletePayload;
  /** Manually update Google Sheets data. */
  refreshGoogleSheetsData: IntegrationPayload;
  /** Re-send an organization invite. */
  resendOrganizationInvite: DeletePayload;
  /** Archives a roadmap. */
  roadmapArchive: RoadmapArchivePayload;
  /** Creates a new roadmap. */
  roadmapCreate: RoadmapPayload;
  /** Deletes a roadmap. */
  roadmapDelete: DeletePayload;
  /** Creates a new roadmapToProject join. */
  roadmapToProjectCreate: RoadmapToProjectPayload;
  /** Deletes a roadmapToProject. */
  roadmapToProjectDelete: DeletePayload;
  /** Updates a roadmapToProject. */
  roadmapToProjectUpdate: RoadmapToProjectPayload;
  /** Unarchives a roadmap. */
  roadmapUnarchive: RoadmapArchivePayload;
  /** Updates a roadmap. */
  roadmapUpdate: RoadmapPayload;
  /** Authenticates a user account via email and authentication token for SAML. */
  samlTokenUserAccountAuth: AuthResolverResponse;
  /** Creates a new team. The user who creates the team will automatically be added as a member to the newly created team. */
  teamCreate: TeamPayload;
  /** Deletes team's cycles data */
  teamCyclesDelete: TeamPayload;
  /** Deletes a team. */
  teamDelete: DeletePayload;
  /** Deletes a previously used team key. */
  teamKeyDelete: DeletePayload;
  /** Creates a new team membership. */
  teamMembershipCreate: TeamMembershipPayload;
  /** Deletes a team membership. */
  teamMembershipDelete: DeletePayload;
  /** Updates a team membership. */
  teamMembershipUpdate: TeamMembershipPayload;
  /** Unarchives a team and cancels deletion. */
  teamUnarchive: TeamArchivePayload;
  /** Updates a team. */
  teamUpdate: TeamPayload;
  /** Creates a new template. */
  templateCreate: TemplatePayload;
  /** Deletes a template. */
  templateDelete: DeletePayload;
  /** Updates an existing template. */
  templateUpdate: TemplatePayload;
  /** Creates a new time schedule. */
  timeScheduleCreate: TimeSchedulePayload;
  /** Deletes a time schedule. */
  timeScheduleDelete: DeletePayload;
  /** Refresh the integration schedule information. */
  timeScheduleRefreshIntegrationSchedule: TimeSchedulePayload;
  /** Updates a time schedule. */
  timeScheduleUpdate: TimeSchedulePayload;
  /** Upsert an external time schedule. */
  timeScheduleUpsertExternal: TimeSchedulePayload;
  /** Creates a new triage responsibility. */
  triageResponsibilityCreate: TriageResponsibilityPayload;
  /** Deletes a triage responsibility. */
  triageResponsibilityDelete: DeletePayload;
  /** Updates an existing triage responsibility. */
  triageResponsibilityUpdate: TriageResponsibilityPayload;
  /** Makes user a regular user. Can only be called by an admin. */
  userDemoteAdmin: UserAdminPayload;
  /** Makes user a guest. Can only be called by an admin. */
  userDemoteMember: UserAdminPayload;
  /** Connects the Discord user to this Linear account via OAuth2. */
  userDiscordConnect: UserPayload;
  /** Disconnects the external user from this Linear account. */
  userExternalUserDisconnect: UserPayload;
  /** Updates a user's settings flag. */
  userFlagUpdate: UserSettingsFlagPayload;
  /** Makes user an admin. Can only be called by an admin. */
  userPromoteAdmin: UserAdminPayload;
  /** Makes user a regular user. Can only be called by an admin. */
  userPromoteMember: UserAdminPayload;
  /** Resets user's setting flags. */
  userSettingsFlagsReset: UserSettingsFlagsResetPayload;
  /** Updates the user's settings. */
  userSettingsUpdate: UserSettingsPayload;
  /** Suspends a user. Can only be called by an admin. */
  userSuspend: UserAdminPayload;
  /** Un-suspends a user. Can only be called by an admin. */
  userUnsuspend: UserAdminPayload;
  /** Updates a user. Only available to organization admins and the user themselves. */
  userUpdate: UserPayload;
  /** Creates a new ViewPreferences object. */
  viewPreferencesCreate: ViewPreferencesPayload;
  /** Deletes a ViewPreferences. */
  viewPreferencesDelete: DeletePayload;
  /** Updates an existing ViewPreferences object. */
  viewPreferencesUpdate: ViewPreferencesPayload;
  /** Creates a new webhook. */
  webhookCreate: WebhookPayload;
  /** Deletes a Webhook. */
  webhookDelete: DeletePayload;
  /** Updates an existing Webhook. */
  webhookUpdate: WebhookPayload;
  /** Archives a state. Only states with issues that have all been archived can be archived. */
  workflowStateArchive: WorkflowStateArchivePayload;
  /** Creates a new state, adding it to the workflow of a team. */
  workflowStateCreate: WorkflowStatePayload;
  /** Updates a state. */
  workflowStateUpdate: WorkflowStatePayload;
};


export type MutationAirbyteIntegrationConnectArgs = {
  input: AirbyteConfigurationInput;
};


export type MutationApiKeyCreateArgs = {
  input: ApiKeyCreateInput;
};


export type MutationApiKeyDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationAttachmentArchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationAttachmentCreateArgs = {
  input: AttachmentCreateInput;
};


export type MutationAttachmentDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationAttachmentLinkDiscordArgs = {
  channelId: Scalars['String']['input'];
  createAsUser?: InputMaybe<Scalars['String']['input']>;
  displayIconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issueId: Scalars['String']['input'];
  messageId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};


export type MutationAttachmentLinkFrontArgs = {
  conversationId: Scalars['String']['input'];
  createAsUser?: InputMaybe<Scalars['String']['input']>;
  displayIconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issueId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAttachmentLinkGitHubIssueArgs = {
  createAsUser?: InputMaybe<Scalars['String']['input']>;
  displayIconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issueId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};


export type MutationAttachmentLinkGitHubPrArgs = {
  createAsUser?: InputMaybe<Scalars['String']['input']>;
  displayIconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issueId: Scalars['String']['input'];
  number?: InputMaybe<Scalars['Float']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  repo?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};


export type MutationAttachmentLinkGitLabMrArgs = {
  createAsUser?: InputMaybe<Scalars['String']['input']>;
  displayIconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issueId: Scalars['String']['input'];
  number: Scalars['Float']['input'];
  projectPathWithNamespace: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};


export type MutationAttachmentLinkIntercomArgs = {
  conversationId: Scalars['String']['input'];
  createAsUser?: InputMaybe<Scalars['String']['input']>;
  displayIconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issueId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAttachmentLinkJiraIssueArgs = {
  createAsUser?: InputMaybe<Scalars['String']['input']>;
  displayIconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issueId: Scalars['String']['input'];
  jiraIssueId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAttachmentLinkSlackArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  createAsUser?: InputMaybe<Scalars['String']['input']>;
  displayIconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issueId: Scalars['String']['input'];
  latest?: InputMaybe<Scalars['String']['input']>;
  syncToCommentThread?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  ts?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};


export type MutationAttachmentLinkUrlArgs = {
  createAsUser?: InputMaybe<Scalars['String']['input']>;
  displayIconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issueId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};


export type MutationAttachmentLinkZendeskArgs = {
  createAsUser?: InputMaybe<Scalars['String']['input']>;
  displayIconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issueId: Scalars['String']['input'];
  ticketId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAttachmentSyncToSlackArgs = {
  id: Scalars['String']['input'];
};


export type MutationAttachmentUpdateArgs = {
  id: Scalars['String']['input'];
  input: AttachmentUpdateInput;
};


export type MutationCommentCreateArgs = {
  input: CommentCreateInput;
};


export type MutationCommentDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationCommentResolveArgs = {
  id: Scalars['String']['input'];
  resolvingCommentId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCommentUnresolveArgs = {
  id: Scalars['String']['input'];
};


export type MutationCommentUpdateArgs = {
  id: Scalars['String']['input'];
  input: CommentUpdateInput;
};


export type MutationContactCreateArgs = {
  input: ContactCreateInput;
};


export type MutationContactSalesCreateArgs = {
  input: ContactSalesCreateInput;
};


export type MutationCreateCsvExportReportArgs = {
  includePrivateTeamIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationCreateOrganizationFromOnboardingArgs = {
  input: CreateOrganizationInput;
  survey?: InputMaybe<OnboardingCustomerSurvey>;
};


export type MutationCreateProjectUpdateReminderArgs = {
  projectId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomViewCreateArgs = {
  input: CustomViewCreateInput;
};


export type MutationCustomViewDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationCustomViewUpdateArgs = {
  id: Scalars['String']['input'];
  input: CustomViewUpdateInput;
};


export type MutationCustomerCreateArgs = {
  input: CustomerCreateInput;
};


export type MutationCustomerDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationCustomerNeedCreateArgs = {
  input: CustomerNeedCreateInput;
};


export type MutationCustomerNeedDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationCustomerNeedUpdateArgs = {
  id: Scalars['String']['input'];
  input: CustomerNeedUpdateInput;
};


export type MutationCustomerStatusCreateArgs = {
  input: CustomerStatusCreateInput;
};


export type MutationCustomerStatusDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationCustomerStatusUpdateArgs = {
  id: Scalars['String']['input'];
  input: CustomerStatusUpdateInput;
};


export type MutationCustomerUpdateArgs = {
  id: Scalars['String']['input'];
  input: CustomerUpdateInput;
};


export type MutationCycleArchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationCycleCreateArgs = {
  input: CycleCreateInput;
};


export type MutationCycleShiftAllArgs = {
  input: CycleShiftAllInput;
};


export type MutationCycleStartUpcomingCycleTodayArgs = {
  id: Scalars['String']['input'];
};


export type MutationCycleUpdateArgs = {
  id: Scalars['String']['input'];
  input: CycleUpdateInput;
};


export type MutationDiaryEntryCreateArgs = {
  input: DiaryEntryCreateInput;
};


export type MutationDiaryEntryDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationDiaryEntryUpdateArgs = {
  id: Scalars['String']['input'];
  input: DiaryEntryUpdateInput;
};


export type MutationDocumentCreateArgs = {
  input: DocumentCreateInput;
};


export type MutationDocumentDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationDocumentUnarchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationDocumentUpdateArgs = {
  id: Scalars['String']['input'];
  input: DocumentUpdateInput;
};


export type MutationEmailIntakeAddressCreateArgs = {
  input: EmailIntakeAddressCreateInput;
};


export type MutationEmailIntakeAddressDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationEmailIntakeAddressRotateArgs = {
  id: Scalars['String']['input'];
};


export type MutationEmailIntakeAddressUpdateArgs = {
  id: Scalars['String']['input'];
  input: EmailIntakeAddressUpdateInput;
};


export type MutationEmailTokenUserAccountAuthArgs = {
  input: TokenUserAccountAuthInput;
};


export type MutationEmailUnsubscribeArgs = {
  input: EmailUnsubscribeInput;
};


export type MutationEmailUserAccountAuthChallengeArgs = {
  input: EmailUserAccountAuthChallengeInput;
};


export type MutationEmojiCreateArgs = {
  input: EmojiCreateInput;
};


export type MutationEmojiDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationEntityExternalLinkCreateArgs = {
  input: EntityExternalLinkCreateInput;
};


export type MutationEntityExternalLinkDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationEntityExternalLinkUpdateArgs = {
  id: Scalars['String']['input'];
  input: EntityExternalLinkUpdateInput;
};


export type MutationFavoriteCreateArgs = {
  input: FavoriteCreateInput;
};


export type MutationFavoriteDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationFavoriteUpdateArgs = {
  id: Scalars['String']['input'];
  input: FavoriteUpdateInput;
};


export type MutationFileUploadArgs = {
  contentType: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  makePublic?: InputMaybe<Scalars['Boolean']['input']>;
  metaData?: InputMaybe<Scalars['JSON']['input']>;
  size: Scalars['Int']['input'];
};


export type MutationGitAutomationStateCreateArgs = {
  input: GitAutomationStateCreateInput;
};


export type MutationGitAutomationStateDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationGitAutomationStateUpdateArgs = {
  id: Scalars['String']['input'];
  input: GitAutomationStateUpdateInput;
};


export type MutationGitAutomationTargetBranchCreateArgs = {
  input: GitAutomationTargetBranchCreateInput;
};


export type MutationGitAutomationTargetBranchDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationGitAutomationTargetBranchUpdateArgs = {
  id: Scalars['String']['input'];
  input: GitAutomationTargetBranchUpdateInput;
};


export type MutationGoogleUserAccountAuthArgs = {
  input: GoogleUserAccountAuthInput;
};


export type MutationImageUploadFromUrlArgs = {
  url: Scalars['String']['input'];
};


export type MutationImportFileUploadArgs = {
  contentType: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  metaData?: InputMaybe<Scalars['JSON']['input']>;
  size: Scalars['Int']['input'];
};


export type MutationInitiativeArchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationInitiativeCreateArgs = {
  input: InitiativeCreateInput;
};


export type MutationInitiativeDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationInitiativeToProjectCreateArgs = {
  input: InitiativeToProjectCreateInput;
};


export type MutationInitiativeToProjectDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationInitiativeToProjectUpdateArgs = {
  id: Scalars['String']['input'];
  input: InitiativeToProjectUpdateInput;
};


export type MutationInitiativeUnarchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationInitiativeUpdateArgs = {
  id: Scalars['String']['input'];
  input: InitiativeUpdateInput;
};


export type MutationIntegrationArchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationIntegrationAsksConnectChannelArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationIntegrationDiscordArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationFigmaArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationFrontArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationGitHubEnterpriseServerConnectArgs = {
  githubUrl: Scalars['String']['input'];
  organizationName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIntegrationGitHubPersonalArgs = {
  code: Scalars['String']['input'];
};


export type MutationIntegrationGithubConnectArgs = {
  installationId: Scalars['String']['input'];
};


export type MutationIntegrationGithubImportConnectArgs = {
  installationId: Scalars['String']['input'];
};


export type MutationIntegrationGitlabConnectArgs = {
  accessToken: Scalars['String']['input'];
  gitlabUrl: Scalars['String']['input'];
};


export type MutationIntegrationGoogleCalendarPersonalConnectArgs = {
  code: Scalars['String']['input'];
};


export type MutationIntegrationGoogleSheetsArgs = {
  code: Scalars['String']['input'];
};


export type MutationIntegrationIntercomArgs = {
  code: Scalars['String']['input'];
  domainUrl?: InputMaybe<Scalars['String']['input']>;
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationIntercomSettingsUpdateArgs = {
  input: IntercomSettingsInput;
};


export type MutationIntegrationJiraPersonalArgs = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIntegrationJiraUpdateArgs = {
  input: JiraUpdateInput;
};


export type MutationIntegrationLaunchDarklyConnectArgs = {
  apiKey: Scalars['String']['input'];
  environment: Scalars['String']['input'];
  projectKey: Scalars['String']['input'];
};


export type MutationIntegrationOpsgenieConnectArgs = {
  apiKey: Scalars['String']['input'];
};


export type MutationIntegrationPagerDutyConnectArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationRequestArgs = {
  input: IntegrationRequestInput;
};


export type MutationIntegrationSentryConnectArgs = {
  code: Scalars['String']['input'];
  installationId: Scalars['String']['input'];
  organizationSlug: Scalars['String']['input'];
};


export type MutationIntegrationSettingsUpdateArgs = {
  id: Scalars['String']['input'];
  input: IntegrationSettingsInput;
};


export type MutationIntegrationSlackArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
  shouldUseV2Auth?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationIntegrationSlackAsksArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationSlackCustomViewNotificationsArgs = {
  code: Scalars['String']['input'];
  customViewId: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationSlackImportEmojisArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationSlackOrgProjectUpdatesPostArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationSlackPersonalArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationIntegrationSlackPostArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
  shouldUseV2Auth?: InputMaybe<Scalars['Boolean']['input']>;
  teamId: Scalars['String']['input'];
};


export type MutationIntegrationSlackProjectPostArgs = {
  code: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
  service: Scalars['String']['input'];
};


export type MutationIntegrationTemplateCreateArgs = {
  input: IntegrationTemplateCreateInput;
};


export type MutationIntegrationTemplateDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationIntegrationZendeskArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
  scope: Scalars['String']['input'];
  subdomain: Scalars['String']['input'];
};


export type MutationIntegrationsSettingsCreateArgs = {
  input: IntegrationsSettingsCreateInput;
};


export type MutationIntegrationsSettingsUpdateArgs = {
  id: Scalars['String']['input'];
  input: IntegrationsSettingsUpdateInput;
};


export type MutationIssueAddLabelArgs = {
  id: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
};


export type MutationIssueArchiveArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationIssueBatchUpdateArgs = {
  ids: Array<Scalars['UUID']['input']>;
  input: IssueUpdateInput;
};


export type MutationIssueCreateArgs = {
  input: IssueCreateInput;
};


export type MutationIssueDeleteArgs = {
  id: Scalars['String']['input'];
  permanentlyDelete?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationIssueDescriptionUpdateFromFrontArgs = {
  description: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationIssueImportCreateAsanaArgs = {
  asanaTeamName: Scalars['String']['input'];
  asanaToken: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  includeClosedIssues?: InputMaybe<Scalars['Boolean']['input']>;
  instantProcess?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  teamName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIssueImportCreateCsvJiraArgs = {
  csvUrl: Scalars['String']['input'];
  jiraEmail?: InputMaybe<Scalars['String']['input']>;
  jiraHostname?: InputMaybe<Scalars['String']['input']>;
  jiraToken?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  teamName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIssueImportCreateClubhouseArgs = {
  clubhouseGroupName: Scalars['String']['input'];
  clubhouseToken: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  includeClosedIssues?: InputMaybe<Scalars['Boolean']['input']>;
  instantProcess?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  teamName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIssueImportCreateGithubArgs = {
  githubLabels?: InputMaybe<Array<Scalars['String']['input']>>;
  githubRepoIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  githubShouldImportOrgProjects?: InputMaybe<Scalars['Boolean']['input']>;
  includeClosedIssues?: InputMaybe<Scalars['Boolean']['input']>;
  instantProcess?: InputMaybe<Scalars['Boolean']['input']>;
  integrationId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  teamName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIssueImportCreateJiraArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  includeClosedIssues?: InputMaybe<Scalars['Boolean']['input']>;
  instantProcess?: InputMaybe<Scalars['Boolean']['input']>;
  jiraEmail: Scalars['String']['input'];
  jiraHostname: Scalars['String']['input'];
  jiraProject: Scalars['String']['input'];
  jiraToken: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  teamName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIssueImportCreateLinearV2Args = {
  id?: InputMaybe<Scalars['String']['input']>;
  linearSourceOrganizationId: Scalars['String']['input'];
};


export type MutationIssueImportDeleteArgs = {
  issueImportId: Scalars['String']['input'];
};


export type MutationIssueImportProcessArgs = {
  issueImportId: Scalars['String']['input'];
  mapping: Scalars['JSONObject']['input'];
};


export type MutationIssueImportUpdateArgs = {
  id: Scalars['String']['input'];
  input: IssueImportUpdateInput;
};


export type MutationIssueLabelCreateArgs = {
  input: IssueLabelCreateInput;
  replaceTeamLabels?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationIssueLabelDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationIssueLabelUpdateArgs = {
  id: Scalars['String']['input'];
  input: IssueLabelUpdateInput;
  replaceTeamLabels?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationIssueRelationCreateArgs = {
  input: IssueRelationCreateInput;
  overrideCreatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MutationIssueRelationDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationIssueRelationUpdateArgs = {
  id: Scalars['String']['input'];
  input: IssueRelationUpdateInput;
};


export type MutationIssueReminderArgs = {
  id: Scalars['String']['input'];
  reminderAt: Scalars['DateTime']['input'];
};


export type MutationIssueRemoveLabelArgs = {
  id: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
};


export type MutationIssueSubscribeArgs = {
  id: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIssueUnarchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationIssueUnsubscribeArgs = {
  id: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIssueUpdateArgs = {
  id: Scalars['String']['input'];
  input: IssueUpdateInput;
};


export type MutationJiraIntegrationConnectArgs = {
  input: JiraConfigurationInput;
};


export type MutationJoinOrganizationFromOnboardingArgs = {
  input: JoinOrganizationInput;
};


export type MutationLeaveOrganizationArgs = {
  organizationId: Scalars['String']['input'];
};


export type MutationLogoutSessionArgs = {
  sessionId: Scalars['String']['input'];
};


export type MutationNotificationArchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationNotificationArchiveAllArgs = {
  input: NotificationEntityInput;
};


export type MutationNotificationMarkReadAllArgs = {
  input: NotificationEntityInput;
  readAt: Scalars['DateTime']['input'];
};


export type MutationNotificationMarkUnreadAllArgs = {
  input: NotificationEntityInput;
};


export type MutationNotificationSnoozeAllArgs = {
  input: NotificationEntityInput;
  snoozedUntilAt: Scalars['DateTime']['input'];
};


export type MutationNotificationSubscriptionCreateArgs = {
  input: NotificationSubscriptionCreateInput;
};


export type MutationNotificationSubscriptionDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationNotificationSubscriptionUpdateArgs = {
  id: Scalars['String']['input'];
  input: NotificationSubscriptionUpdateInput;
};


export type MutationNotificationUnarchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationNotificationUnsnoozeAllArgs = {
  input: NotificationEntityInput;
  unsnoozedAt: Scalars['DateTime']['input'];
};


export type MutationNotificationUpdateArgs = {
  id: Scalars['String']['input'];
  input: NotificationUpdateInput;
};


export type MutationOrganizationDeleteArgs = {
  input: DeleteOrganizationInput;
};


export type MutationOrganizationDomainClaimArgs = {
  id: Scalars['String']['input'];
};


export type MutationOrganizationDomainCreateArgs = {
  input: OrganizationDomainCreateInput;
  triggerEmailVerification?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationOrganizationDomainDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationOrganizationDomainUpdateArgs = {
  id: Scalars['String']['input'];
  input: OrganizationDomainUpdateInput;
};


export type MutationOrganizationDomainVerifyArgs = {
  input: OrganizationDomainVerificationInput;
};


export type MutationOrganizationInviteCreateArgs = {
  input: OrganizationInviteCreateInput;
};


export type MutationOrganizationInviteDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationOrganizationInviteUpdateArgs = {
  id: Scalars['String']['input'];
  input: OrganizationInviteUpdateInput;
};


export type MutationOrganizationUpdateArgs = {
  input: OrganizationUpdateInput;
};


export type MutationPasskeyLoginFinishArgs = {
  authId: Scalars['String']['input'];
  response: Scalars['JSONObject']['input'];
};


export type MutationPasskeyLoginStartArgs = {
  authId: Scalars['String']['input'];
};


export type MutationProjectArchiveArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationProjectCreateArgs = {
  connectSlackChannel?: InputMaybe<Scalars['Boolean']['input']>;
  input: ProjectCreateInput;
};


export type MutationProjectDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectLinkCreateArgs = {
  input: ProjectLinkCreateInput;
};


export type MutationProjectLinkDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectLinkUpdateArgs = {
  id: Scalars['String']['input'];
  input: ProjectLinkUpdateInput;
};


export type MutationProjectMilestoneCreateArgs = {
  input: ProjectMilestoneCreateInput;
};


export type MutationProjectMilestoneDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectMilestoneUpdateArgs = {
  id: Scalars['String']['input'];
  input: ProjectMilestoneUpdateInput;
};


export type MutationProjectReassignStatusArgs = {
  newProjectStatusId: Scalars['String']['input'];
  originalProjectStatusId: Scalars['String']['input'];
};


export type MutationProjectRelationCreateArgs = {
  input: ProjectRelationCreateInput;
};


export type MutationProjectRelationDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectRelationUpdateArgs = {
  id: Scalars['String']['input'];
  input: ProjectRelationUpdateInput;
};


export type MutationProjectUnarchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectUpdateArgs = {
  id: Scalars['String']['input'];
  input: ProjectUpdateInput;
};


export type MutationProjectUpdateCreateArgs = {
  input: ProjectUpdateCreateInput;
};


export type MutationProjectUpdateDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectUpdateInteractionCreateArgs = {
  input: ProjectUpdateInteractionCreateInput;
};


export type MutationProjectUpdateMarkAsReadArgs = {
  id: Scalars['String']['input'];
};


export type MutationProjectUpdateUpdateArgs = {
  id: Scalars['String']['input'];
  input: ProjectUpdateUpdateInput;
};


export type MutationPushSubscriptionCreateArgs = {
  input: PushSubscriptionCreateInput;
};


export type MutationPushSubscriptionDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationReactionCreateArgs = {
  input: ReactionCreateInput;
};


export type MutationReactionDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationRefreshGoogleSheetsDataArgs = {
  id: Scalars['String']['input'];
};


export type MutationResendOrganizationInviteArgs = {
  id: Scalars['String']['input'];
};


export type MutationRoadmapArchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationRoadmapCreateArgs = {
  input: RoadmapCreateInput;
};


export type MutationRoadmapDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationRoadmapToProjectCreateArgs = {
  input: RoadmapToProjectCreateInput;
};


export type MutationRoadmapToProjectDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationRoadmapToProjectUpdateArgs = {
  id: Scalars['String']['input'];
  input: RoadmapToProjectUpdateInput;
};


export type MutationRoadmapUnarchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationRoadmapUpdateArgs = {
  id: Scalars['String']['input'];
  input: RoadmapUpdateInput;
};


export type MutationSamlTokenUserAccountAuthArgs = {
  input: TokenUserAccountAuthInput;
};


export type MutationTeamCreateArgs = {
  copySettingsFromTeamId?: InputMaybe<Scalars['String']['input']>;
  input: TeamCreateInput;
};


export type MutationTeamCyclesDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationTeamDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationTeamKeyDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationTeamMembershipCreateArgs = {
  input: TeamMembershipCreateInput;
};


export type MutationTeamMembershipDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationTeamMembershipUpdateArgs = {
  id: Scalars['String']['input'];
  input: TeamMembershipUpdateInput;
};


export type MutationTeamUnarchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationTeamUpdateArgs = {
  id: Scalars['String']['input'];
  input: TeamUpdateInput;
};


export type MutationTemplateCreateArgs = {
  input: TemplateCreateInput;
};


export type MutationTemplateDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationTemplateUpdateArgs = {
  id: Scalars['String']['input'];
  input: TemplateUpdateInput;
};


export type MutationTimeScheduleCreateArgs = {
  input: TimeScheduleCreateInput;
};


export type MutationTimeScheduleDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationTimeScheduleRefreshIntegrationScheduleArgs = {
  id: Scalars['String']['input'];
};


export type MutationTimeScheduleUpdateArgs = {
  id: Scalars['String']['input'];
  input: TimeScheduleUpdateInput;
};


export type MutationTimeScheduleUpsertExternalArgs = {
  externalId: Scalars['String']['input'];
  input: TimeScheduleUpdateInput;
};


export type MutationTriageResponsibilityCreateArgs = {
  input: TriageResponsibilityCreateInput;
};


export type MutationTriageResponsibilityDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationTriageResponsibilityUpdateArgs = {
  id: Scalars['String']['input'];
  input: TriageResponsibilityUpdateInput;
};


export type MutationUserDemoteAdminArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserDemoteMemberArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserDiscordConnectArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationUserExternalUserDisconnectArgs = {
  service: Scalars['String']['input'];
};


export type MutationUserFlagUpdateArgs = {
  flag: UserFlagType;
  operation: UserFlagUpdateOperation;
};


export type MutationUserPromoteAdminArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserPromoteMemberArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserSettingsFlagsResetArgs = {
  flags?: InputMaybe<Array<UserFlagType>>;
};


export type MutationUserSettingsUpdateArgs = {
  id: Scalars['String']['input'];
  input: UserSettingsUpdateInput;
};


export type MutationUserSuspendArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserUnsuspendArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserUpdateArgs = {
  id: Scalars['String']['input'];
  input: UserUpdateInput;
};


export type MutationViewPreferencesCreateArgs = {
  input: ViewPreferencesCreateInput;
};


export type MutationViewPreferencesDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationViewPreferencesUpdateArgs = {
  id: Scalars['String']['input'];
  input: ViewPreferencesUpdateInput;
};


export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};


export type MutationWebhookDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationWebhookUpdateArgs = {
  id: Scalars['String']['input'];
  input: WebhookUpdateInput;
};


export type MutationWorkflowStateArchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationWorkflowStateCreateArgs = {
  input: WorkflowStateCreateInput;
};


export type MutationWorkflowStateUpdateArgs = {
  id: Scalars['String']['input'];
  input: WorkflowStateUpdateInput;
};

export type Node = {
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
};

/** A notification sent to a user. */
export type Notification = {
  /** The user that caused the notification. */
  actor?: Maybe<User>;
  /** [Internal] Notification actor initials if avatar is not available. */
  actorAvatarColor?: Maybe<Scalars['String']['output']>;
  /** [Internal] Notification avatar URL. */
  actorAvatarUrl?: Maybe<Scalars['String']['output']>;
  /** [Internal] Notification actor initials if avatar is not available. */
  actorInitials?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The bot that caused the notification. */
  botActor?: Maybe<ActorBot>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The external user that caused the notification. */
  externalUserActor?: Maybe<ExternalUser>;
  /** [Internal] Notifications with the same grouping key will be grouped together in the UI. */
  groupingKey: Scalars['String']['output'];
  /** [Internal] Priority of the notification with the same grouping key. Higher number means higher priority. If priority is the same, notifications should be sorted by `createdAt`. */
  groupingPriority: Scalars['Float']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** [Internal] Inbox URL for the notification. */
  inboxUrl: Scalars['String']['output'];
  /** [Internal] If notification actor was Linear. */
  isLinearActor: Scalars['Boolean']['output'];
  /** [Internal] Issue's status type for issue notifications. */
  issueStatusType?: Maybe<Scalars['String']['output']>;
  /** [Internal] Project update health for new updates. */
  projectUpdateHealth?: Maybe<Scalars['String']['output']>;
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** [Internal] Notification subtitle. */
  subtitle: Scalars['String']['output'];
  /** [Internal] Notification title. */
  title: Scalars['String']['output'];
  /** Notification type. */
  type: Scalars['String']['output'];
  /** The time at which a notification was unsnoozed.. */
  unsnoozedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** [Internal] URL to the target of the notification. */
  url: Scalars['String']['output'];
  /** The user that received the notification. */
  user: User;
};

/** A generic payload return from entity archive mutations. */
export type NotificationArchivePayload = ArchivePayload & {
  __typename?: 'NotificationArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Notification>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type NotificationBatchActionPayload = {
  __typename?: 'NotificationBatchActionPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The notifications that were updated. */
  notifications: Array<Notification>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  edges: Array<NotificationEdge>;
  nodes: Array<Notification>;
  pageInfo: PageInfo;
};

/** A user's notification delivery preferences. */
export type NotificationDeliveryPreferences = {
  __typename?: 'NotificationDeliveryPreferences';
  /** The delivery preferences for the mobile channel. */
  mobile?: Maybe<NotificationDeliveryPreferencesChannel>;
};

/** A user's notification delivery preferences. */
export type NotificationDeliveryPreferencesChannel = {
  __typename?: 'NotificationDeliveryPreferencesChannel';
  /** Whether notifications are enabled for this channel. */
  notificationsDisabled?: Maybe<Scalars['Boolean']['output']>;
  /** The schedule for notifications on this channel. */
  schedule?: Maybe<NotificationDeliveryPreferencesSchedule>;
};

export type NotificationDeliveryPreferencesChannelInput = {
  /** Whether notifications are enabled for this channel. */
  notificationsDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** The schedule for notifications on this channel. */
  schedule?: InputMaybe<NotificationDeliveryPreferencesScheduleInput>;
};

/** A user's notification delivery schedule for a particular day. */
export type NotificationDeliveryPreferencesDay = {
  __typename?: 'NotificationDeliveryPreferencesDay';
  /** The time notifications end. */
  end?: Maybe<Scalars['String']['output']>;
  /** The time notifications start. */
  start?: Maybe<Scalars['String']['output']>;
};

export type NotificationDeliveryPreferencesDayInput = {
  /** The time notifications end. */
  end?: InputMaybe<Scalars['String']['input']>;
  /** The time notifications start. */
  start?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationDeliveryPreferencesInput = {
  /** The delivery preferences for the mobile channel. */
  mobile?: InputMaybe<NotificationDeliveryPreferencesChannelInput>;
};

/** A user's notification delivery schedule for a particular day. */
export type NotificationDeliveryPreferencesSchedule = {
  __typename?: 'NotificationDeliveryPreferencesSchedule';
  /** Whether the schedule is disabled. */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** Delivery preferences for Friday. */
  friday: NotificationDeliveryPreferencesDay;
  /** Delivery preferences for Monday. */
  monday: NotificationDeliveryPreferencesDay;
  /** Delivery preferences for Saturday. */
  saturday: NotificationDeliveryPreferencesDay;
  /** Delivery preferences for Sunday. */
  sunday: NotificationDeliveryPreferencesDay;
  /** Delivery preferences for Thursday. */
  thursday: NotificationDeliveryPreferencesDay;
  /** Delivery preferences for Tuesday. */
  tuesday: NotificationDeliveryPreferencesDay;
  /** Delivery preferences for Wednesday. */
  wednesday: NotificationDeliveryPreferencesDay;
};

export type NotificationDeliveryPreferencesScheduleInput = {
  /** Whether the schedule is disabled. */
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Delivery preferences for Friday. */
  friday: NotificationDeliveryPreferencesDayInput;
  /** Delivery preferences for Monday. */
  monday: NotificationDeliveryPreferencesDayInput;
  /** Delivery preferences for Saturday. */
  saturday: NotificationDeliveryPreferencesDayInput;
  /** Delivery preferences for Sunday. */
  sunday: NotificationDeliveryPreferencesDayInput;
  /** Delivery preferences for Thursday. */
  thursday: NotificationDeliveryPreferencesDayInput;
  /** Delivery preferences for Tuesday. */
  tuesday: NotificationDeliveryPreferencesDayInput;
  /** Delivery preferences for Wednesday. */
  wednesday: NotificationDeliveryPreferencesDayInput;
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Notification;
};

/** Describes the type and id of the entity to target for notifications. */
export type NotificationEntityInput = {
  /** The id of the notification. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The id of the initiative related to the notification. */
  initiativeId?: InputMaybe<Scalars['String']['input']>;
  /** The id of the issue related to the notification. */
  issueId?: InputMaybe<Scalars['String']['input']>;
  /** The id of the OAuth client approval related to the notification. */
  oauthClientApprovalId?: InputMaybe<Scalars['String']['input']>;
  /** [DEPRECATED] The id of the project related to the notification. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The id of the project update related to the notification. */
  projectUpdateId?: InputMaybe<Scalars['String']['input']>;
};

/** Notification filtering options. */
export type NotificationFilter = {
  /** Compound filters, all of which need to be matched by the notification. */
  and?: InputMaybe<Array<NotificationFilter>>;
  /** Comparator for the archived at date. */
  archivedAt?: InputMaybe<DateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Compound filters, one of which need to be matched by the notification. */
  or?: InputMaybe<Array<NotificationFilter>>;
  /** Comparator for the notification type. */
  type?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type NotificationPayload = {
  __typename?: 'NotificationPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The notification that was created or updated. */
  notification: Notification;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Notification subscriptions for models. */
export type NotificationSubscription = {
  /** Whether the subscription is active or not. */
  active: Scalars['Boolean']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The contextual initiative view associated with the notification subscription. */
  initiative?: Maybe<Initiative>;
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type NotificationSubscriptionConnection = {
  __typename?: 'NotificationSubscriptionConnection';
  edges: Array<NotificationSubscriptionEdge>;
  nodes: Array<NotificationSubscription>;
  pageInfo: PageInfo;
};

export type NotificationSubscriptionCreateInput = {
  /** Whether the subscription is active. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: InputMaybe<ContextViewType>;
  /** The identifier of the custom view to subscribe to. */
  customViewId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the cycle to subscribe to. */
  cycleId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the initiative to subscribe to. */
  initiativeId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the label to subscribe to. */
  labelId?: InputMaybe<Scalars['String']['input']>;
  /** The types of notifications of the subscription. */
  notificationSubscriptionTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The identifier of the project to subscribe to. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the team to subscribe to. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: InputMaybe<UserContextViewType>;
  /** The identifier of the user to subscribe to. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationSubscriptionEdge = {
  __typename?: 'NotificationSubscriptionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: NotificationSubscription;
};

export type NotificationSubscriptionPayload = {
  __typename?: 'NotificationSubscriptionPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The notification subscription that was created or updated. */
  notificationSubscription: NotificationSubscription;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type NotificationSubscriptionUpdateInput = {
  /** Whether the subscription is active. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** The types of notifications of the subscription. */
  notificationSubscriptionTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type NotificationUpdateInput = {
  /** The id of the project update related to the notification. */
  projectUpdateId?: InputMaybe<Scalars['String']['input']>;
  /** The time when notification was marked as read. */
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Notion specific settings. */
export type NotionSettings = {
  __typename?: 'NotionSettings';
  /** The ID of the Notion workspace being connected. */
  workspaceId: Scalars['String']['output'];
  /** The name of the Notion workspace being connected. */
  workspaceName: Scalars['String']['output'];
};

export type NotionSettingsInput = {
  /** The ID of the Notion workspace being connected. */
  workspaceId: Scalars['String']['input'];
  /** The name of the Notion workspace being connected. */
  workspaceName: Scalars['String']['input'];
};

/** Comment filtering options. */
export type NullableCommentFilter = {
  /** Compound filters, all of which need to be matched by the comment. */
  and?: InputMaybe<Array<NullableCommentFilter>>;
  /** Comparator for the comments body. */
  body?: InputMaybe<StringComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the comments document content must satisfy. */
  documentContent?: InputMaybe<DocumentContentFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the comments issue must satisfy. */
  issue?: InputMaybe<NullableIssueFilter>;
  /** Filters that the comment's customer needs must satisfy. */
  needs?: InputMaybe<CustomerNeedCollectionFilter>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Compound filters, one of which need to be matched by the comment. */
  or?: InputMaybe<Array<NullableCommentFilter>>;
  /** Filters that the comment parent must satisfy. */
  parent?: InputMaybe<NullableCommentFilter>;
  /** Filters that the comments project update must satisfy. */
  projectUpdate?: InputMaybe<ProjectUpdateFilter>;
  /** Filters that the comments reactions must satisfy. */
  reactions?: InputMaybe<ReactionCollectionFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Filters that the comments creator must satisfy. */
  user?: InputMaybe<UserFilter>;
};

/** Cycle filtering options. */
export type NullableCycleFilter = {
  /** Compound filters, one of which need to be matched by the cycle. */
  and?: InputMaybe<Array<NullableCycleFilter>>;
  /** Comparator for the cycle completed at date. */
  completedAt?: InputMaybe<DateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the cycle ends at date. */
  endsAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the filtering active cycle. */
  isActive?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering future cycles. */
  isFuture?: InputMaybe<BooleanComparator>;
  /** Comparator for filtering for whether the cycle is currently in cooldown. */
  isInCooldown?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering next cycle. */
  isNext?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering past cycles. */
  isPast?: InputMaybe<BooleanComparator>;
  /** Comparator for the filtering previous cycle. */
  isPrevious?: InputMaybe<BooleanComparator>;
  /** Filters that the cycles issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the cycle name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Comparator for the cycle number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the cycle. */
  or?: InputMaybe<Array<NullableCycleFilter>>;
  /** Comparator for the cycle start date. */
  startsAt?: InputMaybe<DateComparator>;
  /** Filters that the cycles team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for optional dates. */
export type NullableDateComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['DateTimeOrDuration']['input']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['DateTimeOrDuration']['input']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['DateTimeOrDuration']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['DateTimeOrDuration']['input']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['DateTimeOrDuration']['input']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['DateTimeOrDuration']['input']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['DateTimeOrDuration']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['DateTimeOrDuration']['input']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Document content filtering options. */
export type NullableDocumentContentFilter = {
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the document content document must satisfy. */
  document?: InputMaybe<DocumentFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the document content project must satisfy. */
  project?: InputMaybe<ProjectFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Document filtering options. */
export type NullableDocumentFilter = {
  /** Compound filters, all of which need to be matched by the document. */
  and?: InputMaybe<Array<NullableDocumentFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the document's creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the document's initiative must satisfy. */
  initiative?: InputMaybe<InitiativeFilter>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Compound filters, one of which need to be matched by the document. */
  or?: InputMaybe<Array<NullableDocumentFilter>>;
  /** Filters that the document's project must satisfy. */
  project?: InputMaybe<ProjectFilter>;
  /** Comparator for the document slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Comparator for the document title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Issue filtering options. */
export type NullableIssueFilter = {
  /** Compound filters, all of which need to be matched by the issue. */
  and?: InputMaybe<Array<NullableIssueFilter>>;
  /** Filters that the issues assignee must satisfy. */
  assignee?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues attachments must satisfy. */
  attachments?: InputMaybe<AttachmentCollectionFilter>;
  /** Comparator for the issues auto archived at date. */
  autoArchivedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues auto closed at date. */
  autoClosedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues canceled at date. */
  canceledAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the child issues must satisfy. */
  children?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the issues comments must satisfy. */
  comments?: InputMaybe<CommentCollectionFilter>;
  /** Comparator for the issues completed at date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issues creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues cycle must satisfy. */
  cycle?: InputMaybe<NullableCycleFilter>;
  /** Comparator for the issues description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the issues due date. */
  dueDate?: InputMaybe<NullableTimelessDateComparator>;
  /** Comparator for the issues estimate. */
  estimate?: InputMaybe<EstimateComparator>;
  /** Comparator for filtering issues which are blocked. */
  hasBlockedByRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are blocking. */
  hasBlockingRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues which are duplicates. */
  hasDuplicateRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering issues with relations. */
  hasRelatedRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that issue labels must satisfy. */
  labels?: InputMaybe<IssueLabelCollectionFilter>;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: InputMaybe<NullableTemplateFilter>;
  /** Filters that the issue's customer needs must satisfy. */
  needs?: InputMaybe<CustomerNeedCollectionFilter>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Comparator for the issues number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the issue. */
  or?: InputMaybe<Array<NullableIssueFilter>>;
  /** Filters that the issue parent must satisfy. */
  parent?: InputMaybe<NullableIssueFilter>;
  /** Comparator for the issues priority. */
  priority?: InputMaybe<NullableNumberComparator>;
  /** Filters that the issues project must satisfy. */
  project?: InputMaybe<NullableProjectFilter>;
  /** Filters that the issues project milestone must satisfy. */
  projectMilestone?: InputMaybe<NullableProjectMilestoneFilter>;
  /** Filters that the issues reactions must satisfy. */
  reactions?: InputMaybe<ReactionCollectionFilter>;
  /** [Internal] Comparator for the issues content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the issues sla status. */
  slaStatus?: InputMaybe<SlaStatusComparator>;
  /** Filters that the issues snoozer must satisfy. */
  snoozedBy?: InputMaybe<NullableUserFilter>;
  /** Comparator for the issues snoozed until date. */
  snoozedUntilAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the source must satisfy. */
  sourceMetadata?: InputMaybe<SourceMetadataComparator>;
  /** Comparator for the issues started at date. */
  startedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the issues state must satisfy. */
  state?: InputMaybe<WorkflowStateFilter>;
  /** Filters that issue subscribers must satisfy. */
  subscribers?: InputMaybe<UserCollectionFilter>;
  /** Filters that the issues team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the issues title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the issues triaged at date. */
  triagedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for optional numbers. */
export type NullableNumberComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['Float']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Project filtering options. */
export type NullableProjectFilter = {
  /** Filters that the project's team must satisfy. */
  accessibleTeams?: InputMaybe<TeamCollectionFilter>;
  /** Compound filters, all of which need to be matched by the project. */
  and?: InputMaybe<Array<NullableProjectFilter>>;
  /** Comparator for the project completion date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the project's completed milestones must satisfy. */
  completedProjectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the projects creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Comparator for filtering projects which are blocked. */
  hasBlockedByRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering projects which are blocking. */
  hasBlockingRelations?: InputMaybe<RelationExistsComparator>;
  /** [Deprecated] Comparator for filtering projects which this is depended on by. */
  hasDependedOnByRelations?: InputMaybe<RelationExistsComparator>;
  /** [Deprecated]Comparator for filtering projects which this depends on. */
  hasDependsOnRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering projects with relations. */
  hasRelatedRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering projects with violated dependencies. */
  hasViolatedRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for the project health. */
  health?: InputMaybe<StringComparator>;
  /** Comparator for the project health (with age). */
  healthWithAge?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the projects initiatives must satisfy. */
  initiatives?: InputMaybe<InitiativeCollectionFilter>;
  /** Filters that the projects issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: InputMaybe<NullableTemplateFilter>;
  /** Filters that the projects lead must satisfy. */
  lead?: InputMaybe<NullableUserFilter>;
  /** Filters that the projects members must satisfy. */
  members?: InputMaybe<UserCollectionFilter>;
  /** Comparator for the project name. */
  name?: InputMaybe<StringComparator>;
  /** Filters that the project's customer needs must satisfy. */
  needs?: InputMaybe<CustomerNeedCollectionFilter>;
  /** Filters that the project's next milestone must satisfy. */
  nextProjectMilestone?: InputMaybe<ProjectMilestoneFilter>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Compound filters, one of which need to be matched by the project. */
  or?: InputMaybe<Array<NullableProjectFilter>>;
  /** [ALPHA] Comparator for the projects priority. */
  priority?: InputMaybe<NullableNumberComparator>;
  /** Filters that the project's milestones must satisfy. */
  projectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Comparator for the project updates. */
  projectUpdates?: InputMaybe<ProjectUpdatesCollectionFilter>;
  /** Filters that the projects roadmaps must satisfy. */
  roadmaps?: InputMaybe<RoadmapCollectionFilter>;
  /** [Internal] Comparator for the project's content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the project slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Comparator for the project start date. */
  startDate?: InputMaybe<NullableDateComparator>;
  /** [DEPRECATED] Comparator for the project state. */
  state?: InputMaybe<StringComparator>;
  /** Filters that the project's status must satisfy. */
  status?: InputMaybe<ProjectStatusFilter>;
  /** Comparator for the project target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Project milestone filtering options. */
export type NullableProjectMilestoneFilter = {
  /** Compound filters, all of which need to be matched by the project milestone. */
  and?: InputMaybe<Array<NullableProjectMilestoneFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the project milestone name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Compound filters, one of which need to be matched by the project milestone. */
  or?: InputMaybe<Array<NullableProjectMilestoneFilter>>;
  /** Comparator for the project milestone target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Options for filtering projects by project updates. */
export type NullableProjectUpdatesFilter = {
  /** Compound filters, all of which need to be matched by the project updates. */
  and?: InputMaybe<Array<NullableProjectUpdatesFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the project update health. */
  health?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Compound filters, one of which need to be matched by the project updates. */
  or?: InputMaybe<Array<NullableProjectUpdatesFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Reaction filtering options. */
export type NullableReactionFilter = {
  /** Compound filters, all of which need to be matched by the reaction. */
  and?: InputMaybe<Array<NullableReactionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the reactions custom emoji. */
  customEmojiId?: InputMaybe<IdComparator>;
  /** Comparator for the reactions emoji. */
  emoji?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Compound filters, one of which need to be matched by the reaction. */
  or?: InputMaybe<Array<NullableReactionFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for optional strings. */
export type NullableStringComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with case insensitive constraint. Matches any values that start with the given string. */
  startsWithIgnoreCase?: InputMaybe<Scalars['String']['input']>;
};

/** Team filtering options. */
export type NullableTeamFilter = {
  /** Compound filters, all of which need to be matched by the team. */
  and?: InputMaybe<Array<NullableTeamFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the team description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the teams issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the team key. */
  key?: InputMaybe<StringComparator>;
  /** Comparator for the team name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Compound filters, one of which need to be matched by the team. */
  or?: InputMaybe<Array<NullableTeamFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Template filtering options. */
export type NullableTemplateFilter = {
  /** Compound filters, all of which need to be matched by the template. */
  and?: InputMaybe<Array<NullableTemplateFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the template's name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Compound filters, one of which need to be matched by the template. */
  or?: InputMaybe<Array<NullableTemplateFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for optional timeless dates. */
export type NullableTimelessDateComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['TimelessDateOrDuration']['input']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['TimelessDateOrDuration']['input']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['TimelessDateOrDuration']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['TimelessDateOrDuration']['input']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['TimelessDateOrDuration']['input']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['TimelessDateOrDuration']['input']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['TimelessDateOrDuration']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['TimelessDateOrDuration']['input']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

/** User filtering options. */
export type NullableUserFilter = {
  /** Comparator for the user's activity status. */
  active?: InputMaybe<BooleanComparator>;
  /** Comparator for the user's admin status. */
  admin?: InputMaybe<BooleanComparator>;
  /** Compound filters, all of which need to be matched by the user. */
  and?: InputMaybe<Array<NullableUserFilter>>;
  /** Filters that the users assigned issues must satisfy. */
  assignedIssues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the user's display name. */
  displayName?: InputMaybe<StringComparator>;
  /** Comparator for the user's email. */
  email?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filter based on the currently authenticated user. Set to true to filter for the authenticated user, false for any other user. */
  isMe?: InputMaybe<BooleanComparator>;
  /** Comparator for the user's name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Compound filters, one of which need to be matched by the user. */
  or?: InputMaybe<Array<NullableUserFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for numbers. */
export type NumberComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['Float']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** The different requests statuses possible for an OAuth client approval request. */
export enum OAuthClientApprovalStatus {
  Approved = 'approved',
  Denied = 'denied',
  Requested = 'requested'
}

/** OAuth2 client application */
export type OauthClient = Node & {
  __typename?: 'OauthClient';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** OAuth application's client ID. */
  clientId: Scalars['String']['output'];
  /** OAuth application's client secret. */
  clientSecret: Scalars['String']['output'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the OAuth application. */
  creator: User;
  /** Information about the application. */
  description?: Maybe<Scalars['String']['output']>;
  /** Name of the developer. */
  developer: Scalars['String']['output'];
  /** Url of the developer. */
  developerUrl: Scalars['String']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** OAuth application's client name. */
  name: Scalars['String']['output'];
  /** The organization that the OAuth application is associated with. */
  organization: Organization;
  /** Whether the OAuth application can be installed in other organizations. */
  publicEnabled: Scalars['Boolean']['output'];
  /** List of allowed redirect URIs for the application. */
  redirectUris: Array<Scalars['String']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The resource types to request when creating new webhooks. */
  webhookResourceTypes: Array<Scalars['String']['output']>;
  /** Webhook secret token for verifying the origin on the recipient side. */
  webhookSecret?: Maybe<Scalars['String']['output']>;
  /** Webhook URL. */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

/** Request to install OAuth clients on organizations and the response to the request. */
export type OauthClientApproval = Node & {
  __typename?: 'OauthClientApproval';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The reason the request for the OAuth client approval was denied. */
  denyReason?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The uuid of the OAuth client being requested for installation. */
  oauthClientId: Scalars['String']['output'];
  /** The reason the person wants to install this OAuth client. */
  requestReason?: Maybe<Scalars['String']['output']>;
  /** The person who requested installing the OAuth client. */
  requesterId: Scalars['String']['output'];
  /** The person who responded to the request to install the OAuth client. */
  responderId?: Maybe<Scalars['String']['output']>;
  /** The scopes the app has requested. */
  scopes: Array<Scalars['String']['output']>;
  /** The status for the OAuth client approval request. */
  status: OAuthClientApprovalStatus;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

/** An oauth client approval related notification. */
export type OauthClientApprovalNotification = Entity & Node & Notification & {
  __typename?: 'OauthClientApprovalNotification';
  /** The user that caused the notification. */
  actor?: Maybe<User>;
  /** [Internal] Notification actor initials if avatar is not available. */
  actorAvatarColor?: Maybe<Scalars['String']['output']>;
  /** [Internal] Notification avatar URL. */
  actorAvatarUrl?: Maybe<Scalars['String']['output']>;
  /** [Internal] Notification actor initials if avatar is not available. */
  actorInitials?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The bot that caused the notification. */
  botActor?: Maybe<ActorBot>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The external user that caused the notification. */
  externalUserActor?: Maybe<ExternalUser>;
  /** [Internal] Notifications with the same grouping key will be grouped together in the UI. */
  groupingKey: Scalars['String']['output'];
  /** [Internal] Priority of the notification with the same grouping key. Higher number means higher priority. If priority is the same, notifications should be sorted by `createdAt`. */
  groupingPriority: Scalars['Float']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** [Internal] Inbox URL for the notification. */
  inboxUrl: Scalars['String']['output'];
  /** [Internal] If notification actor was Linear. */
  isLinearActor: Scalars['Boolean']['output'];
  /** [Internal] Issue's status type for issue notifications. */
  issueStatusType?: Maybe<Scalars['String']['output']>;
  /** The OAuth client approval request related to the notification. */
  oauthClientApproval: OauthClientApproval;
  /** Related OAuth client approval request ID. */
  oauthClientApprovalId: Scalars['String']['output'];
  /** [Internal] Project update health for new updates. */
  projectUpdateHealth?: Maybe<Scalars['String']['output']>;
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** [Internal] Notification subtitle. */
  subtitle: Scalars['String']['output'];
  /** [Internal] Notification title. */
  title: Scalars['String']['output'];
  /** Notification type. */
  type: Scalars['String']['output'];
  /** The time at which a notification was unsnoozed.. */
  unsnoozedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** [Internal] URL to the target of the notification. */
  url: Scalars['String']['output'];
  /** The user that received the notification. */
  user: User;
};

export type OauthClientConnection = {
  __typename?: 'OauthClientConnection';
  edges: Array<OauthClientEdge>;
  nodes: Array<OauthClient>;
  pageInfo: PageInfo;
};

export type OauthClientEdge = {
  __typename?: 'OauthClientEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: OauthClient;
};

export type OauthToken = {
  __typename?: 'OauthToken';
  /** OAuth2 client for which the access token belongs to. */
  client: AuthOauthClient;
  clientId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  revokedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Scopes associated with the access token. */
  scope: Array<Scalars['String']['output']>;
  /** Auth user who authorized the OAuth application. */
  user: AuthUser;
  /** Id of the user who authorized the OAuth application. */
  userId: Scalars['String']['output'];
};

export type OnboardingCustomerSurvey = {
  companyRole?: InputMaybe<Scalars['String']['input']>;
  companySize?: InputMaybe<Scalars['String']['input']>;
};

export type OpsgenieInput = {
  /** The date when the Opsgenie API failed with an unauthorized error. */
  apiFailedWithUnauthorizedErrorAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Opsgenie specific settings. */
export type OpsgenieSettings = {
  __typename?: 'OpsgenieSettings';
  /** The date when the Opsgenie API failed with an unauthorized error. */
  apiFailedWithUnauthorizedErrorAt?: Maybe<Scalars['DateTime']['output']>;
};

/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type Organization = Node & {
  __typename?: 'Organization';
  /** Whether member users are allowed to send invites. */
  allowMembersToInvite?: Maybe<Scalars['Boolean']['output']>;
  /** Allowed authentication providers, empty array means all are allowed. */
  allowedAuthServices: Array<Scalars['String']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Number of issues in the organization. */
  createdIssueCount: Scalars['Int']['output'];
  /** The time at which deletion of the organization was requested. */
  deletionRequestedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The month at which the fiscal year starts. Defaults to January (0). */
  fiscalYearStartMonth: Scalars['Float']['output'];
  /** How git branches are formatted. If null, default formatting will be used. */
  gitBranchFormat?: Maybe<Scalars['String']['output']>;
  /** Whether the Git integration linkback messages should be sent to private repositories. */
  gitLinkbackMessagesEnabled: Scalars['Boolean']['output'];
  /** Whether the Git integration linkback messages should be sent to public repositories. */
  gitPublicLinkbackMessagesEnabled: Scalars['Boolean']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Integrations associated with the organization. */
  integrations: IntegrationConnection;
  /** IP restriction configurations. */
  ipRestrictions?: Maybe<Array<OrganizationIpRestriction>>;
  /** Labels associated with the organization. */
  labels: IssueLabelConnection;
  /** The organization's logo URL. */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** The organization's name. */
  name: Scalars['String']['output'];
  /** Rolling 30-day total upload volume for the organization, in megabytes. */
  periodUploadVolume: Scalars['Float']['output'];
  /** Previously used URL keys for the organization (last 3 are kept and redirected). */
  previousUrlKeys: Array<Scalars['String']['output']>;
  /** The organization's project statuses. */
  projectStatuses: Array<ProjectStatus>;
  /** The n-weekly frequency at which to prompt for project updates. When not set, reminders are off. */
  projectUpdateReminderFrequencyInWeeks?: Maybe<Scalars['Float']['output']>;
  /** The day at which to prompt for project updates. */
  projectUpdateRemindersDay: Day;
  /** The hour at which to prompt for project updates. */
  projectUpdateRemindersHour: Scalars['Float']['output'];
  /**
   * [DEPRECATED] The frequency at which to prompt for project updates.
   * @deprecated Use organization.projectUpdatesReminderFrequencyInWeeks instead
   */
  projectUpdatesReminderFrequency: ProjectUpdateReminderFrequency;
  /** The feature release channel the organization belongs to. */
  releaseChannel: ReleaseChannel;
  /** Whether the organization is using a roadmap. */
  roadmapEnabled: Scalars['Boolean']['output'];
  /** Whether SAML authentication is enabled for organization. */
  samlEnabled: Scalars['Boolean']['output'];
  /** [INTERNAL] SAML settings. */
  samlSettings?: Maybe<Scalars['JSONObject']['output']>;
  /** Whether SCIM provisioning is enabled for organization. */
  scimEnabled: Scalars['Boolean']['output'];
  /** Which day count to use for SLA calculations. */
  slaDayCount: SlaDayCountType;
  /** The organization's subscription to a paid plan. */
  subscription?: Maybe<PaidSubscription>;
  /** Teams associated with the organization. */
  teams: TeamConnection;
  /** Templates associated with the organization. */
  templates: TemplateConnection;
  /** [ALPHA] Theme settings for the organization. */
  themeSettings?: Maybe<Scalars['JSONObject']['output']>;
  /** The time at which the trial will end. */
  trialEndsAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The organization's unique URL key. */
  urlKey: Scalars['String']['output'];
  /** Number of active users in the organization. */
  userCount: Scalars['Int']['output'];
  /** Users associated with the organization. */
  users: UserConnection;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationLabelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type OrganizationAcceptedOrExpiredInviteDetailsPayload = {
  __typename?: 'OrganizationAcceptedOrExpiredInviteDetailsPayload';
  /** The status of the invite. */
  status: OrganizationInviteStatus;
};

export type OrganizationCancelDeletePayload = {
  __typename?: 'OrganizationCancelDeletePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type OrganizationDeletePayload = {
  __typename?: 'OrganizationDeletePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Defines the use of a domain by an organization. */
export type OrganizationDomain = Node & {
  __typename?: 'OrganizationDomain';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** What type of auth is the domain used for. */
  authType: OrganizationDomainAuthType;
  /** Whether the domains was claimed by the organization through DNS verification. */
  claimed?: Maybe<Scalars['Boolean']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who added the domain. */
  creator?: Maybe<User>;
  /** Prevent users with this domain to create new workspaces. */
  disableOrganizationCreation?: Maybe<Scalars['Boolean']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Domain name. */
  name: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** E-mail used to verify this domain. */
  verificationEmail?: Maybe<Scalars['String']['output']>;
  /** Is this domain verified. */
  verified: Scalars['Boolean']['output'];
};

/** What type of auth is the domain used for. */
export enum OrganizationDomainAuthType {
  General = 'general',
  Saml = 'saml'
}

/** [INTERNAL] Domain claim request response. */
export type OrganizationDomainClaimPayload = {
  __typename?: 'OrganizationDomainClaimPayload';
  /** String to put into DNS for verification. */
  verificationString: Scalars['String']['output'];
};

export type OrganizationDomainCreateInput = {
  /** The authentication type this domain is for. */
  authType?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The domain name to add. */
  name: Scalars['String']['input'];
  /** The email address to which to send the verification code. */
  verificationEmail?: InputMaybe<Scalars['String']['input']>;
};

/** [INTERNAL] Organization domain operation response. */
export type OrganizationDomainPayload = {
  __typename?: 'OrganizationDomainPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The organization domain that was created or updated. */
  organizationDomain: OrganizationDomain;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** [INTERNAL] Organization domain operation response. */
export type OrganizationDomainSimplePayload = {
  __typename?: 'OrganizationDomainSimplePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type OrganizationDomainUpdateInput = {
  /** Prevent users with this domain to create new workspaces. Only allowed to set on claimed domains! */
  disableOrganizationCreation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrganizationDomainVerificationInput = {
  /** The identifier in UUID v4 format of the domain being verified. */
  organizationDomainId: Scalars['String']['input'];
  /** The verification code sent via email. */
  verificationCode: Scalars['String']['input'];
};

export type OrganizationExistsPayload = {
  __typename?: 'OrganizationExistsPayload';
  /** Whether the organization exists. */
  exists: Scalars['Boolean']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** An invitation to the organization that has been sent via email. */
export type OrganizationInvite = Node & {
  __typename?: 'OrganizationInvite';
  /** The time at which the invite was accepted. Null, if the invite hasn't been accepted. */
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The invitees email address. */
  email: Scalars['String']['output'];
  /** The time at which the invite will be expiring. Null, if the invite shouldn't expire. */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** The invite was sent to external address. */
  external: Scalars['Boolean']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The user who has accepted the invite. Null, if the invite hasn't been accepted. */
  invitee?: Maybe<User>;
  /** The user who created the invitation. */
  inviter: User;
  /** Extra metadata associated with the organization invite. */
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  /** The organization that the invite is associated with. */
  organization: Organization;
  /** The user role that the invitee will receive upon accepting the invite. */
  role: UserRoleType;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type OrganizationInviteConnection = {
  __typename?: 'OrganizationInviteConnection';
  edges: Array<OrganizationInviteEdge>;
  nodes: Array<OrganizationInvite>;
  pageInfo: PageInfo;
};

export type OrganizationInviteCreateInput = {
  /** The email of the invitee. */
  email: Scalars['String']['input'];
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The message to send to the invitee. */
  message?: InputMaybe<Scalars['String']['input']>;
  /** [INTERNAL] Optional metadata about the invite. */
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  /** What user role the invite should grant. */
  role?: InputMaybe<UserRoleType>;
  /** The teams that the user has been invited to. */
  teamIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type OrganizationInviteDetailsPayload = OrganizationAcceptedOrExpiredInviteDetailsPayload | OrganizationInviteFullDetailsPayload;

export type OrganizationInviteEdge = {
  __typename?: 'OrganizationInviteEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: OrganizationInvite;
};

export type OrganizationInviteFullDetailsPayload = {
  __typename?: 'OrganizationInviteFullDetailsPayload';
  /** Whether the invite has already been accepted. */
  accepted: Scalars['Boolean']['output'];
  /** Allowed authentication providers, empty array means all are allowed. */
  allowedAuthServices: Array<Scalars['String']['output']>;
  /** When the invite was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The email of the invitee. */
  email: Scalars['String']['output'];
  /** Whether the invite has expired. */
  expired: Scalars['Boolean']['output'];
  /** The name of the inviter. */
  inviter: Scalars['String']['output'];
  /** ID of the workspace the invite is for. */
  organizationId: Scalars['String']['output'];
  /** URL of the workspace logo the invite is for. */
  organizationLogoUrl?: Maybe<Scalars['String']['output']>;
  /** Name of the workspace the invite is for. */
  organizationName: Scalars['String']['output'];
  /** What user role the invite should grant. */
  role: UserRoleType;
  /** The status of the invite. */
  status: OrganizationInviteStatus;
};

export type OrganizationInviteLinkDetailsPayload = {
  __typename?: 'OrganizationInviteLinkDetailsPayload';
  /** Allowed authentication providers, empty array means all are allowed. */
  allowedAuthServices: Array<Scalars['String']['output']>;
  /** ID of the workspace the invite link is for. */
  organizationId?: Maybe<Scalars['String']['output']>;
  /** URL of the workspace logo the invite link is for. */
  organizationLogoUrl?: Maybe<Scalars['String']['output']>;
  /** Name of the workspace the invite link is for. */
  organizationName?: Maybe<Scalars['String']['output']>;
  /** Region of the workspace the invite link is for. */
  organizationRegion?: Maybe<Scalars['String']['output']>;
  /** URL key of the workspace the invite link is for. */
  organizationUrlKey?: Maybe<Scalars['String']['output']>;
};

export type OrganizationInvitePayload = {
  __typename?: 'OrganizationInvitePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The organization invite that was created or updated. */
  organizationInvite: OrganizationInvite;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** The different statuses possible for an organization invite. */
export enum OrganizationInviteStatus {
  Accepted = 'accepted',
  Expired = 'expired',
  Pending = 'pending'
}

export type OrganizationInviteUpdateInput = {
  /** The teams that the user has been invited to. */
  teamIds: Array<Scalars['String']['input']>;
};

export type OrganizationIpRestriction = {
  __typename?: 'OrganizationIpRestriction';
  /** Optional restriction description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Whether the restriction is enabled. */
  enabled: Scalars['Boolean']['output'];
  /** IP range in CIDR format. */
  range: Scalars['String']['output'];
  /** Restriction type. */
  type: Scalars['String']['output'];
};

/** [INTERNAL] Organization IP restriction configuration. */
export type OrganizationIpRestrictionInput = {
  /** Optional restriction description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Whether the restriction is enabled. */
  enabled: Scalars['Boolean']['input'];
  /** IP range in CIDR format. */
  range: Scalars['String']['input'];
  /** Restriction type. */
  type: Scalars['String']['input'];
};

export type OrganizationMeta = {
  __typename?: 'OrganizationMeta';
  /** Allowed authentication providers, empty array means all are allowed. */
  allowedAuthServices: Array<Scalars['String']['output']>;
  /** The region the organization is hosted in. */
  region: Scalars['String']['output'];
};

export type OrganizationPayload = {
  __typename?: 'OrganizationPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The organization that was created or updated. */
  organization?: Maybe<Organization>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type OrganizationRegionResponse = {
  __typename?: 'OrganizationRegionResponse';
  /** The region for the organization. */
  region?: Maybe<Scalars['String']['output']>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type OrganizationStartTrialPayload = {
  __typename?: 'OrganizationStartTrialPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type OrganizationUpdateInput = {
  /** Whether member users are allowed to send invites. */
  allowMembersToInvite?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of services that are allowed to be used for login. */
  allowedAuthServices?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The month at which the fiscal year starts. */
  fiscalYearStartMonth?: InputMaybe<Scalars['Float']['input']>;
  /** How git branches are formatted. If null, default formatting will be used. */
  gitBranchFormat?: InputMaybe<Scalars['String']['input']>;
  /** Whether the Git integration linkback messages should be sent for private repositories. */
  gitLinkbackMessagesEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the Git integration linkback messages should be sent for public repositories. */
  gitPublicLinkbackMessagesEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** IP restriction configurations controlling allowed access the workspace. */
  ipRestrictions?: InputMaybe<Array<OrganizationIpRestrictionInput>>;
  /** The logo of the organization. */
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  /** The name of the organization. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Whether the organization has opted for having to approve all OAuth applications for install. */
  oauthAppReview?: InputMaybe<Scalars['Boolean']['input']>;
  /** The n-weekly frequency at which to prompt for project updates. */
  projectUpdateReminderFrequencyInWeeks?: InputMaybe<Scalars['Float']['input']>;
  /** The day at which project updates are sent. */
  projectUpdateRemindersDay?: InputMaybe<Day>;
  /** The hour at which project updates are sent. */
  projectUpdateRemindersHour?: InputMaybe<Scalars['Float']['input']>;
  /** Whether the organization has opted for reduced customer support attachment information. */
  reducedPersonalInformation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the organization is using roadmap. */
  roadmapEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Which day count to use for SLA calculation. */
  slaDayCount?: InputMaybe<SlaDayCountType>;
  /** Internal. Whether SLAs have been enabled for the organization. */
  slaEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** [ALPHA] Theme settings for the organization. */
  themeSettings?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The URL key of the organization. */
  urlKey?: InputMaybe<Scalars['String']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** Cursor representing the last result in the paginated results. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates if there are more results when paginating forward. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates if there are more results when paginating backward. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Cursor representing the first result in the paginated results. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PagerDutyInput = {
  /** The date when the PagerDuty API failed with an unauthorized error. */
  apiFailedWithUnauthorizedErrorAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/** PagerDuty specific settings. */
export type PagerDutySettings = {
  __typename?: 'PagerDutySettings';
  /** The date when the PagerDuty API failed with an unauthorized error. */
  apiFailedWithUnauthorizedErrorAt?: Maybe<Scalars['DateTime']['output']>;
};

/** How to treat NULL values, whether they should appear first or last */
export enum PaginationNulls {
  First = 'first',
  Last = 'last'
}

/** By which field should the pagination order by */
export enum PaginationOrderBy {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** Whether to sort in ascending or descending order */
export enum PaginationSortOrder {
  Ascending = 'Ascending',
  Descending = 'Descending'
}

/** The paid subscription of an organization. */
export type PaidSubscription = Node & {
  __typename?: 'PaidSubscription';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The date the subscription was canceled, if any. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The collection method for this subscription, either automatically charged or invoiced. */
  collectionMethod: Scalars['String']['output'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The creator of the subscription. */
  creator?: Maybe<User>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The date the subscription will be billed next. */
  nextBillingAt?: Maybe<Scalars['DateTime']['output']>;
  /** The organization that the subscription is associated with. */
  organization: Organization;
  /** The subscription type of a pending change. Null if no change pending. */
  pendingChangeType?: Maybe<Scalars['String']['output']>;
  /** The number of seats in the subscription. */
  seats: Scalars['Float']['output'];
  /** The maximum number of seats that will be billed in the subscription. */
  seatsMaximum?: Maybe<Scalars['Float']['output']>;
  /** The minimum number of seats that will be billed in the subscription. */
  seatsMinimum?: Maybe<Scalars['Float']['output']>;
  /** The subscription type. */
  type: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

/** Registered passkey for authentication. */
export type Passkey = {
  __typename?: 'Passkey';
  aaguid: Scalars['String']['output'];
  /** Used web browser. Only set on creation. */
  browserType?: Maybe<Scalars['String']['output']>;
  /** Type of application used to create. */
  clientType: AuthenticationSessionType;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  /** IP address. Only set on creation. */
  ip?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  /** The time when the passkey was last used. */
  lastUsedAt: Scalars['DateTime']['output'];
  lastUsedSessionId?: Maybe<Scalars['String']['output']>;
  /** Location city name. Only set on creation. */
  locationCity?: Maybe<Scalars['String']['output']>;
  /** Location country name. Only set on creation. */
  locationCountry?: Maybe<Scalars['String']['output']>;
  /** Location country code. Only set on creation. */
  locationCountryCode?: Maybe<Scalars['String']['output']>;
  /** Location region code. Only set on creation. */
  locationRegionCode?: Maybe<Scalars['String']['output']>;
  /** Date when the passkey was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  /** Creating session's user-agent. Only set on creation. */
  userAgent?: Maybe<Scalars['String']['output']>;
};

export type PasskeyLoginStartResponse = {
  __typename?: 'PasskeyLoginStartResponse';
  options: Scalars['JSONObject']['output'];
  success: Scalars['Boolean']['output'];
};

/** Issue priority sorting options. */
export type PrioritySort = {
  /** Whether to consider no priority as the highest or lowest priority */
  noPriorityFirst?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether nulls should be sorted first or last */
  nulls?: InputMaybe<PaginationNulls>;
  /** The order for the individual sort */
  order?: InputMaybe<PaginationSortOrder>;
};

/** A project. */
export type Project = Node & {
  __typename?: 'Project';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the project was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the project was moved into canceled state. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The project's color. */
  color: Scalars['String']['output'];
  /** The time at which the project was moved into completed state. */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The number of completed issues in the project after each week. */
  completedIssueCountHistory: Array<Scalars['Float']['output']>;
  /** The number of completed estimation points after each week. */
  completedScopeHistory: Array<Scalars['Float']['output']>;
  /** The project's content in markdown format. */
  content?: Maybe<Scalars['String']['output']>;
  /** [Internal] The project's content as YJS state. */
  contentState?: Maybe<Scalars['String']['output']>;
  /** The project was created based on this issue. */
  convertedFromIssue?: Maybe<Issue>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the project. */
  creator?: Maybe<User>;
  /** [Internal] The current progress of the project. */
  currentProgress: Scalars['JSONObject']['output'];
  /** The project's description. */
  description: Scalars['String']['output'];
  /** The content of the project description. */
  documentContent?: Maybe<DocumentContent>;
  /** Documents associated with the project. */
  documents: DocumentConnection;
  /** External links associated with the project. */
  externalLinks: EntityExternalLinkConnection;
  /** The user's favorite associated with this project. */
  favorite?: Maybe<Favorite>;
  /** The health of the project based on the last project update. */
  health?: Maybe<ProjectUpdateHealthType>;
  /** The time at which the project health was updated. */
  healthUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** History entries associated with the project. */
  history: ProjectHistoryConnection;
  /** The icon of the project. */
  icon?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The number of in progress estimation points after each week. */
  inProgressScopeHistory: Array<Scalars['Float']['output']>;
  /** Initiatives that this project belongs to. */
  initiatives: InitiativeConnection;
  /** Settings for all integrations associated with that project. */
  integrationsSettings?: Maybe<IntegrationsSettings>;
  /** The total number of issues in the project after each week. */
  issueCountHistory: Array<Scalars['Float']['output']>;
  /** Issues associated with the project. */
  issues: IssueConnection;
  /** The last template that was applied to this project. */
  lastAppliedTemplate?: Maybe<Template>;
  /** The project lead. */
  lead?: Maybe<User>;
  /**
   * [DEPRECATED] Links associated with the project.
   * @deprecated Use externalLinks instead
   */
  links: ProjectLinkConnection;
  /** Users that are members of the project. */
  members: UserConnection;
  /** The project's name. */
  name: Scalars['String']['output'];
  /** The priority of the project. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal, 4 = Low. */
  priority: Scalars['Int']['output'];
  /** [ALPHA] The sort order for the project within the organization, when ordered by priority. */
  prioritySortOrder: Scalars['Float']['output'];
  /** The overall progress of the project. This is the (completed estimate points + 0.25 * in progress estimate points) / total estimate points. */
  progress: Scalars['Float']['output'];
  /** [Internal] The progress history of the project. */
  progressHistory: Scalars['JSONObject']['output'];
  /** Milestones associated with the project. */
  projectMilestones: ProjectMilestoneConnection;
  /** The time until which project update reminders are paused. */
  projectUpdateRemindersPausedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** Project updates associated with the project. */
  projectUpdates: ProjectUpdateConnection;
  /** The overall scope (total estimate points) of the project. */
  scope: Scalars['Float']['output'];
  /** The total number of estimation points after each week. */
  scopeHistory: Array<Scalars['Float']['output']>;
  /**
   * Whether to send new issue comment notifications to Slack.
   * @deprecated No longer in use
   */
  slackIssueComments: Scalars['Boolean']['output'];
  /**
   * Whether to send new issue status updates to Slack.
   * @deprecated No longer is use
   */
  slackIssueStatuses: Scalars['Boolean']['output'];
  /**
   * Whether to send new issue notifications to Slack.
   * @deprecated No longer in use
   */
  slackNewIssue: Scalars['Boolean']['output'];
  /** The project's unique URL slug. */
  slugId: Scalars['String']['output'];
  /** The sort order for the project within the organization. */
  sortOrder: Scalars['Float']['output'];
  /** The estimated start date of the project. */
  startDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** [INTERNAL] The resolution of the project's start date. */
  startDateResolution?: Maybe<DateResolutionType>;
  /** The time at which the project was moved into started state. */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * [DEPRECATED] The type of the state.
   * @deprecated Use project.status instead
   */
  state: Scalars['String']['output'];
  /** The status that the project is associated with. */
  status: ProjectStatus;
  /** The estimated completion date of the project. */
  targetDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** [INTERNAL] The resolution of the project's estimated completion date. */
  targetDateResolution?: Maybe<DateResolutionType>;
  /** Teams associated with this project. */
  teams: TeamConnection;
  /** A flag that indicates whether the project is in the trash bin. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Project URL. */
  url: Scalars['String']['output'];
};


/** A project. */
export type ProjectDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectExternalLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectInitiativesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectProjectMilestonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProjectMilestoneFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectProjectUpdatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type ProjectArchivePayload = ArchivePayload & {
  __typename?: 'ProjectArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Project>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Project filtering options. */
export type ProjectCollectionFilter = {
  /** Filters that the project's team must satisfy. */
  accessibleTeams?: InputMaybe<TeamCollectionFilter>;
  /** Compound filters, all of which need to be matched by the project. */
  and?: InputMaybe<Array<ProjectCollectionFilter>>;
  /** Comparator for the project completion date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the project's completed milestones must satisfy. */
  completedProjectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the projects creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Filters that needs to be matched by all projects. */
  every?: InputMaybe<ProjectFilter>;
  /** Comparator for filtering projects which are blocked. */
  hasBlockedByRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering projects which are blocking. */
  hasBlockingRelations?: InputMaybe<RelationExistsComparator>;
  /** [Deprecated] Comparator for filtering projects which this is depended on by. */
  hasDependedOnByRelations?: InputMaybe<RelationExistsComparator>;
  /** [Deprecated]Comparator for filtering projects which this depends on. */
  hasDependsOnRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering projects with relations. */
  hasRelatedRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering projects with violated dependencies. */
  hasViolatedRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for the project health. */
  health?: InputMaybe<StringComparator>;
  /** Comparator for the project health (with age). */
  healthWithAge?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the projects initiatives must satisfy. */
  initiatives?: InputMaybe<InitiativeCollectionFilter>;
  /** Filters that the projects issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: InputMaybe<NullableTemplateFilter>;
  /** Filters that the projects lead must satisfy. */
  lead?: InputMaybe<NullableUserFilter>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Filters that the projects members must satisfy. */
  members?: InputMaybe<UserCollectionFilter>;
  /** Comparator for the project name. */
  name?: InputMaybe<StringComparator>;
  /** Filters that the project's customer needs must satisfy. */
  needs?: InputMaybe<CustomerNeedCollectionFilter>;
  /** Filters that the project's next milestone must satisfy. */
  nextProjectMilestone?: InputMaybe<ProjectMilestoneFilter>;
  /** Compound filters, one of which need to be matched by the project. */
  or?: InputMaybe<Array<ProjectCollectionFilter>>;
  /** [ALPHA] Comparator for the projects priority. */
  priority?: InputMaybe<NullableNumberComparator>;
  /** Filters that the project's milestones must satisfy. */
  projectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Comparator for the project updates. */
  projectUpdates?: InputMaybe<ProjectUpdatesCollectionFilter>;
  /** Filters that the projects roadmaps must satisfy. */
  roadmaps?: InputMaybe<RoadmapCollectionFilter>;
  /** [Internal] Comparator for the project's content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the project slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Filters that needs to be matched by some projects. */
  some?: InputMaybe<ProjectFilter>;
  /** Comparator for the project start date. */
  startDate?: InputMaybe<NullableDateComparator>;
  /** [DEPRECATED] Comparator for the project state. */
  state?: InputMaybe<StringComparator>;
  /** Filters that the project's status must satisfy. */
  status?: InputMaybe<ProjectStatusFilter>;
  /** Comparator for the project target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  edges: Array<ProjectEdge>;
  nodes: Array<Project>;
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  /** The color of the project. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the issue from which that project is created. */
  convertedFromIssueId?: InputMaybe<Scalars['String']['input']>;
  /** The description for the project. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The icon of the project. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the last template applied to the project. */
  lastAppliedTemplateId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the project lead. */
  leadId?: InputMaybe<Scalars['String']['input']>;
  /** The identifiers of the members of this project. */
  memberIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The name of the project. */
  name: Scalars['String']['input'];
  /** The priority of the project. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal, 4 = Low. */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** [ALPHA] The sort order for the project within shared views, when ordered by priority. */
  prioritySortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The sort order for the project within shared views. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The planned start date of the project. */
  startDate?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** [INTERNAL] The resolution of the project's start date. */
  startDateResolution?: InputMaybe<DateResolutionType>;
  /** [DEPRECATED] The state of the project. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the project status. */
  statusId?: InputMaybe<Scalars['String']['input']>;
  /** The planned target date of the project. */
  targetDate?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** [INTERNAL] The resolution of the project's estimated completion date. */
  targetDateResolution?: InputMaybe<DateResolutionType>;
  /** The identifiers of the teams this project is associated with. */
  teamIds: Array<Scalars['String']['input']>;
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Project;
};

/** Project filtering options. */
export type ProjectFilter = {
  /** Filters that the project's team must satisfy. */
  accessibleTeams?: InputMaybe<TeamCollectionFilter>;
  /** Compound filters, all of which need to be matched by the project. */
  and?: InputMaybe<Array<ProjectFilter>>;
  /** Comparator for the project completion date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the project's completed milestones must satisfy. */
  completedProjectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the projects creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Comparator for filtering projects which are blocked. */
  hasBlockedByRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering projects which are blocking. */
  hasBlockingRelations?: InputMaybe<RelationExistsComparator>;
  /** [Deprecated] Comparator for filtering projects which this is depended on by. */
  hasDependedOnByRelations?: InputMaybe<RelationExistsComparator>;
  /** [Deprecated]Comparator for filtering projects which this depends on. */
  hasDependsOnRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering projects with relations. */
  hasRelatedRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for filtering projects with violated dependencies. */
  hasViolatedRelations?: InputMaybe<RelationExistsComparator>;
  /** Comparator for the project health. */
  health?: InputMaybe<StringComparator>;
  /** Comparator for the project health (with age). */
  healthWithAge?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the projects initiatives must satisfy. */
  initiatives?: InputMaybe<InitiativeCollectionFilter>;
  /** Filters that the projects issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: InputMaybe<NullableTemplateFilter>;
  /** Filters that the projects lead must satisfy. */
  lead?: InputMaybe<NullableUserFilter>;
  /** Filters that the projects members must satisfy. */
  members?: InputMaybe<UserCollectionFilter>;
  /** Comparator for the project name. */
  name?: InputMaybe<StringComparator>;
  /** Filters that the project's customer needs must satisfy. */
  needs?: InputMaybe<CustomerNeedCollectionFilter>;
  /** Filters that the project's next milestone must satisfy. */
  nextProjectMilestone?: InputMaybe<ProjectMilestoneFilter>;
  /** Compound filters, one of which need to be matched by the project. */
  or?: InputMaybe<Array<ProjectFilter>>;
  /** [ALPHA] Comparator for the projects priority. */
  priority?: InputMaybe<NullableNumberComparator>;
  /** Filters that the project's milestones must satisfy. */
  projectMilestones?: InputMaybe<ProjectMilestoneCollectionFilter>;
  /** Comparator for the project updates. */
  projectUpdates?: InputMaybe<ProjectUpdatesCollectionFilter>;
  /** Filters that the projects roadmaps must satisfy. */
  roadmaps?: InputMaybe<RoadmapCollectionFilter>;
  /** [Internal] Comparator for the project's content. */
  searchableContent?: InputMaybe<ContentComparator>;
  /** Comparator for the project slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Comparator for the project start date. */
  startDate?: InputMaybe<NullableDateComparator>;
  /** [DEPRECATED] Comparator for the project state. */
  state?: InputMaybe<StringComparator>;
  /** Filters that the project's status must satisfy. */
  status?: InputMaybe<ProjectStatusFilter>;
  /** Comparator for the project target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type ProjectFilterSuggestionPayload = {
  __typename?: 'ProjectFilterSuggestionPayload';
  /** The json filter that is suggested. */
  filter?: Maybe<Scalars['JSONObject']['output']>;
};

/** An history associated with a project. */
export type ProjectHistory = Node & {
  __typename?: 'ProjectHistory';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The events that happened while recording that history. */
  entries: Scalars['JSONObject']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The project that the history is associated with. */
  project: Project;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type ProjectHistoryConnection = {
  __typename?: 'ProjectHistoryConnection';
  edges: Array<ProjectHistoryEdge>;
  nodes: Array<ProjectHistory>;
  pageInfo: PageInfo;
};

export type ProjectHistoryEdge = {
  __typename?: 'ProjectHistoryEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ProjectHistory;
};

/** An external link for a project. */
export type ProjectLink = Node & {
  __typename?: 'ProjectLink';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the link. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The link's label. */
  label: Scalars['String']['output'];
  /** The project that the link is associated with. */
  project: Project;
  /** The order of the item in the project resources list. */
  sortOrder: Scalars['Float']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The link's URL. */
  url: Scalars['String']['output'];
};

export type ProjectLinkConnection = {
  __typename?: 'ProjectLinkConnection';
  edges: Array<ProjectLinkEdge>;
  nodes: Array<ProjectLink>;
  pageInfo: PageInfo;
};

export type ProjectLinkCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The label for the link. */
  label: Scalars['String']['input'];
  /** Related project for the link. */
  projectId: Scalars['String']['input'];
  /** The order of the item in the project resources list. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The URL of the link. */
  url: Scalars['String']['input'];
};

export type ProjectLinkEdge = {
  __typename?: 'ProjectLinkEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ProjectLink;
};

export type ProjectLinkPayload = {
  __typename?: 'ProjectLinkPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The project that was created or updated. */
  projectLink: ProjectLink;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type ProjectLinkUpdateInput = {
  /** The label for the link. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** The order of the item in the project resources list. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The URL of the link. */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** A milestone for a project. */
export type ProjectMilestone = Node & {
  __typename?: 'ProjectMilestone';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The project milestone's description in markdown format. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * [Internal] The project milestone's description as a Prosemirror document.
   * @deprecated Use `descriptionState` instead.
   */
  descriptionData?: Maybe<Scalars['JSON']['output']>;
  /** [Internal] The project milestone's description as YJS state. */
  descriptionState?: Maybe<Scalars['String']['output']>;
  /** The content of the project milestone description. */
  documentContent?: Maybe<DocumentContent>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Issues associated with the project milestone. */
  issues: IssueConnection;
  /** The name of the project milestone. */
  name: Scalars['String']['output'];
  /** The project of the milestone. */
  project: Project;
  /** The order of the milestone in relation to other milestones within a project. */
  sortOrder: Scalars['Float']['output'];
  /** The planned completion date of the milestone. */
  targetDate?: Maybe<Scalars['TimelessDate']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};


/** A milestone for a project. */
export type ProjectMilestoneIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** Milestone collection filtering options. */
export type ProjectMilestoneCollectionFilter = {
  /** Compound filters, all of which need to be matched by the milestone. */
  and?: InputMaybe<Array<ProjectMilestoneCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that needs to be matched by all milestones. */
  every?: InputMaybe<ProjectMilestoneFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Comparator for the project milestone name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the milestone. */
  or?: InputMaybe<Array<ProjectMilestoneCollectionFilter>>;
  /** Filters that needs to be matched by some milestones. */
  some?: InputMaybe<ProjectMilestoneFilter>;
  /** Comparator for the project milestone target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type ProjectMilestoneConnection = {
  __typename?: 'ProjectMilestoneConnection';
  edges: Array<ProjectMilestoneEdge>;
  nodes: Array<ProjectMilestone>;
  pageInfo: PageInfo;
};

export type ProjectMilestoneCreateInput = {
  /** The description of the project milestone in markdown format. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] The description of the project milestone as a Prosemirror document. */
  descriptionData?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the project milestone. */
  name: Scalars['String']['input'];
  /** Related project for the project milestone. */
  projectId: Scalars['String']['input'];
  /** The sort order for the project milestone within a project. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The planned target date of the project milestone. */
  targetDate?: InputMaybe<Scalars['TimelessDate']['input']>;
};

export type ProjectMilestoneEdge = {
  __typename?: 'ProjectMilestoneEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ProjectMilestone;
};

/** Project milestone filtering options. */
export type ProjectMilestoneFilter = {
  /** Compound filters, all of which need to be matched by the project milestone. */
  and?: InputMaybe<Array<ProjectMilestoneFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the project milestone name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the project milestone. */
  or?: InputMaybe<Array<ProjectMilestoneFilter>>;
  /** Comparator for the project milestone target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type ProjectMilestonePayload = {
  __typename?: 'ProjectMilestonePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The project milestone that was created or updated. */
  projectMilestone: ProjectMilestone;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type ProjectMilestoneUpdateInput = {
  /** The description of the project milestone in markdown format. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] The description of the project milestone as a Prosemirror document. */
  descriptionData?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The name of the project milestone. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The sort order for the project milestone within a project. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The planned target date of the project milestone. */
  targetDate?: InputMaybe<Scalars['TimelessDate']['input']>;
};

/** A project related notification. */
export type ProjectNotification = Entity & Node & Notification & {
  __typename?: 'ProjectNotification';
  /** The user that caused the notification. */
  actor?: Maybe<User>;
  /** [Internal] Notification actor initials if avatar is not available. */
  actorAvatarColor?: Maybe<Scalars['String']['output']>;
  /** [Internal] Notification avatar URL. */
  actorAvatarUrl?: Maybe<Scalars['String']['output']>;
  /** [Internal] Notification actor initials if avatar is not available. */
  actorInitials?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The bot that caused the notification. */
  botActor?: Maybe<ActorBot>;
  /** The comment related to the notification. */
  comment?: Maybe<Comment>;
  /** Related comment ID. Null if the notification is not related to a comment. */
  commentId?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The external user that caused the notification. */
  externalUserActor?: Maybe<ExternalUser>;
  /** [Internal] Notifications with the same grouping key will be grouped together in the UI. */
  groupingKey: Scalars['String']['output'];
  /** [Internal] Priority of the notification with the same grouping key. Higher number means higher priority. If priority is the same, notifications should be sorted by `createdAt`. */
  groupingPriority: Scalars['Float']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** [Internal] Inbox URL for the notification. */
  inboxUrl: Scalars['String']['output'];
  /** [Internal] If notification actor was Linear. */
  isLinearActor: Scalars['Boolean']['output'];
  /** [Internal] Issue's status type for issue notifications. */
  issueStatusType?: Maybe<Scalars['String']['output']>;
  /** The parent comment related to the notification, if a notification is a reply comment notification. */
  parentComment?: Maybe<Comment>;
  /** Related parent comment ID. Null if the notification is not related to a comment. */
  parentCommentId?: Maybe<Scalars['String']['output']>;
  /** The project related to the notification. */
  project: Project;
  /** Related project ID. */
  projectId: Scalars['String']['output'];
  /** Related project milestone ID. */
  projectMilestoneId?: Maybe<Scalars['String']['output']>;
  /** The project update related to the notification. */
  projectUpdate?: Maybe<ProjectUpdate>;
  /** [Internal] Project update health for new updates. */
  projectUpdateHealth?: Maybe<Scalars['String']['output']>;
  /** Related project update ID. */
  projectUpdateId?: Maybe<Scalars['String']['output']>;
  /** Name of the reaction emoji related to the notification. */
  reactionEmoji?: Maybe<Scalars['String']['output']>;
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** [Internal] Notification subtitle. */
  subtitle: Scalars['String']['output'];
  /** [Internal] Notification title. */
  title: Scalars['String']['output'];
  /** Notification type. */
  type: Scalars['String']['output'];
  /** The time at which a notification was unsnoozed.. */
  unsnoozedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** [Internal] URL to the target of the notification. */
  url: Scalars['String']['output'];
  /** The user that received the notification. */
  user: User;
};

/** A project notification subscription. */
export type ProjectNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'ProjectNotificationSubscription';
  /** Whether the subscription is active or not. */
  active: Scalars['Boolean']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The contextual initiative view associated with the notification subscription. */
  initiative?: Maybe<Initiative>;
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']['output']>;
  /** The project subscribed to. */
  project: Project;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type ProjectPayload = {
  __typename?: 'ProjectPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The project that was created or updated. */
  project?: Maybe<Project>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** A relation between two projects. */
export type ProjectRelation = Node & {
  __typename?: 'ProjectRelation';
  /** The type of anchor on the project end of the relation. */
  anchorType: Scalars['String']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The project whose relationship is being described. */
  project: Project;
  /** The milestone within the project whose relationship is being described. */
  projectMilestone?: Maybe<ProjectMilestone>;
  /** The type of anchor on the relatedProject end of the relation. */
  relatedAnchorType: Scalars['String']['output'];
  /** The related project. */
  relatedProject: Project;
  /** The milestone within the related project whose relationship is being described. */
  relatedProjectMilestone?: Maybe<ProjectMilestone>;
  /** The relationship of the project with the related project. */
  type: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The last user who created or modified the relation. */
  user?: Maybe<User>;
};

export type ProjectRelationConnection = {
  __typename?: 'ProjectRelationConnection';
  edges: Array<ProjectRelationEdge>;
  nodes: Array<ProjectRelation>;
  pageInfo: PageInfo;
};

export type ProjectRelationCreateInput = {
  /** The type of the anchor for the project. */
  anchorType: Scalars['String']['input'];
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the project that is related to another project. */
  projectId: Scalars['String']['input'];
  /** The identifier of the project milestone. */
  projectMilestoneId?: InputMaybe<Scalars['String']['input']>;
  /** The type of the anchor for the related project. */
  relatedAnchorType: Scalars['String']['input'];
  /** The identifier of the related project. */
  relatedProjectId: Scalars['String']['input'];
  /** The identifier of the related project milestone. */
  relatedProjectMilestoneId?: InputMaybe<Scalars['String']['input']>;
  /** The type of relation of the project to the related project. */
  type: Scalars['String']['input'];
};

export type ProjectRelationEdge = {
  __typename?: 'ProjectRelationEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ProjectRelation;
};

export type ProjectRelationPayload = {
  __typename?: 'ProjectRelationPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The project relation that was created or updated. */
  projectRelation: ProjectRelation;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type ProjectRelationUpdateInput = {
  /** The type of the anchor for the project. */
  anchorType?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the project that is related to another project. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the project milestone. */
  projectMilestoneId?: InputMaybe<Scalars['String']['input']>;
  /** The type of the anchor for the related project. */
  relatedAnchorType?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the related project. */
  relatedProjectId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the related project milestone. */
  relatedProjectMilestoneId?: InputMaybe<Scalars['String']['input']>;
  /** The type of relation of the project to the related project. */
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectSearchPayload = {
  __typename?: 'ProjectSearchPayload';
  /** Archived entities matching the search term along with all their dependencies. */
  archivePayload: ArchiveResponse;
  edges: Array<ProjectSearchResultEdge>;
  nodes: Array<ProjectSearchResult>;
  pageInfo: PageInfo;
  /** Total number of results for query without filters applied. */
  totalCount: Scalars['Float']['output'];
};

export type ProjectSearchResult = Node & {
  __typename?: 'ProjectSearchResult';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the project was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the project was moved into canceled state. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The project's color. */
  color: Scalars['String']['output'];
  /** The time at which the project was moved into completed state. */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The number of completed issues in the project after each week. */
  completedIssueCountHistory: Array<Scalars['Float']['output']>;
  /** The number of completed estimation points after each week. */
  completedScopeHistory: Array<Scalars['Float']['output']>;
  /** The project's content in markdown format. */
  content?: Maybe<Scalars['String']['output']>;
  /** [Internal] The project's content as YJS state. */
  contentState?: Maybe<Scalars['String']['output']>;
  /** The project was created based on this issue. */
  convertedFromIssue?: Maybe<Issue>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the project. */
  creator?: Maybe<User>;
  /** [Internal] The current progress of the project. */
  currentProgress: Scalars['JSONObject']['output'];
  /** The project's description. */
  description: Scalars['String']['output'];
  /** The content of the project description. */
  documentContent?: Maybe<DocumentContent>;
  /** Documents associated with the project. */
  documents: DocumentConnection;
  /** External links associated with the project. */
  externalLinks: EntityExternalLinkConnection;
  /** The user's favorite associated with this project. */
  favorite?: Maybe<Favorite>;
  /** The health of the project based on the last project update. */
  health?: Maybe<ProjectUpdateHealthType>;
  /** The time at which the project health was updated. */
  healthUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** History entries associated with the project. */
  history: ProjectHistoryConnection;
  /** The icon of the project. */
  icon?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The number of in progress estimation points after each week. */
  inProgressScopeHistory: Array<Scalars['Float']['output']>;
  /** Initiatives that this project belongs to. */
  initiatives: InitiativeConnection;
  /** Settings for all integrations associated with that project. */
  integrationsSettings?: Maybe<IntegrationsSettings>;
  /** The total number of issues in the project after each week. */
  issueCountHistory: Array<Scalars['Float']['output']>;
  /** Issues associated with the project. */
  issues: IssueConnection;
  /** The last template that was applied to this project. */
  lastAppliedTemplate?: Maybe<Template>;
  /** The project lead. */
  lead?: Maybe<User>;
  /**
   * [DEPRECATED] Links associated with the project.
   * @deprecated Use externalLinks instead
   */
  links: ProjectLinkConnection;
  /** Users that are members of the project. */
  members: UserConnection;
  /** Metadata related to search result. */
  metadata: Scalars['JSONObject']['output'];
  /** The project's name. */
  name: Scalars['String']['output'];
  /** The priority of the project. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal, 4 = Low. */
  priority: Scalars['Int']['output'];
  /** [ALPHA] The sort order for the project within the organization, when ordered by priority. */
  prioritySortOrder: Scalars['Float']['output'];
  /** The overall progress of the project. This is the (completed estimate points + 0.25 * in progress estimate points) / total estimate points. */
  progress: Scalars['Float']['output'];
  /** [Internal] The progress history of the project. */
  progressHistory: Scalars['JSONObject']['output'];
  /** Milestones associated with the project. */
  projectMilestones: ProjectMilestoneConnection;
  /** The time until which project update reminders are paused. */
  projectUpdateRemindersPausedUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** Project updates associated with the project. */
  projectUpdates: ProjectUpdateConnection;
  /** The overall scope (total estimate points) of the project. */
  scope: Scalars['Float']['output'];
  /** The total number of estimation points after each week. */
  scopeHistory: Array<Scalars['Float']['output']>;
  /**
   * Whether to send new issue comment notifications to Slack.
   * @deprecated No longer in use
   */
  slackIssueComments: Scalars['Boolean']['output'];
  /**
   * Whether to send new issue status updates to Slack.
   * @deprecated No longer is use
   */
  slackIssueStatuses: Scalars['Boolean']['output'];
  /**
   * Whether to send new issue notifications to Slack.
   * @deprecated No longer in use
   */
  slackNewIssue: Scalars['Boolean']['output'];
  /** The project's unique URL slug. */
  slugId: Scalars['String']['output'];
  /** The sort order for the project within the organization. */
  sortOrder: Scalars['Float']['output'];
  /** The estimated start date of the project. */
  startDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** [INTERNAL] The resolution of the project's start date. */
  startDateResolution?: Maybe<DateResolutionType>;
  /** The time at which the project was moved into started state. */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * [DEPRECATED] The type of the state.
   * @deprecated Use project.status instead
   */
  state: Scalars['String']['output'];
  /** The status that the project is associated with. */
  status: ProjectStatus;
  /** The estimated completion date of the project. */
  targetDate?: Maybe<Scalars['TimelessDate']['output']>;
  /** [INTERNAL] The resolution of the project's estimated completion date. */
  targetDateResolution?: Maybe<DateResolutionType>;
  /** Teams associated with this project. */
  teams: TeamConnection;
  /** A flag that indicates whether the project is in the trash bin. */
  trashed?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Project URL. */
  url: Scalars['String']['output'];
};


export type ProjectSearchResultDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultExternalLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultInitiativesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultProjectMilestonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProjectMilestoneFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultProjectUpdatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type ProjectSearchResultTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type ProjectSearchResultConnection = {
  __typename?: 'ProjectSearchResultConnection';
  edges: Array<ProjectSearchResultEdge>;
  nodes: Array<ProjectSearchResult>;
  pageInfo: PageInfo;
};

export type ProjectSearchResultEdge = {
  __typename?: 'ProjectSearchResultEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ProjectSearchResult;
};

/** Issue project sorting options. */
export type ProjectSort = {
  /** Whether nulls should be sorted first or last */
  nulls?: InputMaybe<PaginationNulls>;
  /** The order for the individual sort */
  order?: InputMaybe<PaginationSortOrder>;
};

/** A project status. */
export type ProjectStatus = Node & {
  __typename?: 'ProjectStatus';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The UI color of the status as a HEX string. */
  color: Scalars['String']['output'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Description of the status. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Whether or not a project can be in this status indefinitely. */
  indefinite: Scalars['Boolean']['output'];
  /** The name of the status. */
  name: Scalars['String']['output'];
  /** The position of the status in the workspace's project flow. */
  position: Scalars['Float']['output'];
  /** The type of the project status. */
  type: ProjectStatusType;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type ProjectStatusConnection = {
  __typename?: 'ProjectStatusConnection';
  edges: Array<ProjectStatusEdge>;
  nodes: Array<ProjectStatus>;
  pageInfo: PageInfo;
};

export type ProjectStatusEdge = {
  __typename?: 'ProjectStatusEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ProjectStatus;
};

/** Project status filtering options. */
export type ProjectStatusFilter = {
  /** Compound filters, all of which need to be matched by the project status. */
  and?: InputMaybe<Array<ProjectStatusFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the project status description. */
  description?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the project status name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which needs to be matched by the project status. */
  or?: InputMaybe<Array<ProjectStatusFilter>>;
  /** Comparator for the project status position. */
  position?: InputMaybe<NumberComparator>;
  /** Filters that the project status projects must satisfy. */
  projects?: InputMaybe<ProjectCollectionFilter>;
  /** Comparator for the project status type. */
  type?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** A type of project status. */
export enum ProjectStatusType {
  Backlog = 'backlog',
  Canceled = 'canceled',
  Completed = 'completed',
  Paused = 'paused',
  Planned = 'planned',
  Started = 'started'
}

/** Different tabs available inside a project. */
export enum ProjectTab {
  Documents = 'documents',
  Issues = 'issues'
}

/** An update associated with a project. */
export type ProjectUpdate = Node & {
  __typename?: 'ProjectUpdate';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The update content in markdown format. */
  body: Scalars['String']['output'];
  /** [Internal] The content of the project update as a Prosemirror document. */
  bodyData: Scalars['String']['output'];
  /** Comments associated with the project update. */
  comments: CommentConnection;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The diff between the current update and the previous one. */
  diff?: Maybe<Scalars['JSONObject']['output']>;
  /** The diff between the current update and the previous one, formatted as markdown. */
  diffMarkdown?: Maybe<Scalars['String']['output']>;
  /** The time the project update was edited. */
  editedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The health of the project at the time of the update. */
  health: ProjectUpdateHealthType;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** [Internal] Serialized JSON representing current state of the project properties when posting the project update. */
  infoSnapshot?: Maybe<Scalars['JSONObject']['output']>;
  /** Whether project update diff should be hidden. */
  isDiffHidden: Scalars['Boolean']['output'];
  /** The project that the update is associated with. */
  project: Project;
  /** Emoji reaction summary, grouped by emoji type. */
  reactionData: Scalars['JSONObject']['output'];
  /** Reactions associated with the project update. */
  reactions: Array<Reaction>;
  /** The project update's unique URL slug. */
  slugId: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The URL to the project update. */
  url: Scalars['String']['output'];
  /** The user who wrote the update. */
  user: User;
};


/** An update associated with a project. */
export type ProjectUpdateCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type ProjectUpdateConnection = {
  __typename?: 'ProjectUpdateConnection';
  edges: Array<ProjectUpdateEdge>;
  nodes: Array<ProjectUpdate>;
  pageInfo: PageInfo;
};

export type ProjectUpdateCreateInput = {
  /** The content of the project update in markdown format. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] The content of the project update as a Prosemirror document. */
  bodyData?: InputMaybe<Scalars['JSON']['input']>;
  /** The health of the project at the time of the update. */
  health?: InputMaybe<ProjectUpdateHealthType>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Whether the diff between the current update and the previous one should be hidden. */
  isDiffHidden?: InputMaybe<Scalars['Boolean']['input']>;
  /** The project to associate the project update with. */
  projectId: Scalars['String']['input'];
};

export type ProjectUpdateEdge = {
  __typename?: 'ProjectUpdateEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ProjectUpdate;
};

/** Options for filtering project updates. */
export type ProjectUpdateFilter = {
  /** Compound filters, all of which need to be matched by the ProjectUpdate. */
  and?: InputMaybe<Array<ProjectUpdateFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Compound filters, one of which need to be matched by the ProjectUpdate. */
  or?: InputMaybe<Array<ProjectUpdateFilter>>;
  /** Filters that the project update project must satisfy. */
  project?: InputMaybe<ProjectFilter>;
  /** Filters that the project updates reactions must satisfy. */
  reactions?: InputMaybe<ReactionCollectionFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Filters that the project update creator must satisfy. */
  user?: InputMaybe<UserFilter>;
};

/** The health type of a project when the update is created. */
export enum ProjectUpdateHealthType {
  AtRisk = 'atRisk',
  OffTrack = 'offTrack',
  OnTrack = 'onTrack'
}

export type ProjectUpdateInput = {
  /** The date when the project was canceled. */
  canceledAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The color of the project. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The date when the project was completed. */
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The ID of the issue from which that project is created. */
  convertedFromIssueId?: InputMaybe<Scalars['String']['input']>;
  /** The description for the project. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The icon of the project. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the last template applied to the project. */
  lastAppliedTemplateId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the project lead. */
  leadId?: InputMaybe<Scalars['String']['input']>;
  /** The identifiers of the members of this project. */
  memberIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The name of the project. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The priority of the project. 0 = No priority, 1 = Urgent, 2 = High, 3 = Normal, 4 = Low. */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** [ALPHA] The sort order for the project within shared views, when ordered by priority. */
  prioritySortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The time until which project update reminders are paused. */
  projectUpdateRemindersPausedUntilAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send issue status update notifications to Slack. */
  slackIssueStatuses?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue?: InputMaybe<Scalars['Boolean']['input']>;
  /** The sort order for the project in shared views. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The planned start date of the project. */
  startDate?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** [INTERNAL] The resolution of the project's start date. */
  startDateResolution?: InputMaybe<DateResolutionType>;
  /** [DEPRECATED] The state of the project. */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the project status. */
  statusId?: InputMaybe<Scalars['String']['input']>;
  /** The planned target date of the project. */
  targetDate?: InputMaybe<Scalars['TimelessDate']['input']>;
  /** [INTERNAL] The resolution of the project's estimated completion date. */
  targetDateResolution?: InputMaybe<DateResolutionType>;
  /** The identifiers of the teams this project is associated with. */
  teamIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Whether the project has been trashed. */
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Holds information about when a user has interacted with a project update. */
export type ProjectUpdateInteraction = Node & {
  __typename?: 'ProjectUpdateInteraction';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The project update that has been interacted with. */
  projectUpdate: ProjectUpdate;
  /** The time at which the user read the project update. */
  readAt: Scalars['DateTime']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user that has interacted with the project update. */
  user: User;
};

export type ProjectUpdateInteractionConnection = {
  __typename?: 'ProjectUpdateInteractionConnection';
  edges: Array<ProjectUpdateInteractionEdge>;
  nodes: Array<ProjectUpdateInteraction>;
  pageInfo: PageInfo;
};

export type ProjectUpdateInteractionCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The id of the project update that has been interacted with. */
  projectUpdateId: Scalars['String']['input'];
  /** The time at which the user read the project update. */
  readAt: Scalars['DateTime']['input'];
};

export type ProjectUpdateInteractionEdge = {
  __typename?: 'ProjectUpdateInteractionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: ProjectUpdateInteraction;
};

export type ProjectUpdateInteractionPayload = {
  __typename?: 'ProjectUpdateInteractionPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The project update interaction that was created or updated. */
  projectUpdateInteraction: ProjectUpdateInteraction;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type ProjectUpdatePayload = {
  __typename?: 'ProjectUpdatePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The project update that was created or updated. */
  projectUpdate: ProjectUpdate;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** The frequency at which to send project update reminders. */
export enum ProjectUpdateReminderFrequency {
  Month = 'month',
  Never = 'never',
  TwoWeeks = 'twoWeeks',
  Week = 'week'
}

export type ProjectUpdateReminderPayload = {
  __typename?: 'ProjectUpdateReminderPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type ProjectUpdateUpdateInput = {
  /** The content of the project update in markdown format. */
  body?: InputMaybe<Scalars['String']['input']>;
  /** The content of the project update as a Prosemirror document. */
  bodyData?: InputMaybe<Scalars['JSON']['input']>;
  /** The health of the project at the time of the update. */
  health?: InputMaybe<ProjectUpdateHealthType>;
  /** Whether the diff between the current update and the previous one should be hidden. */
  isDiffHidden?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProjectUpdateWithInteractionPayload = {
  __typename?: 'ProjectUpdateWithInteractionPayload';
  /** The project update that was created or updated. */
  interaction: ProjectUpdateInteraction;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The project update that was created or updated. */
  projectUpdate: ProjectUpdate;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Collection filtering options for filtering projects by project updates. */
export type ProjectUpdatesCollectionFilter = {
  /** Compound filters, all of which need to be matched by the project update. */
  and?: InputMaybe<Array<ProjectUpdatesCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that needs to be matched by all updates. */
  every?: InputMaybe<ProjectUpdatesFilter>;
  /** Comparator for the project update health. */
  health?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the update. */
  or?: InputMaybe<Array<ProjectUpdatesCollectionFilter>>;
  /** Filters that needs to be matched by some updates. */
  some?: InputMaybe<ProjectUpdatesFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Options for filtering projects by project updates. */
export type ProjectUpdatesFilter = {
  /** Compound filters, all of which need to be matched by the project updates. */
  and?: InputMaybe<Array<ProjectUpdatesFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the project update health. */
  health?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Compound filters, one of which need to be matched by the project updates. */
  or?: InputMaybe<Array<ProjectUpdatesFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** A user's web or mobile push notification subscription. */
export type PushSubscription = Node & {
  __typename?: 'PushSubscription';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type PushSubscriptionConnection = {
  __typename?: 'PushSubscriptionConnection';
  edges: Array<PushSubscriptionEdge>;
  nodes: Array<PushSubscription>;
  pageInfo: PageInfo;
};

export type PushSubscriptionCreateInput = {
  /** The data of the subscription in stringified JSON format. */
  data: Scalars['String']['input'];
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Whether this is a subscription payload for Google Cloud Messaging or Apple Push Notification service. */
  type?: InputMaybe<PushSubscriptionType>;
  /** The user identifier of the subscription. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type PushSubscriptionEdge = {
  __typename?: 'PushSubscriptionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: PushSubscription;
};

export type PushSubscriptionPayload = {
  __typename?: 'PushSubscriptionPayload';
  /** The push subscription that was created or updated. */
  entity: PushSubscription;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type PushSubscriptionTestPayload = {
  __typename?: 'PushSubscriptionTestPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** The different push subscription types. */
export enum PushSubscriptionType {
  Apple = 'apple',
  AppleDevelopment = 'appleDevelopment',
  Firebase = 'firebase',
  Web = 'web'
}

export type Query = {
  __typename?: 'Query';
  /** All teams you the user can administrate. Administrable teams are teams whose settings the user can change, but to whose issues the user doesn't necessarily have access to. */
  administrableTeams: TeamConnection;
  /** All API keys for the user. */
  apiKeys: ApiKeyConnection;
  /** Get basic information for an application. */
  applicationInfo: Application;
  /** [INTERNAL] Get basic information for a list of applications. */
  applicationInfoByIds: Array<Application>;
  /** [INTERNAL] Get information for a list of applications with memberships */
  applicationInfoWithMembershipsByIds: Array<WorkspaceAuthorizedApplication>;
  /** Get information for an application and whether a user has approved it for the given scopes. */
  applicationWithAuthorization: UserAuthorizedApplication;
  /** [Internal] All archived teams of the organization. */
  archivedTeams: Array<Team>;
  /**
   *
   * One specific issue attachment.
   * [Deprecated] 'url' can no longer be used as the 'id' parameter. Use 'attachmentsForUrl' instead
   */
  attachment: Attachment;
  /**
   *
   * Query an issue by its associated attachment, and its id.
   *
   * @deprecated Will be removed in near future, please use `attachmentsForURL` to get attachments and their issues instead.
   */
  attachmentIssue: Issue;
  /** [Internal] Get a list of all unique attachment sources in the workspace. */
  attachmentSources: AttachmentSourcesPayload;
  /**
   * All issue attachments.
   *
   * To get attachments for a given URL, use `attachmentsForURL` query.
   */
  attachments: AttachmentConnection;
  /** Returns issue attachments for a given `url`. */
  attachmentsForURL: AttachmentConnection;
  /** All audit log entries. */
  auditEntries: AuditEntryConnection;
  /** List of audit entry types. */
  auditEntryTypes: Array<AuditEntryType>;
  /** User's active sessions. */
  authenticationSessions: Array<AuthenticationSessionResponse>;
  /** [INTERNAL] Get all authorized applications for a user. */
  authorizedApplications: Array<AuthorizedApplication>;
  /** Fetch users belonging to this user account. */
  availableUsers: AuthResolverResponse;
  /** A specific comment. */
  comment: Comment;
  /** All comments. */
  comments: CommentConnection;
  /** One specific custom view. */
  customView: CustomView;
  /** [INTERNAL] Suggests metadata for a view based on it's filters. */
  customViewDetailsSuggestion: CustomViewSuggestionPayload;
  /** Whether a custom view has other subscribers than the current user in the organization. */
  customViewHasSubscribers: CustomViewHasSubscribersPayload;
  /** Custom views for the user. */
  customViews: CustomViewConnection;
  /** One specific customer. */
  customer: Customer;
  /** One specific customer need */
  customerNeed: CustomerNeed;
  /** All customer needs. */
  customerNeeds: CustomerNeedConnection;
  /** One specific customer status. */
  customerStatus: CustomerStatus;
  /** All customer statuses. */
  customerStatuses: CustomerStatusConnection;
  /** All customers. */
  customers: CustomerConnection;
  /** One specific cycle. */
  cycle: Cycle;
  /** All cycles. */
  cycles: CycleConnection;
  /** One specific diary entry. */
  diaryEntry: DiaryEntry;
  /** One specific document. */
  document: Document;
  /** A collection of document content history entries. */
  documentContentHistory: DocumentContentHistoryPayload;
  /** All documents in the workspace. */
  documents: DocumentConnection;
  /** A specific emoji. */
  emoji: Emoji;
  /** All custom emojis. */
  emojis: EmojiConnection;
  /** One specific entity link. */
  entityExternalLink: EntityExternalLink;
  /** One specific external user. */
  externalUser: ExternalUser;
  /** All external users for the organization. */
  externalUsers: ExternalUserConnection;
  /** One specific favorite. */
  favorite: Favorite;
  /** The user's favorites. */
  favorites: FavoriteConnection;
  /** One specific initiative. */
  initiative: Initiative;
  /** One specific initiativeToProject. */
  initiativeToProject: InitiativeToProject;
  /** returns a list of initiative to project entities. */
  initiativeToProjects: InitiativeToProjectConnection;
  /** All initiatives in the workspace. */
  initiatives: InitiativeConnection;
  /** One specific integration. */
  integration: Integration;
  /** Checks if the integration has all required scopes. */
  integrationHasScopes: IntegrationHasScopesPayload;
  /** One specific integrationTemplate. */
  integrationTemplate: IntegrationTemplate;
  /** Template and integration connections. */
  integrationTemplates: IntegrationTemplateConnection;
  /** All integrations. */
  integrations: IntegrationConnection;
  /** One specific set of settings. */
  integrationsSettings: IntegrationsSettings;
  /** One specific issue. */
  issue: Issue;
  /** Find issues that are related to a given Figma file key. */
  issueFigmaFileKeySearch: IssueConnection;
  /** Suggests filters for an issue view based on a text prompt. */
  issueFilterSuggestion: IssueFilterSuggestionPayload;
  /** Checks a CSV file validity against a specific import service. */
  issueImportCheckCSV: IssueImportCheckPayload;
  /** Checks whether it will be possible to setup sync for this project or repository at the end of import */
  issueImportCheckSync: IssueImportSyncCheckPayload;
  /** One specific label. */
  issueLabel: IssueLabel;
  /** All issue labels. */
  issueLabels: IssueLabelConnection;
  /** Issue priority values and corresponding labels. */
  issuePriorityValues: Array<IssuePriorityValue>;
  /** One specific issue relation. */
  issueRelation: IssueRelation;
  /** All issue relationships. */
  issueRelations: IssueRelationConnection;
  /** [DEPRECATED] Search issues. This endpoint is deprecated and will be removed in the future – use `searchIssues` instead. */
  issueSearch: IssueConnection;
  /** Find issue based on the VCS branch name. */
  issueVcsBranchSearch?: Maybe<Issue>;
  /** All issues. */
  issues: IssueConnection;
  /** One specific notification. */
  notification: Notification;
  /** One specific notification subscription. */
  notificationSubscription: NotificationSubscription;
  /** The user's notification subscriptions. */
  notificationSubscriptions: NotificationSubscriptionConnection;
  /** All notifications. */
  notifications: NotificationConnection;
  /** [Internal] A number of unread notifications. */
  notificationsUnreadCount: Scalars['Int']['output'];
  /** The user's organization. */
  organization: Organization;
  /** [INTERNAL] Checks whether the domain can be claimed. */
  organizationDomainClaimRequest: OrganizationDomainClaimPayload;
  /** Does the organization exist. */
  organizationExists: OrganizationExistsPayload;
  /** One specific organization invite. */
  organizationInvite: OrganizationInvite;
  /** One specific organization invite. */
  organizationInviteDetails: OrganizationInviteDetailsPayload;
  /** All invites for the organization. */
  organizationInvites: OrganizationInviteConnection;
  /** [INTERNAL] Get organization metadata by urlKey or organization id. */
  organizationMeta?: Maybe<OrganizationMeta>;
  /** One specific project. */
  project: Project;
  /** Suggests filters for a project view based on a text prompt. */
  projectFilterSuggestion: ProjectFilterSuggestionPayload;
  /** One specific project link. */
  projectLink: ProjectLink;
  /** All links for the project. */
  projectLinks: ProjectLinkConnection;
  /** One specific project milestone. */
  projectMilestone: ProjectMilestone;
  /** All milestones for the project. */
  projectMilestones: ProjectMilestoneConnection;
  /** One specific project relation. */
  projectRelation: ProjectRelation;
  /** All project relationships. */
  projectRelations: ProjectRelationConnection;
  /** A specific project update. */
  projectUpdate: ProjectUpdate;
  /** A specific interaction on a project update. */
  projectUpdateInteraction: ProjectUpdateInteraction;
  /** All interactions on project updates. */
  projectUpdateInteractions: ProjectUpdateInteractionConnection;
  /** All project updates. */
  projectUpdates: ProjectUpdateConnection;
  /** All projects. */
  projects: ProjectConnection;
  /** Sends a test push message. */
  pushSubscriptionTest: PushSubscriptionTestPayload;
  /** The status of the rate limiter. */
  rateLimitStatus: RateLimitPayload;
  /** One specific roadmap. */
  roadmap: Roadmap;
  /** One specific roadmapToProject. */
  roadmapToProject: RoadmapToProject;
  /** Custom views for the user. */
  roadmapToProjects: RoadmapToProjectConnection;
  /** All roadmaps in the workspace. */
  roadmaps: RoadmapConnection;
  /** Search documents. */
  searchDocuments: DocumentSearchPayload;
  /** Search issues. */
  searchIssues: IssueSearchPayload;
  /** Search projects. */
  searchProjects: ProjectSearchPayload;
  /** Fetch SSO login URL for the email provided. */
  ssoUrlFromEmail: SsoUrlFromEmailResponse;
  /** [Internal] AI summary of the latest project updates for the given projects */
  summarizeProjectUpdates: SummaryPayload;
  /** One specific team. */
  team: Team;
  /** One specific team membership. */
  teamMembership: TeamMembership;
  /** All team memberships. */
  teamMemberships: TeamMembershipConnection;
  /** All teams whose issues can be accessed by the user. This might be different from `administrableTeams`, which also includes teams whose settings can be changed by the user. */
  teams: TeamConnection;
  /** A specific template. */
  template: Template;
  /** All templates from all users. */
  templates: Array<Template>;
  /** Returns all templates that are associated with the integration type. */
  templatesForIntegration: Array<Template>;
  /** A specific time schedule. */
  timeSchedule: TimeSchedule;
  /** All time schedules. */
  timeSchedules: TimeScheduleConnection;
  /** All triage responsibilities. */
  triageResponsibilities: TriageResponsibilityConnection;
  /** A specific triage responsibility. */
  triageResponsibility: TriageResponsibility;
  /** One specific user. */
  user: User;
  /** The user's settings. */
  userSettings: UserSettings;
  /** All users for the organization. */
  users: UserConnection;
  /** Verify that we received the correct response from the GitHub Enterprise Server. */
  verifyGitHubEnterpriseServerInstallation: GitHubEnterpriseServerInstallVerificationPayload;
  /** The currently authenticated user. */
  viewer: User;
  /** A specific webhook. */
  webhook: Webhook;
  /** All webhooks. */
  webhooks: WebhookConnection;
  /** One specific state. */
  workflowState: WorkflowState;
  /** All issue workflow states. */
  workflowStates: WorkflowStateConnection;
  /** [INTERNAL] Get non-internal authorized applications (with limited fields) for a workspace */
  workspaceAuthorizedApplications: Array<WorkspaceAuthorizedApplication>;
};


export type QueryAdministrableTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryApiKeysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryApplicationInfoArgs = {
  clientId: Scalars['String']['input'];
};


export type QueryApplicationInfoByIdsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type QueryApplicationInfoWithMembershipsByIdsArgs = {
  clientIds: Array<Scalars['String']['input']>;
};


export type QueryApplicationWithAuthorizationArgs = {
  actor?: InputMaybe<Scalars['String']['input']>;
  clientId: Scalars['String']['input'];
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  scope: Array<Scalars['String']['input']>;
};


export type QueryAttachmentArgs = {
  id: Scalars['String']['input'];
};


export type QueryAttachmentIssueArgs = {
  id: Scalars['String']['input'];
};


export type QueryAttachmentSourcesArgs = {
  teamId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAttachmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttachmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryAttachmentsForUrlArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  url: Scalars['String']['input'];
};


export type QueryAuditEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuditEntryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryCommentArgs = {
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issueId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryCustomViewArgs = {
  id: Scalars['String']['input'];
};


export type QueryCustomViewDetailsSuggestionArgs = {
  filter: Scalars['JSONObject']['input'];
  modelName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCustomViewHasSubscribersArgs = {
  id: Scalars['String']['input'];
};


export type QueryCustomViewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryCustomerArgs = {
  id: Scalars['String']['input'];
};


export type QueryCustomerNeedArgs = {
  id: Scalars['String']['input'];
};


export type QueryCustomerNeedsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CustomerNeedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryCustomerStatusArgs = {
  id: Scalars['String']['input'];
};


export type QueryCustomerStatusesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CustomerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryCycleArgs = {
  id: Scalars['String']['input'];
};


export type QueryCyclesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CycleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryDiaryEntryArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocumentArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocumentContentHistoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryEmojiArgs = {
  id: Scalars['String']['input'];
};


export type QueryEmojisArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryEntityExternalLinkArgs = {
  id: Scalars['String']['input'];
};


export type QueryExternalUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryExternalUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryFavoriteArgs = {
  id: Scalars['String']['input'];
};


export type QueryFavoritesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryInitiativeArgs = {
  id: Scalars['String']['input'];
};


export type QueryInitiativeToProjectArgs = {
  id: Scalars['String']['input'];
};


export type QueryInitiativeToProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryInitiativesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIntegrationArgs = {
  id: Scalars['String']['input'];
};


export type QueryIntegrationHasScopesArgs = {
  integrationId: Scalars['String']['input'];
  scopes: Array<Scalars['String']['input']>;
};


export type QueryIntegrationTemplateArgs = {
  id: Scalars['String']['input'];
};


export type QueryIntegrationTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIntegrationsSettingsArgs = {
  id: Scalars['String']['input'];
};


export type QueryIssueArgs = {
  id: Scalars['String']['input'];
};


export type QueryIssueFigmaFileKeySearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fileKey: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIssueFilterSuggestionArgs = {
  projectId?: InputMaybe<Scalars['String']['input']>;
  prompt: Scalars['String']['input'];
};


export type QueryIssueImportCheckCsvArgs = {
  csvUrl: Scalars['String']['input'];
  service: Scalars['String']['input'];
};


export type QueryIssueImportCheckSyncArgs = {
  issueImportId: Scalars['String']['input'];
};


export type QueryIssueLabelArgs = {
  id: Scalars['String']['input'];
};


export type QueryIssueLabelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIssueRelationArgs = {
  id: Scalars['String']['input'];
};


export type QueryIssueRelationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIssueSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIssueVcsBranchSearchArgs = {
  branchName: Scalars['String']['input'];
};


export type QueryIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  sort?: InputMaybe<Array<IssueSortInput>>;
};


export type QueryNotificationArgs = {
  id: Scalars['String']['input'];
};


export type QueryNotificationSubscriptionArgs = {
  id: Scalars['String']['input'];
};


export type QueryNotificationSubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NotificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryOrganizationDomainClaimRequestArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrganizationExistsArgs = {
  urlKey: Scalars['String']['input'];
};


export type QueryOrganizationInviteArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrganizationInviteDetailsArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrganizationInvitesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryOrganizationMetaArgs = {
  urlKey: Scalars['String']['input'];
};


export type QueryProjectArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjectFilterSuggestionArgs = {
  prompt: Scalars['String']['input'];
};


export type QueryProjectLinkArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjectLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryProjectMilestoneArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjectMilestonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProjectMilestoneFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryProjectRelationArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjectRelationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryProjectUpdateArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjectUpdateInteractionArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjectUpdateInteractionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryProjectUpdatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProjectUpdateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryPushSubscriptionTestArgs = {
  sendStrategy?: InputMaybe<SendStrategy>;
  targetMobile?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRoadmapArgs = {
  id: Scalars['String']['input'];
};


export type QueryRoadmapToProjectArgs = {
  id: Scalars['String']['input'];
};


export type QueryRoadmapToProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryRoadmapsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QuerySearchDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeComments?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  snippetSize?: InputMaybe<Scalars['Float']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  term: Scalars['String']['input'];
};


export type QuerySearchIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeComments?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  snippetSize?: InputMaybe<Scalars['Float']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  term: Scalars['String']['input'];
};


export type QuerySearchProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeComments?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  snippetSize?: InputMaybe<Scalars['Float']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
  term: Scalars['String']['input'];
};


export type QuerySsoUrlFromEmailArgs = {
  email: Scalars['String']['input'];
  isDesktop?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySummarizeProjectUpdatesArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type QueryTeamArgs = {
  id: Scalars['String']['input'];
};


export type QueryTeamMembershipArgs = {
  id: Scalars['String']['input'];
};


export type QueryTeamMembershipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryTemplateArgs = {
  id: Scalars['String']['input'];
};


export type QueryTemplatesForIntegrationArgs = {
  integrationType: Scalars['String']['input'];
};


export type QueryTimeScheduleArgs = {
  id: Scalars['String']['input'];
};


export type QueryTimeSchedulesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryTriageResponsibilitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryTriageResponsibilityArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryWebhookArgs = {
  id: Scalars['String']['input'];
};


export type QueryWebhooksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryWorkflowStateArgs = {
  id: Scalars['String']['input'];
};


export type QueryWorkflowStatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WorkflowStateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type RateLimitPayload = {
  __typename?: 'RateLimitPayload';
  /** The identifier we rate limit on. */
  identifier?: Maybe<Scalars['String']['output']>;
  /** The kind of rate limit selected for this request. */
  kind: Scalars['String']['output'];
  /** The state of the rate limit. */
  limits: Array<RateLimitResultPayload>;
};

export type RateLimitResultPayload = {
  __typename?: 'RateLimitResultPayload';
  /** The total allowed quantity for this type of limit. */
  allowedAmount: Scalars['Float']['output'];
  /** The period in which the rate limit is fully replenished in ms. */
  period: Scalars['Float']['output'];
  /** The remaining quantity for this type of limit after this request. */
  remainingAmount: Scalars['Float']['output'];
  /** The requested quantity for this type of limit. */
  requestedAmount: Scalars['Float']['output'];
  /** The timestamp after the rate limit is fully replenished as a UNIX timestamp. */
  reset: Scalars['Float']['output'];
  /** What is being rate limited. */
  type: Scalars['String']['output'];
};

/** A reaction associated with a comment or a project update. */
export type Reaction = Node & {
  __typename?: 'Reaction';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The comment that the reaction is associated with. */
  comment?: Maybe<Comment>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Name of the reaction's emoji. */
  emoji: Scalars['String']['output'];
  /** The external user that created the reaction. */
  externalUser?: Maybe<ExternalUser>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The issue that the reaction is associated with. */
  issue?: Maybe<Issue>;
  /** The project update that the reaction is associated with. */
  projectUpdate?: Maybe<ProjectUpdate>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user that created the reaction. */
  user?: Maybe<User>;
};

/** Reaction filtering options. */
export type ReactionCollectionFilter = {
  /** Compound filters, all of which need to be matched by the reaction. */
  and?: InputMaybe<Array<ReactionCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the reactions custom emoji. */
  customEmojiId?: InputMaybe<IdComparator>;
  /** Comparator for the reactions emoji. */
  emoji?: InputMaybe<StringComparator>;
  /** Filters that needs to be matched by all reactions. */
  every?: InputMaybe<ReactionFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the reaction. */
  or?: InputMaybe<Array<ReactionCollectionFilter>>;
  /** Filters that needs to be matched by some reactions. */
  some?: InputMaybe<ReactionFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type ReactionConnection = {
  __typename?: 'ReactionConnection';
  edges: Array<ReactionEdge>;
  nodes: Array<Reaction>;
  pageInfo: PageInfo;
};

export type ReactionCreateInput = {
  /** The comment to associate the reaction with. */
  commentId?: InputMaybe<Scalars['String']['input']>;
  /** The emoji the user reacted with. */
  emoji: Scalars['String']['input'];
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The issue to associate the reaction with. */
  issueId?: InputMaybe<Scalars['String']['input']>;
  /** The project update to associate the reaction with. */
  projectUpdateId?: InputMaybe<Scalars['String']['input']>;
};

export type ReactionEdge = {
  __typename?: 'ReactionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Reaction;
};

/** Reaction filtering options. */
export type ReactionFilter = {
  /** Compound filters, all of which need to be matched by the reaction. */
  and?: InputMaybe<Array<ReactionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the reactions custom emoji. */
  customEmojiId?: InputMaybe<IdComparator>;
  /** Comparator for the reactions emoji. */
  emoji?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Compound filters, one of which need to be matched by the reaction. */
  or?: InputMaybe<Array<ReactionFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type ReactionPayload = {
  __typename?: 'ReactionPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  reaction: Reaction;
  success: Scalars['Boolean']['output'];
};

/** Comparator for relation existence. */
export type RelationExistsComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not equals constraint. */
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Features release channel. */
export enum ReleaseChannel {
  Beta = 'beta',
  Internal = 'internal',
  PreRelease = 'preRelease',
  Public = 'public'
}

/** A reminder that can be attached to different entities. */
export type Reminder = Node & {
  __typename?: 'Reminder';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The reminder's comment. */
  comment?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The document that the reminder is associated with. */
  documentId?: Maybe<Document>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The issue that the reminder is associated with. */
  issueId?: Maybe<Issue>;
  /** The project that the reminder is associated with. */
  projectId?: Maybe<Project>;
  /** The time when a reminder triggers a notification in the user's inbox. */
  remindAt?: Maybe<Scalars['DateTime']['output']>;
  /** Scheduling settings for recurring reminders. */
  schedule?: Maybe<Scalars['JSONObject']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user that created a reminder. */
  user: User;
};

/** A roadmap for projects. */
export type Roadmap = Node & {
  __typename?: 'Roadmap';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The roadmap's color. */
  color?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the roadmap. */
  creator: User;
  /** The description of the roadmap. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The name of the roadmap. */
  name: Scalars['String']['output'];
  /** The organization of the roadmap. */
  organization: Organization;
  /** The user who owns the roadmap. */
  owner: User;
  /** Projects associated with the roadmap. */
  projects: ProjectConnection;
  /** The roadmap's unique URL slug. */
  slugId: Scalars['String']['output'];
  /** The sort order of the roadmap within the organization. */
  sortOrder: Scalars['Float']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The canonical url for the roadmap. */
  url: Scalars['String']['output'];
};


/** A roadmap for projects. */
export type RoadmapProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type RoadmapArchivePayload = ArchivePayload & {
  __typename?: 'RoadmapArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Roadmap>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Roadmap collection filtering options. */
export type RoadmapCollectionFilter = {
  /** Compound filters, all of which need to be matched by the roadmap. */
  and?: InputMaybe<Array<RoadmapCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the roadmap creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Filters that needs to be matched by all roadmaps. */
  every?: InputMaybe<RoadmapFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Comparator for the roadmap name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the roadmap. */
  or?: InputMaybe<Array<RoadmapCollectionFilter>>;
  /** Comparator for the roadmap slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Filters that needs to be matched by some roadmaps. */
  some?: InputMaybe<RoadmapFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type RoadmapConnection = {
  __typename?: 'RoadmapConnection';
  edges: Array<RoadmapEdge>;
  nodes: Array<Roadmap>;
  pageInfo: PageInfo;
};

export type RoadmapCreateInput = {
  /** The roadmap's color. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the roadmap. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the roadmap. */
  name: Scalars['String']['input'];
  /** The owner of the roadmap. */
  ownerId?: InputMaybe<Scalars['String']['input']>;
  /** The sort order of the roadmap within the organization. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
};

export type RoadmapEdge = {
  __typename?: 'RoadmapEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Roadmap;
};

/** Roadmap filtering options. */
export type RoadmapFilter = {
  /** Compound filters, all of which need to be matched by the roadmap. */
  and?: InputMaybe<Array<RoadmapFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the roadmap creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the roadmap name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the roadmap. */
  or?: InputMaybe<Array<RoadmapFilter>>;
  /** Comparator for the roadmap slug ID. */
  slugId?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type RoadmapPayload = {
  __typename?: 'RoadmapPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The roadmap that was created or updated. */
  roadmap: Roadmap;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Join table between projects and roadmaps. */
export type RoadmapToProject = Node & {
  __typename?: 'RoadmapToProject';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The project that the roadmap is associated with. */
  project: Project;
  /** The roadmap that the project is associated with. */
  roadmap: Roadmap;
  /** The sort order of the project within the roadmap. */
  sortOrder: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type RoadmapToProjectConnection = {
  __typename?: 'RoadmapToProjectConnection';
  edges: Array<RoadmapToProjectEdge>;
  nodes: Array<RoadmapToProject>;
  pageInfo: PageInfo;
};

export type RoadmapToProjectCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the project. */
  projectId: Scalars['String']['input'];
  /** The identifier of the roadmap. */
  roadmapId: Scalars['String']['input'];
  /** The sort order for the project within its organization. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
};

export type RoadmapToProjectEdge = {
  __typename?: 'RoadmapToProjectEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: RoadmapToProject;
};

export type RoadmapToProjectPayload = {
  __typename?: 'RoadmapToProjectPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** The roadmapToProject that was created or updated. */
  roadmapToProject: RoadmapToProject;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type RoadmapToProjectUpdateInput = {
  /** The sort order for the project within its organization. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
};

export type RoadmapUpdateInput = {
  /** The roadmap's color. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the roadmap. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the roadmap. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The owner of the roadmap. */
  ownerId?: InputMaybe<Scalars['String']['input']>;
  /** The sort order of the roadmap within the organization. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
};

/** Which day count to use for SLA calculations. */
export enum SlaDayCountType {
  All = 'all',
  OnlyBusinessDays = 'onlyBusinessDays'
}

export enum SchemaFieldType {
  BooleanType = 'booleanType',
  DateType = 'dateType',
  NumberType = 'numberType',
  StringType = 'stringType'
}

export enum SendStrategy {
  Desktop = 'desktop',
  DesktopAndPush = 'desktopAndPush',
  DesktopThenPush = 'desktopThenPush',
  Push = 'push'
}

/** Sentry specific settings. */
export type SentrySettings = {
  __typename?: 'SentrySettings';
  /** The slug of the Sentry organization being connected. */
  organizationSlug: Scalars['String']['output'];
};

export type SentrySettingsInput = {
  /** The slug of the Sentry organization being connected. */
  organizationSlug: Scalars['String']['input'];
};

/** Shared Slack integration settings. */
export type SharedSlackSettings = {
  __typename?: 'SharedSlackSettings';
  /** Enterprise id of the connected Slack enterprise */
  enterpriseId?: Maybe<Scalars['String']['output']>;
  /** Enterprise name of the connected Slack enterprise */
  enterpriseName?: Maybe<Scalars['String']['output']>;
  /** Whether to show unfurl previews in Slack */
  shouldUnfurl?: Maybe<Scalars['Boolean']['output']>;
  /** Slack workspace id */
  teamId?: Maybe<Scalars['String']['output']>;
  /** Slack workspace name */
  teamName?: Maybe<Scalars['String']['output']>;
};

export type SharedSlackSettingsInput = {
  /** Enterprise id of the connected Slack enterprise */
  enterpriseId?: InputMaybe<Scalars['String']['input']>;
  /** Enterprise name of the connected Slack enterprise */
  enterpriseName?: InputMaybe<Scalars['String']['input']>;
  /** Whether to show unfurl previews in Slack */
  shouldUnfurl?: InputMaybe<Scalars['Boolean']['input']>;
  /** Slack workspace id */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** Slack workspace name */
  teamName?: InputMaybe<Scalars['String']['input']>;
};

export enum SlaStatus {
  Breached = 'Breached',
  Completed = 'Completed',
  Failed = 'Failed',
  HighRisk = 'HighRisk',
  LowRisk = 'LowRisk',
  MediumRisk = 'MediumRisk'
}

/** Comparator for sla status. */
export type SlaStatusComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<SlaStatus>;
  /** In-array constraint. */
  in?: InputMaybe<Array<SlaStatus>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<SlaStatus>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<SlaStatus>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Issue SLA status sorting options. */
export type SlaStatusSort = {
  /** Whether nulls should be sorted first or last */
  nulls?: InputMaybe<PaginationNulls>;
  /** The order for the individual sort */
  order?: InputMaybe<PaginationSortOrder>;
};

/** Slack Asks specific settings. */
export type SlackAsksSettings = {
  __typename?: 'SlackAsksSettings';
  /** The user role type that is allowed to manage Asks settings. */
  canAdministrate: UserRoleType;
  /** Enterprise id of the connected Slack enterprise */
  enterpriseId?: Maybe<Scalars['String']['output']>;
  /** Enterprise name of the connected Slack enterprise */
  enterpriseName?: Maybe<Scalars['String']['output']>;
  /** Whether to show unfurl previews in Slack */
  shouldUnfurl?: Maybe<Scalars['Boolean']['output']>;
  /** The mapping of Slack channel ID => Slack channel name for connected channels. */
  slackChannelMapping?: Maybe<Array<SlackChannelNameMapping>>;
  /** Slack workspace id */
  teamId?: Maybe<Scalars['String']['output']>;
  /** Slack workspace name */
  teamName?: Maybe<Scalars['String']['output']>;
};

export type SlackAsksSettingsInput = {
  /** The user role type that is allowed to manage Asks settings. */
  canAdministrate: UserRoleType;
  /** Enterprise id of the connected Slack enterprise */
  enterpriseId?: InputMaybe<Scalars['String']['input']>;
  /** Enterprise name of the connected Slack enterprise */
  enterpriseName?: InputMaybe<Scalars['String']['input']>;
  /** Whether to show unfurl previews in Slack */
  shouldUnfurl?: InputMaybe<Scalars['Boolean']['input']>;
  /** The mapping of Slack channel ID => Slack channel name for connected channels. */
  slackChannelMapping?: InputMaybe<Array<SlackChannelNameMappingInput>>;
  /** Slack workspace id */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** Slack workspace name */
  teamName?: InputMaybe<Scalars['String']['input']>;
};

/** Tuple for mapping Slack channel IDs to names. */
export type SlackAsksTeamSettings = {
  __typename?: 'SlackAsksTeamSettings';
  /** Whether the default Asks template is enabled in the given channel for this team. */
  hasDefaultAsk: Scalars['Boolean']['output'];
  /** The Linear team ID. */
  id: Scalars['String']['output'];
};

export type SlackAsksTeamSettingsInput = {
  /** Whether the default Asks template is enabled in the given channel for this team. */
  hasDefaultAsk: Scalars['Boolean']['input'];
  /** The Linear team ID. */
  id: Scalars['String']['input'];
};

export type SlackChannelConnectPayload = {
  __typename?: 'SlackChannelConnectPayload';
  /** Whether the bot needs to be manually added to the channel. */
  addBot: Scalars['Boolean']['output'];
  /** The integration that was created or updated. */
  integration?: Maybe<Integration>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether it's recommended to connect main Slack integration. */
  nudgeToConnectMainSlackIntegration?: Maybe<Scalars['Boolean']['output']>;
  /** Whether it's recommended to update main Slack integration. */
  nudgeToUpdateMainSlackIntegration?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Object for mapping Slack channel IDs to names and other settings. */
export type SlackChannelNameMapping = {
  __typename?: 'SlackChannelNameMapping';
  /** Whether or not @-mentioning the bot should automatically create an Ask with the message. */
  autoCreateOnBotMention?: Maybe<Scalars['Boolean']['output']>;
  /** Whether or not using the :ticket: emoji in this channel should automatically create Asks. */
  autoCreateOnEmoji?: Maybe<Scalars['Boolean']['output']>;
  /** Whether or not top-level messages in this channel should automatically create Asks. */
  autoCreateOnMessage?: Maybe<Scalars['Boolean']['output']>;
  /** The optional template ID to use for Asks auto-created in this channel. If not set, auto-created Asks won't use any template. */
  autoCreateTemplateId?: Maybe<Scalars['String']['output']>;
  /** Whether or not the Linear Asks bot has been added to this Slack channel. */
  botAdded?: Maybe<Scalars['Boolean']['output']>;
  /** The Slack channel ID. */
  id: Scalars['String']['output'];
  /** Whether or not the Slack channel is private. */
  isPrivate?: Maybe<Scalars['Boolean']['output']>;
  /** Whether or not the Slack channel is shared with an external org. */
  isShared?: Maybe<Scalars['Boolean']['output']>;
  /** The Slack channel name. */
  name: Scalars['String']['output'];
  /** Whether or not synced Slack threads should be updated with a message when their Ask is accepted from triage. */
  postAcceptedFromTriageUpdates?: Maybe<Scalars['Boolean']['output']>;
  /** Whether or not synced Slack threads should be updated with a message and emoji when their Ask is canceled. */
  postCancellationUpdates?: Maybe<Scalars['Boolean']['output']>;
  /** Whether or not synced Slack threads should be updated with a message and emoji when their Ask is completed. */
  postCompletionUpdates?: Maybe<Scalars['Boolean']['output']>;
  /** Which teams are connected to the channel and settings for those teams. */
  teams: Array<SlackAsksTeamSettings>;
};

export type SlackChannelNameMappingInput = {
  /** Whether or not @-mentioning the bot should automatically create an Ask with the message. */
  autoCreateOnBotMention?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether or not using the :ticket: emoji in this channel should automatically create Asks. */
  autoCreateOnEmoji?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether or not top-level messages in this channel should automatically create Asks. */
  autoCreateOnMessage?: InputMaybe<Scalars['Boolean']['input']>;
  /** The optional template ID to use for Asks auto-created in this channel. If not set, auto-created Asks won't use any template. */
  autoCreateTemplateId?: InputMaybe<Scalars['String']['input']>;
  /** Whether or not the Linear Asks bot has been added to this Slack channel. */
  botAdded?: InputMaybe<Scalars['Boolean']['input']>;
  /** The Slack channel ID. */
  id: Scalars['String']['input'];
  /** Whether or not the Slack channel is private. */
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether or not the Slack channel is shared with an external org. */
  isShared?: InputMaybe<Scalars['Boolean']['input']>;
  /** The Slack channel name. */
  name: Scalars['String']['input'];
  /** Whether or not synced Slack threads should be updated with a message when their Ask is accepted from triage. */
  postAcceptedFromTriageUpdates?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether or not synced Slack threads should be updated with a message and emoji when their Ask is canceled. */
  postCancellationUpdates?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether or not synced Slack threads should be updated with a message and emoji when their Ask is completed. */
  postCompletionUpdates?: InputMaybe<Scalars['Boolean']['input']>;
  /** Which teams are connected to the channel and settings for those teams. */
  teams: Array<SlackAsksTeamSettingsInput>;
};

export enum SlackChannelType {
  DirectMessage = 'DirectMessage',
  MultiPersonDirectMessage = 'MultiPersonDirectMessage',
  Private = 'Private',
  Public = 'Public'
}

/** Slack notification specific settings. */
export type SlackPostSettings = {
  __typename?: 'SlackPostSettings';
  channel: Scalars['String']['output'];
  channelId: Scalars['String']['output'];
  channelType?: Maybe<SlackChannelType>;
  configurationUrl: Scalars['String']['output'];
};

export type SlackPostSettingsInput = {
  channel: Scalars['String']['input'];
  channelId: Scalars['String']['input'];
  channelType?: InputMaybe<SlackChannelType>;
  configurationUrl: Scalars['String']['input'];
};

/** Settings for the regular Slack integration. */
export type SlackSettings = {
  __typename?: 'SlackSettings';
  /** Enterprise id of the connected Slack enterprise */
  enterpriseId?: Maybe<Scalars['String']['output']>;
  /** Enterprise name of the connected Slack enterprise */
  enterpriseName?: Maybe<Scalars['String']['output']>;
  /** Whether Linear should automatically respond with issue unfurls when an issue identifier is mentioned in a Slack message. */
  linkOnIssueIdMention: Scalars['Boolean']['output'];
  /** Whether to show unfurl previews in Slack */
  shouldUnfurl?: Maybe<Scalars['Boolean']['output']>;
  /** Slack workspace id */
  teamId?: Maybe<Scalars['String']['output']>;
  /** Slack workspace name */
  teamName?: Maybe<Scalars['String']['output']>;
};

export type SlackSettingsInput = {
  /** Enterprise id of the connected Slack enterprise */
  enterpriseId?: InputMaybe<Scalars['String']['input']>;
  /** Enterprise name of the connected Slack enterprise */
  enterpriseName?: InputMaybe<Scalars['String']['input']>;
  /** Whether Linear should automatically respond with issue unfurls when an issue identifier is mentioned in a Slack message. */
  linkOnIssueIdMention: Scalars['Boolean']['input'];
  /** Whether to show unfurl previews in Slack */
  shouldUnfurl?: InputMaybe<Scalars['Boolean']['input']>;
  /** Slack workspace id */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** Slack workspace name */
  teamName?: InputMaybe<Scalars['String']['input']>;
};

/** Comparator for issue source type. */
export type SourceMetadataComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
  /** Compound filters, all of which need to be matched by the sub type. */
  subType?: InputMaybe<SubTypeComparator>;
};

/** Comparator for `sourceType` field. */
export type SourceTypeComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with case insensitive constraint. Matches any values that start with the given string. */
  startsWithIgnoreCase?: InputMaybe<Scalars['String']['input']>;
};

export type SsoUrlFromEmailResponse = {
  __typename?: 'SsoUrlFromEmailResponse';
  /** SAML SSO sign-in URL. */
  samlSsoUrl: Scalars['String']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Comparator for strings. */
export type StringArrayComparator = {
  /** Compound filters, all of which need to be matched. */
  every?: InputMaybe<Array<StringItemComparator>>;
  /** Length of the array. Matches any values that have the given length. */
  length?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which needs to be matched. */
  some?: InputMaybe<Array<StringItemComparator>>;
};

/** Comparator for strings. */
export type StringComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with case insensitive constraint. Matches any values that start with the given string. */
  startsWithIgnoreCase?: InputMaybe<Scalars['String']['input']>;
};

/** Comparator for strings in arrays. */
export type StringItemComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with case insensitive constraint. Matches any values that start with the given string. */
  startsWithIgnoreCase?: InputMaybe<Scalars['String']['input']>;
};

/** Comparator for source type. */
export type SubTypeComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SuccessPayload = {
  __typename?: 'SuccessPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type SummaryPayload = {
  __typename?: 'SummaryPayload';
  /** Summary for project updates. */
  summary: Scalars['String']['output'];
};

export type SynchronizedPayload = {
  __typename?: 'SynchronizedPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
};

/** An organizational unit that contains issues. */
export type Team = Node & {
  __typename?: 'Team';
  /** Team's currently active cycle. */
  activeCycle?: Maybe<Cycle>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Period after which automatically closed and completed issues are automatically archived in months. */
  autoArchivePeriod: Scalars['Float']['output'];
  /** Whether parent issues should automatically close when all child issues are closed, and child issues should automatically close when the parent issue is closed. */
  autoCloseParentAndChildIssues?: Maybe<Scalars['Boolean']['output']>;
  /** Period after which issues are automatically closed in months. Null/undefined means disabled. */
  autoClosePeriod?: Maybe<Scalars['Float']['output']>;
  /** The canceled workflow state which auto closed issues will be set to. Defaults to the first canceled state. */
  autoCloseStateId?: Maybe<Scalars['String']['output']>;
  /** The team's color. */
  color?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** [Internal] The current progress of the team. */
  currentProgress: Scalars['JSONObject']['output'];
  /** Calendar feed URL (iCal) for cycles. */
  cycleCalenderUrl: Scalars['String']['output'];
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime: Scalars['Float']['output'];
  /** The duration of a cycle in weeks. */
  cycleDuration: Scalars['Float']['output'];
  /** Auto assign completed issues to current cycle. */
  cycleIssueAutoAssignCompleted: Scalars['Boolean']['output'];
  /** Auto assign started issues to current cycle. */
  cycleIssueAutoAssignStarted: Scalars['Boolean']['output'];
  /** Auto assign issues to current cycle if in active status. */
  cycleLockToActive: Scalars['Boolean']['output'];
  /** The day of the week that a new cycle starts. */
  cycleStartDay: Scalars['Float']['output'];
  /** Cycles associated with the team. */
  cycles: CycleConnection;
  /** Whether the team uses cycles. */
  cyclesEnabled: Scalars['Boolean']['output'];
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate: Scalars['Float']['output'];
  /** The default workflow state into which issues are set when they are opened by team members. */
  defaultIssueState?: Maybe<WorkflowState>;
  /** The default template to use for new projects created for the team. */
  defaultProjectTemplate?: Maybe<Template>;
  /** The default template to use for new issues created by members of the team. */
  defaultTemplateForMembers?: Maybe<Template>;
  /**
   * The id of the default template to use for new issues created by members of the team.
   * @deprecated Use defaultTemplateForMembers instead
   */
  defaultTemplateForMembersId?: Maybe<Scalars['String']['output']>;
  /** The default template to use for new issues created by non-members of the team. */
  defaultTemplateForNonMembers?: Maybe<Template>;
  /**
   * The id of the default template to use for new issues created by non-members of the team.
   * @deprecated Use defaultTemplateForNonMembers instead
   */
  defaultTemplateForNonMembersId?: Maybe<Scalars['String']['output']>;
  /** The team's description. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The workflow state into which issues are moved when a PR has been opened as draft.
   * @deprecated Use team.gitAutomationStates instead.
   */
  draftWorkflowState?: Maybe<WorkflowState>;
  /** The Git automation states for the team. */
  gitAutomationStates: GitAutomationStateConnection;
  /** Whether to group recent issue history entries. */
  groupIssueHistory: Scalars['Boolean']['output'];
  /** The icon of the team. */
  icon?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Settings for all integrations associated with that team. */
  integrationsSettings?: Maybe<IntegrationsSettings>;
  /** Unique hash for the team to be used in invite URLs. */
  inviteHash: Scalars['String']['output'];
  /** Number of issues in the team. */
  issueCount: Scalars['Int']['output'];
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero: Scalars['Boolean']['output'];
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended: Scalars['Boolean']['output'];
  /** The issue estimation type to use. Must be one of "notUsed", "exponential", "fibonacci", "linear", "tShirt". */
  issueEstimationType: Scalars['String']['output'];
  /**
   * [DEPRECATED] Whether issues without priority should be sorted first.
   * @deprecated This setting is no longer in use.
   */
  issueOrderingNoPriorityFirst: Scalars['Boolean']['output'];
  /**
   * [DEPRECATED] Whether to move issues to bottom of the column when changing state.
   * @deprecated Use setIssueSortOrderOnStateChange instead.
   */
  issueSortOrderDefaultToBottom: Scalars['Boolean']['output'];
  /** Issues associated with the team. */
  issues: IssueConnection;
  /** [INTERNAL] Whether new users should join this team by default. */
  joinByDefault?: Maybe<Scalars['Boolean']['output']>;
  /** The team's unique key. The key is used in URLs. */
  key: Scalars['String']['output'];
  /** Labels associated with the team. */
  labels: IssueLabelConnection;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. Defaults to the first canceled state. */
  markedAsDuplicateWorkflowState?: Maybe<WorkflowState>;
  /** Users who are members of this team. */
  members: UserConnection;
  /** [ALPHA] The membership of the given user in the team. */
  membership?: Maybe<TeamMembership>;
  /** Memberships associated with the team. For easier access of the same data, use `members` query. */
  memberships: TeamMembershipConnection;
  /**
   * The workflow state into which issues are moved when a PR has been merged.
   * @deprecated Use team.gitAutomationStates instead.
   */
  mergeWorkflowState?: Maybe<WorkflowState>;
  /**
   * The workflow state into which issues are moved when a PR is ready to be merged.
   * @deprecated Use team.gitAutomationStates instead.
   */
  mergeableWorkflowState?: Maybe<WorkflowState>;
  /** The team's name. */
  name: Scalars['String']['output'];
  /** The organization that the team is associated with. */
  organization: Organization;
  /** Whether the team is private or not. */
  private: Scalars['Boolean']['output'];
  /** [Internal] The progress history of the team. */
  progressHistory: Scalars['JSONObject']['output'];
  /** Projects associated with the team. */
  projects: ProjectConnection;
  /** Whether an issue needs to have a priority set before leaving triage. */
  requirePriorityToLeaveTriage: Scalars['Boolean']['output'];
  /**
   * The workflow state into which issues are moved when a review has been requested for the PR.
   * @deprecated Use team.gitAutomationStates instead.
   */
  reviewWorkflowState?: Maybe<WorkflowState>;
  /** The SCIM group name for the team. */
  scimGroupName?: Maybe<Scalars['String']['output']>;
  /** Whether the team is managed by SCIM integration. */
  scimManaged: Scalars['Boolean']['output'];
  /** Where to move issues when changing state. */
  setIssueSortOrderOnStateChange: Scalars['String']['output'];
  /**
   * Whether to send new issue comment notifications to Slack.
   * @deprecated No longer in use
   */
  slackIssueComments: Scalars['Boolean']['output'];
  /**
   * Whether to send new issue status updates to Slack.
   * @deprecated No longer in use
   */
  slackIssueStatuses: Scalars['Boolean']['output'];
  /**
   * Whether to send new issue notifications to Slack.
   * @deprecated No longer is use
   */
  slackNewIssue: Scalars['Boolean']['output'];
  /**
   * The workflow state into which issues are moved when a PR has been opened.
   * @deprecated Use team.gitAutomationStates instead.
   */
  startWorkflowState?: Maybe<WorkflowState>;
  /** The states that define the workflow associated with the team. */
  states: WorkflowStateConnection;
  /** Templates associated with the team. */
  templates: TemplateConnection;
  /** The timezone of the team. Defaults to "America/Los_Angeles" */
  timezone: Scalars['String']['output'];
  /** Whether triage mode is enabled for the team or not. */
  triageEnabled: Scalars['Boolean']['output'];
  /** The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. */
  triageIssueState?: Maybe<WorkflowState>;
  /** Team's triage responsibility. */
  triageResponsibility?: Maybe<TriageResponsibility>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount: Scalars['Float']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Webhooks associated with the team. */
  webhooks: WebhookConnection;
};


/** An organizational unit that contains issues. */
export type TeamCyclesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CycleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamGitAutomationStatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamIssueCountArgs = {
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
};


/** An organizational unit that contains issues. */
export type TeamIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamLabelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamMembershipArgs = {
  userId: Scalars['String']['input'];
};


/** An organizational unit that contains issues. */
export type TeamMembershipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamStatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WorkflowStateFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamWebhooksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type TeamArchivePayload = ArchivePayload & {
  __typename?: 'TeamArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<Team>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Roadmap collection filtering options. */
export type TeamCollectionFilter = {
  /** Compound filters, all of which need to be matched by the roadmap. */
  and?: InputMaybe<Array<TeamCollectionFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that needs to be matched by all roadmaps. */
  every?: InputMaybe<TeamFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the roadmap. */
  or?: InputMaybe<Array<TeamCollectionFilter>>;
  /** Filters that needs to be matched by some roadmaps. */
  some?: InputMaybe<TeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type TeamConnection = {
  __typename?: 'TeamConnection';
  edges: Array<TeamEdge>;
  nodes: Array<Team>;
  pageInfo: PageInfo;
};

export type TeamCreateInput = {
  /** Period after which closed and completed issues are automatically archived, in months. 0 means disabled. */
  autoArchivePeriod?: InputMaybe<Scalars['Float']['input']>;
  /** Period after which issues are automatically closed, in months. */
  autoClosePeriod?: InputMaybe<Scalars['Float']['input']>;
  /** The canceled workflow state which auto closed issues will be set to. */
  autoCloseStateId?: InputMaybe<Scalars['String']['input']>;
  /** The color of the team. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime?: InputMaybe<Scalars['Int']['input']>;
  /** The duration of each cycle in weeks. */
  cycleDuration?: InputMaybe<Scalars['Int']['input']>;
  /** Auto assign completed issues to current active cycle setting. */
  cycleIssueAutoAssignCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Auto assign started issues to current active cycle setting. */
  cycleIssueAutoAssignStarted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only allow issues issues with cycles in Active Issues. */
  cycleLockToActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The day of the week that a new cycle starts. */
  cycleStartDay?: InputMaybe<Scalars['Float']['input']>;
  /** Whether the team uses cycles. */
  cyclesEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate?: InputMaybe<Scalars['Float']['input']>;
  /** The identifier of the default project template of this team. */
  defaultProjectTemplateId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the default template for members of this team. */
  defaultTemplateForMembersId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the default template for non-members of this team. */
  defaultTemplateForNonMembersId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the team. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory?: InputMaybe<Scalars['Boolean']['input']>;
  /** The icon of the team. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended?: InputMaybe<Scalars['Boolean']['input']>;
  /** The issue estimation type to use. Must be one of "notUsed", "exponential", "fibonacci", "linear", "tShirt". */
  issueEstimationType?: InputMaybe<Scalars['String']['input']>;
  /** [DEPRECATED] Whether issues without priority should be sorted first. */
  issueOrderingNoPriorityFirst?: InputMaybe<Scalars['Boolean']['input']>;
  /** The key of the team. If not given, the key will be generated based on the name of the team. */
  key?: InputMaybe<Scalars['String']['input']>;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. */
  markedAsDuplicateWorkflowStateId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the team. */
  name: Scalars['String']['input'];
  /** The organization associated with the team. */
  organizationId?: InputMaybe<Scalars['String']['input']>;
  /** The parent team ID. */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** Internal. Whether the team is private or not. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether an issue needs to have a priority set before leaving triage. */
  requirePriorityToLeaveTriage?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to move issues to bottom of the column when changing state. */
  setIssueSortOrderOnStateChange?: InputMaybe<Scalars['String']['input']>;
  /** The timezone of the team. */
  timezone?: InputMaybe<Scalars['String']['input']>;
  /** Whether triage mode is enabled for the team. */
  triageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount?: InputMaybe<Scalars['Float']['input']>;
};

export type TeamEdge = {
  __typename?: 'TeamEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Team;
};

/** Team filtering options. */
export type TeamFilter = {
  /** Compound filters, all of which need to be matched by the team. */
  and?: InputMaybe<Array<TeamFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the team description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the teams issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the team key. */
  key?: InputMaybe<StringComparator>;
  /** Comparator for the team name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the team. */
  or?: InputMaybe<Array<TeamFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Defines the membership of a user to a team. */
export type TeamMembership = Node & {
  __typename?: 'TeamMembership';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Whether the user is the owner of the team. */
  owner: Scalars['Boolean']['output'];
  /** The order of the item in the users team list. */
  sortOrder: Scalars['Float']['output'];
  /** The team that the membership is associated with. */
  team: Team;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user that the membership is associated with. */
  user: User;
};

export type TeamMembershipConnection = {
  __typename?: 'TeamMembershipConnection';
  edges: Array<TeamMembershipEdge>;
  nodes: Array<TeamMembership>;
  pageInfo: PageInfo;
};

export type TeamMembershipCreateInput = {
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Internal. Whether the user is the owner of the team. */
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  /** The position of the item in the users list. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The identifier of the team associated with the membership. */
  teamId: Scalars['String']['input'];
  /** The identifier of the user associated with the membership. */
  userId: Scalars['String']['input'];
};

export type TeamMembershipEdge = {
  __typename?: 'TeamMembershipEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: TeamMembership;
};

export type TeamMembershipPayload = {
  __typename?: 'TeamMembershipPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The team membership that was created or updated. */
  teamMembership?: Maybe<TeamMembership>;
};

export type TeamMembershipUpdateInput = {
  /** Internal. Whether the user is the owner of the team. */
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  /** The position of the item in the users list. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
};

/** A team notification subscription. */
export type TeamNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'TeamNotificationSubscription';
  /** Whether the subscription is active or not. */
  active: Scalars['Boolean']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The contextual initiative view associated with the notification subscription. */
  initiative?: Maybe<Initiative>;
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']['output']>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team subscribed to. */
  team: Team;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user view associated with the notification subscription. */
  user?: Maybe<User>;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type TeamPayload = {
  __typename?: 'TeamPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The team that was created or updated. */
  team?: Maybe<Team>;
};

/** Issue team sorting options. */
export type TeamSort = {
  /** Whether nulls should be sorted first or last */
  nulls?: InputMaybe<PaginationNulls>;
  /** The order for the individual sort */
  order?: InputMaybe<PaginationSortOrder>;
};

export type TeamUpdateInput = {
  /** Period after which closed and completed issues are automatically archived, in months. */
  autoArchivePeriod?: InputMaybe<Scalars['Float']['input']>;
  /** [INTERNAL] Whether to automatically close a parent issue in this team if all its sub-issues are closed, and vice versa. */
  autoCloseParentAndChildIssues?: InputMaybe<Scalars['Boolean']['input']>;
  /** Period after which issues are automatically closed, in months. */
  autoClosePeriod?: InputMaybe<Scalars['Float']['input']>;
  /** The canceled workflow state which auto closed issues will be set to. */
  autoCloseStateId?: InputMaybe<Scalars['String']['input']>;
  /** The color of the team. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime?: InputMaybe<Scalars['Int']['input']>;
  /** The duration of each cycle in weeks. */
  cycleDuration?: InputMaybe<Scalars['Int']['input']>;
  /** The date to begin cycles on. */
  cycleEnabledStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** [DEPRECATED] Whether the first cycle should start in the current or the next week. */
  cycleEnabledStartWeek?: InputMaybe<Scalars['String']['input']>;
  /** Auto assign completed issues to current active cycle setting. */
  cycleIssueAutoAssignCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Auto assign started issues to current active cycle setting. */
  cycleIssueAutoAssignStarted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only allow issues with cycles in Active Issues. */
  cycleLockToActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The day of the week that a new cycle starts. */
  cycleStartDay?: InputMaybe<Scalars['Float']['input']>;
  /** Whether the team uses cycles. */
  cyclesEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate?: InputMaybe<Scalars['Float']['input']>;
  /** Default status for newly created issues. */
  defaultIssueStateId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the default project template of this team. */
  defaultProjectTemplateId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the default template for members of this team. */
  defaultTemplateForMembersId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of the default template for non-members of this team. */
  defaultTemplateForNonMembersId?: InputMaybe<Scalars['String']['input']>;
  /** The description of the team. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The workflow state into which issues are moved when a draft PR has been opened. */
  draftWorkflowStateId?: InputMaybe<Scalars['String']['input']>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory?: InputMaybe<Scalars['Boolean']['input']>;
  /** The icon of the team. */
  icon?: InputMaybe<Scalars['String']['input']>;
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended?: InputMaybe<Scalars['Boolean']['input']>;
  /** The issue estimation type to use. Must be one of "notUsed", "exponential", "fibonacci", "linear", "tShirt". */
  issueEstimationType?: InputMaybe<Scalars['String']['input']>;
  /** [DEPRECATED] Whether issues without priority should be sorted first. */
  issueOrderingNoPriorityFirst?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether new users should join this team by default. Mutation restricted to workspace admins! */
  joinByDefault?: InputMaybe<Scalars['Boolean']['input']>;
  /** The key of the team. */
  key?: InputMaybe<Scalars['String']['input']>;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. */
  markedAsDuplicateWorkflowStateId?: InputMaybe<Scalars['String']['input']>;
  /** The workflow state into which issues are moved when a PR has been merged. */
  mergeWorkflowStateId?: InputMaybe<Scalars['String']['input']>;
  /** The workflow state into which issues are moved when a PR is ready to be merged. */
  mergeableWorkflowStateId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the team. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The parent team ID. */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the team is private or not. */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether an issue needs to have a priority set before leaving triage. */
  requirePriorityToLeaveTriage?: InputMaybe<Scalars['Boolean']['input']>;
  /** The workflow state into which issues are moved when a review has been requested for the PR. */
  reviewWorkflowStateId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the team is managed by SCIM integration. Mutation restricted to workspace admins and only unsetting is allowed! */
  scimManaged?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to move issues to bottom of the column when changing state. */
  setIssueSortOrderOnStateChange?: InputMaybe<Scalars['String']['input']>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send issue status update notifications to Slack. */
  slackIssueStatuses?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue?: InputMaybe<Scalars['Boolean']['input']>;
  /** The workflow state into which issues are moved when a PR has been opened. */
  startWorkflowStateId?: InputMaybe<Scalars['String']['input']>;
  /** The timezone of the team. */
  timezone?: InputMaybe<Scalars['String']['input']>;
  /** Whether triage mode is enabled for the team. */
  triageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount?: InputMaybe<Scalars['Float']['input']>;
};

/** A template object used for creating entities faster. */
export type Template = Node & {
  __typename?: 'Template';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the template. */
  creator?: Maybe<User>;
  /** Template description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The user who last updated the template. */
  lastUpdatedBy?: Maybe<User>;
  /** The name of the template. */
  name: Scalars['String']['output'];
  /** The organization that the template is associated with. If null, the template is associated with a particular team. */
  organization?: Maybe<Organization>;
  /** The sort order of the template. */
  sortOrder: Scalars['Float']['output'];
  /** The team that the template is associated with. If null, the template is global to the workspace. */
  team?: Maybe<Team>;
  /** Template data. */
  templateData: Scalars['JSON']['output'];
  /** The entity type this template is for. */
  type: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type TemplateConnection = {
  __typename?: 'TemplateConnection';
  edges: Array<TemplateEdge>;
  nodes: Array<Template>;
  pageInfo: PageInfo;
};

export type TemplateCreateInput = {
  /** The template description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The template name. */
  name: Scalars['String']['input'];
  /** The position of the template in the templates list. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The identifier or key of the team associated with the template. If not given, the template will be shared across all teams. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** The template data as JSON encoded attributes of the type of entity, such as an issue. */
  templateData: Scalars['JSON']['input'];
  /** The template type, e.g. 'issue'. */
  type: Scalars['String']['input'];
};

export type TemplateEdge = {
  __typename?: 'TemplateEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Template;
};

export type TemplatePayload = {
  __typename?: 'TemplatePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The template that was created or updated. */
  template: Template;
};

export type TemplateUpdateInput = {
  /** The template description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The template name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The position of the template in the templates list. */
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  /** The identifier or key of the team associated with the template. If set to null, the template will be shared across all teams. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** The template data as JSON encoded attributes of the type of entity, such as an issue. */
  templateData?: InputMaybe<Scalars['JSON']['input']>;
};

/** A time schedule. */
export type TimeSchedule = Node & {
  __typename?: 'TimeSchedule';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The schedule entries. */
  entries?: Maybe<Array<TimeScheduleEntry>>;
  /** The identifier of the external schedule. */
  externalId?: Maybe<Scalars['String']['output']>;
  /** The URL to the external schedule. */
  externalUrl?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The identifier of the Linear integration populating the schedule. */
  integration?: Maybe<Integration>;
  /** The name of the schedule. */
  name: Scalars['String']['output'];
  /** The organization of the schedule. */
  organization: Organization;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type TimeScheduleConnection = {
  __typename?: 'TimeScheduleConnection';
  edges: Array<TimeScheduleEdge>;
  nodes: Array<TimeSchedule>;
  pageInfo: PageInfo;
};

export type TimeScheduleCreateInput = {
  /** The schedule entries. */
  entries: Array<TimeScheduleEntryInput>;
  /** The unique identifier of the external schedule. */
  externalId?: InputMaybe<Scalars['String']['input']>;
  /** The URL to the external schedule. */
  externalUrl?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the schedule. */
  name: Scalars['String']['input'];
};

export type TimeScheduleEdge = {
  __typename?: 'TimeScheduleEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: TimeSchedule;
};

export type TimeScheduleEntry = {
  __typename?: 'TimeScheduleEntry';
  /** The end date of the schedule in ISO 8601 date-time format. */
  endsAt: Scalars['DateTime']['output'];
  /** The start date of the schedule in ISO 8601 date-time format. */
  startsAt: Scalars['DateTime']['output'];
  /** The email, name or reference to the user on schedule. This is used in case the external user could not be mapped to a Linear user id. */
  userEmail?: Maybe<Scalars['String']['output']>;
  /** The Linear user id of the user on schedule. If the user cannot be mapped to a Linear user then `userEmail` can be used as a reference. */
  userId?: Maybe<Scalars['String']['output']>;
};

export type TimeScheduleEntryInput = {
  /** The end date of the schedule in ISO 8601 date-time format. */
  endsAt: Scalars['DateTime']['input'];
  /** The start date of the schedule in ISO 8601 date-time format. */
  startsAt: Scalars['DateTime']['input'];
  /** The email, name or reference to the user on schedule. This is used in case the external user could not be mapped to a Linear user id. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
  /** The Linear user id of the user on schedule. If the user cannot be mapped to a Linear user then `userEmail` can be used as a reference. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type TimeSchedulePayload = {
  __typename?: 'TimeSchedulePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  timeSchedule: TimeSchedule;
};

export type TimeScheduleUpdateInput = {
  /** The schedule entries. */
  entries?: InputMaybe<Array<TimeScheduleEntryInput>>;
  /** The unique identifier of the external schedule. */
  externalId?: InputMaybe<Scalars['String']['input']>;
  /** The URL to the external schedule. */
  externalUrl?: InputMaybe<Scalars['String']['input']>;
  /** The name of the schedule. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Comparator for timeless dates. */
export type TimelessDateComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['TimelessDateOrDuration']['input']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['TimelessDateOrDuration']['input']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['TimelessDateOrDuration']['input']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['TimelessDateOrDuration']['input']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['TimelessDateOrDuration']['input']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['TimelessDateOrDuration']['input']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['TimelessDateOrDuration']['input']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['TimelessDateOrDuration']['input']>>;
};

/** Issue title sorting options. */
export type TitleSort = {
  /** Whether nulls should be sorted first or last */
  nulls?: InputMaybe<PaginationNulls>;
  /** The order for the individual sort */
  order?: InputMaybe<PaginationSortOrder>;
};

export type TokenUserAccountAuthInput = {
  /** The email which to login via the magic login code. */
  email: Scalars['String']['input'];
  /** An optional invite link for an organization. */
  inviteLink?: InputMaybe<Scalars['String']['input']>;
  /** The identifiers of the teams to auto-join. */
  teamIdsToJoin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The timezone of the user's browser. */
  timezone: Scalars['String']['input'];
  /** The magic login code. */
  token: Scalars['String']['input'];
};

/** A team's triage responsibility. */
export type TriageResponsibility = Node & {
  __typename?: 'TriageResponsibility';
  /** The action to take when an issue is added to triage. */
  action: TriageResponsibilityAction;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user currently responsible for triage. */
  currentUser?: Maybe<User>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Set of users used for triage responsibility. */
  manualSelection?: Maybe<TriageResponsibilityManualSelection>;
  /** The team to which the triage responsibility belongs to. */
  team: Team;
  /** The time schedule used for scheduling. */
  timeSchedule?: Maybe<TimeSchedule>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

/** Which action should be taken after an issue is added to triage. */
export enum TriageResponsibilityAction {
  Assign = 'assign',
  Notify = 'notify'
}

export type TriageResponsibilityConnection = {
  __typename?: 'TriageResponsibilityConnection';
  edges: Array<TriageResponsibilityEdge>;
  nodes: Array<TriageResponsibility>;
  pageInfo: PageInfo;
};

export type TriageResponsibilityCreateInput = {
  /** The action to take when an issue is added to triage. */
  action: Scalars['String']['input'];
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The manual selection of users responsible for triage. */
  manualSelection?: InputMaybe<TriageResponsibilityManualSelectionInput>;
  /** The identifier of the team associated with the triage responsibility. */
  teamId: Scalars['String']['input'];
  /** The identifier of the time schedule used for scheduling triage responsibility */
  timeScheduleId?: InputMaybe<Scalars['String']['input']>;
};

export type TriageResponsibilityEdge = {
  __typename?: 'TriageResponsibilityEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: TriageResponsibility;
};

export type TriageResponsibilityManualSelection = {
  __typename?: 'TriageResponsibilityManualSelection';
  /** [INTERNAL] The index of the current userId used for the assign action when having more than one user. */
  assignmentIndex?: Maybe<Scalars['Int']['output']>;
  /** The set of users responsible for triage. */
  userIds: Array<Scalars['String']['output']>;
};

/** Manual triage responsibility using a set of users. */
export type TriageResponsibilityManualSelectionInput = {
  /** [INTERNAL] The index of the current userId used for the assign action when having more than one user. */
  assignmentIndex?: InputMaybe<Scalars['Int']['input']>;
  /** The set of users responsible for triage. */
  userIds: Array<Scalars['String']['input']>;
};

export type TriageResponsibilityPayload = {
  __typename?: 'TriageResponsibilityPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  triageResponsibility: TriageResponsibility;
};

export type TriageResponsibilityUpdateInput = {
  /** The action to take when an issue is added to triage. */
  action?: InputMaybe<Scalars['String']['input']>;
  /** The manual selection of users responsible for triage. */
  manualSelection?: InputMaybe<TriageResponsibilityManualSelectionInput>;
  /** The identifier of the time schedule used for scheduling triage responsibility. */
  timeScheduleId?: InputMaybe<Scalars['String']['input']>;
};

/** Issue update date sorting options. */
export type UpdatedAtSort = {
  /** Whether nulls should be sorted first or last */
  nulls?: InputMaybe<PaginationNulls>;
  /** The order for the individual sort */
  order?: InputMaybe<PaginationSortOrder>;
};

/** Object representing Google Cloud upload policy, plus additional data. */
export type UploadFile = {
  __typename?: 'UploadFile';
  /** The asset URL for the uploaded file. (assigned automatically). */
  assetUrl: Scalars['String']['output'];
  /** The content type. */
  contentType: Scalars['String']['output'];
  /** The filename. */
  filename: Scalars['String']['output'];
  headers: Array<UploadFileHeader>;
  metaData?: Maybe<Scalars['JSONObject']['output']>;
  /** The size of the uploaded file. */
  size: Scalars['Int']['output'];
  /** The signed URL the for the uploaded file. (assigned automatically). */
  uploadUrl: Scalars['String']['output'];
};

export type UploadFileHeader = {
  __typename?: 'UploadFileHeader';
  /** Upload file header key. */
  key: Scalars['String']['output'];
  /** Upload file header value. */
  value: Scalars['String']['output'];
};

export type UploadPayload = {
  __typename?: 'UploadPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** Object describing the file to be uploaded. */
  uploadFile?: Maybe<UploadFile>;
};

/** A user that has access to the the resources of an organization. */
export type User = Node & {
  __typename?: 'User';
  /** Whether the user account is active or disabled (suspended). */
  active: Scalars['Boolean']['output'];
  /** Whether the user is an organization administrator. */
  admin: Scalars['Boolean']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Issues assigned to the user. */
  assignedIssues: IssueConnection;
  /** The background color of the avatar for users without set avatar. */
  avatarBackgroundColor: Scalars['String']['output'];
  /** An URL to the user's avatar image. */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** [DEPRECATED] Hash for the user to be used in calendar URLs. */
  calendarHash?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Number of issues created. */
  createdIssueCount: Scalars['Int']['output'];
  /** Issues created by the user. */
  createdIssues: IssueConnection;
  /** A short description of the user, either its title or bio. */
  description?: Maybe<Scalars['String']['output']>;
  /** Reason why is the account disabled. */
  disableReason?: Maybe<Scalars['String']['output']>;
  /** The user's display (nick) name. Unique within each organization. */
  displayName: Scalars['String']['output'];
  /** The user's email address. */
  email: Scalars['String']['output'];
  /** Whether the user is a guest in the workspace and limited to accessing a subset of teams. */
  guest: Scalars['Boolean']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The initials of the user. */
  initials: Scalars['String']['output'];
  /** Unique hash for the user to be used in invite URLs. */
  inviteHash: Scalars['String']['output'];
  /** Whether the user is the currently authenticated user. */
  isMe: Scalars['Boolean']['output'];
  /** The last time the user was seen online. If null, the user is currently online. */
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  /** The user's full name. */
  name: Scalars['String']['output'];
  /** Organization the user belongs to. */
  organization: Organization;
  /** The emoji to represent the user current status. */
  statusEmoji?: Maybe<Scalars['String']['output']>;
  /** The label of the user current status. */
  statusLabel?: Maybe<Scalars['String']['output']>;
  /** A date at which the user current status should be cleared. */
  statusUntilAt?: Maybe<Scalars['DateTime']['output']>;
  /** Memberships associated with the user. For easier access of the same data, use `teams` query. */
  teamMemberships: TeamMembershipConnection;
  /** Teams the user is part of. */
  teams: TeamConnection;
  /** The local timezone of the user. */
  timezone?: Maybe<Scalars['String']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** User's profile URL. */
  url: Scalars['String']['output'];
};


/** A user that has access to the the resources of an organization. */
export type UserAssignedIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A user that has access to the the resources of an organization. */
export type UserCreatedIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A user that has access to the the resources of an organization. */
export type UserTeamMembershipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A user that has access to the the resources of an organization. */
export type UserTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A user account. */
export type UserAccount = {
  __typename?: 'UserAccount';
  /** The time at which the model was archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Whether not to send email auth links in the email auth emails. */
  authTokenLinkDisabled: Scalars['Boolean']['output'];
  /** The time at which the model was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user's email address. */
  email: Scalars['String']['output'];
  /** The models identifier. */
  id: Scalars['ID']['output'];
  /** The user's name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The authentication service used to create the account. */
  service: Scalars['String']['output'];
  /** The time at which the model was updated. */
  updatedAt: Scalars['DateTime']['output'];
};

/** [INTERNAL] An email change verification challenge. */
export type UserAccountEmailChange = {
  __typename?: 'UserAccountEmailChange';
  /** The time at which the model was archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The timestamp this verification challenge was canceled at. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The timestamp the verification codes expire at. */
  expiresAt: Scalars['DateTime']['output'];
  /** The model's identifier. */
  id: Scalars['ID']['output'];
  /** The new email the user account wants to change to. */
  newEmail: Scalars['String']['output'];
  /** The timestamp the new email was verified at. */
  newEmailVerifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user account's current email. */
  oldEmail: Scalars['String']['output'];
  /** The timestamp the old email was verified at. */
  oldEmailVerifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the model was updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type UserAdminPayload = {
  __typename?: 'UserAdminPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

/** Public information of the OAuth application, plus whether the application has been authorized for the given scopes. */
export type UserAuthorizedApplication = {
  __typename?: 'UserAuthorizedApplication';
  /** Error associated with the application needing to be requested for approval in the workspace. */
  approvalErrorCode?: Maybe<Scalars['String']['output']>;
  /** OAuth application's client ID. */
  clientId: Scalars['String']['output'];
  /** Whether the application was created by Linear. */
  createdByLinear: Scalars['Boolean']['output'];
  /** Information about the application. */
  description?: Maybe<Scalars['String']['output']>;
  /** Name of the developer. */
  developer: Scalars['String']['output'];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars['String']['output'];
  /** OAuth application's ID. */
  id: Scalars['String']['output'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Whether the user has authorized the application for the given scopes. */
  isAuthorized: Scalars['Boolean']['output'];
  /** Application name. */
  name: Scalars['String']['output'];
  /** Whether or not webhooks are enabled for the application. */
  webhooksEnabled: Scalars['Boolean']['output'];
};

/** User filtering options. */
export type UserCollectionFilter = {
  /** Comparator for the user's activity status. */
  active?: InputMaybe<BooleanComparator>;
  /** Comparator for the user's admin status. */
  admin?: InputMaybe<BooleanComparator>;
  /** Compound filters, all of which need to be matched by the user. */
  and?: InputMaybe<Array<UserCollectionFilter>>;
  /** Filters that the users assigned issues must satisfy. */
  assignedIssues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the user's display name. */
  displayName?: InputMaybe<StringComparator>;
  /** Comparator for the user's email. */
  email?: InputMaybe<StringComparator>;
  /** Filters that needs to be matched by all users. */
  every?: InputMaybe<UserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filter based on the currently authenticated user. Set to true to filter for the authenticated user, false for any other user. */
  isMe?: InputMaybe<BooleanComparator>;
  /** Comparator for the collection length. */
  length?: InputMaybe<NumberComparator>;
  /** Comparator for the user's name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the user. */
  or?: InputMaybe<Array<UserCollectionFilter>>;
  /** Filters that needs to be matched by some users. */
  some?: InputMaybe<UserFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  nodes: Array<User>;
  pageInfo: PageInfo;
};

export enum UserContextViewType {
  Assigned = 'assigned'
}

export type UserEdge = {
  __typename?: 'UserEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: User;
};

/** User filtering options. */
export type UserFilter = {
  /** Comparator for the user's activity status. */
  active?: InputMaybe<BooleanComparator>;
  /** Comparator for the user's admin status. */
  admin?: InputMaybe<BooleanComparator>;
  /** Compound filters, all of which need to be matched by the user. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filters that the users assigned issues must satisfy. */
  assignedIssues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the user's display name. */
  displayName?: InputMaybe<StringComparator>;
  /** Comparator for the user's email. */
  email?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filter based on the currently authenticated user. Set to true to filter for the authenticated user, false for any other user. */
  isMe?: InputMaybe<BooleanComparator>;
  /** Comparator for the user's name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the user. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** The types of flags that the user can have. */
export enum UserFlagType {
  All = 'all',
  AnalyticsWelcomeDismissed = 'analyticsWelcomeDismissed',
  CanPlaySnake = 'canPlaySnake',
  CanPlayTetris = 'canPlayTetris',
  CompletedOnboarding = 'completedOnboarding',
  CycleWelcomeDismissed = 'cycleWelcomeDismissed',
  DesktopDownloadToastDismissed = 'desktopDownloadToastDismissed',
  DesktopInstalled = 'desktopInstalled',
  DesktopTabsOnboardingDismissed = 'desktopTabsOnboardingDismissed',
  DueDateShortcutMigration = 'dueDateShortcutMigration',
  EditorSlashCommandUsed = 'editorSlashCommandUsed',
  EmptyActiveIssuesDismissed = 'emptyActiveIssuesDismissed',
  EmptyBacklogDismissed = 'emptyBacklogDismissed',
  EmptyCustomViewsDismissed = 'emptyCustomViewsDismissed',
  EmptyMyIssuesDismissed = 'emptyMyIssuesDismissed',
  EmptyParagraphSlashCommandTip = 'emptyParagraphSlashCommandTip',
  FigmaPluginBannerDismissed = 'figmaPluginBannerDismissed',
  FigmaPromptDismissed = 'figmaPromptDismissed',
  HelpIslandFeatureInsightsDismissed = 'helpIslandFeatureInsightsDismissed',
  ImportBannerDismissed = 'importBannerDismissed',
  InitiativesBannerDismissed = 'initiativesBannerDismissed',
  InsightsHelpDismissed = 'insightsHelpDismissed',
  InsightsWelcomeDismissed = 'insightsWelcomeDismissed',
  IssueLabelSuggestionUsed = 'issueLabelSuggestionUsed',
  IssueMovePromptCompleted = 'issueMovePromptCompleted',
  JoinTeamIntroductionDismissed = 'joinTeamIntroductionDismissed',
  ListSelectionTip = 'listSelectionTip',
  MigrateThemePreference = 'migrateThemePreference',
  MilestoneOnboardingIsSeenAndDismissed = 'milestoneOnboardingIsSeenAndDismissed',
  ProjectBacklogWelcomeDismissed = 'projectBacklogWelcomeDismissed',
  ProjectBoardOnboardingIsSeenAndDismissed = 'projectBoardOnboardingIsSeenAndDismissed',
  ProjectUpdatesWelcomeDismissed = 'projectUpdatesWelcomeDismissed',
  ProjectWelcomeDismissed = 'projectWelcomeDismissed',
  RewindBannerDismissed = 'rewindBannerDismissed',
  SlackCommentReactionTipShown = 'slackCommentReactionTipShown',
  TeamsPageIntroductionDismissed = 'teamsPageIntroductionDismissed',
  ThreadedCommentsNudgeIsSeen = 'threadedCommentsNudgeIsSeen',
  TriageWelcomeDismissed = 'triageWelcomeDismissed',
  TryCyclesDismissed = 'tryCyclesDismissed',
  TryGithubDismissed = 'tryGithubDismissed',
  TryInvitePeopleDismissed = 'tryInvitePeopleDismissed',
  TryRoadmapsDismissed = 'tryRoadmapsDismissed',
  TryTriageDismissed = 'tryTriageDismissed',
  UpdatedSlackThreadSyncIntegration = 'updatedSlackThreadSyncIntegration'
}

/** Operations that can be applied to UserFlagType. */
export enum UserFlagUpdateOperation {
  Clear = 'clear',
  Decr = 'decr',
  Incr = 'incr',
  Lock = 'lock'
}

/** A user notification subscription. */
export type UserNotificationSubscription = Entity & Node & NotificationSubscription & {
  __typename?: 'UserNotificationSubscription';
  /** Whether the subscription is active or not. */
  active: Scalars['Boolean']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of view to which the notification subscription context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The contextual custom view associated with the notification subscription. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the notification subscription. */
  cycle?: Maybe<Cycle>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The contextual initiative view associated with the notification subscription. */
  initiative?: Maybe<Initiative>;
  /** The contextual label view associated with the notification subscription. */
  label?: Maybe<IssueLabel>;
  /** The type of subscription. */
  notificationSubscriptionTypes: Array<Scalars['String']['output']>;
  /** The contextual project view associated with the notification subscription. */
  project?: Maybe<Project>;
  /** The user that subscribed to receive notifications. */
  subscriber: User;
  /** The team associated with the notification subscription. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user subscribed to. */
  user: User;
  /** The type of user view to which the notification subscription context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type UserPayload = {
  __typename?: 'UserPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The user that was created or updated. */
  user?: Maybe<User>;
};

/** The different permission roles available to users on an organization. */
export enum UserRoleType {
  Admin = 'admin',
  Guest = 'guest',
  User = 'user'
}

/** The settings of a user as a JSON object. */
export type UserSettings = Node & {
  __typename?: 'UserSettings';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Hash for the user to be used in calendar URLs. */
  calendarHash?: Maybe<Scalars['String']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The notification delivery preferences for the user. */
  notificationDeliveryPreferences: NotificationDeliveryPreferences;
  /** The notification channel settings the user has selected. */
  notificationPreferences: Scalars['JSONObject']['output'];
  /** Whether to show full user names instead of display names. */
  showFullUserNames: Scalars['Boolean']['output'];
  /** Whether this user is subscribed to changelog email or not. */
  subscribedToChangelog: Scalars['Boolean']['output'];
  /** Whether this user is subscribed to DPA emails or not. */
  subscribedToDPA: Scalars['Boolean']['output'];
  /** Whether this user is subscribed to invite accepted emails or not. */
  subscribedToInviteAccepted: Scalars['Boolean']['output'];
  /** Whether this user is subscribed to privacy and legal update emails or not. */
  subscribedToPrivacyLegalUpdates: Scalars['Boolean']['output'];
  /** Whether this user is subscribed to unread notifications reminder emails or not. */
  subscribedToUnreadNotificationsReminder: Scalars['Boolean']['output'];
  /**
   * The email types the user has unsubscribed from.
   * @deprecated Use individual subscription fields instead. This field's value is now outdated.
   */
  unsubscribedFrom: Array<Scalars['String']['output']>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The user associated with these settings. */
  user: User;
};

export type UserSettingsFlagPayload = {
  __typename?: 'UserSettingsFlagPayload';
  /** The flag key which was updated. */
  flag?: Maybe<Scalars['String']['output']>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The flag value after update. */
  value?: Maybe<Scalars['Int']['output']>;
};

export type UserSettingsFlagsResetPayload = {
  __typename?: 'UserSettingsFlagsResetPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type UserSettingsPayload = {
  __typename?: 'UserSettingsPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The user's settings. */
  userSettings: UserSettings;
};

export type UserSettingsUpdateInput = {
  /** The user's notification delivery preferences. */
  notificationDeliveryPreferences?: InputMaybe<NotificationDeliveryPreferencesInput>;
  /** The user's notification preferences. */
  notificationPreferences?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The user's settings. */
  settings?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Whether this user is subscribed to changelog email or not. */
  subscribedToChangelog?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether this user is subscribed to DPA emails or not. */
  subscribedToDPA?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether this user is subscribed to invite accepted emails or not. */
  subscribedToInviteAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether this user is subscribed to privacy and legal update emails or not. */
  subscribedToPrivacyLegalUpdates?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether this user is subscribed to email notifications reminder or not. */
  subscribedToUnreadNotificationsReminder?: InputMaybe<Scalars['Boolean']['input']>;
  /** The types of emails the user has unsubscribed from. */
  unsubscribedFrom?: InputMaybe<Array<Scalars['String']['input']>>;
  /** [Internal] The user's usage warning history. */
  usageWarningHistory?: InputMaybe<Scalars['JSONObject']['input']>;
};

export type UserUpdateInput = {
  /** Whether the user account is active. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the user account has admin privileges. */
  admin?: InputMaybe<Scalars['Boolean']['input']>;
  /** The avatar image URL of the user. */
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  /** The user description or a short bio. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Reason for deactivation. */
  disableReason?: InputMaybe<Scalars['String']['input']>;
  /** The display name of the user. */
  displayName?: InputMaybe<Scalars['String']['input']>;
  /** The name of the user. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The emoji part of the user status. */
  statusEmoji?: InputMaybe<Scalars['String']['input']>;
  /** The label part of the user status. */
  statusLabel?: InputMaybe<Scalars['String']['input']>;
  /** When the user status should be cleared. */
  statusUntilAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The local timezone of the user. */
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** View preferences. */
export type ViewPreferences = Node & {
  __typename?: 'ViewPreferences';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The view preferences */
  preferences: ViewPreferencesValues;
  /** The view preference type. */
  type: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The view type. */
  viewType: Scalars['String']['output'];
};

export type ViewPreferencesCreateInput = {
  /** The custom view these view preferences are associated with. */
  customViewId?: InputMaybe<Scalars['String']['input']>;
  /** The cycle these view preferences are associated with. */
  cycleId?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** [Internal] The initiative these view preferences are associated with. */
  initiativeId?: InputMaybe<Scalars['String']['input']>;
  /** The default parameters for the insight on that view. */
  insights?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The label these view preferences are associated with. */
  labelId?: InputMaybe<Scalars['String']['input']>;
  /** View preferences object. */
  preferences: Scalars['JSONObject']['input'];
  /** The project these view preferences are associated with. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The roadmap these view preferences are associated with. */
  roadmapId?: InputMaybe<Scalars['String']['input']>;
  /** The team these view preferences are associated with. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** The type of view preferences (either user or organization level preferences). */
  type: ViewPreferencesType;
  /** The user profile these view preferences are associated with. */
  userId?: InputMaybe<Scalars['String']['input']>;
  /** The view type of the view preferences are associated with. */
  viewType: ViewType;
};

export type ViewPreferencesPayload = {
  __typename?: 'ViewPreferencesPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The view preferences entity being mutated. */
  viewPreferences: ViewPreferences;
};

/** The type of view preferences (either user or organization level preferences). */
export enum ViewPreferencesType {
  Organization = 'organization',
  User = 'user'
}

export type ViewPreferencesUpdateInput = {
  /** The default parameters for the insight on that view. */
  insights?: InputMaybe<Scalars['JSONObject']['input']>;
  /** View preferences. */
  preferences?: InputMaybe<Scalars['JSONObject']['input']>;
};

export type ViewPreferencesValues = {
  __typename?: 'ViewPreferencesValues';
  /** The issue grouping. */
  issueGrouping?: Maybe<Scalars['String']['output']>;
  /** Whether to show completed issues. */
  showCompletedIssues?: Maybe<Scalars['String']['output']>;
  /** The issue ordering. */
  viewOrdering?: Maybe<Scalars['String']['output']>;
};

/** The client view this custom view is targeting. */
export enum ViewType {
  ActiveIssues = 'activeIssues',
  AllIssues = 'allIssues',
  Archive = 'archive',
  Backlog = 'backlog',
  Board = 'board',
  CompletedCycle = 'completedCycle',
  CustomRoadmap = 'customRoadmap',
  CustomView = 'customView',
  CustomViews = 'customViews',
  Customers = 'customers',
  Cycle = 'cycle',
  Inbox = 'inbox',
  Initiative = 'initiative',
  InitiativeOverview = 'initiativeOverview',
  Initiatives = 'initiatives',
  InitiativesCompleted = 'initiativesCompleted',
  InitiativesPlanned = 'initiativesPlanned',
  IssueIdentifiers = 'issueIdentifiers',
  Label = 'label',
  MyIssues = 'myIssues',
  MyIssuesActivity = 'myIssuesActivity',
  MyIssuesCreatedByMe = 'myIssuesCreatedByMe',
  MyIssuesSubscribedTo = 'myIssuesSubscribedTo',
  Project = 'project',
  ProjectDocuments = 'projectDocuments',
  Projects = 'projects',
  ProjectsAll = 'projectsAll',
  ProjectsBacklog = 'projectsBacklog',
  ProjectsClosed = 'projectsClosed',
  QuickView = 'quickView',
  Roadmap = 'roadmap',
  RoadmapAll = 'roadmapAll',
  RoadmapBacklog = 'roadmapBacklog',
  RoadmapClosed = 'roadmapClosed',
  Roadmaps = 'roadmaps',
  Search = 'search',
  SplitSearch = 'splitSearch',
  Teams = 'teams',
  Triage = 'triage',
  UserProfile = 'userProfile',
  UserProfileCreatedByUser = 'userProfileCreatedByUser'
}

/** A webhook used to send HTTP notifications over data updates. */
export type Webhook = Node & {
  __typename?: 'Webhook';
  /** Whether the Webhook is enabled for all public teams, including teams created after the webhook was created. */
  allPublicTeams: Scalars['Boolean']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the webhook. */
  creator?: Maybe<User>;
  /** Whether the Webhook is enabled. */
  enabled: Scalars['Boolean']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Webhook label. */
  label?: Maybe<Scalars['String']['output']>;
  /** The resource types this webhook is subscribed to. */
  resourceTypes: Array<Scalars['String']['output']>;
  /** Secret token for verifying the origin on the recipient side. */
  secret?: Maybe<Scalars['String']['output']>;
  /** The team that the webhook is associated with. If null, the webhook is associated with all public teams of the organization. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** Webhook URL. */
  url?: Maybe<Scalars['String']['output']>;
};

export type WebhookConnection = {
  __typename?: 'WebhookConnection';
  edges: Array<WebhookEdge>;
  nodes: Array<Webhook>;
  pageInfo: PageInfo;
};

export type WebhookCreateInput = {
  /** Whether this webhook is enabled for all public teams. */
  allPublicTeams?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether this webhook is enabled. */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Label for the webhook. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** List of resources the webhook should subscribe to. */
  resourceTypes: Array<Scalars['String']['input']>;
  /** A secret token used to sign the webhook payload. */
  secret?: InputMaybe<Scalars['String']['input']>;
  /** The identifier or key of the team associated with the Webhook. */
  teamId?: InputMaybe<Scalars['String']['input']>;
  /** The URL that will be called on data changes. */
  url: Scalars['String']['input'];
};

export type WebhookEdge = {
  __typename?: 'WebhookEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: Webhook;
};

/** Entity representing a webhook execution failure. */
export type WebhookFailureEvent = {
  __typename?: 'WebhookFailureEvent';
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The unique execution ID of the webhook push. This is retained between retries of the same push. */
  executionId: Scalars['String']['output'];
  /** The HTTP status code returned by the recipient. */
  httpStatus?: Maybe<Scalars['Float']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The HTTP response body returned by the recipient or error occured. */
  responseOrError?: Maybe<Scalars['String']['output']>;
  /** The URL that the webhook was trying to push to. */
  url: Scalars['String']['output'];
  /** The webhook that this failure event is associated with. */
  webhook: Webhook;
};

export type WebhookPayload = {
  __typename?: 'WebhookPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The webhook entity being mutated. */
  webhook: Webhook;
};

export type WebhookUpdateInput = {
  /** Whether this webhook is enabled. */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Label for the webhook. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** List of resources the webhook should subscribe to. */
  resourceTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** A secret token used to sign the webhook payload. */
  secret?: InputMaybe<Scalars['String']['input']>;
  /** The URL that will be called on data changes. */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** A condition to match for the workflow to be triggered. */
export type WorkflowCondition = {
  /** Trigger the workflow when an issue matches the filter. Can only be used when the trigger type is `Issue`. */
  issueFilter?: InputMaybe<IssueFilter>;
  /** Triggers the workflow when a project matches the filter. Can only be used when the trigger type is `Project`. */
  projectFilter?: InputMaybe<ProjectFilter>;
};

export type WorkflowCronJobDefinition = Node & {
  __typename?: 'WorkflowCronJobDefinition';
  /** An array of activities that will be executed as part of the workflow cron job. */
  activities: Scalars['JSONObject']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the workflow cron job. */
  creator: User;
  /** The description of the workflow cron job. */
  description?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The name of the workflow cron job. */
  name: Scalars['String']['output'];
  /** Cron schedule which is used to execute the workflow cron job. */
  schedule: Scalars['JSONObject']['output'];
  /** The sort order of the workflow cron job definition within its siblings. */
  sortOrder: Scalars['String']['output'];
  /** The team associated with the workflow cron job. */
  team: Team;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};

export type WorkflowCronJobDefinitionConnection = {
  __typename?: 'WorkflowCronJobDefinitionConnection';
  edges: Array<WorkflowCronJobDefinitionEdge>;
  nodes: Array<WorkflowCronJobDefinition>;
  pageInfo: PageInfo;
};

export type WorkflowCronJobDefinitionEdge = {
  __typename?: 'WorkflowCronJobDefinitionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: WorkflowCronJobDefinition;
};

export type WorkflowDefinition = Node & {
  __typename?: 'WorkflowDefinition';
  /** An array of activities that will be executed as part of the workflow. */
  activities: Scalars['JSONObject']['output'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The conditions that need to be match for the workflow to be triggered. */
  conditions?: Maybe<Scalars['JSONObject']['output']>;
  /** The type of view to which this workflow's context is associated with. */
  contextViewType?: Maybe<ContextViewType>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user who created the workflow. */
  creator: User;
  /** The context custom view associated with the workflow. */
  customView?: Maybe<CustomView>;
  /** The contextual cycle view associated with the workflow. */
  cycle?: Maybe<Cycle>;
  /** The description of the workflow. */
  description?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  /** The name of the group that the workflow belongs to. */
  groupName?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** The contextual label view associated with the workflow. */
  label?: Maybe<IssueLabel>;
  /** The name of the workflow. */
  name: Scalars['String']['output'];
  /** The contextual project view associated with the workflow. */
  project?: Maybe<Project>;
  /** The sort order of the workflow definition within its siblings. */
  sortOrder: Scalars['String']['output'];
  /** The team associated with the workflow. If not set, the workflow is associated with the entire organization. */
  team?: Maybe<Team>;
  /** The type of the event that triggers off the workflow. */
  trigger: WorkflowTrigger;
  /** The object type (e.g. Issue) that triggers this workflow. */
  triggerType: WorkflowTriggerType;
  /** The type of the workflow. */
  type: WorkflowType;
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
  /** The contextual user view associated with the workflow. */
  user?: Maybe<User>;
  /** The type of user view to which this workflow's context is associated with. */
  userContextViewType?: Maybe<UserContextViewType>;
};

export type WorkflowDefinitionConnection = {
  __typename?: 'WorkflowDefinitionConnection';
  edges: Array<WorkflowDefinitionEdge>;
  nodes: Array<WorkflowDefinition>;
  pageInfo: PageInfo;
};

export type WorkflowDefinitionEdge = {
  __typename?: 'WorkflowDefinitionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: WorkflowDefinition;
};

/** A state in a team workflow. */
export type WorkflowState = Node & {
  __typename?: 'WorkflowState';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The state's UI color as a HEX string. */
  color: Scalars['String']['output'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Description of the state. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID']['output'];
  /** Issues belonging in this state. */
  issues: IssueConnection;
  /** The state's name. */
  name: Scalars['String']['output'];
  /** The position of the state in the team flow. */
  position: Scalars['Float']['output'];
  /** The team to which this state belongs to. */
  team: Team;
  /** The type of the state. One of "triage", "backlog", "unstarted", "started", "completed", "canceled". */
  type: Scalars['String']['output'];
  /**
   * The last time at which the entity was meaningfully updated. This is the same as the creation time if the entity hasn't
   *     been updated after creation.
   */
  updatedAt: Scalars['DateTime']['output'];
};


/** A state in a team workflow. */
export type WorkflowStateIssuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A generic payload return from entity archive mutations. */
export type WorkflowStateArchivePayload = ArchivePayload & {
  __typename?: 'WorkflowStateArchivePayload';
  /** The archived/unarchived entity. Null if entity was deleted. */
  entity?: Maybe<WorkflowState>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
};

export type WorkflowStateConnection = {
  __typename?: 'WorkflowStateConnection';
  edges: Array<WorkflowStateEdge>;
  nodes: Array<WorkflowState>;
  pageInfo: PageInfo;
};

export type WorkflowStateCreateInput = {
  /** The color of the state. */
  color: Scalars['String']['input'];
  /** The description of the state. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The name of the state. */
  name: Scalars['String']['input'];
  /** The position of the state. */
  position?: InputMaybe<Scalars['Float']['input']>;
  /** The team associated with the state. */
  teamId: Scalars['String']['input'];
  /** The workflow type. */
  type: Scalars['String']['input'];
};

export type WorkflowStateEdge = {
  __typename?: 'WorkflowStateEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: WorkflowState;
};

/** Workflow state filtering options. */
export type WorkflowStateFilter = {
  /** Compound filters, all of which need to be matched by the workflow state. */
  and?: InputMaybe<Array<WorkflowStateFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the workflow state description. */
  description?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the workflow states issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the workflow state name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the workflow state. */
  or?: InputMaybe<Array<WorkflowStateFilter>>;
  /** Comparator for the workflow state position. */
  position?: InputMaybe<NumberComparator>;
  /** Filters that the workflow states team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the workflow state type. */
  type?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type WorkflowStatePayload = {
  __typename?: 'WorkflowStatePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float']['output'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean']['output'];
  /** The state that was created or updated. */
  workflowState: WorkflowState;
};

/** Issue workflow state sorting options. */
export type WorkflowStateSort = {
  /** Whether nulls should be sorted first or last */
  nulls?: InputMaybe<PaginationNulls>;
  /** The order for the individual sort */
  order?: InputMaybe<PaginationSortOrder>;
};

export type WorkflowStateUpdateInput = {
  /** The color of the state. */
  color?: InputMaybe<Scalars['String']['input']>;
  /** The description of the state. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name of the state. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The position of the state. */
  position?: InputMaybe<Scalars['Float']['input']>;
};

export enum WorkflowTrigger {
  EntityCreated = 'entityCreated',
  EntityCreatedOrUpdated = 'entityCreatedOrUpdated',
  EntityRemoved = 'entityRemoved',
  EntityUnarchived = 'entityUnarchived',
  EntityUpdated = 'entityUpdated'
}

export enum WorkflowTriggerType {
  Issue = 'issue',
  Project = 'project'
}

export enum WorkflowType {
  Custom = 'custom',
  Sla = 'sla',
  ViewSubscription = 'viewSubscription'
}

/** [INTERNAL] Public information of the OAuth application, plus the userIds and scopes for those users. */
export type WorkspaceAuthorizedApplication = {
  __typename?: 'WorkspaceAuthorizedApplication';
  /** OAuth application's ID. */
  appId: Scalars['String']['output'];
  /** OAuth application's client ID. */
  clientId: Scalars['String']['output'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** UserIds and membership dates of everyone who has authorized the application with the set of scopes. */
  memberships: Array<AuthMembership>;
  /** Application name. */
  name: Scalars['String']['output'];
  /** Scopes that are authorized for this application for a given user. */
  scope: Array<Scalars['String']['output']>;
  /** Total number of members that authorized the application. */
  totalMembers: Scalars['Float']['output'];
  /** Whether or not webhooks are enabled for the application. */
  webhooksEnabled: Scalars['Boolean']['output'];
};

/** Zendesk specific settings. */
export type ZendeskSettings = {
  __typename?: 'ZendeskSettings';
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: Maybe<Scalars['Boolean']['output']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the Linear bot user. */
  botUserId?: Maybe<Scalars['String']['output']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: Maybe<Scalars['Boolean']['output']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: Maybe<Scalars['Boolean']['output']>;
  /** The subdomain of the Zendesk organization being connected. */
  subdomain: Scalars['String']['output'];
  /** The URL of the connected Zendesk organization. */
  url: Scalars['String']['output'];
};

export type ZendeskSettingsInput = {
  /** Whether a ticket should be automatically reopened when its linked Linear issue is cancelled. */
  automateTicketReopeningOnCancellation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a ticket should be automatically reopened when a comment is posted on its linked Linear issue */
  automateTicketReopeningOnComment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a ticket should be automatically reopened when its linked Linear issue is completed. */
  automateTicketReopeningOnCompletion?: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the Linear bot user. */
  botUserId?: InputMaybe<Scalars['String']['input']>;
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: InputMaybe<Scalars['Boolean']['input']>;
  /** The subdomain of the Zendesk organization being connected. */
  subdomain: Scalars['String']['input'];
  /** The URL of the connected Zendesk organization. */
  url: Scalars['String']['input'];
};

export type TeamsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
}>;


export type TeamsQuery = { __typename?: 'Query', teams: { __typename?: 'TeamConnection', nodes: Array<{ __typename?: 'Team', description?: string | null, name: string, key: string, id: string }> } };

export type TeamConnectionFragment = { __typename?: 'TeamConnection', nodes: Array<{ __typename?: 'Team', description?: string | null, name: string, key: string, id: string }> };

export type TeamFragment = { __typename?: 'Team', description?: string | null, name: string, key: string, id: string };

export type User_AssignedIssuesQueryVariables = Exact<{
  id: Scalars['String']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
}>;


export type User_AssignedIssuesQuery = { __typename?: 'Query', user: { __typename?: 'User', assignedIssues: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null, project?: { __typename?: 'Project', id: string } | null, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } }> } } };

export type GetIssueQueryVariables = Exact<{
  id: Scalars['String']['input'];
  withComments: Scalars['Boolean']['input'];
  historyCount: Scalars['Int']['input'];
}>;


export type GetIssueQuery = { __typename?: 'Query', issue: { __typename?: 'Issue', archivedAt?: any | null, trashed?: boolean | null, url: string, identifier: string, createdAt: any, priorityLabel: string, previousIdentifiers: Array<string>, branchName: string, estimate?: number | null, description?: string | null, title: string, number: number, priority: number, id: string, history: { __typename?: 'IssueHistoryConnection', nodes: Array<{ __typename?: 'IssueHistory', createdAt: any, actor?: { __typename?: 'User', displayName: string } | null, fromState?: { __typename?: 'WorkflowState', id: string, name: string } | null }> }, comments?: { __typename?: 'CommentConnection', nodes: Array<{ __typename?: 'Comment', body: string, createdAt: any, user?: { __typename?: 'User', displayName: string } | null }> }, project?: { __typename?: 'Project', name: string, id: string } | null, creator?: { __typename?: 'User', id: string, displayName: string } | null, cycle?: { __typename?: 'Cycle', id: string } | null, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', name: string, color: string }> }, parent?: { __typename?: 'Issue', id: string } | null, team: { __typename?: 'Team', id: string, name: string, states: { __typename?: 'WorkflowStateConnection', nodes: Array<{ __typename?: 'WorkflowState', id: string, name: string, type: string, color: string, position: number }> } }, assignee?: { __typename?: 'User', id: string, name: string, displayName: string } | null, state: { __typename?: 'WorkflowState', id: string, name: string, type: string, color: string } } };

export type IssueConnectionFragment = { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null, project?: { __typename?: 'Project', id: string } | null, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } }> };

export type IssueFragment = { __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null, project?: { __typename?: 'Project', id: string } | null, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } };

export type GetIssueWorkflowStatesQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetIssueWorkflowStatesQuery = { __typename?: 'Query', issue: { __typename?: 'Issue', identifier: string, id: string, team: { __typename?: 'Team', id: string, name: string, states: { __typename?: 'WorkflowStateConnection', nodes: Array<{ __typename?: 'WorkflowState', id: string, name: string, type: string, color: string, position: number }> } }, assignee?: { __typename?: 'User', id: string, name: string, displayName: string } | null, state: { __typename?: 'WorkflowState', id: string, name: string, type: string, color: string } } };

export type IssuesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
}>;


export type IssuesQuery = { __typename?: 'Query', issues: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null, project?: { __typename?: 'Project', id: string } | null, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } }> } };

export type TeamIssuesQueryVariables = Exact<{
  teamId: Scalars['String']['input'];
  first: Scalars['Int']['input'];
}>;


export type TeamIssuesQuery = { __typename?: 'Query', team: { __typename?: 'Team', name: string, issues: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null, project?: { __typename?: 'Project', id: string } | null, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } }> } } };

export type StatusIssuesQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type StatusIssuesQuery = { __typename?: 'Query', workflowState: { __typename?: 'WorkflowState', issues: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null, project?: { __typename?: 'Project', id: string } | null, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } }> } } };

export type IssueSearchQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  query: Scalars['String']['input'];
}>;


export type IssueSearchQuery = { __typename?: 'Query', issueSearch: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', id: string, title: string, identifier: string }> } };

export type LabelFragment = { __typename?: 'IssueLabel', id: string, name: string, color: string, description?: string | null, createdAt: any, updatedAt: any, team?: { __typename?: 'Team', id: string, name: string } | null };

export type TeamIssueLabelsQueryVariables = Exact<{
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TeamIssueLabelsQuery = { __typename?: 'Query', issueLabels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string, description?: string | null, createdAt: any, updatedAt: any, parent?: { __typename?: 'IssueLabel', id: string, name: string, color: string, description?: string | null, createdAt: any, updatedAt: any, team?: { __typename?: 'Team', id: string, name: string } | null } | null, team?: { __typename?: 'Team', id: string, name: string } | null }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type TeamWorkflowStatesQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamWorkflowStatesQuery = { __typename?: 'Query', teams: { __typename?: 'TeamConnection', nodes: Array<{ __typename?: 'Team', id: string, name: string, key: string, states: { __typename?: 'WorkflowStateConnection', nodes: Array<{ __typename?: 'WorkflowState', id: string, name: string }> } }> } };
