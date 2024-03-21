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
// @ts-ignore
import { Project } from '../models';
// @ts-ignore
import { ProjectFindMatchingProjectsResponseInner } from '../models';
// @ts-ignore
import { ProjectListAvailableIdsResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ProjectApi - axios parameter creator
 * @export
 */
export const ProjectApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of projects matching the search term.
         * @param {number} [projectId] The specific ID of the project requested.
         * @param {string} [searchQuery] The term on which to search. Will check all project fields for the this term.
         * @param {string} [missionDirectorate] The mission directorate acronym of the projects. Used to filter.
         * @param {string} [program] The program acronym of the projects. Used to filter.
         * @param {string} [titleSearch] The term on which to search. Will check only project titles for the this term.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findMatchingProjects: async (projectId?: number, searchQuery?: string, missionDirectorate?: string, program?: string, titleSearch?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/projects/search`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (projectId !== undefined) {
                localVarQueryParameter['projectId'] = projectId;
            }

            if (searchQuery !== undefined) {
                localVarQueryParameter['searchQuery'] = searchQuery;
            }

            if (missionDirectorate !== undefined) {
                localVarQueryParameter['missionDirectorate'] = missionDirectorate;
            }

            if (program !== undefined) {
                localVarQueryParameter['program'] = program;
            }

            if (titleSearch !== undefined) {
                localVarQueryParameter['titleSearch'] = titleSearch;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/projects/search',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns information about a specific technology project.
         * @param {number} projectId ID of project to fetch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfo: async (projectId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getInfo', 'projectId', projectId)
            const localVarPath = `/api/projects/{projectId}`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId !== undefined ? projectId : `-projectId-`)));
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
                pathTemplate: '/api/projects/{projectId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of available technology project IDs.
         * @param {string | Date} updatedSince ISO 8601 full-date in the format YYYY-MM-DD. Filters the list of available ID values by their lastUpdated parameter.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAvailableIds: async (updatedSince: string | Date, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'updatedSince' is not null or undefined
            assertParamExists('listAvailableIds', 'updatedSince', updatedSince)
            const localVarPath = `/api/projects`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (updatedSince !== undefined) {
                localVarQueryParameter['updatedSince'] = (updatedSince as any instanceof Date) ?
                    (updatedSince as any).toISOString().substr(0,10) :
                    updatedSince;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/projects',
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
 * ProjectApi - functional programming interface
 * @export
 */
export const ProjectApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProjectApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of projects matching the search term.
         * @param {ProjectApiFindMatchingProjectsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findMatchingProjects(requestParameters: ProjectApiFindMatchingProjectsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ProjectFindMatchingProjectsResponseInner>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findMatchingProjects(requestParameters.projectId, requestParameters.searchQuery, requestParameters.missionDirectorate, requestParameters.program, requestParameters.titleSearch, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns information about a specific technology project.
         * @param {ProjectApiGetInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInfo(requestParameters: ProjectApiGetInfoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInfo(requestParameters.projectId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of available technology project IDs.
         * @param {ProjectApiListAvailableIdsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAvailableIds(requestParameters: ProjectApiListAvailableIdsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectListAvailableIdsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAvailableIds(requestParameters.updatedSince, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProjectApi - factory interface
 * @export
 */
export const ProjectApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProjectApiFp(configuration)
    return {
        /**
         * Returns a list of projects matching the search term.
         * @param {ProjectApiFindMatchingProjectsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findMatchingProjects(requestParameters: ProjectApiFindMatchingProjectsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<ProjectFindMatchingProjectsResponseInner>> {
            return localVarFp.findMatchingProjects(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns information about a specific technology project.
         * @param {ProjectApiGetInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfo(requestParameters: ProjectApiGetInfoRequest, options?: AxiosRequestConfig): AxiosPromise<Project> {
            return localVarFp.getInfo(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of available technology project IDs.
         * @param {ProjectApiListAvailableIdsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAvailableIds(requestParameters: ProjectApiListAvailableIdsRequest, options?: AxiosRequestConfig): AxiosPromise<ProjectListAvailableIdsResponse> {
            return localVarFp.listAvailableIds(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for findMatchingProjects operation in ProjectApi.
 * @export
 * @interface ProjectApiFindMatchingProjectsRequest
 */
export type ProjectApiFindMatchingProjectsRequest = {
    
    /**
    * The specific ID of the project requested.
    * @type {number}
    * @memberof ProjectApiFindMatchingProjects
    */
    readonly projectId?: number
    
    /**
    * The term on which to search. Will check all project fields for the this term.
    * @type {string}
    * @memberof ProjectApiFindMatchingProjects
    */
    readonly searchQuery?: string
    
    /**
    * The mission directorate acronym of the projects. Used to filter.
    * @type {string}
    * @memberof ProjectApiFindMatchingProjects
    */
    readonly missionDirectorate?: string
    
    /**
    * The program acronym of the projects. Used to filter.
    * @type {string}
    * @memberof ProjectApiFindMatchingProjects
    */
    readonly program?: string
    
    /**
    * The term on which to search. Will check only project titles for the this term.
    * @type {string}
    * @memberof ProjectApiFindMatchingProjects
    */
    readonly titleSearch?: string
    
}

/**
 * Request parameters for getInfo operation in ProjectApi.
 * @export
 * @interface ProjectApiGetInfoRequest
 */
export type ProjectApiGetInfoRequest = {
    
    /**
    * ID of project to fetch
    * @type {number}
    * @memberof ProjectApiGetInfo
    */
    readonly projectId: number
    
}

/**
 * Request parameters for listAvailableIds operation in ProjectApi.
 * @export
 * @interface ProjectApiListAvailableIdsRequest
 */
export type ProjectApiListAvailableIdsRequest = {
    
    /**
    * ISO 8601 full-date in the format YYYY-MM-DD. Filters the list of available ID values by their lastUpdated parameter.
    * @type {string | Date}
    * @memberof ProjectApiListAvailableIds
    */
    readonly updatedSince: string | Date
    
}

/**
 * ProjectApiGenerated - object-oriented interface
 * @export
 * @class ProjectApiGenerated
 * @extends {BaseAPI}
 */
export class ProjectApiGenerated extends BaseAPI {
    /**
     * Returns a list of projects matching the search term.
     * @param {ProjectApiFindMatchingProjectsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApiGenerated
     */
    public findMatchingProjects(requestParameters: ProjectApiFindMatchingProjectsRequest = {}, options?: AxiosRequestConfig) {
        return ProjectApiFp(this.configuration).findMatchingProjects(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns information about a specific technology project.
     * @param {ProjectApiGetInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApiGenerated
     */
    public getInfo(requestParameters: ProjectApiGetInfoRequest, options?: AxiosRequestConfig) {
        return ProjectApiFp(this.configuration).getInfo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of available technology project IDs.
     * @param {ProjectApiListAvailableIdsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApiGenerated
     */
    public listAvailableIds(requestParameters: ProjectApiListAvailableIdsRequest, options?: AxiosRequestConfig) {
        return ProjectApiFp(this.configuration).listAvailableIds(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
