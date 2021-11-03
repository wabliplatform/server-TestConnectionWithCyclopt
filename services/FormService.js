/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Form } = require('../models/Form');

/**
* Creates the data
*
* form Form data to be created
* returns form
* */
const createform = ({ form }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Form(form).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* formId String the Id parameter
* no response value expected for this operation
* */
const deleteform = ({ formId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Form.findOneAndDelete({ _id:formId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllform = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({ }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* formId String the Id parameter
* returns form
* */
const getform = ({ formId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Form.findById(formId).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* formId String the Id parameter
* form Form data to be updated (optional)
* returns form
* */
const updateform = ({ formId, form }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Form.findOneAndUpdate({ _id:formId },form).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createform,
  deleteform,
  getAllform,
  getform,
  updateform,
};
