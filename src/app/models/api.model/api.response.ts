/**
 * @class Response
 * @description
 * Represents a response from the API
 * @author Alan Ray
 */

export interface ApiResponse {
    status_code: string;
    message: string;
    data: any;
    is_error: boolean;
}