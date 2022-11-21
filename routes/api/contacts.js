const express = require('express');
const { schemaPutContact, schemaPostContact, schemaPatchContact } = require('../../schema/schems.js');
const { validationBody } = require('../../middleware/validationBody');
const { auth } = require('../../middleware/authValidation')
const { getContactsController, getContactByIdController, postContactController, deleteContactByIdController, putContactController, patchContactController } = require('../../controllers/controllers');

const router = express.Router()

router.get('/', auth, getContactsController);

router.get('/:contactId', auth, getContactByIdController);

router.post('/', auth, validationBody(schemaPostContact), postContactController);

router.delete('/:contactId', auth, deleteContactByIdController);

router.put('/:contactId', auth, validationBody(schemaPutContact), putContactController);

router.patch('/:contactId/favorite', auth, validationBody(schemaPatchContact), patchContactController);

module.exports = router;


