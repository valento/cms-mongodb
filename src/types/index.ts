declare global {
    namespace NodeJS {
      interface ProcessEnv {
        CMS_PORT: string;
        CMS_DB_URI: string;
        CMS_DB_USER: string | undefined;
        CMS_DB_PASS?: string | undefined;
        PAYLOAD_SECRET: string;
        PAYLOAD_LICENSE: string | undefined;
      }
    }
  }

  export {}