const { Resource } = require('../models')
const { User } = require ('../models')
const { Favorite } = require ('../models')

const GetResources = async (req, res) => {
  try {
    const resources = await Resource.findAll(
      {include: [{ model: User}]}
    )
    res.send(resources)
  } catch (error) {
    throw error
  }
}

const GetSelectedResource = async (req, res) => {
  try {
    const resourceId = req.params.resource_id
    const resource = await Resource.findByPk(resourceId,
      {include: [{ model: User}]}
    )
    res.send(resource)
  } catch (error) {
    throw error
  }
}

// const GetResourcesByFeeling = async (req, res) => {
//   try {
//     let searchMood = "feeling_"+req.params.mood
//     const resources = await Resource.findAll(
//       { where:  Resource.searchMood}
//     )
//     console.log(searchMood)
//     res.send(resources)
//   } catch (error) {
//     throw error
//   }
// }

const CreateResource = async (req, res) => {
  try {
    const resource = await Resource.create({ ...req.body })
    res.send(resource)
  } catch (error) {
    throw error
  }
}

const UpdateResource = async (req, res) => {
  try {
    const resource = await Resource.update(
      { ...req.body },
      { where: { id: req.params.resource_id }, returning: true }
    )
    res.send(resource)
  } catch (error) {
    throw error
  }
}

const DeleteResource = async (req, res) => {
  try {
    await Resource.destroy({ where: { id: req.params.resource_id } })
    res.send({ msg: 'Resource Deleted', payload: req.params.resource_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

const SaveResource = async (req, res) => {
  const { user_id, resource_id } = req.body 
  try {
    const favorite = await Favorite.create({user_id, resource_id})
    res.send({msg:'Resource favorited!'})
  } catch (error){
    throw error
  }
}

// const GetUserFavorites = async (req, res) => {
//   try {
//     const user_id = req.params.user_id;
//     const favorites = await Favorite.findAll({
//       where: { user_id: user_id },
//       include: [
//         { model: Resource },
//         { model: User },
//       ],
//     });
//     res.send(favorites);
//   } catch (error) {
//     throw error;
//   }
// }


const GetUserFavorites = async (req, res) => {
  try {
    const favorite = await Favorite.findAll(
      { where: { userId: req.params.user_id }, returning: true }
    )
    res.send(favorite)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetResources,
  GetSelectedResource,
  // GetResourcesByFeeling,
  CreateResource,
  UpdateResource,
  DeleteResource,
  SaveResource,
  GetUserFavorites

}
