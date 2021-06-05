import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Endpoint, S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs-extra';

interface Params {
  Bucket: string;
  Key: string;
  Body: Buffer;
  ACL: 'private' | 'public-read';
}

@Injectable()
export class FileStorageService {
  s3: S3;
  bucket: string;

  constructor(private readonly configService: ConfigService) {
    const endpoint = new Endpoint(
      this.configService.get<string>('SPACES_ENDPOINT'),
    );
    const s3 = new S3({
      endpoint,
      accessKeyId: this.configService.get<string>('SPACES_KEY'),
      secretAccessKey: this.configService.get<string>('SPACES_SECRET'),
    });
    this.s3 = s3;

    const bucket = this.configService.get<string>('SPACES_NAME');
    this.bucket = bucket;
  }

  async uploadImage(filePath: string): Promise<string> {
    const fileName = uuidv4();
    const extenstion = path.parse(filePath).ext;

    const content = await fs.readFile(filePath);
    const uploadFilePath = `images/${fileName}${extenstion}`;

    const params: Params = {
      Bucket: this.bucket,
      Key: uploadFilePath,
      Body: content,
      ACL: 'public-read',
    };

    await this.uploadFile(params);

    return uploadFilePath;
  }

  private uploadFile(params: Params): Promise<void> {
    return new Promise((resolve, reject) => {
      this.s3.putObject(params, (error) => {
        if (error) {
          reject(error);
        }
        resolve();
      });
    });
  }

  deleteFile(filePath: string): Promise<void> {
    const params = {
      Bucket: this.bucket,
      Key: filePath,
    };

    return new Promise((resolve, reject) => {
      this.s3.deleteObject(params, (error) => {
        if (error) {
          reject(error);
        }
        resolve();
      });
    });
  }
}
