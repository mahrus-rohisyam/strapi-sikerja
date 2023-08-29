'use strict';

/**
 * bank-provider service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bank-provider.bank-provider');
