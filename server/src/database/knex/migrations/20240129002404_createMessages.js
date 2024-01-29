/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable("messages", table => {
    table.increments("id");
    table.text("text");
    table.integer("user_id").references("id").inTable("users");
    table.integer("channel_id").references("id").inTable("channels");
    table.timestamp("created_at").defaultTo(knex.fn.now());
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("messages");
