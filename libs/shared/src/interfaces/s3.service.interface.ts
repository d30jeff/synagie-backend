export namespace S3ServiceParams {
  export namespace GetSignedUrl {
    export interface Params {
      type: string;
    }

    export interface Response {
      s3Uri: string;
      url: string;
    }
  }
}

export interface S3ServiceInterface {
  createBucket: (name: string) => Promise<void>;
  getSignedUrl: (
    params: S3ServiceParams.GetSignedUrl.Params,
  ) => Promise<S3ServiceParams.GetSignedUrl.Response>;
}
