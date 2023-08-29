'use strict';

/**
 * strategic-plan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strategic-plan.strategic-plan');
