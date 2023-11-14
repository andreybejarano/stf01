module.exports = (sequelize, dataTypes) => {
    let alias = 'ActorMovie'; // esto debería estar en singular
    let cols = {
        actor_id: dataTypes.BIGINT(10),
        movie_id: dataTypes.BIGINT(10)
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'actor_movie'
    }
    const ActorMovie = sequelize.define(alias, cols, config);

    return ActorMovie
};