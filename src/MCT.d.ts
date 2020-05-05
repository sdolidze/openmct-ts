import { ApplicationRouter } from './ApplicationRouter';
import { BundleRegistry } from './BundleRegistry';
import { CompositionAPI } from './CompositionAPI';
import { ContextMenuAPI } from './ContextMenuAPI';
import { Editor } from './Editor';
import { EventEmitter } from './EventEmitter';
import { IndicatorAPI } from './IndicatorAPI';
import { InspectorViewRegistry } from './InspectorViewRegistry';
import { NotificationAPI } from './NotificationAPI';
import { ObjectAPI } from './ObjectAPI';
import { OverlayAPI } from './OverlayAPI';
import { Plugins } from './Plugins';
import { Selection } from './Selection';
import { TelemetryAPI } from './TelemetryAPI';
import { TimeAPI } from './TimeAPI';
import { ToolbarRegistry } from './ToolbarRegistry';
import { TypeRegistry } from './TypeRegistry';
import { ViewRegistry } from './ViewRegistry';

export class MCT extends EventEmitter {
  public _events: unknown;
  public $angular: unknown; // Angular root
  public $injector: unknown; // Angular relates
  public branding: unknown;
  public buildInfo: any;
  public composition: CompositionAPI;
  public contextMenu: ContextMenuAPI;
  public editor: Editor;
  public element: HTMLElement; // DOM element
  public indicators: IndicatorAPI;
  public inspectorViews: InspectorViewRegistry;
  public layout: unknown; // VueComponent
  public legacyBundle: unknown;
  public legacyRegistry: BundleRegistry;
  public notifications: NotificationAPI;
  public objects: ObjectAPI;
  public objectViews: ViewRegistry;
  public overlays: OverlayAPI;
  public plugins: Plugins;
  public propertyEditors: ViewRegistry;
  public router: ApplicationRouter;
  public selection: Selection;
  public telemetry: TelemetryAPI;
  public time: TimeAPI;
  public toolbars: ToolbarRegistry;
  public types: TypeRegistry;
}
