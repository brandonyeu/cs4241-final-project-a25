import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import clientPromise from './db';

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async(email, password, done) => {
            try {
                const client = await clientPromise;
                const db = client.db('studi');
                const collection = db.collection('user');

                const user = await collection.findOne({ email });

                if(!user) { return done(null, false, { message: 'No account found with that email.' }); }

                const isMatch = await bcrypt.compare(password, user.password);

                if(!isMatch) { return done(null, false, { message: 'Incorrect password.' }); }

                return done(null, user);
            } catch(err) {
                return done(err);
            }
        }
    )
);

passport.serializeUser((user, done) => done(null, user.id.toString()));

passport.deserializeUser(async (id, done) => {
    try {
        const client = await clientPromise;
        const db = client.db('studi');
        const users = db.collection('user');
        const { ObjectId } = require('mongodb');

        const user = await users.findOne({ _id: new ObjectId(id) });
        done(null, user);
    } catch (err) {
        done(err);
    }
});

export default passport;