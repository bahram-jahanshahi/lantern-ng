import {Entity} from '../entity';
import {ListOutcome} from '../../../../../../core/domain/use-case/list-outcome';

export class ListEntitiesOutcome {
  entities: Array<Entity>;
  listOutcome: ListOutcome;

  constructor(entities: Array<Entity>, listOutcome: ListOutcome) {
    this.entities = entities;
    this.listOutcome = listOutcome;
  }
}
