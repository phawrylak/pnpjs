import { ProjectQueryableInstance } from "./projectqueryable";
import { CustomFieldCollection } from "./customfields";
import { User } from "./users";

/**
 * Provides an object that keeps track of the progress of a task
 */
export class StatusTask extends ProjectQueryableInstance {

    /**
     * TODO
     */
    public get customFields(): CustomFieldCollection {
        return new CustomFieldCollection(this, "CustomFields");
    }

    /**
     * TODO
     */
    public get statusManager(): User {
        return new User(this, "StatusManager");
    }
}

/**
 * Provides property settings and methods for the creation of a status task object
 */
export interface StatusTaskCreationInformation {

    /**
     * Gets or sets the date when a task is scheduled to be completed
     */
    finish?: Date;

    /**
     * Gets or sets the GUID of the status task object
     */
    id?: string;

    /**
     * Gets or sets the name of the status task object
     */
    name?: string;

    /**
     * Gets or sets the GUID of the parent, or summary, task in a hierarchical task list
     */
    parentId?: string;

    /**
     * Gets or sets the date when work on the task is scheduled to begin
     */
    start?: Date;

    /**
     * Gets or sets the planned work for the task
     */
    work?: string;
}
