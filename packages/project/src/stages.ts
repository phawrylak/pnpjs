import { jsS } from "@pnp/common";
import {
    ProjectQueryableCollection,
    ProjectQueryableInstance,
} from "./projectqueryable";
import { CommandResult } from "./types";
import { StageCustomFieldCreationInformation } from "./stagecustomfields";
import { StageDetailPageCreationInformation } from "./stagedetailpages";

/**
 * Represents a collection of workflow Stage objects
 */
export class StageCollection extends ProjectQueryableCollection {

    /**
    * Gets a workflow stage from the collection with the specified GUID
    *
    * @param id The string representation of a workflow stage GUID
    */
    public getById(id: string): Stage {
        const stage = new Stage(this);
        stage.concat(`('${id}')`);
        return stage;
    }

    /**
     * Adds the workflow stage that is specified by the StageCreationInformation object to the collection
     *
     * @param parameters The properties of the workflow stage to create
     */
    public async add(parameters: StageCreationInformation): Promise<CommandResult<Stage>> {
        const data = await this.postCore({ body: jsS(parameters) });
        return { data: data, instance: this.getById(data.Id) };
    }
}

/**
 * Represents a stage in a project workflow
 */
export class Stage extends ProjectQueryableInstance {

    /**
     * Deletes the Stage object
     */
    public delete = this._delete;
}

/**
 * Provides methods and properties that are used to create a project workflow stage
 */
export interface StageCreationInformation {

    /**
     * Gets or sets the Strategic Impact value for a project stage; for example, Read Only
     */
    behavior?: StrategicImpactBehavior;

    /**
     * Gets or sets a value that indicates whether project check in is required
     */
    checkInRequired?: boolean;

    /**
     * Gets or sets the collection of all the custom fields that have values set for the project stage
     */
    customFields?: StageCustomFieldCreationInformation[];

    /**
     * Gets or sets the stage description
     */
    description?: string;

    /**
     * Gets or sets the GUID of the project stage
     */
    id?: string;

    /**
     * Gets or sets the name of the project stage
     */
    name: string;

    /**
     * Gets or sets the GUID for the phase that contains the project stage
     */
    phaseId?: string;

    /**
     * Gets or sets a collection of project detail pages for the project stage
     */
    projectDetailPages?: StageDetailPageCreationInformation[];

    /**
     * Gets or sets the description for submit
     */
    submitDescription?: string;

    /**
     * Gets or sets the GUID for the stage workflow status project detail page
     */
    workflowStatusPageId?: string;
}

/**
 * Specifies how strategic impact values behave in a Project Server workflow stage
 */
export enum StrategicImpactBehavior {

    /**
     * The strategic impact is not specified in the stage
     */
    NotSpecified,

    /**
     * The strategic impact values are read-only
     */
    ReadOnly,

    /**
     * The strategic impact values are read/write
     */
    ReadWrite,

    /**
     * The strategic impact values are required
     */
    Required,
}
