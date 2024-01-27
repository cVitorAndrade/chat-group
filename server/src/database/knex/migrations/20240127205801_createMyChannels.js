/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable("my_channels", table => {
    table.increments("id");
    table.integer("user_id").references("id").inTable("users");
    table.integer("channel_id").references("id").inTable("channels");
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("my_channels");
