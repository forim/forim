/**
 * Copyright(c) 2016 calidion <calidion@gmail.com>
 * Apache 2.0 Licensed
 */
module.exports = {
  connection: 'default',
  identity: 'invitation',
  schema: true,
  tableName: 'invitation',
  autoUpdatedAt: false,
  attributes: {
    from: {
      model: 'user',
      required: true
    },
    email: {
      type: 'email',
      required: true
    },
    code: {
      type: 'string',
      required: true
    },
    processed: {
      type: 'boolean',
      defaultsTo: false
    },
    createdAt: {
      type: 'datetime',
      defaultsTo: Date.now
    }
  }
};
