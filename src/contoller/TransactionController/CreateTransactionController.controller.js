const apiResponseHelper = require("../../utils/apiResponse.helper");
const PayloadValidatorMiddleware = require("../../middleware/PayloadValidator.middleware");
const { body, matchedData } = require("express-validator");
const _lang = require("../../utils/lang");
const TransactionModel = require("../../model/Transaction.model");

const CreateTransactionController = [
  body("description")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("name of transaction is required!")
    .trim()
    .escape(),
  body("amount")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("amount of transaction is required!")
    .trim()
    .escape(),
  body("category_id")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("catergory id of transaction is required!")
    .trim()
    .escape(),
  body("category_name")
    .notEmpty({ ignore_whitespace: true })
    .withMessage("catergory name of transaction is required!")
    .trim()
    .escape(),

  PayloadValidatorMiddleware,
  async (req, res) => {
    try {
      const { amount, description } = req.body;
      const category = {
        id: mongoose.Types.ObjectId(req.body.category_id),
        name: req.body.category_name,
      };
      data["amount"] = amount;
      data["description"] = description;
      data["category"] =  category;
      data["creator_id"] = mongoose.Types.ObjectId(req.user.id);
      await TransactionModel.create(data);
      return apiResponseHelper.successResponse(res, "transaction added");
    } catch (error) {
      console.log(error);
      return apiResponseHelper.errorResponse(res, _lang("server_error"));
    }
  },
];

module.exports = CreateTransactionController;
