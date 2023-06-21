'use strict';

/**
 * products-by-store service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::products-by-store.products-by-store');
