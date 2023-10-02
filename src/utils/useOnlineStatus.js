import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // 1.check if online
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    window /
      addEventListener("offline", () => {
        setOnlineStatus(false);
      });
  }, []);
  // 2.boolean value
  return onlineStatus;
};

export default useOnlineStatus;
