import Axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

/**
 * Implements a HTTP provider using Axios for making HTTP requests.
 * It supports setting an authorization token, handling requests and responses,
 * and provides methods for common HTTP verbs (GET, POST, PUT, PATCH, DELETE).
 */
export class HttpProvider {
  protected instance: AxiosInstance;
  protected token?: string;

  constructor(baseURL: string) {
    this.instance = Axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.initializeInterceptors();
  }

  public setToken(token: string | null) {
    this.token = token ?? undefined;
  }

  public hasToken() {
    return !!this.token;
  }

  private initializeInterceptors() {
    this.instance?.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    );

    this.instance.interceptors.request.use(
      config => this.handleRequest(config),
      this.handleError,
    );
  }

  private handleRequest(config: InternalAxiosRequestConfig) {
    if (this.token) {
      config.headers.set('Authorization', `Bearer ${this.token}`);
    }

    return config;
  }

  private handleResponse({ status, data }: AxiosResponse) {
    if (status === 401) console.warn('[HttpProvider]:401', data);

    if (data?.response === 'error' || data?.response?.includes('404')) {
      // FIXME: Implement error handling class
      // Ex.: throw new ExternalApiError(data.errors[0]);
      throw data;
    }

    return data;
  }

  private handleError(error: AxiosError) {
    // eslint-disable-next-line
    // @ts-ignore
    const errorMessage = error.response?.data?.error;
    if (errorMessage) throw new Error(errorMessage);

    return Promise.reject(error);
  }

  public get<T = never>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, config);
  }

  public post<T = never>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.instance.post(url, data, config);
  }

  public put<T = never>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.instance.put(url, data, config);
  }

  public patch<T = never>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.instance.patch(url, data, config);
  }

  public delete<T = never>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.instance.delete(url, config);
  }
}
