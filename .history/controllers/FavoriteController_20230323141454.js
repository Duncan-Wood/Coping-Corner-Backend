// const { Resource } = require('../models')
// const { User } = require ('../models')
const { Favorite } = require ('../models')

const GetUserFavorites = async (req, res) => {
    try {
      const favorite = await Favorite.findAll(
        { where: { user_id: req.params.user_id }, include: [{ model: Resource}], returning: true }
      )
      res.send(favorite)
    } catch (error) {
      throw error
    }
  }

  const SaveResource = async (req, res) => {
    try {
      const favorite = await Favorite.create({
        user_id: req.params.user_id,
        resource_id: req.params.resource_id
      });
  
      res.send({msg:'Resource has been added to favorites'});
    } catch (error) {
      throw error;
    }
  }
  
  const DeleteFavorite = async (req, res) => {
    try {
      await Favorite.destroy({ where: {user_id: req.params.user_id, resource_id: req.params.resource_id}} )
      res.send({ msg: 'Resource Deleted', payload: req.params.resource_id, status: 'Ok' })
    } catch (error) {
      throw error
    }
  }
  
  
module.exports = {
  SaveResource,
  GetUserFavorites,
  DeleteFavorite
}