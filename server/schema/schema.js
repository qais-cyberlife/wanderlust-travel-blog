const Author = require('../models/Author');
const Post = require('../models/Post');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql');
const User = require('../models/User');


const bcrypt = require('bcrypt');
const saltRounds = 10;

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    })
});

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        id: { type: GraphQLID },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return Author.findById(parent.authorId);
            }
        },
        title: { type: GraphQLString },
        publishedDate: { type: GraphQLString },
        description: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find();
            }
        },
        post: {
            type: PostType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Post.findById(args.id);
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return Author.find();
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Author.findById(args.id);
            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                username: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const author = new Author({
                    name: args.name,
                    username: args.username
                });

                return author.save();
            },
        },

        // Refrence Line 392 of the Surface Blog 
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                username: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                // TODO: 1. Check if user already exists
                // TODO: 2. Encrypt the user password using Bycrypt (done)
                // TODO: 4. Request Mongo DB

                const errorMessage = 'Incorrect Email or Password!'

                //no username found, return error
                if (!user) {
                    throw new AuthenticationError(errorMessage);
                }

                //check plain text password with hashed db password
                const validPassword =  user.checkPassword(password);

                //passwords do not match, return error
                if (!validPassword) {
                    throw new AuthenticationError(errorMessage);
                }

                //create user token
                const token = signToken(user);

                const salt = bcrypt.genSaltSync(saltRounds);
                const encryptedPassword = bcrypt.hashSync(args?.password, salt);

                const user = new User({
                    name: args.name,
                    username: args.username,
                    password: encryptedPassword
                });

                return user.save();
            },
        },


        addPost: {
            type: PostType,
            args: {
                title: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) },
                publishedDate: { type: GraphQLNonNull(GraphQLString) },
                authorId: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const post = new Post({
                    title: args.title,
                    description: args.description,
                    publishedDate: args.publishedDate,
                    authorId: args.authorId,
                });

                return post.save();
            },
        },
        deletePost: {
            type: PostType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return Post.findByIdAndRemove(args.id);
            }
        },
        updatePost: {
            type: PostType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                title: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) },
                publishedDate: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                return Post.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            title: args.title,
                            description: args.description,
                            publishedDate: args.publishedDate,
                        }
                    }
                )
            }
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})