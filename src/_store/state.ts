export default class State {

  public error: string;
  public loading: boolean;
  public persons: any;

  constructor() {
    this.error = "";
    this.loading = false;
    this.persons = {};
  }
}