interface ApiConfig {
  BASE_URL: string;
}

export const API_CONFIG: ApiConfig = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
}; 