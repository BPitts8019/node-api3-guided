const hubs = require("../hubs/hubs-model");

const validateHubId = () => (req, res, next) => {
   hubs
      .findById(req.params.id)
      .then((hub) => {
         if (hub) {
            req.hub = hub;
            next();
         } else {
            res.status(404).json({ message: "Hub not found" });
         }
      })
      .catch((error) => {
         next(error);
      });
};

const validateHubData = () => (req, res, next) => {
   if (!req.body.name) {
      return res.status(400).json({ message: "Missing hub name" });
   }

   next();
};

module.exports = {
   validateHubId,
   validateHubData,
};
