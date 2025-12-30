"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ServerStatus {
  online: boolean;
  players: number;
  loading: boolean;
}

const ServerContext = createContext<ServerStatus | undefined>(undefined);

export function ServerProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<ServerStatus>({
    online: false,
    players: 0,
    loading: true,
  });

  const fetchStatus = async () => {
    try {
      const response = await fetch("http://157.66.54.50:3001/api/status");
      const data = await response.json();
      setStatus({
        online: data.status === "online",
        players: data.players || 0,
        loading: false,
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus({ online: false, players: 0, loading: false });
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchStatus();
    const interval = setInterval(fetchStatus, 1500); // Update tiap 20 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <ServerContext.Provider value={status}>
      {children}
    </ServerContext.Provider>
  );
}

// Hook buatan sendiri agar lebih mudah dipanggil di komponen lain
export const useServer = () => {
  const context = useContext(ServerContext);
  if (!context) throw new Error("useServer harus di dalam ServerProvider");
  return context;
};