module.exports = {
  name: "factory-example",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/factory-example",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
