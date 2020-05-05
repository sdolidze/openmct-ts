import { MCT } from "./MCT";

type Plugin = (openmct: MCT) => void;

export interface Plugins {
  LocalStorage: Plugin;
  MyItems: Plugin;
  CouchDB: Plugin;
  Elasticsearch: Plugin;
  UTCTimeSystem: Plugin;
  LocalTimeSystem: Plugin;
  ImportExport: Plugin;
  StaticRootPlugin: Plugin;
  AutoflowView: Plugin;
  Conductor: Plugin;
  Generator: Plugin;
  ExampleImagery: Plugin;
  ImageryPlugin: Plugin;
  Plot: Plugin;
  TelemetryTable: Plugin;
  SummaryWidget: Plugin;
  TelemetryMean: Plugin;
  URLIndicator: Plugin;
  Notebook: Plugin;
  DisplayLayout: Plugin;
  FolderView: Plugin;
  Tabs: Plugin;
  FlexibleLayout: Plugin;
  LADTable: Plugin;
  Filters: Plugin;
  ObjectMigration: Plugin;
  GoToOriginalAction: Plugin;
  ClearData: Plugin;
  WebPage: Plugin;
  Espresso: Plugin;
  Maelstrom: Plugin;
  Snow: Plugin;
  Condition: Plugin;
  ConditionWidget: Plugin;
}
