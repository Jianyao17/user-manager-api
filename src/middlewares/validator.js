import { body, validationResult } from 'express-validator';

// Validation rules for user 
export const userValidationRules = () => 
[
  body('nama')
    .isString()
    .notEmpty()
    .withMessage('Nama tidak boleh kosong'),

  body('email')
    .isEmail()
    .withMessage('Format email tidak valid'),

  body('nomorTelepon')
    .isString()
    .isLength({ min: 10 }).withMessage('Nomor telepon minimal 10 karakter')
    .matches(/^[0-9]+$/).withMessage('Nomor telepon hanya boleh mengandung angka'),

  body('departemen')
    .isString()
    .notEmpty()
    .withMessage('Departemen tidak boleh kosong'),

  body('statusAktif')
    .optional()
    .isBoolean()
    .withMessage('Status aktif harus boolean'),
];

export const validate = (req, res, next) => 
{
  const errors = validationResult(req);
  if (errors.isEmpty()) 
  { return next(); }

  const extractedErrors = errors
    .array()
    .map(err => ({
      field: err.path,
      message: err.msg
    }));

  return res
    .status(400)
    .json({
      code: 400,
      message: "Validasi gagal",
      errors: extractedErrors
    });
};