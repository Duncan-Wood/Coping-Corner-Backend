const { Resource } = require("../models");
const { Favorite } = require("../models");

const GetUserFavorites = async (req, res) => {
  try {
    const favorite = await Favorite.findAll({
      where: { user_id: req.params.user_id },
        include: [{ model: Resource }],
        returning: true,
    });
    res.send(favorite);
  } catch (error) {
    throw error;
  }
};

const GetUserFavoriteMatch = async (req, res) => {
  try {
    const existingFavorite = await Favorite.findOne({
      where: {
        user_id: req.params.user_id,
        resource_id: req.params.resource_id,
      },
    });
    if (existingFavorite) {
      res.send({ msg: "Resource has already been save to favorites" });
    } else {
      res.send(null);
    }
  } catch (error) {
    throw error;
  }
};

const SaveResource = async (req, res) => {
  try {
    const existingFavorite = await Favorite.findOne({
      where: {
        user_id: req.params.user_id,
        resource_id: req.params.resource_id,
      },
    });

    if (existingFavorite) {
      return res.send({ error: "Resource has already been saved" });
    }

    const favorite = await Favorite.create({
      user_id: req.params.user_id,
      resource_id: req.params.resource_id,
    });

    res.send(favorite);
  } catch (error) {
    throw error;
  }
};

const DeleteFavorite = async (req, res) => {
  try {
    await Favorite.destroy({
      where: {
        user_id: req.params.user_id,
        resource_id: req.params.resource_id,
      },
    });
    res.send({
      msg: "Resource Deleted",
      payload: req.params.resource_id,
      status: "Ok",
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  SaveResource,
  GetUserFavorites,
  GetUserFavoriteMatch,
  DeleteFavorite,
};
