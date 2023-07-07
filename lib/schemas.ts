import joi from "joi";

const schemas = {
  register: joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
    "confirm-password": joi.any().equal(joi.ref("password")).required(),
  }),
  login: joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
  }),
};

export default schemas;
