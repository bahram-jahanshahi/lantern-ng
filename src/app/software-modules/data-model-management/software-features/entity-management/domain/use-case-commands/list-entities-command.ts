import {ListCommand} from '../../../../../../core/domain/use-case/list-command';

export class ListEntitiesCommand {
  searchTitle: string;
  listCommand: ListCommand;

  constructor(searchTitle: string, listCommand: ListCommand) {
    this.searchTitle = searchTitle;
    this.listCommand = listCommand;
  }
}
