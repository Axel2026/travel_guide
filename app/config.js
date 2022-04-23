const config = {
    port: process.env.PORT || 3001,
    databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://admin:12345@travelguide.carhy.mongodb.net/TravelGuide?authSource=admin&replicaSet=atlas-972nhy-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
