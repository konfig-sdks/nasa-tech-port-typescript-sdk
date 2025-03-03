/* tslint:disable */
/* eslint-disable */
/*
TechPort

TechPort RESTful API

The version of the OpenAPI document: 3.13.2
Contact: hq-techport@mail.nasa.gov

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ResourceApi - axios parameter creator
 * @export
 */
export const ResourceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the swagger specification for the API.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecification: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ResourceApi - functional programming interface
 * @export
 */
export const ResourceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ResourceApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the swagger specification for the API.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpecification(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSpecification(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ResourceApi - factory interface
 * @export
 */
export const ResourceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ResourceApiFp(configuration)
    return {
        /**
         * Returns the swagger specification for the API.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecification(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getSpecification(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ResourceApiGenerated - object-oriented interface
 * @export
 * @class ResourceApiGenerated
 * @extends {BaseAPI}
 */
export class ResourceApiGenerated extends BaseAPI {
    /**
     * Returns the swagger specification for the API.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResourceApiGenerated
     */
    public getSpecification(options?: AxiosRequestConfig) {
        return ResourceApiFp(this.configuration).getSpecification(options).then((request) => request(this.axios, this.basePath));
    }
}
