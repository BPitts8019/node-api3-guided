module.exports = () => (req, res, next) => {
   console.log(
      `${req.ip} - ${req.method} ${req.protocol} - ${req.url} - ${req.get(
         "User-Agent"
      )}`
   );
   next();
};
