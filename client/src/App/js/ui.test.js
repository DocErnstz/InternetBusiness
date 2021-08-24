import { UI } from "./ui";
import { waitFor } from "@testing-library/dom";
import { DataMessage } from "./message";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";
const ui = new UI();
const messages = [
  { name: "ernesto", message: "helloWorld" },
  { name: "ernesto", message: "helloWorld" },
];

const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
let elements;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(messages),
  })
);

describe("getMessages", () => {
  beforeEach(() => {
    fetch.mockClear();
    document.documentElement.innerHTML = html.toString();
  });

  it("stuff two elements on board", async () => {
    ui.getMessages();
    const board = document.getElementById("Board");

    expect(fetch).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(board.children.length).toBe(2));
  });
  it("stuff four elements on board", async () => {
    ui.getMessages();
    const board = document.getElementById("Board");

    expect(fetch).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(board.children.length).toBe(2));
  });
});
