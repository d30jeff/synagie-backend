import { ConfigService } from '@nestjs/config';

const config = new ConfigService();
export const createS3Uri = (key: string) => {
  return `s3://${config.get('S3_BUCKET')}/${key}`;
};

export const createS3Url = (uri: string) => {
  const S3_BUCKET = config.get('S3_BUCKET');
  const S3_COMPRESSED_BUCKET = config.get('S3_COMPRESSED_BUCKET');

  const key = uri.replace(`s3://${S3_BUCKET}/`, '');

  return `https://${S3_COMPRESSED_BUCKET}.s3-ap-southeast-1.amazonaws.com/${key}`;
};
