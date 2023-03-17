const { Resource } = require('../models')

const GetResources = async (req, res) => {
  try {
    const resources = await Resource.findAll()
    res.send(resources)
  } catch (error) {
    throw error
  }
}

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

module.exports = {
  GetResources,
  CreateResource,
  UpdateResource,
  DeleteResource
}
