const config = {
    port: process.env.PORT || 3001,
    databaseUrl: process.env.MONGODB_URI || 'mongodb://admin:12345@travelguide-shard-00-00.carhy.mongodb.net:27017,travelguide-shard-00-01.carhy.mongodb.net:27017,travelguide-shard-00-02.carhy.mongodb.net:27017/TravelGuide?replicaSet=atlas-972nhy-shard-0&ssl=true&authSource=admin',
};

export default config;
