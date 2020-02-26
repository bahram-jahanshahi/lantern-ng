import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import {UseCaseOutcome} from '../../../../../core/domain/use-case/use-case-outcome';
import {ListEntitiesOutcome} from '../domain/use-case-outcomes/list-entities-outcome';
import {Entity} from '../domain/entity';
import {ListOutcome} from '../../../../../core/domain/use-case/list-outcome';
import {ListEntitiesCommand} from '../domain/use-case-commands/list-entities-command';
import {UseCaseCommand} from '../../../../../core/domain/use-case/use-case-command';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  mockEntities: Array<Entity>;

  constructor(private httpClient: HttpClient) {
    this.initData();
  }

  // List mock entities
  listMockEntities(command: UseCaseCommand<ListEntitiesCommand>): Observable<UseCaseOutcome<ListEntitiesOutcome>> {
    return new Observable<UseCaseOutcome<ListEntitiesOutcome>>((observer) => {
      observer.next(
        new UseCaseOutcome<ListEntitiesOutcome>(
          new ListEntitiesOutcome(
            this.mockEntities,
            new ListOutcome(
              this.mockEntities.length,
              command.command.listCommand.pageIndex,
              command.command.listCommand.pageSize
            )
          ),
          true,
          ''
        )
      );
    });
  }

  // Init data
  initData() {
    for (let i = 0; i < 95; i++) {
      this.mockEntities.push(
        new Entity(
          i + 1,
          'Entity' + (i + 1),
          'موجودیت شماره ' + (i + 1),
          'table_' + (i + 1),
          true,
          '1.0.0',
          'Description',
          100
        ));
    }
  }
}
