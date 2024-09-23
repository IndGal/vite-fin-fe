/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_BASEURL: string;
	readonly VITE_BASE_HOST: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
