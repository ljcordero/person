export default class Person {
  public id: number = 0;
  public first_name: string = null;
  public last_name: string = null;
  public birth_date: Date = null;
  public phone_number: string = null;

  constructor(entity: Partial<Person>) {
    for (const key in entity) {
      if (this.hasOwnProperty(key)) {
        this[key] = entity[key];
      }
    }
  }
}
