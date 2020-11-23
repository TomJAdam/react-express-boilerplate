import { useState, useEffect } from "react";
import axios from "axios";

export default function useAppData() {
  const [cookie, setCookie] = useState({ user: null });
  const [state, setState] = useState({
    user: {},
    gigs: [],
    categories: []
  });

  useEffect(() => {
    const promise1 = axios.get("/login").then(res => {
      setCookie({ ...res.data });
      return res.data;
    });
    const promise2 = axios.get("/api/gigs").then(res => res.data);
    const promise3 = axios.get('/api/categories').then(res => res.data);
    Promise.all([promise1, promise2, promise3]).then(res => {
      setState(prev => ({...prev, ...res[0], gigs: res[1], categories: res[2]}));
    });

    
  }, []);

  return { cookie, setCookie, state, setState };
}
