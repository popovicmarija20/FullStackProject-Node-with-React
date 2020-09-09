const passport=require('passport') //requiring the original npm passport, not the file passport.js


module.exports = app =>{
    app.get('/auth/google',passport.authenticate('google',{
        scope: ['profile','email']
    }))

    app.get('/auth/google/callback',passport.authenticate('google'))
}



