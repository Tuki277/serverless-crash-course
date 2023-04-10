

const get = async (req, res, next) => {
    return res.json({ message: "get" })
}

const create = async (req, res, next) => {
    return res.json({ message: "create" })
}

const update = async (req, res, next) => {
    return res.json({ message: "update" })
}

const remove = async (req, res, next) => {
    return res.json({ message: "remove" })
}

module.exports = {
    get,
    create,
    update,
    remove
};
