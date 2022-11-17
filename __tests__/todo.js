/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("Todolist Test Suite", () => {
  beforeAll(() => {
    // Seed the test data
    const today = new Date();
    const calucateOneDay = 60 * 60 * 24 * 1000;
    [
      {
        title: "To buy good for daily needs",
        completed: false,
        dueDate: new Date(
          today.getTime() - 2 * calucateOneDay
        ).toLocaleDateString("en-CA"),
      },
      {
        title: "Pay the water bills",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "complete home work",
        completed: false,
        dueDate: new Date(
          today.getTime() + 2 * calucateOneDay
        ).toLocaleDateString("en-CA"),
      },
    ].forEach(add);
  });
  test("Should add a new todo", () => {
    expect(all.length).toEqual(3);

    add({
      title: "A test item",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("Should retrieve overdue items", () => {
    expect(overdue().length).toEqual(1);
  });

  test("Should retrieve due today items", () => {
    expect(dueToday().length).toEqual(2);
  });

  test("Should retrieve due later items", () => {
    expect(dueLater().length).toEqual(1);
  });
});
