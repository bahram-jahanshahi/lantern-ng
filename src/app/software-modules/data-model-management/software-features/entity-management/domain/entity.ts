export class Entity {
  entityId: number;
  name: string;
  label: string;
  tableName: string;
  enabled: boolean;
  version: string;
  description: string;
  softwareID: number;

  constructor(entityId: number, name: string, label: string, tableName: string, enabled: boolean, version: string, description: string, softwareID: number) {
    this.entityId = entityId;
    this.name = name;
    this.label = label;
    this.tableName = tableName;
    this.enabled = enabled;
    this.version = version;
    this.description = description;
    this.softwareID = softwareID;
  }
}
