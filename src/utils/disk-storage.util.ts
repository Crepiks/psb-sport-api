import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

export default diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const fileName = uuidv4();
    const extenstion = path.parse(file.originalname).ext;

    cb(null, `${fileName}${extenstion}`);
  },
});
