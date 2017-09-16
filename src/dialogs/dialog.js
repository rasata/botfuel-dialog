const Fs = require('fs');
const _ = require('underscore');

_.templateSettings = { interpolate: /\{\{(.+?)\}\}/g };

/**
 * Dialog main class.
 */
class Dialog {
  /**
   * Constructor.
   * @param {Object} parameters the dialog parameters
   */
  constructor(config, brain, parameters) {
    console.log('Dialog.constructor', parameters);
    this.config = config;
    this.brain = brain;
    this.parameters = parameters;
  }

  /**
   * Says something.
   * @param {string} userId the user id
   * @param {string} label the template label
   * @param {Object} parameters the template parameters
   */
  text(userId, responses, label, parameters) {
    console.log('Dialog.say', userId, label, parameters);
    const templatePath = `${this.config.path}/src/views/templates/`;
    const templateName = `${templatePath}/${label}.${this.config.locale}.txt`;
    console.log('Dialog.say: templateName', templateName);
    Fs
      .readFileSync(templateName, 'utf8')
      .toString()
      .split('\n')
      .forEach((line) => {
        const payload = _.template(line)(parameters);
        if (payload !== '') {
          const response = {
            type: 'text',
            userId,
            botId: this.config.id,
            origin: 'bot',
            payload,
          };
          console.log('Dialog.say: response', response);
          responses.push(response);
        }
      });
  }
}

module.exports = Dialog;
