export class UseCaseOutcome<T> {
  outcome: T;
  isSuccessful: boolean;
  message: string;

  constructor(outcome: T, isSuccessful: boolean, message: string) {
    this.outcome = outcome;
    this.isSuccessful = isSuccessful;
    this.message = message;
  }
}
