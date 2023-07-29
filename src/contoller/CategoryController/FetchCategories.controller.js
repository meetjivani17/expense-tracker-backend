const ResponseGenratorService = require("../../services/ResponseGenrator.service");
const apiResponseHelper = require("../../utils/apiResponse.helper");
const _lang = require("../../utils/lang");
const CategoryModel = require("../../model/Category.model");

const FetchCategoriesController = [
  async (req, res) => {
    try {
      const modal = CategoryModel;
      const condition = {};
      condition["creator_id"] = mongoose.Types.ObjectId(req.user.id);
      const response = await new ResponseGenratorService(
        req,
        modal
      ).getPaginatedResponse(condition, (projection = {}));

      return apiResponseHelper.successResponseWithData(
        res,
        _lang("Categories fetched"),
        response
      );
    } catch (error) {
      console.log(error);
      return apiResponseHelper.errorResponse(res, _lang("server_error"));
    }
  },
];

module.exports = FetchCategoriesController;
