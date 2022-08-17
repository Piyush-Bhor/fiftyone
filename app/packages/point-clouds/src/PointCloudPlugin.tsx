import { PointCloud, getFilepathField } from "./PointCloud";
import {
  registerComponent,
  PluginComponentType,
  usePluginSettings,
} from "@fiftyone/plugins";

registerComponent({
  name: "PointCloud",
  component: PointCloud,
  type: PluginComponentType.Visualizer,
  activator: ({ sample, pinned }) => {
    if (!sample) return false;
    const settings = usePluginSettings("3d");
    const field = getFilepathField(sample, settings.filepathFields);

    return field !== null;
  },
});
