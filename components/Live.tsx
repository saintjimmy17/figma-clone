import { useOthers } from "@/liveblocks.config";
import LiveCursors from "./cursor/LiveCursors";

const Live = () => {
  const others = useOthers();
  return (
    <div>
      <LiveCursors />
    </div>
  );
};

export default Live;
