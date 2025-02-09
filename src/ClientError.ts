/**
 * Models for errors being created on the client side.
 *
 * @since 1.0.0
 */

/**
 * @category models
 * @since 1.0.0
 */
export interface InvalidUrlClientError {
  _tag: "InvalidUrlClientError";
  error: unknown;
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const invalidUrlError = (error: unknown): InvalidUrlClientError => ({
  _tag: "InvalidUrlClientError",
  error,
});

/**
 * @category models
 * @since 1.0.0
 */
export interface UnexpectedClientError {
  _tag: "UnexpectedClientError";
  error: unknown;
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const unexpectedClientError = (
  error: unknown,
): UnexpectedClientError => ({
  _tag: "UnexpectedClientError",
  error,
});

/**
 * @category models
 * @since 1.0.0
 */
export interface ValidationClientError {
  _tag: "ValidationClientError";
  error: unknown;
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const validationClientError = (
  error: unknown,
): ValidationClientError => ({
  _tag: "ValidationClientError",
  error,
});

/**
 * @category models
 * @since 1.0.0
 */
export interface HttpClientError {
  _tag: "HttpClientError";
  status: number;
  error: unknown;
}

/**
 * @category constructors
 * @since 1.0.0
 */
export const httpClientError = (
  error: unknown,
  status: number,
): HttpClientError => ({ _tag: "HttpClientError", status, error });

/**
 * @category models
 * @since 1.0.0
 */
export type ClientError =
  | InvalidUrlClientError
  | HttpClientError
  | ValidationClientError
  | UnexpectedClientError;
