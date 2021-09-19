import { gql } from "@apollo/client";

export const typeDefs = gql`
  directive @specifiedBy(url: String!) on SCALAR
  type AdminUser {
    id: ID!
    username: String
    firstname: String!
    lastname: String!
  }

  type Author {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String
    picture: UploadFile
    published_at: DateTime
  }

  type AuthorAggregator {
    count: Int
    totalCount: Int
  }

  type AuthorConnection {
    values: [Author]
    groupBy: AuthorGroupBy
    aggregate: AuthorAggregator
  }

  type AuthorConnection_id {
    key: ID
    connection: AuthorConnection
  }

  type AuthorConnectionCreatedAt {
    key: DateTime
    connection: AuthorConnection
  }

  type AuthorConnectionId {
    key: ID
    connection: AuthorConnection
  }

  type AuthorConnectionName {
    key: String
    connection: AuthorConnection
  }

  type AuthorConnectionPicture {
    key: ID
    connection: AuthorConnection
  }

  type AuthorConnectionPublished_at {
    key: DateTime
    connection: AuthorConnection
  }

  type AuthorConnectionUpdatedAt {
    key: DateTime
    connection: AuthorConnection
  }

  type AuthorGroupBy {
    id: [AuthorConnectionId]
    _id: [AuthorConnection_id]
    createdAt: [AuthorConnectionCreatedAt]
    updatedAt: [AuthorConnectionUpdatedAt]
    name: [AuthorConnectionName]
    picture: [AuthorConnectionPicture]
    published_at: [AuthorConnectionPublished_at]
  }

  input AuthorInput {
    name: String
    picture: ID
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  type Blog {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String
    content: String
    excerpt: String
    coverImage: UploadFile
    date: Date
    slug: String
    status: ENUM_BLOG_STATUS
    author: Author
    published_at: DateTime
  }

  type BlogAggregator {
    count: Int
    totalCount: Int
  }

  type BlogConnection {
    values: [Blog]
    groupBy: BlogGroupBy
    aggregate: BlogAggregator
  }

  type BlogConnection_id {
    key: ID
    connection: BlogConnection
  }

  type BlogConnectionAuthor {
    key: ID
    connection: BlogConnection
  }

  type BlogConnectionContent {
    key: String
    connection: BlogConnection
  }

  type BlogConnectionCoverImage {
    key: ID
    connection: BlogConnection
  }

  type BlogConnectionCreatedAt {
    key: DateTime
    connection: BlogConnection
  }

  type BlogConnectionDate {
    key: ID
    connection: BlogConnection
  }

  type BlogConnectionExcerpt {
    key: String
    connection: BlogConnection
  }

  type BlogConnectionId {
    key: ID
    connection: BlogConnection
  }

  type BlogConnectionPublished_at {
    key: DateTime
    connection: BlogConnection
  }

  type BlogConnectionSlug {
    key: String
    connection: BlogConnection
  }

  type BlogConnectionStatus {
    key: String
    connection: BlogConnection
  }

  type BlogConnectionTitle {
    key: String
    connection: BlogConnection
  }

  type BlogConnectionUpdatedAt {
    key: DateTime
    connection: BlogConnection
  }

  type BlogGroupBy {
    id: [BlogConnectionId]
    _id: [BlogConnection_id]
    createdAt: [BlogConnectionCreatedAt]
    updatedAt: [BlogConnectionUpdatedAt]
    title: [BlogConnectionTitle]
    content: [BlogConnectionContent]
    excerpt: [BlogConnectionExcerpt]
    coverImage: [BlogConnectionCoverImage]
    date: [BlogConnectionDate]
    slug: [BlogConnectionSlug]
    status: [BlogConnectionStatus]
    author: [BlogConnectionAuthor]
    published_at: [BlogConnectionPublished_at]
  }

  input BlogInput {
    title: String
    content: String
    excerpt: String
    coverImage: ID
    date: Date
    slug: String
    status: ENUM_BLOG_STATUS
    author: ID
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  input createAuthorInput {
    data: AuthorInput
  }

  type createAuthorPayload {
    author: Author
  }

  input createBlogInput {
    data: BlogInput
  }

  type createBlogPayload {
    blog: Blog
  }

  input createProjectInput {
    data: ProjectInput
  }

  type createProjectPayload {
    project: Project
  }

  input createRoleInput {
    data: RoleInput
  }

  type createRolePayload {
    role: UsersPermissionsRole
  }

  input createUserInput {
    data: UserInput
  }

  type createUserPayload {
    user: UsersPermissionsUser
  }

  scalar Date

  scalar DateTime

  input deleteAuthorInput {
    where: InputID
  }

  type deleteAuthorPayload {
    author: Author
  }

  input deleteBlogInput {
    where: InputID
  }

  type deleteBlogPayload {
    blog: Blog
  }

  input deleteFileInput {
    where: InputID
  }

  type deleteFilePayload {
    file: UploadFile
  }

  input deleteProjectInput {
    where: InputID
  }

  type deleteProjectPayload {
    project: Project
  }

  input deleteRoleInput {
    where: InputID
  }

  type deleteRolePayload {
    role: UsersPermissionsRole
  }

  input deleteUserInput {
    where: InputID
  }

  type deleteUserPayload {
    user: UsersPermissionsUser
  }

  input editAuthorInput {
    name: String
    picture: ID
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input editBlogInput {
    title: String
    content: String
    excerpt: String
    coverImage: ID
    date: Date
    slug: String
    status: ENUM_BLOG_STATUS
    author: ID
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input editFileInput {
    name: String
    alternativeText: String
    caption: String
    width: Int
    height: Int
    formats: JSON
    hash: String
    ext: String
    mime: String
    size: Float
    url: String
    previewUrl: String
    provider: String
    provider_metadata: JSON
    related: [ID]
    created_by: ID
    updated_by: ID
  }

  input editProjectInput {
    title: String
    content: String
    excerpt: String
    coverImage: ID
    images: [ID]
    slug: String
    status: ENUM_PROJECT_STATUS
    author: ID
    credit: String
    links: String
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input editRoleInput {
    name: String
    description: String
    type: String
    permissions: [ID]
    users: [ID]
    created_by: ID
    updated_by: ID
  }

  input editUserInput {
    username: String
    firstName: String
    lastName: String
    email: String
    provider: String
    password: String
    resetPasswordToken: String
    confirmationToken: String
    confirmed: Boolean
    blocked: Boolean
    role: ID
    created_by: ID
    updated_by: ID
  }

  enum ENUM_BLOG_STATUS {
    draft
    published
  }

  enum ENUM_PROJECT_STATUS {
    draft
    published
  }

  input FileInfoInput {
    name: String
    alternativeText: String
    caption: String
  }

  input FileInput {
    name: String!
    alternativeText: String
    caption: String
    width: Int
    height: Int
    formats: JSON
    hash: String!
    ext: String
    mime: String!
    size: Float!
    url: String!
    previewUrl: String
    provider: String!
    provider_metadata: JSON
    related: [ID]
    created_by: ID
    updated_by: ID
  }

  input InputID {
    id: ID!
  }

  scalar JSON

  scalar Long

  union Morph =
      UsersPermissionsMe
    | UsersPermissionsMeRole
    | UsersPermissionsLoginPayload
    | UserPermissionsPasswordPayload
    | Author
    | AuthorConnection
    | AuthorAggregator
    | AuthorGroupBy
    | AuthorConnectionId
    | AuthorConnection_id
    | AuthorConnectionCreatedAt
    | AuthorConnectionUpdatedAt
    | AuthorConnectionName
    | AuthorConnectionPicture
    | AuthorConnectionPublished_at
    | createAuthorPayload
    | updateAuthorPayload
    | deleteAuthorPayload
    | Blog
    | BlogConnection
    | BlogAggregator
    | BlogGroupBy
    | BlogConnectionId
    | BlogConnection_id
    | BlogConnectionCreatedAt
    | BlogConnectionUpdatedAt
    | BlogConnectionTitle
    | BlogConnectionContent
    | BlogConnectionExcerpt
    | BlogConnectionCoverImage
    | BlogConnectionDate
    | BlogConnectionSlug
    | BlogConnectionStatus
    | BlogConnectionAuthor
    | BlogConnectionPublished_at
    | createBlogPayload
    | updateBlogPayload
    | deleteBlogPayload
    | Project
    | ProjectConnection
    | ProjectAggregator
    | ProjectGroupBy
    | ProjectConnectionId
    | ProjectConnection_id
    | ProjectConnectionCreatedAt
    | ProjectConnectionUpdatedAt
    | ProjectConnectionTitle
    | ProjectConnectionContent
    | ProjectConnectionExcerpt
    | ProjectConnectionCoverImage
    | ProjectConnectionSlug
    | ProjectConnectionStatus
    | ProjectConnectionAuthor
    | ProjectConnectionCredit
    | ProjectConnectionLinks
    | ProjectConnectionPublished_at
    | createProjectPayload
    | updateProjectPayload
    | deleteProjectPayload
    | UploadFile
    | UploadFileConnection
    | UploadFileAggregator
    | UploadFileAggregatorSum
    | UploadFileAggregatorAvg
    | UploadFileAggregatorMin
    | UploadFileAggregatorMax
    | UploadFileGroupBy
    | UploadFileConnectionId
    | UploadFileConnection_id
    | UploadFileConnectionCreatedAt
    | UploadFileConnectionUpdatedAt
    | UploadFileConnectionName
    | UploadFileConnectionAlternativeText
    | UploadFileConnectionCaption
    | UploadFileConnectionWidth
    | UploadFileConnectionHeight
    | UploadFileConnectionFormats
    | UploadFileConnectionHash
    | UploadFileConnectionExt
    | UploadFileConnectionMime
    | UploadFileConnectionSize
    | UploadFileConnectionUrl
    | UploadFileConnectionPreviewUrl
    | UploadFileConnectionProvider
    | UploadFileConnectionProvider_metadata
    | deleteFilePayload
    | UsersPermissionsPermission
    | UsersPermissionsRole
    | UsersPermissionsRoleConnection
    | UsersPermissionsRoleAggregator
    | UsersPermissionsRoleGroupBy
    | UsersPermissionsRoleConnectionId
    | UsersPermissionsRoleConnection_id
    | UsersPermissionsRoleConnectionName
    | UsersPermissionsRoleConnectionDescription
    | UsersPermissionsRoleConnectionType
    | createRolePayload
    | updateRolePayload
    | deleteRolePayload
    | UsersPermissionsUser
    | UsersPermissionsUserConnection
    | UsersPermissionsUserAggregator
    | UsersPermissionsUserGroupBy
    | UsersPermissionsUserConnectionId
    | UsersPermissionsUserConnection_id
    | UsersPermissionsUserConnectionCreatedAt
    | UsersPermissionsUserConnectionUpdatedAt
    | UsersPermissionsUserConnectionUsername
    | UsersPermissionsUserConnectionFirstName
    | UsersPermissionsUserConnectionLastName
    | UsersPermissionsUserConnectionEmail
    | UsersPermissionsUserConnectionProvider
    | UsersPermissionsUserConnectionConfirmed
    | UsersPermissionsUserConnectionBlocked
    | UsersPermissionsUserConnectionRole
    | createUserPayload
    | updateUserPayload
    | deleteUserPayload
  type Mutation {
    createAuthor(input: createAuthorInput): createAuthorPayload
    updateAuthor(input: updateAuthorInput): updateAuthorPayload
    deleteAuthor(input: deleteAuthorInput): deleteAuthorPayload
    createBlog(input: createBlogInput): createBlogPayload
    updateBlog(input: updateBlogInput): updateBlogPayload
    deleteBlog(input: deleteBlogInput): deleteBlogPayload
    createProject(input: createProjectInput): createProjectPayload
    updateProject(input: updateProjectInput): updateProjectPayload
    deleteProject(input: deleteProjectInput): deleteProjectPayload
    deleteFile(input: deleteFileInput): deleteFilePayload
    createRole(input: createRoleInput): createRolePayload
    updateRole(input: updateRoleInput): updateRolePayload
    deleteRole(input: deleteRoleInput): deleteRolePayload
    createUser(input: createUserInput): createUserPayload
    updateUser(input: updateUserInput): updateUserPayload
    deleteUser(input: deleteUserInput): deleteUserPayload
    upload(refId: ID, ref: String, field: String, source: String, file: Upload!): UploadFile!
    multipleUpload(
      refId: ID
      ref: String
      field: String
      source: String
      files: [Upload]!
    ): [UploadFile]!
    updateFileInfo(id: ID!, info: FileInfoInput!): UploadFile!
    login(input: UsersPermissionsLoginInput!): UsersPermissionsLoginPayload!
    register(input: UsersPermissionsRegisterInput!): UsersPermissionsLoginPayload!
    forgotPassword(email: String!): UserPermissionsPasswordPayload
    resetPassword(
      password: String!
      passwordConfirmation: String!
      code: String!
    ): UsersPermissionsLoginPayload
    emailConfirmation(confirmation: String!): UsersPermissionsLoginPayload
  }

  type Project {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String
    content: String
    excerpt: String
    coverImage: UploadFile
    slug: String
    status: ENUM_PROJECT_STATUS
    author: Author
    credit: String
    links: String
    published_at: DateTime
    images(sort: String, limit: Int, start: Int, where: JSON): [UploadFile]
  }

  type ProjectAggregator {
    count: Int
    totalCount: Int
  }

  type ProjectConnection {
    values: [Project]
    groupBy: ProjectGroupBy
    aggregate: ProjectAggregator
  }

  type ProjectConnection_id {
    key: ID
    connection: ProjectConnection
  }

  type ProjectConnectionAuthor {
    key: ID
    connection: ProjectConnection
  }

  type ProjectConnectionContent {
    key: String
    connection: ProjectConnection
  }

  type ProjectConnectionCoverImage {
    key: ID
    connection: ProjectConnection
  }

  type ProjectConnectionCreatedAt {
    key: DateTime
    connection: ProjectConnection
  }

  type ProjectConnectionCredit {
    key: String
    connection: ProjectConnection
  }

  type ProjectConnectionExcerpt {
    key: String
    connection: ProjectConnection
  }

  type ProjectConnectionId {
    key: ID
    connection: ProjectConnection
  }

  type ProjectConnectionLinks {
    key: String
    connection: ProjectConnection
  }

  type ProjectConnectionPublished_at {
    key: DateTime
    connection: ProjectConnection
  }

  type ProjectConnectionSlug {
    key: String
    connection: ProjectConnection
  }

  type ProjectConnectionStatus {
    key: String
    connection: ProjectConnection
  }

  type ProjectConnectionTitle {
    key: String
    connection: ProjectConnection
  }

  type ProjectConnectionUpdatedAt {
    key: DateTime
    connection: ProjectConnection
  }

  type ProjectGroupBy {
    id: [ProjectConnectionId]
    _id: [ProjectConnection_id]
    createdAt: [ProjectConnectionCreatedAt]
    updatedAt: [ProjectConnectionUpdatedAt]
    title: [ProjectConnectionTitle]
    content: [ProjectConnectionContent]
    excerpt: [ProjectConnectionExcerpt]
    coverImage: [ProjectConnectionCoverImage]
    slug: [ProjectConnectionSlug]
    status: [ProjectConnectionStatus]
    author: [ProjectConnectionAuthor]
    credit: [ProjectConnectionCredit]
    links: [ProjectConnectionLinks]
    published_at: [ProjectConnectionPublished_at]
  }

  input ProjectInput {
    title: String
    content: String
    excerpt: String
    coverImage: ID
    images: [ID]
    slug: String
    status: ENUM_PROJECT_STATUS
    author: ID
    credit: String
    links: String
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  enum PublicationState {
    LIVE
    PREVIEW
  }

  type Query {
    author(id: ID!, publicationState: PublicationState): Author
    authors(
      sort: String
      limit: Int
      start: Int
      where: JSON
      publicationState: PublicationState
    ): [Author]
    authorsConnection(sort: String, limit: Int, start: Int, where: JSON): AuthorConnection
    blog(id: ID!, publicationState: PublicationState): Blog
    blogs(
      sort: String
      limit: Int
      start: Int
      where: JSON
      publicationState: PublicationState
    ): [Blog]
    blogsConnection(sort: String, limit: Int, start: Int, where: JSON): BlogConnection
    project(id: ID!, publicationState: PublicationState): Project
    projects(
      sort: String
      limit: Int
      start: Int
      where: JSON
      publicationState: PublicationState
    ): [Project]
    projectsConnection(sort: String, limit: Int, start: Int, where: JSON): ProjectConnection
    files(
      sort: String
      limit: Int
      start: Int
      where: JSON
      publicationState: PublicationState
    ): [UploadFile]
    filesConnection(sort: String, limit: Int, start: Int, where: JSON): UploadFileConnection
    role(id: ID!, publicationState: PublicationState): UsersPermissionsRole
    roles(
      sort: String
      limit: Int
      start: Int
      where: JSON
      publicationState: PublicationState
    ): [UsersPermissionsRole]
    rolesConnection(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): UsersPermissionsRoleConnection
    user(id: ID!, publicationState: PublicationState): UsersPermissionsUser
    users(
      sort: String
      limit: Int
      start: Int
      where: JSON
      publicationState: PublicationState
    ): [UsersPermissionsUser]
    usersConnection(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): UsersPermissionsUserConnection
    me: UsersPermissionsMe
  }

  input RoleInput {
    name: String!
    description: String
    type: String
    permissions: [ID]
    users: [ID]
    created_by: ID
    updated_by: ID
  }

  scalar Time

  input updateAuthorInput {
    where: InputID
    data: editAuthorInput
  }

  type updateAuthorPayload {
    author: Author
  }

  input updateBlogInput {
    where: InputID
    data: editBlogInput
  }

  type updateBlogPayload {
    blog: Blog
  }

  input updateProjectInput {
    where: InputID
    data: editProjectInput
  }

  type updateProjectPayload {
    project: Project
  }

  input updateRoleInput {
    where: InputID
    data: editRoleInput
  }

  type updateRolePayload {
    role: UsersPermissionsRole
  }

  input updateUserInput {
    where: InputID
    data: editUserInput
  }

  type updateUserPayload {
    user: UsersPermissionsUser
  }

  scalar Upload

  type UploadFile {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    alternativeText: String
    caption: String
    width: Int
    height: Int
    formats: JSON
    hash: String!
    ext: String
    mime: String!
    size: Float!
    url: String!
    previewUrl: String
    provider: String!
    provider_metadata: JSON
    related(sort: String, limit: Int, start: Int, where: JSON): [Morph]
  }

  type UploadFileAggregator {
    count: Int
    totalCount: Int
    sum: UploadFileAggregatorSum
    avg: UploadFileAggregatorAvg
    min: UploadFileAggregatorMin
    max: UploadFileAggregatorMax
  }

  type UploadFileAggregatorAvg {
    width: Float
    height: Float
    size: Float
  }

  type UploadFileAggregatorMax {
    width: Float
    height: Float
    size: Float
  }

  type UploadFileAggregatorMin {
    width: Float
    height: Float
    size: Float
  }

  type UploadFileAggregatorSum {
    width: Float
    height: Float
    size: Float
  }

  type UploadFileConnection {
    values: [UploadFile]
    groupBy: UploadFileGroupBy
    aggregate: UploadFileAggregator
  }

  type UploadFileConnection_id {
    key: ID
    connection: UploadFileConnection
  }

  type UploadFileConnectionAlternativeText {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionCaption {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionCreatedAt {
    key: DateTime
    connection: UploadFileConnection
  }

  type UploadFileConnectionExt {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionFormats {
    key: JSON
    connection: UploadFileConnection
  }

  type UploadFileConnectionHash {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionHeight {
    key: Int
    connection: UploadFileConnection
  }

  type UploadFileConnectionId {
    key: ID
    connection: UploadFileConnection
  }

  type UploadFileConnectionMime {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionName {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionPreviewUrl {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionProvider {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionProvider_metadata {
    key: JSON
    connection: UploadFileConnection
  }

  type UploadFileConnectionSize {
    key: Float
    connection: UploadFileConnection
  }

  type UploadFileConnectionUpdatedAt {
    key: DateTime
    connection: UploadFileConnection
  }

  type UploadFileConnectionUrl {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionWidth {
    key: Int
    connection: UploadFileConnection
  }

  type UploadFileGroupBy {
    id: [UploadFileConnectionId]
    _id: [UploadFileConnection_id]
    createdAt: [UploadFileConnectionCreatedAt]
    updatedAt: [UploadFileConnectionUpdatedAt]
    name: [UploadFileConnectionName]
    alternativeText: [UploadFileConnectionAlternativeText]
    caption: [UploadFileConnectionCaption]
    width: [UploadFileConnectionWidth]
    height: [UploadFileConnectionHeight]
    formats: [UploadFileConnectionFormats]
    hash: [UploadFileConnectionHash]
    ext: [UploadFileConnectionExt]
    mime: [UploadFileConnectionMime]
    size: [UploadFileConnectionSize]
    url: [UploadFileConnectionUrl]
    previewUrl: [UploadFileConnectionPreviewUrl]
    provider: [UploadFileConnectionProvider]
    provider_metadata: [UploadFileConnectionProvider_metadata]
  }

  input UserInput {
    username: String!
    firstName: String!
    lastName: String!
    email: String!
    provider: String
    password: String
    resetPasswordToken: String
    confirmationToken: String
    confirmed: Boolean
    blocked: Boolean
    role: ID
    created_by: ID
    updated_by: ID
  }

  type UserPermissionsPasswordPayload {
    ok: Boolean!
  }

  input UsersPermissionsLoginInput {
    identifier: String!
    password: String!
    provider: String = "local"
  }

  type UsersPermissionsLoginPayload {
    jwt: String
    user: UsersPermissionsMe!
  }

  type UsersPermissionsMe {
    id: ID!
    username: String!
    email: String!
    confirmed: Boolean
    blocked: Boolean
    role: UsersPermissionsMeRole
  }

  type UsersPermissionsMeRole {
    id: ID!
    name: String!
    description: String
    type: String
  }

  type UsersPermissionsPermission {
    id: ID!
    _id: ID!
    type: String!
    controller: String!
    action: String!
    enabled: Boolean!
    policy: String
    role: UsersPermissionsRole
  }

  input UsersPermissionsRegisterInput {
    username: String!
    email: String!
    password: String!
  }

  type UsersPermissionsRole {
    id: ID!
    _id: ID!
    name: String!
    description: String
    type: String
    permissions(sort: String, limit: Int, start: Int, where: JSON): [UsersPermissionsPermission]
    users(sort: String, limit: Int, start: Int, where: JSON): [UsersPermissionsUser]
  }

  type UsersPermissionsRoleAggregator {
    count: Int
    totalCount: Int
  }

  type UsersPermissionsRoleConnection {
    values: [UsersPermissionsRole]
    groupBy: UsersPermissionsRoleGroupBy
    aggregate: UsersPermissionsRoleAggregator
  }

  type UsersPermissionsRoleConnection_id {
    key: ID
    connection: UsersPermissionsRoleConnection
  }

  type UsersPermissionsRoleConnectionDescription {
    key: String
    connection: UsersPermissionsRoleConnection
  }

  type UsersPermissionsRoleConnectionId {
    key: ID
    connection: UsersPermissionsRoleConnection
  }

  type UsersPermissionsRoleConnectionName {
    key: String
    connection: UsersPermissionsRoleConnection
  }

  type UsersPermissionsRoleConnectionType {
    key: String
    connection: UsersPermissionsRoleConnection
  }

  type UsersPermissionsRoleGroupBy {
    id: [UsersPermissionsRoleConnectionId]
    _id: [UsersPermissionsRoleConnection_id]
    name: [UsersPermissionsRoleConnectionName]
    description: [UsersPermissionsRoleConnectionDescription]
    type: [UsersPermissionsRoleConnectionType]
  }

  type UsersPermissionsUser {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    username: String!
    firstName: String!
    lastName: String!
    email: String!
    provider: String
    confirmed: Boolean
    blocked: Boolean
    role: UsersPermissionsRole
  }

  type UsersPermissionsUserAggregator {
    count: Int
    totalCount: Int
  }

  type UsersPermissionsUserConnection {
    values: [UsersPermissionsUser]
    groupBy: UsersPermissionsUserGroupBy
    aggregate: UsersPermissionsUserAggregator
  }

  type UsersPermissionsUserConnection_id {
    key: ID
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionBlocked {
    key: Boolean
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionConfirmed {
    key: Boolean
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionCreatedAt {
    key: DateTime
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionEmail {
    key: String
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionFirstName {
    key: String
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionId {
    key: ID
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionLastName {
    key: String
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionProvider {
    key: String
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionRole {
    key: ID
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionUpdatedAt {
    key: DateTime
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionUsername {
    key: String
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserGroupBy {
    id: [UsersPermissionsUserConnectionId]
    _id: [UsersPermissionsUserConnection_id]
    createdAt: [UsersPermissionsUserConnectionCreatedAt]
    updatedAt: [UsersPermissionsUserConnectionUpdatedAt]
    username: [UsersPermissionsUserConnectionUsername]
    firstName: [UsersPermissionsUserConnectionFirstName]
    lastName: [UsersPermissionsUserConnectionLastName]
    email: [UsersPermissionsUserConnectionEmail]
    provider: [UsersPermissionsUserConnectionProvider]
    confirmed: [UsersPermissionsUserConnectionConfirmed]
    blocked: [UsersPermissionsUserConnectionBlocked]
    role: [UsersPermissionsUserConnectionRole]
  }
`;
