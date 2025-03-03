/*
TechPort

TechPort RESTful API

The version of the OpenAPI document: 3.13.2
Contact: hq-techport@mail.nasa.gov

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Contact } from './contact';
import { LibraryItem } from './library-item';
import { LkuCode } from './lku-code';
import { Location } from './location';
import { Organization } from './organization';
import { Program } from './program';
import { TaxonomyNode } from './taxonomy-node';

/**
 * Top-level TechPort object representing a NASA technology project and its associated data.
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * Title of the project.
     * @type {string}
     * @memberof Project
     */
    'title'?: string;
    /**
     * A detailed description of the project.
     * @type {string}
     * @memberof Project
     */
    'description'?: string;
    /**
     * Unique identifier for the project.
     * @type {number}
     * @memberof Project
     */
    'projectId'?: number;
    /**
     * ISO 8601 full-date in the format YYYY-MM-DD describing the last time this project was updated.
     * @type {string}
     * @memberof Project
     */
    'lastUpdated'?: string;
    /**
     * Abbreviated name of the project.
     * @type {string}
     * @memberof Project
     */
    'acronym'?: string;
    /**
     * Indicates whether the project is currently active, completed, or canceled.
     * @type {string}
     * @memberof Project
     */
    'statusDescription'?: string;
    /**
     * Describes the benefits offered to NASA funded and planned missions, unfunded or planned missions, commercial space industry, and to the nation.
     * @type {string}
     * @memberof Project
     */
    'benefits'?: string;
    /**
     * The month and year the project was authorized to proceed.
     * @type {string}
     * @memberof Project
     */
    'startDateString'?: string;
    /**
     * The month and year the project is expected to complete its work.
     * @type {string}
     * @memberof Project
     */
    'endDateString'?: string;
    /**
     * The technology maturity (technology readiness level) of the project at its beginning.
     * @type {number}
     * @memberof Project
     */
    'startTrl'?: number;
    /**
     * The current technology maturity (technology readiness level) of the project.
     * @type {number}
     * @memberof Project
     */
    'currentTrl'?: number;
    /**
     * The estimated technology maturity (technology readiness level) of the project at its end.
     * @type {number}
     * @memberof Project
     */
    'endTrl'?: number;
    /**
     * List of primary taxonomy nodes (from the NASA Technology Roadmap) associated with the project.
     * @type {Array<TaxonomyNode>}
     * @memberof Project
     */
    'primaryTaxonomyNodes'?: Array<TaxonomyNode>;
    /**
     * List of additional and cross-cutting taxonomy nodes associated with the project.
     * @type {Array<TaxonomyNode>}
     * @memberof Project
     */
    'additionalTaxonomyNodes'?: Array<TaxonomyNode>;
    /**
     * List of the NASA destinations the technology on this project helps achieve.
     * @type {Array<LkuCode>}
     * @memberof Project
     */
    'destinations'?: Array<LkuCode>;
    /**
     * 
     * @type {Program}
     * @memberof Project
     */
    'program'?: Program;
    /**
     * 
     * @type {Program}
     * @memberof Project
     */
    'responsibleMd'?: Program;
    /**
     * 
     * @type {Organization}
     * @memberof Project
     */
    'leadOrganization'?: Organization;
    /**
     * The supporting organizations for this project that are conducting work on the project.
     * @type {Array<Organization>}
     * @memberof Project
     */
    'supportingOrganizations'?: Array<Organization>;
    /**
     * Other government agencies, NASA Mission Directoratres, universities, or commercial entities performing contributing resources to this project.
     * @type {Array<Organization>}
     * @memberof Project
     */
    'coFundingPartners'?: Array<Organization>;
    /**
     * States and territories with people performing work on this project.
     * @type {Array<Location>}
     * @memberof Project
     */
    'statesWithWork'?: Array<Location>;
    /**
     * Names of the Program Directors responsible for the management of this project.
     * @type {Array<Contact>}
     * @memberof Project
     */
    'programDirectors'?: Array<Contact>;
    /**
     * Names of the Program Managers responsible for the management of this project.
     * @type {Array<Contact>}
     * @memberof Project
     */
    'programManagers'?: Array<Contact>;
    /**
     * Names of the Project Managers responsible for the management of this project.
     * @type {Array<Contact>}
     * @memberof Project
     */
    'projectManagers'?: Array<Contact>;
    /**
     * Names of the Principal Investigators who are the lead scientists or engineers for this project.
     * @type {Array<Contact>}
     * @memberof Project
     */
    'principalInvestigators'?: Array<Contact>;
    /**
     * Names of the additional investigators who are scientists or engineers for this project.
     * @type {Array<Contact>}
     * @memberof Project
     */
    'coInvestigators'?: Array<Contact>;
    /**
     * The URL for the associated website.
     * @type {string}
     * @memberof Project
     */
    'website'?: string;
    /**
     * List of library items in the project library.
     * @type {Array<LibraryItem>}
     * @memberof Project
     */
    'libraryItems'?: Array<LibraryItem>;
    /**
     * List of STI DAAs in the project library.
     * @type {Array<LibraryItem>}
     * @memberof Project
     */
    'stiDaas'?: Array<LibraryItem>;
    /**
     * The project closeout summary excerpt.
     * @type {string}
     * @memberof Project
     */
    'closeoutSummary'?: string;
    /**
     * List of document files or links to the project final report closeout documentation.
     * @type {Array<LibraryItem>}
     * @memberof Project
     */
    'closeoutDocuments'?: Array<LibraryItem>;
    /**
     * 
     * @type {LibraryItem}
     * @memberof Project
     */
    'primaryImage'?: LibraryItem;
    /**
     * The number of views for the project.
     * @type {number}
     * @memberof Project
     */
    'viewCount'?: number;
}

