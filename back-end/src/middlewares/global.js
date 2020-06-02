export default function GlobalMiddleware(req, res, next) {
  console.log("MiddleWare Enabled");
  // console.log("res", res)
  console.time("Request");

  console.log(`method: ${req.method} and  URL: ${req.url}`);
  next();
  console.timeEnd("Request");

};

